from db.models import (
    Base,
    Exam,
    PaperSchedule,
    PaperScheduleMapping,
    Institute,
    User,
    InstituteDepartment,
    InstituteTeam,
    ExamSection,
    Exam_Attempt,
    ExamQuestionMapping,
    Question,
    Option,
)
from db.db import SQLiteDB
import sys
import uuid
import datetime
from sqlalchemy import func, or_, String, text


def _ensure_paper_schedule_tables(session):
    """Ensure PaperSchedules and PaperScheduleMapping tables exist in the database."""
    try:
        session.execute(text("""
            IF OBJECT_ID('PaperSchedules', 'U') IS NULL
            BEGIN
                CREATE TABLE PaperSchedules (
                    schedule_id NVARCHAR(64) NOT NULL PRIMARY KEY,
                    exam_id NVARCHAR(64) NOT NULL,
                    title NVARCHAR(255) NOT NULL,
                    institute_id NVARCHAR(64) NULL,
                    start_time DATETIME NULL,
                    end_time DATETIME NULL,
                    duration_mins INT NULL,
                    total_marks INT NULL,
                    pass_mark INT NULL,
                    total_questions INT NULL,
                    number_of_attempts INT NULL,
                    published INT DEFAULT 1,
                    status NVARCHAR(32) DEFAULT 'published',
                    created_by NVARCHAR(255) NULL,
                    created_date DATETIME DEFAULT GETUTCDATE(),
                    updated_by NVARCHAR(255) NULL,
                    updated_date DATETIME NULL,
                    is_deleted BIT DEFAULT 0
                );
            END;
        """))
        session.commit()
    except Exception as e1:
        session.rollback()
        print(f"[_ensure_paper_schedule_tables] DDL PaperSchedules warning: {e1}", flush=True)

    try:
        session.execute(text("""
            IF OBJECT_ID('PaperScheduleMapping', 'U') IS NULL
            BEGIN
                CREATE TABLE PaperScheduleMapping (
                    mapping_id NVARCHAR(64) NOT NULL PRIMARY KEY,
                    schedule_id NVARCHAR(64) NOT NULL,
                    user_id NVARCHAR(64) NULL,
                    department_id NVARCHAR(64) NULL,
                    team_id NVARCHAR(64) NULL,
                    campus_id NVARCHAR(64) NULL,
                    created_by NVARCHAR(255) NULL,
                    created_date DATETIME DEFAULT GETUTCDATE()
                );
            END;
        """))
        session.commit()
    except Exception as e2:
        session.rollback()
        print(f"[_ensure_paper_schedule_tables] DDL PaperScheduleMapping warning: {e2}", flush=True)

    try:
        bind = session.bind
        PaperSchedule.__table__.create(bind, checkfirst=True)
        PaperScheduleMapping.__table__.create(bind, checkfirst=True)
    except Exception:
        pass


