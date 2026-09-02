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
print("PHASE 8 — ANALYTICS & MISCONCEPTION ANALYSIS QA SUITE")
print("="*75)

# 1. Auth Admin
code, auth_admin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
admin_token = auth_admin['token']
print(f"[Auth] Admin authenticated")

# Fetch latest schedule from previous phase
code, scheds = http_req('GET', '/get-exam-schedule-details', token=admin_token)
all_scheds = scheds.get('data', [])
if not all_scheds:
    print("No schedules found")
    exit(1)

# Pick schedule with completed evaluation (from Phase 7)
test_sched = None
for s in all_scheds:
    if 'Eval [' in s.get('title', ''):
        test_sched = s
        break
if not test_sched:
    test_sched = all_scheds[0]

sched_id = test_sched.get('schedule_id')
exam_id = test_sched.get('exam_id')
print(f"Target Schedule for Analytics: '{test_sched.get('title')}' (Schedule ID: {sched_id})")

# 2. Class Analytics & Aggregated Question Performance
print("\n--- TEST 1: Class Analytics & Aggregated Statistics ---")
code, analytics_res = http_req('GET', '/get-exam-analytics', token=admin_token, params={'schedule_id': sched_id})
print(f"Fetch Exam Analytics -> HTTP {code}: status={analytics_res.get('status')}")

if analytics_res.get('status') and analytics_res.get('data'):
    adata = analytics_res['data']
    print(f"  • Participant Count: {adata.get('participant_count')}")
    print(f"  • Total Questions Analyzed: {len(adata.get('question_summary', []))}")
    print(f"  • Categories Mapped: {len(adata.get('category_summary', []))}")
    
    print("\n[QUESTION PERFORMANCE & ERROR DISTRIBUTION]")
    sample_q_with_errors = None
    desc_q_with_errors = None
    for q in adata.get('question_summary', []):
        sno = q.get('sno')
        qtype = q.get('question_type')
        qtxt = q.get('question_text', '')[:35]
        attempts = q.get('attempts')
        mistakes = q.get('mistakes')
        err_pct = q.get('error_percentage')
        print(f"  • Q{sno} [{qtype.upper()}] {qtxt}... -> Attempts: {attempts} | Mistakes: {mistakes} | Error: {err_pct}%")
        if qtype in ['choose', 'multi'] and mistakes > 0 and not sample_q_with_errors:
            sample_q_with_errors = q
        if qtype == 'descriptive' and mistakes > 0 and not desc_q_with_errors:
            desc_q_with_errors = q

# 3. Candidate Performance Table & Filters
print("\n--- TEST 2: Candidate Performance Roster (/get-exam-user-report) ---")
code, user_rep = http_req('GET', '/get-exam-user-report', token=admin_token, params={
    'schedule_id': sched_id,
    'page': 1,
    'page_size': 10,
    'sort_by': 'percentage',
    'order': 'desc'
})
print(f"Fetch Candidate Performance Report -> HTTP {code}: status={user_rep.get('status')}")
if user_rep.get('status') and user_rep.get('data'):
    rep_items = user_rep['data'].get('items', [])
    print(f"  • Total Candidate Records: {user_rep['data'].get('total')}")
    for item in rep_items:
        print(f"    - Student: {item.get('student_name')} | Score: {item.get('marks_obtained')}/{item.get('total_marks')} ({item.get('percentage')}%) | Result: {item.get('result')} | Manual Review Badge: {item.get('manual_review')}")

# Test Roster Filter by Name
print("\n--- TEST 3: Candidate Search & Filter ---")
code, filter_rep = http_req('GET', '/get-exam-user-report', token=admin_token, params={
    'schedule_id': sched_id,
    'q': 'michael'
})
filter_items = filter_rep.get('data', {}).get('items', []) if filter_rep.get('status') else []
print(f"Search 'michael' -> Returned {len(filter_items)} item(s) (Expected >= 1)")

# 4. Objective Question Wrong Answers & Option Distribution
print("\n--- TEST 4: Objective Question Option Distribution & Error Combinations ---")
if sample_q_with_errors:
    target_qid = sample_q_with_errors['question_id']
    print(f"Analyzing Question: '{sample_q_with_errors['question_text'][:40]}' (ID: {target_qid})")
    code, wrong_obj = http_req('GET', '/get-question-wrong-answers', token=admin_token, params={
        'schedule_id': sched_id,
        'question_id': target_qid
    })
    print(f"Fetch Wrong Answers -> HTTP {code}: status={wrong_obj.get('status')}")
    if wrong_obj.get('status') and wrong_obj.get('data'):
        wdata = wrong_obj['data']
        dist = wdata.get('distribution', [])
        combos = wdata.get('combinations', [])
        print(f"  • Option Selection Distribution: {len(dist)} option(s) tracked")
        for d in dist:
            print(f"    - Option: {d.get('option_text')} | Selections: {d.get('count')} ({d.get('pct')}) | Is Correct: {d.get('is_correct')}")
        print(f"  • Common Error Combinations: {len(combos)}")
        for c in combos:
            print(f"    - Combination Pattern: '{c.get('combination')}' | Count: {c.get('count')} ({c.get('pct')})")

# 5. Misconception Analysis & AI-Generated Teaching Recommendations
print("\n--- TEST 5: AI Misconception Analysis & Teaching Recommendations ---")
if desc_q_with_errors:
    target_desc_qid = desc_q_with_errors['question_id']
    print(f"Analyzing Descriptive Question: '{desc_q_with_errors['question_text'][:40]}' (ID: {target_desc_qid})")
    code, wrong_desc = http_req('GET', '/get-question-wrong-answers', token=admin_token, params={
        'schedule_id': sched_id,
        'question_id': target_desc_qid
    })
    print(f"Fetch Descriptive Analysis -> HTTP {code}: status={wrong_desc.get('status')}")
    if wrong_desc.get('status') and wrong_desc.get('data'):
        desc_analysis = wrong_desc['data'].get('descriptive_analysis')
        ai_insights = wrong_desc['data'].get('ai_insights')
        if desc_analysis:
            print(f"  • Diagnostic Summary: {desc_analysis.get('diagnostic_summary')}")
            print(f"  • AI Recommendations: {desc_analysis.get('recommendations')}")
            cats = desc_analysis.get('categories', [])
            for c in cats:
                print(f"    - Cluster Category: '{c.get('name')}' -> Count: {c.get('student_count')} ({c.get('pct')})")
                for sub_cluster in c.get('clusters', []):
                    print(f"      * Theme: {sub_cluster.get('theme_name')} | Students: {sub_cluster.get('student_count')} ({sub_cluster.get('pct')})")

# 6. Negative & Edge Case Testing: Empty / Non-Existent Filters
print("\n--- TEST 6: Empty Data & Invalid Criteria Handling ---")
code, empty_res = http_req('GET', '/get-exam-analytics', token=admin_token, params={'schedule_id': str(uuid.uuid4())})
print(f"Non-existent Schedule ID -> HTTP {code} (Expected: 400 / 404): {empty_res.get('statusMessage')}")

code, empty_user_rep = http_req('GET', '/get-exam-user-report', token=admin_token, params={'schedule_id': str(uuid.uuid4())})
print(f"Non-existent Schedule User Report -> HTTP {code} (Expected: 400 / 404): {empty_user_rep.get('statusMessage')}")

print("\n" + "="*75)
print("PHASE 8 ANALYTICS & MISCONCEPTION QA SUITE COMPLETED")
print("="*75)
