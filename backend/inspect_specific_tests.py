import sys
from sqlalchemy import text
import json

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

inst_id = '135c53dc-6422-4c54-b4b5-2fded751d9fa'

targets = ["unit test vi", "unit test iii", "unit - test 2", "unit test iv", "english"]

print("=== CHECKING PaperSchedules ===")
cols_ps = [c[0] for c in session.execute(text("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='PaperSchedules'")).fetchall()]
print("PaperSchedules columns:", cols_ps)

paper_scheds = session.execute(text(f"SELECT * FROM PaperSchedules WHERE institute_id = :iid"), {"iid": inst_id}).mappings().all()
print(f"Total PaperSchedules for institute: {len(paper_scheds)}")
for ps in paper_scheds:
    print(f"PS ID: {ps.get('paper_schedule_id') or ps.get('schedule_id')} | Title: {ps.get('title') or ps.get('name')} | Dict: {dict(ps)}")

print("\n=== CHECKING ExamSchedules ===")
exam_scheds = session.execute(text(f"SELECT * FROM ExamSchedules WHERE institute_id = :iid"), {"iid": inst_id}).mappings().all()
print(f"Total ExamSchedules for institute: {len(exam_scheds)}")
for es in exam_scheds:
    print(f"ES ID: {es['schedule_id']} | Title: '{es['title']}' | ExamID: {es['exam_id']} | Created: {es['created_date']} | is_deleted: {es['is_deleted']}")

print("\n=== CHECKING Exams ===")
exams = session.execute(text(f"SELECT * FROM Exams WHERE institute_id = :iid"), {"iid": inst_id}).mappings().all()
print(f"Total Exams for institute: {len(exams)}")
for ex in exams:
    print(f"Exam ID: {ex['exam_id']} | Title: '{ex['title']}' | Created: {ex['created_date']}")

print("\n=== SEARCHING FOR TARGETS ACROSS ALL TITLES IN INSTITUTE ===")
print("Targets:", targets)

# ExamSchedules
for es in exam_scheds:
    t = (es['title'] or "").lower()
    for tgt in targets:
        if tgt in t:
            print(f"MATCH in ExamSchedules: '{es['title']}' (ID: {es['schedule_id']}) matches target '{tgt}'")

# PaperSchedules
for ps in paper_scheds:
    t = str(ps.get('title') or ps.get('name') or "").lower()
    for tgt in targets:
        if tgt in t:
            print(f"MATCH in PaperSchedules: '{t}' matches target '{tgt}'")

# Exams
for ex in exams:
    t = (ex['title'] or "").lower()
    for tgt in targets:
        if tgt in t:
            print(f"MATCH in Exams: '{ex['title']}' (ID: {ex['exam_id']}) matches target '{tgt}'")

db.close()

