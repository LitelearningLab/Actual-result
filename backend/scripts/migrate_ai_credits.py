import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from sqlalchemy import text
from db.db import SQLiteDB

def migrate():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("Failed to connect to database")
        return

    print("Connected to database successfully. Checking columns...")

    # Institutes columns
    inst_cols = {
        "allocated_credits": "BIGINT NULL DEFAULT 0",
        "credit_alert_threshold": "INT NULL DEFAULT 10",
    }
    for col, col_type in inst_cols.items():
        exists = session.execute(
            text("SELECT COL_LENGTH('dbo.Institutes', :col)"),
            {"col": col}
        ).scalar()
        if exists is None:
            print(f"Adding column dbo.Institutes.{col}...")
            session.execute(text(f"ALTER TABLE dbo.Institutes ADD [{col}] {col_type}"))
            session.commit()
            print(f"Column dbo.Institutes.{col} added successfully.")
        else:
            print(f"Column dbo.Institutes.{col} already exists.")

    # openai_requests columns
    req_cols = {
        "feature_name": "NVARCHAR(100) NULL",
        "credits_consumed": "INT NULL DEFAULT 0",
    }
    for col, col_type in req_cols.items():
        exists = session.execute(
            text("SELECT COL_LENGTH('dbo.openai_requests', :col)"),
            {"col": col}
        ).scalar()
        if exists is None:
            print(f"Adding column dbo.openai_requests.{col}...")
            session.execute(text(f"ALTER TABLE dbo.openai_requests ADD [{col}] {col_type}"))
            session.commit()
            print(f"Column dbo.openai_requests.{col} added successfully.")
        else:
            print(f"Column dbo.openai_requests.{col} already exists.")

    session.close()
    print("Migration finished successfully!")

if __name__ == "__main__":
    migrate()
