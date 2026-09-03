import urllib.request
import urllib.error
import json
import re

def test_health():
    print("==================================================")
    print("       PHASE 1: APPLICATION HEALTH REPORT        ")
    print("==================================================")

    # 1. Frontend Test
    print("\n[1] FRONTEND STATUS (http://localhost:4200):")
    try:
        req = urllib.request.Request("http://localhost:4200")
        with urllib.request.urlopen(req, timeout=5) as resp:
            content = resp.read().decode('utf-8')
            print(f"  [OK] Angular Server HTTP Status: {resp.status}")
            print(f"  [OK] Payload size: {len(content)} bytes")
            title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
            title = title_match.group(1) if title_match else "N/A"
            print(f"  [OK] HTML Document Title: '{title}'")
            has_app_root = "<app-root>" in content or "<app-root " in content
            print(f"  [OK] Root component <app-root> present: {has_app_root}")
            scripts = re.findall(r'<script[^>]*src="([^"]+)"', content)
            print(f"  [OK] Bundled scripts detected: {scripts}")
    except Exception as e:
        print(f"  [FAIL] Frontend check error: {e}")

    # 2. Database Connection Test
    print("\n[2] DATABASE STATUS:")
    try:
        from db.db import SQLiteDB
        from db.models import User, Institute
        db = SQLiteDB()
        session = db.connect()
        if session:
            user_count = session.query(User).count()
            inst_count = session.query(Institute).count()
            print(f"  [OK] SQL Server connection successful.")
            print(f"  [OK] Active Users count: {user_count}")
            print(f"  [OK] Active Institutes count: {inst_count}")
        else:
            print("  [FAIL] Could not establish DB session.")
    except Exception as e:
        print(f"  [FAIL] Database connection error: {e}")

    # 3. Backend API Test
    print("\n[3] BACKEND API & CORS CHECKS (http://localhost:5001/edu/api):")
    endpoints = [
        ("POST", "http://localhost:5001/edu/api/login", {"username": "", "password": ""}, "Login with Empty Credentials"),
        ("POST", "http://localhost:5001/edu/api/login", {"username": "unknown_test_user", "password": "WrongPassword!123"}, "Login with Invalid Credentials (Expected 401)"),
        ("POST", "http://localhost:5001/edu/api/login", {"email": "ajay@gmail.com", "password": "AdminPassword@123"}, "Login with Existing User (Wrong Password)"),
        ("GET", "http://localhost:5001/edu/api/session/validate", None, "Session Validation without Token"),
        ("GET", "http://localhost:5001/edu/api/get-institutes", None, "Protected Superadmin Route without Token"),
    ]

    for method, url, body, desc in endpoints:
        print(f"\n  Checking: {desc} ({method} {url})")
        try:
            data = json.dumps(body).encode('utf-8') if body else None
            headers = {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:4200'
            }
            req = urllib.request.Request(url, data=data, headers=headers, method=method)
            with urllib.request.urlopen(req, timeout=5) as resp:
                resp_text = resp.read().decode('utf-8')
                cors_origin = resp.headers.get('Access-Control-Allow-Origin')
                print(f"    Status: {resp.status} OK")
                print(f"    CORS Header: Access-Control-Allow-Origin = {cors_origin}")
                print(f"    Body: {resp_text.strip()[:160]}")
        except urllib.error.HTTPError as e:
            resp_text = e.read().decode('utf-8')
            cors_origin = e.headers.get('Access-Control-Allow-Origin')
            print(f"    HTTP Status: {e.code} (Handled API Error)")
            print(f"    CORS Header: Access-Control-Allow-Origin = {cors_origin}")
            print(f"    Body: {resp_text.strip()[:160]}")
        except Exception as e:
            print(f"    Error: {e}")

if __name__ == "__main__":
    test_health()
