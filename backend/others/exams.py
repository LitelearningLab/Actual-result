from db.models import (
    Exam,
    ExamSchedule,
    Question,
    QuestionMedia,
    Option,
    Answer,
    Exam_Attempt,
    ExamMapping,
    Categories,
    ExamScheduleMapping,
    QuestionMapping,
    ExamQuestionMapping,
    CategoriesDepartments,
    CategoriesTeams,
    ExamsDepartments,
    ExamsTeams,
    QuestionPaperUserAssignment,
    ExamSection,
    Subject,
    InstituteDepartment,
    InstituteTeam,
    AnswerSheetPage,
    ExamReviewComments,
    MarksHistory,
)
from db.db import SQLiteDB
from others.exam_review import (
    finalize_expired_attempts,
    get_exam_total_marks,
    is_after_everyone_finished_available,
    is_review_eligible_attempt,
    validate_answers,
)
import sys
import os
import json
import time
import uuid
from datetime import datetime, timezone
from db.models import Institute, InstituteCampus, User
from sqlalchemy import func, or_, String, text
from sqlalchemy.orm import load_only
import random
from flask import g


def _to_naive_utc_datetime(val):
    if val is None:
        return None
    if isinstance(val, datetime):
        if val.tzinfo is not None:
            return val.astimezone(timezone.utc).replace(tzinfo=None)
        return val
    if isinstance(val, str):
        try:
            parsed = datetime.fromisoformat(val.replace("Z", "+00:00"))
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

    schedules = (
        session.query(ExamSchedule)
        .filter(
            ExamSchedule.exam_id == exam_id,
            or_(
                ExamSchedule.is_deleted == False,
                ExamSchedule.is_deleted == None,
                ExamSchedule.is_deleted == 0,
            ),
        )
        .all()
    )

    if not schedules:
        return False

    schedule_ids = [s.schedule_id for s in schedules if s.schedule_id]

    # Check if attended by one or more users
    if schedule_ids:
        attempt_count = (
            session.query(Exam_Attempt)
            .filter(Exam_Attempt.schedule_id.in_(schedule_ids))
            .count()
        )
        if attempt_count > 0:
            return True

    return False


def safe_isoformat(val):
    if val is None:
        return None
    if hasattr(val, "isoformat"):
        return val.isoformat()
    return str(val)


def safe_utc_isoformat(val):
    value = safe_isoformat(val)
    if value and not value.endswith(("Z", "+00:00")):
        # Schedule datetimes are stored as UTC; retain that timezone when serializing them.
        return f"{value}Z"
    return value


def _replace_attempt_answers(session, exam_attempt, answers):
    """Persist the latest browser answer snapshot without creating duplicates."""
    session.query(Answer).filter(Answer.attempt_id == exam_attempt.attempt_id).delete(
        synchronize_session=False
    )
    for question_id, answer_value in (answers or {}).items():
        if answer_value is None or answer_value == "":
            continue
        if isinstance(answer_value, dict):
            session.add(
                Answer(
                    user_id=exam_attempt.user_id,
                    schedule_id=exam_attempt.schedule_id,
                    question_id=question_id,
                    attempt_id=exam_attempt.attempt_id,
                    selected_option_id=None,
                    written_answer=json.dumps(answer_value),
                )
            )
        elif isinstance(answer_value, list):
            is_option_list = all(isinstance(v, str) and len(v) == 36 and "-" in v for v in answer_value if v)
            if is_option_list and answer_value:
                for opt_id in answer_value:
                    if opt_id:
                        session.add(
                            Answer(
                                user_id=exam_attempt.user_id,
                                schedule_id=exam_attempt.schedule_id,
                                question_id=question_id,
                                attempt_id=exam_attempt.attempt_id,
                                selected_option_id=opt_id,
                                written_answer=None,
                            )
                        )
            else:
                session.add(
                    Answer(
                        user_id=exam_attempt.user_id,
                        schedule_id=exam_attempt.schedule_id,
                        question_id=question_id,
                        attempt_id=exam_attempt.attempt_id,
                        selected_option_id=None,
                        written_answer=json.dumps(answer_value),
                    )
                )
        else:
            value = str(answer_value)
            if not value.strip():
                continue
            is_option = len(value) == 36 and "-" in value
            session.add(
                Answer(
                    user_id=exam_attempt.user_id,
                    schedule_id=exam_attempt.schedule_id,
                    question_id=question_id,
                    attempt_id=exam_attempt.attempt_id,
                    selected_option_id=value if is_option else None,
                    written_answer=None if is_option else value,
                )
            )


def _category_pool_question_ids(session, category_id):
    if not category_id:
        return []
    cat = (
        session.query(Categories)
        .filter(
            Categories.category_id == category_id,
            or_(
                Categories.is_deleted == False,
                Categories.is_deleted == 0,
                Categories.is_deleted.is_(None),
            ),
        )
        .first()
    )
    if not cat:
        return []
    rows = (
        session.query(QuestionMapping.question_id)
        .filter(QuestionMapping.category_id == category_id)
        .all()
    )
    return [r.question_id for r in rows]


def _resolve_fixed_question_ids(
    session, category_id, number_of_questions, question_ids
):
    """Resolve the fixed (non-randomized) question set for a category.

    Admin hand-picks (if any) are honored as-is. Any remaining slots up to
    number_of_questions are filled with a one-time random pick from the
    category's question bank, so every user is served the exact same set.
    """
    seen = set()
    unique_ids = []
    for qid in question_ids or []:
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

        try:
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
        except Exception as title_schema_err:
            session.rollback()
            print(f"Error ensuring Exams.title schema: {title_schema_err}", flush=True)

        # Check and add subject_id, subject_name, and test_mode to Exams
        try:
            session.execute(text("""
                IF COL_LENGTH('Exams', 'subject_id') IS NULL
                BEGIN
                    ALTER TABLE Exams ADD subject_id NVARCHAR(50) NULL;
                END;
                IF COL_LENGTH('Exams', 'subject_name') IS NULL
                BEGIN
                    ALTER TABLE Exams ADD subject_name NVARCHAR(255) NULL;
                END;
                IF COL_LENGTH('Exams', 'test_mode') IS NULL
                BEGIN
                    ALTER TABLE Exams ADD test_mode NVARCHAR(50) NULL;
                END;
                IF COL_LENGTH('Exams', 'total_marks') IS NULL
                BEGIN
                    ALTER TABLE Exams ADD total_marks INT NULL;
                END;
            """))
            session.commit()
        except Exception as exam_columns_err:
            session.rollback()
            print(f"Error ensuring Exams columns: {exam_columns_err}", flush=True)

        # Check and create ExamSections table
        try:
            session.execute(text("""
                IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='ExamSections' AND xtype='U')
                BEGIN
                    CREATE TABLE ExamSections (
                        section_id NVARCHAR(50) PRIMARY KEY,
                        exam_id NVARCHAR(50) NOT NULL,
                        name NVARCHAR(255) NOT NULL,
                        question_type NVARCHAR(50) NOT NULL,
                        target_count INT NULL,
                        order_number INT DEFAULT 1,
                        created_date DATETIME
                    );
                    CREATE INDEX IX_ExamSections_Exam ON ExamSections(exam_id);
                END;
            """))
            session.commit()
        except Exception:
            session.rollback()

        try:
            session.execute(text("""
                IF COL_LENGTH('ExamSections', 'target_count') IS NULL
                BEGIN
                    ALTER TABLE ExamSections ADD target_count INT NULL;
                END;
                IF COL_LENGTH('ExamSections', 'sub_heading') IS NULL
                BEGIN
                    ALTER TABLE ExamSections ADD sub_heading NVARCHAR(500) NULL;
                END;
                IF COL_LENGTH('ExamSections', 'instructions') IS NULL
                BEGIN
                    ALTER TABLE ExamSections ADD instructions NVARCHAR(MAX) NULL;
                END;
            """))
            session.commit()
        except Exception as section_schema_err:
            session.rollback()
            print(f"Error ensuring ExamSections columns: {section_schema_err}", flush=True)

        # Check and add section_id to exam_question_mapping
        try:
            session.execute(text("""
                IF COL_LENGTH('exam_question_mapping', 'section_id') IS NULL
                BEGIN
                    ALTER TABLE exam_question_mapping ADD section_id NVARCHAR(50) NULL;
                END;
            """))
            session.commit()
        except Exception:
            session.rollback()

        # Printable papers are assigned directly to users, independently of
        # online-test schedules and ExamScheduleMapping.
        try:
            session.execute(text("""
                IF OBJECT_ID('QuestionPaperUserAssignments', 'U') IS NULL
                BEGIN
                    CREATE TABLE QuestionPaperUserAssignments (
                        assignment_id UNIQUEIDENTIFIER NOT NULL PRIMARY KEY,
                        exam_id UNIQUEIDENTIFIER NOT NULL,
                        user_id UNIQUEIDENTIFIER NOT NULL,
                        created_by NVARCHAR(255) NULL,
                        created_date DATETIME NOT NULL DEFAULT GETUTCDATE(),
                        CONSTRAINT UQ_QuestionPaperUserAssignments UNIQUE (exam_id, user_id)
                    );
                    CREATE INDEX IX_QuestionPaperUserAssignments_Exam
                        ON QuestionPaperUserAssignments(exam_id);
                    CREATE INDEX IX_QuestionPaperUserAssignments_User
                        ON QuestionPaperUserAssignments(user_id);
                END;
            """))
            session.commit()
        except Exception as assignment_schema_err:
            session.rollback()
            print(f"Error ensuring paper assignment table: {assignment_schema_err}", flush=True)
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
    subject_id = data.get("subject_id")
    subject_name = data.get("subject_name")
    test_mode = data.get("test_mode", "online")
    total_marks = data.get("total_marks", None)

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
        if subject_id and not subject_name:
            subj_obj = session.query(Subject).filter_by(subject_id=subject_id).first()
            if subj_obj:
                subject_name = subj_obj.subject_name

        published_val = 1 if data.get("published") in (True, 1, "1", "true") else 0
        add_exam = Exam(
            title=title,
            description=description,
            institute_id=institute_id,
            duration_mins=duration_mins,
            total_questions=total_questions,
            number_of_attempts=number_of_attempts,
            pass_mark=pass_mark,
            start_time=start_time,
            end_time=end_time,
            created_by=created_by,
            subject_id=subject_id,
            subject_name=subject_name,
            test_mode=test_mode,
            total_marks=total_marks,
            published=published_val,
        )
        session.add(add_exam)
        session.flush()

        exam_id = str(add_exam.exam_id) if add_exam.exam_id else None

        for dept_id in data.get("departments", []):
            if dept_id and str(dept_id).upper() != "ALL":
                session.add(
                    ExamsDepartments(
                        exam_id=exam_id,
                        department_id=str(dept_id),
                        created_by=created_by,
                    )
                )

        for team_id in data.get("teams", []):
            if team_id and str(team_id).upper() != "ALL":
                session.add(
                    ExamsTeams(
                        exam_id=exam_id, team_id=str(team_id), created_by=created_by
                    )
                )

        if test_mode == "paper" and "assigned_user_ids" in data:
            requested_user_ids = list(dict.fromkeys(
                str(user_id) for user_id in (data.get("assigned_user_ids") or []) if user_id
            ))
            valid_users = []
            if requested_user_ids:
                valid_users = session.query(User).filter(
                    func.cast(User.user_id, String).in_(requested_user_ids),
                    func.cast(User.institute_id, String) == str(institute_id),
                    func.lower(User.user_role).in_(["user", "candidate", "student"]),
                    or_(User.active_status == 1, User.active_status == None),
                    or_(User.is_deleted == 0, User.is_deleted == None),
                ).all()
            valid_ids = {str(user.user_id).lower() for user in valid_users}
            requested_ids_lower = {uid.lower() for uid in requested_user_ids}
            if len(valid_ids) != len(requested_ids_lower):
                fallback_users = session.query(User).filter(
                    func.cast(User.user_id, String).in_(requested_user_ids),
                    func.cast(User.institute_id, String) == str(institute_id),
                    or_(User.is_deleted == 0, User.is_deleted == None),
                ).all()
                valid_ids = {str(user.user_id).lower() for user in fallback_users}
                if len(valid_ids) != len(requested_ids_lower):
                    session.rollback()
                    return {
                        "statusMessage": "One or more selected users are invalid or outside this institute.",
                        "status": False,
                    }, 400
            for user_id in requested_user_ids:
                session.add(QuestionPaperUserAssignment(
                    exam_id=exam_id,
                    user_id=user_id,
                    created_by=created_by,
                ))

        sections_list = data.get("sections", [])
        if sections_list:
            category_counts = {}
            for sec_idx, sec in enumerate(sections_list, 1):
                sec_name = sec.get("name") or f"Section {sec_idx}"
                sec_type = sec.get("question_type") or "objective"
                new_sec = ExamSection(
                    exam_id=exam_id,
                    name=sec_name,
                    sub_heading=sec.get("sub_heading") or sec.get("instructions") or "",
                    instructions=sec.get("instructions") or sec.get("sub_heading") or "",
                    question_type=sec_type,
                    target_count=sec.get("target_count") or sec.get("targetCount"),
                    order_number=sec.get("order_number") or sec_idx,
                )
                session.add(new_sec)
                session.flush()

                for q_idx, q_item in enumerate(sec.get("questions", []), 1):
                    qid = q_item.get("question_id") or q_item.get("id")
                    if not qid:
                        continue
                    cat_id = q_item.get("category_id")
                    if not cat_id:
                        q_map = session.query(QuestionMapping).filter_by(question_id=qid).first()
                        if q_map:
                            cat_id = q_map.category_id

                    new_eqm = ExamQuestionMapping(
                        exam_id=exam_id,
                        category_id=cat_id,
                        question_id=qid,
                        section_id=str(new_sec.section_id),
                        order_number=q_idx,
                    )
                    session.add(new_eqm)

                    if cat_id:
                        category_counts[cat_id] = category_counts.get(cat_id, 0) + 1

            for cat_id, count in category_counts.items():
                session.add(
                    ExamMapping(
                        exam_id=exam_id,
                        category_id=cat_id,
                        number_of_questions=count,
                        randomize_questions=0,
                        created_by=created_by,
                    )
                )
        else:
            categories_list = data.get("categories", [])
            for category in categories_list:
                category_id = category.get("category_id")
                if not category_id:
                    continue
                raw_noq = category.get("number_of_questions") if category.get("number_of_questions") is not None else category.get("questions", 0)
                try:
                    number_of_questions = int(raw_noq or 0)
                except (ValueError, TypeError):
                    number_of_questions = 0
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
                        "status": False,
                    }, 400

                new_mapping = ExamMapping(
                    exam_id=exam_id,
                    category_id=category_id,
                    number_of_questions=number_of_questions,
                    randomize_questions=randomize_questions,
                    created_by=created_by,
                )
                session.add(new_mapping)
                if randomize_questions == 0:
                    questions_list = _resolve_fixed_question_ids(
                        session,
                        category_id,
                        number_of_questions,
                        category.get("question_ids", []),
                    )
                    for question_id in questions_list:
                        add_exam_question_mapping = ExamQuestionMapping(
                            exam_id=exam_id,
                            category_id=category_id,
                            question_id=question_id,
                        )
                        session.add(add_exam_question_mapping)

        session.commit()
        json_data = {"statusMessage": "Exam inserted successfully", "status": True, "exam_id": exam_id}
        return json_data, 200
    except Exception as e:
        session.rollback()
        import traceback

        traceback.print_exc()
        print(
            f"{e} occurred while inserting exam at line {sys.exc_info()[-1].tb_lineno}"
        )
        json_data = {
            "statusMessage": f"Error inserting exam: {str(e)}",
            "status": False,
        }
        return json_data, 500


