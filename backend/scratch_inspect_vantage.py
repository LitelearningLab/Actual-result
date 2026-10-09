import os
import sys
import json
from datetime import datetime, date
from sqlalchemy import text
from db.db import SQLiteDB

def inspect_vantage_today():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("Failed to connect to database.")
        return

    try:
        db_time = session.execute(text("SELECT GETDATE()")).scalar()
        print(f"Current Server Time: {db_time}")

        # Find Vantage institute
        vantage = session.execute(text("SELECT institute_id, name, short_name, email FROM Institutes WHERE LOWER(name) LIKE '%vantage%' OR LOWER(short_name) LIKE '%vantage%'")).mappings().all()
        vantage_list = [dict(v) for v in vantage]
        print(f"\nVantage Institute: {vantage_list}")

        vantage_id = str(vantage_list[0]['institute_id'])

        # Check all schedules for Vantage created today or scheduled for today (2026-10-08)
        today_schedules_sql = text("""
            SELECT s.schedule_id, s.exam_id, s.title, s.start_time, s.end_time, s.created_date, s.created_by, s.is_deleted,
                   e.title as exam_title
            FROM ExamSchedules s
            LEFT JOIN Exams e ON s.exam_id = e.exam_id
            WHERE s.institute_id = :inst_id
              AND (CAST(s.created_date AS DATE) = '2026-10-08' OR CAST(s.start_time AS DATE) = '2026-10-08')
            ORDER BY s.created_date DESC
        """)
        today_schedules = [dict(r) for r in session.execute(today_schedules_sql, {"inst_id": vantage_id}).mappings().all()]
        
        print(f"\n--- TODAY'S SCHEDULED TESTS FOR VANTAGE ({len(today_schedules)} found) ---")
        for s in today_schedules:
            print(f"Schedule ID: {s['schedule_id']}")
            print(f"  Title: {s['title']}")
            print(f"  Exam Title: {s['exam_title']} (Exam ID: {s['exam_id']})")
            print(f"  Start Time: {s['start_time']}")
            print(f"  End Time: {s['end_time']}")
            print(f"  Created Date: {s['created_date']}")
            print(f"  Created By: {s['created_by']}")
            print(f"  Is Deleted: {s['is_deleted']}")
            print("-" * 50)

        sched_ids = [str(s['schedule_id']) for s in today_schedules]

        # Check attempts for these schedules or attempts made today by Vantage candidates
        if sched_ids:
            sched_ids_clause = ",".join([f"'{sid}'" for sid in sched_ids])
            attempts_sql = text(f"""
                SELECT a.attempt_id, a.schedule_id, s.title as schedule_title, a.user_id, u.full_name as candidate_name, u.email as candidate_email,
                       a.attempt_number, a.started_date, a.submitted_date, a.status, a.score, a.percentage
                FROM Exam_Attempts a
                LEFT JOIN ExamSchedules s ON a.schedule_id = s.schedule_id
                LEFT JOIN Users u ON a.user_id = u.user_id
                WHERE a.schedule_id IN ({sched_ids_clause})
                   OR (u.institute_id = :inst_id AND (CAST(a.started_date AS DATE) = '2026-10-08' OR CAST(a.submitted_date AS DATE) = '2026-10-08'))
                ORDER BY a.started_date DESC
            """)
            today_attempts = [dict(r) for r in session.execute(attempts_sql, {"inst_id": vantage_id}).mappings().all()]
        else:
            today_attempts = []

        print(f"\n--- ATTEMPTS / COMPLETED TESTS FOR TODAY'S VANTAGE SCHEDULES ({len(today_attempts)} found) ---")
        for a in today_attempts:
            print(f"Attempt ID: {a['attempt_id']}")
            print(f"  Schedule Title: {a['schedule_title']} (Schedule ID: {a['schedule_id']})")
            print(f"  Candidate: {a['candidate_name']} ({a['candidate_email']})")
            print(f"  Status: {a['status']}")
            print(f"  Started: {a['started_date']} | Submitted: {a['submitted_date']}")
            print(f"  Score: {a['score']} | Percentage: {a['percentage']}")
            print("-" * 50)

        # Check answers linked to these attempts/schedules
        att_ids = [str(a['attempt_id']) for a in today_attempts]
        if att_ids or sched_ids:
            att_clause = ",".join([f"'{aid}'" for aid in att_ids]) if att_ids else "''"
            sch_clause = ",".join([f"'{sid}'" for sid in sched_ids]) if sched_ids else "''"
            answers_sql = text(f"""
                SELECT ans.answer_id, ans.attempt_id, ans.schedule_id, ans.user_id, u.full_name as user_name,
                       ans.question_id, ans.written_answer, ans.selected_option_id, ans.created_date, ans.marks_awarded
                FROM Answers ans
                LEFT JOIN Users u ON ans.user_id = u.user_id
                WHERE ans.attempt_id IN ({att_clause}) OR ans.schedule_id IN ({sch_clause})
                ORDER BY ans.created_date DESC
            """)
            today_answers = [dict(r) for r in session.execute(answers_sql).mappings().all()]
        else:
            today_answers = []

        print(f"\n--- ANSWERS / EVALUATIONS ASSOCIATED ({len(today_answers)} found) ---")

        # Check schedule mappings linked to these schedules
        if sched_ids:
            mappings_sql = text(f"""
                SELECT m.mapping_id, m.schedule_id, s.title as schedule_title, m.user_id, u.full_name as user_name, m.created_date
                FROM ExamScheduleMapping m
                LEFT JOIN ExamSchedules s ON m.schedule_id = s.schedule_id
                LEFT JOIN Users u ON m.user_id = u.user_id
                WHERE m.schedule_id IN ({sched_ids_clause})
            """)
            today_mappings = [dict(r) for r in session.execute(mappings_sql).mappings().all()]
        else:
            today_mappings = []

        print(f"\n--- CANDIDATE MAPPINGS (TEST INBOX) ASSOCIATED ({len(today_mappings)} found) ---")
        for m in today_mappings:
            print(f"Mapping ID: {m['mapping_id']} | Schedule: {m['schedule_title']} | Candidate: {m['user_name']} (User ID: {m['user_id']})")

        # Check review comments
        if att_ids:
            comments_sql = text(f"""
                SELECT c.comment_id, c.attempt_id, c.comment_text, c.created_date
                FROM ExamReviewComments c
                WHERE c.attempt_id IN ({att_clause})
            """)
            today_comments = [dict(r) for r in session.execute(comments_sql).mappings().all()]
        else:
            today_comments = []
        print(f"\n--- REVIEW COMMENTS ASSOCIATED ({len(today_comments)} found) ---")

        # Check other institute schedules today just to confirm isolation
        other_schedules_sql = text("""
            SELECT s.schedule_id, s.title, s.institute_id, i.name as institute_name, s.created_date
            FROM ExamSchedules s
            LEFT JOIN Institutes i ON s.institute_id = i.institute_id
            WHERE s.institute_id != :inst_id
              AND (CAST(s.created_date AS DATE) = '2026-10-08' OR CAST(s.start_time AS DATE) = '2026-10-08')
        """)
        other_schedules = [dict(r) for r in session.execute(other_schedules_sql, {"inst_id": vantage_id}).mappings().all()]
        print(f"\n--- OTHER INSTITUTES' SCHEDULES TODAY ({len(other_schedules)} found - WILL NOT TOUCH) ---")
        for o in other_schedules:
            print(f"Schedule: {o['title']} | Institute: {o['institute_name']} ({o['institute_id']})")

    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
    finally:
        session.close()

if __name__ == "__main__":
    inspect_vantage_today()
