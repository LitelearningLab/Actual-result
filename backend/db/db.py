# Python flask API file for edu using SQLAlchemy

from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus
import os
from dotenv import load_dotenv

_backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(_backend_dir, ".env"))

class SQLiteDB:
    def __init__(self):
        environment_flag = os.getenv('environment_flag')
        if environment_flag == 'local':
            server = 'localhost'
            database = 'actual-result-prod'
            driver = 'ODBC Driver 17 for SQL Server'

            # Windows Authentication
            db_url = f"mssql+pyodbc://@{server}/{database}?driver={driver}&trusted_connection=yes"
        else:
            server = os.getenv('SQL_SERVER', 'localhost')  # e.g., localhost\SQLEXPRESS
            database = os.getenv('SQL_DATABASE', 'actual-result-prod')
            username = os.getenv('SQL_USER', 'sa')
            password = os.getenv('SQL_PASSWORD', 'YourStrong!Passw0rd')
            req_driver = os.getenv('DRIVER', 'ODBC Driver 17 for SQL Server')
            driver = req_driver
            try:
                import pyodbc
                available = pyodbc.drivers()
                if req_driver not in available:
                    odbc_drivers = [d for d in available if d.startswith('ODBC Driver')]
                    sql_drivers = [d for d in available if 'sql server' in d.lower()]
                    candidates = odbc_drivers if odbc_drivers else sql_drivers
                    if candidates:
                        candidates.sort(reverse=True)
                        driver = candidates[0]
                        print(f"Driver '{req_driver}' not found. Auto-selected installed driver: '{driver}'")
                    else:
                        print(f"WARNING: No SQL Server driver found. Available drivers: {available}")
            except Exception as _d_err:
                pass

            # SQL Server connection string
            params = quote_plus(
                f"DRIVER={{{driver}}};"
                f"SERVER={server};"
                f"DATABASE={database};"
                f"UID={username};"
                f"PWD={password};"
                "TrustServerCertificate=yes;"
            )

            db_url = f"mssql+pyodbc:///?odbc_connect={params}"


        print(f"Connecting to SQL Server at {server}, database {database}")

        self.engine = create_engine(db_url, echo=False, future=True)
        self.Session = sessionmaker(bind=self.engine)
        self.session = None

    def connect(self):
        if self.session:
            return self.session
        try:
            self.session = self.Session()
            return self.session
        except Exception as e:
            print(f"Error connecting to the database: {e}")
            return None

    def execute_query(self, query, params=None):
        if not self.session:
            self.connect()
        if not self.session:
            print("No database session available.")
            return None
        try:
            stmt = text(query)
            if params:
                result = self.session.execute(stmt, params)
            else:
                result = self.session.execute(stmt)
            self.session.commit()
            if query.strip().lower().startswith("select"):
                return result.fetchall()
            else:
                return None
        except Exception as e:
            print(f"Error executing query: {e}")
            self.session.rollback()
            return None

    def close(self):
        if self.session:
            self.session.close()
            self.session = None
