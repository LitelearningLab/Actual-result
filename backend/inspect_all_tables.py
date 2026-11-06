import sys
from sqlalchemy import text

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

tables = session.execute(text("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' ORDER BY TABLE_NAME")).fetchall()
print("All tables:")
for t in tables:
    print(t[0])

db.close()

