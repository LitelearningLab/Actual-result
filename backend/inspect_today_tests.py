import json
from sqlalchemy import text
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

today_str = "2026-09-15"

# Fetch Exam Schedules created or starting today
schedules_sql = text("""
SELECT s.schedule_id, s.title as schedule_title, s.exam_id, e.title as exam_title,
       s.start_time, s.end_time, s.created_date, s.created_by, u.full_name as creator_name
FROM ExamSchedules s
LEFT JOIN Exams e ON s.exam_id = e.exam_id
LEFT JOIN Users u ON s.created_by = CAST(u.user_id AS VARCHAR(100))
WHERE CAST(s.created_date AS DATE) = :today OR CAST(s.start_time AS DATE) = :today
ORDER BY s.created_date DESC
""")
schedules = [dict(r) for r in session.execute(schedules_sql, {"today": today_str}).mappings().all()]

# Fetch Exams created today
exams_sql = text("""
SELECT e.exam_id, e.title, e.description, e.created_date, e.created_by, u.full_name as creator_name
FROM Exams e
LEFT JOIN Users u ON e.created_by = CAST(u.user_id AS VARCHAR(100))
WHERE CAST(e.created_date AS DATE) = :today
ORDER BY e.created_date DESC
""")
exams = [dict(r) for r in session.execute(exams_sql, {"today": today_str}).mappings().all()]

# Fetch Exam Attempts started or submitted today
attempts_sql = text("""
SELECT a.attempt_id, a.schedule_id, s.title as schedule_title, a.user_id, u.full_name as candidate_name, u.email as candidate_email,
       a.attempt_number, a.started_date, a.submitted_date, a.status, a.score, a.percentage
FROM Exam_Attempts a
LEFT JOIN ExamSchedules s ON a.schedule_id = s.schedule_id
LEFT JOIN Users u ON a.user_id = u.user_id
WHERE CAST(a.started_date AS DATE) = :today OR CAST(a.submitted_date AS DATE) = :today
ORDER BY a.started_date DESC
""")
attempts = [dict(r) for r in session.execute(attempts_sql, {"today": today_str}).mappings().all()]

# Fetch Answers submitted today
answers_sql = text("""
SELECT ans.answer_id, ans.attempt_id, ans.schedule_id, ans.user_id, u.full_name as user_name,
       ans.question_id, q.question_text, ans.written_answer, ans.selected_option_id, ans.created_date
FROM Answers ans
LEFT JOIN Users u ON ans.user_id = u.user_id
LEFT JOIN Questions q ON ans.question_id = q.question_id
WHERE CAST(ans.created_date AS DATE) = :today
ORDER BY ans.created_date DESC
""")
answers = [dict(r) for r in session.execute(answers_sql, {"today": today_str}).mappings().all()]

# Fetch Schedule Mappings created today
mappings_sql = text("""
SELECT m.mapping_id, m.schedule_id, s.title as schedule_title, m.user_id, u.full_name as mapped_user, m.created_date
FROM ExamScheduleMapping m
LEFT JOIN ExamSchedules s ON m.schedule_id = s.schedule_id
LEFT JOIN Users u ON m.user_id = u.user_id
WHERE CAST(m.created_date AS DATE) = :today
""")
mappings = [dict(r) for r in session.execute(mappings_sql, {"today": today_str}).mappings().all()]

# Fetch Review Comments created today
comments_sql = text("""
SELECT c.comment_id, c.attempt_id, c.question_id, c.comment_text, c.created_by, u.full_name as reviewer_name, c.created_date
FROM ExamReviewComments c
LEFT JOIN Users u ON c.created_by = CAST(u.user_id AS VARCHAR(100))
WHERE CAST(c.created_date AS DATE) = :today
""")
comments = [dict(r) for r in session.execute(comments_sql, {"today": today_str}).mappings().all()]

result = {
    "date": today_str,
    "summary": {
        "exams_created_today": len(exams),
        "schedules_created_or_started_today": len(schedules),
        "attempts_started_or_submitted_today": len(attempts),
        "answers_written_today": len(answers),
        "schedule_mappings_today": len(mappings),
        "review_comments_today": len(comments)
    },
    "exams": exams,
    "schedules": schedules,
    "attempts": attempts,
    "mappings": mappings,
    "answers_sample": answers[:15],
    "answers_count": len(answers),
    "comments": comments
}

# Print JSON summary
def default_serializer(obj):
    return str(obj)

print(json.dumps(result, indent=2, default=default_serializer))

db.close()
