import urllib.request
import urllib.error
import json
import uuid
import datetime
import time

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

def run_phase7_evaluation_suite():
    results = []
    print("=" * 80)
    print("PHASE 7 — EVALUATION & RESULTS QA TEST SUITE")
    print("=" * 80)

    # 1. Admin Login (ajay)
    code, admin_login = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
    admin_token = admin_login.get('token')
    admin_user = admin_login.get('user', {})
    inst_id = admin_user.get('institute_id')
    admin_id = admin_user.get('user_id')
    print(f"\n[Auth] Admin Login -> HTTP {code} | Institute: {inst_id} | Token: {bool(admin_token)}")

    # 2. Candidate Login (michael)
    code, cand_login = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
    cand_token = cand_login.get('token')
    cand_user = cand_login.get('user', {})
    cand_id = cand_user.get('user_id')
    print(f"[Auth] Candidate Login -> HTTP {code} | Candidate ID: {cand_id}")

    test_uid = uuid.uuid4().hex[:6].upper()
    cat_name = f"Evaluation Suite Bank {test_uid}"

    # 3. Create Category & Balanced Question Set (2 SCQ, 2 MCQ, 2 FIB, 2 Descriptive)
    cat_payload = {
        "name": cat_name,
        "description": "Category for Phase 7 Evaluation and Results testing",
        "institute_id": inst_id,
        "type": "objective",
        "status": "true",
        "public_access": True,
        "created_by": admin_id
    }
    http_req('POST', '/add-categories', cat_payload, token=admin_token)
    _, resp = http_req('GET', f'/category-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    cat_data = resp.get('data', []) if isinstance(resp, dict) else []
    created_cat = next((c for c in cat_data if c.get('name') == cat_name), None)
    cat_id = created_cat.get('category_id') if created_cat else None

    # Question Bank:
    # Q1: SCQ (Correct answer tested) - Marks: 2
    # Q2: SCQ (Incorrect answer tested) - Marks: 2
    # Q3: MCQ (Correct multi-select) - Marks: 4
    # Q4: MCQ (Partial/incorrect multi-select) - Marks: 4
    # Q5: FIB (Exact match correct) - Marks: 2
    # Q6: FIB (Incorrect match) - Marks: 2
    # Q7: DESC (High quality descriptive answer for AI evaluation) - Marks: 5
    # Q8: DESC (Unanswered / partial for manual review override) - Marks: 5
    questions_bundle = [
        {"type": "choose", "text": f"Q1 SCQ: Standard HTTPS port number is: ({test_uid})", "marks": 2, "options": ["80", "443 (Correct)", "8080", "21"], "correct_indices": [1]},
        {"type": "choose", "text": f"Q2 SCQ: Primary protocol for DNS is: ({test_uid})", "marks": 2, "options": ["UDP (Correct)", "FTP", "SMTP", "SSH"], "correct_indices": [0]},
        {"type": "multi", "text": f"Q3 MCQ: Select distributed key-value stores: ({test_uid})", "marks": 4, "options": ["Redis (Correct)", "Etcd (Correct)", "SQLite", "MS Access"], "correct_indices": [0, 1]},
        {"type": "multi", "text": f"Q4 MCQ: Select relational databases: ({test_uid})", "marks": 4, "options": ["PostgreSQL (Correct)", "MySQL (Correct)", "MongoDB", "Neo4j"], "correct_indices": [0, 1]},
        {"type": "fill", "text": f"Q5 FIB: REST APIs communicate over the ___ protocol. ({test_uid})", "marks": 2, "answerText": "HTTP"},
        {"type": "fill", "text": f"Q6 FIB: Python collections that maintain key-value pairs are called ___. ({test_uid})", "marks": 2, "answerText": "dictionaries"},
        {"type": "descriptive", "text": f"Q7 DESC: Describe how database indexing works with B-Trees. ({test_uid})", "marks": 5, "answerText": "B-Tree indexing organizes table column keys into a balanced tree structure where root, intermediate nodes, and leaf nodes allow search, sequential access, insertions, and deletions in logarithmic O(log N) time, drastically reducing disk I/O operations."},
        {"type": "descriptive", "text": f"Q8 DESC: Explain the role of JWT tokens in stateless authentication. ({test_uid})", "marks": 5, "answerText": "JWT contains header, payload, and cryptographic signature. The server verifies signature without database lookup, enabling stateless scalability across distributed microservices."}
    ]

    http_req('POST', '/add-question', {"institute_id": inst_id, "category_id": cat_id, "created_by": admin_id, "questions": questions_bundle}, token=admin_token)
    _, resp = http_req('GET', f'/get-questions-details?category_id={cat_id}&institute_id={inst_id}', token=admin_token)
    q_records = resp.get('data', []) if isinstance(resp, dict) else []
    q_ids = [q.get('id') for q in q_records]
    print(f"[Setup] Authored 8 Questions. Total Marks = 26.")

    # 4. Create Exam Blueprint (8 Qs, Total marks = 26, Pass mark 50%)
    exam_title = f"Evaluation Benchmark Test {test_uid}"
    http_req('POST', '/register-exam', {
        "title": exam_title,
        "description": "Evaluation QA benchmark test",
        "institute_id": inst_id,
        "duration_minutes": 20,
        "total_questions": 8,
        "pass_mark": 50,
        "number_of_attempts": 1,
        "created_by": admin_id,
        "categories": [{"category_id": cat_id, "number_of_questions": 8, "randomize_questions": 0, "question_ids": q_ids}]
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exams-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    exam_id = resp.get('data', [])[0].get('exam_id')

    # Schedule Exam Live
    now_utc = datetime.datetime.utcnow()
    start_time = (now_utc - datetime.timedelta(minutes=5)).isoformat() + "Z"
    end_time = (now_utc + datetime.timedelta(hours=2)).isoformat() + "Z"
    schedule_title = f"Evaluation Benchmark Batch {test_uid}"
    http_req('POST', '/add-exam-schedule', {
        "title": schedule_title,
        "exam_id": exam_id,
        "institute_id": inst_id,
        "start_time": start_time,
        "end_time": end_time,
        "duration_mins": 20,
        "total_questions": 8,
        "published": True,
        "assigned_user_ids": [cand_id],
        "created_by": admin_id,
        "instant_review": True
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exam-schedule-details?name={test_uid}', token=admin_token)
    sched_id = resp.get('data', [])[0].get('schedule_id')
    print(f"[Setup] Exam Scheduled: {sched_id}")

    # 5. Candidate Launches Test
    _, launch_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    launch_data = launch_resp.get('data', {})
    attempt_id = launch_data.get('exam_detail', {}).get('attempt_id')
    delivered_questions = launch_data.get('questions', [])
    print(f"[Setup] Candidate Launched Attempt: {attempt_id}")

    # Map questions for deterministic answering
    q1 = next(q for q in delivered_questions if "Q1 SCQ" in q['question_text']) # 2 marks (Answer CORRECT)
    q2 = next(q for q in delivered_questions if "Q2 SCQ" in q['question_text']) # 2 marks (Answer INCORRECT)
    q3 = next(q for q in delivered_questions if "Q3 MCQ" in q['question_text']) # 4 marks (Answer CORRECT)
    q4 = next(q for q in delivered_questions if "Q4 MCQ" in q['question_text']) # 4 marks (Answer INCORRECT)
    q5 = next(q for q in delivered_questions if "Q5 FIB" in q['question_text']) # 2 marks (Answer CORRECT)
    q6 = next(q for q in delivered_questions if "Q6 FIB" in q['question_text']) # 2 marks (Answer INCORRECT)
    q7 = next(q for q in delivered_questions if "Q7 DESC" in q['question_text']) # 5 marks (AI Evaluated - Strong)
    q8 = next(q for q in delivered_questions if "Q8 DESC" in q['question_text']) # 5 marks (Manual Override Target)

    q1_correct_opt = next(o['id'] for o in q1['options'] if "(Correct)" in o['text'])
    q2_incorrect_opt = next(o['id'] for o in q2['options'] if "(Correct)" not in o['text'])
    q3_correct_opts = [o['id'] for o in q3['options'] if "(Correct)" in o['text']]
    q4_incorrect_opts = [o['id'] for o in q4['options'] if "(Correct)" not in o['text']][:1]

    cand_answers = {
        # Q1 SCQ: Correct (Option 443) -> Should get 2/2 marks
        str(q1['question_id']): q1_correct_opt,
        # Q2 SCQ: Incorrect (Option FTP) -> Should get 0/2 marks
        str(q2['question_id']): q2_incorrect_opt,
        # Q3 MCQ: Correct (Redis, Etcd) -> Should get 4/4 marks
        str(q3['question_id']): q3_correct_opts,
        # Q4 MCQ: Incorrect -> Should get 0/4 marks
        str(q4['question_id']): q4_incorrect_opts,
        # Q5 FIB: Correct ("HTTP") -> Should get 2/2 marks
        str(q5['question_id']): "HTTP",
        # Q6 FIB: Incorrect ("arrays") -> Should get 0/2 marks
        str(q6['question_id']): "arrays",
        # Q7 DESC: Comprehensive answer for OpenAI AI Evaluation
        str(q7['question_id']): "B-Tree indexes maintain sorted key data across balanced tree levels. When queries execute with WHERE clauses, binary search traversal from root to leaf node occurs in O(log n) disk operations, eliminating expensive full table scans.",
        # Q8 DESC: Incomplete answer (To be manually graded/overridden by teacher)
        str(q8['question_id']): "JWT is a token used for login."
    }

    # 6. Candidate Submits Exam (Triggers Objective & OpenAI AI Descriptive Evaluation)
    print("\n[Evaluation] Submitting exam to trigger automated Objective & AI Descriptive Evaluation...")
    code, sub_resp = http_req('POST', '/submit-exam', {
        "user_id": cand_id,
        "schedule_id": sched_id,
        "attempt_id": attempt_id,
        "answers": cand_answers,
        "time_taken_mins": 8
    }, token=cand_token, timeout=60)
    passed_sub = code == 200 and sub_resp.get('status') is True
    results.append(('Submission & Automated Evaluation Trigger', passed_sub, f"HTTP {code}: {sub_resp.get('statusMessage')}"))
    print(f"[Test 1] Submit Exam -> HTTP {code}: {sub_resp.get('statusMessage')}")

    # 7. Fetch Full Evaluation & Review Results (Admin / Candidate Review API)
    time.sleep(2)
    code, review_resp = http_req('GET', f'/review-user-exam?user_id={cand_id}&scheduler_id={sched_id}&attempt_id={attempt_id}', token=admin_token)
    raw_rev = review_resp.get('data') if isinstance(review_resp, dict) else review_resp
    if isinstance(raw_rev, list):
        att_rev = raw_rev[0] if raw_rev else {}
    elif isinstance(raw_rev, dict):
        att_rev = raw_rev.get('attempts', [raw_rev])[0] if raw_rev.get('attempts') else raw_rev
    else:
        att_rev = {}
    questions_rev = att_rev.get('review', []) if isinstance(att_rev, dict) else []

    # Index evaluated questions
    rev_q1 = next((q for q in questions_rev if q.get('question_id') == q1['question_id']), {})
    rev_q2 = next((q for q in questions_rev if q.get('question_id') == q2['question_id']), {})
    rev_q3 = next((q for q in questions_rev if q.get('question_id') == q3['question_id']), {})
    rev_q4 = next((q for q in questions_rev if q.get('question_id') == q4['question_id']), {})
    rev_q5 = next((q for q in questions_rev if q.get('question_id') == q5['question_id']), {})
    rev_q6 = next((q for q in questions_rev if q.get('question_id') == q6['question_id']), {})
    rev_q7 = next((q for q in questions_rev if q.get('question_id') == q7['question_id']), {})
    rev_q8 = next((q for q in questions_rev if q.get('question_id') == q8['question_id']), {})

    # Test 2: Objective SCQ Evaluation (Correct vs Incorrect)
    passed_scq = (rev_q1.get('is_correct') is True and rev_q1.get('marks_awarded') == 2.0 and
                  rev_q2.get('is_correct') is False and rev_q2.get('marks_awarded') == 0.0)
    results.append(('Objective SCQ Evaluation (Correct vs Incorrect)', passed_scq, f"Q1 (Correct): {rev_q1.get('marks_awarded')}/2 marks, Q2 (Incorrect): {rev_q2.get('marks_awarded')}/2 marks"))
    print(f"\n[Test 2] SCQ Evaluation -> Q1 Correct: {rev_q1.get('marks_awarded')}/2 | Q2 Incorrect: {rev_q2.get('marks_awarded')}/2")

    # Test 3: Objective MCQ Evaluation (Multi-Option Verification)
    passed_mcq = (rev_q3.get('is_correct') is True and rev_q3.get('marks_awarded') == 4.0 and
                  rev_q4.get('is_correct') is False and rev_q4.get('marks_awarded') == 0.0)
    results.append(('Objective MCQ Evaluation (Multi-Choice Verification)', passed_mcq, f"Q3 (All Correct): {rev_q3.get('marks_awarded')}/4 marks, Q4 (Partial/Incorrect): {rev_q4.get('marks_awarded')}/4 marks"))
    print(f"[Test 3] MCQ Evaluation -> Q3 Correct: {rev_q3.get('marks_awarded')}/4 | Q4 Incorrect: {rev_q4.get('marks_awarded')}/4")

    # Test 4: Objective Fill in Blank Evaluation (Exact string match)
    passed_fib = (rev_q5.get('is_correct') is True and rev_q5.get('marks_awarded') == 2.0 and
                  rev_q6.get('is_correct') is False and rev_q6.get('marks_awarded') == 0.0)
    results.append(('Fill in Blank Evaluation (Exact Match vs Incorrect)', passed_fib, f"Q5 ('HTTP'): {rev_q5.get('marks_awarded')}/2 marks, Q6 ('arrays'): {rev_q6.get('marks_awarded')}/2 marks"))
    print(f"[Test 4] FIB Evaluation -> Q5 Correct: {rev_q5.get('marks_awarded')}/2 | Q6 Incorrect: {rev_q6.get('marks_awarded')}/2")

    # Test 5: AI Descriptive Question Evaluation (Score, Rubric, Missing Concepts, Confidence)
    ai_marks_q7 = rev_q7.get('marks_awarded', 0)
    ai_confidence_q7 = rev_q7.get('ai_confidence')
    ai_feedback_q7 = rev_q7.get('feedback', '')
    ai_comments_q7 = rev_q7.get('review_comment', {})

    passed_ai_eval = ai_marks_q7 > 0 and (ai_confidence_q7 is not None or bool(ai_feedback_q7))
    results.append(('AI Descriptive Evaluation (Score, Rubric & Confidence)', passed_ai_eval, f"Q7 AI Score: {ai_marks_q7}/5, Confidence: {ai_confidence_q7}%, Feedback: '{ai_feedback_q7[:60]}...'"))
    print(f"\n[Test 5] AI Evaluation -> Q7 Score: {ai_marks_q7}/5 | Confidence: {ai_confidence_q7}% | Feedback: '{ai_feedback_q7[:60]}...'")

    # Initial Pre-Override Attempt Total Score
    pre_override_score = att_rev.get('score', 0)
    pre_override_pct = att_rev.get('percentage', 0)
    print(f"[Evaluation] Pre-Override Attempt Score: {pre_override_score} / 26 ({pre_override_pct}%) | Status: {att_rev.get('result')}")

    # Test 6: Teacher Manual Review & Marks Override (Modify Q8 Marks & Add Evaluator Comment)
    q8_ans_id = rev_q8.get('answer_id')
    override_marks = 4.5
    override_reason = "Manual Review: Candidate explained the core purpose; awarding 4.5 marks based on oral follow-up."
    
    override_payload = {
        "answer_id": q8_ans_id,
        "question_id": q8['question_id'],
        "attempt_id": attempt_id,
        "marks_awarded": override_marks,
        "marks": override_marks,
        "edit_reason": override_reason,
        "updated_by": admin_id
    }
    code, override_resp = http_req('POST', '/update-descriptive-marks', override_payload, token=admin_token)
    passed_override = code == 200 and override_resp.get('status') is True
    results.append(('Teacher Manual Review & Score Override', passed_override, f"HTTP {code}: {override_resp.get('statusMessage')}"))
    print(f"\n[Test 6] Teacher Score Override -> HTTP {code}: {override_resp.get('statusMessage')}")

    # Test 7: Verify Final Result Uses Manual Override & Recalculates Score/Percentage
    code, rev_after = http_req('GET', f'/review-user-exam?user_id={cand_id}&scheduler_id={sched_id}&attempt_id={attempt_id}', token=admin_token)
    raw_after = rev_after.get('data') if isinstance(rev_after, dict) else rev_after
    if isinstance(raw_after, list):
        att_after = raw_after[0] if raw_after else {}
    elif isinstance(raw_after, dict):
        att_after = raw_after.get('attempts', [raw_after])[0] if raw_after.get('attempts') else raw_after
    else:
        att_after = {}
    post_score = att_after.get('score', 0)
    post_pct = att_after.get('percentage', 0)
    post_result = att_after.get('result')
    q8_after = next((q for q in att_after.get('review', []) if q.get('question_id') == q8['question_id']), {})

    passed_recalc = (code == 200 and q8_after.get('marks_awarded') == override_marks and 
                     post_score == (pre_override_score + override_marks) and post_pct > pre_override_pct)
    results.append(('Final Scorecard Verification with Manual Override', passed_recalc, f"New Score: {post_score}/26, Percentage: {post_pct}%, Result: {post_result}, Q8 Marks: {q8_after.get('marks_awarded')}"))
    print(f"[Test 7] Post-Override Verification -> New Score: {post_score}/26 | Pct: {post_pct}% | Status: {post_result} | Q8: {q8_after.get('marks_awarded')}/5")

    # Test 8: Candidate Scorecard & Result Availability
    code, cand_view = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_sched_entry = next((e for e in cand_view.get('data', []) if str(e.get('schedule_id')) == str(sched_id)), None)
    passed_cand_score = (code == 200 and cand_sched_entry is not None and 
                         cand_sched_entry.get('user_score') == post_score and cand_sched_entry.get('user_percentage') == post_pct)
    results.append(('Candidate Dashboard Final Scorecard Sync', passed_cand_score, f"HTTP {code}, Candidate Score: {cand_sched_entry.get('user_score') if cand_sched_entry else None}, Result: {cand_sched_entry.get('user_result') if cand_sched_entry else None}"))
    print(f"[Test 8] Candidate Scorecard Sync -> Score: {cand_sched_entry.get('user_score') if cand_sched_entry else None} | Pct: {cand_sched_entry.get('user_percentage') if cand_sched_entry else None}% | Result: {cand_sched_entry.get('user_result') if cand_sched_entry else None}")

    # Cleanup
    print(f"\n[Cleanup] Soft-deleting test schedule {sched_id} and exam {exam_id}...")
    http_req('DELETE', f'/delete/exam-schedule/{sched_id}', token=admin_token)
    http_req('DELETE', f'/delete/exam/{exam_id}', token=admin_token)
    http_req('DELETE', f'/delete/category/{cat_id}', token=admin_token)

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 7 EVALUATION & RESULTS SUMMARY:")
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
    run_phase7_evaluation_suite()
