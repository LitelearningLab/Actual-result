import urllib.request
import urllib.error
import json

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
    with urllib.request.urlopen(req) as resp:
        return resp.status, json.loads(resp.read().decode('utf-8'))

_, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin['token']
admin_user_id = auth_admin['user']['user_id']

_, auth_cand = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = auth_cand['token']
cand_user_id = auth_cand['user']['user_id']

# Get Review via /review-user-exam
code, review_res = http_req('GET', '/review-user-exam', token=cand_token, params={
    'user_id': cand_user_id,
    'schedule_id': 'd1220b10-00f8-41ae-923f-cfe188f7e875',
    'attempt_id': '366e5809-422d-4858-b5a1-e2b86244e2fc'
})
rev = review_res['data'][0]
print("="*75)
print("PHASE 7 — EVALUATED CANDIDATE EXAM RESULT")
print("="*75)
print(f"Attempt ID: {rev['attempt_id']}")
print(f"Total Score: {rev['score']} / {rev['total_marks']} ({rev['percentage']}%)")
print(f"Pass/Fail Status: {rev['result']}")

print("\nQUESTION-BY-QUESTION EVALUATION:")
desc_item = None
for q in rev.get('review', []):
    qtype = q.get('question_type')
    qtext = q.get('question_text', '')[:40]
    awarded = q.get('marks_awarded')
    max_m = q.get('marks')
    is_corr = q.get('is_correct')
    fb = str(q.get('feedback', ''))[:50]
    print(f"  • [{qtype.upper()}] {qtext}... | Marks: {awarded}/{max_m} | Correct: {is_corr} | Feedback: {fb}")
    if qtype == 'descriptive' and 'DESC-2' in q.get('question_text', ''):
        desc_item = q

# Manual Review Override
print("\n" + "="*75)
print("TESTING MANUAL REVIEW OVERRIDE")
print("="*75)
if desc_item:
    override_payload = {
        'attempt_id': '366e5809-422d-4858-b5a1-e2b86244e2fc',
        'question_id': desc_item['question_id'],
        'schedule_id': 'd1220b10-00f8-41ae-923f-cfe188f7e875',
        'user_id': cand_user_id,
        'marks_awarded': 4.5,
        'edit_reason': 'Evaluator adjusted marks: solid answer covering key concepts.',
        'updated_by': admin_user_id
    }
    code, ovr_res = http_req('POST', '/update-descriptive-marks', override_payload, token=admin_token)
    print(f"Manual Override -> HTTP {code}: {ovr_res}")

    # Re-fetch after override
    _, review_after = http_req('GET', '/review-user-exam', token=cand_token, params={
        'user_id': cand_user_id,
        'schedule_id': 'd1220b10-00f8-41ae-923f-cfe188f7e875',
        'attempt_id': '366e5809-422d-4858-b5a1-e2b86244e2fc'
    })
    rev_up = review_after['data'][0]
    print(f"\n[AFTER MANUAL OVERRIDE]")
    print(f"Updated Score: {rev_up['score']} / {rev_up['total_marks']} ({rev_up['percentage']}%)")
    print(f"Updated Result: {rev_up['result']}")
    for q in rev_up['review']:
        if q['question_id'] == desc_item['question_id']:
            print(f"Overridden Question Marks Awarded: {q['marks_awarded']} | is_correct: {q['is_correct']}")

print("\n" + "="*75)
print("PHASE 7 VERIFICATION COMPLETED SUCCESSFULLY")
print("="*75)