def update_exam(request):
    data = request.json
    exam_id = data.get("exam_id") or data.get("id")
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
                "status": False,
            }, 400

        # update scalar fields
        exam.title = data.get("title", exam.title)
        exam.description = data.get("description", exam.description)
        exam.institute_id = data.get("institute_id", exam.institute_id)
        exam.duration_mins = data.get("duration_minutes", exam.duration_mins)
        exam.total_questions = data.get("total_questions", exam.total_questions)
        exam.pass_mark = data.get("pass_mark", exam.pass_mark)
        exam.number_of_attempts = data.get(
            "number_of_attempts", exam.number_of_attempts
        )
        if "subject_id" in data:
            exam.subject_id = data.get("subject_id")
        if "subject_name" in data:
            exam.subject_name = data.get("subject_name")
        elif data.get("subject_id"):
            subj_obj = session.query(Subject).filter_by(subject_id=data.get("subject_id")).first()
            if subj_obj:
                exam.subject_name = subj_obj.subject_name

        if "test_mode" in data and data.get("test_mode"):
            exam.test_mode = data.get("test_mode")
        if "total_marks" in data:
            exam.total_marks = data.get("total_marks")
        if "published" in data:
            exam.published = 1 if data.get("published") in (True, 1, "1", "true") else 0

        # handle optional start/end times
        start_time_str = data.get("start_time", None)
        end_time_str = data.get("end_time", None)

        # updated_by and updated_date
        exam.updated_by = data.get("updated_by", exam.updated_by)
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

        # remove ExamMapping, ExamQuestionMapping, ExamSection, ExamsDepartments, and ExamsTeams rows for this exam
        session.query(ExamMapping).filter(ExamMapping.exam_id == exam_id).delete(
            synchronize_session=False
        )
        session.query(ExamQuestionMapping).filter(
            ExamQuestionMapping.exam_id == exam_id
        ).delete(synchronize_session=False)
        session.query(ExamSection).filter(
            ExamSection.exam_id == exam_id
        ).delete(synchronize_session=False)
        session.query(ExamsDepartments).filter(
            ExamsDepartments.exam_id == exam_id
        ).delete(synchronize_session=False)
        session.query(ExamsTeams).filter(ExamsTeams.exam_id == exam_id).delete(
            synchronize_session=False
        )
        if "assigned_user_ids" in data:
            session.query(QuestionPaperUserAssignment).filter(
                QuestionPaperUserAssignment.exam_id == exam_id
            ).delete(synchronize_session=False)

        updated_by_user = data.get("updated_by")
        for dept_id in data.get("departments", []):
            if dept_id and str(dept_id).upper() != "ALL":
                session.add(
                    ExamsDepartments(
                        exam_id=exam_id,
                        department_id=str(dept_id),
                        created_by=updated_by_user,
                    )
                )

        for team_id in data.get("teams", []):
            if team_id and str(team_id).upper() != "ALL":
                session.add(
                    ExamsTeams(
                        exam_id=exam_id,
                        team_id=str(team_id),
                        created_by=updated_by_user,
                    )
                )

        if getattr(exam, "test_mode", None) == "paper" and "assigned_user_ids" in data:
            requested_user_ids = list(dict.fromkeys(
                str(user_id) for user_id in (data.get("assigned_user_ids") or []) if user_id
            ))
            valid_users = []
            if requested_user_ids:
                valid_users = session.query(User).filter(
                    func.cast(User.user_id, String).in_(requested_user_ids),
                    func.cast(User.institute_id, String) == str(exam.institute_id),
                    func.lower(User.user_role).in_(["user", "candidate", "student"]),
                    or_(User.active_status == 1, User.active_status == None),
                    or_(User.is_deleted == 0, User.is_deleted == None),
                ).all()
            valid_ids = {str(user.user_id).lower() for user in valid_users}
            requested_ids_lower = {uid.lower() for uid in requested_user_ids}
            if len(valid_ids) != len(requested_ids_lower):
                fallback_users = session.query(User).filter(
                    func.cast(User.user_id, String).in_(requested_user_ids),
                    func.cast(User.institute_id, String) == str(exam.institute_id),
                    or_(User.is_deleted == 0, User.is_deleted == None),
                ).all()
                valid_ids = {str(user.user_id).lower() for user in fallback_users}
                if len(valid_ids) != len(requested_ids_lower):
                    session.rollback()
                    return {
                        "statusMessage": "One or more selected users are invalid or outside this institute.",
                        "status": False,
                    }, 400
            for user_id in requested_user_ids:
                session.add(QuestionPaperUserAssignment(
                    exam_id=exam_id,
                    user_id=user_id,
                    created_by=updated_by_user,
                ))

        sections_list = data.get("sections", [])
        if sections_list:
            category_counts = {}
            for sec_idx, sec in enumerate(sections_list, 1):
                sec_name = sec.get("name") or f"Section {sec_idx}"
                sec_type = sec.get("question_type") or "objective"
                new_sec = ExamSection(
                    exam_id=exam_id,
                    name=sec_name,
                    sub_heading=sec.get("sub_heading") or sec.get("instructions") or "",
                    instructions=sec.get("instructions") or sec.get("sub_heading") or "",
                    question_type=sec_type,
                    target_count=sec.get("target_count") or sec.get("targetCount"),
                    order_number=sec.get("order_number") or sec_idx,
                )
                session.add(new_sec)
                session.flush()

                for q_idx, q_item in enumerate(sec.get("questions", []), 1):
                    qid = q_item.get("question_id") or q_item.get("id")
                    if not qid:
                        continue
                    cat_id = q_item.get("category_id")
                    if not cat_id:
                        q_map = session.query(QuestionMapping).filter_by(question_id=qid).first()
                        if q_map:
                            cat_id = q_map.category_id

                    new_eqm = ExamQuestionMapping(
                        exam_id=exam_id,
                        category_id=cat_id,
                        question_id=qid,
                        section_id=str(new_sec.section_id),
                        order_number=q_idx,
                    )
                    session.add(new_eqm)

                    if cat_id:
                        category_counts[cat_id] = category_counts.get(cat_id, 0) + 1

            for cat_id, count in category_counts.items():
                session.add(
                    ExamMapping(
                        exam_id=exam_id,
                        category_id=cat_id,
                        number_of_questions=count,
                        randomize_questions=0,
                        created_by=updated_by_user,
                    )
                )
        else:
            categories_list = data.get("categories", [])
            for category in categories_list:
                category_id = category.get("category_id")
                if not category_id:
                    continue
                raw_noq = category.get("number_of_questions") if category.get("number_of_questions") is not None else category.get("questions", 0)
                try:
                    number_of_questions = int(raw_noq or 0)
                except (ValueError, TypeError):
                    number_of_questions = 0
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
                        "status": False,
                    }, 400

                new_mapping = ExamMapping(
                    exam_id=exam_id,
                    category_id=category_id,
                    number_of_questions=number_of_questions,
                    randomize_questions=randomize_questions,
                )
                session.add(new_mapping)
                if randomize_questions == 0:
                    questions_list = _resolve_fixed_question_ids(
                        session,
                        category_id,
                        number_of_questions,
                        category.get("question_ids", []),
                    )
                    for question_id in questions_list:
                        add_exam_question_mapping = ExamQuestionMapping(
                            exam_id=exam_id,
                            category_id=category_id,
                            question_id=question_id,
                        )
                        session.add(add_exam_question_mapping)

        session.commit()
        return {"statusMessage": "Exam updated successfully", "status": True}, 200
    except Exception as e:
        print(
            f"{e} occurred while updating exam at line {sys.exc_info()[-1].tb_lineno}"
        )
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
        session.query(QuestionPaperUserAssignment).filter_by(exam_id=exam_id).delete()
        # delete the exam
        session.delete(exam)
        session.commit()
        return {"statusMessage": "Exam deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        print(
            f"{e} occurred while deleting exam at line {sys.exc_info()[-1].tb_lineno}"
        )
        return {"statusMessage": f"Error deleting exam: {str(e)}", "status": False}, 500


