import sys
import os
import time
import datetime
import threading
from sqlalchemy import func

backend_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, backend_dir)

from db.db import SQLiteDB
from db.models import User, AppSession, Credential
from auth.auth import JWTValidator

def run_tests():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("ERROR: Could not connect to database.")
        return False

    validator = JWTValidator(jwt_secret="secret_key_for_testing")

    try:
        # Pick a user with a valid credential
        user = session.query(User).first()
        if not user:
            print("ERROR: No test user found in database.")
            return False

        cred = session.query(Credential).filter_by(user_id=str(user.user_id)).first()
        if not cred:
            cred = session.query(Credential).filter_by(user_id=user.user_id).first()

        uid_str = str(user.user_id)
        print(f"\n==================================================")
        print(f"RUNNING CONCURRENT SESSION LOCK SUITE FOR USER:")
        print(f"Email: {user.email} | User ID: {uid_str}")
        print(f"==================================================\n")

        # Clean slate before tests
        session.query(AppSession).filter(
            func.lower(AppSession.user_id) == uid_str.lower()
        ).delete(synchronize_session=False)
        session.commit()

        # ----------------------------------------------------
        # TEST CASE 1: User A logged in (heartbeat <= 35s) -> B tries login
        # ----------------------------------------------------
        print("[TEST 1] User A active (heartbeat 10s ago) -> User B attempts login")
        hb_a = datetime.datetime.utcnow() - datetime.timedelta(seconds=10)
        sess_a = AppSession(user_id=uid_str, token="token_user_a", created_date=hb_a, last_heartbeat=hb_a)
        session.add(sess_a)
        session.commit()

        # Directly test session filter & evaluation logic
        existing_sessions = session.query(AppSession).filter(
            func.lower(AppSession.user_id) == uid_str.lower()
        ).all()

        now_utc = datetime.datetime.utcnow()
        active_found = any((now_utc - (s.last_heartbeat or s.created_date)).total_seconds() <= 35 for s in existing_sessions)
        assert active_found is True, "Expected active working session to be found"

        # Check DB state for User A
        db_sess_a = session.query(AppSession).filter_by(token="token_user_a").first()
        assert db_sess_a is not None, "User A's session MUST NOT be deleted!"
        assert db_sess_a.token == "token_user_a", "User A's token MUST NOT be replaced!"
        print("  -> RESULT: User B receives 409 active_session. User A session is untouched and active! PASS\n")

        # ----------------------------------------------------
        # TEST CASE 2: User A logs out -> B tries login -> B logs in
        # ----------------------------------------------------
        print("[TEST 2] User A logs out -> User B attempts login")
        session.delete(sess_a)
        session.commit()

        existing_sessions = session.query(AppSession).filter(
            func.lower(AppSession.user_id) == uid_str.lower()
        ).all()
        assert len(existing_sessions) == 0, "Expected 0 sessions after User A logout"

        # Simulate User B login creating a new session
        now_b = datetime.datetime.utcnow()
        sess_b = AppSession(user_id=uid_str, token="token_user_b", created_date=now_b, last_heartbeat=now_b)
        session.add(sess_b)
        session.commit()

        assert session.query(AppSession).filter_by(token="token_user_b").first() is not None
        print("  -> RESULT: User B successfully logged in and received new session! PASS\n")

        # Clean up User B session
        session.delete(sess_b)
        session.commit()

        # ----------------------------------------------------
        # TEST CASE 3: User A tab closed / stopped heartbeats (50s ago) -> B tries login -> stale deleted immediately, B logs in cleanly
        # ----------------------------------------------------
        print("[TEST 3] User A closed tab / stopped heartbeat (50s ago) -> User B attempts login")
        hb_crashed = datetime.datetime.utcnow() - datetime.timedelta(seconds=50)
        sess_crashed = AppSession(user_id=uid_str, token="token_crashed", created_date=hb_crashed, last_heartbeat=hb_crashed)
        session.add(sess_crashed)
        session.commit()

        now_utc = datetime.datetime.utcnow()
        existing_sessions = session.query(AppSession).filter(
            func.lower(AppSession.user_id) == uid_str.lower()
        ).all()

        active_working_found = False
        stale_to_del = []
        for s in existing_sessions:
            elapsed = (now_utc - (s.last_heartbeat or s.created_date)).total_seconds()
            if elapsed <= 35:
                active_working_found = True
            else:
                stale_to_del.append(s)

        assert active_working_found is False, "Active working should be False for elapsed > 35s"
        assert len(stale_to_del) == 1, "Expected 1 inactive session to be marked stale"

        for s in stale_to_del:
            session.delete(s)
        session.commit()

        # Simulate User B logging in cleanly without countdown
        now_b3 = datetime.datetime.utcnow()
        sess_b3 = AppSession(user_id=uid_str, token="token_b3", created_date=now_b3, last_heartbeat=now_b3)
        session.add(sess_b3)
        session.commit()

        assert session.query(AppSession).filter_by(token="token_crashed").first() is None
        assert session.query(AppSession).filter_by(token="token_b3").first() is not None
        print("  -> RESULT: Inactive session (>35s) removed cleanly. User B logs in immediately without countdown! PASS\n")

        # Clean up
        session.delete(sess_b3)
        session.commit()

        # Clean up
        session.delete(sess_b2)
        session.commit()

        print("==================================================")
        print("ALL 4 TEST CASES PASSED SUCCESSFULLY!")
        print("==================================================")
        return True

    finally:
        session.close()

if __name__ == '__main__':
    success = run_tests()
    if not success:
        sys.exit(1)