def publish_paper_schedule(request, current_user=None):
    """
    Publishes a question paper by creating a row in PaperSchedules (separate table)
    and mapping assigned candidates in PaperScheduleMapping.
    Online Test is completely untouched.
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    _ensure_paper_schedule_tables(session)

    try:
        data = request.get_json(silent=True) or {}
        master_exam_id = data.get("template_id") or data.get("exam_id")
        if not master_exam_id:
            session.close()
            return {"statusMessage": "Master question paper (template_id) is required", "status": False}, 400

        # Verify master question paper exists
        master_exam = session.query(Exam).filter(Exam.exam_id == str(master_exam_id).strip()).first()
        if not master_exam:
            session.close()
            return {"statusMessage": "Selected master question paper does not exist", "status": False}, 404

        title = (data.get("scheduler_name") or data.get("title") or master_exam.title or "").strip()
        institute_id = data.get("institute_id") or master_exam.institute_id
        duration_mins = int(data.get("duration_minutes") or data.get("duration_mins") or master_exam.duration_mins or 10)
        total_marks = data.get("total_marks")
        if total_marks is not None:
            try:
                total_marks = int(total_marks)
            except Exception:
                total_marks = master_exam.total_marks
        else:
            total_marks = master_exam.total_marks

        pass_mark = data.get("pass_mark")
        if pass_mark is not None:
            try:
                pass_mark = int(pass_mark)
            except Exception:
                pass_mark = master_exam.pass_mark
        else:
            pass_mark = master_exam.pass_mark

        total_questions = int(data.get("total_questions") or master_exam.total_questions or 0)
        number_of_attempts = int(data.get("number_of_attempts") or master_exam.number_of_attempts or 1)

        start_time = None
        raw_start = data.get("start_time") or data.get("start_date")
        if raw_start:
            try:
                start_time = datetime.datetime.fromisoformat(str(raw_start).replace("Z", "+00:00"))
            except Exception:
                start_time = datetime.datetime.utcnow()
        else:
            start_time = datetime.datetime.utcnow()

        end_time = None
        raw_end = data.get("end_time") or data.get("end_date")
        if raw_end:
            try:
                end_time = datetime.datetime.fromisoformat(str(raw_end).replace("Z", "+00:00"))
            except Exception:
                end_time = start_time + datetime.timedelta(minutes=duration_mins)
        else:
            end_time = start_time + datetime.timedelta(minutes=duration_mins)

        created_by_user = None
        if current_user and getattr(current_user, "user_id", None):
            created_by_user = str(current_user.user_id)
        elif data.get("created_by"):
            created_by_user = str(data.get("created_by"))

        new_schedule_id = str(uuid.uuid4())
        new_schedule = PaperSchedule(
            schedule_id=new_schedule_id,
            exam_id=str(master_exam.exam_id),
            title=title,
            institute_id=str(institute_id) if institute_id else None,
            start_time=start_time,
            end_time=end_time,
            duration_mins=duration_mins,
            total_marks=total_marks,
            pass_mark=pass_mark,
            total_questions=total_questions,
            number_of_attempts=number_of_attempts,
            published=1,
            status="published",
            created_by=created_by_user,
            created_date=datetime.datetime.utcnow(),
            is_deleted=False,
        )
        session.add(new_schedule)
        session.flush()

        # Map assigned users
        assigned_user_ids = data.get("assigned_user_ids") or []
        for uid in assigned_user_ids:
            if uid:
                session.add(
                    PaperScheduleMapping(
                        mapping_id=str(uuid.uuid4()),
                        schedule_id=new_schedule_id,
                        user_id=str(uid),
                        created_by=created_by_user,
                    )
                )

        # Map departments
        departments = data.get("departments") or []
        for did in departments:
            if did and did != "ALL":
                session.add(
                    PaperScheduleMapping(
                        mapping_id=str(uuid.uuid4()),
                        schedule_id=new_schedule_id,
                        department_id=str(did),
                        created_by=created_by_user,
                    )
                )

        # Map teams
        teams = data.get("teams") or []
        for tid in teams:
            if tid and tid != "ALL":
                session.add(
                    PaperScheduleMapping(
                        mapping_id=str(uuid.uuid4()),
                        schedule_id=new_schedule_id,
                        team_id=str(tid),
                        created_by=created_by_user,
                    )
                )

        saved_exam_id = str(master_exam.exam_id)
        session.commit()
        session.close()

        return {
            "status": True,
            "statusMessage": "Question paper published successfully",
            "schedule_id": new_schedule_id,
            "data": {
                "schedule_id": new_schedule_id,
                "exam_id": saved_exam_id,
                "title": title,
            },
        }, 200

    except Exception as e:
        session.rollback()
        session.close()
        print(f"Error in publish_paper_schedule: {e}", flush=True)
        return {"status": False, "statusMessage": f"Failed to publish paper schedule: {str(e)}"}, 500


def get_paper_schedules(request, current_user=None):
    """
    Fetches published question paper schedules from PaperSchedules table.
    Enriches with master question paper details (sections, questions, subject, institute).
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    _ensure_paper_schedule_tables(session)

    try:
        args = getattr(request, "args", {}) or {}
        filter_conds = [
            or_(
                PaperSchedule.is_deleted == False,
                PaperSchedule.is_deleted == None,
                PaperSchedule.is_deleted == 0,
            )
        ]

        if args.get("schedule_id"):
            filter_conds.append(func.cast(PaperSchedule.schedule_id, String) == str(args.get("schedule_id")).strip())

        if args.get("exam_id"):
            filter_conds.append(func.cast(PaperSchedule.exam_id, String) == str(args.get("exam_id")).strip())

        inst_arg = args.get("institute_id")
        if inst_arg:
            inst_ids = [i.strip() for i in str(inst_arg).split(",") if i.strip()]
            if inst_ids:
                filter_conds.append(
                    or_(
                        func.cast(PaperSchedule.institute_id, String).in_(inst_ids),
                        PaperSchedule.institute_id == None,
                        PaperSchedule.institute_id == "",
                    )
                )

        schedules = session.query(PaperSchedule).filter(*filter_conds).order_by(PaperSchedule.created_date.desc()).all()

        results = []
        for s in schedules:
            master = None
            try:
                master = session.query(Exam).filter(func.cast(Exam.exam_id, String) == str(s.exam_id)).first()
            except Exception:
                try:
                    master = session.query(Exam).filter(Exam.exam_id == s.exam_id).first()
                except Exception:
                    master = None

            sections_list = []
            if master:
                try:
                    sec_rows = (
                        session.query(ExamSection)
                        .filter(func.cast(ExamSection.exam_id, String) == str(master.exam_id))
                        .order_by(ExamSection.order_number.asc())
                        .all()
                    )
                    for sec in sec_rows:
                        sec_id_str = str(sec.section_id)
                        eq_mappings = (
                            session.query(ExamQuestionMapping)
                            .filter(
                                ExamQuestionMapping.exam_id == master.exam_id,
                                or_(
                                    ExamQuestionMapping.section_id == sec_id_str,
                                    ExamQuestionMapping.section_id == sec.section_id,
                                    func.cast(ExamQuestionMapping.section_id, String) == sec_id_str,
                                ),
                            )
                            .order_by(ExamQuestionMapping.order_number.asc())
                            .all()
                        )
                        sec_questions = []
                        for eqm in eq_mappings:
                            q_obj = (
                                session.query(Question)
                                .filter(
                                    or_(
                                        Question.question_id == eqm.question_id,
                                        func.cast(Question.question_id, String) == str(eqm.question_id),
                                    )
                                )
                                .first()
                            )
                            if not q_obj:
                                continue
                            sec_questions.append({
                                "question_id": str(q_obj.question_id),
                                "id": str(q_obj.question_id),
                                "question_text": q_obj.question_text,
                                "question": q_obj.question_text,
                                "question_type": q_obj.question_type,
                                "marks": q_obj.marks or 1,
                                "order_number": eqm.order_number,
                            })

                        sections_list.append(
                            {
                                "section_id": str(sec.section_id),
                                "name": sec.name,
                                "sub_heading": sec.sub_heading,
                                "instructions": sec.instructions,
                                "questions": sec_questions,
                                "question_type": sec.question_type,
                                "target_count": sec.target_count,
                                "order_number": sec.order_number,
                            }
                        )
                except Exception:
                    pass

            # Assigned users, departments & teams
            assigned_uids = []
            assigned_departments = []
            assigned_teams = []
            try:
                mappings = session.query(PaperScheduleMapping).filter(PaperScheduleMapping.schedule_id == s.schedule_id).all()
                assigned_uids = [str(m.user_id) for m in mappings if m.user_id]
                assigned_departments = [str(m.department_id) for m in mappings if m.department_id]
                assigned_teams = [str(m.team_id) for m in mappings if m.team_id]
            except Exception:
                pass

            assigned_users = []
            if assigned_uids:
                try:
                    u_objs = session.query(User).filter(User.user_id.in_(assigned_uids)).all()
                    for u in u_objs:
                        assigned_users.append({
                            "user_id": str(u.user_id),
                            "name": f"{u.first_name or ''} {u.last_name or ''}".strip() or u.username or "Student",
                            "roll_no": getattr(u, "roll_no", None) or "",
                            "email": u.email or "",
                        })
                except Exception:
                    pass

            # Institute details
            inst_obj = None
            if s.institute_id:
                try:
                    inst = session.query(Institute).filter(func.cast(Institute.institute_id, String) == str(s.institute_id)).first()
                    if inst:
                        inst_obj = {
                            "institute_id": str(inst.institute_id),
                            "name": inst.name,
                            "short_name": inst.short_name,
                        }
                except Exception:
                    pass

            # Evaluation status computation
            eval_count = 0
            try:
                eval_count = (
                    session.query(func.count(Exam_Attempt.attempt_id))
                    .filter(
                        func.cast(Exam_Attempt.schedule_id, String) == str(s.schedule_id),
                        Exam_Attempt.status == "evaluated",
                    )
                    .scalar()
                    or 0
                )
            except Exception:
                eval_count = 0

            results.append({
                "test_id": str(s.schedule_id),
                "schedule_id": str(s.schedule_id),
                "exam_id": str(s.exam_id),
                "master_exam_id": str(s.exam_id),
                "title": s.title,
                "scheduler_name": s.title,
                "schedule_name": s.title,
                "description": master.description if master else "",
                "subject_id": master.subject_id if master else None,
                "subject_name": master.subject_name if master else None,
                "institute_id": str(s.institute_id) if s.institute_id else None,
                "institute": inst_obj,
                "duration_mins": s.duration_mins,
                "total_marks": s.total_marks if s.total_marks is not None else (master.total_marks if master else 0),
                "pass_mark": s.pass_mark if s.pass_mark is not None else (master.pass_mark if master else 0),
                "total_questions": s.total_questions or (master.total_questions if master else 0),
                "number_of_attempts": s.number_of_attempts,
                "start_time": s.start_time.isoformat() if s.start_time else None,
                "end_time": s.end_time.isoformat() if s.end_time else None,
                "published": 1,
                "is_published": True,
                "status": "published",
                "test_mode": "paper",
                "sections": sections_list,
                "sections_count": len(sections_list),
                "departments": assigned_departments,
                "teams": assigned_teams,
                "assigned_users": assigned_users,
                "assigned_users_count": len(assigned_users),
                "evaluated_count": eval_count,
                "evaluation_status": "Evaluated" if eval_count > 0 else "Pending",
                "created_date": (s.created_date.isoformat() + "Z") if s.created_date else None,
            })

        session.close()
        return {"status": True, "statusMessage": "Paper schedules retrieved successfully", "data": results}, 200

    except Exception as e:
        session.close()
        print(f"Error in get_paper_schedules: {e}", flush=True)
        return {"status": False, "statusMessage": f"Failed to retrieve paper schedules: {str(e)}"}, 500


def delete_paper_schedule(request, current_user=None):
    """Soft deletes a paper schedule."""
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    _ensure_paper_schedule_tables(session)

    try:
        data = request.get_json(silent=True) or {}
        schedule_id = data.get("schedule_id") or data.get("test_id") or request.args.get("schedule_id")
        if not schedule_id:
            session.close()
            return {"statusMessage": "schedule_id is required", "status": False}, 400

        sched = session.query(PaperSchedule).filter(PaperSchedule.schedule_id == str(schedule_id).strip()).first()
        if not sched:
            session.close()
            return {"statusMessage": "Schedule not found", "status": False}, 404

        sched.is_deleted = True
        sched.updated_date = datetime.datetime.utcnow()
        session.commit()
        session.close()
        return {"status": True, "statusMessage": "Question paper schedule deleted successfully"}, 200

    except Exception as e:
        session.rollback()
        session.close()
        return {"status": False, "statusMessage": f"Failed to delete schedule: {str(e)}"}, 500

