import os
import sys
from datetime import datetime
from sqlalchemy import text, func, or_
from dotenv import load_dotenv

load_dotenv()

from db.db import SQLiteDB
from db.models import User, Credential, UserPageAccess, AppSession

def cleanup_duplicates(dry_run=False):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("[ERROR] Failed to connect to the database.")
        return

    try:
        # Query active users
        users = session.query(User).filter(
            or_(User.is_deleted == 0, User.is_deleted == False, User.is_deleted.is_(None))
        ).order_by(User.created_date.asc(), User.user_id.asc()).all()

        email_map = {}
        for u in users:
            email_key = (u.email or "").strip().lower()
            if not email_key:
                continue
            if email_key not in email_map:
                email_map[email_key] = []
            email_map[email_key].append(u)

        duplicates_found = 0
        removed_count = 0

        print(f"Total active users scanned: {len(users)}")
        print("=" * 60)

        for email_key, user_list in email_map.items():
            if len(user_list) > 1:
                duplicates_found += (len(user_list) - 1)
                primary = user_list[0]
                duplicates = user_list[1:]

                print(f"\nFound duplicate for email '{email_key}' (Total: {len(user_list)} records):")
                print(f"  [KEEP PRIMARY] UID: {primary.user_id} | Name: {primary.full_name} | Username: {primary.user_name} | Created: {primary.created_date}")

                for dup in duplicates:
                    print(f"  [REMOVE DUP]   UID: {dup.user_id} | Name: {dup.full_name} | Username: {dup.user_name} | Created: {dup.created_date}")
                    if not dry_run:
                        dup_uid_str = str(dup.user_id)
                        
                        # 1. Clean up UserPageAccess for this duplicate user
                        session.query(UserPageAccess).filter(
                            (UserPageAccess.user_id == dup.user_id) | (UserPageAccess.user_id == dup_uid_str)
                        ).delete(synchronize_session=False)

                        # 2. Clean up Credential for this duplicate user
                        session.query(Credential).filter(
                            (Credential.user_id == dup.user_id) | (Credential.user_id == dup_uid_str)
                        ).delete(synchronize_session=False)

                        # 3. Clean up AppSession if any
                        session.query(AppSession).filter(
                            (AppSession.user_id == dup.user_id) | (AppSession.user_id == dup_uid_str)
                        ).delete(synchronize_session=False)

                        # 4. Delete the duplicate User record
                        session.delete(dup)
                        removed_count += 1

        if not dry_run:
            session.commit()
            print("\n" + "=" * 60)
            print(f"[SUCCESS] Cleaned up {removed_count} duplicate user record(s).")
        else:
            print("\n" + "=" * 60)
            print(f"[INFO] Dry run completed. Found {duplicates_found} duplicate record(s).")

    except Exception as e:
        session.rollback()
        print(f"[ERROR] Error cleaning up duplicate users: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    dry = "--dry-run" in sys.argv
    cleanup_duplicates(dry_run=dry)
