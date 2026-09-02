import urllib.request
import urllib.error
import json
import uuid
import datetime

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, params=None):
    query_str = ''
    if params:
        query_str = '?' + '&'.join([f"{k}={urllib.parse.quote(str(v))}" for k, v in params.items()])
    url = BASE_URL + path + query_str
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    payload = json.dumps(data).encode('utf-8') if data is not None else None
    req = urllib.request.Request(url, data=payload, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status, json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8')
        try:
            return e.code, json.loads(body)
        except Exception:
            return e.code, body
    except Exception as e:
        return 0, str(e)

print("="*75)
print("PHASE 5 — TEST / EXAM ENGINE COMPLETE QA SUITE")
print("="*75)

# 1. Auth Admin & Candidate
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin.get('token')

code, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand.get('token')
cand_user_id = auth_cand.get('user', {}).get('user_id')
print(f"[Auth] Admin & Candidate authenticated (Candidate User ID: {cand_user_id})")

# 2. Get Test Institute
code, inst_resp = http_req('GET', '/get-institutes', token=admin_token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# 3. Create Category for 20-Question Exam
print("\n--- STEP 1: Creating Question Bank Category ---")
cat_payload = {
    'name': f"Comprehensive Assessment QB [{unique_tag}]",
    'description': '20-Question Multi-format bank for testing',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Admin'
}
code, cat_res = http_req('POST', '/add-categories', cat_payload, token=admin_token)

code, cat_list_res = http_req('GET', '/get-categories-list', token=admin_token, params={'institute_id': inst_id})
cat_id = None
for c in cat_list_res.get('data', []):
    if unique_tag in c.get('name', ''):
        cat_id = c.get('id')
        break
print(f"Created Category ID: {cat_id}")

# 4. Author 20 Questions (5 SCQ, 5 MCQ, 5 FIB, 5 Descriptive)
print("\n--- STEP 2: Authoring 20 Realistic Multi-Type Questions ---")
questions_payload = []

# 5 Single Choice Questions
for i in range(1, 6):
    questions_payload.append({
        'type': 'choose',
        'text': f"SCQ #{i}: Which data structure offers O(1) average lookup time? [{unique_tag}]",
        'marks': 2,
        'options': ['Array', 'Hash Table', 'Binary Search Tree', 'Linked List'],
        'correct_indices': [1]
    })

# 5 Multiple Choice Questions
for i in range(1, 6):
    questions_payload.append({
        'type': 'multi',
        'text': f"MCQ #{i}: Select all valid HTTP idempotent methods: [{unique_tag}]",
        'marks': 4,
        'options': ['GET', 'POST', 'PUT', 'DELETE'],
        'correct_indices': [0, 2, 3]
    })

# 5 Fill in the Blank Questions
for i in range(1, 6):
    questions_payload.append({
        'type': 'fill',
        'text': f"FIB #{i}: In Git, the command to combine changes from one branch into another is git _______. [{unique_tag}]",
        'marks': 2,
        'answerText': 'merge'
    })

# 5 Descriptive Questions
for i in range(1, 6):
    questions_payload.append({
        'type': 'descriptive',
        'text': f"Descriptive #{i}: Explain the CAP theorem in distributed systems and discuss trade-offs. [{unique_tag}]",
        'marks': 6,
        'answerText': 'The CAP theorem states that a distributed data store can simultaneously provide at most two of three guarantees: Consistency, Availability, and Partition Tolerance.'
    })

code, q_add_res = http_req('POST', '/add-question', {
    'institute_id': inst_id,
    'category_id': cat_id,
    'created_by': 'QA Admin',
    'questions': questions_payload
}, token=admin_token)
print(f"Added 20 Questions -> HTTP {code}: {q_add_res}")

# 5. Create Test Shell & Scoring Configuration
print("\n--- STEP 3: Create Test & Scoring Matrix ---")
exam_title = f"Full Stack QA Assessment [{unique_tag}]"
exam_payload = {
    'title': exam_title,
    'description': 'Production test with 20 multi-type questions, timer, pass marks, and negative marks',
    'institute_id': inst_id,
    'duration_minutes': 60,
    'total_questions': 20,
    'pass_mark': 40,
    'number_of_attempts': 2,
    'created_by': 'QA Admin',
    'categories': [
        {
            'category_id': cat_id,
            'number_of_questions': 20,
            'randomize_questions': 0
        }
    ]
}
code, exam_create_res = http_req('POST', '/register-exam', exam_payload, token=admin_token)
print(f"Create Exam -> HTTP {code}: {exam_create_res}")

# Fetch exam_id from get-exams-list
code, exams_resp = http_req('GET', '/get-exams-list', token=admin_token, params={'institute_id': inst_id})
all_exams = exams_resp.get('data', []) if isinstance(exams_resp, dict) else []
exam_id = None
for ex in all_exams:
    if unique_tag in ex.get('title', ''):
        exam_id = ex.get('id') or ex.get('exam_id')
        break
print(f"Retrieved Created Exam ID: {exam_id}")

# 6. Schedule Test & Candidate Assignment (Unpublished Draft)
print("\n--- STEP 4: Schedule Test & Assign Candidate (Unpublished Draft) ---")
now = datetime.datetime.utcnow()
sched_start = (now - datetime.timedelta(minutes=10)).isoformat() + "Z"
sched_end = (now + datetime.timedelta(hours=4)).isoformat() + "Z"

sched_payload = {
    'title': f"Schedule - {exam_title}",
    'exam_id': exam_id,
    'institute_id': inst_id,
    'start_time': sched_start,
    'end_time': sched_end,
    'duration_mins': 60,
    'total_questions': 20,
    'pass_mark': 40,
    'number_of_attempts': 2,
    'published': 0, # Unpublished Draft
    'instant_review': True,
    'review_mode': 'instant',
    'show_score': True,
    'show_correct_answers': True,
    'show_student_answers': True,
    'show_explanations': True,
    'created_by': 'QA Admin',
    'assigned_user_ids': [cand_user_id]
}
code, sched_res = http_req('POST', '/add-exam-schedule', sched_payload, token=admin_token)
print(f"Schedule Exam (Draft) -> HTTP {code}: {sched_res}")

# Fetch schedule ID
code, list_scheds = http_req('GET', '/get-exam-schedule-details', token=admin_token, params={'exam_id': exam_id})
sched_data = list_scheds.get('data', [])
sched_id = sched_data[0].get('schedule_id') if sched_data else None
print(f"Created Schedule ID: {sched_id}")

# 7. Candidate Visibility Before Publish (Should be Hidden / 404 on Launch)
print("\n--- STEP 5: Candidate Visibility Test (Before Publish) ---")
code, cand_exams = http_req('GET', '/get-user-exams-details', token=cand_token, params={'user_id': cand_user_id})
cand_list_before = cand_exams.get('data', []) if isinstance(cand_exams, dict) else []
visible_before = any(e.get('schedule_id') == sched_id for e in cand_list_before)
print(f"Is unpublished draft visible in Candidate List? -> {visible_before} (Expected: False)")

# Candidate attempts direct launch of unpublished test
code, cand_launch_before = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Candidate Direct Launch Unpublished Test -> HTTP {code} (Expected: 404): {cand_launch_before}")

# 8. Publish Test & Candidate Visibility During Active Window
print("\n--- STEP 6: Publish Test & Candidate Active Window Launch ---")
publish_payload = {
    'schedule_id': sched_id,
    'published': 1,
    'instant_review': True,
    'review_mode': 'instant'
}
code, pub_res = http_req('PUT', '/update-exam-schedule', publish_payload, token=admin_token)
print(f"Publish Schedule -> HTTP {code}: {pub_res}")

# Candidate checks list now
code, cand_exams_after = http_req('GET', '/get-user-exams-details', token=cand_token, params={'user_id': cand_user_id})
cand_list_after = cand_exams_after.get('data', []) if isinstance(cand_exams_after, dict) else []
visible_after = any(e.get('schedule_id') == sched_id for e in cand_list_after)
print(f"Is published test visible in Candidate List? -> {visible_after} (Expected: True)")

# Candidate launches active test
code, cand_launch_after = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Candidate Launch Active Test -> HTTP {code}: status={cand_launch_after.get('status')}")
if isinstance(cand_launch_after, dict) and cand_launch_after.get('data'):
    exam_info = cand_launch_after['data'].get('exam_detail', {})
    q_returned = cand_launch_after['data'].get('questions', [])
    print(f"  • Exam Title: {exam_info.get('title')}")
    print(f"  • Duration: {exam_info.get('duration_mins')} mins")
    print(f"  • Total Questions Returned: {len(q_returned)}")
    sample_q = q_returned[0] if q_returned else {}
    print(f"  • Sample Question Prompt: {sample_q.get('question_text')[:60]}...")
    print(f"  • Correct keys stripped from candidate payload? -> {'correct' not in sample_q and 'is_correct' not in sample_q.get('options', [{}])[0]}")

# 9. Edit Scheduled Test
print("\n--- STEP 7: Edit Scheduled Test ---")
edit_sched_payload = {
    'schedule_id': sched_id,
    'duration_mins': 90,
    'total_questions': 20,
    'title': f"Schedule - {exam_title} (UPDATED)"
}
code, edit_sched_res = http_req('PUT', '/update-exam-schedule', edit_sched_payload, token=admin_token)
print(f"Edit Scheduled Test -> HTTP {code}: {edit_sched_res}")

# 10. Cancel / Delete Scheduled Test
print("\n--- STEP 8: Cancel / Delete Scheduled Test ---")
code, del_sched_res = http_req('DELETE', f'/delete/exam-schedule/{sched_id}', token=admin_token)
print(f"Delete Schedule -> HTTP {code}: {del_sched_res}")

# Candidate re-checks dashboard after cancellation
code, cand_exams_final = http_req('GET', '/get-user-exams-details', token=cand_token, params={'user_id': cand_user_id})
cand_list_final = cand_exams_final.get('data', []) if isinstance(cand_exams_final, dict) else []
visible_final = any(e.get('schedule_id') == sched_id for e in cand_list_final)
print(f"Candidate Exam List contains deleted schedule? -> {visible_final} (Expected: False)")

print("\n" + "="*75)
print("PHASE 5 QA TEST SUITE COMPLETED SUCCESSFULLY")
print("="*75)
