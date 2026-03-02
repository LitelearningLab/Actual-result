import sqlite3
import pyodbc

# ==============================
# CONFIGURATION
# ==============================

SQLITE_DB_PATH = r"C:\Users\admin\Documents\projects\angular\Actual-result\backend\db\edu_local.db"
SQL_SERVER = "localhost"
TARGET_DATABASE = "actual-result"
ODBC_DRIVER = "ODBC Driver 17 for SQL Server"
BATCH_SIZE = 500  # smaller batches to avoid driver truncation
TABLE_NAME = "openai_requests"

# ==========================
# CONNECT TO SQL SERVER
# ==========================
sql_conn = pyodbc.connect(
    f"DRIVER={{{ODBC_DRIVER}}};SERVER={SQL_SERVER};DATABASE={TARGET_DATABASE};Trusted_Connection=yes;"
)
sql_cursor = sql_conn.cursor()

# ==========================
# CONNECT TO SQLITE
# ==========================
sqlite_conn = sqlite3.connect(SQLITE_DB_PATH)
sqlite_cursor = sqlite_conn.cursor()

# ==========================
# CREATE TABLE IF NOT EXISTS (DROP + CREATE)
# ==========================
sql_cursor.execute(f"""
IF OBJECT_ID('{TABLE_NAME}', 'U') IS NOT NULL
    DROP TABLE [{TABLE_NAME}]
""")
sql_conn.commit()

create_table_sql = f"""
CREATE TABLE [{TABLE_NAME}](
    [request_id] NVARCHAR(MAX) NULL,
    [id] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    [endpoint] NVARCHAR(MAX) NULL,
    [session_id] NVARCHAR(MAX) NULL,
    [model] NVARCHAR(MAX) NULL,
    [prompt] NVARCHAR(MAX) NULL,
    [response] NVARCHAR(MAX) NULL,
    [request_payload] NVARCHAR(MAX) NULL,
    [response_payload] NVARCHAR(MAX) NULL,
    [service_tier] NVARCHAR(MAX) NULL,
    [system_fingerprint] NVARCHAR(MAX) NULL,
    [role] NVARCHAR(MAX) NULL,
    [content] NVARCHAR(MAX) NULL,
    [finish_reason] NVARCHAR(MAX) NULL,
    [status_code] INT NULL,
    [error_message] NVARCHAR(MAX) NULL,
    [prompt_tokens] INT NULL,
    [completion_tokens] INT NULL,
    [total_tokens] INT NULL,
    [latency_ms] INT NULL,
    [estimated_cost] FLOAT NULL,
    [institute_id] NVARCHAR(MAX) NULL,
    [created_by] NVARCHAR(MAX) NULL,
    [created_date] DATETIME2(7) NULL,
    CONSTRAINT PK_{TABLE_NAME} PRIMARY KEY ([id])
)
"""
sql_cursor.execute(create_table_sql)
sql_conn.commit()

# ==========================
# COPY DATA FROM SQLITE
# ==========================
sqlite_cursor.execute(f"SELECT * FROM {TABLE_NAME}")
rows = sqlite_cursor.fetchall()
columns = [desc[0] for desc in sqlite_cursor.description]

insert_columns = ", ".join(f"[{c}]" for c in columns if c != "id")
placeholders = ", ".join("?" for c in columns if c != "id")
insert_sql = f"INSERT INTO [{TABLE_NAME}] ({insert_columns}) VALUES ({placeholders})"

for row in rows:
    safe_row = []
    for v, c in zip(row, columns):
        if c == "id":
            continue  # skip id, SQL Server will use DEFAULT NEWID()
        elif c in ["content", "request_payload", "response_payload"] and v is None:
            safe_row.append("")
        else:
            safe_row.append(v)
    sql_cursor.execute(insert_sql, safe_row)
sql_conn.commit()
print("✅ openai_requests migration completed successfully!")

# ==========================
# CLOSE CONNECTIONS
# ==========================
sqlite_conn.close()
sql_conn.close()

# # ==============================
# # CREATE DATABASE IF NOT EXISTS
# # ==============================

# master_conn = pyodbc.connect(
#     f"DRIVER={{{ODBC_DRIVER}}};"
#     f"SERVER={SQL_SERVER};"
#     f"DATABASE=master;"
#     f"Trusted_Connection=yes;"
# )
# master_cursor = master_conn.cursor()

