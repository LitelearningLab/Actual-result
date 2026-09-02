import urllib.request
import urllib.error
import json
import uuid
import datetime
import time

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
print("PHASE 6 — CANDIDATE EXAMINATION & AUTOSAVE QA SUITE")
print("="*75)

# Step 0: Auth Admin & Candidate
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin['token']

code, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand['token']
cand_user_id = auth_cand['user']['user_id']
print(f"[Auth] Candidate logged in: michael (User ID: {cand_user_id})")

# Fetch Institute
code, inst_resp = http_req('GET', '/get-institutes', token=admin_token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# 1. Setup Question Bank Category & 20 Questions
print("\n--- SETUP: Authoring Test and 20 Questions ---")
cat_payload = {
    'name': f"Candidate Exam Category [{unique_tag}]",
    'description': 'Category for Candidate Exam QA',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Admin'
}
http_req('POST', '/add-categories', cat_payload, token=admin_token)
_, cat_list = http_req('GET', '/get-categories-list', token=admin_token, params={'institute_id': inst_id})
cat_id = [c['id'] for c in cat_list['data'] if unique_tag in c['name']][0]

# Add 20 Questions
qs = []
for i in range(1, 6):
    qs.append({'type': 'choose', 'text': f"SCQ #{i}: Which sorting algorithm has best average time complexity? [{unique_tag}]", 'marks': 2, 'options': ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'], 'correct_indices': [1]})
for i in range(1, 6):
    qs.append({'type': 'multi', 'text': f"MCQ #{i}: Select all cloud computing service models: [{unique_tag}]", 'marks': 4, 'options': ['IaaS', 'PaaS', 'SaaS', 'HaaS'], 'correct_indices': [0, 1, 2]})
for i in range(1, 6):
    qs.append({'type': 'fill', 'text': f"FIB #{i}: The protocol used to securely browse web pages is _______. [{unique_tag}]", 'marks': 2, 'answerText': 'HTTPS'})
for i in range(1, 6):
    qs.append({'type': 'descriptive', 'text': f"Descriptive #{i}: Explain how DNS resolution works step-by-step. [{unique_tag}]", 'marks': 5, 'answerText': 'DNS resolution translates human-readable domain names into IP addresses through recursive query across Root, TLD, and Authoritative nameservers.'})

http_req('POST', '/add-question', {'institute_id': inst_id, 'category_id': cat_id, 'created_by': 'Admin', 'questions': qs}, token=admin_token)

# Create Exam (with 2 attempts allowed)
exam_data = {
    'title': f"Student Exam [{unique_tag}]",
    'institute_id': inst_id,
    'duration_minutes': 30,
    'total_questions': 20,
    'pass_mark': 40,
    'number_of_attempts': 2,
    'categories': [{'category_id': cat_id, 'questions': 20, 'randomize_questions': 1}]
}
http_req('POST', '/register-exam', exam_data, token=admin_token)
_, exams_resp = http_req('GET', '/get-exams-list', token=admin_token, params={'institute_id': inst_id})
exam_id = [e['id'] for e in exams_resp['data'] if unique_tag in e['title']][0]

# Schedule Exam (Published)
now = datetime.datetime.utcnow()
sched_data = {
    'title': f"Live Exam Schedule [{unique_tag}]",
    'exam_id': exam_id,
    'institute_id': inst_id,
    'start_time': (now - datetime.timedelta(minutes=5)).isoformat() + 'Z',
    'end_time': (now + datetime.timedelta(hours=2)).isoformat() + 'Z',
    'duration_mins': 30,
    'total_questions': 20,
    'number_of_attempts': 2,
    'published': 1,
    'instant_review': True,
    'review_mode': 'instant',
    'show_score': True,
    'show_correct_answers': True,
    'show_student_answers': True,
    'show_explanations': True,
    'assigned_user_ids': [cand_user_id]
}
http_req('POST', '/add-exam-schedule', sched_data, token=admin_token)
_, scheds_resp = http_req('GET', '/get-exam-schedule-details', token=admin_token, params={'exam_id': exam_id})
sched_id = scheds_resp['data'][0]['schedule_id']
print(f"Exam & Schedule Setup Complete (Schedule ID: {sched_id})")

# =========================================================================
# CANDIDATE ACTIONS & REAL STUDENT TEST EXECUTION
# =========================================================================

# Step 1: Candidate Views Assigned Test
print("\n--- TEST 1: Candidate Dashboard & Upcoming Exam List ---")
code, user_exams = http_req('GET', '/get-user-exams-details', token=cand_token, params={'user_id': cand_user_id})
print(f"Fetch Candidate Exams -> HTTP {code} | Assigned count: {len(user_exams.get('data', [])) if isinstance(user_exams, dict) else 0}")

# Step 2: Start Test (Launch Attempt #1)
print("\n--- TEST 2: Start Test & Launch Attempt #1 ---")
code, launch_data = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Launch Test -> HTTP {code} | Status: {launch_data.get('status')}")

exam_detail = launch_data['data']['exam_detail']
questions = launch_data['data']['questions']
attempt_id = exam_detail['attempt_id']
rem_sec = exam_detail['remaining_seconds']
print(f"Attempt ID: {attempt_id} | Remaining Time: {rem_sec}s | Questions Count: {len(questions)}")

# Step 3: Answer Multi-Type Questions
print("\n--- TEST 3: Candidate Answering Questions ---")
answers_payload = {}

for idx, q in enumerate(questions):
    qid = str(q['question_id'])
    qtype = q['question_type']
    opts = q.get('options', [])
    
    if qtype == 'choose' and opts:
        # Select first option
        answers_payload[qid] = opts[0]['id']
    elif qtype == 'multi' and len(opts) >= 2:
        # Select first two options
        answers_payload[qid] = [opts[0]['id'], opts[1]['id']]
    elif qtype == 'fill':
        answers_payload[qid] = 'HTTPS'
    elif qtype == 'descriptive':
        answers_payload[qid] = 'DNS resolution translates human-readable domain names into IP addresses via recursive query across Root, TLD, and Authoritative servers.'

# Step 4: Auto-Save Test (Partial - 10 questions)
print("\n--- TEST 4: Auto-Save Mechanism (10 questions saved) ---")
partial_answers = dict(list(answers_payload.items())[:10])
autosave_req = {
    'attempt_id': attempt_id,
    'answers': partial_answers,
    'remaining_seconds': rem_sec - 60
}
code, autosave_res = http_req('POST', '/autosave-exam', autosave_req, token=cand_token)
print(f"Autosave 10 Questions -> HTTP {code}: {autosave_res}")

# Step 5: Simulate Browser Refresh / Navigate Away & Return
print("\n--- TEST 5: Browser Refresh / Resume Test Session ---")
code, resume_data = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Resume Exam -> HTTP {code} | Same Attempt ID: {resume_data['data']['exam_detail']['attempt_id'] == attempt_id}")
saved_answers_restored = resume_data['data']['exam_detail']['saved_answers']
print(f"Restored Saved Answers Count: {len(saved_answers_restored)} (Expected: 10)")
print(f"Restored Remaining Time: {resume_data['data']['exam_detail']['remaining_seconds']}s")

# Step 6: Autosave Remaining Answers (Simulating completing the test)
print("\n--- TEST 6: Auto-Save All Answers (Full Test) ---")
autosave_full = {
    'attempt_id': attempt_id,
    'answers': answers_payload,
    'remaining_seconds': rem_sec - 180
}
code, autosave_full_res = http_req('POST', '/autosave-exam', autosave_full, token=cand_token)
print(f"Autosave Full Test -> HTTP {code}: {autosave_full_res}")

# Step 7: Submit Test
print("\n--- TEST 7: Submit Test (Final Submission) ---")
submit_payload = {
    'schedule_id': sched_id,
    'user_id': cand_user_id,
    'attempt_id': attempt_id,
    'answers': answers_payload,
    'time_taken_mins': 5
}
code, submit_res = http_req('POST', '/submit-exam', submit_payload, token=cand_token)
print(f"Submit Test -> HTTP {code}: {submit_res}")

# Step 8: Double-Click / Duplicate Submit Test (Negative Scenario)
print("\n--- TEST 8: Double-Click / Replay Submit Test ---")
code, double_submit_res = http_req('POST', '/submit-exam', submit_payload, token=cand_token)
print(f"Duplicate Submit -> HTTP {code}: {double_submit_res}")

# Step 9: Autosave on Finalized Attempt (Negative Scenario)
print("\n--- TEST 9: Auto-Save on Finalized Attempt (Expect 409) ---")
code, post_sub_save = http_req('POST', '/autosave-exam', autosave_full, token=cand_token)
print(f"Autosave After Submit -> HTTP {code} (Expected: 409): {post_sub_save}")

# Step 10: Attempt Test Twice (Retake Attempt #2)
print("\n--- TEST 10: Retake / Attempt #2 Launch ---")
code, launch_att2 = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Launch Attempt #2 -> HTTP {code} | Status: {launch_att2.get('status')}")
if launch_att2.get('status') and launch_att2.get('data'):
    att2_detail = launch_att2['data']['exam_detail']
    att2_id = att2_detail['attempt_id']
    print(f"Attempt #2 ID: {att2_id} (Distinct from Attempt #1: {att2_id != attempt_id})")

    # Submit Attempt #2
    submit_att2 = {
        'schedule_id': sched_id,
        'user_id': cand_user_id,
        'attempt_id': att2_id,
        'answers': {}, # Submit with unanswered questions
        'time_taken_mins': 2
    }
    code, sub2_res = http_req('POST', '/submit-exam', submit_att2, token=cand_token)
    print(f"Submit Attempt #2 (Blank) -> HTTP {code}: {sub2_res}")

# Step 11: Attempt Test After Max Attempts (Attempt #3 - Limit Exceeded)
print("\n--- TEST 11: Attempt Test After Max Attempts (3rd Attempt on 2-Attempt Limit) ---")
code, launch_att3 = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Launch Attempt #3 (Limit is 2) -> HTTP {code}: {launch_att3}")

print("\n" + "="*75)
print("PHASE 6 CANDIDATE EXAM QA SUITE COMPLETED")
print("="*75)
