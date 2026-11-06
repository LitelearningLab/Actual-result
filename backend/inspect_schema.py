import sys
from sqlalchemy import text

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

for tbl in ['ExamSchedules', 'Exams', 'Exam_Attempts', 'Answers', 'ExamScheduleMapping', 'Questions', 'ExamQuestions']:
    cols = session.execute(text(f"SELECT COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '{tbl}'")).fetchall()
    print(f"\nTABLE {tbl}:")
    print(", ".join([f"{c[0]} ({c[1]})" for c in cols]))

db.close()