# master_cursor.execute(f"""
# IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = '{TARGET_DATABASE}')
# BEGIN
#     CREATE DATABASE [{TARGET_DATABASE}]
# END
# """)
# master_conn.commit()
# master_conn.close()

# # ==============================
# # CONNECT TO TARGET DATABASE
# # ==============================

# sql_conn = pyodbc.connect(
#     f"DRIVER={{{ODBC_DRIVER}}};"
#     f"SERVER={SQL_SERVER};"
#     f"DATABASE={TARGET_DATABASE};"
#     f"Trusted_Connection=yes;"
# )
# sql_cursor = sql_conn.cursor()

# # ==============================
# # CONNECT TO SQLITE
# # ==============================

# sqlite_conn = sqlite3.connect(SQLITE_DB_PATH)
# sqlite_cursor = sqlite_conn.cursor()

# # ==============================
# # SAFE TYPE MAPPING
# # ==============================

# def map_sqlite_type(sqlite_type):
#     sqlite_type = sqlite_type.upper()

#     # ALL TEXT TYPES → NVARCHAR(MAX)
#     if "CHAR" in sqlite_type or "TEXT" in sqlite_type or "CLOB" in sqlite_type:
#         return "NVARCHAR(MAX)"

#     if "INT" in sqlite_type:
#         return "INT"

#     if "BLOB" in sqlite_type:
#         return "VARBINARY(MAX)"

#     if "REAL" in sqlite_type or "FLOA" in sqlite_type or "DOUB" in sqlite_type:
#         return "FLOAT"

#     if "DATE" in sqlite_type or "TIME" in sqlite_type:
#         return "DATETIME2"

#     return "NVARCHAR(MAX)"


# # ==============================
# # GET TABLES
# # ==============================

# sqlite_cursor.execute("""
# SELECT name FROM sqlite_master
# WHERE type='table'
# AND name NOT LIKE 'sqlite_%';
# """)

# tables = sqlite_cursor.fetchall()
# print("Tables found:", [t[0] for t in tables])

# # ==============================
# # MIGRATE
# # ==============================

# for (table_name,) in tables:
#     if not 'openai_requests' in table_name:
#         continue

#     print(f"\nProcessing table: {table_name}")

#     sqlite_cursor.execute(f"PRAGMA table_info({table_name});")
#     columns = sqlite_cursor.fetchall()

#     column_defs = []
#     column_names = []
#     has_id = False

#     for col in columns:
#         col_name = col[1]
#         col_type = col[2]
#         notnull = col[3]

#         column_names.append(col_name)

#         if col_name.lower() == "id":
#             has_id = True
#             column_defs.append("[id] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID()")
#             continue

#         sql_type = map_sqlite_type(col_type)

#         col_def = f"[{col_name}] {sql_type}"
#         if notnull:
#             col_def += " NOT NULL"

#         column_defs.append(col_def)

#     if not has_id:
#         column_defs.insert(0, "[id] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID()")

#     column_defs.append(f"CONSTRAINT PK_{table_name} PRIMARY KEY ([id])")

#     create_sql = f"""
#     IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = '{table_name}')
#     BEGIN
#         CREATE TABLE [{table_name}] (
#             {', '.join(column_defs)}
#         )
#     END
#     """

#     sql_cursor.execute(create_sql)
#     sql_conn.commit()

#     # ==============================
#     # INSERT DATA
#     # ==============================

#     sqlite_cursor.execute(f"SELECT * FROM {table_name}")
#     rows = sqlite_cursor.fetchall()

#     if not rows:
#         print("No data.")
#         continue

#     insert_columns = column_names
#     placeholders = ", ".join(["?"] * len(insert_columns))
#     column_list = ", ".join([f"[{c}]" for c in insert_columns])

#     insert_sql = f"""
#         INSERT INTO [{table_name}] ({column_list})
#         VALUES ({placeholders})
#     """

#     print(f"Inserting {len(rows)} rows...")
#     sql_cursor.fast_executemany = True
#     sql_cursor.executemany(insert_sql, rows)
#     sql_conn.commit()

# print("\n✅ Migration Completed Successfully!")

# sqlite_conn.close()
# sql_conn.close()

# # ==============================
# # CREATE DATABASE IF NOT EXISTS
# # ==============================

# master_conn = pyodbc.connect(
#     f"DRIVER={{{ODBC_DRIVER}}};"
#     f"SERVER={SQL_SERVER};"
#     f"DATABASE=master;"
#     f"Trusted_Connection=yes;"
# )
# master_cursor = master_conn.cursor()

