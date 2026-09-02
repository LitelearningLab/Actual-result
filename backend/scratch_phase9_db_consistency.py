from db.db import SQLiteDB
from db.models import (
    User, Institute, InstituteCampus, InstituteDepartment, InstituteTeam,
    Categories, Question, Option, QuestionMapping,
    Exam, ExamMapping, ExamQuestionMapping,
    ExamSchedule, ExamScheduleMapping, Exam_Attempt, Answer,
    MarksHistory, ExamReviewComments, AppSession
)
from sqlalchemy import func, or_
import datetime

print("="*75)
print("PHASE 9 — DATABASE CONSISTENCY & INTEGRITY AUDIT")
print("="*75)

db = SQLiteDB()
session = db.connect()

audit_results = {
    "orphans": [],
    "duplicates": [],
    "inconsistencies": [],
    "deleted_leakages": [],
    "fk_violations": []
}

# ---------------------------------------------------------
# 1. ORPHAN RECORD CHECKS
# ---------------------------------------------------------
print("\n--- 1. AUDITING ORPHAN RECORDS ---")

# Options without parent Question
orphan_opts = session.query(Option).filter(
    ~Option.question_id.in_(session.query(Question.question_id))
).all()
print(f"• Orphan Options (no parent Question): {len(orphan_opts)}")
if orphan_opts:
    audit_results["orphans"].append(f"{len(orphan_opts)} orphan option(s) found in Options table")

# QuestionMapping without parent Question or Category
orphan_qm_q = session.query(QuestionMapping).filter(
    ~QuestionMapping.question_id.in_(session.query(Question.question_id))
).all()
orphan_qm_c = session.query(QuestionMapping).filter(
    ~QuestionMapping.category_id.in_(session.query(Categories.category_id))
).all()
print(f"• QuestionMapping orphans: {len(orphan_qm_q)} missing question, {len(orphan_qm_c)} missing category")
if orphan_qm_q or orphan_qm_c:
    audit_results["orphans"].append(f"QuestionMapping orphans: {len(orphan_qm_q)} missing question, {len(orphan_qm_c)} missing category")

# ExamQuestionMapping without parent Exam or Question
orphan_eqm_e = session.query(ExamQuestionMapping).filter(
    ~ExamQuestionMapping.exam_id.in_(session.query(Exam.exam_id))
).all()
orphan_eqm_q = session.query(ExamQuestionMapping).filter(
    ~ExamQuestionMapping.question_id.in_(session.query(Question.question_id))
).all()
print(f"• ExamQuestionMapping orphans: {len(orphan_eqm_e)} missing exam, {len(orphan_eqm_q)} missing question")
if orphan_eqm_e or orphan_eqm_q:
    audit_results["orphans"].append(f"ExamQuestionMapping orphans: {len(orphan_eqm_e)} missing exam, {len(orphan_eqm_q)} missing question")

# ExamScheduleMapping without parent Schedule or User
orphan_esm_s = session.query(ExamScheduleMapping).filter(
    ~ExamScheduleMapping.schedule_id.in_(session.query(ExamSchedule.schedule_id))
).all()
orphan_esm_u = session.query(ExamScheduleMapping).filter(
    ExamScheduleMapping.user_id.isnot(None),
    ~ExamScheduleMapping.user_id.in_(session.query(User.user_id))
).all()
print(f"• ExamScheduleMapping orphans: {len(orphan_esm_s)} missing schedule, {len(orphan_esm_u)} missing user")
if orphan_esm_s or orphan_esm_u:
    audit_results["orphans"].append(f"ExamScheduleMapping orphans: {len(orphan_esm_s)} missing schedule, {len(orphan_esm_u)} missing user")

# Exam_Attempts without parent Schedule or User
orphan_att_s = session.query(Exam_Attempt).filter(
    ~Exam_Attempt.schedule_id.in_(session.query(ExamSchedule.schedule_id))
).all()
orphan_att_u = session.query(Exam_Attempt).filter(
    ~Exam_Attempt.user_id.in_(session.query(User.user_id))
).all()
print(f"• Exam_Attempt orphans: {len(orphan_att_s)} missing schedule, {len(orphan_att_u)} missing user")
if orphan_att_s or orphan_att_u:
    audit_results["orphans"].append(f"Exam_Attempt orphans: {len(orphan_att_s)} missing schedule, {len(orphan_att_u)} missing user")

# Answers without parent Attempt or Question
orphan_ans_att = session.query(Answer).filter(
    ~Answer.attempt_id.in_(session.query(Exam_Attempt.attempt_id))
).all()
orphan_ans_q = session.query(Answer).filter(
    ~Answer.question_id.in_(session.query(Question.question_id))
).all()
print(f"• Answer orphans: {len(orphan_ans_att)} missing attempt, {len(orphan_ans_q)} missing question")
if orphan_ans_att or orphan_ans_q:
    audit_results["orphans"].append(f"Answer orphans: {len(orphan_ans_att)} missing attempt, {len(orphan_ans_q)} missing question")