def publish_exam(request):
    data = request.get_json(silent=True) or {}
    exam_id = data.get("exam_id") or data.get("id")
    if not exam_id:
        return {"statusMessage": "Missing exam_id", "status": False}, 400

    published = 1 if data.get("published", True) in (True, 1, "1", "true") else 0

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        exam = session.query(Exam).filter(Exam.exam_id == exam_id).first()
        if not exam:
            return {"statusMessage": "Question paper not found", "status": False}, 404

        exam.published = published
        exam.updated_date = datetime.utcnow()
        if g and hasattr(g, "user_id") and g.user_id:
            exam.updated_by = g.user_id

        session.commit()
        status_msg = (
            "Question paper published successfully"
            if published == 1
            else "Question paper moved to draft"
        )
        return {
            "statusMessage": status_msg,
            "status": True,
            "published": published,
            "exam_id": str(exam_id),
        }, 200
    except Exception as e:
        session.rollback()
        print(f"Error publishing exam {exam_id}: {e}", flush=True)
        return {"statusMessage": f"Error publishing question paper: {str(e)}", "status": False}, 500


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
        else:
            try:
                current_user = getattr(g, 'current_user', None)
                if current_user and getattr(current_user, 'user_role', '').lower() not in ('super_admin', 'superadmin', 'super-admin'):
                    if getattr(current_user, 'institute_id', None):
                        filter.append(Exam.institute_id == current_user.institute_id)
            except Exception:
                pass
        if args.get("name", None):
            filter.append(Exam.title.ilike(f"%{args.get('name')}%"))
        if args.get("created_before", None):
            try:
                cb_val = str(args["created_before"]).strip()
                created_before = datetime.fromisoformat(
                    cb_val.replace("Z", "+00:00")
                )
                if len(cb_val) <= 10 or (created_before.hour == 0 and created_before.minute == 0 and created_before.second == 0):
                    created_before = created_before.replace(hour=23, minute=59, second=59, microsecond=999999)
                filter.append(Exam.created_date <= created_before)
            except Exception as e:
                print(f"Error parsing created_before date in exams: {e}", flush=True)
        if args.get("created_after", None):
            try:
                ca_val = str(args["created_after"]).strip()
                created_after = datetime.fromisoformat(
                    ca_val.replace("Z", "+00:00")
                )
                filter.append(Exam.created_date >= created_after)
            except Exception as e:
                print(f"Error parsing created_after date in exams: {e}", flush=True)
        created_by = args.get("created_by", None)
        if created_by:
            user = (
                session.query(User)
                .filter(or_(User.user_id == created_by, User.username == created_by))
                .first()
            )
            if user:
                filter.append(Exam.created_by == user.user_id)
            else:
                filter.append(Exam.created_by == created_by)
        has_specific_exam_id = bool(args.get("exam_id", None))
        if has_specific_exam_id:
            filter.append(Exam.exam_id == args["exam_id"])

        test_mode_arg = args.get("test_mode", None) or args.get("exam_type_mode", None)
        if test_mode_arg:
            tm_val = str(test_mode_arg).strip().lower()
            if tm_val == 'paper':
                # Question papers are a separate workflow from online tests.
                # Legacy rows without a mode belong to the online-test flow and
                # must not leak into the question-paper list.
                filter.append(Exam.test_mode == 'paper')
            elif tm_val == 'online':
                filter.append(or_(Exam.test_mode == 'online', Exam.test_mode == None, Exam.test_mode == ''))
            elif tm_val == 'all':
                pass
        elif not has_specific_exam_id:
            filter.append(or_(Exam.test_mode == 'online', Exam.test_mode == None, Exam.test_mode == ''))

        published_arg = args.get("published", None)
        if published_arg is not None:
            if str(published_arg).lower() in ("1", "true"):
                filter.append(Exam.published == 1)
            elif str(published_arg).lower() in ("0", "false"):
                filter.append(or_(Exam.published == 0, Exam.published == None))


        dept_arg = args.get("departments", None) or args.get("department", None)
        if dept_arg:
            dept_ids = [d.strip() for d in str(dept_arg).split(",") if d.strip()]
            if dept_ids:
                resolved_dept_keys = set(dept_ids)
                try:
                    dept_objs = session.query(InstituteDepartment).filter(
                        or_(
                            InstituteDepartment.department_id.in_(dept_ids),
                            InstituteDepartment.name.in_(dept_ids)
                        )
                    ).all()
                    for d in dept_objs:
                        if d.department_id:
                            resolved_dept_keys.add(str(d.department_id))
                        if d.name:
                            resolved_dept_keys.add(str(d.name))
                except Exception:
                    pass
                all_dept_keys = list(resolved_dept_keys)

                exam_dept_ids = [
                    r[0]
                    for r in session.query(ExamsDepartments.exam_id)
                    .filter(ExamsDepartments.department_id.in_(all_dept_keys))
                    .all()
                ]
                cat_exam_ids = [
                    r[0]
                    for r in session.query(ExamMapping.exam_id)
                    .join(
                        CategoriesDepartments,
                        CategoriesDepartments.category_id == ExamMapping.category_id,
                    )
                    .filter(CategoriesDepartments.department_id.in_(all_dept_keys))
                    .all()
                ]
                user_exam_ids = [
                    r[0]
                    for r in session.query(Exam.exam_id)
                    .join(User, User.user_id == Exam.created_by)
                    .filter(User.department_id.in_(all_dept_keys))
                    .all()
                ]
                sched_exam_ids = [
                    r[0]
                    for r in session.query(ExamSchedule.exam_id)
                    .join(
                        ExamScheduleMapping,
                        ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id,
                    )
                    .filter(ExamScheduleMapping.department_id.in_(all_dept_keys))
                    .all()
                ]
                assigned_exam_ids = [
                    r[0]
                    for r in session.query(QuestionPaperUserAssignment.exam_id)
                    .join(User, User.user_id == QuestionPaperUserAssignment.user_id)
                    .filter(User.department_id.in_(all_dept_keys))
                    .all()
                ]
                matching_exam_ids = list(
                    set(exam_dept_ids + cat_exam_ids + user_exam_ids + sched_exam_ids + assigned_exam_ids)
                )
                filter.append(
                    Exam.exam_id.in_(
                        matching_exam_ids if matching_exam_ids else ["__none__"]
                    )
                )

            pass
            if False:
                cat_exam_ids = [
                    r[0]
                    for r in session.query(ExamMapping.exam_id)
                    .join(
                        CategoriesDepartments,
                        CategoriesDepartments.category_id == ExamMapping.category_id,
                    )
                    .filter(CategoriesDepartments.department_id.in_(dept_ids))
                    .all()
                ]
                user_exam_ids = [
                    r[0]
                    for r in session.query(Exam.exam_id)
                    .join(User, User.user_id == Exam.created_by)
                    .filter(User.department_id.in_(dept_ids))
                    .all()
                ]
                sched_exam_ids = [
                    r[0]
                    for r in session.query(ExamSchedule.exam_id)
                    .join(
                        ExamScheduleMapping,
                        ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id,
                    )
                    .filter(ExamScheduleMapping.department_id.in_(dept_ids))
                    .all()
                ]
                matching_exam_ids = list(
                    set(cat_exam_ids + user_exam_ids + sched_exam_ids)
                )
                filter.append(
                    Exam.exam_id.in_(
                        matching_exam_ids if matching_exam_ids else ["__none__"]
                    )
                )

        team_arg = args.get("teams", None) or args.get("team", None)
        if team_arg:
            team_ids = [t.strip() for t in str(team_arg).split(",") if t.strip()]
            if team_ids:
                resolved_team_keys = set(team_ids)
                try:
                    team_objs = session.query(InstituteTeam).filter(
                        or_(
                            InstituteTeam.team_id.in_(team_ids),
                            InstituteTeam.name.in_(team_ids)
                        )
                    ).all()
                    for t in team_objs:
                        if t.team_id:
                            resolved_team_keys.add(str(t.team_id))
                        if t.name:
                            resolved_team_keys.add(str(t.name))
                except Exception:
                    pass
                all_team_keys = list(resolved_team_keys)

                exam_team_ids = [
                    r[0]
                    for r in session.query(ExamsTeams.exam_id)
                    .filter(ExamsTeams.team_id.in_(all_team_keys))
                    .all()
                ]
                cat_exam_ids = [
                    r[0]
                    for r in session.query(ExamMapping.exam_id)
                    .join(
                        CategoriesTeams,
                        CategoriesTeams.category_id == ExamMapping.category_id,
                    )
                    .filter(CategoriesTeams.team_id.in_(all_team_keys))
                    .all()
                ]
                user_exam_ids = [
                    r[0]
                    for r in session.query(Exam.exam_id)
                    .join(User, User.user_id == Exam.created_by)
                    .filter(User.team_id.in_(all_team_keys))
                    .all()
                ]
                sched_exam_ids = [
                    r[0]
                    for r in session.query(ExamSchedule.exam_id)
                    .join(
                        ExamScheduleMapping,
                        ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id,
                    )
                    .filter(ExamScheduleMapping.team_id.in_(all_team_keys))
                    .all()
                ]
                assigned_exam_ids = [
                    r[0]
                    for r in session.query(QuestionPaperUserAssignment.exam_id)
                    .join(User, User.user_id == QuestionPaperUserAssignment.user_id)
                    .filter(User.team_id.in_(all_team_keys))
                    .all()
                ]
                matching_exam_ids = list(
                    set(exam_team_ids + cat_exam_ids + user_exam_ids + sched_exam_ids + assigned_exam_ids)
                )
                filter.append(
                    Exam.exam_id.in_(
                        matching_exam_ids if matching_exam_ids else ["__none__"]
                    )
                )

            if False:
                cat_exam_ids = [
                    r[0]
                    for r in session.query(ExamMapping.exam_id)
                    .join(
                        CategoriesTeams,
                        CategoriesTeams.category_id == ExamMapping.category_id,
                    )
                    .filter(CategoriesTeams.team_id.in_(team_ids))
                    .all()
                ]
                user_exam_ids = [
                    r[0]
                    for r in session.query(Exam.exam_id)
                    .join(User, User.user_id == Exam.created_by)
                    .filter(User.team_id.in_(team_ids))
                    .all()
                ]
                sched_exam_ids = [
                    r[0]
                    for r in session.query(ExamSchedule.exam_id)
                    .join(
                        ExamScheduleMapping,
                        ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id,
                    )
                    .filter(ExamScheduleMapping.team_id.in_(team_ids))
                    .all()
                ]
                matching_exam_ids = list(
                    set(cat_exam_ids + user_exam_ids + sched_exam_ids)
                )
                filter.append(
                    Exam.exam_id.in_(
                        matching_exam_ids if matching_exam_ids else ["__none__"]
                    )
                )

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
                    Exam.exam_id.in_(
                        list(set(sched_exam_ids)) if sched_exam_ids else ["__none__"]
                    )
                )

        # Country/city filters come from the location hierarchy used by the institute picker.
        # Match against institute campus data first, then fall back to any text stored on Institute.
        if args.get("country", None):
            country_val = str(args.get("country")).strip().lower()
            filter.append(
                or_(
                    InstituteCampus.country_id.ilike(country_val),
                    Institute.country.ilike(f"%{country_val}%"),
                )
            )
        if args.get("city", None):
            city_val = str(args.get("city")).strip().lower()
            filter.append(
                or_(
                    InstituteCampus.city_name.ilike(f"%{city_val}%"),
                    Institute.city.ilike(f"%{city_val}%"),
                )
            )
        if args.get("industry", None):
            ind_val = str(args.get("industry")).strip().lower()
            filter.append(Institute.industry_type.ilike(f"%{ind_val}%"))
        if args.get("sector", None):
            sec_val = str(args.get("sector")).strip().lower()
            filter.append(Institute.industry_sector.ilike(f"%{sec_val}%"))

        # join with Institute to fetch institute details as well
        # rows = session.query(ExamScheduleMapping, ExamSchedule, Exam).join(ExamSchedule, ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id).join(Exam, ExamSchedule.exam_id == Exam.exam_id).filter(*filter).all()
        rows = session.query(Exam, Institute).join(
            Institute, Exam.institute_id == Institute.institute_id
        )
        if args.get("country", None) or args.get("city", None):
            rows = rows.outerjoin(
                InstituteCampus, InstituteCampus.institute_id == Institute.institute_id
            )
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
            mappings = (
                session.query(ExamMapping)
                .filter(ExamMapping.exam_id == exam.exam_id)
                .all()
            )
            for mapping in mappings:
                category_data = {
                    "number_of_questions": (
                        mapping.number_of_questions if mapping else 0
                    ),
                    "randomize_questions": (
                        True if mapping and mapping.randomize_questions == 1 else False
                    ),
                }
                category_data["category"] = {}
                categories = (
                    session.query(Categories)
                    .filter(Categories.category_id == mapping.category_id)
                    .all()
                )
                # categories, mappings = session.query(Categories, ExamMapping).join(ExamMapping, Categories.category_id == ExamMapping.category_id).filter(ExamMapping.exam_id == exam.exam_id).all()

                for category in categories:
                    category_data["category"] = {
                        "category_id": category.category_id,
                        "category_name": category.name,
                        "description": category.description,
                    }
                    if mapping.randomize_questions == 0:
                        question_mappings = (
                            session.query(ExamQuestionMapping)
                            .filter(
                                ExamQuestionMapping.exam_id == exam.exam_id,
                                ExamQuestionMapping.category_id == category.category_id,
                            )
                            .all()
                        )
                        question_ids = [qm.question_id for qm in question_mappings]
                        questions = (
                            session.query(Question)
                            .filter(Question.question_id.in_(question_ids))
                            .all()
                        )
                        category_data["questions"] = [
                            {
                                "question_id": q.question_id,
                                "question_text": q.question_text,
                                "question_type": q.question_type,
                                "marks": q.marks,
                            }
                            for q in questions
                        ]
                    else:
                        category_data["questions"] = []

                category_list.append(category_data)
            # category_list = [{"category_id": cat.category_id, "category_name": cat.name, "description": cat.description} for cat in categories]
            # get created user details
            Institute_data = (
                session.query(Institute)
                .filter(Institute.institute_id == exam.institute_id)
                .first()
            )
            created_user_name = None
            if exam.created_by:
                created_user = (
                    session.query(User).filter_by(user_id=exam.created_by).first()
                )
                if created_user:
                    created_user_name = created_user.full_name
            # updated user details
            updated_user_name = None
            if exam.updated_by:
                updated_user = (
                    session.query(User).filter_by(user_id=exam.updated_by).first()
                )
                if updated_user:
                    updated_user_name = updated_user.full_name

            active_or_attended = is_exam_active_or_attended(session, exam.exam_id)
            is_editable = not active_or_attended

            try:
                dept_rows = (
                    session.query(ExamsDepartments.department_id)
                    .filter(ExamsDepartments.exam_id == exam.exam_id)
                    .all()
                )
            except Exception:
                dept_rows = []
            try:
                team_rows = (
                    session.query(ExamsTeams.team_id)
                    .filter(ExamsTeams.exam_id == exam.exam_id)
                    .all()
                )
            except Exception:
                team_rows = []

            assigned_users = []
            if (getattr(exam, "test_mode", None) or "online") == "paper":
                try:
                    exam_id_str = str(exam.exam_id)
                    assignment_rows = (
                        session.query(QuestionPaperUserAssignment, User)
                        .join(User, func.cast(User.user_id, String) == func.cast(QuestionPaperUserAssignment.user_id, String))
                        .filter(func.cast(QuestionPaperUserAssignment.exam_id, String) == exam_id_str)
                        .order_by(User.full_name.asc())
                        .all()
                    )

                    sched_ids = [
                        str(r[0])
                        for r in session.query(func.cast(ExamSchedule.schedule_id, String))
                        .filter(func.cast(ExamSchedule.exam_id, String) == exam_id_str)
                        .all()
                    ]
                    valid_sched_ids = list(set([exam_id_str] + [s for s in sched_ids if s]))

                    from others.settings import get_ai_confidence_threshold
                    conf_threshold = get_ai_confidence_threshold(session)

                    for _, user in assignment_rows:
                        u_id = str(user.user_id)
                        # Resolve student attempt(s) for this paper exam
                        all_u_attempts = session.query(Exam_Attempt).filter(
                            func.cast(Exam_Attempt.user_id, String) == u_id,
                            func.cast(Exam_Attempt.schedule_id, String).in_(valid_sched_ids)
                        ).order_by(Exam_Attempt.started_date.desc(), Exam_Attempt.submitted_date.desc()).all()

                        u_pages_count = 0
                        u_status = "Not Evaluated"
                        u_score = None
                        u_pct = None

                        if all_u_attempts:
                            att_ids = [str(a.attempt_id) for a in all_u_attempts]
                            u_pages_count = session.query(AnswerSheetPage).filter(
                                func.cast(AnswerSheetPage.attempt_id, String).in_(att_ids)
                            ).count()

                            target_att = all_u_attempts[0]
                            has_manual_edits = False
                            
                            # Check if any answer has manual edits / teacher overrides
                            ans_ids = [str(r[0]) for r in session.query(Answer.answer_id).filter(
                                func.cast(Answer.attempt_id, String).in_(att_ids)
                            ).all()]
                            
                            has_need_to_check = False
                            if ans_ids:
                                mh_count = session.query(MarksHistory).filter(
                                    MarksHistory.answer_id.in_(ans_ids),
                                    or_(
                                        (MarksHistory.edit_reason.isnot(None) & (MarksHistory.edit_reason != '')),
                                        (MarksHistory.updated_by.isnot(None) & (MarksHistory.updated_by != '') & (MarksHistory.updated_by != 'SYSTEM') & (MarksHistory.updated_by != 'System') & (MarksHistory.updated_by != 'cac37fab-4de6-4792-969b-96e57e3c910a'))
                                    )
                                ).count()
                                if mh_count > 0:
                                    has_manual_edits = True

                                need_check_count = session.query(Answer).filter(
                                    Answer.answer_id.in_(ans_ids),
                                    or_(
                                        Answer.manual_review_required == 1,
                                        (Answer.ai_confidence.isnot(None) & (Answer.ai_confidence > 0) & (Answer.ai_confidence < conf_threshold))
                                    )
                                ).count()
                                if need_check_count > 0:
                                    has_need_to_check = True

                            if has_manual_edits:
                                u_status = "Manual Reviewed"
                            elif has_need_to_check:
                                u_status = "Need to Check"
                            elif u_pages_count > 0 or target_att.status in ("in_progress", "submitted", "evaluated"):
                                u_status = "AI Evaluated"
                            else:
                                u_status = "Not Evaluated"

                            # Calculate score from Answers or attempt.score
                            ans_sum = session.query(func.sum(Answer.marks_awarded)).filter(
                                func.cast(Answer.attempt_id, String).in_(att_ids)
                            ).scalar()

                            if ans_sum is not None:
                                u_score = round(float(ans_sum), 1)
                            elif target_att.score is not None and target_att.score > 0:
                                u_score = round(float(target_att.score), 1)

                            if u_score is not None and getattr(exam, "total_marks", None) and float(exam.total_marks) > 0:
                                u_pct = round((u_score / float(exam.total_marks)) * 100, 1)

                        assigned_users.append({
                            "user_id": u_id,
                            "full_name": user.full_name,
                            "email": user.email,
                            "user_name": getattr(user, "user_name", "") or "",
                            "roll_no": getattr(user, "user_name", "") or "",
                            "department_id": getattr(user, "department_id", "") or "",
                            "team_id": getattr(user, "team_id", "") or "",
                            "pages_count": u_pages_count,
                            "evaluation_status": u_status,
                            "status": u_status,
                            "score": u_score,
                            "marks_awarded": u_score,
                            "percentage": u_pct
                        })
                except Exception as assignment_err:
                    print(f"Error querying paper assignments for exam {exam.exam_id}: {assignment_err}", flush=True)

            sections_data = []
            try:
                sec_rows = (
                    session.query(ExamSection)
                    .filter(ExamSection.exam_id == exam.exam_id)
                    .order_by(ExamSection.order_number.asc())
                    .all()
                )
                for sec in sec_rows:
                    sec_id_str = str(sec.section_id)
                    eq_mappings = (
                        session.query(ExamQuestionMapping)
                        .filter(
                            ExamQuestionMapping.exam_id == exam.exam_id,
                            or_(
                                ExamQuestionMapping.section_id == sec_id_str,
                                ExamQuestionMapping.section_id == sec.section_id,
                                func.cast(ExamQuestionMapping.section_id, String) == sec_id_str,
                            )
                        )
                        .order_by(ExamQuestionMapping.order_number.asc())
                        .all()
                    )
                    sec_questions = []
                    for eqm in eq_mappings:
                        q_obj = session.query(Question).filter(
                            or_(
                                Question.question_id == eqm.question_id,
                                func.cast(Question.question_id, String) == str(eqm.question_id),
                            )
                        ).first()
                        if not q_obj:
                            continue
                        cat_name = ""
                        if eqm.category_id:
                            cat_obj = session.query(Categories).filter_by(category_id=eqm.category_id).first()
                            if cat_obj:
                                cat_name = cat_obj.name

                        q_media = session.query(QuestionMedia).filter_by(question_id=q_obj.question_id, active_status=1).order_by(QuestionMedia.order_number.asc()).all()
                        media_list = [{"media_id": str(m.media_id), "media_type": m.media_type, "file_url": m.file_url, "url": m.file_url, "gcs_path": m.gcs_path, "caption": m.caption} for m in q_media]
                        q_opts = session.query(Option).filter_by(question_id=q_obj.question_id, active_status=1).all()
                        opt_list = [{"id": opt.options_id, "text": opt.option_text, "image_url": opt.image_url, "url": opt.image_url, "is_correct": opt.is_correct} for opt in q_opts]

                        sec_questions.append({
                            "question_id": str(q_obj.question_id),
                            "id": str(q_obj.question_id),
                            "question_text": q_obj.question_text,
                            "question": q_obj.question_text,
                            "question_type": q_obj.question_type,
                            "marks": q_obj.marks,
                            "media": media_list,
                            "options": opt_list,
                            "category_id": eqm.category_id,
                            "category_name": cat_name,
                            "order_number": eqm.order_number,
                        })
                    sections_data.append({
                        "section_id": str(sec.section_id),
                        "id": str(sec.section_id),
                        "name": sec.name,
                        "question_type": sec.question_type,
                        "sub_heading": getattr(sec, "sub_heading", "") or getattr(sec, "instructions", "") or "",
                        "instructions": getattr(sec, "instructions", "") or getattr(sec, "sub_heading", "") or "",
                        "target_count": getattr(sec, "target_count", None),
                        "order_number": sec.order_number,
                        "questions": sec_questions,
                    })
            except Exception as sec_err:
                print(f"Error querying sections for exam {exam.exam_id}: {sec_err}", flush=True)
                sections_data = []

            exam_list.append(
                {
                    "exam_id": exam.exam_id,
                    "title": exam.title,
                    "subject_id": getattr(exam, "subject_id", None),
                    "subject_name": getattr(exam, "subject_name", None),
                    "institute": {
                        "institute_id": exam.institute_id,
                        "institute_name": Institute_data.name if Institute_data else "",
                    },
                    "departments": [r[0] for r in dept_rows],
                    "teams": [r[0] for r in team_rows],
                    "assigned_users": assigned_users,
                    "assigned_user_ids": [user["user_id"] for user in assigned_users],
                    "categories": category_list,
                    "sections": sections_data,
                    "description": exam.description,
                    "duration_mins": exam.duration_mins,
                    "total_questions": exam.total_questions,
                    "number_of_attempts": exam.number_of_attempts,
                    "pass_mark": exam.pass_mark,
                    "total_marks": getattr(exam, "total_marks", None),
                    "published": True if exam.published == 1 else False,
                    "public_access": True if exam.public_access == 1 else False,
                    "start_time": safe_isoformat(exam.start_time),
                    "end_time": safe_isoformat(exam.end_time),
                    "created_by": created_user_name,
                    "created_date": exam.created_date,
                    "updated_by": updated_user_name,
                    "updated_date": exam.updated_date,
                    "is_editable": is_editable,
                    "test_mode": getattr(exam, "test_mode", None) or "online",
                }
            )
        # institute_id	start_time	end_time	created_by	created_date	updated_by	updated_date	published
        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list,
        }
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}"
        )
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
            filter.append(
                or_(
                    func.lower(func.cast(Exam.institute_id, String))
                    == inst_val.lower(),
                    func.cast(Exam.institute_id, String) == inst_val,
                    Exam.institute_id == None,
                    Exam.institute_id == "",
                )
            )
        exams = session.query(Exam).filter(*filter).all()
        if exams is None or len(exams) == 0:
            return {"statusMessage": "No exams found", "status": False}, 404

        exam_list = []
        for exam in exams:
            exam_list.append(
                {
                    "id": exam.exam_id,
                    "title": exam.title,
                    "description": exam.description,
                }
            )

        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list,
        }
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}"
        )
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
        args = getattr(request, "args", {})
        user_id = args.get("user_id", None)
        institute_id = args.get("institute_id", None)
        department_id = args.get("department_id", None)
        team_id = args.get("team_id", None)

        eligible_schedule_ids = set()

        if user_id:
            user_obj = session.query(User).filter_by(user_id=user_id).first()
            user_dept_id = department_id or (getattr(user_obj, "department_id", None) if user_obj else None)
            user_team_id = team_id or (getattr(user_obj, "team_id", None) if user_obj else None)
            user_campus_id = getattr(user_obj, "campus_id", None) if user_obj else None

            mapping_conds = [ExamScheduleMapping.user_id == user_id]
            if user_dept_id:
                mapping_conds.append(ExamScheduleMapping.department_id == user_dept_id)
            if user_team_id:
                mapping_conds.append(ExamScheduleMapping.team_id == user_team_id)
            if user_campus_id:
                mapping_conds.append(ExamScheduleMapping.campus_id == user_campus_id)

            # 1. Mapped schedules for this user, their department, team, or campus
            mapped_rows = (
                session.query(ExamScheduleMapping.schedule_id)
                .join(ExamSchedule, ExamScheduleMapping.schedule_id == ExamSchedule.schedule_id)
                .filter(
                    ExamSchedule.published == 1,
                    or_(*mapping_conds)
                )
                .distinct()
                .all()
            )
            for (s_id,) in mapped_rows:
                if s_id:
                    eligible_schedule_ids.add(str(s_id))

            # 2. All schedules where the user has any attempt (in_progress, submitted, evaluated)
            attempt_rows = (
                session.query(Exam_Attempt.schedule_id)
                .filter(Exam_Attempt.user_id == user_id)
                .distinct()
                .all()
            )
            for (s_id,) in attempt_rows:
                if s_id:
                    eligible_schedule_ids.add(str(s_id))
        elif institute_id:
            # Fallback for admin overview by institute
            inst_rows = (
                session.query(ExamSchedule.schedule_id)
                .filter(
                    ExamSchedule.institute_id == institute_id,
                    ExamSchedule.published == 1,
                )
                .all()
            )
            for (s_id,) in inst_rows:
                if s_id:
                    eligible_schedule_ids.add(str(s_id))

        if not eligible_schedule_ids:
            return {"statusMessage": "No exams found", "status": True, "data": []}, 200

        # Query unique (ExamSchedule, Exam) pairs for all eligible schedule IDs
        rows = (
            session.query(ExamSchedule, Exam)
            .options(
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
                    ExamSchedule.updated_date,
                    ExamSchedule.enable_microphone,
                    ExamSchedule.enable_scan_text,
                    ExamSchedule.enable_camera,
                )
            )
            .join(Exam, ExamSchedule.exam_id == Exam.exam_id)
            .filter(ExamSchedule.schedule_id.in_(list(eligible_schedule_ids)))
            .all()
        )

        if not rows:
            return {"statusMessage": "No exams found", "status": True, "data": []}, 200

        scheduler_data = []
        seen_schedule_ids = set()

        for schedule_obj, exam_obj in rows:
            if not schedule_obj or str(schedule_obj.schedule_id) in seen_schedule_ids:
                continue
            seen_schedule_ids.add(str(schedule_obj.schedule_id))

            # get attempt data for this user and schedule
            user_id = args.get("user_id", None)
            attempts = (
                session.query(Exam_Attempt)
                .filter(
                    Exam_Attempt.user_id == user_id,
                    (
                        Exam_Attempt.schedule_id == schedule_obj.schedule_id
                        if schedule_obj
                        else None
                    ),
                )
                .all()
            )

            if not attempts:
                user_attempt = 0
            else:
                user_attempt = len(attempts)

            # Match the attempt represented by this user's list row. These are
            # the same fields used by the Test Review dialog.
            displayed_attempt = max(
                attempts,
                key=lambda attempt: getattr(attempt, "attempt_number", 0) or 0,
                default=None,
            )

            no_of_attempts = (
                schedule_obj.number_of_attempts
                if schedule_obj
                else exam_obj.number_of_attempts if exam_obj else 0
            )

            user_review_data = schedule_obj.user_review if schedule_obj else None
            user_review = False

            # check score and feedback for last attempt
            attempts = sorted(
                attempts, key=lambda x: getattr(x, "attempt_number", 0) or 0
            )
            last_attempt = attempts[-1] if attempts else None
            feedback = (
                getattr(last_attempt, "feedback", None)
                or getattr(last_attempt, "result", None)
                if last_attempt
                else ""
            )

            # if current time between start and end time, exam is active
            current_time = datetime.utcnow()
            attempted = user_attempt > 0
            expired = bool(
                schedule_obj.end_time and current_time > schedule_obj.end_time
            )
            # Finalize expired browser-abandoned attempts before calculating review eligibility.
            finalized_ids = finalize_expired_attempts(
                session, schedule_obj, attempts, current_time
            )
            for finalized_id in finalized_ids:
                try:
                    validate_answers(finalized_id)
                except Exception as eval_err:
                    print(f"AI evaluation warning for attempt {finalized_id}: {eval_err}")

            # Re-read attempts after finalization
            submitted_attempts = [
                attempt for attempt in attempts if is_review_eligible_attempt(attempt)
            ]
            in_progress_attempts = [
                attempt
                for attempt in attempts
                if getattr(attempt, "status", None) == "in_progress"
            ]
            has_in_progress = bool(in_progress_attempts)

            # An exam is completed by user ONLY IF there are submitted attempts AND no attempt is currently in progress
            completed_by_user = bool(submitted_attempts) and not has_in_progress
            review_mode = schedule_obj.review_mode or (
                "instant" if user_review_data == 1 else "no_review"
            )
            if submitted_attempts:
                if review_mode == "instant":
                    user_review = True
                elif review_mode == "after_schedule_ends":
                    user_review = expired
                elif review_mode == "after_everyone_finishes":
                    user_review = is_after_everyone_finished_available(
                        session, schedule_obj, current_time
                    )
                elif review_mode == "scheduled":
                    user_review = bool(
                        schedule_obj.review_at
                        and current_time >= schedule_obj.review_at
                        and (
                            not schedule_obj.review_end_at
                            or current_time <= schedule_obj.review_end_at
                        )
                    )
                elif review_mode in ("manual", "no_review"):
                    # Admin-controlled review requires both completed evaluation and the
                    # admin-controlled access gate to be enabled.
                    user_review = bool(schedule_obj.manual_review_enabled) and any(
                        attempt.status == "evaluated" for attempt in submitted_attempts
                    )

            # The review row represents one submitted attempt. With one-time
            # review, select the newest eligible attempt that is still unseen.
            review_candidates = submitted_attempts
            if review_mode in ("manual", "no_review"):
                review_candidates = [
                    attempt
                    for attempt in submitted_attempts
                    if attempt.status == "evaluated"
                ]
            unreviewed_attempts = [
                attempt
                for attempt in review_candidates
                if not getattr(attempt, "review_opened_at", None)
            ]
            displayed_review_attempt = max(
                (
                    unreviewed_attempts
                    if not bool(schedule_obj.multiple_review) and unreviewed_attempts
                    else review_candidates
                ),
                key=lambda attempt: getattr(attempt, "attempt_number", 0) or 0,
                default=None,
            )
            already_reviewed = bool(review_candidates) and not bool(unreviewed_attempts)
            if already_reviewed and not bool(schedule_obj.multiple_review):
                user_review = False

            effective_pass_mark = getattr(schedule_obj, "pass_mark", None)
            if effective_pass_mark is None:
                effective_pass_mark = getattr(exam_obj, "pass_mark", 0) or 0

            exam_total_marks, _ = get_exam_total_marks(
                session,
                exam_id=getattr(exam_obj, "exam_id", None) if exam_obj else None,
                schedule_id=getattr(schedule_obj, "schedule_id", None) if schedule_obj else None,
            )
            if not exam_total_marks:
                exam_total_marks = float(getattr(exam_obj, "total_marks", 0) or 0)

            # Check if any attempt passed
            has_passed_attempt = any(
                str(getattr(a, "feedback", "") or getattr(a, "result", ""))
                .strip()
                .lower()
                in ("pass", "passed")
                or (
                    getattr(a, "percentage", None) is not None
                    and getattr(a, "percentage", None) >= effective_pass_mark
                )
                or (
                    getattr(a, "score", None) is not None
                    and exam_total_marks > 0
                    and (float(a.score) / float(exam_total_marks) * 100) >= effective_pass_mark
                )
                for a in attempts
            )

            if has_in_progress:
                type = "active"
            elif schedule_obj.start_time <= current_time <= schedule_obj.end_time:
                type = "active"
                if has_passed_attempt or str(feedback).strip().lower() in (
                    "pass",
                    "passed",
                ):
                    type = "completed"
            elif schedule_obj.end_time and current_time > schedule_obj.end_time:
                type = "completed"
            else:
                type = "upcoming"

            if not has_in_progress:
                if no_of_attempts <= user_attempt or has_passed_attempt:
                    type = "completed"  # if no of attempts exceeded or user passed, move to completed

            attempts_history = []
            active_remaining_seconds = None
            active_answered_count = None

            if attempts:
                sorted_atts = sorted(
                    attempts, key=lambda a: getattr(a, "attempt_number", 0) or 0
                )
                for att in sorted_atts:
                    att_status = getattr(att, "status", None)
                    is_in_progress = att_status == "in_progress"
                    att_score = (
                        getattr(att, "score", None) if not is_in_progress else None
                    )
                    att_pass_mark = effective_pass_mark
                    att_pct = (
                        getattr(att, "percentage", None) if not is_in_progress else None
                    )
                    if (
                        att_pct is None
                        and att_score is not None
                        and exam_total_marks > 0
                    ):
                        att_pct = round((float(att_score) / float(exam_total_marks)) * 100, 2)
                    raw_result = getattr(att, "feedback", None) or getattr(
                        att, "result", None
                    )

                    remaining_seconds = None
                    answered_count = None
                    if is_in_progress:
                        att_result = "In Progress"
                        duration_mins = int(
                            getattr(exam_obj, "duration_mins", 0)
                            or getattr(schedule_obj, "duration_mins", 0)
                            or 30
                        )
                        if getattr(att, "remaining_seconds", None) is not None:
                            remaining_seconds = max(0, int(att.remaining_seconds))
                        else:
                            remaining_seconds = max(0, int(duration_mins * 60))

                        if schedule_obj and schedule_obj.end_time:
                            sched_rem = max(
                                0,
                                int(
                                    (
                                        schedule_obj.end_time - current_time
                                    ).total_seconds()
                                ),
                            )
                            remaining_seconds = min(remaining_seconds, sched_rem)
                        answered_count = (
                            session.query(func.count(func.distinct(Answer.question_id)))
                            .filter(Answer.attempt_id == att.attempt_id)
                            .scalar()
                            or 0
                        )
                        active_remaining_seconds = remaining_seconds
                        active_answered_count = answered_count
                    elif att_pct is not None:
                        att_result = "Passed" if att_pct >= att_pass_mark else "Failed"
                        if att.percentage is None or att.percentage != att_pct or att.feedback != att_result:
                            try:
                                att.percentage = att_pct
                                att.feedback = att_result
                                session.add(att)
                                session.commit()
                            except Exception:
                                pass
                    elif raw_result and str(raw_result).strip():
                        str_res = str(raw_result).strip().lower()
                        if str_res in ("pass", "passed"):
                            att_result = "Passed"
                        elif str_res in ("fail", "failed"):
                            att_result = "Failed"
                        else:
                            att_result = str(raw_result).strip()
                    elif att_score is not None and exam_total_marks > 0:
                        pct = (att_score / exam_total_marks) * 100
                        att_result = "Passed" if pct >= att_pass_mark else "Failed"
                    else:
                        att_result = (
                            "Submitted"
                            if att_status in ("submitted", "evaluated")
                            else "In Progress"
                        )

                    submitted_dt = getattr(att, "submitted_date", None)
                    att_review_opened = getattr(att, "review_opened_at", None)
                    att_review_viewed = bool(att_review_opened)
                    is_multi = bool(schedule_obj.multiple_review)
                    if not user_review:
                        att_review_available = False
                    elif not is_multi and att_review_viewed:
                        att_review_available = False
                    else:
                        att_review_available = att_status in ("submitted", "evaluated")

                    attempts_history.append(
                        {
                            "attempt_id": str(getattr(att, "attempt_id", "")),
                            "attempt_number": getattr(att, "attempt_number", 1),
                            "status": att_status,
                            "score": att_score,
                            "percentage": att_pct,
                            "result": att_result,
                            "started_date": safe_utc_isoformat(
                                getattr(att, "started_date", None)
                            ),
                            "submitted_date": (
                                safe_utc_isoformat(submitted_dt)
                                if submitted_dt
                                else None
                            ),
                            "remaining_seconds": remaining_seconds,
                            "answered_count": answered_count,
                            "is_in_progress": is_in_progress,
                            "review_opened_at": safe_utc_isoformat(att_review_opened) if att_review_opened else None,
                            "review_viewed": att_review_viewed,
                            "review_consumed": att_review_viewed and not is_multi,
                            "review_available": att_review_available,
                        }
                    )

            disp_score = (
                getattr(displayed_attempt, "score", None)
                if displayed_attempt
                else None
            )
            disp_raw_result = getattr(displayed_attempt, "feedback", None) or getattr(
                displayed_attempt, "result", None
            )
            disp_result = None
            disp_pct = (
                getattr(displayed_attempt, "percentage", None)
                if displayed_attempt
                else None
            )
            if disp_pct is None and disp_score is not None and exam_total_marks > 0:
                disp_pct = round((float(disp_score) / float(exam_total_marks)) * 100, 2)
            if disp_pct is not None:
                disp_result = "Passed" if disp_pct >= effective_pass_mark else "Failed"
            elif disp_raw_result and str(disp_raw_result).strip():
                str_disp = str(disp_raw_result).strip().lower()
                if str_disp in ("pass", "passed"):
                    disp_result = "Passed"
                elif str_disp in ("fail", "failed"):
                    disp_result = "Failed"
                else:
                    disp_result = str(disp_raw_result).strip()

            scheduler_data.append(
                {
                    "review_available": user_review,
                    "review_mode": review_mode,
                    "multiple_review": bool(schedule_obj.multiple_review),
                    "review_attempt_id": getattr(
                        displayed_review_attempt, "attempt_id", None
                    ),
                    "attempted": attempted,
                    "completed_by_user": completed_by_user,
                    "has_in_progress": has_in_progress,
                    "remaining_seconds": active_remaining_seconds,
                    "answered_count": active_answered_count,
                    "expired": expired,
                    "user_attempt": user_attempt,
                    "attempts_history": attempts_history,
                    # Return raw datetimes so Flask serializes them exactly like
                    # the Started/Submitted values in the Test Review API.
                    "user_start_time": getattr(displayed_attempt, "started_date", None),
                    "user_end_time": getattr(displayed_attempt, "submitted_date", None),
                    "user_percentage": disp_pct,
                    "user_score": disp_score,
                    "user_result": disp_result,
                    "total_marks": exam_total_marks,
                    "mapping_id": None,
                    "schedule_id": getattr(schedule_obj, "schedule_id", None),
                    "schedule_title": getattr(schedule_obj, "title", None),
                    "title": getattr(schedule_obj, "title", None) or getattr(exam_obj, "title", None),
                    "name": getattr(schedule_obj, "title", None) or getattr(exam_obj, "title", None),
                    "institute_id": getattr(schedule_obj, "institute_id", None),
                    "exam_id": getattr(exam_obj, "exam_id", None),
                    "exam_title": getattr(exam_obj, "title", None),
                    "duration_mins": getattr(exam_obj, "duration_mins", None),
                    "total_questions": getattr(exam_obj, "total_questions", None),
                    "pass_mark": effective_pass_mark,
                    "number_of_attempts": getattr(
                        schedule_obj, "number_of_attempts", None
                    ),
                    "user_review": user_review,
                    "start_time": safe_utc_isoformat(
                        getattr(
                            schedule_obj,
                            "start_time",
                            getattr(exam_obj, "start_time", None),
                        )
                    ),
                    "end_time": safe_utc_isoformat(
                        getattr(
                            schedule_obj,
                            "end_time",
                            getattr(exam_obj, "end_time", None),
                        )
                    ),
                    "created_by": getattr(
                        schedule_obj,
                        "created_by",
                        getattr(exam_obj, "created_by", None),
                    ),
                    "created_date": getattr(
                        schedule_obj,
                        "created_date",
                        getattr(exam_obj, "created_date", None),
                    ),
                    "updated_by": getattr(schedule_obj, "updated_by", None),
                    "updated_date": getattr(schedule_obj, "updated_date", None),
                    "enable_microphone": True if getattr(schedule_obj, "enable_microphone", None) is None else bool(schedule_obj.enable_microphone),
                    "enable_scan_text": True if getattr(schedule_obj, "enable_scan_text", None) is None else bool(schedule_obj.enable_scan_text),
                    "enable_camera": True if getattr(schedule_obj, "enable_camera", None) is None else bool(schedule_obj.enable_camera),
                    "type": type,
                }
            )

            # print(getattr(schedule_obj, "schedule_id", None))
            # print(row.schedule_id)

        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": scheduler_data,
        }
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}"
        )
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
            try:
                ca_val = str(args["created_after"]).strip()
                created_after = datetime.fromisoformat(
                    ca_val.replace("Z", "+00:00")
                )
                filter.append(Exam.created_date >= created_after)
            except Exception as e:
                print(f"Error parsing created_after date in exams: {e}", flush=True)
        if args.get("created_before", None):
            try:
                cb_val = str(args["created_before"]).strip()
                created_before = datetime.fromisoformat(
                    cb_val.replace("Z", "+00:00")
                )
                if len(cb_val) <= 10 or (created_before.hour == 0 and created_before.minute == 0 and created_before.second == 0):
                    created_before = created_before.replace(hour=23, minute=59, second=59, microsecond=999999)
                filter.append(Exam.created_date <= created_before)
            except Exception as e:
                print(f"Error parsing created_before date in exams: {e}", flush=True)
        if args.get("created_by", None):
            filter.append(Exam.created_by == args["created_by"])

        test_mode_arg = args.get("test_mode", None)
        if test_mode_arg:
            tm_val = str(test_mode_arg).strip().lower()
            if tm_val == 'paper':
                filter.append(Exam.test_mode == 'paper')
            elif tm_val == 'online':
                filter.append(or_(Exam.test_mode == 'online', Exam.test_mode == None, Exam.test_mode == ''))
        else:
            filter.append(or_(Exam.test_mode == 'online', Exam.test_mode == None, Exam.test_mode == ''))

        exams = session.query(Exam).filter(*filter).all()
        if exams is None or len(exams) == 0:
            return {"statusMessage": "No exams found", "status": False, "data": []}, 200

        exam_list = []
        for exam in exams:
            exam_list.append(
                {
                    "id": exam.exam_id,
                    "title": exam.title,
                    "description": exam.description,
                    "total_questions": exam.total_questions,
                    "pass_mark": exam.pass_mark,
                    "duration_mins": exam.duration_mins,
                }
            )

        json_data = {
            "statusMessage": "Exams retrieved successfully",
            "status": True,
            "data": exam_list,
        }
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving exams at line {sys.exc_info()[-1].tb_lineno}"
        )
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
        exam_schedule = (
            session.query(ExamSchedule)
            .filter(
                ExamSchedule.schedule_id == schedule_id, ExamSchedule.published == 1
            )
            .first()
        )
        if not exam_schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404

        # Verify that the student is authorized/assigned to this test or is an admin
        user_obj = session.query(User).filter_by(user_id=user_id).first()
        is_user_admin = user_obj and str(getattr(user_obj, "user_role", "") or "").lower() in ("admin", "super_admin", "superadmin", "super-admin")

        if not is_user_admin:
            mapping_conditions = [ExamScheduleMapping.user_id == user_id]
            if user_obj:
                if getattr(user_obj, "department_id", None):
                    mapping_conditions.append(ExamScheduleMapping.department_id == user_obj.department_id)
                if getattr(user_obj, "team_id", None):
                    mapping_conditions.append(ExamScheduleMapping.team_id == user_obj.team_id)
                if getattr(user_obj, "campus_id", None):
                    mapping_conditions.append(ExamScheduleMapping.campus_id == user_obj.campus_id)

            is_assigned = (
                session.query(ExamScheduleMapping)
                .filter(
                    ExamScheduleMapping.schedule_id == schedule_id,
                    or_(*mapping_conditions)
                )
                .first()
            )

            # Also allow if user already has an existing attempt (e.g., resuming in-progress attempt)
            has_attempt = (
                session.query(Exam_Attempt)
                .filter_by(schedule_id=schedule_id, user_id=user_id)
                .first()
            )

            if not is_assigned and not has_attempt:
                return {
                    "statusMessage": "You are not authorized to access this exam",
                    "status": False,
                }, 403

            # Check if exam schedule has not started yet
            if exam_schedule.start_time and datetime.utcnow() < exam_schedule.start_time:
                return {
                    "statusMessage": "This exam has not started yet",
                    "status": False,
                }, 400

        # get Exam details
        exam_data = session.query(Exam).filter_by(exam_id=exam_schedule.exam_id).first()

        # get ExamMapping details
        exam_mapping = (
            session.query(ExamMapping).filter_by(exam_id=exam_schedule.exam_id).all()
        )

        category_ids = [
            m.category_id for m in exam_mapping if getattr(m, "category_id", None)
        ]

        randomized_question_ids = []
        non_randomized_question_ids = []

        for mapping in exam_mapping:
            if mapping.randomize_questions == 1:
                # Get random questions for this category
                all_questions = (
                    session.query(QuestionMapping.question_id)
                    .filter(QuestionMapping.category_id == mapping.category_id)
                    .all()
                )
                question_ids_for_category = [q.question_id for q in all_questions]

                # Randomly select the specified number of questions
                if len(question_ids_for_category) >= mapping.number_of_questions:
                    selected_questions = random.sample(
                        question_ids_for_category, mapping.number_of_questions
                    )
                else:
                    selected_questions = (
                        question_ids_for_category  # Take all if not enough
                    )
                randomized_question_ids.extend(selected_questions)
            else:
                # Prefer the fixed questions saved with the test. Legacy tests
                # may have the category mapping but no ExamQuestionMapping rows;
                # fill those from the same category pool used when tests are
                # created so a valid test does not fail launch with a 404.
                predefined_questions = (
                    session.query(ExamQuestionMapping.question_id)
                    .filter(
                        ExamQuestionMapping.exam_id == exam_schedule.exam_id,
                        ExamQuestionMapping.category_id == mapping.category_id,
                    )
                    .all()
                )
                fixed_question_ids = [q.question_id for q in predefined_questions]
                non_randomized_question_ids.extend(
                    _resolve_fixed_question_ids(
                        session,
                        mapping.category_id,
                        mapping.number_of_questions or len(fixed_question_ids),
                        fixed_question_ids,
                    )
                )

        # Combine both randomized and non-randomized questions
        question_ids = randomized_question_ids + non_randomized_question_ids

        questions = (
            session.query(Question).filter(Question.question_id.in_(question_ids)).all()
        )
        if not questions:
            return {
                "statusMessage": "No questions found for this test",
                "status": False,
            }, 404

        # Check for existing in-progress attempt for this schedule and user
        existing_attempt = (
            session.query(Exam_Attempt)
            .filter_by(schedule_id=schedule_id, user_id=user_id)
            .order_by(Exam_Attempt.attempt_number.desc())
            .first()
        )

        current_attempt = None
        saved_answers = {}
        duration_mins = exam_data.duration_mins or 30

        if existing_attempt and existing_attempt.status == "in_progress":
            finalized_ids = finalize_expired_attempts(
                session, exam_schedule, [existing_attempt]
            )
            if finalized_ids:
                for fid in finalized_ids:
                    try:
                        validate_answers(fid)
                    except Exception as eval_err:
                        print(f"AI evaluation warning for attempt {fid}: {eval_err}")
            else:
                current_attempt = existing_attempt
                # Fetch existing saved answers for this attempt
                saved_answers_records = (
                    session.query(Answer)
                    .filter_by(attempt_id=current_attempt.attempt_id)
                    .all()
                )
                for ans in saved_answers_records:
                    qid = ans.question_id
                    if ans.selected_option_id:
                        if qid in saved_answers:
                            if isinstance(saved_answers[qid], list):
                                saved_answers[qid].append(ans.selected_option_id)
                            else:
                                saved_answers[qid] = [
                                    saved_answers[qid],
                                    ans.selected_option_id,
                                ]
                        else:
                            saved_answers[qid] = ans.selected_option_id
                    elif ans.written_answer is not None:
                        saved_answers[qid] = ans.written_answer

        if not current_attempt:
            attempt_number = (
                (existing_attempt.attempt_number + 1) if existing_attempt else 1
            )
            max_allowed_attempts = (
                exam_schedule.number_of_attempts
                if (exam_schedule and exam_schedule.number_of_attempts is not None and exam_schedule.number_of_attempts > 0)
                else (exam_data.number_of_attempts if (exam_data and exam_data.number_of_attempts is not None and exam_data.number_of_attempts > 0) else 1)
            )
            if attempt_number > max_allowed_attempts:
                return {
                    "statusMessage": f"Maximum attempts ({max_allowed_attempts}) reached for this test",
                    "status": False,
                }, 400

            initial_rem_sec = duration_mins * 60
            if exam_schedule and exam_schedule.end_time:
                sched_rem = max(
                    0, int((exam_schedule.end_time - datetime.utcnow()).total_seconds())
                )
                initial_rem_sec = min(initial_rem_sec, sched_rem)

            current_attempt = Exam_Attempt(
                schedule_id=schedule_id,
                user_id=user_id,
                attempt_number=attempt_number,
                started_date=datetime.utcnow(),
                status="in_progress",
                remaining_seconds=initial_rem_sec,
            )
            session.add(current_attempt)
            session.commit()
            remaining_seconds = initial_rem_sec
        else:
            if current_attempt.remaining_seconds is not None:
                remaining_seconds = max(0, int(current_attempt.remaining_seconds))
            else:
                remaining_seconds = max(0, int(duration_mins * 60))

            if exam_schedule and exam_schedule.end_time:
                sched_rem = max(
                    0, int((exam_schedule.end_time - datetime.utcnow()).total_seconds())
                )
                remaining_seconds = min(remaining_seconds, sched_rem)

            current_attempt.remaining_seconds = remaining_seconds
            session.commit()

        # Normalize multi-choice answers to lists so client checkbox state restores properly
        for q in questions:
            qid = str(q.question_id)
            if (
                getattr(q, "question_type", "") or ""
            ).lower() == "multi" and qid in saved_answers:
                if not isinstance(saved_answers[qid], list):
                    saved_answers[qid] = [saved_answers[qid]]

        enable_mic = bool(exam_schedule.enable_microphone) if (exam_schedule and hasattr(exam_schedule, "enable_microphone") and exam_schedule.enable_microphone is not None) else True
        enable_scan = bool(exam_schedule.enable_scan_text) if (exam_schedule and hasattr(exam_schedule, "enable_scan_text") and exam_schedule.enable_scan_text is not None) else True
        enable_cam = bool(exam_schedule.enable_camera) if (exam_schedule and hasattr(exam_schedule, "enable_camera") and exam_schedule.enable_camera is not None) else True

        schedule_title = (
            exam_schedule.title
            if (exam_schedule and hasattr(exam_schedule, "title") and exam_schedule.title and str(exam_schedule.title).strip())
            else None
        )

        exam_detail = {
            "exam_id": exam_data.exam_id,
            "schedule_id": schedule_id,
            "title": schedule_title or (exam_data.title if exam_data else ""),
            "attempt_id": current_attempt.attempt_id,
            "duration_mins": duration_mins,
            "total_questions": exam_data.total_questions,
            "started_date": (
                safe_utc_isoformat(current_attempt.started_date)
                if current_attempt.started_date
                else None
            ),
            "remaining_seconds": remaining_seconds,
            "saved_answers": saved_answers,
            "enable_microphone": enable_mic,
            "enable_scan_text": enable_scan,
            "enable_camera": enable_cam,
        }

        # get all the Questions and options for exam id
        question_list = []
        rng = random.Random(str(current_attempt.attempt_id))

        for question in questions:
            q_media = (
                session.query(QuestionMedia)
                .filter_by(question_id=question.question_id, active_status=1)
                .order_by(QuestionMedia.order_number.asc())
                .all()
            )
            media_list = [
                {
                    "media_id": str(m.media_id),
                    "media_type": m.media_type,
                    "file_url": m.file_url,
                    "url": m.file_url,
                    "gcs_path": m.gcs_path,
                    "original_filename": m.original_filename,
                    "caption": m.caption,
                }
                for m in q_media
            ]

            options = (
                session.query(Option).filter_by(question_id=question.question_id, active_status=1).all()
            )
            option_list = [
                {
                    "id": opt.options_id,
                    "text": opt.option_text,
                    "image_url": opt.image_url,
                    "url": opt.image_url,
                    "gcs_path": opt.gcs_path
                }
                for opt in options
            ]
            if question.question_type in ["choose", "multi"] and option_list:
                rng.shuffle(option_list)

            question_list.append(
                {
                    "question_id": question.question_id,
                    "id": question.question_id,
                    "question_text": question.question_text,
                    "question": question.question_text,
                    "question_type": question.question_type,
                    "type": question.question_type,
                    "marks": question.marks if question.marks is not None else 1,
                    "media": media_list,
                    "options": (
                        option_list
                        if question.question_type in ["choose", "multi"]
                        else []
                    ),
                }
            )

        rng.shuffle(question_list)

        json_data = {
            "statusMessage": "Exam details retrieved successfully",
            "status": True,
            "data": {
                "title": schedule_title or (exam_data.title if exam_data else ""),
                "exam_detail": exam_detail,
                "questions": question_list,
                "enable_microphone": enable_mic,
                "enable_scan_text": enable_scan,
                "enable_camera": enable_cam,
            },
        }
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving exam details at line {sys.exc_info()[-1].tb_lineno}"
        )
        json_data = {
            "statusMessage": "Error retrieving exam details",
            "status": False,
        }
        return json_data, 500


