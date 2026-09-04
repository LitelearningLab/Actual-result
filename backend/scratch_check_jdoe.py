from db.db import SQLiteDB
from db.models import User, Credential

db = SQLiteDB()
session = db.connect()
if session:
    users = session.query(User).filter(User.email.ilike('%jdoe%')).all()
    print("Found users:", len(users))
    for u in users:
        print(f"User ID: {u.user_id}, Name: {u.full_name}, Username: {u.user_name}, Email: {u.email}, Role: {u.user_role}")
        cred = session.query(Credential).filter_by(user_id=str(u.user_id)).first()
        print(f"Cred exists: {bool(cred)}, has hash: {bool(cred and cred.password_hash)}")
    session.close()
