import os
import sys

backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from db.db import SQLiteDB
from db.models import ExamSchedule, Exam_Attempt, ExamScheduleMapping, Answer, Exam

db = SQLiteDB()
session = db.connect()

print("ExamSchedule count:", session.query(ExamSchedule).count())
print("ExamScheduleMapping count:", session.query(ExamScheduleMapping).count())
print("Exam_Attempt count:", session.query(Exam_Attempt).count())
print("Answer count:", session.query(Answer).count())
print("Exams count:", session.query(Exam).count())

session.close()