def get_active_exam_status(attempt_id, user_id, remaining_seconds=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        # Bind the lightweight publication check to the JWT-authenticated attempt owner.
        exam_attempt = (
            session.query(Exam_Attempt)
            .filter(
                Exam_Attempt.attempt_id == attempt_id, Exam_Attempt.user_id == user_id
            )
            .first()
        )
        if not exam_attempt:
            return {"statusMessage": "Attempt not found", "status": False}, 404

        if remaining_seconds is not None and exam_attempt.status == "in_progress":
            try:
                rem_val = max(0, int(float(remaining_seconds)))
                exam_attempt.remaining_seconds = rem_val
                session.commit()
            except (ValueError, TypeError):
                pass

        exam_schedule = (
            session.query(ExamSchedule)
            .filter_by(schedule_id=exam_attempt.schedule_id)
            .first()
        )
        if not exam_schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404

        finalized_ids = finalize_expired_attempts(
            session, exam_schedule, [exam_attempt]
        )
        for finalized_id in finalized_ids:
            try:
                validate_answers(finalized_id)
            except Exception as eval_err:
                print(f"AI evaluation warning for attempt {finalized_id}: {eval_err}")

        return {
            "statusMessage": "Exam status retrieved successfully",
            "status": True,
            "published": bool(exam_schedule.published),
            "attempt_status": exam_attempt.status,
        }, 200
    except Exception as e:
        print(
            f"{e} occurred while retrieving active exam status at line {sys.exc_info()[-1].tb_lineno}"
        )
        return {"statusMessage": "Error retrieving exam status", "status": False}, 500
    finally:
        session.close()


def autosave_exam_answers(data, authenticated_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    try:
        attempt = (
            session.query(Exam_Attempt)
            .filter_by(attempt_id=data.get("attempt_id"))
            .first()
        )
        if not attempt or (
            authenticated_user_id and str(attempt.user_id) != str(authenticated_user_id)
        ):
            return {"statusMessage": "Attempt not found", "status": False}, 404
        if attempt.status != "in_progress":
            return {
                "statusMessage": "Attempt is already finalized",
                "status": False,
            }, 409
        _replace_attempt_answers(session, attempt, data.get("answers", {}))
        rem_sec = data.get("remaining_seconds")
        if rem_sec is not None:
            try:
                attempt.remaining_seconds = max(0, int(float(rem_sec)))
            except (ValueError, TypeError):
                pass
        session.commit()
        return {"statusMessage": "Answers saved", "status": True}, 200
    except Exception as e:
        session.rollback()
        print(
            f"{e} occurred while autosaving exam answers at line {sys.exc_info()[-1].tb_lineno}"
        )
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
        exam_attempt = (
            session.query(Exam_Attempt).filter_by(attempt_id=attempt_id).first()
        )
        if not exam_attempt or (
            authenticated_user_id
            and str(exam_attempt.user_id) != str(authenticated_user_id)
        ):
            session.close()
            return {"statusMessage": "Attempt not found", "status": False}, 404

        if exam_attempt.status in ("submitted", "evaluated"):
            session.close()
            return {
                "statusMessage": "Exam attempt has already been submitted",
                "status": True,
                "alreadySubmitted": True,
            }, 200

        if exam_attempt.status != "in_progress":
            session.close()
            return {
                "statusMessage": "Exam attempt is not in progress",
                "status": False,
                "errorCode": "INVALID_ATTEMPT_STATUS",
            }, 400

        # The authenticated attempt is authoritative; client identifiers are compatibility hints only.
        user_id = exam_attempt.user_id
        attempt_schedule_id = exam_attempt.schedule_id
        exam_schedule = (
            session.query(ExamSchedule)
            .filter(
                ExamSchedule.schedule_id == attempt_schedule_id,
                ExamSchedule.published == 1,
            )
            .first()
        )
        if not exam_schedule:
            session.close()
            return {
                "statusMessage": "This test has been stopped by the administrator.",
                "status": False,
                "errorCode": "EXAM_UNPUBLISHED",
            }, 409

        # Store server UTC so malformed or timezone-aware client dates cannot block submission.
        submitted_date = datetime.utcnow()
        schedule_id = attempt_schedule_id

        # Save the final snapshot and status atomically so retries cannot duplicate answers.
        _replace_attempt_answers(session, exam_attempt, answers)
        exam_attempt.submitted_date = submitted_date
        exam_attempt.remaining_seconds = 0
        exam_attempt.status = "submitted"
        session.commit()
        session.close()
        try:
            validate_answers(attempt_id)
        except Exception as eval_err:
            print(f"AI evaluation warning for attempt {attempt_id}: {eval_err}")
        json_data = {
            "statusMessage": "Exam answers submitted successfully",
            "status": True,
        }
        return json_data, 200
    except Exception as e:
        session.rollback()
        session.close()
        print(
            f"{e} occurred while submitting exam answers at line {sys.exc_info()[-1].tb_lineno}"
        )
        json_data = {
            "statusMessage": "Error submitting exam answers",
            "status": False,
        }
        return json_data, 500


def get_student_evaluation_details(request, current_user=None):
    """
    Returns full evaluation details for a student on a published paper exam.
    Left pane: AnswerSheetPage items (page images)
    Right pane: Questions, Answer keys/Model answers, AI suggestions, Teacher overrides,
                Review comments (points missed/incorrect/incomplete), Marks history.
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        args = request.args or {}
        exam_id = args.get("exam_id")
        user_id = args.get("user_id")
        attempt_id = args.get("attempt_id")

        if not exam_id and not attempt_id:
            session.close()
            return {"statusMessage": "exam_id or attempt_id is required", "status": False}, 400

        # Resolve Attempt
        attempt = None
        if attempt_id:
            attempt = session.query(Exam_Attempt).filter(Exam_Attempt.attempt_id == attempt_id).first()
            if attempt and not user_id:
                user_id = str(attempt.user_id)
            if attempt and not exam_id:
                sched = session.query(ExamSchedule).filter(ExamSchedule.schedule_id == attempt.schedule_id).first()
                exam_id = str(sched.exam_id) if sched else str(attempt.schedule_id)

        if not attempt and exam_id and user_id:
            sched_ids = [
                str(r[0])
                for r in session.query(func.cast(ExamSchedule.schedule_id, String))
                .filter(func.cast(ExamSchedule.exam_id, String) == str(exam_id))
                .all()
            ]
            valid_sched_ids = list(set([str(exam_id)] + [s for s in sched_ids if s]))

            attempt = session.query(Exam_Attempt).filter(
                func.cast(Exam_Attempt.user_id, String) == str(user_id),
                func.cast(Exam_Attempt.schedule_id, String).in_(valid_sched_ids)
            ).order_by(Exam_Attempt.started_date.desc(), Exam_Attempt.submitted_date.desc()).first()

        # Resolve Exam
        exam = session.query(Exam).filter(Exam.exam_id == exam_id).first()
        if not exam:
            session.close()
            return {"statusMessage": "Exam not found", "status": False}, 404

        # Resolve Student User
        student = session.query(User).filter(User.user_id == user_id).first() if user_id else None

        # Fetch Answer Sheet Pages (strictly unique by page_number)
        pages_data = []
        if attempt:
            pages = session.query(AnswerSheetPage).filter(
                AnswerSheetPage.attempt_id == attempt.attempt_id
            ).order_by(AnswerSheetPage.page_number.asc(), AnswerSheetPage.created_date.desc()).all()
            seen_page_nums = set()
            for p in pages:
                if p.page_number not in seen_page_nums:
                    seen_page_nums.add(p.page_number)
                    img_path = p.image_path or ""
                    img_url = img_path if img_path.startswith("http") else f"/edu/api/uploads/answer_sheets/{img_path}"
                    pages_data.append({
                        "page_id": str(p.page_id),
                        "page_number": p.page_number,
                        "image_url": img_url
                    })
            pages_data.sort(key=lambda x: x["page_number"])

        # Fetch Questions & Answer Keys in exact sequential section/question order
        sec_rows = (
            session.query(ExamSection)
            .filter(ExamSection.exam_id == exam_id)
            .order_by(ExamSection.order_number.asc(), ExamSection.created_date.asc())
            .all()
        )

        eqm_rows = []
        seen_q_ids = set()

        if sec_rows:
            for sec in sec_rows:
                sec_id_str = str(sec.section_id)
                sec_eqms = (
                    session.query(ExamQuestionMapping, Question)
                    .join(Question, Question.question_id == ExamQuestionMapping.question_id)
                    .filter(
                        ExamQuestionMapping.exam_id == exam_id,
                        or_(
                            ExamQuestionMapping.section_id == sec_id_str,
                            ExamQuestionMapping.section_id == sec.section_id,
                            func.cast(ExamQuestionMapping.section_id, String) == sec_id_str,
                        )
                    )
                    .order_by(ExamQuestionMapping.order_number.asc())
                    .all()
                )
                for eqm, q in sec_eqms:
                    if str(q.question_id) not in seen_q_ids:
                        seen_q_ids.add(str(q.question_id))
                        eqm_rows.append((eqm, q, sec.name))

        # Catch any remaining questions not mapped to a specific section
        rem_eqms = (
            session.query(ExamQuestionMapping, Question)
            .join(Question, Question.question_id == ExamQuestionMapping.question_id)
            .filter(ExamQuestionMapping.exam_id == exam_id)
            .order_by(ExamQuestionMapping.order_number.asc())
            .all()
        )
        for eqm, q in rem_eqms:
            if str(q.question_id) not in seen_q_ids:
                seen_q_ids.add(str(q.question_id))
                eqm_rows.append((eqm, q, None))

        questions_data = []
        total_exam_marks = float(exam.total_marks or 0)
        calculated_total_possible = 0.0

        for idx, (eqm, q, sec_name) in enumerate(eqm_rows):
            q_marks = float(q.marks or 1.0)
            calculated_total_possible += q_marks

            # Resolve Model Answer from Options
            options = session.query(Option).filter(Option.question_id == q.question_id).all()
            correct_opts = [opt for opt in options if str(opt.is_correct).lower() in ("1", "true")]
            model_answer = ""
            if correct_opts:
                model_answer = correct_opts[0].option_text or ""
            elif options:
                model_answer = options[0].option_text or ""

            # Resolve Existing Answer Record
            ans = None
            if attempt:
                ans = session.query(Answer).filter(
                    Answer.attempt_id == attempt.attempt_id,
                    Answer.question_id == q.question_id
                ).first()

            marks_awarded = float(ans.marks_awarded or 0.0) if ans else 0.0
            ai_marks = float(ans.ai_marks) if (ans and ans.ai_marks is not None) else None
            ai_confidence = ans.ai_confidence if (ans and ans.ai_confidence is not None) else None
            feedback = ans.feedback if ans else ""
            manual_marks = float(ans.manual_marks) if (ans and ans.manual_marks is not None) else None
            manual_review_required = bool(ans.manual_review_required) if ans else False

            # Resolve Review Comments (Points Missed, Incorrect, Incomplete)
            review_comments = []
            if attempt:
                rc_rows = session.query(ExamReviewComments).filter(
                    ExamReviewComments.attempt_id == attempt.attempt_id,
                    ExamReviewComments.question_id == q.question_id,
                    or_(ExamReviewComments.is_deleted == 0, ExamReviewComments.is_deleted.is_(None))
                ).order_by(ExamReviewComments.created_date.asc()).all()
                for rc in rc_rows:
                    review_comments.append({
                        "comment_id": str(rc.comment_id),
                        "comment_text": rc.comment_text,
                        "category": rc.category or "missing",
                        "action": rc.action,
                        "updated_by": rc.updated_by or rc.created_by,
                        "updated_date": rc.updated_date.isoformat() if rc.updated_date else (rc.created_date.isoformat() if rc.created_date else None),
                        "edit_reason": rc.edit_reason
                    })

            # Resolve Marks History & Current Evaluator Info
            marks_history = []
            current_updater_name = "SYSTEM"
            current_updated_date = None
            current_edit_reason = None

            if ans:
                if ans.created_by:
                    ans_user = session.query(User).filter(User.user_id == ans.created_by).first()
                    if ans_user:
                        current_updater_name = ans_user.full_name or ans_user.user_name
                    elif str(ans.created_by).lower() in ("system", "ai", "auto"):
                        current_updater_name = "SYSTEM"
                    else:
                        current_updater_name = "SYSTEM"
                
                current_updated_date = ans.created_date.isoformat() if ans.created_date else None
                current_edit_reason = getattr(ans, 'edit_reason', None)

                mh_rows = session.query(MarksHistory).filter(
                    MarksHistory.answer_id == ans.answer_id
                ).order_by(MarksHistory.updated_date.desc()).all()
                for mh in mh_rows:
                    updater = session.query(User).filter(User.user_id == mh.updated_by).first() if mh.updated_by else None
                    updater_name = updater.full_name or updater.user_name if updater else (mh.updated_by or "SYSTEM")
                    marks_history.append({
                        "history_id": str(mh.history_id),
                        "marks_awarded": float(mh.marks_awarded or 0.0),
                        "source": mh.source or "manual",
                        "edit_reason": mh.edit_reason or "Marks updated",
                        "updated_by": updater_name,
                        "updated_date": mh.updated_date.isoformat() if mh.updated_date else None
                    })

            # Extract real detected pages from ans.written_answer metadata
            detected_pages = []
            student_written_text = ""
            if ans and ans.written_answer:
                try:
                    if ans.written_answer.startswith("{") and "detected_pages" in ans.written_answer:
                        meta = json.loads(ans.written_answer)
                        detected_pages = meta.get("detected_pages", [])
                        student_written_text = meta.get("student_answer", "")
                    else:
                        student_written_text = ans.written_answer
                except Exception:
                    student_written_text = ans.written_answer or ""

            q_media = session.query(QuestionMedia).filter_by(question_id=q.question_id, active_status=1).order_by(QuestionMedia.order_number.asc()).all()
            media_list = [{"media_id": str(m.media_id), "media_type": m.media_type, "file_url": m.file_url, "url": m.file_url, "gcs_path": m.gcs_path, "caption": m.caption} for m in q_media]
            q_options_list = [{"id": opt.options_id, "text": opt.option_text, "image_url": opt.image_url, "url": opt.image_url, "is_correct": opt.is_correct} for opt in options]

            questions_data.append({
                "question_id": str(q.question_id),
                "answer_id": str(ans.answer_id) if ans else None,
                "question_number": idx + 1,
                "section_name": sec_name or "General",
                "section_id": str(eqm.section_id) if eqm.section_id else None,
                "question_text": q.question_text,
                "question_type": q.question_type,
                "max_marks": q_marks,
                "media": media_list,
                "options": q_options_list,
                "model_answer": model_answer,
                "student_answer": student_written_text,
                "ai_marks": ai_marks,
                "marks_awarded": marks_awarded,
                "ai_confidence": ai_confidence,
                "feedback": feedback,
                "manual_marks": manual_marks,
                "manual_review_required": manual_review_required,
                "detected_on_page": detected_pages,
                "review_comments": review_comments,
                "updated_by": current_updater_name,
                "updated_date": current_updated_date,
                "edit_reason": current_edit_reason,
                "marks_history": marks_history
            })

        if total_exam_marks <= 0:
            total_exam_marks = calculated_total_possible or 1.0

        current_score = sum(q["marks_awarded"] for q in questions_data)
        percentage = round((current_score / total_exam_marks * 100), 2) if total_exam_marks > 0 else 0.0
        attempt_status = attempt.status if attempt else "not_started"

        from others.settings import get_ai_confidence_threshold
        conf_threshold = get_ai_confidence_threshold(session)

        has_manual_review = any(
            (q.get("marks_history") and len(q["marks_history"]) > 0) or
            (q.get("edit_reason")) or
            (q.get("manual_marks") is not None and q.get("manual_marks") != q.get("ai_marks"))
            for q in questions_data
        )
        has_need_to_check = any(
            q.get("manual_review_required") or
            (q.get("ai_confidence") is not None and 0 < q.get("ai_confidence") < conf_threshold)
            for q in questions_data
        )
        if has_manual_review:
            display_status = "Manual Reviewed"
        elif has_need_to_check:
            display_status = "Need to Check"
        else:
            display_status = "AI Evaluated"

        payload = {
            "status": True,
            "ai_confidence_threshold": conf_threshold,
            "exam_id": str(exam.exam_id),
            "exam_title": exam.title,
            "subject_name": exam.subject_name or "",
            "user_id": str(student.user_id) if student else (user_id or ""),
            "student_name": student.full_name or student.user_name if student else "Student",
            "roll_no": getattr(student, "roll_no", None) or getattr(student, "user_name", "") if student else "",
            "attempt_id": str(attempt.attempt_id) if attempt else None,
            "status_code_name": attempt_status,
            "pages": pages_data,
            "questions": questions_data,
            "summary": {
                "total_marks": total_exam_marks,
                "marks_awarded": current_score,
                "percentage": percentage,
                "total_questions": len(questions_data),
                "evaluated_questions": sum(1 for q in questions_data if q["marks_awarded"] > 0 or q["ai_marks"] is not None),
                "status": display_status
            }
        }

        session.close()
        return payload, 200

    except Exception as e:
        session.rollback()
        session.close()
        print(f"Error in get_student_evaluation_details: {str(e)} - line {sys.exc_info()[-1].tb_lineno}")
        return {"statusMessage": f"Error retrieving student evaluation details: {str(e)}", "status": False}, 500


def finalize_student_evaluation(request, current_user=None):
    """
    Finalizes the teacher review for a student's answer sheet attempt.
    Uses standard database constraint status: 'evaluated'.
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        data = request.json or {}
        exam_id = data.get("exam_id")
        user_id = data.get("user_id")
        attempt_id = data.get("attempt_id")

        attempt = None
        if attempt_id:
            attempt = session.query(Exam_Attempt).filter(Exam_Attempt.attempt_id == attempt_id).first()
        if not attempt and exam_id and user_id:
            sched_ids = [
                str(r[0])
                for r in session.query(func.cast(ExamSchedule.schedule_id, String))
                .filter(func.cast(ExamSchedule.exam_id, String) == str(exam_id))
                .all()
            ]
            valid_sched_ids = list(set([str(exam_id)] + [s for s in sched_ids if s]))

            attempt = session.query(Exam_Attempt).filter(
                func.cast(Exam_Attempt.user_id, String) == str(user_id),
                func.cast(Exam_Attempt.schedule_id, String).in_(valid_sched_ids)
            ).order_by(Exam_Attempt.started_date.desc(), Exam_Attempt.submitted_date.desc()).first()

        if not attempt:
            session.close()
            return {"statusMessage": "Exam attempt not found to finalize", "status": False}, 404

        # Recalculate score from all Answer records
        answers = session.query(Answer).filter(func.cast(Answer.attempt_id, String) == str(attempt.attempt_id)).all()
        total_score = sum(float(a.marks_awarded or 0.0) for a in answers)

        exam = session.query(Exam).filter(Exam.exam_id == exam_id).first() if exam_id else None
        total_possible = float(exam.total_marks or 0) if exam else 0.0
        if total_possible <= 0:
            total_possible = sum(float(a.marks_awarded or 0.0) for a in answers) or 1.0

        percentage = round((total_score / total_possible * 100), 2) if total_possible > 0 else 0.0
        pass_mark = float(exam.pass_mark or 40.0) if exam else 40.0
        feedback_str = "Pass" if percentage >= pass_mark else "Failed"
        final_attempt_id = str(attempt.attempt_id)

        attempt.score = total_score
        attempt.percentage = percentage
        attempt.feedback = feedback_str
        attempt.status = "evaluated"
        attempt.submitted_date = attempt.submitted_date or datetime.utcnow()

        session.add(attempt)
        session.commit()
        session.close()

        return {
            "status": True,
            "statusMessage": "Student evaluation finalized successfully",
            "data": {
                "attempt_id": final_attempt_id,
                "status": "evaluated",
                "score": total_score,
                "percentage": percentage,
                "feedback": feedback_str
            }
        }, 200

    except Exception as e:
        session.rollback()
        session.close()
        print(f"Error in finalize_student_evaluation: {str(e)} - line {sys.exc_info()[-1].tb_lineno}")
        return {"statusMessage": f"Error finalizing student evaluation: {str(e)}", "status": False}, 500


def upload_answer_sheet(request, current_user=None):
    """
    Accepts multipart/form-data upload with 'file'/'files' (PDF or JPG/PNG), 'exam_id', and 'user_id'.
    Renders PDF pages into JPEG images using PyMuPDF (fitz) or pdf2image,
    creates AnswerSheetPage records in the database, and links them to the student's attempt.
    Includes atomic single-commit transaction and retry logic to prevent SQL Server deadlocks.
    """
    import os
    import sys
    import uuid
    import time
    import json

    exam_id = request.form.get("exam_id")
    user_id = request.form.get("user_id")

    if not exam_id or not user_id:
        return {"statusMessage": "exam_id and user_id are required", "status": False}, 400

    if "file" not in request.files and "files" not in request.files:
        return {"statusMessage": "No file uploaded in request", "status": False}, 400

    files = request.files.getlist("file") or request.files.getlist("files")
    if not files or len(files) == 0:
        return {"statusMessage": "No files found in upload", "status": False}, 400

    # Base upload directory: backend/static/uploads/answer_sheets/<exam_id>/<user_id>/
    static_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static", "uploads", "answer_sheets", str(exam_id), str(user_id))
    os.makedirs(static_dir, exist_ok=True)

    # 1. Rasterize / Save all files to disk first (zero DB locking during disk I/O)
    saved_page_files = []
    curr_page_num = 1

    for uploaded_file in files:
        if not uploaded_file.filename:
            continue

        filename = uploaded_file.filename.lower()
        file_bytes = uploaded_file.read()

        if filename.endswith(".pdf"):
            rendered_pdf = False
            try:
                import fitz
                doc = fitz.open(stream=file_bytes, filetype="pdf")
                for page_idx in range(len(doc)):
                    page = doc[page_idx]
                    pix = page.get_pixmap(dpi=200)
                    page_filename = f"page_{curr_page_num}.jpg"
                    page_filepath = os.path.join(static_dir, page_filename)
                    pix.save(page_filepath)
                    saved_page_files.append((curr_page_num, f"{exam_id}/{user_id}/{page_filename}"))
                    curr_page_num += 1
                doc.close()
                rendered_pdf = True
            except Exception as fitz_err:
                print(f"PyMuPDF rasterization warning: {fitz_err}")

            if not rendered_pdf:
                try:
                    from pdf2image import convert_from_bytes
                    images = convert_from_bytes(file_bytes, dpi=200)
                    for img in images:
                        page_filename = f"page_{curr_page_num}.jpg"
                        page_filepath = os.path.join(static_dir, page_filename)
                        img.save(page_filepath, "JPEG")
                        saved_page_files.append((curr_page_num, f"{exam_id}/{user_id}/{page_filename}"))
                        curr_page_num += 1
                    rendered_pdf = True
                except Exception as p2i_err:
                    print(f"pdf2image rasterization warning: {p2i_err}")

            if not rendered_pdf:
                page_filename = f"page_{curr_page_num}.pdf"
                page_filepath = os.path.join(static_dir, page_filename)
                with open(page_filepath, "wb") as f:
                    f.write(file_bytes)
                saved_page_files.append((curr_page_num, f"{exam_id}/{user_id}/{page_filename}"))
                curr_page_num += 1
        else:
            page_filename = f"page_{curr_page_num}.jpg"
            page_filepath = os.path.join(static_dir, page_filename)
            with open(page_filepath, "wb") as f:
                f.write(file_bytes)
            saved_page_files.append((curr_page_num, f"{exam_id}/{user_id}/{page_filename}"))
            curr_page_num += 1

    # 2. Database transaction with retry on deadlock (40001 / 1205)
    max_retries = 3
    for attempt_retry in range(max_retries):
        db = SQLiteDB()
        session = db.connect()
        if not session:
            return {"statusMessage": "Error connecting to database", "status": False}, 500

        try:
            # Ensure or create Exam_Attempt for this user and paper exam
            attempt = session.query(Exam_Attempt).filter(
                Exam_Attempt.user_id == user_id,
                or_(
                    Exam_Attempt.schedule_id == exam_id,
                    Exam_Attempt.schedule_id.in_(
                        session.query(ExamSchedule.schedule_id).filter(ExamSchedule.exam_id == exam_id)
                    )
                )
            ).first()

            if not attempt:
                sched = session.query(ExamSchedule).filter(ExamSchedule.exam_id == exam_id).first()
                schedule_id = str(sched.schedule_id) if sched else str(exam_id)
                attempt = Exam_Attempt(
                    attempt_id=str(uuid.uuid4()),
                    user_id=user_id,
                    schedule_id=schedule_id,
                    status="in_progress",
                    started_date=datetime.utcnow()
                )
                session.add(attempt)
                session.flush()

            attempt_id = str(attempt.attempt_id)

            # Clean up old duplicate answer sheet pages for all attempts of this student and exam
            all_attempt_rows = session.query(Exam_Attempt.attempt_id).filter(
                Exam_Attempt.user_id == user_id,
                or_(
                    Exam_Attempt.schedule_id == exam_id,
                    Exam_Attempt.schedule_id.in_(
                        session.query(ExamSchedule.schedule_id).filter(ExamSchedule.exam_id == exam_id)
                    )
                )
            ).all()
            all_att_ids = [str(r[0]) for r in all_attempt_rows if r[0]]
            if attempt_id not in all_att_ids:
                all_att_ids.append(attempt_id)

            if request.form.get("replace", "true").lower() in ("true", "1"):
                session.query(AnswerSheetPage).filter(
                    AnswerSheetPage.attempt_id.in_(all_att_ids)
                ).delete(synchronize_session=False)

            created_pages = []
            for pnum, rel_img_path in saved_page_files:
                page_obj = AnswerSheetPage(
                    page_id=str(uuid.uuid4()),
                    attempt_id=attempt.attempt_id,
                    page_number=pnum,
                    image_path=rel_img_path,
                    created_date=datetime.utcnow()
                )
                session.add(page_obj)
                created_pages.append({
                    "page_id": str(page_obj.page_id),
                    "page_number": pnum,
                    "image_url": f"/edu/api/uploads/answer_sheets/{rel_img_path}"
                })

            # Build question blueprint & rubric for AI visual evaluation
            sec_rows = (
                session.query(ExamSection)
                .filter(ExamSection.exam_id == exam_id)
                .order_by(ExamSection.order_number.asc(), ExamSection.created_date.asc())
                .all()
            )
            rubric_sections = []
            seen_qids_rubric = set()

            if sec_rows:
                for sec in sec_rows:
                    sec_id_str = str(sec.section_id)
                    sec_eqms = (
                        session.query(ExamQuestionMapping, Question)
                        .join(Question, Question.question_id == ExamQuestionMapping.question_id)
                        .filter(
                            ExamQuestionMapping.exam_id == exam_id,
                            or_(
                                ExamQuestionMapping.section_id == sec_id_str,
                                ExamQuestionMapping.section_id == sec.section_id,
                                func.cast(ExamQuestionMapping.section_id, String) == sec_id_str,
                            )
                        )
                        .order_by(ExamQuestionMapping.order_number.asc())
                        .all()
                    )
                    sec_q_list = []
                    for eqm, q in sec_eqms:
                        if str(q.question_id) not in seen_qids_rubric:
                            seen_qids_rubric.add(str(q.question_id))
                            options = session.query(Option).filter(Option.question_id == q.question_id).all()
                            correct_opts = [opt for opt in options if str(opt.is_correct).lower() in ("1", "true")]
                            model_ans = correct_opts[0].option_text if correct_opts else (options[0].option_text if options else "")
                            q_entry = {
                                "question_id": str(q.question_id),
                                "question_number": len(seen_qids_rubric),
                                "question_text": q.question_text,
                                "question_type": q.question_type,
                                "max_marks": float(q.marks or 1.0),
                                "model_answer": model_ans
                            }
                            if q.question_type in ("choose", "multi", "scq", "mcq") and options:
                                formatted_options = []
                                correct_letters = []
                                correct_texts = []
                                for idx, opt in enumerate(options):
                                    letter = chr(ord('a') + idx)
                                    opt_text = opt.option_text or ""
                                    formatted_options.append({
                                        "letter": letter,
                                        "text": opt_text
                                    })
                                    if str(getattr(opt, 'is_correct', 0)).lower() in ("1", "true"):
                                        correct_letters.append(letter)
                                        correct_texts.append(opt_text)
                                q_entry["options"] = formatted_options
                                if correct_letters:
                                    q_entry["correct_option_letter"] = ", ".join(correct_letters)
                                if correct_texts:
                                    q_entry["correct_option_text"] = ", ".join(correct_texts)
                            sec_q_list.append(q_entry)
                    if sec_q_list:
                        rubric_sections.append({
                            "section_name": sec.name or "Section",
                            "questions": sec_q_list
                        })

            rem_eqms = (
                session.query(ExamQuestionMapping, Question)
                .join(Question, Question.question_id == ExamQuestionMapping.question_id)
                .filter(ExamQuestionMapping.exam_id == exam_id)
                .order_by(ExamQuestionMapping.order_number.asc())
                .all()
            )
            rem_q_list = []
            for eqm, q in rem_eqms:
                if str(q.question_id) not in seen_qids_rubric:
                    seen_qids_rubric.add(str(q.question_id))
                    options = session.query(Option).filter(Option.question_id == q.question_id).all()
                    correct_opts = [opt for opt in options if str(opt.is_correct).lower() in ("1", "true")]
                    model_ans = correct_opts[0].option_text if correct_opts else (options[0].option_text if options else "")
                    q_entry = {
                        "question_id": str(q.question_id),
                        "question_number": len(seen_qids_rubric),
                        "question_text": q.question_text,
                        "question_type": q.question_type,
                        "max_marks": float(q.marks or 1.0),
                        "model_answer": model_ans
                    }
                    if q.question_type in ("choose", "multi", "scq", "mcq") and options:
                        formatted_options = []
                        correct_letters = []
                        correct_texts = []
                        for idx, opt in enumerate(options):
                            letter = chr(ord('a') + idx)
                            opt_text = opt.option_text or ""
                            formatted_options.append({
                                "letter": letter,
                                "text": opt_text
                            })
                            if str(getattr(opt, 'is_correct', 0)).lower() in ("1", "true"):
                                correct_letters.append(letter)
                                correct_texts.append(opt_text)
                        q_entry["options"] = formatted_options
                        if correct_letters:
                            q_entry["correct_option_letter"] = ", ".join(correct_letters)
                        if correct_texts:
                            q_entry["correct_option_text"] = ", ".join(correct_texts)
                    rem_q_list.append(q_entry)
            if rem_q_list:
                rubric_sections.append({
                    "section_name": "General",
                    "questions": rem_q_list
                })

            exam_rubric = {
                "exam_id": str(exam_id),
                "sections": rubric_sections
            }

            # Absolute paths of saved page images for AI visual analysis
            page_image_paths = [
                os.path.join(static_dir, f"page_{pnum}.jpg")
                for pnum, _ in saved_page_files
                if os.path.exists(os.path.join(static_dir, f"page_{pnum}.jpg"))
            ]

            # Build question number map
            all_exam_q_nums = []
            exam_q_num_by_qid = {}
            for sec in rubric_sections:
                for q in sec.get("questions", []):
                    qn = int(q.get("question_number", 0))
                    if qn > 0:
                        all_exam_q_nums.append(qn)
                        exam_q_num_by_qid[str(q.get("question_id"))] = qn

            # Execute Phase 1: Question Detection + Phase 2: Isolated Evaluation
            evaluations_by_qid = {}
            detected_pages_by_qid = {}
            detected_q_nums_set = set()
            pages_by_qnum = {}

            try:
                from others.llm import vision_detect_question_anchors, vision_evaluate_answersheet, openai_client
                client = openai_client()

                # Phase 1: Visually detect physically written question numbers
                detection_result = vision_detect_question_anchors(
                    client,
                    page_image_paths,
                    exam_question_numbers=all_exam_q_nums
                )

                uncertain_q_nums_set = set()
                if detection_result and detection_result.get("status"):
                    for p in detection_result.get("pages", []):
                        p_num = p.get("page_number", 1)
                        for q_entry in (p.get("questions") or p.get("detected_questions") or []):
                            q_num = q_entry.get("question_number")
                            q_status = str(q_entry.get("status", "detected")).lower()
                            if q_num is not None:
                                try:
                                    q_num_int = int(q_num)
                                    pages_by_qnum.setdefault(q_num_int, []).append(p_num)
                                    detected_q_nums_set.add(q_num_int)
                                    if q_status == "uncertain":
                                        uncertain_q_nums_set.add(q_num_int)
                                except (ValueError, TypeError):
                                    pass
                    for qn in detection_result.get("all_detected_question_numbers", []):
                        try:
                            detected_q_nums_set.add(int(qn))
                        except (ValueError, TypeError):
                            pass
                    for qn in detection_result.get("uncertain_question_numbers", []):
                        try:
                            uncertain_q_nums_set.add(int(qn))
                        except (ValueError, TypeError):
                            pass

                # Phase 2: Filter rubric to only evaluate detected/uncertain questions
                filtered_sections = []
                for sec in rubric_sections:
                    filtered_qs = [
                        q for q in sec.get("questions", [])
                        if int(q.get("question_number", 0)) in detected_q_nums_set
                    ]
                    if filtered_qs:
                        filtered_sections.append({
                            "section_name": sec.get("section_name", "Section"),
                            "questions": filtered_qs
                        })

                if filtered_sections:
                    eval_rubric = {
                        "exam_id": str(exam_id),
                        "sections": filtered_sections
                    }
                    ai_eval_result = vision_evaluate_answersheet(client, eval_rubric, page_image_paths)
                    if ai_eval_result and ai_eval_result.get("status"):
                        for ev in ai_eval_result.get("evaluations", []):
                            if ev.get("question_id"):
                                qid = str(ev["question_id"])
                                evaluations_by_qid[qid] = ev
                                q_num_val = exam_q_num_by_qid.get(qid)
                                if q_num_val and q_num_val in pages_by_qnum:
                                    detected_pages_by_qid[qid] = pages_by_qnum[q_num_val]
                                elif ev.get("detected_on_pages"):
                                    detected_pages_by_qid[qid] = ev.get("detected_on_pages")

            except Exception as eval_err:
                print(f"AI evaluation warning in upload_answer_sheet: {eval_err}")

            # Clean old review comments for this attempt before re-evaluating
            session.query(ExamReviewComments).filter(
                ExamReviewComments.attempt_id == attempt.attempt_id
            ).delete(synchronize_session=False)

            # Persist genuine evaluation results without hardcoded defaults
            for qid_str in seen_qids_rubric:
                q_obj = session.query(Question).filter(func.cast(Question.question_id, String) == qid_str).first()
                q_marks = float(q_obj.marks or 1.0) if q_obj else 1.0

                existing_ans = session.query(Answer).filter(
                    Answer.attempt_id == attempt.attempt_id,
                    func.cast(Answer.question_id, String) == qid_str
                ).first()

                q_num = exam_q_num_by_qid.get(qid_str)
                is_detected = (q_num in detected_q_nums_set) if detected_q_nums_set else False
                is_uncertain = (q_num in uncertain_q_nums_set) if uncertain_q_nums_set else False
                manual_review = 1 if is_uncertain else 0
                ev = evaluations_by_qid.get(qid_str) if is_detected else None

                if is_detected and ev:
                    awarded = float(ev.get("suggested_marks", 0.0))
                    conf = int(ev.get("ai_confidence", 0))
                    fb = ev.get("feedback") or ""
                    if is_uncertain:
                        conf = min(conf, 75)
                    is_corr = int(ev.get("is_correct", 1 if awarded >= q_marks and q_marks > 0 else 0))
                    is_val = 1
                    detected_pages = detected_pages_by_qid.get(qid_str) or pages_by_qnum.get(q_num) or ev.get("detected_on_pages") or []

                    # Deterministic fallback check for objective MCQ/SCQ questions
                    if q_obj and q_obj.question_type in ("choose", "multi", "scq", "mcq"):
                        options = session.query(Option).filter(Option.question_id == q_obj.question_id).all()
                        correct_opts = [opt for opt in options if str(getattr(opt, "is_correct", 0)).lower() in ("1", "true")]
                        student_snippet_clean = (ev.get("student_answer_snippet") or "").strip().lower()

                        if correct_opts and student_snippet_clean:
                            for idx, opt in enumerate(options):
                                if str(getattr(opt, "is_correct", 0)).lower() in ("1", "true"):
                                    letter = chr(ord('a') + idx)
                                    opt_text = (opt.option_text or "").strip().lower()
                                    letter_patterns = [letter, f"{letter})", f"({letter})", f"{letter}."]

                                    is_match = False
                                    if student_snippet_clean in letter_patterns:
                                        is_match = True
                                    elif opt_text and student_snippet_clean == opt_text:
                                        is_match = True
                                    elif opt_text and any(student_snippet_clean.startswith(pat) and opt_text in student_snippet_clean for pat in letter_patterns):
                                        is_match = True
                                    elif opt_text and student_snippet_clean.endswith(opt_text) and any(student_snippet_clean.startswith(pat) for pat in letter_patterns):
                                        is_match = True

                                    if is_match:
                                        awarded = q_marks
                                        is_corr = 1
                                        if not fb or "incorrect" in fb.lower():
                                            fb = f"Correct. Option ({letter.upper()}) {opt.option_text or ''}"
                                        break
                else:
                    # Question was in rubric but NOT physically detected on answer sheet -> Unattempted
                    awarded = 0.0
                    conf = 0
                    fb = "Question was not attempted or not found on the uploaded answer sheet."
                    is_corr = 0
                    is_val = 1
                    detected_pages = []
                    manual_review = 0

                student_snippet = ev.get("student_answer_snippet", "") if ev else ""
                meta_payload = json.dumps({
                    "detected_pages": detected_pages,
                    "student_answer": student_snippet
                })

                if existing_ans:
                    existing_ans.marks_awarded = awarded
                    existing_ans.ai_marks = awarded if is_val else None
                    existing_ans.ai_confidence = conf
                    existing_ans.feedback = fb
                    existing_ans.is_validated = is_val
                    existing_ans.is_correct = is_corr
                    existing_ans.manual_review_required = manual_review
                    existing_ans.written_answer = meta_payload
                else:
                    ans = Answer(
                        answer_id=str(uuid.uuid4()),
                        attempt_id=attempt.attempt_id,
                        schedule_id=str(attempt.schedule_id),
                        user_id=user_id,
                        question_id=qid_str,
                        written_answer=meta_payload,
                        marks_awarded=awarded,
                        ai_marks=awarded if is_val else None,
                        ai_confidence=conf,
                        manual_review_required=manual_review,
                        feedback=fb,
                        is_validated=is_val,
                        is_correct=is_corr
                    )
                    session.add(ans)

                if ev:
                    for cat in ["missing", "incomplete", "incorrect"]:
                        val = str(ev.get(cat) or "").strip()
                        if val and val.lower() not in ("none", "null", "n/a", ""):
                            for c_item in val.split("|"):
                                c_item_clean = c_item.strip()
                                if c_item_clean and c_item_clean.lower() not in ("none", "null"):
                                    rc = ExamReviewComments(
                                        comment_id=str(uuid.uuid4()),
                                        attempt_id=attempt.attempt_id,
                                        question_id=qid_str,
                                        comment_text=c_item_clean,
                                        category=cat,
                                        reviewer_id=None
                                    )
                                    session.add(rc)

            # Single atomic commit for everything
            session.commit()
            session.close()

            return {
                "status": True,
                "statusMessage": f"Successfully uploaded and rasterized {len(created_pages)} page(s).",
                "data": {
                    "attempt_id": attempt_id,
                    "pages": created_pages,
                    "total_pages": len(created_pages)
                }
            }, 200

        except Exception as e:
            session.rollback()
            session.close()
            err_str = str(e)
            is_deadlock = "deadlock" in err_str.lower() or "1205" in err_str or "40001" in err_str
            if is_deadlock and attempt_retry < max_retries - 1:
                time.sleep(0.3 * (attempt_retry + 1))
                continue
            print(f"Error in upload_answer_sheet: {err_str} - line {sys.exc_info()[-1].tb_lineno}")
            return {"statusMessage": f"Error uploading answer sheet: {err_str}", "status": False}, 500


def identify_student_from_answer_sheet(request, current_user=None):
    """
    Identifies a student from an uploaded answer sheet (PDF or image).
    Inspects multiple pages sequentially (Page 1, Page 2, Page 3, ...)
    until the student's handwritten or printed name/roll_no is recognized.
    """
    import os
    import sys
    import json
    import base64
    from others.llm import openai_client

    if "file" not in request.files and "files" not in request.files:
        return {"statusMessage": "No file provided for identification", "status": False}, 400

    uploaded_file = request.files.get("file") or request.files.get("files")
    if not uploaded_file or not uploaded_file.filename:
        return {"statusMessage": "Invalid file uploaded", "status": False}, 400

    exam_id = request.form.get("exam_id")
    students_json = request.form.get("students")
    students_roster = []

    if students_json:
        try:
            students_roster = json.loads(students_json)
        except Exception:
            students_roster = []

    # If no roster passed, query database using exam_id if available
    if not students_roster and exam_id:
        db = SQLiteDB()
        session = db.connect()
        if session:
            try:
                assigned_users = session.query(User).filter(
                    User.user_id.in_(
                        session.query(QuestionPaperUserAssignment.user_id).filter(
                            QuestionPaperUserAssignment.exam_id == exam_id
                        )
                    )
                ).all()
                students_roster = [
                    {
                        "user_id": str(u.user_id),
                        "name": u.full_name or u.user_name or "",
                        "roll_no": getattr(u, "roll_no", "") or u.user_name or ""
                    }
                    for u in assigned_users
                ]
            except Exception as e:
                print(f"Error fetching roster for identification: {e}")
            finally:
                session.close()

    filename = uploaded_file.filename.lower()
    file_bytes = uploaded_file.read()

    if not file_bytes:
        return {"statusMessage": "Uploaded file is empty", "status": False}, 400

    # Extract pages as images
    page_images = []  # list of (page_num, bytes, text_content)
    if filename.endswith(".pdf"):
        try:
            import fitz
            doc = fitz.open(stream=file_bytes, filetype="pdf")
            for p_idx in range(len(doc)):
                page = doc[p_idx]
                page_text = page.get_text() or ""
                pix = page.get_pixmap(dpi=150)
                img_bytes = pix.tobytes("jpeg")
                page_images.append((p_idx + 1, img_bytes, page_text))
            doc.close()
        except Exception as fitz_err:
            print(f"PyMuPDF error reading PDF pages for identification: {fitz_err}")
    else:
        page_images.append((1, file_bytes, ""))

    if not page_images:
        return {"status": True, "matched": False, "statusMessage": "No readable pages found in file"}, 200

    # Step 1: Check text layer first if any (instant match)
    if students_roster:
        for page_num, _, page_text in page_images:
            if page_text and len(page_text.strip()) > 3:
                norm_text = page_text.lower()
                for st in students_roster:
                    st_name = (st.get("name") or "").lower().strip()
                    st_roll = (st.get("roll_no") or "").lower().strip()
                    if (st_name and len(st_name) >= 3 and st_name in norm_text) or \
                       (st_roll and len(st_roll) >= 3 and st_roll in norm_text):
                        return {
                            "status": True,
                            "matched": True,
                            "matched_by": f"Identified on Page {page_num} (Text)",
                            "page_number": page_num,
                            "student_name": st.get("name"),
                            "user_id": st.get("user_id"),
                            "roll_no": st.get("roll_no"),
                            "confidence": 98
                        }, 200

    # Step 2: Use OpenAI Vision to visually inspect each page sequentially
    client = openai_client()
    if client.api_key:
        roster_summary = [
            {"user_id": str(s.get("user_id")), "name": s.get("name"), "roll_no": s.get("roll_no")}
            for s in students_roster
        ]

        system_prompt = (
            "You are an expert AI exam evaluation assistant specializing in recognizing student identity from physical handwritten or printed answer sheets.\n"
            "Examine the provided answer sheet page image and determine if any student Name, Roll Number, Registration Number, or Student ID is written or printed anywhere on this page (such as in the header, title box, top/bottom margins, or signature blocks).\n\n"
            f"Candidate Students Roster:\n{json.dumps(roster_summary, ensure_ascii=False)}\n\n"
            "Instructions:\n"
            "1. Match the handwriting or text against the Candidate Students Roster.\n"
            "2. If you identify a student from the roster, return a JSON object:\n"
            "   {\"matched\": true, \"student_name\": \"<Full Name>\", \"roll_no\": \"<Roll No>\", \"user_id\": \"<user_id>\", \"confidence\": 90, \"detected_text\": \"<text found>\"}\n"
            "3. If this page has no student identity details or does not match the roster, return:\n"
            "   {\"matched\": false, \"detected_text\": \"\"}\n"
            "4. Return ONLY the raw JSON object without markdown code blocks."
        )

        for page_num, img_bytes, _ in page_images:
            try:
                base64_img = base64.b64encode(img_bytes).decode("utf-8")
                data_uri = f"data:image/jpeg;base64,{base64_img}"

                user_content = [
                    {
                        "type": "text",
                        "text": f"Inspect Page {page_num} of this answer sheet for student name or roll number matching the roster."
                    },
                    {
                        "type": "image_url",
                        "image_url": {"url": data_uri}
                    }
                ]

                response = client.chat_completion(
                    system_message=system_prompt,
                    InputData=user_content,
                    aimodel=1,
                    max_tokens=300,
                    temperature=0.1
                )

                if response.status_code == 200:
                    resp_data = response.json()
                    choices = resp_data.get("choices", [])
                    if choices:
                        raw_content = choices[0].get("message", {}).get("content", "").strip()
                        if raw_content.startswith("```"):
                            lines = raw_content.splitlines()
                            if lines[0].startswith("```"):
                                lines = lines[1:]
                            if lines and lines[-1].startswith("```"):
                                lines = lines[:-1]
                            raw_content = "\n".join(lines).strip()

                        parsed = json.loads(raw_content)
                        if parsed.get("matched"):
                            det_roll = parsed.get("roll_no") or ""
                            det_name = parsed.get("student_name") or ""
                            matched_label = f"Identified on Page {page_num}"
                            if det_roll:
                                matched_label += f" (Roll No: {det_roll})"
                            elif det_name:
                                matched_label += f" ({det_name})"

                            return {
                                "status": True,
                                "matched": True,
                                "matched_by": matched_label,
                                "page_number": page_num,
                                "student_name": parsed.get("student_name"),
                                "user_id": parsed.get("user_id"),
                                "roll_no": parsed.get("roll_no"),
                                "confidence": parsed.get("confidence", 90),
                                "detected_text": parsed.get("detected_text", "")
                            }, 200
            except Exception as page_vision_err:
                print(f"Vision inspection error on page {page_num}: {page_vision_err}")
                continue

    return {
        "status": True,
        "matched": False,
        "statusMessage": "No student identity recognized on any page of this document."
    }, 200


