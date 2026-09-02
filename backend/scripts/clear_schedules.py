import os
import sys

# Ensure backend dir is on path
backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from db.db import SQLiteDB
from db.models import (
    MarksHistory,
    ExamReviewCommentsHistory,
    ExamReviewComments,
    Answer,
    Exam_Attempt,
    ExamScheduleMapping,
    ExamSchedule,
)

def clear_all_scheduled_data():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        print("Failed to connect to database.")
        return False

    try:
        print("Deleting MarksHistory...")
        session.query(MarksHistory).delete(synchronize_session=False)

        print("Deleting ExamReviewCommentsHistory...")
        session.query(ExamReviewCommentsHistory).delete(synchronize_session=False)

        print("Deleting ExamReviewComments...")
        session.query(ExamReviewComments).delete(synchronize_session=False)

        print("Deleting Answers...")
        session.query(Answer).delete(synchronize_session=False)

        print("Deleting Exam_Attempts...")
        session.query(Exam_Attempt).delete(synchronize_session=False)

        print("Deleting ExamScheduleMapping...")
        session.query(ExamScheduleMapping).delete(synchronize_session=False)

        print("Deleting ExamSchedules...")
        session.query(ExamSchedule).delete(synchronize_session=False)

        session.commit()
        print("Successfully cleared all scheduled test data, mappings, attempts, and answers!")
        return True
    except Exception as e:
        session.rollback()
        print(f"Error clearing scheduled data: {e}")
        return False
    finally:
        session.close()

if __name__ == "__main__":
    clear_all_scheduled_data()
