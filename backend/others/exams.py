from db.models import Exam, ExamSchedule, Question, Option, Answer, Exam_Attempt, ExamMapping, Categories, ExamScheduleMapping, QuestionMapping, ExamQuestionMapping, CategoriesDepartments, CategoriesTeams, ExamsDepartments, ExamsTeams
from db.db import SQLiteDB
from others.exam_review import finalize_expired_attempts, is_after_everyone_finished_available, is_review_eligible_attempt, validate_answers
import sys
from datetime import datetime, timezone
from db.models import Institute, InstituteCampus, User
from sqlalchemy import func, or_
from sqlalchemy.orm import load_only
import random


def _to_naive_utc_datetime(val):
    if val is None:
        return None
    if isinstance(val, datetime):
        if val.tzinfo is not None:
            return val.astimezone(timezone.utc).replace(tzinfo=None)
        return val
    if isinstance(val, str):
        try:
            parsed = datetime.fromisoformat(val.replace('Z', '+00:00'))
            if parsed.tzinfo is not None:
                parsed = parsed.astimezone(timezone.utc).replace(tzinfo=None)
            return parsed
        except Exception:
            return None
    return None


def is_exam_active_or_attended(session, exam_id):
    """
    Checks if an exam has already been scheduled and is currently active or is being attended by one or more users.
    Returns True if active or attended, False otherwise.
    """
    now = datetime.utcnow()
    
    schedules = session.query(ExamSchedule).filter(
        ExamSchedule.exam_id == exam_id,
        or_(ExamSchedule.is_deleted == False, ExamSchedule.is_deleted == None, ExamSchedule.is_deleted == 0)
    ).all()
    
    if not schedules:
        return False
        
    schedule_ids = [s.schedule_id for s in schedules if s.schedule_id]
    
    # Check if attended by one or more users
    if schedule_ids:
        attempt_count = session.query(Exam_Attempt).filter(
            Exam_Attempt.schedule_id.in_(schedule_ids)
        ).count()
        if attempt_count > 0:
            return True
            
    return False



def safe_isoformat(val):
    if val is None:
        return None
    if hasattr(val, 'isoformat'):
        return val.isoformat()
    return str(val)


def safe_utc_isoformat(val):
    value = safe_isoformat(val)
    if value and not value.endswith(('Z', '+00:00')):
        # Schedule datetimes are stored as UTC; retain that timezone when serializing them.
        return f'{value}Z'
    return value

def _replace_attempt_answers(session, exam_attempt, answers):
    """Persist the latest browser answer snapshot without creating duplicates."""
    session.query(Answer).filter(Answer.attempt_id == exam_attempt.attempt_id).delete(synchronize_session=False)
    for question_id, answer_value in (answers or {}).items():
        values = answer_value if isinstance(answer_value, list) else [answer_value]
        for value in values:
            if value is None or value == '':
                continue
            is_option = isinstance(value, str) and len(value) == 36 and '-' in value
            session.add(Answer(
                user_id=exam_attempt.user_id,
                schedule_id=exam_attempt.schedule_id,
                question_id=question_id,
                attempt_id=exam_attempt.attempt_id,
                selected_option_id=value if is_option else None,
                written_answer=None if is_option else str(value)
            ))


def _category_pool_question_ids(session, category_id):
    if not category_id:
        return []
    cat = session.query(Categories).filter(
        Categories.category_id == category_id,
        or_(Categories.is_deleted == False, Categories.is_deleted == 0, Categories.is_deleted.is_(None))
    ).first()
    if not cat:
        return []
    rows = session.query(QuestionMapping.question_id).filter(
        QuestionMapping.category_id == category_id
    ).all()
    return [r.question_id for r in rows]


def _resolve_fixed_question_ids(session, category_id, number_of_questions, question_ids):
    """Resolve the fixed (non-randomized) question set for a category.

    Admin hand-picks (if any) are honored as-is. Any remaining slots up to
    number_of_questions are filled with a one-time random pick from the
    category's question bank, so every user is served the exact same set.
    """
    seen = set()
    unique_ids = []
    for qid in (question_ids or []):
        key = str(qid)
        if key not in seen:
            seen.add(key)
            unique_ids.append(qid)

    if number_of_questions and len(unique_ids) < number_of_questions:
        pool_ids = _category_pool_question_ids(session, category_id)
        remaining_pool = [qid for qid in pool_ids if str(qid) not in seen]
        needed = number_of_questions - len(unique_ids)
        if needed >= len(remaining_pool):
            unique_ids.extend(remaining_pool)
        else:
            unique_ids.extend(random.sample(remaining_pool, needed))

    return unique_ids


def ensure_exam_columns(session):
    try:
        from sqlalchemy import text
        session.execute(text("""
            IF EXISTS (
                SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS 
                WHERE TABLE_NAME = 'Exams' AND COLUMN_NAME = 'title' AND (CHARACTER_MAXIMUM_LENGTH < 255 AND CHARACTER_MAXIMUM_LENGTH > 0)
            )
            BEGIN
                ALTER TABLE Exams ALTER COLUMN title NVARCHAR(500) NOT NULL;
            END;
        """))
        session.commit()
    except Exception as e:
        session.rollback()

