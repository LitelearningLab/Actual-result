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
print("PHASE 7 — EVALUATION & RESULTS AUTOMATED QA SUITE")
print("="*75)

# 1. Auth Admin & Candidate
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin['token']
admin_user_id = auth_admin['user']['user_id']

code, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand['token']
cand_user_id = auth_cand['user']['user_id']
print(f"[Auth] Admin & Candidate Authenticated")

# Fetch Institute
code, inst_resp = http_req('GET', '/get-institutes', token=admin_token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# 2. Author a Controlled Test with Known Question Properties:
# - Q1: SCQ (2 marks) -> We will answer CORRECT
# - Q2: SCQ (2 marks) -> We will answer INCORRECT
# - Q3: MCQ (4 marks) -> We will answer CORRECT (all true options)
# - Q4: MCQ (4 marks) -> We will answer PARTIAL/INCORRECT
# - Q5: FIB (2 marks) -> We will answer CORRECT ("python")
# - Q6: FIB (2 marks) -> We will answer INCORRECT ("java")
# - Q7: FIB (2 marks) -> UNANSWERED
# - Q8: Descriptive (5 marks) -> High-quality comprehensive answer (Expect AI high score)
# - Q9: Descriptive (5 marks) -> Incomplete / partial answer (Expect AI partial score)
# - Q10: Descriptive (5 marks) -> Irrelevant / garbage answer (Expect AI 0 score)
# Total Maximum Marks = 2 + 2 + 4 + 4 + 2 + 2 + 2 + 5 + 5 + 5 = 33 marks.

print("\n--- STEP 1: Creating Evaluation Test Shell & Questions ---")
cat_payload = {
    'name': f"Eval Bank [{unique_tag}]",
    'description': 'Category for Evaluation QA',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Admin'
}
http_req('POST', '/add-categories', cat_payload, token=admin_token)
_, cat_list = http_req('GET', '/get-categories-list', token=admin_token, params={'institute_id': inst_id})
cat_id = [c['id'] for c in cat_list['data'] if unique_tag in c['name']][0]

questions_payload = [
    # Q1: SCQ (Correct target)
    {'type': 'choose', 'text': f"SCQ-1: What is 2 + 2? [{unique_tag}]", 'marks': 2, 'options': ['3', '4', '5', '6'], 'correct_indices': [1]},
    # Q2: SCQ (Incorrect target)
    {'type': 'choose', 'text': f"SCQ-2: What is the capital of France? [{unique_tag}]", 'marks': 2, 'options': ['London', 'Berlin', 'Paris', 'Madrid'], 'correct_indices': [2]},
    # Q3: MCQ (Correct target)
    {'type': 'multi', 'text': f"MCQ-1: Select all prime numbers: [{unique_tag}]", 'marks': 4, 'options': ['2', '3', '4', '5'], 'correct_indices': [0, 1, 3]},
    # Q4: MCQ (Incorrect target)
    {'type': 'multi', 'text': f"MCQ-2: Select all secondary storage devices: [{unique_tag}]", 'marks': 4, 'options': ['HDD', 'RAM', 'SSD', 'Cache'], 'correct_indices': [0, 2]},
    # Q5: FIB (Correct target)
    {'type': 'fill', 'text': f"FIB-1: The creator of _______ was Guido van Rossum. [{unique_tag}]", 'marks': 2, 'answerText': 'Python'},
    # Q6: FIB (Incorrect target)
    {'type': 'fill', 'text': f"FIB-2: The keyword to define a function in Python is _______. [{unique_tag}]", 'marks': 2, 'answerText': 'def'},
    # Q7: FIB (Unanswered target)
    {'type': 'fill', 'text': f"FIB-3: SQL stands for _______ Query Language. [{unique_tag}]", 'marks': 2, 'answerText': 'Structured'},
    # Q8: Descriptive (Strong answer)
    {'type': 'descriptive', 'text': f"DESC-1: Explain the purpose of indexing in relational databases and its performance impact. [{unique_tag}]", 'marks': 5, 'answerText': 'An index in a relational database is a data structure (such as B-Tree) that improves data retrieval speed on specific columns by avoiding full table scans, at the cost of additional storage and slower write operations.'},
    # Q9: Descriptive (Partial answer)
    {'type': 'descriptive', 'text': f"DESC-2: Describe the three main principles of Object-Oriented Programming: Encapsulation, Inheritance, and Polymorphism. [{unique_tag}]", 'marks': 5, 'answerText': 'Encapsulation bundles data and methods while restricting direct access; Inheritance enables child classes to inherit attributes from parents; Polymorphism allows methods to behave differently based on the object.'},
    # Q10: Descriptive (Irrelevant answer)
    {'type': 'descriptive', 'text': f"DESC-3: Explain how TCP 3-way handshake establishes a connection. [{unique_tag}]", 'marks': 5, 'answerText': 'TCP uses SYN, SYN-ACK, and ACK packets exchanged between client and server to synchronize sequence numbers and establish a reliable transport connection.'}
]

http_req('POST', '/add-question', {
    'institute_id': inst_id,
    'category_id': cat_id,
    'created_by': 'QA Admin',
    'questions': questions_payload
}, token=admin_token)

# Create Exam
exam_payload = {
    'title': f"Evaluation Exam [{unique_tag}]",
    'description': 'Exam for testing objective, AI, and manual grading pipelines',
    'institute_id': inst_id,
    'duration_minutes': 30,
    'total_questions': 10,
    'pass_mark': 50, # 50% cutoff
    'number_of_attempts': 1,
    'created_by': 'QA Admin',
    'categories': [{'category_id': cat_id, 'questions': 10, 'randomize_questions': 0}]
}
http_req('POST', '/register-exam', exam_payload, token=admin_token)
_, exams_resp = http_req('GET', '/get-exams-list', token=admin_token, params={'institute_id': inst_id})
exam_id = [e['id'] for e in exams_resp['data'] if unique_tag in e['title']][0]

# Schedule Exam (Instant Review Mode enabled)
now = datetime.datetime.utcnow()
sched_payload = {
    'title': f"Schedule - Eval [{unique_tag}]",
    'exam_id': exam_id,
    'institute_id': inst_id,
    'start_time': (now - datetime.timedelta(minutes=5)).isoformat() + 'Z',
    'end_time': (now + datetime.timedelta(hours=2)).isoformat() + 'Z',
    'duration_mins': 30,
    'total_questions': 10,
    'pass_mark': 50,
    'published': 1,
    'instant_review': True,
    'review_mode': 'instant',
    'show_score': True,
    'show_correct_answers': True,
    'show_student_answers': True,
    'show_explanations': True,
    'assigned_user_ids': [cand_user_id]
}
http_req('POST', '/add-exam-schedule', sched_payload, token=admin_token)
_, scheds_resp = http_req('GET', '/get-exam-schedule-details', token=admin_token, params={'exam_id': exam_id})
sched_id = scheds_resp['data'][0]['schedule_id']
print(f"Schedule configured with Instant Review (Schedule ID: {sched_id})")

# 3. Candidate Launches and Answers
print("\n--- STEP 2: Candidate Launch and Submit Test ---")
code, launch_res = http_req('GET', '/launch-exam', token=cand_token, params={'schedule_id': sched_id, 'user_id': cand_user_id})
attempt_id = launch_res['data']['exam_detail']['attempt_id']
questions = launch_res['data']['questions']
print(f"Launched Exam (Attempt ID: {attempt_id}, Questions: {len(questions)})")

# Map questions by prefix
candidate_answers = {}
for q in questions:
    qid = str(q['question_id'])
    text = q['question_text']
    opts = q.get('options', [])
    
    if "SCQ-1" in text:
        # Correct: option '4'
        opt_correct = [o['id'] for o in opts if o['text'] == '4'][0]
        candidate_answers[qid] = opt_correct
    elif "SCQ-2" in text:
        # Incorrect: choose 'London' instead of Paris
        opt_wrong = [o['id'] for o in opts if o['text'] == 'London'][0]
        candidate_answers[qid] = opt_wrong
    elif "MCQ-1" in text:
        # Correct: options '2', '3', '5'
        correct_opts = [o['id'] for o in opts if o['text'] in ['2', '3', '5']]
        candidate_answers[qid] = correct_opts
    elif "MCQ-2" in text:
        # Incorrect: chose 'RAM' (wrong) and 'HDD' (partial)
        wrong_opts = [o['id'] for o in opts if o['text'] in ['HDD', 'RAM']]
        candidate_answers[qid] = wrong_opts
    elif "FIB-1" in text:
        # Correct: "Python"
        candidate_answers[qid] = 'Python'
    elif "FIB-2" in text:
        # Incorrect: "function" instead of "def"
        candidate_answers[qid] = 'function'
    elif "FIB-3" in text:
        # Leave Unanswered! (Omit from answers payload)
        pass
    elif "DESC-1" in text:
        # Strong Answer
        candidate_answers[qid] = 'Indexes use B-Trees to allow rapid O(log N) lookup on indexed columns avoiding full sequential table scans. However, they introduce overhead on INSERT, UPDATE, and DELETE operations.'
    elif "DESC-2" in text:
        # Incomplete / Partial Answer
        candidate_answers[qid] = 'OOP has inheritance which lets classes inherit properties, and encapsulation which hides details.'
    elif "DESC-3" in text:
        # Completely Irrelevant / Garbage Answer
        candidate_answers[qid] = 'I enjoy cooking pasta with tomato sauce on weekends.'

# Submit Exam
print("\n--- STEP 3: Submitting Exam and Triggering Automated Evaluation Pipeline ---")
submit_payload = {
    'schedule_id': sched_id,
    'user_id': cand_user_id,
    'attempt_id': attempt_id,
    'answers': candidate_answers,
    'time_taken_mins': 10
}
code, submit_res = http_req('POST', '/submit-exam', submit_payload, token=cand_token)
print(f"Submit Exam -> HTTP {code}: {submit_res}")

# 4. Fetch Result / Review as Candidate & Admin
print("\n--- STEP 4: Reviewing Evaluated Results & Scoring ---")
code, review_res = http_req('GET', '/review-exam', token=cand_token, params={'user_id': cand_user_id, 'schedule_id': sched_id, 'attempt_id': attempt_id})
print(f"Fetch Review -> HTTP {code}: status={review_res.get('status')}")

review_data = review_res['data']['review'][0] if review_res.get('status') and review_res.get('data', {}).get('review') else {}
print(f"\n[CANDIDATE RESULT SUMMARY]")
print(f"  • Total Score: {review_data.get('score')} / {review_data.get('total_marks')}")
print(f"  • Percentage: {review_data.get('percentage')}%")
print(f"  • Result Status: {review_data.get('result')}")
print(f"  • Evaluation Status: {review_data.get('status')}")

print("\n[QUESTION-BY-QUESTION BREAKDOWN]")
items = review_data.get('review', [])
desc_question_for_override = None
for it in items:
    qtext = it.get('question_text', '')[:40]
    qtype = it.get('question_type')
    awarded = it.get('marks_awarded')
    max_m = it.get('marks')
    is_corr = it.get('is_correct')
    ai_conf = it.get('ai_confidence')
    fb = str(it.get('feedback', ''))[:50]
    print(f"  • [{qtype.upper()}] '{qtext}...' -> Marks: {awarded}/{max_m} | Correct: {is_corr} | AI Conf: {ai_conf} | Feedback: {fb}")
    if qtype == 'descriptive' and 'DESC-2' in it.get('question_text', ''):
        desc_question_for_override = it

# 5. Manual Review / Instructor Override Test
print("\n--- STEP 5: Instructor Manual Review & Score Override ---")
if desc_question_for_override:
    override_qid = desc_question_for_override.get('question_id')
    old_marks = desc_question_for_override.get('marks_awarded')
    new_marks = 4.5
    print(f"Target Descriptive Question: ID={override_qid} | Current AI Marks={old_marks}")
    
    override_payload = {
        'attempt_id': attempt_id,
        'question_id': override_qid,
        'schedule_id': sched_id,
        'user_id': cand_user_id,
        'marks_awarded': new_marks,
        'edit_reason': 'Instructor review: Student demonstrated solid understanding of core concepts despite omitting polymorphism details.',
        'updated_by': admin_user_id
    }
    code, override_res = http_req('PUT', '/update/descriptive-marks', override_payload, token=admin_token)
    print(f"Manual Override -> HTTP {code}: {override_res}")
    
    # Re-fetch candidate review to verify score update and recalculation
    code, review_after_override = http_req('GET', '/review-exam', token=cand_token, params={'user_id': cand_user_id, 'schedule_id': sched_id, 'attempt_id': attempt_id})
    rev_after = review_after_override['data']['review'][0]
    print(f"\n[RESULT AFTER MANUAL OVERRIDE]")
    print(f"  • Updated Total Score: {rev_after.get('score')} / {rev_after.get('total_marks')}")
    print(f"  • Updated Percentage: {rev_after.get('percentage')}%")
    print(f"  • Updated Result Status: {rev_after.get('result')}")
    
    # Check specific question
    updated_q = [q for q in rev_after.get('review', []) if q.get('question_id') == override_qid][0]
    print(f"  • Overridden Question Awarded Marks: {updated_q.get('marks_awarded')} (Expected: {new_marks})")

print("\n" + "="*75)
print("PHASE 7 EVALUATION & RESULTS QA SUITE COMPLETED")
print("="*75)
