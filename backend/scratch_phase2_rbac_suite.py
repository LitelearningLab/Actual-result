import urllib.request
import urllib.error
import json
import jwt
import os
import datetime
from dotenv import load_dotenv

load_dotenv()
jwt_secret = os.getenv('jwt_secret') or os.getenv('JWT_SECRET')
BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, headers_extra=None):
    url = BASE_URL + path
    headers = {'Content-Type': 'application/json', 'Origin': 'http://localhost:4200'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    if headers_extra:
        headers.update(headers_extra)
    payload = json.dumps(data).encode('utf-8') if data is not None else None
    req = urllib.request.Request(url, data=payload, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
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

def run_phase2_suite():
    results = []

    print("=" * 80)
    print("PHASE 2 — AUTHENTICATION & ROLE-BASED ACCESS CONTROL (RBAC) TEST SUITE")
    print("=" * 80)

    # -------------------------------------------------------------
    # 1. Empty Credentials
    # -------------------------------------------------------------
    code, resp = http_req('POST', '/login', {'identifier': '', 'password': ''})
    passed = code == 400 and resp.get('status') is False
    results.append(('Empty Credentials Validation', passed, f'HTTP {code} - {resp.get("statusMessage")}'))
    print(f"\n[Test 1] Empty Credentials -> HTTP {code}: {resp}")

    # -------------------------------------------------------------
    # 2. Invalid Credentials
    # -------------------------------------------------------------
    code, resp = http_req('POST', '/login', {'identifier': 'nonexistent_user@actualresult.com', 'password': 'WrongPassword@123'})
    passed = code == 401 and resp.get('status') is False
    results.append(('Invalid Credentials Check', passed, f'HTTP {code} - {resp.get("statusMessage")}'))
    print(f"\n[Test 2] Invalid Credentials -> HTTP {code}: {resp}")

    # -------------------------------------------------------------
    # 3. Super Admin Login
    # -------------------------------------------------------------
    code, sa_resp = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
    sa_token = sa_resp.get('token') if isinstance(sa_resp, dict) else None
    sa_role = sa_resp.get('user', {}).get('role') if isinstance(sa_resp, dict) else None
    passed = code == 200 and sa_role == 'super_admin' and bool(sa_token)
    results.append(('Super Admin Login (praveen)', passed, f'HTTP {code}, Role: {sa_role}'))
    print(f"\n[Test 3] Super Admin Login -> HTTP {code} | User: {sa_resp.get('user', {}).get('name')} | Role: {sa_role}")

    # -------------------------------------------------------------
    # 4. Admin Login
    # -------------------------------------------------------------
    code, admin_resp = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
    admin_token = admin_resp.get('token') if isinstance(admin_resp, dict) else None
    admin_role = admin_resp.get('user', {}).get('role') if isinstance(admin_resp, dict) else None
    passed = code == 200 and admin_role == 'admin' and bool(admin_token)
    results.append(('Admin Login (ajay)', passed, f'HTTP {code}, Role: {admin_role}'))
    print(f"\n[Test 4] Admin Login -> HTTP {code} | User: {admin_resp.get('user', {}).get('name')} | Role: {admin_role}")

    # -------------------------------------------------------------
    # 5. Candidate Login
    # -------------------------------------------------------------
    code, cand_resp = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
    cand_token = cand_resp.get('token') if isinstance(cand_resp, dict) else None
    cand_role = cand_resp.get('user', {}).get('role') if isinstance(cand_resp, dict) else None
    passed = code == 200 and cand_role == 'user' and bool(cand_token)
    results.append(('Candidate Login (michael)', passed, f'HTTP {code}, Role: {cand_role}'))
    print(f"\n[Test 5] Candidate Login -> HTTP {code} | User: {cand_resp.get('user', {}).get('name')} | Role: {cand_role}")

    # -------------------------------------------------------------
    # 6. Expired JWT Token
    # -------------------------------------------------------------
    past_time = datetime.datetime.utcnow() - datetime.timedelta(hours=2)
    expired_payload = {
        'sub': 'praveen@profluentlabs.com',
        'iat': past_time - datetime.timedelta(hours=1),
        'exp': past_time
    }
    expired_jwt = jwt.encode(expired_payload, jwt_secret, algorithm='HS256')
    code, resp = http_req('GET', '/settings/ai-confidence-threshold', token=expired_jwt)
    passed = code == 401
    results.append(('Expired JWT Rejection', passed, f'HTTP {code}'))
    print(f"\n[Test 6] Expired JWT Access -> HTTP {code}: {resp}")

    # -------------------------------------------------------------
    # 7. Tampered / Invalid Signature JWT
    # -------------------------------------------------------------
    fake_jwt = jwt.encode({'sub': 'praveen@profluentlabs.com', 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, 'WRONG_SECRET_KEY', algorithm='HS256')
    code, resp = http_req('GET', '/settings/ai-confidence-threshold', token=fake_jwt)
    passed = code == 401
    results.append(('Tampered Signature JWT Rejection', passed, f'HTTP {code}'))
    print(f"\n[Test 7] Tampered Signature JWT -> HTTP {code}: {resp}")

    # -------------------------------------------------------------
    # 8. Browser Refresh Simulation (/session/validate & /refresh-token)
    # -------------------------------------------------------------
    code, val_resp = http_req('GET', '/session/validate', token=sa_token)
    passed_val = code == 200 and val_resp.get('status') is True
    code_ref, ref_resp = http_req('POST', '/refresh-token', token=sa_token)
    passed_ref = code_ref == 200 and ref_resp.get('status') is True
    passed = passed_val and passed_ref
    results.append(('Browser Refresh & Session Restore', passed, f'Validate HTTP {code}, Refresh HTTP {code_ref}'))
    print(f"\n[Test 8] Browser Refresh Simulation -> Session Validate: HTTP {code} | Refresh Token: HTTP {code_ref}")

    # -------------------------------------------------------------
    # 9. Direct URL / API Access without Permission (Unauthenticated)
    # -------------------------------------------------------------
    code, resp = http_req('GET', '/get-institutes')
    passed = code == 401
    results.append(('Unauthenticated Route Protection', passed, f'HTTP {code}'))
    print(f"\n[Test 9] Unauthenticated Access to Protected Route -> HTTP {code}: {resp}")

    # -------------------------------------------------------------
    # 10. Admin Accessing Super Admin Endpoints (RBAC Enforced)
    # -------------------------------------------------------------
    code_sa_dash, resp_sa_dash = http_req('GET', '/superadmin-dashboard', token=admin_token)
    code_sa_reg, resp_sa_reg = http_req('POST', '/register-institute', token=admin_token, data={'institute_name': 'Hacked Institute'})
    code_sa_get, resp_sa_get = http_req('GET', '/get-institutes', token=admin_token)
    passed = code_sa_dash == 403 and code_sa_reg == 403 and code_sa_get == 403
    results.append(('Admin Blocked from Super Admin Endpoints', passed, f'Dash: HTTP {code_sa_dash}, Reg: HTTP {code_sa_reg}, Get: HTTP {code_sa_get}'))
    print(f"\n[Test 10] Admin accessing Super Admin Endpoints ->")
    print(f"  - GET /superadmin-dashboard: HTTP {code_sa_dash} ({resp_sa_dash.get('statusMessage', resp_sa_dash)})")
    print(f"  - POST /register-institute: HTTP {code_sa_reg} ({resp_sa_reg.get('statusMessage', resp_sa_reg)})")
    print(f"  - GET /get-institutes: HTTP {code_sa_get} ({resp_sa_get.get('statusMessage', resp_sa_get)})")

    # -------------------------------------------------------------
    # 11. Candidate Accessing Admin Endpoints (RBAC Enforced)
    # -------------------------------------------------------------
    code_c_dash, resp_c_dash = http_req('GET', '/admin-dashboard', token=cand_token)
    code_c_exam, resp_c_exam = http_req('POST', '/register-exam', token=cand_token, data={'name': 'Hacked Exam'})
    code_c_ques, resp_c_ques = http_req('POST', '/add-question', token=cand_token, data={'title': 'Hacked Question'})
    code_c_users, resp_c_users = http_req('GET', '/get-users', token=cand_token)
    passed = code_c_dash == 403 and code_c_exam == 403 and code_c_ques == 403 and code_c_users == 403
    results.append(('Candidate Blocked from Admin Endpoints', passed, f'AdminDash: {code_c_dash}, RegExam: {code_c_exam}, AddQ: {code_c_ques}, GetUsers: {code_c_users}'))
    print(f"\n[Test 11] Candidate accessing Admin Endpoints ->")
    print(f"  - GET /admin-dashboard: HTTP {code_c_dash} ({resp_c_dash.get('statusMessage', resp_c_dash)})")
    print(f"  - POST /register-exam: HTTP {code_c_exam} ({resp_c_exam.get('statusMessage', resp_c_exam)})")
    print(f"  - POST /add-question: HTTP {code_c_ques} ({resp_c_ques.get('statusMessage', resp_c_ques)})")
    print(f"  - GET /get-users: HTTP {code_c_users} ({resp_c_users.get('statusMessage', resp_c_users)})")

    # -------------------------------------------------------------
    # 12. Candidate Accessing Other User Data
    # -------------------------------------------------------------
    other_user_id = '013a6823-eef9-44e5-8762-a77b754d06a1' # ajay (admin)
    code_prof, resp_prof = http_req('GET', f'/get-user-page-access/{other_user_id}', token=cand_token)
    code_update, resp_update = http_req('PUT', f'/update-user/{other_user_id}', token=cand_token, data={'full_name': 'Hacked Name'})
    passed = code_prof == 403 and code_update == 403
    results.append(('Candidate Blocked from Other User Data', passed, f'PageAccess: {code_prof}, UpdateUser: {code_update}'))
    print(f"\n[Test 12] Candidate accessing other user profile -> PageAccess: HTTP {code_prof} | UpdateUser: HTTP {code_update}")

    # -------------------------------------------------------------
    # 13. Logout & Back Button / Replay Attack Prevention
    # -------------------------------------------------------------
    code_logout, resp_logout = http_req('POST', '/logout', token=cand_token)
    # Attempt to use cand_token again after logout
    code_replay, resp_replay = http_req('GET', '/user-dashboard', token=cand_token)
    passed = code_logout == 200 and code_replay == 401
    results.append(('Logout & Session Invalidation (Post-Logout Replay Prevention)', passed, f'Logout: HTTP {code_logout}, Replay: HTTP {code_replay} ({resp_replay.get("statusMessage") if isinstance(resp_replay, dict) else resp_replay})'))
    print(f"\n[Test 13] Logout & Replay Check -> Logout: HTTP {code_logout} | Subsequent Request: HTTP {code_replay} ({resp_replay.get('statusMessage', resp_replay)})")

    # -------------------------------------------------------------
    # Summary
    # -------------------------------------------------------------
    print("\n" + "=" * 80)
    print("PHASE 2 SUMMARY RESULTS:")
    print("=" * 80)
    all_passed = True
    for name, status, details in results:
        status_text = "[PASS]" if status else "[FAIL]"
        if not status:
            all_passed = False
        print(f"  {status_text} {name:<45} -> {details}")
    
    print("=" * 80)
    print(f"OVERALL STATUS: {'ALL TESTS PASSED' if all_passed else 'SOME TESTS FAILED'}")
    print("=" * 80)

if __name__ == '__main__':
    run_phase2_suite()
