import os
import sys

backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from db.db import SQLiteDB
from db.models import ExamSchedule, ExamScheduleMapping, User

db = SQLiteDB()
session = db.connect()

schedules = session.query(ExamSchedule).all()
print(f"Found {len(schedules)} schedules:")
for s in schedules:
    print("Schedule ID:", s.schedule_id)
    print("Title:", s.title)
    print("Institute ID:", s.institute_id)
    print("Department ID:", getattr(s, 'department_id', None))
    print("Team ID:", getattr(s, 'team_id', None))
    print("Published:", s.published)
    print("Start Time:", s.start_time)
    print("End Time:", s.end_time)

mappings = session.query(ExamScheduleMapping).all()
print(f"\nFound {len(mappings)} mappings in ExamScheduleMapping:")
for m in mappings:
    print(f"Schedule ID: {m.schedule_id}, User ID: {m.user_id}, Dept ID: {m.department_id}, Team ID: {m.team_id}")

users = session.query(User).all()
print(f"\nFound {len(users)} users:")
for u in users:
    print(f"User: {u.user_name} ({u.user_id}), Role: {u.user_role}, Inst: {u.institute_id}, Dept: {u.department_id}, Team: {u.team_id}")

session.close()