def add_exam(request):
    # get exam details from the request
    data = request.get_json(silent=True) or {}
    title = data.get("title")
    description = data.get("description", None)
    institute_id = data.get("institute_id")
    duration_mins = data.get("duration_minutes", 0)
    total_questions = data.get("total_questions", 0)
    pass_mark = data.get("pass_mark", 0)
    number_of_attempts = data.get("number_of_attempts", 0)

    start_time_str = data.get("start_time", None)
    end_time_str = data.get("end_time", None)
    created_by = data.get("created_by")

    if not title or not str(title).strip():
        return {"statusMessage": "Title is required", "status": False}, 400
    if not institute_id:
        return {"statusMessage": "Institute is required", "status": False}, 400

    # Convert ISO 8601 string to datetime object
    try:
        start_time = _to_naive_utc_datetime(start_time_str) if start_time_str else None
        end_time = _to_naive_utc_datetime(end_time_str) if end_time_str else None
    except Exception:
        return {"statusMessage": "Invalid exam date/time", "status": False}, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    ensure_exam_columns(session)

    try:
        add_exam = Exam(
            title=title,
            description= description,
            institute_id=institute_id,
            duration_mins=duration_mins,
            total_questions=total_questions,
            number_of_attempts=number_of_attempts,
            pass_mark= pass_mark,
            start_time=start_time,
            end_time=end_time,
            created_by=created_by
        )
        session.add(add_exam)
        session.flush()

        exam_id = str(add_exam.exam_id) if add_exam.exam_id else None

        for dept_id in data.get("departments", []):
            if dept_id and str(dept_id).upper() != 'ALL':
                session.add(ExamsDepartments(exam_id=exam_id, department_id=str(dept_id), created_by=created_by))

        for team_id in data.get("teams", []):
            if team_id and str(team_id).upper() != 'ALL':
                session.add(ExamsTeams(exam_id=exam_id, team_id=str(team_id), created_by=created_by))

        categories_list = data.get("categories",[])
        for category in categories_list:
            category_id = category.get("category_id")
            if not category_id:
                continue
            number_of_questions = category.get("questions", 0)
            randomize_questions = category.get("randomize_questions", 0)
            if randomize_questions == True:
                randomize_questions = 1
            else:
                randomize_questions = 0

            pool_count = len(_category_pool_question_ids(session, category_id))
            if number_of_questions and pool_count < number_of_questions:
                session.rollback()
                return {
                    "statusMessage": f"Question bank does not have enough questions (requested {number_of_questions}, available {pool_count})",
                    "status": False
                }, 400

            new_mapping = ExamMapping(
                exam_id=exam_id,
                category_id=category_id,
                number_of_questions=number_of_questions,
                randomize_questions=randomize_questions,
                created_by=created_by
            )
            session.add(new_mapping)
            if randomize_questions == 0:
                questions_list = _resolve_fixed_question_ids(session, category_id, number_of_questions, category.get("question_ids", []))
                for question_id in questions_list:
                    add_exam_question_mapping = ExamQuestionMapping(
                        exam_id=exam_id,
                        category_id=category_id,
                        question_id=question_id
                    )
                    session.add(add_exam_question_mapping)

        session.commit()
        json_data = {
            "statusMessage": "Exam inserted successfully",
            "status": True
        }
        return json_data, 200
    except Exception as e:
        session.rollback()
        import traceback
        traceback.print_exc()
        print(f"{e} occurred while inserting exam at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": f"Error inserting exam: {str(e)}",
            "status": False,
        }
        return json_data, 500


def update_exam(request):
    data = request.json
    exam_id = data.get('exam_id') or data.get('id')
    if not exam_id:
        return {"statusMessage": "Missing exam_id", "status": False}, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        exam = session.query(Exam).filter(Exam.exam_id == exam_id).first()
        if not exam:
            return {"statusMessage": "Exam not found", "status": False}, 404

        if is_exam_active_or_attended(session, exam_id):
            return {
                "statusMessage": "This test cannot be edited because it is currently active or is being attended by users.",
                "status": False
            }, 400

        # update scalar fields
        exam.title = data.get('title', exam.title)
        exam.description = data.get('description', exam.description)
        exam.institute_id = data.get('institute_id', exam.institute_id)
        exam.duration_mins = data.get('duration_minutes', exam.duration_mins)
        exam.total_questions = data.get('total_questions', exam.total_questions)
        exam.pass_mark = data.get('pass_mark', exam.pass_mark)
        exam.number_of_attempts = data.get('number_of_attempts', exam.number_of_attempts)

        # handle optional start/end times
        start_time_str = data.get('start_time', None)
        end_time_str = data.get('end_time', None)

        # updated_by and updated_date
        exam.updated_by = data.get('updated_by', exam.updated_by)
        exam.updated_date = datetime.utcnow()
        
        if start_time_str:
            try:
                exam.start_time = _to_naive_utc_datetime(start_time_str)
            except Exception:
                pass
        if end_time_str:
            try:
                exam.end_time = _to_naive_utc_datetime(end_time_str)
            except Exception:
                pass

        # remove ExamMapping, ExamQuestionMapping, ExamsDepartments, and ExamsTeams rows for this exam
        session.query(ExamMapping).filter(ExamMapping.exam_id == exam_id).delete(synchronize_session=False)
        session.query(ExamQuestionMapping).filter(ExamQuestionMapping.exam_id == exam_id).delete(synchronize_session=False)
        session.query(ExamsDepartments).filter(ExamsDepartments.exam_id == exam_id).delete(synchronize_session=False)
        session.query(ExamsTeams).filter(ExamsTeams.exam_id == exam_id).delete(synchronize_session=False)

        updated_by_user = data.get('updated_by')
        for dept_id in data.get("departments", []):
            if dept_id and str(dept_id).upper() != 'ALL':
                session.add(ExamsDepartments(exam_id=exam_id, department_id=str(dept_id), created_by=updated_by_user))

        for team_id in data.get("teams", []):
            if team_id and str(team_id).upper() != 'ALL':
                session.add(ExamsTeams(exam_id=exam_id, team_id=str(team_id), created_by=updated_by_user))

        categories_list = data.get('categories', [])
        for category in categories_list:
            category_id = category.get('category_id')
            number_of_questions = category.get('questions', 0)
            randomize_questions = category.get('randomize_questions', 0)
            if randomize_questions == True:
                randomize_questions = 1
            else:
                randomize_questions = 0

            pool_count = len(_category_pool_question_ids(session, category_id))
            if number_of_questions and pool_count < number_of_questions:
                session.rollback()
                return {
                    "statusMessage": f"Question bank does not have enough questions (requested {number_of_questions}, available {pool_count})",
                    "status": False
                }, 400

            new_mapping = ExamMapping(
                exam_id=exam_id,
                category_id=category_id,
                number_of_questions=number_of_questions,
                randomize_questions=randomize_questions
            )
            session.add(new_mapping)
            if randomize_questions == 0:
                questions_list = _resolve_fixed_question_ids(session, category_id, number_of_questions, category.get('question_ids', []))
                for question_id in questions_list:
                    add_exam_question_mapping = ExamQuestionMapping(
                        exam_id=exam_id,
                        category_id=category_id,
                        question_id=question_id
                    )
                    session.add(add_exam_question_mapping)

        session.commit()
        return {"statusMessage": "Exam updated successfully", "status": True}, 200
    except Exception as e:
        print(f"{e} occurred while updating exam at line {sys.exc_info()[-1].tb_lineno}")
        session.rollback()
        return {"statusMessage": "Error updating exam", "status": False}, 500


