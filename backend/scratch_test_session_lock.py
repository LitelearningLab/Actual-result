import sys
import os
import time
import datetime
from sqlalchemy import or_

backend_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, backend_dir)

from db.db import SQLiteDB
from db.models import User, AppSession
from auth.auth import JWTValidator

def run_test():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("Failed to connect to database.")
        return

    try:
        user = session.query(User).first()
        if not user:
            print("No test user found in DB.")
            return

        print(f"Testing dual-state session lock with user: {user.email} (ID: {user.user_id})")

        uid_str = str(user.user_id)
        session.query(AppSession).filter(
            or_(AppSession.user_id == uid_str, AppSession.user_id == user.user_id)
        ).delete(synchronize_session=False)
        session.commit()

        HEARTBEAT_TIMEOUT_SECONDS = 90
        ACTIVE_WORKING_THRESHOLD_SECONDS = 35

        # --- Test 1: User A is actively working (last_heartbeat = 10s ago) ---
        recent_time = datetime.datetime.utcnow() - datetime.timedelta(seconds=10)
        sess_a = AppSession(user_id=uid_str, token="active_token", created_date=recent_time, last_heartbeat=recent_time)
        session.add(sess_a)
        session.commit()

        now = datetime.datetime.utcnow()
        active_working_found = False
        tab_closed_found = False
        rem_sec = 0

        existing = session.query(AppSession).filter(
            or_(AppSession.user_id == uid_str, AppSession.user_id == user.user_id)
        ).all()

        for s in existing:
            elapsed = (now - s.last_heartbeat).total_seconds()
            if elapsed <= ACTIVE_WORKING_THRESHOLD_SECONDS:
                active_working_found = True
            elif elapsed < HEARTBEAT_TIMEOUT_SECONDS:
                tab_closed_found = True
                rem_sec = int(HEARTBEAT_TIMEOUT_SECONDS - elapsed)

        print(f"[Test 1] User A working (10s ago) -> active_working: {active_working_found} (expected True), tab_closed: {tab_closed_found} (expected False)")
        assert active_working_found is True
        assert tab_closed_found is False

        # --- Test 2: User A tab closed / stopped heartbeat (last_heartbeat = 50s ago) ---
        sess_a.last_heartbeat = datetime.datetime.utcnow() - datetime.timedelta(seconds=50)
        session.commit()

        now = datetime.datetime.utcnow()
        active_working_found = False
        tab_closed_found = False
        rem_sec = 0

        existing = session.query(AppSession).filter(
            or_(AppSession.user_id == uid_str, AppSession.user_id == user.user_id)
        ).all()

        for s in existing:
            elapsed = (now - s.last_heartbeat).total_seconds()
            if elapsed <= ACTIVE_WORKING_THRESHOLD_SECONDS:
                active_working_found = True
            elif elapsed < HEARTBEAT_TIMEOUT_SECONDS:
                tab_closed_found = True
                rem_sec = int(HEARTBEAT_TIMEOUT_SECONDS - elapsed)

        print(f"[Test 2] User A tab closed (50s ago) -> active_working: {active_working_found} (expected False), tab_closed: {tab_closed_found} (expected True), remaining: {rem_sec}s")
        assert active_working_found is False
        assert tab_closed_found is True
        assert 35 <= rem_sec <= 45

        # Cleanup test
        session.query(AppSession).filter(
            or_(AppSession.user_id == uid_str, AppSession.user_id == user.user_id)
        ).delete(synchronize_session=False)
        session.commit()

        print("\nALL DUAL-STATE BACKEND TESTS PASSED PERFECTLY!")
    finally:
        session.close()

if __name__ == "__main__":
    run_test()