# master_cursor.execute(f"""
# IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = '{TARGET_DATABASE}')
# BEGIN
#     CREATE DATABASE [{TARGET_DATABASE}]
# END
# """)
# master_conn.commit()
# master_conn.close()

# # ==============================
# # CONNECT TO TARGET DATABASE
# # ==============================

# sql_conn = pyodbc.connect(
#     f"DRIVER={{{ODBC_DRIVER}}};"
#     f"SERVER={SQL_SERVER};"
#     f"DATABASE={TARGET_DATABASE};"
#     f"Trusted_Connection=yes;"
# )
# sql_cursor = sql_conn.cursor()

# # ==============================
# # CONNECT TO SQLITE
# # ==============================

# sqlite_conn = sqlite3.connect(SQLITE_DB_PATH)
# sqlite_cursor = sqlite_conn.cursor()

# # ==============================
# # TYPE MAPPING
# # ==============================

# def map_sqlite_type(sqlite_type):
#     sqlite_type = sqlite_type.upper()

#     if "INT" in sqlite_type:
#         return "INT"
#     elif "CHAR" in sqlite_type or "TEXT" in sqlite_type:
#         return "NVARCHAR(MAX)"
#     elif "BLOB" in sqlite_type:
#         return "VARBINARY(MAX)"
#     elif "REAL" in sqlite_type or "FLOA" in sqlite_type or "DOUB" in sqlite_type:
#         return "FLOAT"
#     elif "DATE" in sqlite_type or "TIME" in sqlite_type:
#         return "DATETIME2"
#     else:
#         return "NVARCHAR(MAX)"

# # ==============================
# # GET USER TABLES
# # ==============================

# sqlite_cursor.execute("""
# SELECT name FROM sqlite_master
# WHERE type='table'
# AND name NOT LIKE 'sqlite_%';
# """)

# tables = sqlite_cursor.fetchall()
# print("Tables found:", [t[0] for t in tables])

# # ==============================
# # MIGRATION
# # ==============================

# for (table_name,) in tables:

#     print(f"\nProcessing table: {table_name}")

#     sqlite_cursor.execute(f"PRAGMA table_info({table_name});")
#     columns = sqlite_cursor.fetchall()

#     column_defs = []
#     column_names = []
#     has_id = False

#     for col in columns:
#         col_name = col[1]
#         col_type = col[2]
#         notnull = col[3]

#         column_names.append(col_name)

#         # If column is named "id"
#         if col_name.lower() == "id":
#             has_id = True
#             col_def = "[id] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID()"
#             column_defs.append(col_def)
#             continue

#         sql_type = map_sqlite_type(col_type)

#         col_def = f"[{col_name}] {sql_type}"
#         if notnull:
#             col_def += " NOT NULL"

#         column_defs.append(col_def)

#     # If no id column exists, create one
#     if not has_id:
#         column_defs.insert(0, "[id] UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID()")

#     # Add primary key constraint
#     column_defs.append(f"CONSTRAINT PK_{table_name} PRIMARY KEY ([id])")

#     create_sql = f"""
#     IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = '{table_name}')
#     BEGIN
#         CREATE TABLE [{table_name}] (
#             {', '.join(column_defs)}
#         )
#     END
#     """

#     sql_cursor.execute(create_sql)
#     sql_conn.commit()

#     # ==============================
#     # COPY DATA
#     # ==============================

#     sqlite_cursor.execute(f"SELECT * FROM {table_name}")
#     rows = sqlite_cursor.fetchall()

#     if not rows:
#         print("No data found.")
#         continue

#     # If table already had id column, insert it
#     if has_id:
#         insert_columns = column_names
#     else:
#         insert_columns = column_names  # UUID auto-generated

#     placeholders = ", ".join(["?"] * len(insert_columns))
#     column_list = ", ".join([f"[{c}]" for c in insert_columns])

#     insert_sql = f"""
#         INSERT INTO [{table_name}] ({column_list})
#         VALUES ({placeholders})
#     """

#     print(f"Inserting {len(rows)} rows...")
#     sql_cursor.fast_executemany = True
#     sql_cursor.executemany(insert_sql, rows)
#     sql_conn.commit()

# print("\n✅ Migration Completed Successfully!")

# sqlite_conn.close()
# sql_conn.close()