def delete_exam(exam_id, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    exam = session.query(Exam).filter_by(exam_id=exam_id).first()
    if not exam:
        return {"statusMessage": "Exam not found", "status": False}, 404

    try:
        # delete exam question mappings
        session.query(ExamQuestionMapping).filter_by(exam_id=exam_id).delete()
        # delete exam mappings
        session.query(ExamMapping).filter_by(exam_id=exam_id).delete()
        # delete the exam
        session.delete(exam)
        session.commit()
        return {"statusMessage": "Exam deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        print(f"{e} occurred while deleting exam at line {sys.exc_info()[-1].tb_lineno}")
        return {"statusMessage": f"Error deleting exam: {str(e)}", "status": False}, 500

def get_exam_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    try:
        filter = []
        args = getattr(request, "args", {})
        if args.get("institute_id", None):
            inst_val = str(args["institute_id"]).strip()
            if "," in inst_val:
                inst_ids = [i.strip() for i in inst_val.split(",") if i.strip()]
                filter.append(Exam.institute_id.in_(inst_ids))
            else:
                filter.append(Exam.institute_id == inst_val)
        if args.get("name", None):
            filter.append(Exam.title.ilike(f"%{args.get('name')}%"))
        if args.get("created_before", None):
            created_before = datetime.fromisoformat(args["created_before"].replace("Z", "+00:00"))
            filter.append(Exam.created_date <= created_before)
        if args.get("created_after", None):
            created_after = datetime.fromisoformat(args["created_after"].replace("Z", "+00:00"))
            filter.append(Exam.created_date >= created_after)
        created_by = args.get("created_by", None)
        if created_by:
            user = session.query(User).filter(or_(User.user_id == created_by, User.username == created_by)).first()
            if user:
                filter.append(Exam.created_by == user.user_id)
            else:
                filter.append(Exam.created_by == created_by)
        if args.get('exam_id', None):
            filter.append(Exam.exam_id == args['exam_id'])

        dept_arg = args.get("departments", None) or args.get("department", None)
        if dept_arg:
            dept_ids = [d.strip() for d in str(dept_arg).split(",") if d.strip()]
            if dept_ids:
                cat_exam_ids = [r[0] for r in session.query(ExamMapping.exam_id).join(CategoriesDepartments, CategoriesDepartments.category_id == ExamMapping.category_id).filter(CategoriesDepartments.department_id.in_(dept_ids)).all()]
                user_exam_ids = [r[0] for r in session.query(Exam.exam_id).join(User, User.user_id == Exam.created_by).filter(User.department_id.in_(dept_ids)).all()]
                sched_exam_ids = [r[0] for r in session.query(ExamSchedule.exam_id).join(ExamScheduleMapping, ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id).filter(ExamScheduleMapping.department_id.in_(dept_ids)).all()]
                matching_exam_ids = list(set(cat_exam_ids + user_exam_ids + sched_exam_ids))
                filter.append(Exam.exam_id.in_(matching_exam_ids if matching_exam_ids else ['__none__']))

        team_arg = args.get("teams", None) or args.get("team", None)
        if team_arg:
            team_ids = [t.strip() for t in str(team_arg).split(",") if t.strip()]
            if team_ids:
                cat_exam_ids = [r[0] for r in session.query(ExamMapping.exam_id).join(CategoriesTeams, CategoriesTeams.category_id == ExamMapping.category_id).filter(CategoriesTeams.team_id.in_(team_ids)).all()]
                user_exam_ids = [r[0] for r in session.query(Exam.exam_id).join(User, User.user_id == Exam.created_by).filter(User.team_id.in_(team_ids)).all()]
                sched_exam_ids = [r[0] for r in session.query(ExamSchedule.exam_id).join(ExamScheduleMapping, ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id).filter(ExamScheduleMapping.team_id.in_(team_ids)).all()]
                matching_exam_ids = list(set(cat_exam_ids + user_exam_ids + sched_exam_ids))
                filter.append(Exam.exam_id.in_(matching_exam_ids if matching_exam_ids else ['__none__']))

        campus_arg = args.get("campuses", None) or args.get("campus", None)
        if campus_arg:
            campus_ids = [c.strip() for c in str(campus_arg).split(",") if c.strip()]
            if campus_ids:
                sched_exam_ids = [
                    r[0]
                    for r in session.query(ExamSchedule.exam_id)
                    .join(
                        ExamScheduleMapping,
                        ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id,
                    )
                    .filter(ExamScheduleMapping.campus_id.in_(campus_ids))
                    .all()
                ]
                filter.append(
                    Exam.exam_id.in_(list(set(sched_exam_ids)) if sched_exam_ids else ['__none__'])
                )

        # Country/city filters come from the location hierarchy used by the institute picker.
        # Match against institute campus data first, then fall back to any text stored on Institute.
        if args.get("country", None):
            country_val = str(args.get("country")).strip().lower()
            filter.append(or_(
                InstituteCampus.country_id.ilike(country_val),
                Institute.country.ilike(f"%{country_val}%")
            ))
        if args.get("city", None):
            city_val = str(args.get("city")).strip().lower()
            filter.append(or_(
                InstituteCampus.city_name.ilike(f"%{city_val}%"),
                Institute.city.ilike(f"%{city_val}%")
            ))
        if args.get("industry", None):
            ind_val = str(args.get("industry")).strip().lower()
            filter.append(Institute.industry_type.ilike(f"%{ind_val}%"))
        if args.get("sector", None):
            sec_val = str(args.get("sector")).strip().lower()
            filter.append(Institute.industry_sector.ilike(f"%{sec_val}%"))

        # join with Institute to fetch institute details as well
        # rows = session.query(ExamScheduleMapping, ExamSchedule, Exam).join(ExamSchedule, ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id).join(Exam, ExamSchedule.exam_id == Exam.exam_id).filter(*filter).all()
        rows = session.query(Exam, Institute).join(Institute, Exam.institute_id == Institute.institute_id)
        if args.get("country", None) or args.get("city", None):
            rows = rows.outerjoin(InstituteCampus, InstituteCampus.institute_id == Institute.institute_id)
        rows = rows.filter(*filter).order_by(Exam.created_date.desc()).all()

        # keep exams as list of Exam objects for existing usage
        exams = [row[0] for row in rows]
        # map institute_id -> Institute object for later use
        institutes_by_id = {row[1].institute_id: row[1] for row in rows}
        if exams is None or len(exams) == 0:
            return {"statusMessage": "No exams found", "status": False}, 404

        exam_list = []
        for exam in exams:
            category_list = []
            mappings = session.query(ExamMapping).filter(ExamMapping.exam_id == exam.exam_id).all()
            for mapping in mappings:
                category_data = {
                "number_of_questions": mapping.number_of_questions if mapping else 0,
                "randomize_questions": True if mapping and mapping.randomize_questions == 1 else False,
                }
                category_data["category"] = {}
                categories = session.query(Categories).filter(Categories.category_id == mapping.category_id).all()
                # categories, mappings = session.query(Categories, ExamMapping).join(ExamMapping, Categories.category_id == ExamMapping.category_id).filter(ExamMapping.exam_id == exam.exam_id).all()
            
                for category in categories:
                    category_data["category"] = {
                        "category_id": category.category_id,
                        "category_name": category.name,
                        "description": category.description,
                    }
                    if mapping.randomize_questions == 0:
                        question_mappings = session.query(ExamQuestionMapping).filter(
                            ExamQuestionMapping.exam_id == exam.exam_id,
                            ExamQuestionMapping.category_id == category.category_id
                        ).all()
                        question_ids = [qm.question_id for qm in question_mappings]
                        questions = session.query(Question).filter(Question.question_id.in_(question_ids)).all()
                        category_data["questions"] = [{
                            "question_id": q.question_id,
                            "question_text": q.question_text,
                            "question_type": q.question_type,
                            "marks": q.marks
                        } for q in questions]
                    else:
                        category_data["questions"] = []
                    
                category_list.append(category_data)
            # category_list = [{"category_id": cat.category_id, "category_name": cat.name, "description": cat.description} for cat in categories]
                # get created user details
            Institute_data = session.query(Institute).filter(Institute.institute_id == exam.institute_id).first()
            created_user_name = None
            if exam.created_by:
                created_user = session.query(User).filter_by(user_id=exam.created_by).first()
                if created_user:
                    created_user_name = created_user.full_name
            # updated user details
            updated_user_name = None
            if exam.updated_by:
                updated_user = session.query(User).filter_by(user_id=exam.updated_by).first()
                if updated_user:
                    updated_user_name = updated_user.full_name

            active_or_attended = is_exam_active_or_attended(session, exam.exam_id)
            is_editable = not active_or_attended

            try:
                dept_rows = session.query(ExamsDepartments.department_id).filter(ExamsDepartments.exam_id == exam.exam_id).all()
            except Exception:
                dept_rows = []
            try:
                team_rows = session.query(ExamsTeams.team_id).filter(ExamsTeams.exam_id == exam.exam_id).all()
            except Exception:
                team_rows = []

            exam_list.append({
                "exam_id": exam.exam_id,
                "title": exam.title,
                "institute": {
                    "institute_id": exam.institute_id,
                    "institute_name": Institute_data.name if Institute_data else "",
                },
                "departments": [r[0] for r in dept_rows],
                "teams": [r[0] for r in team_rows],
                "categories": category_list,
                "description": exam.description,
                "duration_mins": exam.duration_mins,
                "total_questions": exam.total_questions,
                "number_of_attempts": exam.number_of_attempts,
                "pass_mark": exam.pass_mark,
                "published": True if exam.published == 1 else False,
                "public_access": True if exam.public_access == 1 else False,
                "start_time": safe_isoformat(exam.start_time),
                "end_time": safe_isoformat(exam.end_time),
                "created_by": created_user_name,
                "created_date": exam.created_date,
                "updated_by": updated_user_name,
                "updated_date": exam.updated_date,
                "is_editable": is_editable
            })
    # institute_id	start_time	end_time	created_by	created_date	updated_by	updated_date	published
        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error retrieving exams",
            "status": False,
        }
        return json_data, 500

def get_exam_list(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        filter = []
        args = getattr(request, "args", {})
        if args.get("institute_id", None):
            inst_val = str(args.get("institute_id")).strip()
            filter.append(or_(
                func.lower(func.cast(Exam.institute_id, String)) == inst_val.lower(),
                func.cast(Exam.institute_id, String) == inst_val,
                Exam.institute_id == None,
                Exam.institute_id == ''
            ))
        exams = session.query(Exam).filter(*filter).all()
        if exams is None or len(exams) == 0:
            return {"statusMessage": "No exams found", "status": False}, 404

        exam_list = []
        for exam in exams:
            exam_list.append({
                "id": exam.exam_id,
                "title": exam.title,
                "description": exam.description
            })

        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error retrieving exams",
            "status": False,
        }
        return json_data, 500
    
def get_user_exam_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    try:
        filter = []
        args = getattr(request, "args", {})
        conds = []
        if args.get("user_id", None):
            conds.append(ExamScheduleMapping.user_id == args["user_id"])
        if args.get("institute_id", None):
            conds.append(ExamSchedule.institute_id == args["institute_id"])
        if args.get("department_id", None):
            conds.append(ExamSchedule.department_id == args["department_id"])
        if args.get("team_id", None):
            conds.append(ExamSchedule.team_id == args["team_id"])
        # combine all provided conditions with OR (any one matching)
        if conds:
            filter.append(or_(*conds))

        # join with Institute to fetch institute details as well
        rows = session.query(ExamScheduleMapping, ExamSchedule, Exam).options(
            load_only(
                ExamSchedule.schedule_id,
                ExamSchedule.exam_id,
                ExamSchedule.title,
                ExamSchedule.institute_id,
                ExamSchedule.start_time,
                ExamSchedule.end_time,
                ExamSchedule.number_of_attempts,
                ExamSchedule.user_review,
                ExamSchedule.multiple_review,
                ExamSchedule.review_mode,
                ExamSchedule.manual_review_enabled,
                ExamSchedule.review_at,
                ExamSchedule.review_end_at,
                ExamSchedule.created_by,
                ExamSchedule.created_date,
                ExamSchedule.updated_by,
                ExamSchedule.updated_date
            )
        ).join(
            ExamSchedule,
            ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id
        ).join(
            Exam,
            ExamSchedule.exam_id == Exam.exam_id
        ).filter(
            ExamSchedule.published == 1,
            *filter
        ).all()

        # Include completed history when the schedule still exists but its
        # current user mapping was changed after this user submitted it.
        user_id = args.get('user_id', None)
        if user_id:
            returned_schedule_ids = {str(item[1].schedule_id) for item in rows}
            completed_schedule_ids = {
                str(item[0]) for item in session.query(Exam_Attempt.schedule_id).filter(
                    Exam_Attempt.user_id == user_id,
                    or_(
                        Exam_Attempt.submitted_date.isnot(None),
                        Exam_Attempt.status.in_(('submitted', 'evaluated'))
                    )
                ).distinct().all()
            }
            missing_schedule_ids = completed_schedule_ids - returned_schedule_ids
            if missing_schedule_ids:
                history_rows = session.query(ExamSchedule, Exam).options(
                    load_only(
                        ExamSchedule.schedule_id,
                        ExamSchedule.exam_id,
                        ExamSchedule.title,
                        ExamSchedule.institute_id,
                        ExamSchedule.start_time,
                        ExamSchedule.end_time,
                        ExamSchedule.number_of_attempts,
                        ExamSchedule.user_review,
                        ExamSchedule.multiple_review,
                        ExamSchedule.review_mode,
                        ExamSchedule.manual_review_enabled,
                        ExamSchedule.review_at,
                        ExamSchedule.review_end_at,
                        ExamSchedule.created_by,
                        ExamSchedule.created_date,
                        ExamSchedule.updated_by,
                        ExamSchedule.updated_date
                    )
                ).join(
                    Exam,
                    ExamSchedule.exam_id == Exam.exam_id
                ).filter(
                    # Completed attempts are student history and must remain
                    # visible even if the admin later unpublishes the schedule.
                    ExamSchedule.schedule_id.in_(missing_schedule_ids)
                ).all()
                rows.extend((None, schedule, exam) for schedule, exam in history_rows)

        # keep exams as list of Exam objects for existing usage
        Schedule_list = [row[0] for row in rows]
        schedules = [row[1] for row in rows]
        exams = [row[2] for row in rows]
        if exams is None or len(exams) == 0:
            # An empty student list is a valid result. Returning 404 makes the
            # UI preserve its previous data, leaving an unpublished Active test
            # visible until the page is recreated.
            return {
                "statusMessage": "No exams found",
                "status": True,
                "data": []
            }, 200

        scheduler_data = []
        for idx, row in enumerate(Schedule_list):
            schedule_obj = schedules[idx]
            exam_obj = exams[idx]
            # get attempt data for this user and schedule
            user_id = args.get("user_id", None)
            attempts = session.query(Exam_Attempt).filter(
                Exam_Attempt.user_id == user_id,
                Exam_Attempt.schedule_id == schedule_obj.schedule_id if schedule_obj else None
            ).all()

            if not attempts:
                user_attempt = 0
            else:
                user_attempt = len(attempts)

            # Match the attempt represented by this user's list row. These are
            # the same fields used by the Test Review dialog.
            displayed_attempt = max(
                attempts,
                key=lambda attempt: getattr(attempt, 'attempt_number', 0) or 0,
                default=None
            )
            
            no_of_attempts = schedule_obj.number_of_attempts if schedule_obj else exam_obj.number_of_attempts if exam_obj else 0

            user_review_data = schedule_obj.user_review if schedule_obj else None
            user_review = False

            # check score and feedback for last attempt
            attempts = sorted(attempts, key=lambda x: getattr(x, 'attempt_number', 0) or 0)
            last_attempt = attempts[-1] if attempts else None
            feedback = getattr(last_attempt, 'feedback', None) or getattr(last_attempt, 'result', None) if last_attempt else ''

            # if current time between start and end time, exam is active
            current_time = datetime.utcnow()
            attempted = user_attempt > 0
            expired = bool(schedule_obj.end_time and current_time > schedule_obj.end_time)
            # Finalize expired browser-abandoned attempts before calculating review eligibility.
            finalized_ids = finalize_expired_attempts(session, schedule_obj, attempts, current_time)
            for finalized_id in finalized_ids:
                validate_answers(finalized_id)
            # Review eligibility follows persisted attempt status, never the frontend Completed label.
            submitted_attempts = [attempt for attempt in attempts if is_review_eligible_attempt(attempt)]
            # Keep user completion separate from the schedule becoming expired.
            completed_by_user = bool(submitted_attempts)
            review_mode = schedule_obj.review_mode or ('instant' if user_review_data == 1 else 'no_review')
            if submitted_attempts:
                if review_mode == 'instant':
                    user_review = True
                elif review_mode == 'after_schedule_ends':
                    user_review = expired
                elif review_mode == 'after_everyone_finishes':
                    user_review = is_after_everyone_finished_available(session, schedule_obj, current_time)
                elif review_mode == 'scheduled':
                    user_review = bool(schedule_obj.review_at and current_time >= schedule_obj.review_at and (not schedule_obj.review_end_at or current_time <= schedule_obj.review_end_at))
                elif review_mode in ('manual', 'no_review'):
                    # Admin-controlled review requires both completed evaluation and the
                    # admin-controlled access gate to be enabled.
                    user_review = bool(schedule_obj.manual_review_enabled) and any(
                        attempt.status == 'evaluated' for attempt in submitted_attempts
                    )

            # The review row represents one submitted attempt. With one-time
            # review, select the newest eligible attempt that is still unseen.
            review_candidates = submitted_attempts
            if review_mode in ('manual', 'no_review'):
                review_candidates = [attempt for attempt in submitted_attempts if attempt.status == 'evaluated']
            unreviewed_attempts = [
                attempt for attempt in review_candidates
                if not getattr(attempt, 'review_opened_at', None)
            ]
            displayed_review_attempt = max(
                unreviewed_attempts if not bool(schedule_obj.multiple_review) and unreviewed_attempts else review_candidates,
                key=lambda attempt: getattr(attempt, 'attempt_number', 0) or 0,
                default=None
            )
            already_reviewed = bool(review_candidates) and not bool(unreviewed_attempts)
            if already_reviewed and not bool(schedule_obj.multiple_review):
                user_review = False

            effective_pass_mark = getattr(schedule_obj, 'pass_mark', None)
            if effective_pass_mark is None:
                effective_pass_mark = getattr(exam_obj, 'pass_mark', 0) or 0

            # Check if any attempt passed
            has_passed_attempt = any(
                str(getattr(a, 'feedback', '') or getattr(a, 'result', '')).strip().lower() in ('pass', 'passed')
                or (getattr(a, 'percentage', None) is not None and getattr(a, 'percentage', None) >= effective_pass_mark)
                for a in attempts
            )

            if schedule_obj.start_time <= current_time <= schedule_obj.end_time:
                type = 'active'
                if has_passed_attempt or str(feedback).strip().lower() in ('pass', 'passed'):
                    type = 'completed'
            elif schedule_obj.end_time and current_time > schedule_obj.end_time:
                type = 'completed'
            else:
                type = 'upcoming'
            if no_of_attempts <= user_attempt or has_passed_attempt:
                type = 'completed' # if no of attempts exceeded or user passed, move to completed

            attempts_history = []
            if attempts:
                sorted_atts = sorted(attempts, key=lambda a: getattr(a, 'attempt_number', 0) or 0)
                for att in sorted_atts:
                    att_pct = getattr(att, 'percentage', None)
                    att_score = getattr(att, 'score', None)
                    att_pass_mark = effective_pass_mark
                    raw_result = getattr(att, 'feedback', None) or getattr(att, 'result', None)
                    if raw_result and str(raw_result).strip():
                        str_res = str(raw_result).strip().lower()
                        if str_res in ('pass', 'passed'):
                            att_result = 'Passed'
                        elif str_res in ('fail', 'failed'):
                            att_result = 'Failed'
                        else:
                            att_result = str(raw_result).strip()
                    elif att_pct is not None:
                        att_result = 'Passed' if att_pct >= att_pass_mark else 'Failed'
                    elif att_score is not None and getattr(exam_obj, 'total_marks', None):
                        pct = (att_score / exam_obj.total_marks) * 100
                        att_result = 'Passed' if pct >= att_pass_mark else 'Failed'
                    else:
                        att_result = 'Submitted' if getattr(att, 'status', '') in ('submitted', 'evaluated') else 'In Progress'
                    
                    submitted_dt = getattr(att, 'submitted_date', None) or getattr(att, 'started_date', None)

                    attempts_history.append({
                        'attempt_id': str(getattr(att, 'attempt_id', '')),
                        'attempt_number': getattr(att, 'attempt_number', 1),
                        'status': getattr(att, 'status', None),
                        'score': att_score,
                        'percentage': att_pct,
                        'result': att_result,
                        'started_date': safe_utc_isoformat(getattr(att, 'started_date', None)),
                        'submitted_date': safe_utc_isoformat(submitted_dt),
                    })

            disp_raw_result = getattr(displayed_attempt, 'feedback', None) or getattr(displayed_attempt, 'result', None)
            disp_result = None
            if disp_raw_result and str(disp_raw_result).strip():
                str_disp = str(disp_raw_result).strip().lower()
                if str_disp in ('pass', 'passed'):
                    disp_result = 'Passed'
                elif str_disp in ('fail', 'failed'):
                    disp_result = 'Failed'
                else:
                    disp_result = str(disp_raw_result).strip()
            elif displayed_attempt:
                disp_pct = getattr(displayed_attempt, 'percentage', None)
                if disp_pct is not None:
                    disp_result = 'Passed' if disp_pct >= effective_pass_mark else 'Failed'

            scheduler_data.append({
                'review_available': user_review,
                'review_mode': review_mode,
                'multiple_review': bool(schedule_obj.multiple_review),
                'review_attempt_id': getattr(displayed_review_attempt, 'attempt_id', None),
                'attempted': attempted,
                'completed_by_user': completed_by_user,
                'expired': expired,
                'user_attempt': user_attempt,
                'attempts_history': attempts_history,
                # Return raw datetimes so Flask serializes them exactly like
                # the Started/Submitted values in the Test Review API.
                'user_start_time': getattr(displayed_attempt, 'started_date', None),
                'user_end_time': getattr(displayed_attempt, 'submitted_date', None),
                'user_percentage': getattr(displayed_attempt, 'percentage', None),
                'user_score': getattr(displayed_attempt, 'score', None),
                'user_result': disp_result,
                "mapping_id": getattr(row, "mapping_id", None),
                "schedule_id": getattr(schedule_obj, "schedule_id", None),
                "schedule_title": getattr(schedule_obj, "title", None),
                "institute_id": getattr(schedule_obj, "institute_id", None),
                "exam_id": getattr(exam_obj, "exam_id", None),
                "exam_title": getattr(exam_obj, "title", None),
                "duration_mins": getattr(exam_obj, "duration_mins", None),
                "total_questions": getattr(exam_obj, "total_questions", None),
                "pass_mark": effective_pass_mark,
                "number_of_attempts": getattr(schedule_obj, "number_of_attempts", None),
                "user_review" :user_review,
                "start_time": safe_utc_isoformat(getattr(schedule_obj, "start_time", getattr(exam_obj, "start_time", None))),
                "end_time": safe_utc_isoformat(getattr(schedule_obj, "end_time", getattr(exam_obj, "end_time", None))),
                "created_by": getattr(schedule_obj, "created_by", getattr(exam_obj, "created_by", None)),
                "created_date": getattr(schedule_obj, "created_date", getattr(exam_obj, "created_date", None)),
                "updated_by": getattr(schedule_obj, "updated_by", None),
                "updated_date": getattr(schedule_obj, "updated_date", None),
                "type": type
            })


            # print(getattr(schedule_obj, "schedule_id", None))
            # print(row.schedule_id)


        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": scheduler_data
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error retrieving exams",
            "status": False,
        }
        return json_data, 500

