"""Diagnose against the PRODUCTION database (matching the running app)."""
import sys, os

# Load .env file
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

sys.path.insert(0, os.path.dirname(__file__))

from db.db import SQLiteDB
from db.models import Exam, ExamMapping, ExamQuestionMapping, ExamSchedule, QuestionMapping, Question
from sqlalchemy import text

db = SQLiteDB()
session = db.connect()
if not session:
    print("ERROR: Could not connect to database")
    sys.exit(1)

# 1. Find the schedule from the screenshot URL
target_sid = '3a8d95e7-5937-4f16-9b26-3671fd751c71'
print(f"=== Looking for schedule_id: {target_sid} ===")
result = session.execute(text(
    f"SELECT TOP 1 CAST(schedule_id AS VARCHAR(100)) as sid, title, CAST(exam_id AS VARCHAR(100)) as eid, published FROM ExamSchedules WHERE CAST(schedule_id AS VARCHAR(100)) LIKE '%3a8d%' OR schedule_id = '{target_sid}'"
))
for r in result.fetchall():
    print(f"  {r}")

# 2. Find today's schedules
print("\n=== Schedules starting today (2026-07-23) ===")
result = session.execute(text(
    "SELECT CAST(schedule_id AS VARCHAR(100)) as sid, title, CAST(exam_id AS VARCHAR(100)) as eid, published, start_time FROM ExamSchedules WHERE start_time >= '2026-07-23' ORDER BY start_time DESC"
))
rows = result.fetchall()
print(f"Found: {len(rows)}")
for r in rows:
    print(f"  {r}")

# 3. Find 'Half yearly' exam
print("\n=== Exams with 'Half' or 'half' in title ===")
result = session.execute(text(
    "SELECT CAST(exam_id AS VARCHAR(100)) as eid, title, total_questions FROM Exams WHERE title LIKE '%Half%' OR title LIKE '%half%'"
))
rows = result.fetchall()
print(f"Found: {len(rows)}")
for r in rows:
    exam_id = r[0]
    print(f"\n  Exam: {r}")
    
    # ExamMapping
    em = session.execute(text(
        f"SELECT CAST(category_id AS VARCHAR(100)), number_of_questions, randomize_questions FROM ExamMapping WHERE CAST(exam_id AS VARCHAR(100)) = '{exam_id}'"
    ))
    em_rows = em.fetchall()
    print(f"  ExamMapping: {len(em_rows)}")
    for m in em_rows:
        cat_id = m[0]
        print(f"    cat={cat_id}, num_q={m[1]}, randomize={m[2]}")
        
        # ExamQuestionMapping (fixed questions)
        eqm = session.execute(text(
            f"SELECT COUNT(*) FROM exam_question_mapping WHERE CAST(exam_id AS VARCHAR(100)) = '{exam_id}' AND CAST(category_id AS VARCHAR(100)) = '{cat_id}'"
        ))
        eqm_count = eqm.fetchone()[0]
        print(f"    ExamQuestionMapping count: {eqm_count}")
        
        # QuestionMapping pool
        qm = session.execute(text(
            f"SELECT COUNT(*) FROM QuestionMapping WHERE CAST(category_id AS VARCHAR(100)) = '{cat_id}'"
        ))
        qm_count = qm.fetchone()[0]
        print(f"    QuestionMapping pool count: {qm_count}")

# 4. Last 5 schedules
print("\n=== Last 5 schedules ===")
result = session.execute(text(
    "SELECT TOP 5 CAST(schedule_id AS VARCHAR(100)) as sid, title, published, start_time FROM ExamSchedules ORDER BY start_time DESC"
))
for r in result.fetchall():
    print(f"  {r}")

session.close()
