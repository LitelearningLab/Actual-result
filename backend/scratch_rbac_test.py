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
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    if headers_extra:
        headers.update(headers_extra)
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

print("="*60)
print("PHASE 2 — AUTHENTICATION & RBAC AUTOMATED QA SUITE")
print("="*60)

# Test 1: Empty Credentials
code, resp = http_req('POST', '/login', {'identifier': '', 'password': ''})
print(f"\n[Test 1] Empty Credentials -> HTTP {code}: {resp}")

# Test 2: Invalid Credentials
code, resp = http_req('POST', '/login', {'identifier': 'fake_user_123@xyz.com', 'password': 'WrongPassword@123'})
print(f"\n[Test 2] Invalid Credentials -> HTTP {code}: {resp}")

# Test 3: SQL Injection / Malformed Input
code, resp = http_req('POST', '/login', {'identifier': "' OR '1'='1", 'password': "' OR '1'='1"})
print(f"\n[Test 3] SQL Injection input -> HTTP {code}: {resp}")

# Test 4: Super Admin Login
print("\n[Test 4] Super Admin Login (praveen / Admin@123)")
code, resp = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
sa_token = resp.get('token') if isinstance(resp, dict) else None
sa_user = resp.get('user') if isinstance(resp, dict) else None
print(f"Status: HTTP {code} | User Role: {sa_user.get('role') if sa_user else None} | Token generated: {bool(sa_token)}")

# Test 5: Admin Login
print("\n[Test 5] Admin Login (ajay / Admin@123)")
code, resp = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
admin_token = resp.get('token') if isinstance(resp, dict) else None
admin_user = resp.get('user') if isinstance(resp, dict) else None
print(f"Status: HTTP {code} | User Role: {admin_user.get('role') if admin_user else None} | Token generated: {bool(admin_token)}")

# Test 6: Candidate Login
print("\n[Test 6] Candidate Login (michael / Admin@123)")
code, resp = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = resp.get('token') if isinstance(resp, dict) else None
cand_user = resp.get('user') if isinstance(resp, dict) else None
print(f"Status: HTTP {code} | User Role: {cand_user.get('role') if cand_user else None} | Token generated: {bool(cand_token)}")

# Test 7: Expired JWT Simulation
print("\n[Test 7] Expired JWT Token")
past_time = datetime.datetime.utcnow() - datetime.timedelta(hours=2)
expired_payload = {
    'sub': 'praveen@profluentlabs.com',
    'iat': past_time - datetime.timedelta(hours=1),
    'exp': past_time
}
expired_jwt = jwt.encode(expired_payload, jwt_secret, algorithm='HS256')
code, resp = http_req('GET', '/settings/ai-confidence-threshold', token=expired_jwt)
print(f"Expired JWT Access -> HTTP {code}: {resp}")

# Test 8: Tampered / Invalid Signature JWT
print("\n[Test 8] Tampered Signature JWT")
fake_jwt = jwt.encode({'sub': 'praveen@profluentlabs.com', 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, 'WRONG_SECRET', algorithm='HS256')
code, resp = http_req('GET', '/settings/ai-confidence-threshold', token=fake_jwt)
print(f"Tampered JWT Access -> HTTP {code}: {resp}")

# Test 9: Session Validation (/session/validate)
print("\n[Test 9] Session Validate Endpoint (Browser Refresh simulation)")
if sa_token:
    code, resp = http_req('GET', '/session/validate', token=sa_token)
    print(f"Super Admin Session Validate -> HTTP {code}: status={resp.get('status') if isinstance(resp, dict) else resp}")

# Test 10: Role Boundary - Admin accessing Super Admin endpoints
print("\n[Test 10] RBAC Check: Admin accessing Super Admin dashboard / institutes")
if admin_token:
    code, resp = http_req('GET', '/superadmin-dashboard', token=admin_token)
    print(f"Admin calling /superadmin-dashboard -> HTTP {code}: {resp}")
    code, resp = http_req('POST', '/register-institute', token=admin_token, data={'name': 'Hacked Institute'})
    print(f"Admin calling /register-institute -> HTTP {code}: {resp}")

# Test 11: Role Boundary - Candidate accessing Admin endpoints
print("\n[Test 11] RBAC Check: Candidate accessing Admin / Super Admin endpoints")
if cand_token:
    code, resp = http_req('GET', '/superadmin-dashboard', token=cand_token)
    print(f"Candidate calling /superadmin-dashboard -> HTTP {code}: {resp}")
    code, resp = http_req('GET', '/settings/ai-confidence-threshold', token=cand_token)
    print(f"Candidate calling /settings/ai-confidence-threshold -> HTTP {code}: {resp}")

# Test 12: Logout & Session Invalidation (AppSession revocation)
print("\n[Test 12] Logout & Back Button / Replay Attack Prevention")
if cand_token:
    code, resp = http_req('POST', '/logout', token=cand_token)
    print(f"Candidate Logout -> HTTP {code}: {resp}")
    # Try calling endpoint again with logged out token
    code, resp = http_req('GET', '/user-dashboard', token=cand_token)
    print(f"Re-accessing with logged-out token -> HTTP {code}: {resp}")

print("\n" + "="*60)
print("TEST RUN COMPLETE")
print("="*60)
