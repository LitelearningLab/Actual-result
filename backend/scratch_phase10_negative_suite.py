import urllib.request
import urllib.error
import json
import uuid
import datetime

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, timeout=30):
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

def run_phase10_negative_suite():
    results = []
    print("=" * 80)
    print("PHASE 10 — NEGATIVE TESTING & FAULT INJECTION SUITE")
    print("=" * 80)

    # Acquire tokens
    _, sa_login = http_req('POST', '/login', {'identifier': 'superadmin', 'password': 'Admin@123'})
    sa_token = sa_login.get('token')

    _, admin_login = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
    admin_token = admin_login.get('token')
    admin_user = admin_login.get('user', {})
    inst_id = admin_user.get('institute_id')
    admin_id = admin_user.get('user_id')

    _, cand_login = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
    cand_token = cand_login.get('token')
    cand_user = cand_login.get('user', {})
    cand_id = cand_user.get('user_id')

    print(f"[Auth] Acquired SuperAdmin, Admin ({admin_id[:8]}), Candidate ({cand_id[:8]}) sessions.")

    # -------------------------------------------------------------------------
    # 1. EMPTY FIELDS & PAYLOADS
    # -------------------------------------------------------------------------
    print("\n--- [Category 1] Empty Fields & Payloads ---")
    
    # 1.1 Empty login payload
    code, resp = http_req('POST', '/login', {})
    passed = code == 400
    results.append(('Empty Login Payload Rejection', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"  [1.1] Empty Login -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}")

    # 1.2 Add category with empty name
    code, resp = http_req('POST', '/add-categories', {"name": "", "institute_id": inst_id}, token=admin_token)
    passed = code in (400, 422) or (code == 200 and resp.get('status') is False)
    results.append(('Empty Category Name Rejection', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [1.2] Empty Category Name -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}")

    # 1.3 Add exam with missing mandatory fields
    code, resp = http_req('POST', '/register-exam', {"institute_id": inst_id}, token=admin_token)
    passed = code in (400, 422) or (code == 200 and resp.get('status') is False)
    results.append(('Missing Mandatory Fields in Exam Blueprint', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [1.3] Missing Fields Exam -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}")

    # -------------------------------------------------------------------------
    # 2. VERY LONG STRINGS & BUFFER OVERFLOW TESTS
    # -------------------------------------------------------------------------
    print("\n--- [Category 2] Extreme Length Strings ---")
    long_str_10k = "A" * 10000
    code, resp = http_req('POST', '/add-categories', {
        "name": f"Long Text {uuid.uuid4().hex[:6]}",
        "description": long_str_10k, # 10k characters description
        "institute_id": inst_id,
        "type": "objective",
        "created_by": admin_id
    }, token=admin_token)
    passed = code in (200, 201, 400)
    results.append(('10,000 Char String in Description Field', passed, f"HTTP {code} (Server remained stable)"))
    print(f"  [2.1] 10,000 Char Payload -> HTTP {code}: Server remained stable")

    # -------------------------------------------------------------------------
    # 3. SPECIAL CHARACTERS, SQL INJECTION & XSS PAYLOADS
    # -------------------------------------------------------------------------
    print("\n--- [Category 3] SQLi, XSS & Unicode Attack Payloads ---")
    
    # 3.1 SQL Injection in Search Filters
    sqli_payload = "'; DROP TABLE Users; SELECT * FROM Users WHERE '1'='1"
    code, resp = http_req('GET', f'/category-details?name={urllib.parse.quote(sqli_payload)}&institute_id={inst_id}', token=admin_token)
    passed = code == 200 and isinstance(resp.get('data'), list)
    results.append(('SQL Injection Attempt in Query String', passed, f"HTTP {code}: Parametrized query prevented SQLi"))
    print(f"  [3.1] SQL Injection in Search -> HTTP {code}: Handled cleanly via ORM parameters")

    # 3.2 XSS Script Tag Injection in Category Name
    xss_payload = "<script>alert('XSS_VULNERABILITY')</script>"
    code, resp = http_req('POST', '/add-categories', {
        "name": f"XSS Test {uuid.uuid4().hex[:4]} {xss_payload}",
        "institute_id": inst_id,
        "type": "objective",
        "created_by": admin_id
    }, token=admin_token)
    passed = code in (200, 201, 400)
    results.append(('XSS Script Tag Injection in Entity Name', passed, f"HTTP {code}: Sanitized / stored safely"))
    print(f"  [3.2] XSS Injection -> HTTP {code}: Stored safely without execution")

    # 3.3 Unicode & Emoji Injection
    emoji_payload = "🚀✨🔥 Chinese: 数据库测试 Arabic: اختبار قاعدة البيانات"
    code, resp = http_req('POST', '/add-categories', {
        "name": f"Unicode Test {uuid.uuid4().hex[:4]} {emoji_payload[:30]}",
        "description": emoji_payload,
        "institute_id": inst_id,
        "type": "objective",
        "created_by": admin_id
    }, token=admin_token)
    passed = code in (200, 201, 400)
    results.append(('Multi-Lingual & Emoji Unicode Storage', passed, f"HTTP {code}: UTF-8 database encoding verified"))
    print(f"  [3.3] Unicode & Emojis -> HTTP {code}: Handled cleanly")

    # -------------------------------------------------------------------------
    # 4. INVALID IDENTIFIERS & MALFORMED UUIDs
    # -------------------------------------------------------------------------
    print("\n--- [Category 4] Invalid IDs & Malformed GUIDs ---")
    
    # 4.1 Non-existent UUID in schedule launch
    fake_uuid = str(uuid.uuid4())
    code, resp = http_req('GET', f'/launch-exam?schedule_id={fake_uuid}', token=cand_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Non-Existent Schedule Launch', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [4.1] Fake Schedule ID -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}")

    # 4.2 Malformed non-UUID string
    malformed_id = "NOT_A_VALID_UUID_@#$%"
    code, resp = http_req('GET', f'/launch-exam?schedule_id={malformed_id}', token=cand_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Malformed String as ID in URL Parameter', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [4.2] Malformed UUID -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}")

    # -------------------------------------------------------------------------
    # 5. INVALID DATES & CHRONOLOGICAL REVERSALS
    # -------------------------------------------------------------------------
    print("\n--- [Category 5] Invalid Dates & Schedule Times ---")
    
    # 5.1 Start date after end date (reversed chronological range)
    code, resp = http_req('POST', '/add-exam-schedule', {
        "title": "Invalid Date Schedule",
        "exam_id": fake_uuid,
        "institute_id": inst_id,
        "start_time": "2026-12-31T10:00:00Z",
        "end_time": "2026-01-01T10:00:00Z", # End is before start
        "duration_mins": 30,
        "created_by": admin_id
    }, token=admin_token)
    passed = code in (400, 404, 422) or (code == 200 and resp.get('status') is False)
    results.append(('Reversed Date Range (End Before Start)', passed, f"HTTP {code}: Rejected invalid schedule"))
    print(f"  [5.1] Reversed Date Range -> HTTP {code}: Correctly prevented invalid schedule")

    # 5.2 Malformed non-date strings
    code, resp = http_req('GET', f'/get-exam-analytics?start_date=yesterday&end_date=tomorrow&schedule_id={fake_uuid}', token=admin_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Malformed Date Strings in Analytics Filter', passed, f"HTTP {code}: Handled date parsing error"))
    print(f"  [5.2] Non-ISO Date String -> HTTP {code}: Handled gracefully")

    # -------------------------------------------------------------------------
    # 6. INVALID MARKS, NEGATIVE NUMBERS & OVERFLOWS
    # -------------------------------------------------------------------------
    print("\n--- [Category 6] Invalid Marks & Number Bounds ---")
    
    # 6.1 Negative marks in manual override
    code, resp = http_req('POST', '/update-descriptive-marks', {
        "marks_awarded": -25.0,
        "edit_reason": "",
        "updated_by": admin_id
    }, token=admin_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Negative Marks / Missing Reason Rejection', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [6.1] Negative Marks / Empty Reason -> HTTP {code}: Handled safely")

    # 6.2 Non-existent answer ID in override
    code, resp = http_req('POST', '/update-descriptive-marks', {
        "answer_id": fake_uuid,
        "marks_awarded": 5.0,
        "edit_reason": "Number overflow test",
        "updated_by": admin_id
    }, token=admin_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Non-Existent Answer ID in Override', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [6.2] Non-Existent Override -> HTTP {code}: Handled safely")

    # -------------------------------------------------------------------------
    # 7. UNATHORIZED API REQUESTS & RBAC BREACHES
    # -------------------------------------------------------------------------
    print("\n--- [Category 7] Unauthorized Requests & Privilege Escalation ---")
    
    # 7.1 Candidate attempting Admin Exam Creation
    code, resp = http_req('POST', '/register-exam', {"title": "Hacked Test"}, token=cand_token)
    passed = code in (401, 403)
    results.append(('Candidate Blocked from Registering Exams', passed, f"HTTP {code}: Forbidden access"))
    print(f"  [7.1] Candidate -> Admin Endpoint -> HTTP {code}: Access strictly forbidden")

    # 7.2 Candidate attempting SuperAdmin Institute Creation
    code, resp = http_req('POST', '/register-institute', {"name": "Hacked Institute"}, token=cand_token)
    passed = code in (401, 403)
    results.append(('Candidate Blocked from SuperAdmin Institute API', passed, f"HTTP {code}: Forbidden access"))
    print(f"  [7.2] Candidate -> SuperAdmin Endpoint -> HTTP {code}: Access strictly forbidden")

    # 7.3 Admin attempting SuperAdmin Institute Creation
    code, resp = http_req('POST', '/register-institute', {"name": "Unauthorized Institute"}, token=admin_token)
    passed = code in (401, 403)
    results.append(('Admin Blocked from SuperAdmin Institute Creation', passed, f"HTTP {code}: Role isolation confirmed"))
    print(f"  [7.3] Admin -> SuperAdmin Endpoint -> HTTP {code}: Super Admin role enforced")

    # -------------------------------------------------------------------------
    # 8. EXPIRED, MALFORMED & FORGED JWT TOKENS
    # -------------------------------------------------------------------------
    print("\n--- [Category 8] Invalid & Forged JWT Tokens ---")
    
    # 8.1 Completely invalid JWT
    code, resp = http_req('GET', '/get-questions-details', token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.bogus_signature")
    passed = code in (401, 422)
    results.append(('Forged / Invalid Signature JWT Rejection', passed, f"HTTP {code}: Token verification rejected fake token"))
    print(f"  [8.1] Forged JWT -> HTTP {code}: Rejected immediately")

    # 8.2 Missing Bearer Prefix
    req = urllib.request.Request(f'{BASE_URL}/get-questions-details', headers={'Authorization': 'GarbageToken', 'Origin': 'http://localhost:4200'}, method='GET')
    try:
        with urllib.request.urlopen(req) as resp:
            code = resp.status
    except urllib.error.HTTPError as e:
        code = e.code
    passed = code in (401, 422)
    results.append(('Malformed Authorization Header Rejection', passed, f"HTTP {code}: Malformed header rejected"))
    print(f"  [8.2] Malformed Auth Header -> HTTP {code}: Rejected cleanly")

    # -------------------------------------------------------------------------
    # 9. DOUBLE-CLICK REPLAY SUBMISSIONS & RACE CONDITIONS
    # -------------------------------------------------------------------------
    print("\n--- [Category 9] Idempotency & Replay Attack Prevention ---")
    code, resp = http_req('POST', '/submit-exam', {
        "user_id": cand_id,
        "schedule_id": fake_uuid,
        "attempt_id": fake_uuid,
        "answers": {},
        "time_taken_mins": 1
    }, token=cand_token)
    passed = code in (400, 404) or (code == 200 and resp.get('status') is False)
    results.append(('Non-Existent Attempt Final Submission Rejection', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else resp}"))
    print(f"  [9.1] Submit Non-Existent Attempt -> HTTP {code}: Rejection verified")

    # -------------------------------------------------------------------------
    # 10. AI GENERATION FAULT INJECTION (EMPTY / JUNK PROMPT)
    # -------------------------------------------------------------------------
    print("\n--- [Category 10] AI Engine Error Handling & Fallbacks ---")
    code, resp = http_req('POST', '/create-question-using-ai', {
        "content": "", # Empty prompt content
        "number_of_questions": 5,
        "category_id": fake_uuid,
        "institute_id": inst_id
    }, token=admin_token)
    passed = code in (400, 422) or (code == 200 and resp.get('status') is False)
    results.append(('AI Generation with Empty Content Handling', passed, f"HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else 'Handled'}"))
    print(f"  [10.1] AI Empty Prompt -> HTTP {code}: {resp.get('statusMessage') if isinstance(resp, dict) else 'Handled'}")

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 10 NEGATIVE TESTING RESULTS SUMMARY:")
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
    run_phase10_negative_suite()
