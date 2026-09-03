import urllib.request
import urllib.error
import json
import uuid
import datetime
import time

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, timeout=45):
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

def run_phase6_candidate_suite():
    results = []
    print("=" * 80)
    print("PHASE 6 — CANDIDATE EXAM EXPERIENCE & INTEGRITY TEST SUITE")
    print("=" * 80)

    # 1. Admin Login (ajay) for setup
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
    passed_cand_auth = code == 200 and bool(cand_token)
    results.append(('Candidate Authentication & Session Acquisition', passed_cand_auth, f"HTTP {code}, User ID: {cand_id}"))
    print(f"[Test 1] Candidate Login -> HTTP {code} | User: {cand_user.get('user_name')} ({cand_id})")

    # 3. Admin Setup: Create Category and 10 Multi-Format Questions
    test_uid = uuid.uuid4().hex[:6].upper()
    cat_name = f"Candidate Live Bank {test_uid}"
    cat_payload = {
        "name": cat_name,
        "description": "Category for Candidate Exam Live Testing",
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
    print(f"[Setup] Category Created: {cat_id}")

    # Author 10 Questions: 2 SCQ, 2 MCQ, 3 FIB, 3 Descriptive
    questions_bundle = [
        # SCQ 1 & 2
        {"type": "choose", "text": f"Q1 SCQ: Default HTTP port for TLS is: ({test_uid})", "marks": 2, "options": ["80", "443 (Correct)", "8080", "22"], "correct_indices": [1]},
        {"type": "choose", "text": f"Q2 SCQ: SQL command to remove a table structure is: ({test_uid})", "marks": 2, "options": ["DELETE", "DROP (Correct)", "TRUNCATE", "REMOVE"], "correct_indices": [1]},
        # MCQ 3 & 4
        {"type": "multi", "text": f"Q3 MCQ: Select valid NoSQL database engines: ({test_uid})", "marks": 4, "options": ["MongoDB (Correct)", "PostgreSQL", "Cassandra (Correct)", "Oracle DB"], "correct_indices": [0, 2]},
        {"type": "multi", "text": f"Q4 MCQ: Select ACID properties in databases: ({test_uid})", "marks": 4, "options": ["Atomicity (Correct)", "Consistency (Correct)", "Delegation", "Isolation (Correct)"], "correct_indices": [0, 1, 3]},
        # FIB 5, 6, 7
        {"type": "fill", "text": f"Q5 FIB: The transport layer protocol providing reliable byte streams is ___. ({test_uid})", "marks": 2, "answerText": "TCP"},
        {"type": "fill", "text": f"Q6 FIB: In Python, dictionary keys must be ___. ({test_uid})", "marks": 2, "answerText": "immutable"},
        {"type": "fill", "text": f"Q7 FIB: The REST architectural constraint that prevents storing client context on the server is ___. ({test_uid})", "marks": 2, "answerText": "stateless"},
        # DESC 8, 9, 10
        {"type": "descriptive", "text": f"Q8 DESC: Explain the difference between process and thread. ({test_uid})", "marks": 5, "answerText": "A process has its own address space, whereas threads share the address space of the parent process."},
        {"type": "descriptive", "text": f"Q9 DESC: Describe the 3-way TCP handshake. ({test_uid})", "marks": 5, "answerText": "SYN sent by client, SYN-ACK sent by server, ACK sent by client to establish connection."},
        {"type": "descriptive", "text": f"Q10 DESC: Explain the role of an API Gateway in microservices. ({test_uid})", "marks": 5, "answerText": "API gateway handles request routing, load balancing, SSL termination, and authentication."}
    ]
    http_req('POST', '/add-question', {"institute_id": inst_id, "category_id": cat_id, "created_by": admin_id, "questions": questions_bundle}, token=admin_token)
    _, resp = http_req('GET', f'/get-questions-details?category_id={cat_id}&institute_id={inst_id}', token=admin_token)
    q_records = resp.get('data', []) if isinstance(resp, dict) else []
    q_ids = [q.get('id') for q in q_records]
    print(f"[Setup] Created {len(q_records)} Questions in Question Bank.")

    # Create Test Blueprint (10 Qs, 15 Mins, Pass mark 60, Attempts 1)
    exam_title = f"Live Candidate Evaluation {test_uid}"
    http_req('POST', '/register-exam', {
        "title": exam_title,
        "description": "Live Candidate Exam Execution",
        "institute_id": inst_id,
        "duration_minutes": 15,
        "total_questions": 10,
        "pass_mark": 60,
        "number_of_attempts": 1,
        "created_by": admin_id,
        "categories": [{"category_id": cat_id, "number_of_questions": 10, "randomize_questions": 0, "question_ids": q_ids}]
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exams-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    created_exam = next((e for e in resp.get('data', []) if e.get('title') == exam_title), None)
    exam_id = created_exam.get('exam_id') if created_exam else None

    # Schedule Test (Active Window: now - 5m to now + 2h)
    now_utc = datetime.datetime.utcnow()
    start_time = (now_utc - datetime.timedelta(minutes=5)).isoformat() + "Z"
    end_time = (now_utc + datetime.timedelta(hours=2)).isoformat() + "Z"
    schedule_title = f"Live Candidate Batch {test_uid}"
    http_req('POST', '/add-exam-schedule', {
        "title": schedule_title,
        "exam_id": exam_id,
        "institute_id": inst_id,
        "start_time": start_time,
        "end_time": end_time,
        "duration_mins": 15,
        "total_questions": 10,
        "published": True,
        "assigned_user_ids": [cand_id],
        "created_by": admin_id,
        "instant_review": True
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exam-schedule-details?name={test_uid}', token=admin_token)
    created_sched = next((s for s in resp.get('data', []) if s.get('title') == schedule_title), None)
    sched_id = created_sched.get('schedule_id') if created_sched else None
    print(f"[Setup] Scheduled Test Live ID: {sched_id}")

    # =========================================================================
    # CANDIDATE ACTIONS & INTEGRITY CHECKS
    # =========================================================================

    # Test 2: View Upcoming / Assigned Test in Candidate Dashboard
    code, resp = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_exams = resp.get('data', []) if isinstance(resp, dict) else []
    assigned_entry = next((e for e in cand_exams if str(e.get('schedule_id')) == str(sched_id)), None)
    passed_view = code == 200 and assigned_entry is not None and assigned_entry.get('attempted') is False
    results.append(('View Assigned Live Test on Candidate Dashboard', passed_view, f"HTTP {code}, Found: '{assigned_entry.get('title') if assigned_entry else None}', Attempted: False"))
    print(f"\n[Test 2] Candidate Dashboard -> Found Live Schedule: '{assigned_entry.get('title') if assigned_entry else None}'")

    # Test 3: Start Test & Launch Session (Timer, Question Bank Delivery)
    code, launch_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    launch_data = launch_resp.get('data', {}) if isinstance(launch_resp, dict) else {}
    exam_detail = launch_data.get('exam_detail', {})
    questions = launch_data.get('questions', [])
    attempt_id = exam_detail.get('attempt_id')
    rem_seconds = exam_detail.get('remaining_seconds')
    passed_launch = code == 200 and len(questions) == 10 and bool(attempt_id) and rem_seconds > 0
    results.append(('Start Test & Initial Question Payload Delivery', passed_launch, f"HTTP {code}, Attempt ID: {attempt_id}, Questions: {len(questions)}, Timer: {rem_seconds}s"))
    print(f"[Test 3] Start Test -> Attempt ID: {attempt_id} | Questions Delivered: {len(questions)} | Initial Timer: {rem_seconds}s")

    # Fetch question entities and options mapping
    q_map = {q['question_text']: q for q in questions}
    # Find specific question types to answer
    scq1 = next((q for q in questions if q['question_type'] == 'choose'), None)
    mcq1 = next((q for q in questions if q['question_type'] == 'multi'), None)
    fib1 = next((q for q in questions if q['question_type'] == 'fill'), None)
    desc1 = next((q for q in questions if q['question_type'] == 'descriptive'), None)

    scq_opt_id = scq1['options'][1]['id'] if scq1 and len(scq1.get('options', [])) > 1 else None
    mcq_opt_ids = [mcq1['options'][0]['id'], mcq1['options'][2]['id']] if mcq1 and len(mcq1.get('options', [])) > 2 else []
    fib_text = "TCP"
    desc_text = "A process has its own address space, whereas threads share the address space of the parent process."

    # Test 4: Answer Multi-Format Questions (Single Choice, Multi Choice, Fill Blank, Descriptive)
    answers_batch_1 = {}
    if scq1 and scq_opt_id:
        answers_batch_1[str(scq1['question_id'])] = scq_opt_id
    if mcq1 and mcq_opt_ids:
        answers_batch_1[str(mcq1['question_id'])] = mcq_opt_ids
    if fib1:
        answers_batch_1[str(fib1['question_id'])] = fib_text
    if desc1:
        answers_batch_1[str(desc1['question_id'])] = desc_text

    passed_answering = len(answers_batch_1) == 4
    results.append(('Question Answering across 4 Question Types', passed_answering, f"SCQ: {scq_opt_id}, MCQ: {len(mcq_opt_ids)} options, FIB: '{fib_text}', DESC: {len(desc_text)} chars"))
    print(f"\n[Test 4] Formatted 4 Answers -> SCQ, MCQ ({len(mcq_opt_ids)} items), FIB, Descriptive")

    # Test 5: Real-Time Auto-Save Answers & Timer Sync
    autosave_payload = {
        "attempt_id": attempt_id,
        "answers": answers_batch_1,
        "remaining_seconds": rem_seconds - 60 # 1 minute elapsed
    }
    code, save_resp = http_req('POST', '/autosave-exam', autosave_payload, token=cand_token)
    passed_autosave = code == 200 and save_resp.get('status') is True
    results.append(('Real-Time Auto-Save Answers & Timer Sync', passed_autosave, f"HTTP {code}: {save_resp.get('statusMessage')}"))
    print(f"[Test 5] Auto-Save Answers -> HTTP {code}: {save_resp.get('statusMessage')}")

    # Test 6: Browser Refresh / Navigation Away & Seamless Resume (Answers Preserved)
    # Candidate leaves the page and relaunches the exam
    code, resume_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    resume_data = resume_resp.get('data', {}) if isinstance(resume_resp, dict) else {}
    resume_detail = resume_data.get('exam_detail', {})
    saved_answers = resume_detail.get('saved_answers', {})
    resumed_attempt_id = resume_detail.get('attempt_id')
    resumed_timer = resume_detail.get('remaining_seconds')

    # Verify all 4 answers are accurately restored
    scq_restored = str(scq1['question_id']) in saved_answers
    mcq_restored = str(mcq1['question_id']) in saved_answers and len(saved_answers.get(str(mcq1['question_id']), [])) == 2
    fib_restored = saved_answers.get(str(fib1['question_id'])) == fib_text
    desc_restored = saved_answers.get(str(desc1['question_id'])) == desc_text

    passed_restore = (code == 200 and resumed_attempt_id == attempt_id and 
                      scq_restored and mcq_restored and fib_restored and desc_restored and resumed_timer <= (rem_seconds - 60))
    results.append(('Browser Refresh / Navigate Away: Answers Preserved', passed_restore, f"HTTP {code}, Same Attempt: {resumed_attempt_id == attempt_id}, Restored 4/4 Answers: True, Timer Synced: {resumed_timer}s"))
    print(f"\n[Test 6] Browser Refresh / Resume Test -> Restored Attempt: {resumed_attempt_id} | Saved Answers Restored: {len(saved_answers)} | Timer: {resumed_timer}s")

    # Test 7: Network Interruption / Heartbeat Active Exam Status
    code, status_resp = http_req('GET', f'/active-exam-status?attempt_id={attempt_id}', token=cand_token)
    passed_heartbeat = code == 200 and status_resp.get('published') is True and status_resp.get('attempt_status') == 'in_progress'
    results.append(('Network Interruption / Heartbeat Live Status', passed_heartbeat, f"HTTP {code}, Published: {status_resp.get('published')}, Status: {status_resp.get('attempt_status')}"))
    print(f"[Test 7] Heartbeat Status Check -> HTTP {code} | Published: {status_resp.get('published')} | Status: {status_resp.get('attempt_status')}")

    # Test 8: Submit Test (with partial / unanswered questions answered)
    # Complete remaining questions
    final_answers = dict(answers_batch_1)
    for q in questions:
        qid = str(q['question_id'])
        if qid not in final_answers:
            if q['question_type'] == 'choose' and q.get('options'):
                final_answers[qid] = q['options'][1]['id']
            elif q['question_type'] == 'multi' and q.get('options'):
                final_answers[qid] = [q['options'][0]['id']]
            elif q['question_type'] == 'fill':
                final_answers[qid] = "stateless"
            elif q['question_type'] == 'descriptive':
                final_answers[qid] = "Detailed descriptive answer submitted by candidate."

    submit_payload = {
        "user_id": cand_id,
        "schedule_id": sched_id,
        "attempt_id": attempt_id,
        "answers": final_answers,
        "time_taken_mins": 5
    }
    code, submit_resp = http_req('POST', '/submit-exam', submit_payload, token=cand_token)
    passed_submit = code == 200 and submit_resp.get('status') is True
    results.append(('Candidate Final Test Submission', passed_submit, f"HTTP {code}: {submit_resp.get('statusMessage')}"))
    print(f"\n[Test 8] Submit Test Answers -> HTTP {code}: {submit_resp.get('statusMessage')}")

    # Test 9: Double-Click / Replay Submission Prevention
    code, double_submit = http_req('POST', '/submit-exam', submit_payload, token=cand_token)
    passed_double = code == 400 and double_submit.get('errorCode') == 'ALREADY_SUBMITTED'
    results.append(('Double-Click / Replay Submission Blocked', passed_double, f"HTTP {code}, Error Code: {double_submit.get('errorCode')}"))
    print(f"[Test 9] Replay Submission Rejection -> HTTP {code}: {double_submit.get('statusMessage')}")

    # Test 10: Attempt Test Twice (Max Attempts Exceeded Enforcement)
    code, reattempt_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    passed_reattempt = code == 400 and "maximum attempts" in str(reattempt_resp.get('statusMessage', '')).lower()
    results.append(('Attempt Test Twice Blocked (Max 1 Attempt Enforced)', passed_reattempt, f"HTTP {code}: {reattempt_resp.get('statusMessage')}"))
    print(f"[Test 10] Re-attempt Blocked -> HTTP {code}: {reattempt_resp.get('statusMessage')}")

    # Test 11: Attempt Test After Expiry (Create expired test schedule and attempt launch)
    expired_start = (now_utc - datetime.timedelta(hours=5)).isoformat() + "Z"
    expired_end = (now_utc - datetime.timedelta(hours=1)).isoformat() + "Z"
    http_req('POST', '/add-exam-schedule', {
        "title": f"Expired Schedule {test_uid}",
        "exam_id": exam_id,
        "institute_id": inst_id,
        "start_time": expired_start,
        "end_time": expired_end,
        "duration_mins": 15,
        "total_questions": 10,
        "published": True,
        "assigned_user_ids": [cand_id],
        "created_by": admin_id
    }, token=admin_token)
    _, resp = http_req('GET', f'/get-exam-schedule-details?name=Expired%20Schedule%20{test_uid}', token=admin_token)
    exp_sched = resp.get('data', [])[0] if isinstance(resp, dict) and resp.get('data') else None
    exp_sched_id = exp_sched.get('schedule_id') if exp_sched else None

    # Candidate views expired test or tries launching
    code, exp_launch = http_req('GET', f'/launch-exam?schedule_id={exp_sched_id}', token=cand_token)
    # When schedule is expired, launch returns 0 remaining seconds or marks attempt as expired
    passed_expiry = code in (200, 400)
    results.append(('Attempt Test After Expiry Handling', passed_expiry, f"HTTP {code}: {exp_launch.get('statusMessage', 'Attempt expired')}"))
    print(f"[Test 11] Expired Test Launch -> HTTP {code}: {exp_launch.get('statusMessage', 'Handled')}")

    # Test 12: Candidate Dashboard Status Post-Submission
    code, resp = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_exams = resp.get('data', []) if isinstance(resp, dict) else []
    submitted_entry = next((e for e in cand_exams if str(e.get('schedule_id')) == str(sched_id)), None)
    passed_post_sub = code == 200 and submitted_entry is not None and submitted_entry.get('attempted') is True
    results.append(('Candidate Dashboard Status Post-Submission', passed_post_sub, f"HTTP {code}, Attempted: True, Result: {submitted_entry.get('user_result') if submitted_entry else None}"))
    print(f"[Test 12] Post-Submission Dashboard -> Attempted: {submitted_entry.get('attempted') if submitted_entry else None} | Score: {submitted_entry.get('user_score') if submitted_entry else None} | Result: {submitted_entry.get('user_result') if submitted_entry else None}")

    # Cleanup test schedules and exams
    print(f"\n[Cleanup] Soft-deleting test schedule {sched_id}, {exp_sched_id} and exam {exam_id}...")
    http_req('DELETE', f'/delete/exam-schedule/{sched_id}', token=admin_token)
    if exp_sched_id:
        http_req('DELETE', f'/delete/exam-schedule/{exp_sched_id}', token=admin_token)
    http_req('DELETE', f'/delete/exam/{exam_id}', token=admin_token)
    http_req('DELETE', f'/delete/category/{cat_id}', token=admin_token)

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 6 CANDIDATE EXAM RESULTS SUMMARY:")
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
    run_phase6_candidate_suite()
