import sys
from sqlalchemy import text
import json

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

inst_id = '135c53dc-6422-4c54-b4b5-2fded751d9fa'

exam_ids = [
    '0f1c7307-4e3f-41f4-bdca-3f4fd6d59355', # Unit test VI
    'a7931767-a80b-4bbe-b4c9-ade98b607835', # Unite test III
    '54541e8a-26f7-4723-8f8c-73fad90bd1cb', # Unit - Test 2
    'ad1a8cf3-fb34-49f3-89c1-6d27bf69c8ad', # Unit test IV
    'd90b7546-5d0a-42df-854a-753dbee74aab', # English (2026-09-24 05:54:38)
    'fa38d088-df05-48cb-80b6-588504c6da13', # English (2026-09-24 04:59:06)
    'beb40c2c-da45-41f9-b740-ac0cbd2f6eb5', # English_test_1
]

for eid in exam_ids:
    exam = session.execute(text("SELECT * FROM Exams WHERE exam_id = :eid"), {"eid": eid}).mappings().first()
    print("=" * 60)
    print(f"EXAM: '{exam['title']}' (ID: {eid})")
    print(f"Created: {exam['created_date']} by {exam['created_by']}")
    print(f"Subject: {exam['subject_name']} ({exam['subject_id']})")
    print(f"Questions count: {exam['total_questions']}, Total Marks: {exam['total_marks']}, Duration: {exam['duration_mins']} mins")

    # 1. Check exam_question_mapping
    eq_mappings = session.execute(text("SELECT count(*) FROM exam_question_mapping WHERE exam_id = :eid"), {"eid": eid}).scalar()
    print(f"  - Questions mapped (exam_question_mapping): {eq_mappings}")

    # 2. Check ExamSections
    sections = session.execute(text("SELECT count(*) FROM ExamSections WHERE exam_id = :eid"), {"eid": eid}).scalar()
    print(f"  - Exam sections (ExamSections): {sections}")

    # 3. Check ExamsDepartments & ExamsTeams
    ed = session.execute(text("SELECT count(*) FROM ExamsDepartments WHERE exam_id = :eid"), {"eid": eid}).scalar()
    et = session.execute(text("SELECT count(*) FROM ExamsTeams WHERE exam_id = :eid"), {"eid": eid}).scalar()
    em = session.execute(text("SELECT count(*) FROM ExamMapping WHERE exam_id = :eid"), {"eid": eid}).scalar()
    print(f"  - Class/Dept/Team mappings: ExamsDepartments={ed}, ExamsTeams={et}, ExamMapping={em}")

    # 4. Check ExamSchedules
    scheds = session.execute(text("SELECT * FROM ExamSchedules WHERE exam_id = :eid"), {"eid": eid}).mappings().all()
    print(f"  - Linked ExamSchedules: {len(scheds)}")
    for s in scheds:
        sid = s['schedule_id']
        print(f"    * Schedule: '{s['title']}' (ID: {sid}), Start: {s['start_time']}, End: {s['end_time']}")
        
        # Mappings
        sm = session.execute(text("SELECT count(*) FROM ExamScheduleMapping WHERE schedule_id = :sid"), {"sid": sid}).scalar()
        print(f"      - ExamScheduleMapping: {sm}")

        # Attempts
        attempts = session.execute(text("""
            SELECT a.attempt_id, a.user_id, u.full_name, u.email, a.started_date, a.submitted_date, a.status, a.score, a.percentage
            FROM Exam_Attempts a
            LEFT JOIN Users u ON a.user_id = u.user_id
            WHERE a.schedule_id = :sid
        """), {"sid": sid}).mappings().all()
        print(f"      - Student Attempts: {len(attempts)}")
        for a in attempts:
            print(f"        * Attempt {a['attempt_id']} by {a['full_name']} ({a['email']}): Status={a['status']}, Score={a['score']}")

        # Answers
        answers = session.execute(text("SELECT count(*) FROM Answers WHERE schedule_id = :sid"), {"sid": sid}).scalar()
        print(f"      - Answers: {answers}")

        # MarksHistory
        marks = session.execute(text("""
            SELECT count(*) FROM MarksHistory 
            WHERE answer_id IN (SELECT answer_id FROM Answers WHERE schedule_id = :sid)
        """), {"sid": sid}).scalar()
        print(f"      - MarksHistory: {marks}")

        # ExamReviewComments
        comments = session.execute(text("""
            SELECT count(*) FROM ExamReviewComments
            WHERE attempt_id IN (SELECT attempt_id FROM Exam_Attempts WHERE schedule_id = :sid)
        """), {"sid": sid}).scalar()
        print(f"      - ExamReviewComments: {comments}")

    # Also check PaperSchedules
    pscheds = session.execute(text("SELECT * FROM PaperSchedules WHERE exam_id = :eid"), {"eid": eid}).mappings().all()
    print(f"  - Linked PaperSchedules: {len(pscheds)}")

db.close()

