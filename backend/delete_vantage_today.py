import os
import sys
import json
from datetime import datetime, date
from sqlalchemy import text
from db.db import SQLiteDB

def delete_vantage_today_records():
    db = SQLiteDB()
    session = db.connect()
    
    if not session:
        print("Failed to connect to database.")
        return

    try:
        # Find Vantage Institute
        vantage = session.execute(text("SELECT institute_id, name, short_name FROM Institutes WHERE LOWER(name) LIKE '%vantage%' OR LOWER(short_name) LIKE '%vantage%'")).mappings().all()
        if not vantage:
            print("Vantage institute not found.")
            return

        vantage_id = str(vantage[0]['institute_id'])
        vantage_name = vantage[0]['name']
        print(f"Targeting Institute: {vantage_name} ({vantage_id})")

        # 1. Identify today's schedules for Vantage
        target_schedules_sql = text("""
            SELECT schedule_id, title, created_date, start_time
            FROM ExamSchedules
            WHERE institute_id = :inst_id
              AND (CAST(created_date AS DATE) = '2026-10-08' OR CAST(start_time AS DATE) = '2026-10-08')
        """)
        schedules_to_delete = [dict(r) for r in session.execute(target_schedules_sql, {"inst_id": vantage_id}).mappings().all()]
        schedule_ids = [str(s['schedule_id']) for s in schedules_to_delete]
        print(f"Found {len(schedule_ids)} schedules to delete: {schedule_ids}")

        if not schedule_ids:
            print("No scheduled tests found for Vantage Institute today.")
            return

        sched_ids_clause = ",".join([f"'{sid}'" for sid in schedule_ids])

        # 2. Identify attempts to delete (either directly on these schedules OR started/submitted today by Vantage users)
        target_attempts_sql = text(f"""
            SELECT a.attempt_id, a.schedule_id, a.user_id
            FROM Exam_Attempts a
            LEFT JOIN Users u ON a.user_id = u.user_id
            WHERE a.schedule_id IN ({sched_ids_clause})
               OR (u.institute_id = :inst_id AND (CAST(a.started_date AS DATE) = '2026-10-08' OR CAST(a.submitted_date AS DATE) = '2026-10-08'))
        """)
        attempts_to_delete = [dict(r) for r in session.execute(target_attempts_sql, {"inst_id": vantage_id}).mappings().all()]
        attempt_ids = [str(a['attempt_id']) for a in attempts_to_delete]
        print(f"Found {len(attempt_ids)} attempts to delete: {attempt_ids}")

        att_ids_clause = ",".join([f"'{aid}'" for aid in attempt_ids]) if attempt_ids else "''"

        # Begin Deletion Steps in cascade order
        print("\n--- Starting Cascade Deletion ---")

        # Step 1: Delete ExamReviewCommentsHistory
        del_com_hist = text(f"""
            DELETE FROM ExamReviewCommentsHistory
            WHERE attempt_id IN ({att_ids_clause})
               OR comment_id IN (SELECT comment_id FROM ExamReviewComments WHERE attempt_id IN ({att_ids_clause}))
        """)
        res_ch = session.execute(del_com_hist)
        print(f"1. Deleted ExamReviewCommentsHistory: {res_ch.rowcount} rows")

        # Step 2: Delete ExamReviewComments
        del_comments = text(f"""
            DELETE FROM ExamReviewComments
            WHERE attempt_id IN ({att_ids_clause})
        """)
        res_c = session.execute(del_comments)
        print(f"2. Deleted ExamReviewComments: {res_c.rowcount} rows")

        # Step 3: Delete MarksHistory
        del_marks = text(f"""
            DELETE FROM MarksHistory
            WHERE answer_id IN (
                SELECT answer_id FROM Answers 
                WHERE attempt_id IN ({att_ids_clause}) OR schedule_id IN ({sched_ids_clause})
            )
        """)
        res_m = session.execute(del_marks)
        print(f"3. Deleted MarksHistory: {res_m.rowcount} rows")

        # Step 4: Delete Answers
        del_answers = text(f"""
            DELETE FROM Answers
            WHERE attempt_id IN ({att_ids_clause}) OR schedule_id IN ({sched_ids_clause})
        """)
        res_a = session.execute(del_answers)
        print(f"4. Deleted Answers: {res_a.rowcount} rows")

        # Step 5: Delete Exam_Attempts
        del_attempts = text(f"""
            DELETE FROM Exam_Attempts
            WHERE attempt_id IN ({att_ids_clause}) OR schedule_id IN ({sched_ids_clause})
        """)
        res_att = session.execute(del_attempts)
        print(f"5. Deleted Exam_Attempts: {res_att.rowcount} rows")

        # Step 6: Delete ExamScheduleMapping (Candidate Test Inbox)
        del_mappings = text(f"""
            DELETE FROM ExamScheduleMapping
            WHERE schedule_id IN ({sched_ids_clause})
        """)
        res_map = session.execute(del_mappings)
        print(f"6. Deleted ExamScheduleMapping (Test Inbox items): {res_map.rowcount} rows")

        # Step 7: Delete ExamSchedules
        del_schedules = text(f"""
            DELETE FROM ExamSchedules
            WHERE schedule_id IN ({sched_ids_clause}) AND institute_id = :inst_id
        """)
        res_sch = session.execute(del_schedules, {"inst_id": vantage_id})
        print(f"7. Deleted ExamSchedules: {res_sch.rowcount} rows")

        session.commit()
        print("\n=== SUCCESS: All today's tests and related records for Vantage Institute have been completely deleted! ===")

    except Exception as e:
        session.rollback()
        print(f"Error during deletion: {e}")
        import traceback
        traceback.print_exc()
    finally:
        session.close()

if __name__ == "__main__":
    delete_vantage_today_records()