# AppSessions without parent User
orphan_sess = session.query(AppSession).filter(
    ~AppSession.user_id.in_(session.query(User.user_id))
).all()
print(f"• AppSession orphans: {len(orphan_sess)} missing user")
if orphan_sess:
    audit_results["orphans"].append(f"AppSession orphans: {len(orphan_sess)} missing user")


# ---------------------------------------------------------
# 2. DUPLICATE RECORD CHECKS
# ---------------------------------------------------------
print("\n--- 2. AUDITING DUPLICATE RECORDS ---")

# Duplicate active institutes by short_name
dup_inst = session.query(
    func.lower(Institute.short_name), func.count(Institute.institute_id)
).filter(
    Institute.active_status == 1
).group_by(
    func.lower(Institute.short_name)
).having(func.count(Institute.institute_id) > 1).all()
print(f"• Duplicate active Institute short names: {len(dup_inst)}")
if dup_inst:
    audit_results["duplicates"].append(f"Duplicate institute short_names: {dup_inst}")

# Duplicate Schedule User Mappings
dup_esm = session.query(
    ExamScheduleMapping.schedule_id, ExamScheduleMapping.user_id, func.count(ExamScheduleMapping.mapping_id)
).filter(
    ExamScheduleMapping.user_id.isnot(None)
).group_by(
    ExamScheduleMapping.schedule_id, ExamScheduleMapping.user_id
).having(func.count(ExamScheduleMapping.mapping_id) > 1).all()
print(f"• Duplicate (schedule_id, user_id) mappings: {len(dup_esm)}")
if dup_esm:
    audit_results["duplicates"].append(f"Duplicate ExamScheduleMapping pairs: {len(dup_esm)}")

# Duplicate Question Category Mappings
dup_qm = session.query(
    QuestionMapping.category_id, QuestionMapping.question_id, func.count(QuestionMapping.map_id)
).group_by(
    QuestionMapping.category_id, QuestionMapping.question_id
).having(func.count(QuestionMapping.map_id) > 1).all()
print(f"• Duplicate (category_id, question_id) mappings: {len(dup_qm)}")
if dup_qm:
    audit_results["duplicates"].append(f"Duplicate QuestionMapping pairs: {len(dup_qm)}")


# ---------------------------------------------------------
# 3. SCORE & AGGREGATION CONSISTENCY CHECKS
# ---------------------------------------------------------
print("\n--- 3. AUDITING SCORE & CALCULATION CONSISTENCY ---")

final_attempts = session.query(Exam_Attempt).filter(
    Exam_Attempt.status.in_(('submitted', 'evaluated')),
    Exam_Attempt.score.isnot(None)
).all()

score_mismatches = 0
for att in final_attempts:
    ans_sum = session.query(func.sum(Answer.marks_awarded)).filter(
        Answer.attempt_id == att.attempt_id
    ).scalar() or 0.0
    
    if abs(float(att.score or 0) - float(ans_sum)) > 0.01:
        score_mismatches += 1
        audit_results["inconsistencies"].append(
            f"Attempt {att.attempt_id}: Recorded score ({att.score}) != Answer sum ({ans_sum})"
        )

print(f"• Total Evaluated Attempts Checked: {len(final_attempts)}")
print(f"• Score Mismatches (Attempt.score vs sum of Answer marks): {score_mismatches}")


# ---------------------------------------------------------
# 4. SOFT-DELETED LEAKAGE AUDIT
# ---------------------------------------------------------
print("\n--- 4. AUDITING SOFT-DELETED RECORD LEAKAGE ---")

del_scheds = session.query(ExamSchedule).filter(ExamSchedule.is_deleted == 1).all()
print(f"• Total Soft-Deleted Schedules: {len(del_scheds)}")
del_sched_ids = [s.schedule_id for s in del_scheds]

if del_sched_ids:
    inprog_on_deleted = session.query(Exam_Attempt).filter(
        Exam_Attempt.schedule_id.in_(del_sched_ids),
        Exam_Attempt.status == 'in_progress'
    ).count()
    print(f"• In-Progress Attempts on Deleted Schedules: {inprog_on_deleted}")
    if inprog_on_deleted > 0:
        audit_results["deleted_leakages"].append(f"{inprog_on_deleted} in-progress attempts on deleted schedules")

session.close()

print("\n" + "="*75)
print("DATABASE AUDIT SUMMARY & DEFECT REPORT")
print("="*75)
print(f"• Total Orphan Issues: {len(audit_results['orphans'])}")
print(f"• Total Duplicate Issues: {len(audit_results['duplicates'])}")
print(f"• Total Score Inconsistencies: {len(audit_results['inconsistencies'])}")
print(f"• Total Deleted Leakages: {len(audit_results['deleted_leakages'])}")

if not any(audit_results.values()):
    print("\nDATABASE INTEGRITY STATUS: 100% HEALTHY — ZERO INTEGRITY VIOLATIONS FOUND")
else:
    print("\nDATABASE INTEGRITY ISSUES DETECTED:")
    for k, v in audit_results.items():
        if v:
            print(f"  [{k.upper()}]: {v}")