def get_exam_list(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        filter = []
        args = getattr(request, "args", {})
        if args.get("institute_id", None):
            filter.append(Exam.institute_id == args["institute_id"])
        if args.get("name", None):
            filter.append(Exam.title.ilike(f"%{args.get('name')}%"))
        if args.get("created_after", None):
            created_after = datetime.fromisoformat(args["created_after"].replace("Z", "+00:00"))
            filter.append(Exam.created_date >= created_after)
        if args.get("created_before", None):
            created_before = datetime.fromisoformat(args["created_before"].replace("Z", "+00:00"))
            filter.append(Exam.created_date <= created_before)
        if args.get("created_by", None):
            filter.append(Exam.created_by == args["created_by"])


        exams = session.query(Exam).filter(*filter).all()
        if exams is None or len(exams) == 0:
            return {"statusMessage": "No exams found", "status": False, "data": []}, 200

        exam_list = []
        for exam in exams:
            exam_list.append({
                "id": exam.exam_id,
                "title": exam.title,
                "description": exam.description,
                "total_questions": exam.total_questions,
                "pass_mark": exam.pass_mark,
                "duration_mins": exam.duration_mins
            })

        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error retrieving exams",
            "status": False,
        }
        return json_data, 500

def launch_exam_details(schedule_id, user_id):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        # An unpublished schedule must behave like a missing schedule for all
        # student-facing access, including direct launch requests.
        exam_schedule = session.query(ExamSchedule).filter(
            ExamSchedule.schedule_id == schedule_id,
            ExamSchedule.published == 1
        ).first()
        if not exam_schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404

        # get Exam details
        exam_data = session.query(Exam).filter_by(exam_id=exam_schedule.exam_id).first()

        # get ExamMapping details
        exam_mapping = session.query(ExamMapping).filter_by(exam_id=exam_schedule.exam_id).all()

        category_ids = [m.category_id for m in exam_mapping if getattr(m, "category_id", None)]


        randomized_question_ids = []
        non_randomized_question_ids = []
        
        for mapping in exam_mapping:
            if mapping.randomize_questions == 1:
                # Get random questions for this category
                all_questions = session.query(QuestionMapping.question_id).filter(
                    QuestionMapping.category_id == mapping.category_id
                ).all()
                question_ids_for_category = [q.question_id for q in all_questions]
                
                # Randomly select the specified number of questions
                if len(question_ids_for_category) >= mapping.number_of_questions:
                    selected_questions = random.sample(question_ids_for_category, mapping.number_of_questions)
                else:
                    selected_questions = question_ids_for_category  # Take all if not enough
                randomized_question_ids.extend(selected_questions)
            else:
                # Prefer the fixed questions saved with the test. Legacy tests
                # may have the category mapping but no ExamQuestionMapping rows;
                # fill those from the same category pool used when tests are
                # created so a valid test does not fail launch with a 404.
                predefined_questions = session.query(ExamQuestionMapping.question_id).filter(
                    ExamQuestionMapping.exam_id == exam_schedule.exam_id,
                    ExamQuestionMapping.category_id == mapping.category_id
                ).all()
                fixed_question_ids = [q.question_id for q in predefined_questions]
                non_randomized_question_ids.extend(_resolve_fixed_question_ids(
                    session,
                    mapping.category_id,
                    mapping.number_of_questions or len(fixed_question_ids),
                    fixed_question_ids
                ))
        
        # Combine both randomized and non-randomized questions
        question_ids = randomized_question_ids + non_randomized_question_ids

        questions = session.query(Question).filter(Question.question_id.in_(question_ids)).all()
        if not questions:
            return {"statusMessage": "No questions found for this test", "status": False}, 404

        # Only consume an attempt after the schedule and its questions have
        # passed validation. A failed launch must not increment attempt count.
        existing_attempt = session.query(Exam_Attempt).filter_by(
            schedule_id=schedule_id,
            user_id=user_id
        ).order_by(Exam_Attempt.attempt_number.desc()).first()
        attempt_number = existing_attempt.attempt_number + 1 if existing_attempt else 1
        new_attempt = Exam_Attempt(
            schedule_id=schedule_id,
            user_id=user_id,
            attempt_number=attempt_number,
            started_date=datetime.utcnow(),
            status="in_progress"
        )
        session.add(new_attempt)
        session.commit()
        # get list of question ids from question mapping
        # question_ids = []
        # for qm in question_mapping:
        #     if qm.question_id:
        #         question_ids.append(qm.question_id)


        # # fetch the exam/schedule mapping for this schedule_id
        # row = session.query(ExamSchedule, Exam, Categories, QuestionMapping) \
        #     .select_from(QuestionMapping) \
        #     .join(ExamSchedule, ExamSchedule.schedule_id == ExamSchedule.schedule_id) \
        #     .join(Exam, ExamSchedule.exam_id == Exam.exam_id) \
        #     .join(ExamMapping, Exam.exam_id == ExamMapping.exam_id) \
        #     .join(Categories, ExamMapping.category_id == Categories.category_id) \
        #     .join(QuestionMapping, Categories.category_id == QuestionMapping.category_id) \
        #     .filter(ExamSchedule.schedule_id == schedule_id) \
        #     .all()
        # if not row:
        #     return {"statusMessage": "Exam schedule mapping not found", "status": False}, 404
        # scheduler_data = row[0]  # ExamSchedule object
        # exam_data = row[1]  # Exam object
        # category_data = row[2]  # Categories object
        # question_mapping = row[3]  # QuestionMapping object

        # # get question id list from question mapping
        # question_ids = question_mapping.question_ids.split(',') if question_mapping and question_mapping.question_ids else []

        exam_detail = {        
            "exam_id": exam_data.exam_id,
            "schedule_id": schedule_id,
            "title": exam_data.title,
            "attempt_id": new_attempt.attempt_id,
            "duration_mins": exam_data.duration_mins,
            "total_questions": exam_data.total_questions}


        # get all the Questions and options for exam id
        question_list = []
        for question in questions:
            options = session.query(Option).filter_by(question_id=question.question_id).all()
            option_list = [{"id": opt.options_id, "text": opt.option_text} for opt in options]
            question_list.append({
                "question_id": question.question_id,
                "question_text": question.question_text,
                "question_type": question.question_type,
                "options": option_list if question.question_type in ['choose', 'multi'] else []
            })

        json_data = {
            "statusMessage": "Exam details retrieved successfully",
            "status": True,
            "data": {
                "exam_detail": exam_detail,
                "questions": question_list
            }
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while retrieving exam details at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error retrieving exam details",
            "status": False,
        }
        return json_data, 500

