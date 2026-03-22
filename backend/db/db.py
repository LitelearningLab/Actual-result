# Python flask API file for edu using SQLAlchemy

from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
import os
class SQLiteDB:
    def __init__(self):
        environment_flag = os.getenv('environment_flag')
        server = os.getenv('SQL_SERVER', 'localhost')  # e.g., localhost\SQLEXPRESS
        database = os.getenv('SQL_DATABASE', 'actual-result-prod')
        username = os.getenv('SQL_USER', 'sa')
        password = os.getenv('SQL_PASSWORD', 'YourStrong!Passw0rd')
        driver = 'ODBC Driver 17 for SQL Server'

        # # SQL Server connection string
        # db_url = f"mssql+pyodbc://{username}:{password}@{server}/{database}?driver=ODBC+Driver+17+for+SQL+Server"
        # Windows Authentication
        db_url = f"mssql+pyodbc://@{server}/{database}?driver={driver}&trusted_connection=yes"

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
