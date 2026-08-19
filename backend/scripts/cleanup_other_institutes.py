import os
import sys
import argparse

BACKEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

def load_env_file(path: str) -> None:
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as env_file:
        for line in env_file:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))

load_env_file(os.path.join(BACKEND_DIR, ".env"))

from db.db import SQLiteDB
from db.models import (
    Institute, InstituteCampus, InstituteDepartment, InstituteTeam,
    User, Credential, AppSession, UserPageAccess,
    Exam, ExamMapping, ExamQuestionMapping, ExamsDepartments, ExamsTeams,
    ExamSchedule, ExamScheduleMapping, Exam_Attempt, Answer, MarksHistory,
    ExamReviewComments, ExamReviewCommentsHistory,
    Categories, CategoriesDepartments, CategoriesTeams, QuestionMapping, openai_requests
)

KEYWORDS = ["profulu", "profluent", "srm", "avichi"]

def main():
    parser = argparse.ArgumentParser(description="Clean up database records for all institutes except Profulu Lab, SRM, and Avichi College.")
    parser.add_argument("--commit", action="store_true", help="Execute deletion changes to DB. Default is dry-run mode.")
    args = parser.parse_args()

    db = SQLiteDB()
    session = db.connect()

    if not session:
        print("Failed to connect to the database.")
        sys.exit(1)

    try:
        # 1. Fetch all institutes and identify target ones to keep
        all_institutes = session.query(Institute).all()
        keep_institutes = []
        delete_institutes = []

        for inst in all_institutes:
            name_lower = (inst.name or "").lower()
            short_name_lower = (inst.short_name or "").lower()

            if any(kw in name_lower or kw in short_name_lower for kw in KEYWORDS):
                keep_institutes.append(inst)
            else:
                delete_institutes.append(inst)

        print("\n========================================================")
        print("                INSTITUTE CLEANUP SUMMARY               ")
        print("========================================================")
        print(f"Total Institutes Found: {len(all_institutes)}")
        print("\n--- INSTITUTES TO KEEP ---")
        for inst in keep_institutes:
            print(f"  [KEEP] ID: {inst.institute_id} | Name: {inst.name} (Short: {inst.short_name})")

        if not keep_institutes:
            print("  WARNING: No matching institutes found to keep! Aborting to prevent full DB wipe.")
            sys.exit(1)

        print("\n--- INSTITUTES TO DELETE ---")
        for inst in delete_institutes:
            print(f"  [DELETE] ID: {inst.institute_id} | Name: {inst.name}")

        keep_inst_ids = [str(inst.institute_id) for inst in keep_institutes]

        # Gather IDs of objects to keep
        keep_users = session.query(User.user_id).filter(User.institute_id.in_(keep_inst_ids)).all()
        keep_user_ids = [str(u[0]) for u in keep_users]

        keep_exams = session.query(Exam.exam_id).filter(Exam.institute_id.in_(keep_inst_ids)).all()
        keep_exam_ids = [str(e[0]) for e in keep_exams]

        keep_schedules = session.query(ExamSchedule.schedule_id).filter(
            (ExamSchedule.institute_id.in_(keep_inst_ids)) | (ExamSchedule.exam_id.in_(keep_exam_ids))
        ).all()
        keep_schedule_ids = [str(s[0]) for s in keep_schedules]

        keep_attempts = session.query(Exam_Attempt.attempt_id).filter(
            (Exam_Attempt.user_id.in_(keep_user_ids)) | (Exam_Attempt.schedule_id.in_(keep_schedule_ids))
        ).all()
        keep_attempt_ids = [str(a[0]) for a in keep_attempts]

        keep_categories = session.query(Categories.category_id).filter(Categories.institute_id.in_(keep_inst_ids)).all()
        keep_category_ids = [str(c[0]) for c in keep_categories]

        # 2. Count records to be deleted
        answers_to_delete = session.query(Answer).filter(~Answer.attempt_id.in_(keep_attempt_ids)).count() if keep_attempt_ids else session.query(Answer).count()
        attempts_to_delete = session.query(Exam_Attempt).filter(~Exam_Attempt.attempt_id.in_(keep_attempt_ids)).count() if keep_attempt_ids else session.query(Exam_Attempt).count()
        schedules_to_delete = session.query(ExamSchedule).filter(~ExamSchedule.schedule_id.in_(keep_schedule_ids)).count() if keep_schedule_ids else session.query(ExamSchedule).count()
        exams_to_delete = session.query(Exam).filter(~Exam.institute_id.in_(keep_inst_ids)).count()
        users_to_delete = session.query(User).filter(~User.institute_id.in_(keep_inst_ids)).count()
        categories_to_delete = session.query(Categories).filter(~Categories.institute_id.in_(keep_inst_ids)).count()
        campuses_to_delete = session.query(InstituteCampus).filter(~InstituteCampus.institute_id.in_(keep_inst_ids)).count()
        departments_to_delete = session.query(InstituteDepartment).filter(~InstituteDepartment.institute_id.in_(keep_inst_ids)).count()
        teams_to_delete = session.query(InstituteTeam).filter(~InstituteTeam.institute_id.in_(keep_inst_ids)).count()

        print("\n--- DELETION ESTIMATES ---")
        print(f"  Institutes to delete:      {len(delete_institutes)}")
        print(f"  Campuses to delete:        {campuses_to_delete}")
        print(f"  Departments to delete:     {departments_to_delete}")
        print(f"  Teams to delete:           {teams_to_delete}")
        print(f"  Users to delete:           {users_to_delete}")
        print(f"  Exams to delete:           {exams_to_delete}")
        print(f"  Exam Schedules to delete:  {schedules_to_delete}")
        print(f"  Exam Attempts to delete:   {attempts_to_delete}")
        print(f"  Answers to delete:         {answers_to_delete}")
        print(f"  Categories to delete:      {categories_to_delete}")

        if not args.commit:
            print("\n--------------------------------------------------------")
            print(" MODE: DRY RUN (No changes made to database).")
            print(" To execute actual deletion, run with: python backend/scripts/cleanup_other_institutes.py --commit")
            print("--------------------------------------------------------")
            return

        print("\n[EXECUTING DELETION IN TRANSACTION]")

        # Perform cascading delete bottom-up
        if keep_attempt_ids:
            # Delete MarksHistory & Comments for attempts to delete
            session.query(MarksHistory).filter(MarksHistory.answer_id.in_(
                session.query(Answer.answer_id).filter(~Answer.attempt_id.in_(keep_attempt_ids))
            )).delete(synchronize_session=False)

            session.query(ExamReviewCommentsHistory).filter(~ExamReviewCommentsHistory.attempt_id.in_(keep_attempt_ids)).delete(synchronize_session=False)
            session.query(ExamReviewComments).filter(~ExamReviewComments.attempt_id.in_(keep_attempt_ids)).delete(synchronize_session=False)
            session.query(Answer).filter(~Answer.attempt_id.in_(keep_attempt_ids)).delete(synchronize_session=False)
            session.query(Exam_Attempt).filter(~Exam_Attempt.attempt_id.in_(keep_attempt_ids)).delete(synchronize_session=False)
        else:
            session.query(MarksHistory).delete(synchronize_session=False)
            session.query(ExamReviewCommentsHistory).delete(synchronize_session=False)
            session.query(ExamReviewComments).delete(synchronize_session=False)
            session.query(Answer).delete(synchronize_session=False)
            session.query(Exam_Attempt).delete(synchronize_session=False)

        if keep_schedule_ids:
            session.query(ExamScheduleMapping).filter(~ExamScheduleMapping.schedule_id.in_(keep_schedule_ids)).delete(synchronize_session=False)
            session.query(ExamSchedule).filter(~ExamSchedule.schedule_id.in_(keep_schedule_ids)).delete(synchronize_session=False)
        else:
            session.query(ExamScheduleMapping).delete(synchronize_session=False)
            session.query(ExamSchedule).delete(synchronize_session=False)

        if keep_exam_ids:
            session.query(ExamQuestionMapping).filter(~ExamQuestionMapping.exam_id.in_(keep_exam_ids)).delete(synchronize_session=False)
            session.query(ExamMapping).filter(~ExamMapping.exam_id.in_(keep_exam_ids)).delete(synchronize_session=False)
            session.query(ExamsDepartments).filter(~ExamsDepartments.exam_id.in_(keep_exam_ids)).delete(synchronize_session=False)
            session.query(ExamsTeams).filter(~ExamsTeams.exam_id.in_(keep_exam_ids)).delete(synchronize_session=False)
            session.query(Exam).filter(~Exam.exam_id.in_(keep_exam_ids)).delete(synchronize_session=False)
        else:
            session.query(ExamQuestionMapping).delete(synchronize_session=False)
            session.query(ExamMapping).delete(synchronize_session=False)
            session.query(ExamsDepartments).delete(synchronize_session=False)
            session.query(ExamsTeams).delete(synchronize_session=False)
            session.query(Exam).delete(synchronize_session=False)

        if keep_category_ids:
            session.query(QuestionMapping).filter(~QuestionMapping.category_id.in_(keep_category_ids)).delete(synchronize_session=False)
            session.query(ExamQuestionMapping).filter(
                (ExamQuestionMapping.category_id.isnot(None)) & (~ExamQuestionMapping.category_id.in_(keep_category_ids))
            ).delete(synchronize_session=False)
            session.query(ExamMapping).filter(~ExamMapping.category_id.in_(keep_category_ids)).delete(synchronize_session=False)
            session.query(CategoriesDepartments).filter(~CategoriesDepartments.category_id.in_(keep_category_ids)).delete(synchronize_session=False)
            session.query(CategoriesTeams).filter(~CategoriesTeams.category_id.in_(keep_category_ids)).delete(synchronize_session=False)
            session.query(Categories).filter(~Categories.category_id.in_(keep_category_ids)).delete(synchronize_session=False)
        else:
            session.query(QuestionMapping).delete(synchronize_session=False)
            session.query(ExamQuestionMapping).delete(synchronize_session=False)
            session.query(ExamMapping).delete(synchronize_session=False)
            session.query(CategoriesDepartments).delete(synchronize_session=False)
            session.query(CategoriesTeams).delete(synchronize_session=False)
            session.query(Categories).delete(synchronize_session=False)

        if keep_user_ids:
            session.query(Credential).filter(~Credential.user_id.in_(keep_user_ids)).delete(synchronize_session=False)
            session.query(AppSession).filter(~AppSession.user_id.in_(keep_user_ids)).delete(synchronize_session=False)
            session.query(UserPageAccess).filter(~UserPageAccess.user_id.in_(keep_user_ids)).delete(synchronize_session=False)
            session.query(User).filter(~User.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)
        else:
            session.query(Credential).delete(synchronize_session=False)
            session.query(AppSession).delete(synchronize_session=False)
            session.query(UserPageAccess).delete(synchronize_session=False)
            session.query(User).delete(synchronize_session=False)

        session.query(InstituteTeam).filter(~InstituteTeam.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)
        session.query(InstituteDepartment).filter(~InstituteDepartment.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)
        session.query(InstituteCampus).filter(~InstituteCampus.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)
        session.query(openai_requests).filter(~openai_requests.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)

        session.query(Institute).filter(~Institute.institute_id.in_(keep_inst_ids)).delete(synchronize_session=False)

        session.commit()
        print("\nSUCCESS: All data for non-target institutes has been successfully deleted!")

    except Exception as e:
        session.rollback()
        print(f"\nERROR: An error occurred during deletion. Transaction rolled back.\nDetails: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    main()
