import json
from sqlalchemy import text
from db.db import SQLiteDB

def delete_today_records():
    db = SQLiteDB()
    session = db.connect()
    
    if not session:
        print("Failed to connect to database.")
        return

    today_str = "2026-09-15"

    try:
        print("Starting deletion for date:", today_str)

        # 1. Delete ExamReviewComments
        del_comments = text("""
        DELETE FROM ExamReviewComments 
        WHERE CAST(created_date AS DATE) = :today 
           OR attempt_id IN (
               SELECT attempt_id FROM Exam_Attempts 
               WHERE CAST(started_date AS DATE) = :today 
                  OR CAST(submitted_date AS DATE) = :today
                  OR schedule_id IN (
                      SELECT schedule_id FROM ExamSchedules 
                      WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
                  )
           )
        """)
        res_c = session.execute(del_comments, {"today": today_str})
        print(f"Deleted ExamReviewComments: {res_c.rowcount} rows")

        # 2. Delete MarksHistory
        del_marks = text("""
        DELETE FROM MarksHistory 
        WHERE CAST(updated_date AS DATE) = :today 
           OR answer_id IN (
               SELECT answer_id FROM Answers 
               WHERE CAST(created_date AS DATE) = :today 
                  OR attempt_id IN (
                      SELECT attempt_id FROM Exam_Attempts 
                      WHERE CAST(started_date AS DATE) = :today 
                         OR CAST(submitted_date AS DATE) = :today
                         OR schedule_id IN (
                             SELECT schedule_id FROM ExamSchedules 
                             WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
                         )
                  )
           )
        """)
        res_m = session.execute(del_marks, {"today": today_str})
        print(f"Deleted MarksHistory: {res_m.rowcount} rows")

        # 3. Delete Answers
        del_answers = text("""
        DELETE FROM Answers 
        WHERE CAST(created_date AS DATE) = :today 
           OR attempt_id IN (
               SELECT attempt_id FROM Exam_Attempts 
               WHERE CAST(started_date AS DATE) = :today 
                  OR CAST(submitted_date AS DATE) = :today
                  OR schedule_id IN (
                      SELECT schedule_id FROM ExamSchedules 
                      WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
                  )
           )
        """)
        res_a = session.execute(del_answers, {"today": today_str})
        print(f"Deleted Answers: {res_a.rowcount} rows")

        # 4. Delete Exam_Attempts
        del_attempts = text("""
        DELETE FROM Exam_Attempts 
        WHERE CAST(started_date AS DATE) = :today 
           OR CAST(submitted_date AS DATE) = :today
           OR schedule_id IN (
               SELECT schedule_id FROM ExamSchedules 
               WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
           )
        """)
        res_att = session.execute(del_attempts, {"today": today_str})
        print(f"Deleted Exam_Attempts: {res_att.rowcount} rows")

        # 5. Delete ExamScheduleMapping
        del_mappings = text("""
        DELETE FROM ExamScheduleMapping 
        WHERE CAST(created_date AS DATE) = :today 
           OR schedule_id IN (
               SELECT schedule_id FROM ExamSchedules 
               WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
           )
        """)
        res_map = session.execute(del_mappings, {"today": today_str})
        print(f"Deleted ExamScheduleMapping: {res_map.rowcount} rows")

        # 6. Delete ExamSchedules
        del_schedules = text("""
        DELETE FROM ExamSchedules 
        WHERE CAST(created_date AS DATE) = :today OR CAST(start_time AS DATE) = :today
        """)
        res_sch = session.execute(del_schedules, {"today": today_str})
        print(f"Deleted ExamSchedules: {res_sch.rowcount} rows")

        # 7. Delete base Exams if created today
        del_exams = text("""
        DELETE FROM Exams 
        WHERE CAST(created_date AS DATE) = :today
        """)
        res_ex = session.execute(del_exams, {"today": today_str})
        print(f"Deleted Exams: {res_ex.rowcount} rows")

        session.commit()
        print("\nSUCCESS: All today's tests, schedules, attempts, answers, mappings, and review comments permanently deleted from DB.")
    except Exception as e:
        session.rollback()
        print(f"Error during deletion: {e}")
    finally:
        db.close()

if __name__ == '__main__':
    delete_today_records()
