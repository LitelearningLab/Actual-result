import os
import sys
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

from db.db import SQLiteDB
from db.models import User, Institute

def check_user(target_email):
    import pyodbc
    print("=" * 60)
    print(f"Checking database for email / username: '{target_email}'")
    print(f"SQL Server: {os.getenv('SQL_SERVER')}")
    print(f"SQL Database: {os.getenv('SQL_DATABASE')}")
    print(f"Installed ODBC Drivers: {pyodbc.drivers()}")
    print("=" * 60)
    
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("❌ Failed to connect to the database.")
        return

    try:
        # Search by exact email or user_name
        users = session.query(User).filter(
            (User.email == target_email) | (User.user_name == target_email)
        ).all()

        if users:
            print(f"✅ Found {len(users)} match(es) for '{target_email}':\n")
            for u in users:
                institute_name = None
                if u.institute_id:
                    inst = session.query(Institute).filter_by(institute_id=u.institute_id).first()
                    institute_name = inst.name if inst else "Unknown"

                print(f"  - User ID (UID): {u.user_id}")
                print(f"    Full Name:     {u.full_name}")
                print(f"    User Name:     {u.user_name}")
                print(f"    Email:         {u.email}")
                print(f"    User Role:     {u.user_role}")
                print(f"    Institute ID:  {u.institute_id} ({institute_name})")
                print(f"    Active Status: {u.active_status}")
                print(f"    Is Deleted:    {u.is_deleted}")
                print("-" * 50)
        else:
            print(f"❌ User with email/username '{target_email}' NOT found in the database.\n")
            
            # Check for partial match (%praveen%)
            search_pattern = "%praveen%"
            partial_matches = session.query(User).filter(
                (User.email.ilike(search_pattern)) | (User.user_name.ilike(search_pattern)) | (User.full_name.ilike(search_pattern))
            ).all()
            
            if partial_matches:
                print(f"🔍 Found {len(partial_matches)} partial match(es) for 'praveen':")
                for u in partial_matches:
                    print(f"  - UID: {u.user_id} | Name: {u.full_name} | Username: {u.user_name} | Email: {u.email}")
            else:
                print("🔍 No partial matches found for 'praveen' either.")

    except Exception as e:
        print(f"Error querying database: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "praveen@profluentlabs.com"
    check_user(target)
