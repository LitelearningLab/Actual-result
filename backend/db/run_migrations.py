import os
import sys
import glob

from dotenv import load_dotenv

# Ensure backend root is on sys.path
backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

load_dotenv(os.path.join(backend_dir, ".env"))

from sqlalchemy import text
from db.db import SQLiteDB

def run_migrations():
    print("Starting database migrations check/execution...")
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("Failed to connect to database.")
        return False

    migrations_dir = os.path.join(os.path.dirname(__file__), "migrations")
    sql_files = sorted(glob.glob(os.path.join(migrations_dir, "*.sql")))

    raw_conn = db.engine.raw_connection()
    try:
        cursor = raw_conn.cursor()
        for filepath in sql_files:
            filename = os.path.basename(filepath)
            print(f"Applying migration: {filename}...")
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Split script into batches by 'GO' keyword (case-insensitive on its own line)
            batches = []
            current_batch = []
            for line in content.splitlines():
                if line.strip().upper() == "GO":
                    if current_batch:
                        batches.append("\n".join(current_batch))
                        current_batch = []
                else:
                    current_batch.append(line)
            if current_batch:
                batches.append("\n".join(current_batch))

            for i, batch in enumerate(batches):
                cleaned_batch = batch.strip()
                if not cleaned_batch:
                    continue
                try:
                    cursor.execute(cleaned_batch)
                    raw_conn.commit()
                except Exception as ex:
                    print(f"  Error in {filename} (batch {i+1}): {ex}")
                    raw_conn.rollback()

        cursor.close()
        print("All migrations completed!")
        return True
    finally:
        raw_conn.close()

if __name__ == "__main__":
    run_migrations()
