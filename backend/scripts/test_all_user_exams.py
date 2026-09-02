import os
import sys

backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from others.exams import get_user_exam_details
from db.db import SQLiteDB
from db.models import User, ExamSchedule

db = SQLiteDB()
session = db.connect()
users = session.query(User).filter_by(institute_id='be515fd3-98cd-4280-ab39-54b3f4a268bd').all()

class MockReq:
    def __init__(self, uid):
        self.args = {'user_id': uid, 'institute_id': 'be515fd3-98cd-4280-ab39-54b3f4a268bd'}

print(f"Testing {len(users)} users in Profluent Lab:")
for u in users:
    resp, status = get_user_exam_details(MockReq(str(u.user_id)))
    count = len(resp.get('data', []))
    print(f"User {u.user_name} ({u.user_role}, ID: {u.user_id}) -> Data count: {count}")
    if count > 0:
        print("  Items:", [(x.get('title'), x.get('type')) for x in resp.get('data', [])])
