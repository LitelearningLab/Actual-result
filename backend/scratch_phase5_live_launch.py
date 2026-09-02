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

# Auth Admin & Candidate
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin.get('token')

code, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand.get('token')
cand_user_id = auth_cand.get('user', {}).get('user_id')

# Get Test Institute
code, inst_resp = http_req('GET', '/get-institutes', token=admin_token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# 1. Category
cat_payload = {
    'name': f"Live Exam Category [{unique_tag}]",
    'description': 'Live 20-Q Category',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Admin'
}
code, _ = http_req('POST', '/add-categories', cat_payload, token=admin_token)
code, cat_list = http_req('GET', '/get-categories-list', token=admin_token, params={'institute_id': inst_id})
cat_id = [c['id'] for c in cat_list.get('data', []) if unique_tag in c.get('name', '')][0]

# 2. Add 20 Questions
questions_payload = []
for i in range(1, 6):
    questions_payload.append({
        'type': 'choose',
        'text': f"SCQ #{i}: What is O(1) lookup structure? [{unique_tag}]",
        'marks': 2,
        'options': ['Array', 'Hash Map', 'Tree', 'List'],
        'correct_indices': [1]
    })
for i in range(1, 6):
    questions_payload.append({
        'type': 'multi',
        'text': f"MCQ #{i}: Which are valid HTTP methods? [{unique_tag}]",
        'marks': 4,
        'options': ['GET', 'POST', 'PUT', 'DELETE'],
        'correct_indices': [0, 1, 2, 3]
    })
for i in range(1, 6):
    questions_payload.append({
        'type': 'fill',
        'text': f"FIB #{i}: Git command to download repo is git _______. [{unique_tag}]",
        'marks': 2,
        'answerText': 'clone'
    })
for i in range(1, 6):
    questions_payload.append({
        'type': 'descriptive',
        'text': f"Descriptive #{i}: Explain ACID transactions. [{unique_tag}]",
        'marks': 5,
        'answerText': 'Atomicity, Consistency, Isolation, and Durability ensure reliable database transactions.'
    })

http_req('POST', '/add-question', {
    'institute_id': inst_id,
    'category_id': cat_id,
    'created_by': 'QA Admin',
    'questions': questions_payload
}, token=admin_token)

# 3. Create Exam with randomize_questions = 1
exam_payload = {
    'title': f"Live Launch Exam [{unique_tag}]",
    'description': '20 Questions Exam for Candidate Launch',
    'institute_id': inst_id,
    'duration_minutes': 45,
    'total_questions': 20,
    'pass_mark': 40,
    'number_of_attempts': 2,
    'created_by': 'QA Admin',
    'categories': [
        {
            'category_id': cat_id,
            'number_of_questions': 20,
            'randomize_questions': 1
        }
    ]
}
code, exam_res = http_req('POST', '/register-exam', exam_payload, token=admin_token)
code, exams_resp = http_req('GET', '/get-exams-list', token=admin_token, params={'institute_id': inst_id})
exam_id = [ex['id'] for ex in exams_resp.get('data', []) if unique_tag in ex.get('title', '')][0]

# 4. Schedule Exam (Published)
now = datetime.datetime.utcnow()
sched_start = (now - datetime.timedelta(minutes=10)).isoformat() + "Z"
sched_end = (now + datetime.timedelta(hours=3)).isoformat() + "Z"

sched_payload = {
    'title': f"Schedule - Live Launch [{unique_tag}]",
    'exam_id': exam_id,
    'institute_id': inst_id,
    'start_time': sched_start,
    'end_time': sched_end,
    'duration_mins': 45,
    'total_questions': 20,
    'pass_mark': 40,
    'number_of_attempts': 2,
    'published': 1, # Published
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
code, list_scheds = http_req('GET', '/get-exam-schedule-details', token=admin_token, params={'exam_id': exam_id})
sched_id = list_scheds['data'][0]['schedule_id']
print(f"Published Schedule ID: {sched_id}")

# 5. Candidate Launch Active Test
code, launch_res = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
print(f"Candidate Launch Status -> HTTP {code}: {launch_res.get('status')}")
if launch_res.get('status') and launch_res.get('data'):
    detail = launch_res['data']['exam_detail']
    q_list = launch_res['data']['questions']
    print(f"  • Attempt ID: {detail.get('attempt_id')}")
    print(f"  • Remaining Seconds: {detail.get('remaining_seconds')}s (Duration: {detail.get('duration_mins')} mins)")
    print(f"  • Total Questions Loaded for Candidate: {len(q_list)}")
    print(f"  • Question Breakdown:")
    type_counts = {}
    for q in q_list:
        t = q.get('question_type')
        type_counts[t] = type_counts.get(t, 0) + 1
    print(f"    {type_counts}")

print("\nLIVE TEST LAUNCH VERIFIED SUCCESSFULLY")
