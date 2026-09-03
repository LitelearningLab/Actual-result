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

def run_phase5_exam_engine_suite():
    results = []
    print("=" * 80)
    print("PHASE 5 — TEST / EXAM ENGINE: 20-QUESTION MASTER BLUEPRINT & SCHEDULING")
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
    print(f"[Auth] Candidate Login -> HTTP {code} | Candidate ID: {cand_id} | Token: {bool(cand_token)}")

    if not admin_token or not cand_token:
        print("FATAL: Logins failed.")
        return

    test_uid = uuid.uuid4().hex[:6].upper()
    cat_name = f"Master Exam Bank {test_uid}"

    # 3. Create Category for the 20 questions
    cat_payload = {
        "name": cat_name,
        "description": "Category containing 20 questions (5 SCQ, 5 MCQ, 5 FIB, 5 Descriptive)",
        "institute_id": inst_id,
        "type": "objective",
        "status": "true",
        "public_access": True,
        "created_by": admin_id
    }
    code, resp = http_req('POST', '/add-categories', cat_payload, token=admin_token)
    print(f"\n[Setup] Create Category -> HTTP {code}: {resp.get('statusMessage')}")

    # Fetch Category ID
    code, resp = http_req('GET', f'/category-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    cat_data = resp.get('data', []) if isinstance(resp, dict) else []
    created_cat = next((c for c in cat_data if c.get('name') == cat_name), None)
    cat_id = created_cat.get('category_id') if created_cat else None
    print(f"[Setup] Category ID Acquired: {cat_id}")

    # 4. Populate 20 Realistic Questions across all 4 types
    print("\n[Setup] Authoring 20 Realistic Questions (5 SCQ, 5 MCQ, 5 FIB, 5 Descriptive)...")
    questions_bundle = []

    # 5 Single Choice Questions (choose)
    for i in range(1, 6):
        questions_bundle.append({
            "type": "choose",
            "text": f"SCQ-{i}: What is the primary function of Component #{i} in distributed architectures? ({test_uid})",
            "marks": 2,
            "options": [f"Option A{i}", f"Option B{i} (Correct)", f"Option C{i}", f"Option D{i}"],
            "correct_indices": [1] # Option B
        })

    # 5 Multiple Choice Questions (multi)
    for i in range(1, 6):
        questions_bundle.append({
            "type": "multi",
            "text": f"MCQ-{i}: Select all true statements regarding Protocol Suite #{i}: ({test_uid})",
            "marks": 4,
            "options": [f"Valid Property 1.{i} (Correct)", f"Invalid Trait A{i}", f"Valid Property 2.{i} (Correct)", f"Invalid Trait B{i}"],
            "correct_indices": [0, 2] # Option 1 & 3
        })

    # 5 Fill in the Blank Questions (fill)
    fib_answers = ["TCP", "AES256", "Stateless", "Asynchronous", "Microservices"]
    for i in range(1, 6):
        questions_bundle.append({
            "type": "fill",
            "text": f"FIB-{i}: In modern software design, the communication standard is ___. ({test_uid})",
            "marks": 2,
            "answerText": fib_answers[i-1]
        })

    # 5 Descriptive Questions (descriptive)
    for i in range(1, 6):
        questions_bundle.append({
            "type": "descriptive",
            "text": f"DESC-{i}: Discuss in detail the fault-tolerance and consensus mechanisms in Topic #{i}. ({test_uid})",
            "marks": 5,
            "answerText": f"Comprehensive model answer explaining consensus protocols, replication logs, quorum validation, and leader election mechanisms for Topic #{i}."
        })

    add_q_payload = {
        "institute_id": inst_id,
        "category_id": cat_id,
        "created_by": admin_id,
        "questions": questions_bundle
    }
    code, resp = http_req('POST', '/add-question', add_q_payload, token=admin_token)
    passed_q = code == 200 and resp.get('status') is True
    results.append(('Author 20 Realistic Questions (5 SCQ, 5 MCQ, 5 FIB, 5 DESC)', passed_q, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[Test 1] Author 20 Questions -> HTTP {code}: {resp.get('statusMessage')}")

    # Fetch Question IDs
    code, resp = http_req('GET', f'/get-questions-details?category_id={cat_id}&institute_id={inst_id}', token=admin_token)
    q_records = resp.get('data', []) if isinstance(resp, dict) else []
    q_ids = [q.get('id') for q in q_records]
    print(f"[Setup] Total Questions in Category: {len(q_records)} | Question IDs fetched: {len(q_ids)}")

    # 5. Create Test Blueprint (POST /register-exam)
    exam_title = f"QA Master Certification Test {test_uid}"
    create_exam_payload = {
        "title": exam_title,
        "description": "Master certification covering all 20 objective and subjective questions",
        "institute_id": inst_id,
        "duration_minutes": 45,
        "total_questions": 20,
        "pass_mark": 60,
        "number_of_attempts": 2,
        "created_by": admin_id,
        "categories": [
            {
                "category_id": cat_id,
                "number_of_questions": 20,
                "randomize_questions": 0,
                "question_ids": q_ids
            }
        ]
    }
    code, resp = http_req('POST', '/register-exam', create_exam_payload, token=admin_token)
    passed_exam = code == 200 and resp.get('status') is True
    results.append(('Create Test Blueprint (20 Qs, 45 Mins, 60% Pass Mark)', passed_exam, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 2] Create Test Blueprint -> HTTP {code}: {resp.get('statusMessage')}")

    # Fetch Created Exam ID
    code, resp = http_req('GET', f'/get-exams-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    exams_data = resp.get('data', []) if isinstance(resp, dict) else []
    created_exam = next((e for e in exams_data if e.get('title') == exam_title), None)
    exam_id = created_exam.get('exam_id') if created_exam else None
    passed_verify = code == 200 and exam_id is not None
    results.append(('Verify Created Test Blueprint & Mappings', passed_verify, f"HTTP {code}, Exam ID: {exam_id}"))
    print(f"[Test 3] Verify Exam Blueprint -> HTTP {code} | Exam ID: {exam_id}")

    # 6. Edit / Update Test Blueprint
    update_exam_payload = {
        "exam_id": exam_id,
        "title": f"{exam_title} - Final",
        "duration_minutes": 50,
        "pass_mark": 65,
        "total_questions": 20,
        "categories": [
            {
                "category_id": cat_id,
                "number_of_questions": 20,
                "randomize_questions": 0,
                "question_ids": q_ids
            }
        ]
    }
    code, resp = http_req('POST', '/update-exam', update_exam_payload, token=admin_token)
    passed_update = code == 200 and resp.get('status') is True
    results.append(('Edit / Update Test Blueprint Config', passed_update, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 4] Update Test Blueprint -> HTTP {code}: {resp.get('statusMessage')}")

    # 7. Candidate Visibility Check 1: Before Test is Scheduled
    code, resp = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_exams = resp.get('data', []) if isinstance(resp, dict) else []
    is_visible_pre = any(e.get('exam_id') == exam_id for e in cand_exams)
    passed_vis1 = code == 200 and not is_visible_pre
    results.append(('Candidate Isolation: Unscheduled Test Not Visible', passed_vis1, f"HTTP {code}, Visible: {is_visible_pre}"))
    print(f"\n[Test 5] Candidate Pre-Schedule Visibility -> Visible in dashboard: {is_visible_pre}")

    # 8. Schedule Test with Future Start Time (Candidate Early Launch Check)
    now_utc = datetime.datetime.utcnow()
    future_start = (now_utc + datetime.timedelta(hours=2)).isoformat() + "Z"
    future_end = (now_utc + datetime.timedelta(hours=4)).isoformat() + "Z"
    
    schedule_title = f"Scheduled Batch A - {test_uid}"
    future_sched_payload = {
        "title": schedule_title,
        "exam_id": exam_id,
        "institute_id": inst_id,
        "start_time": future_start,
        "end_time": future_end,
        "duration_mins": 50,
        "total_questions": 20,
        "published": True,
        "assigned_user_ids": [cand_id],
        "created_by": admin_id,
        "instant_review": True
    }
    code, resp = http_req('POST', '/add-exam-schedule', future_sched_payload, token=admin_token)
    passed_sched = code == 200 and resp.get('status') is True
    results.append(('Schedule Test & Assign Candidate', passed_sched, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 6] Schedule Test (Future Window) -> HTTP {code}: {resp.get('statusMessage')}")

    # Fetch Schedule ID
    code, resp = http_req('GET', f'/get-exam-schedule-details?name={test_uid}', token=admin_token)
    sched_records = resp.get('data', []) if isinstance(resp, dict) else []
    created_sched = next((s for s in sched_records if s.get('title') == schedule_title), None)
    sched_id = created_sched.get('schedule_id') if created_sched else None
    print(f"[Setup] Schedule ID Acquired: {sched_id}")

    # Candidate Visibility Check 2: Visible in Dashboard as Upcoming
    code, resp = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_exams = resp.get('data', []) if isinstance(resp, dict) else []
    assigned_entry = next((e for e in cand_exams if str(e.get('schedule_id')) == str(sched_id)), None)
    passed_vis2 = code == 200 and assigned_entry is not None
    results.append(('Candidate Visibility: Assigned Test Listed in Dashboard', passed_vis2, f"HTTP {code}, Found Schedule: {assigned_entry.get('title') if assigned_entry else None}"))
    print(f"[Test 7] Candidate Dashboard Visibility -> Assigned test found: '{assigned_entry.get('title') if assigned_entry else None}'")

    # Candidate Early Launch Attempt (Expected 400 "This exam has not started yet")
    code, resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    passed_early = code == 400 and "not started" in str(resp.get('statusMessage', '')).lower()
    results.append(('Candidate Early Launch Blocked (Before Start Time)', passed_early, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[Test 8] Early Launch Rejection -> HTTP {code}: {resp.get('statusMessage')}")

    # 9. Update Schedule to Active Live Window (start_time in past, end_time in future)
    active_start = (now_utc - datetime.timedelta(minutes=5)).isoformat() + "Z"
    active_end = (now_utc + datetime.timedelta(hours=2)).isoformat() + "Z"
    update_sched_payload = {
        "schedule_id": sched_id,
        "title": schedule_title,
        "start_time": active_start,
        "end_time": active_end,
        "published": True,
        "assigned_user_ids": [cand_id]
    }
    code, resp = http_req('POST', '/update-exam-schedule', update_sched_payload, token=admin_token)
    passed_sched_update = code == 200 and resp.get('status') is True
    results.append(('Edit Schedule to Active Testing Window', passed_sched_update, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 9] Update Schedule to Active Window -> HTTP {code}: {resp.get('statusMessage')}")

    # 10. Candidate Launch Test During Active Window
    code, launch_resp = http_req('GET', f'/launch-exam?schedule_id={sched_id}', token=cand_token)
    launch_data = launch_resp.get('data', {}) if isinstance(launch_resp, dict) else {}
    exam_detail = launch_data.get('exam_detail', {})
    loaded_questions = launch_data.get('questions', [])
    attempt_id = exam_detail.get('attempt_id')
    rem_sec = exam_detail.get('remaining_seconds')

    passed_launch = code == 200 and len(loaded_questions) == 20 and bool(attempt_id) and rem_sec > 0
    results.append(('Candidate Active Test Launch & 20 Questions Delivery', passed_launch, f"HTTP {code}, Attempt ID: {attempt_id}, Questions Delivered: {len(loaded_questions)}, Timer: {rem_sec}s"))
    print(f"\n[Test 10] Active Test Launch -> HTTP {code} | Attempt ID: {attempt_id} | Questions: {len(loaded_questions)} | Timer: {rem_sec}s")

    # 11. Candidate Status During Active Test (In-Progress State in Dashboard)
    code, resp = http_req('GET', f'/get-user-exams-details?user_id={cand_id}', token=cand_token)
    cand_exams = resp.get('data', []) if isinstance(resp, dict) else []
    active_entry = next((e for e in cand_exams if str(e.get('schedule_id')) == str(sched_id)), None)
    has_in_prog = active_entry.get('has_in_progress') if active_entry else False
    passed_inprog = code == 200 and has_in_prog is True
    results.append(('Candidate Visibility During Test (In-Progress Status)', passed_inprog, f"HTTP {code}, has_in_progress: {has_in_prog}"))
    print(f"[Test 11] Status During Test -> has_in_progress: {has_in_prog}")

    # 12. Unpublish / Cancel Test Check
    unpub_payload = {
        "schedule_id": sched_id,
        "published": False
    }
    code, resp = http_req('POST', '/update-exam-schedule', unpub_payload, token=admin_token)
    print(f"\n[Test 12] Unpublish Schedule -> HTTP {code}: {resp.get('statusMessage')}")

    # Verify Active Status check detects unpublished state
    code, resp = http_req('GET', f'/active-exam-status?attempt_id={attempt_id}', token=cand_token)
    is_published = resp.get('published') if isinstance(resp, dict) else True
    passed_unpub = code == 200 and is_published is False
    results.append(('Test Cancellation / Unpublish Real-Time Detection', passed_unpub, f"HTTP {code}, Published: {is_published}"))
    print(f"[Test 12] Unpublish Detection -> published: {is_published}")

    # Re-publish schedule
    repub_payload = {"schedule_id": sched_id, "published": True}
    http_req('POST', '/update-exam-schedule', repub_payload, token=admin_token)

    # 13. Cleanup temporary test artifacts
    print(f"\n[Cleanup] Soft-deleting test schedule {sched_id} and exam {exam_id}...")
    http_req('DELETE', f'/delete/exam-schedule/{sched_id}', token=admin_token)
    http_req('DELETE', f'/delete/exam/{exam_id}', token=admin_token)
    http_req('DELETE', f'/delete/category/{cat_id}', token=admin_token)

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 5 TEST ENGINE RESULTS SUMMARY:")
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
    run_phase5_exam_engine_suite()
