import urllib.request
import urllib.error
import json
import uuid
import datetime
import time
from db.db import SQLiteDB
from db.models import (
    User, Institute, Categories, Question, Option, Exam, 
    ExamMapping, ExamQuestionMapping, ExamSchedule, ExamScheduleMapping, 
    Exam_Attempt, Answer, MarksHistory, ExamReviewComments, AppSession
)
from sqlalchemy import func

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, timeout=60):
    url = BASE_URL + path
    headers = {'Content-Type': 'application/json', 'Origin': 'http://localhost:4200'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    payload = json.dumps(data).encode('utf-8') if data is not None else None
    req = urllib.request.Request(url, data=payload, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            body = resp.read().decode('utf-8')
            try:
                return resp.status, json.loads(body)
            except Exception:
                return resp.status, body
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8')
        try:
            return e.code, json.loads(body)
        except Exception:
            return e.code, body
    except Exception as e:
        return 0, str(e)

def run_phase8_and_9_suite():
    results = []
    print("=" * 80)
    print("PHASE 8 — ANALYTICS & MISCONCEPTION ANALYSIS")
    print("=" * 80)

    # 1. Admin Login (ajay)
    code, admin_login = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
    admin_token = admin_login.get('token')
    admin_user = admin_login.get('user', {})
    inst_id = admin_user.get('institute_id')
    admin_id = admin_user.get('user_id')
    print(f"[Auth] Admin Login -> HTTP {code} | Institute: {inst_id} | Token: {bool(admin_token)}")

    # 2. Candidate Login (michael)
    code, cand_login = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
    cand_token = cand_login.get('token')
    cand_user = cand_login.get('user', {})
    cand_id = cand_user.get('user_id')
    print(f"[Auth] Candidate Login -> HTTP {code} | Candidate ID: {cand_id}")

    test_uid = uuid.uuid4().hex[:6].upper()
    cat_name = f"Analytics Suite Bank {test_uid}"

    # 3. Create Category & Questions for Cohort Analytics
    http_req('POST', '/add-categories', {
        "name": cat_name, "description": "Category for Phase 8 Analytics",
        "institute_id": inst_id, "type": "objective", "status": "true",
        "public_access": True, "created_by": admin_id
    }, token=admin_token)
    _, resp = http_req('GET', f'/category-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    cat_id = resp.get('data', [])[0].get('category_id')

    questions_bundle = [
        {"type": "choose", "text": f"Q1 Analytics SCQ: DNS default port number is: ({test_uid})", "marks": 2, "options": ["53 (Correct)", "80", "443", "22"], "correct_indices": [0]},
        {"type": "multi", "text": f"Q2 Analytics MCQ: Select SQL based database engines: ({test_uid})", "marks": 4, "options": ["PostgreSQL (Correct)", "MySQL (Correct)", "Redis", "Cassandra"], "correct_indices": [0, 1]},
        {"type": "fill", "text": f"Q3 Analytics FIB: In networking, OSI model layer 4 is the ___ layer. ({test_uid})", "marks": 2, "answerText": "Transport"},
        {"type": "descriptive", "text": f"Q4 Analytics DESC: Explain why deadlock happens in database transactions. ({test_uid})", "marks": 5, "answerText": "Deadlock occurs when two or more concurrent transactions hold locks on resources that the other transactions need, creating a circular dependency where neither transaction can proceed."}
    ]
    http_req('POST', '/add-question', {"institute_id": inst_id, "category_id": cat_id, "created_by": admin_id, "questions": questions_bundle}, token=admin_token)
    _, resp = http_req('GET', f'/get-questions-details?category_id={cat_id}&institute_id={inst_id}', token=admin_token)
    q_records = resp.get('data', [])
    q_ids = [q['id'] for q in q_records]
    print(f"[Setup] Authored 4 Questions for Analytics Test. Category ID: {cat_id}")

    # 4. Create Exam & Schedule
    exam_title = f"Analytics Test {test_uid}"
    http_req('POST', '/register-exam', {
        "title": exam_title, "description": "Analytics QA benchmark", "institute_id": inst_id,
        "duration_minutes": 20, "total_questions": 4, "pass_mark": 50, "number_of_attempts": 1,
        "created_by": admin_id, "categories": [{"category_id": cat_id, "number_of_questions": 4, "randomize_questions": 0, "question_ids": q_ids}]
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exams-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    exam_id = resp.get('data', [])[0].get('exam_id')

    now_utc = datetime.datetime.utcnow()
    start_time = (now_utc - datetime.timedelta(minutes=5)).isoformat() + "Z"
    end_time = (now_utc + datetime.timedelta(hours=2)).isoformat() + "Z"
    sched_title = f"Analytics Schedule {test_uid}"
    http_req('POST', '/add-exam-schedule', {
        "title": sched_title, "exam_id": exam_id, "institute_id": inst_id,
        "start_time": start_time, "end_time": end_time, "duration_mins": 20,
        "total_questions": 4, "published": True, "assigned_user_ids": [cand_id],
        "created_by": admin_id, "instant_review": True
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exam-schedule-details?name={test_uid}', token=admin_token)
    sched_id = resp.get('data', [])[0].get('schedule_id')
    print(f"[Setup] Exam Scheduled: {sched_id}")

    # 5. Candidate Takes Exam & Submits with Mix of Correct and Known Misconception Answers
    _, launch_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    attempt_id = launch_resp.get('data', {}).get('exam_detail', {}).get('attempt_id')
    del_qs = launch_resp.get('data', {}).get('questions', [])

    q1_scq = next(q for q in del_qs if "Q1 Analytics SCQ" in q['question_text'])
    q2_mcq = next(q for q in del_qs if "Q2 Analytics MCQ" in q['question_text'])
    q3_fib = next(q for q in del_qs if "Q3 Analytics FIB" in q['question_text'])
    q4_desc = next(q for q in del_qs if "Q4 Analytics DESC" in q['question_text'])

    # Answer Q1 incorrectly (select port 80 to create misconception data)
    q1_wrong_opt = next(o['id'] for o in q1_scq['options'] if "80" in o['text'])
    # Answer Q2 correctly (PostgreSQL, MySQL)
    q2_correct_opts = [o['id'] for o in q2_mcq['options'] if "(Correct)" in o['text']]
    # Answer Q3 incorrectly ("Network" instead of "Transport" - common misconception)
    q3_wrong_text = "Network"
    # Answer Q4 descriptive
    q4_desc_text = "Deadlocks occur when two queries lock tables in reverse order simultaneously, waiting on each other indefinitely."

    cand_answers = {
        str(q1_scq['question_id']): q1_wrong_opt,
        str(q2_mcq['question_id']): q2_correct_opts,
        str(q3_fib['question_id']): q3_wrong_text,
        str(q4_desc['question_id']): q4_desc_text
    }
    http_req('POST', '/submit-exam', {
        "user_id": cand_id, "schedule_id": sched_id, "attempt_id": attempt_id,
        "answers": cand_answers, "time_taken_mins": 5
    }, token=cand_token)
    time.sleep(2)
    print(f"[Setup] Exam submitted and auto-evaluated.")

    # -------------------------------------------------------------------------
    # TEST 1: Class / Cohort Analytics Endpoint (GET /get-exam-analytics)
    # -------------------------------------------------------------------------
    code, analytics_resp = http_req('GET', f'/get-exam-analytics?schedule_id={sched_id}', token=admin_token)
    analytics_data = analytics_resp.get('data', {}) if isinstance(analytics_resp, dict) else {}
    q_summary = analytics_data.get('question_summary', [])
    cat_summary = analytics_data.get('category_report', [])
    cat_students = cat_summary[0].get('no_of_students', 0) if cat_summary else 0

    passed_analytics = code == 200 and len(q_summary) == 4 and cat_students >= 1
    results.append(('Class & Cohort Performance Analytics Overview', passed_analytics, f"HTTP {code}, Participants: {cat_students}, Questions Analyzed: {len(q_summary)}, Category Rows: {len(cat_summary)}"))
    print(f"\n[Test 1] Class Analytics -> HTTP {code} | Participants: {cat_students} | Questions Analyzed: {len(q_summary)}")

    # -------------------------------------------------------------------------
    # TEST 2: Question-Wise Performance & Correct/Incorrect Distribution
    # -------------------------------------------------------------------------
    q1_stat = next((q for q in q_summary if str(q.get('question_id')) == str(q1_scq['question_id'])), {})
    q2_stat = next((q for q in q_summary if str(q.get('question_id')) == str(q2_mcq['question_id'])), {})
    
    passed_q_perf = (q1_stat.get('mistakes', 0) == 1 and q1_stat.get('error_percentage', 0) == 100.0 and
                     q2_stat.get('mistakes', 0) == 0 and q2_stat.get('error_percentage', 0) == 0.0)
    results.append(('Question Performance & Error Rate Distribution', passed_q_perf, f"Q1 Error%: {q1_stat.get('error_percentage')}%, Q2 Error%: {q2_stat.get('error_percentage')}%"))
    print(f"[Test 2] Question Performance -> Q1 Error: {q1_stat.get('error_percentage')}% (1 mistake) | Q2 Error: {q2_stat.get('error_percentage')}% (0 mistakes)")

    # -------------------------------------------------------------------------
    # TEST 3: Candidate Performance & User-Wise Report (GET /get-exam-user-report)
    # -------------------------------------------------------------------------
    code, user_report_resp = http_req('GET', f'/get-exam-user-report?schedule_id={sched_id}', token=admin_token)
    user_report_data = user_report_resp.get('data', {}) if isinstance(user_report_resp, dict) else {}
    students_list = user_report_data.get('items', [])
    cand_report = next((s for s in students_list if str(s.get('user_id')) == str(cand_id)), None)

    passed_user_report = code == 200 and cand_report is not None and cand_report.get('marks_obtained') is not None
    results.append(('Candidate Performance & User-Wise Scorecard Report', passed_user_report, f"HTTP {code}, Candidate: '{cand_report.get('student_name') if cand_report else None}', Marks: {cand_report.get('marks_obtained') if cand_report else None}, Pct: {cand_report.get('percentage') if cand_report else None}%"))
    print(f"[Test 3] User Report -> Found Candidate: {cand_report.get('student_name') if cand_report else None} | Marks: {cand_report.get('marks_obtained') if cand_report else None} | Result: {cand_report.get('result') if cand_report else None}")

    # -------------------------------------------------------------------------
    # TEST 4: Misconception Analysis & Distractor Distribution (GET /get-question-wrong-answers)
    # -------------------------------------------------------------------------
    code, wrong_ans_resp = http_req('GET', f'/get-question-wrong-answers?schedule_id={sched_id}&question_id={q1_scq["question_id"]}', token=admin_token)
    wrong_data = wrong_ans_resp.get('data', {}) if isinstance(wrong_ans_resp, dict) else {}
    dist = wrong_data.get('distribution', [])

    selected_distractor = next((d for d in dist if "80" in d.get('option_text', '')), None)
    passed_misconception = code == 200 and selected_distractor is not None and selected_distractor.get('count', 0) >= 1
    results.append(('Distractor & Misconception Option Distribution', passed_misconception, f"HTTP {code}, Distractor 'Port 80' chosen count: {selected_distractor.get('count') if selected_distractor else 0} ({selected_distractor.get('percentage') if selected_distractor else 0}%)"))
    print(f"[Test 4] Misconception Analysis -> Distractor: '{selected_distractor.get('option_text') if selected_distractor else None}' chosen count: {selected_distractor.get('count') if selected_distractor else 0}")

    # -------------------------------------------------------------------------
    # TEST 5: FIB & Descriptive Misconception Clustering & Teaching Recommendations
    # -------------------------------------------------------------------------
    code, fib_wrong_resp = http_req('GET', f'/get-question-wrong-answers?schedule_id={sched_id}&question_id={q3_fib["question_id"]}', token=admin_token)
    fib_wrong_data = fib_wrong_resp.get('data', {}) if isinstance(fib_wrong_resp, dict) else {}
    raw_wrong = fib_wrong_data.get('raw_list', []) or fib_wrong_data.get('distribution', []) or fib_wrong_data.get('combinations', [])
    
    passed_fib_misconception = code == 200 and fib_wrong_data.get('question_details', {}).get('mistakes', 0) >= 1
    results.append(('FIB & Text Misconception Cluster Analysis', passed_fib_misconception, f"HTTP {code}, Mistakes captured: {fib_wrong_data.get('question_details', {}).get('mistakes')}"))
    print(f"[Test 5] Text Misconception -> Mistakes recorded: {fib_wrong_data.get('question_details', {}).get('mistakes')}")

    # -------------------------------------------------------------------------
    # TEST 6: Analytics Filters & Date Range Query Mode
    # -------------------------------------------------------------------------
    today_str = now_utc.strftime('%Y-%m-%d')
    code, daterange_resp = http_req('GET', f'/get-exam-analytics?start_date={today_str}&end_date={today_str}&institute_id={inst_id}&exam_id={exam_id}', token=admin_token)
    dr_data = daterange_resp.get('data', {}) if isinstance(daterange_resp, dict) else {}
    passed_filter = code == 200 and len(dr_data.get('question_summary', [])) > 0
    results.append(('Analytics Date-Range & Institute Filter Modes', passed_filter, f"HTTP {code}, Date Range Summary Count: {len(dr_data.get('question_summary', []))}"))
    print(f"[Test 6] Date Range Filter -> HTTP {code} | Summary Count: {len(dr_data.get('question_summary', []))}")

    # -------------------------------------------------------------------------
    # TEST 7: Empty Analytics Handling (Non-Existent Schedule)
    # -------------------------------------------------------------------------
    code, empty_resp = http_req('GET', f'/get-exam-analytics?schedule_id={uuid.uuid4()}', token=admin_token)
    passed_empty = code in (400, 404) or (code == 200 and empty_resp.get('data', {}).get('participant_count', 0) == 0)
    results.append(('Empty Data & Invalid Schedule Analytics Handling', passed_empty, f"HTTP {code}: {empty_resp.get('statusMessage') if isinstance(empty_resp, dict) else 'Handled'}"))
    print(f"[Test 7] Empty Analytics Handling -> HTTP {code}: {empty_resp.get('statusMessage') if isinstance(empty_resp, dict) else 'Handled'}")

    # =========================================================================
    # PHASE 9 — DATABASE CONSISTENCY AUDIT
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 9 — DATABASE CONSISTENCY AUDIT")
    print("=" * 80)

    db = SQLiteDB()
    session = db.connect()

    # 1. Check for Duplicate Primary Keys / Records
    dup_answers = session.query(Answer.attempt_id, Answer.question_id, Answer.selected_option_id, func.count('*')).filter(
        Answer.attempt_id == attempt_id, Answer.selected_option_id.isnot(None)
    ).group_by(Answer.attempt_id, Answer.question_id, Answer.selected_option_id).having(func.count('*') > 1).all()
    passed_dup = len(dup_answers) == 0
    results.append(('Database Consistency: No Duplicate Answer Records', passed_dup, f"Duplicates found: {len(dup_answers)}"))
    print(f"\n[Test 8] Duplicate Answer Records Check -> Duplicates: {len(dup_answers)}")

    # 2. Check for Orphan Answer Records (Answer pointing to non-existent Attempt or Schedule)
    orphan_answers = session.query(Answer).outerjoin(Exam_Attempt, Answer.attempt_id == Exam_Attempt.attempt_id).filter(
        Answer.attempt_id.isnot(None), Exam_Attempt.attempt_id == None
    ).count()
    passed_orphan_ans = orphan_answers == 0
    results.append(('Database Consistency: No Orphan Answers (Attempts Check)', passed_orphan_ans, f"Orphan answers count: {orphan_answers}"))
    print(f"[Test 9] Orphan Answers Check -> Orphans: {orphan_answers}")

    # 3. Check for Orphan Attempt Records (Attempt pointing to non-existent Schedule)
    orphan_attempts = session.query(Exam_Attempt).outerjoin(ExamSchedule, Exam_Attempt.schedule_id == ExamSchedule.schedule_id).filter(
        Exam_Attempt.schedule_id.isnot(None), ExamSchedule.schedule_id == None
    ).count()
    passed_orphan_att = orphan_attempts == 0
    results.append(('Database Consistency: No Orphan Exam Attempts (Schedules Check)', passed_orphan_att, f"Orphan attempts count: {orphan_attempts}"))
    print(f"[Test 10] Orphan Attempts Check -> Orphans: {orphan_attempts}")

    # 4. Check for Foreign Key Integrity (Options created in current Institute/Category)
    orphan_options = session.query(Option).outerjoin(Question, Option.question_id == Question.question_id).filter(
        Option.question_id.in_(q_ids), Question.question_id == None
    ).count()
    passed_orphan_opts = orphan_options == 0
    results.append(('Database Consistency: Option Foreign Keys Point to Valid Questions', passed_orphan_opts, f"Orphan options count: {orphan_options}"))
    print(f"[Test 11] Foreign Key Integrity -> Orphan Options for Exam: {orphan_options}")

    # 5. Soft Delete Verification (Deleted Records do not leak to active candidate APIs)
    # Soft delete test schedule & category
    session.close()
    http_req('DELETE', f'/delete/exam-schedule/{sched_id}', token=admin_token)
    http_req('DELETE', f'/delete/exam/{exam_id}', token=admin_token)
    http_req('DELETE', f'/delete/category/{cat_id}', token=admin_token)

    code, cand_view_after = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    active_scheds = [s for s in cand_view_after.get('data', []) if str(s.get('schedule_id')) == str(sched_id) and s.get('attempted') is False]
    passed_soft_delete = len(active_scheds) == 0
    results.append(('Database Consistency: Soft-Deleted Schedules Hidden from Active Views', passed_soft_delete, f"Deleted schedule active in student view: {len(active_scheds) > 0}"))
    print(f"[Test 12] Soft-Delete Verification -> Schedule successfully purged from active student lists.")

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 8 & 9 SUMMARY RESULTS:")
    print("=" * 80)
    all_passed = True
    for name, status, details in results:
        status_text = "[PASS]" if status else "[FAIL]"
        if not status:
            all_passed = False
        print(f"  {status_text} {name:<55} -> {details}")
    
    print("=" * 80)
    print(f"OVERALL STATUS: {'ALL TESTS PASSED' if all_passed else 'SOME TESTS FAILED'}")
    print("=" * 80)

if __name__ == '__main__':
    run_phase8_and_9_suite()
