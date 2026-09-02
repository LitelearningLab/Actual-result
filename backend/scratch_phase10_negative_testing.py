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
print("PHASE 10 — DELIBERATE NEGATIVE & STRESS TESTING SUITE")
print("="*75)

# Authenticate Admin and Candidate
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin['token']
admin_user_id = auth_admin['user']['user_id']

code, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand['token']
cand_user_id = auth_cand['user']['user_id']

# -------------------------------------------------------------------------
# TEST GROUP 1: BOUNDARY, BUFFER & PAYLOAD FUZZING
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 1: Boundary, Buffer & Payload Fuzzing ---")

# 1.1 Extremely Long String (50,000 characters) in Category Name
long_string = "A" * 50000
code, res = http_req('POST', '/add-categories', {
    'name': long_string,
    'institute_id': str(uuid.uuid4()),
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2
}, token=admin_token)
print(f"1.1 50KB Category Name Payload -> HTTP {code}: {str(res)[:70]}...")

# 1.2 SQL Injection & XSS in Question Text
xss_sql_payload = "<script>alert('XSS')</script>'; DROP TABLE Questions; -- 🚀🔥"
code, res = http_req('POST', '/add-question', {
    'institute_id': str(uuid.uuid4()),
    'category_id': str(uuid.uuid4()),
    'questions': [{
        'type': 'choose',
        'text': xss_sql_payload,
        'marks': 2,
        'options': ['Option 1', 'Option 2'],
        'correct_indices': [0]
    }]
}, token=admin_token)
print(f"1.2 XSS / SQL Injection in Question Text -> HTTP {code}: {str(res)[:70]}...")

# 1.3 Negative and Massive Numbers for Marks & Timer
code, res = http_req('POST', '/register-exam', {
    'title': 'Negative Marks Exam',
    'institute_id': str(uuid.uuid4()),
    'duration_minutes': -9999,
    'total_questions': -50,
    'pass_mark': 99999999999999999999,
    'number_of_attempts': -5,
    'categories': []
}, token=admin_token)
print(f"1.3 Negative Timer & Huge Pass Marks -> HTTP {code}: {str(res)[:70]}...")

# -------------------------------------------------------------------------
# TEST GROUP 2: INVALID IDS & MISSING REFERENCES
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 2: Invalid IDs & Missing References ---")

# 2.1 Malformed (Non-UUID) string as schedule_id in /launch-exam
code, res = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': 'malformed-not-a-uuid-12345', 'user_id': cand_user_id})
print(f"2.1 Malformed schedule_id on /launch-exam -> HTTP {code}: {str(res)[:70]}...")

# 2.2 Random Non-Existent UUID in /review-user-exam
code, res = http_req('GET', '/review-user-exam', token=cand_token, params={
    'user_id': cand_user_id,
    'schedule_id': str(uuid.uuid4()),
    'attempt_id': str(uuid.uuid4())
})
print(f"2.2 Non-Existent UUID on /review-user-exam -> HTTP {code}: {str(res)[:70]}...")

# 2.3 Non-Existent Attempt Validation
code, res = http_req('POST', f'/validate-answers/{str(uuid.uuid4())}', token=admin_token)
print(f"2.3 Validate Non-Existent Attempt -> HTTP {code}: {str(res)[:70]}...")

# -------------------------------------------------------------------------
# TEST GROUP 3: DATE & TIME CORRUPTIONS
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 3: Date & Time Corruptions ---")

# 3.1 Inverted Dates (start_time after end_time)
now = datetime.datetime.utcnow()
code, res = http_req('POST', '/add-exam-schedule', {
    'title': 'Inverted Date Schedule',
    'exam_id': str(uuid.uuid4()),
    'institute_id': str(uuid.uuid4()),
    'start_time': (now + datetime.timedelta(days=10)).isoformat() + "Z",
    'end_time': (now - datetime.timedelta(days=10)).isoformat() + "Z", # End is 20 days BEFORE start!
    'duration_mins': 30,
    'published': 1
}, token=admin_token)
print(f"3.1 Inverted Schedule Dates -> HTTP {code}: {str(res)[:70]}...")

# 3.2 Garbage Date String
code, res = http_req('POST', '/add-exam-schedule', {
    'title': 'Garbage Date Schedule',
    'exam_id': str(uuid.uuid4()),
    'institute_id': str(uuid.uuid4()),
    'start_time': 'NOT-A-VALID-DATE-TIME',
    'end_time': '2026-99-99T99:99:99Z',
    'duration_mins': 30,
    'published': 1
}, token=admin_token)
print(f"3.2 Garbage Date Strings -> HTTP {code}: {str(res)[:70]}...")

# -------------------------------------------------------------------------
# TEST GROUP 4: AUTHENTICATION & PERMISSION ATTACKS
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 4: Authentication & Security Vectors ---")

# 4.1 Missing Authorization Header
code, res = http_req('GET', '/get-institutes', token=None)
print(f"4.1 Request with Missing Authorization Header -> HTTP {code}: {str(res)[:70]}...")

# 4.2 Forged / Tampered JWT Token
tampered_token = admin_token[:-10] + "tampered00"
code, res = http_req('GET', '/get-institutes', token=tampered_token)
print(f"4.2 Forged / Tampered Signature JWT -> HTTP {code}: {str(res)[:70]}...")

# 4.3 Privilege Escalation: Candidate updating descriptive marks
code, res = http_req('POST', '/update-descriptive-marks', {
    'attempt_id': str(uuid.uuid4()),
    'question_id': str(uuid.uuid4()),
    'marks_awarded': 100,
    'edit_reason': 'Hacked score by student'
}, token=cand_token)
print(f"4.3 Candidate Calling Admin Mark Override -> HTTP {code}: {str(res)[:70]}...")

# -------------------------------------------------------------------------
# TEST GROUP 5: AUTOSAVE & SUBMISSION STRESS
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 5: Autosave & Submission Stress ---")

# 5.1 Empty / Null Payload to /submit-exam
code, res = http_req('POST', '/submit-exam', {}, token=cand_token)
print(f"5.1 Empty Payload Submit -> HTTP {code}: {str(res)[:70]}...")

# 5.2 Negative Remaining Seconds on Autosave
code, res = http_req('POST', '/autosave-exam', {
    'attempt_id': str(uuid.uuid4()),
    'answers': {},
    'remaining_seconds': -999999
}, token=cand_token)
print(f"5.2 Negative Remaining Seconds Autosave -> HTTP {code}: {str(res)[:70]}...")

# -------------------------------------------------------------------------
# TEST GROUP 6: AI ENGINE EDGE CASES & FAULT INJECTION
# -------------------------------------------------------------------------
print("\n--- TEST GROUP 6: AI Engine Edge Cases ---")

# 6.1 Generate Questions with Empty / Whitespace Topic
code, res = http_req('POST', '/create-questions-llm', {
    'content': '   ',
    'type': 'choose',
    'number_of_questions': 3,
    'level': 'easy'
}, token=admin_token)
print(f"6.1 AI Generation with Empty Topic -> HTTP {code}: {str(res)[:70]}...")

# 6.2 Fine-tune Question with Missing ID / Payload
code, res = http_req('POST', '/fine-tune-questions-llm', {}, token=admin_token)
print(f"6.2 AI Fine-Tuning with Empty Payload -> HTTP {code}: {str(res)[:70]}...")

print("\n" + "="*75)
print("PHASE 10 NEGATIVE TESTING COMPLETED")
print("="*75)