def get_active_exam_status(attempt_id, user_id):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        # Bind the lightweight publication check to the JWT-authenticated attempt owner.
        exam_attempt = session.query(Exam_Attempt).filter(
            Exam_Attempt.attempt_id == attempt_id,
            Exam_Attempt.user_id == user_id
        ).first()
        if not exam_attempt:
            return {"statusMessage": "Attempt not found", "status": False}, 404

        exam_schedule = session.query(ExamSchedule).filter_by(schedule_id=exam_attempt.schedule_id).first()
        if not exam_schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404

        finalized_ids = finalize_expired_attempts(session, exam_schedule, [exam_attempt])
        for finalized_id in finalized_ids:
            validate_answers(finalized_id)

        return {
            "statusMessage": "Exam status retrieved successfully",
            "status": True,
            "published": bool(exam_schedule.published),
            "attempt_status": exam_attempt.status
        }, 200
    except Exception as e:
        print(f"{e} occurred while retrieving active exam status at line {sys.exc_info()[-1].tb_lineno}")
        return {"statusMessage": "Error retrieving exam status", "status": False}, 500
    finally:
        session.close()


def autosave_exam_answers(data, authenticated_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    try:
        attempt = session.query(Exam_Attempt).filter_by(attempt_id=data.get("attempt_id")).first()
        if not attempt or (authenticated_user_id and str(attempt.user_id) != str(authenticated_user_id)):
            return {"statusMessage": "Attempt not found", "status": False}, 404
        if attempt.status != 'in_progress':
            return {"statusMessage": "Attempt is already finalized", "status": False}, 409
        _replace_attempt_answers(session, attempt, data.get("answers", {}))
        session.commit()
        return {"statusMessage": "Answers saved", "status": True}, 200
    except Exception as e:
        session.rollback()
        print(f"{e} occurred while autosaving exam answers at line {sys.exc_info()[-1].tb_lineno}")
        return {"statusMessage": "Error saving answers", "status": False}, 500
    finally:
        session.close()

def submit_exam_answers(data, authenticated_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        user_id = data.get("user_id")
        schedule_id = data.get("schedule_id")
        answers = data.get("answers", {})
        time_taken_mins = data.get("time_taken_mins")
        attempt_id = data.get("attempt_id")

        # Re-check publication at submission time because a schedule may have
        # been unpublished after the student launched it. When an attempt
        # exists, bind this check to its actual schedule as well as the
        # request's schedule_id so a different published ID cannot bypass it.
        exam_attempt = session.query(Exam_Attempt).filter_by(attempt_id=attempt_id).first()
        if not exam_attempt or (authenticated_user_id and str(exam_attempt.user_id) != str(authenticated_user_id)):
            session.close()
            return {"statusMessage": "Attempt not found", "status": False}, 404
        # The authenticated attempt is authoritative; client identifiers are compatibility hints only.
        user_id = exam_attempt.user_id
        attempt_schedule_id = exam_attempt.schedule_id
        exam_schedule = session.query(ExamSchedule).filter(
            ExamSchedule.schedule_id == attempt_schedule_id,
            ExamSchedule.published == 1
        ).first()
        if not exam_schedule:
            session.close()
            return {
                "statusMessage": "This test has been stopped by the administrator.",
                "status": False,
                "errorCode": "EXAM_UNPUBLISHED"
            }, 409
        
        # Store server UTC so malformed or timezone-aware client dates cannot block submission.
        submitted_date = datetime.utcnow()
        schedule_id = attempt_schedule_id

        # Save the final snapshot and status atomically so retries cannot duplicate answers.
        _replace_attempt_answers(session, exam_attempt, answers)
        exam_attempt.submitted_date = submitted_date
        exam_attempt.status = "submitted"
        session.commit()
        session.close()
        validate_answers(attempt_id)
        json_data = {
            "statusMessage": "Exam answers submitted successfully",
            "status": True,
        }
        return json_data, 200
    except Exception as e:
        session.rollback()
        session.close()
        print(f"{e} occurred while submitting exam answers at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error submitting exam answers",
            "status": False,
        }
        return json_data, 500
