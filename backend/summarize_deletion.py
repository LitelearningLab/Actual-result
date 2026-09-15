import json
from sqlalchemy import text
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

today_str = "2026-09-15"

# 1. Schedules created/started today
schedules_sql = text("""
SELECT s.schedule_id, s.title, s.exam_id, e.title as exam_title, s.start_time, s.end_time, s.created_date, s.created_by, u.full_name as creator
FROM ExamSchedules s
LEFT JOIN Exams e ON s.exam_id = e.exam_id
LEFT JOIN Users u ON CAST(s.created_by AS VARCHAR(100)) = CAST(u.user_id AS VARCHAR(100))
WHERE CAST(s.created_date AS DATE) = :today OR CAST(s.start_time AS DATE) = :today
ORDER BY s.created_date DESC
""")
schedules = [dict(r) for r in session.execute(schedules_sql, {"today": today_str}).mappings().all()]
sched_ids = [s['schedule_id'] for s in schedules]

# 2. ExamScheduleMappings created today or for today's schedules
mappings_sql = text("""
SELECT m.mapping_id, m.schedule_id, s.title as schedule_title, m.user_id, u.full_name as candidate_name, m.created_date
FROM ExamScheduleMapping m
LEFT JOIN ExamSchedules s ON m.schedule_id = s.schedule_id
LEFT JOIN Users u ON m.user_id = u.user_id
WHERE CAST(m.created_date AS DATE) = :today OR m.schedule_id IN (SELECT schedule_id FROM ExamSchedules WHERE CAST(created_date AS DATE) = :today)
""")
mappings = [dict(r) for r in session.execute(mappings_sql, {"today": today_str}).mappings().all()]

# 3. Attempts started/submitted today or tied to today's schedules
attempts_sql = text("""
SELECT a.attempt_id, a.schedule_id, s.title as schedule_title, a.user_id, u.full_name as candidate_name, u.email as candidate_email,
       a.attempt_number, a.started_date, a.submitted_date, a.status, a.score, a.percentage
FROM Exam_Attempts a
LEFT JOIN ExamSchedules s ON a.schedule_id = s.schedule_id
LEFT JOIN Users u ON a.user_id = u.user_id
WHERE CAST(a.started_date AS DATE) = :today OR CAST(a.submitted_date AS DATE) = :today OR a.schedule_id IN (SELECT schedule_id FROM ExamSchedules WHERE CAST(created_date AS DATE) = :today)
ORDER BY a.started_date DESC
""")
attempts = [dict(r) for r in session.execute(attempts_sql, {"today": today_str}).mappings().all()]
attempt_ids = [a['attempt_id'] for a in attempts]

# 4. Answers written today or belonging to today's attempts
answers_sql = text("""
SELECT ans.answer_id, ans.attempt_id, ans.schedule_id, ans.user_id, u.full_name as candidate_name,
       ans.question_id, q.question_text, ans.written_answer, ans.created_date
FROM Answers ans
LEFT JOIN Users u ON ans.user_id = u.user_id
LEFT JOIN Questions q ON ans.question_id = q.question_id
WHERE CAST(ans.created_date AS DATE) = :today OR ans.attempt_id IN (
    SELECT attempt_id FROM Exam_Attempts WHERE CAST(started_date AS DATE) = :today OR schedule_id IN (SELECT schedule_id FROM ExamSchedules WHERE CAST(created_date AS DATE) = :today)
)
ORDER BY ans.created_date DESC
""")
answers = [dict(r) for r in session.execute(answers_sql, {"today": today_str}).mappings().all()]
answer_ids = [ans['answer_id'] for ans in answers]

# 5. ExamReviewComments today
comments_sql = text("""
SELECT c.comment_id, c.attempt_id, c.question_id, c.comment_text, c.created_by, c.created_date
FROM ExamReviewComments c
WHERE CAST(c.created_date AS DATE) = :today OR c.attempt_id IN (
    SELECT attempt_id FROM Exam_Attempts WHERE CAST(started_date AS DATE) = :today
)
""")
comments = [dict(r) for r in session.execute(comments_sql, {"today": today_str}).mappings().all()]

# 6. MarksHistory today
marks_sql = text("""
SELECT mh.history_id, mh.answer_id, mh.marks_awarded, mh.source, mh.edit_reason, mh.updated_date
FROM MarksHistory mh
WHERE CAST(mh.updated_date AS DATE) = :today OR mh.answer_id IN (
    SELECT answer_id FROM Answers WHERE CAST(created_date AS DATE) = :today
)
""")
marks = [dict(r) for r in session.execute(marks_sql, {"today": today_str}).mappings().all()]

# 7. Exams created today
exams_sql = text("""
SELECT e.exam_id, e.title, e.created_date, e.created_by, u.full_name as creator
FROM Exams e
LEFT JOIN Users u ON CAST(e.created_by AS VARCHAR(100)) = CAST(u.user_id AS VARCHAR(100))
WHERE CAST(e.created_date AS DATE) = :today
""")
exams = [dict(r) for r in session.execute(exams_sql, {"today": today_str}).mappings().all()]

report = {
    "date": today_str,
    "counts": {
        "schedules": len(schedules),
        "schedule_mappings": len(mappings),
        "attempts": len(attempts),
        "answers": len(answers),
        "comments": len(comments),
        "marks_history": len(marks),
        "exams": len(exams)
    },
    "schedules": schedules,
    "mappings": mappings,
    "attempts": attempts,
    "answers": answers,
    "comments": comments,
    "marks": marks,
    "exams": exams
}

with open("today_deletion_report.json", "w") as f:
    json.dump(report, f, indent=2, default=str)

print("Report saved to today_deletion_report.json")
print("Counts:", report["counts"])

db.close()
