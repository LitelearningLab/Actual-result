import urllib.request
import urllib.error
import json
import time
import uuid

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None):
    url = BASE_URL + path
    headers = {'Content-Type': 'application/json', 'Origin': 'http://localhost:4200'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    payload = json.dumps(data).encode('utf-8') if data is not None else None
    req = urllib.request.Request(url, data=payload, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
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

def run_phase3_super_admin_suite():
    results = []
    print("=" * 80)
    print("PHASE 3 — SUPER ADMIN: COMPLETE INSTITUTE MANAGEMENT TEST SUITE")
    print("=" * 80)

    # 1. Super Admin Login
    code, sa_resp = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
    sa_token = sa_resp.get('token')
    print(f"\n[Auth] Super Admin Login -> HTTP {code} | Token Acquired: {bool(sa_token)}")
    if not sa_token:
        print("FATAL: Could not login as Super Admin.")
        return

    test_uid = uuid.uuid4().hex[:6].upper()
    inst_name = f"QA Global Academy {test_uid}"
    inst_short = f"QA_{test_uid}"

    # 2. Required Field Validation (Negative test: Missing name and short_name)
    code, resp = http_req('POST', '/register-institute', {}, token=sa_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('Required Fields Validation (Empty Payload)', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 1] Missing Required Fields -> HTTP {code}: {resp.get('statusMessage')}")

    # 3. Invalid Data Validation (Negative test: Invalid dates, negative max_users)
    invalid_payload = {
        "name": inst_name,
        "short_name": inst_short,
        "subscription_start": "2026-12-31",
        "subscription_end": "2026-01-01", # end before start
        "max_users": -10
    }
    code, resp = http_req('POST', '/register-institute', invalid_payload, token=sa_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('Invalid Data Validation (Negative max_users / Invalid Date range)', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 2] Invalid Data Validation -> HTTP {code}: {resp.get('statusMessage')}")

    # 4. Create Institute (Positive test: Full valid payload with campuses, depts, teams)
    valid_institute = {
        "name": inst_name,
        "short_name": inst_short,
        "industry_type": "IT",
        "industry_sector": "IT",
        "primary_contact_person": "QA Master Tester",
        "primary_contact_email": f"qa_{test_uid.lower()}@qaglobal.com",
        "primary_contact_phone": "9876543210",
        "website": "https://qaglobal.example.com",
        "max_users": 500,
        "active_status": 1,
        "subscription_start": "2026-01-01",
        "subscription_end": "2026-12-31",
        "headOffice": {
            "address": "123 Tech Park, Phase 1",
            "city": "Chennai",
            "pincode": "600001",
            "email": f"headoffice_{test_uid.lower()}@qaglobal.com",
            "phone": "04412345678"
        },
        "campuses": [
            {
                "name": "North Campus",
                "address": "45 Science Blvd",
                "city": "Chennai",
                "pincode": "600002",
                "email": f"north_{test_uid.lower()}@qaglobal.com",
                "phone": "04487654321",
                "isActive": True
            }
        ],
        "departments_structured": [
            {
                "name": "Computer Science & Engineering",
                "teams": ["AI Research Group", "Cloud Computing Cell"]
            },
            {
                "name": "Information Technology",
                "teams": ["Cybersecurity Team"]
            }
        ]
    }

    code, resp = http_req('POST', '/register-institute', valid_institute, token=sa_token)
    created_id = resp.get('institute_id') if isinstance(resp, dict) else None
    passed = code == 201 and resp.get('status') is True and bool(created_id)
    results.append(('Create Institute with Campuses & Departments', passed, f"HTTP {code}, ID: {created_id}"))
    print(f"\n[Test 3] Create Institute -> HTTP {code} | Institute ID: {created_id} | Status: {resp.get('statusMessage')}")

    # 5. Duplicate Institute Validation (Negative test: Same short_name)
    code, resp = http_req('POST', '/register-institute', valid_institute, token=sa_token)
    passed = code == 409 and resp.get('status') is False
    results.append(('Duplicate Institute Prevention (Conflict 409)', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 4] Duplicate Institute Check -> HTTP {code}: {resp.get('statusMessage')}")

    # 6. Verify Created Institute Details via GET
    code, resp = http_req('GET', f'/get-institutes?institute_id={created_id}', token=sa_token)
    inst_data = resp.get('data', [])[0] if isinstance(resp, dict) and resp.get('data') else None
    passed = code == 200 and inst_data is not None and inst_data.get('name') == inst_name
    dept_count = len(inst_data.get('departments', [])) if inst_data else 0
    campus_count = len(inst_data.get('campuses', [])) if inst_data else 0
    results.append(('Verify Created Institute & Nested Relations', passed, f"HTTP {code}, Name: {inst_data.get('name') if inst_data else None}, Depts: {dept_count}, Campuses: {campus_count}"))
    print(f"\n[Test 5] Verify Created Institute -> HTTP {code} | Name: {inst_data.get('name') if inst_data else None} | Depts: {dept_count} | Campuses: {campus_count}")

    # 7. Edit / Update Institute Details
    updated_name = f"{inst_name} - Updated"
    update_payload = {
        "institute_id": created_id,
        "name": updated_name,
        "primary_contact_person": "QA Senior Lead",
        "max_users": 750,
        "departments_structured": [
            {
                "name": "Computer Science & Engineering",
                "teams": ["AI Research Group", "Quantum Computing Cell"]
            },
            {
                "name": "Data Science Department",
                "teams": ["Big Data Analytics"]
            }
        ]
    }
    code, resp = http_req('PUT', '/update-institute', update_payload, token=sa_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Edit / Update Institute Data', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 6] Update Institute -> HTTP {code}: {resp.get('statusMessage')}")

    # Verify update in GET
    code, resp = http_req('GET', f'/get-institutes?institute_id={created_id}', token=sa_token)
    updated_data = resp.get('data', [])[0] if isinstance(resp, dict) and resp.get('data') else None
    passed = updated_data is not None and updated_data.get('name') == updated_name and updated_data.get('max_users') == 750
    results.append(('Verify Updated Institute in Data Fetch', passed, f"Name: {updated_data.get('name') if updated_data else None}, MaxUsers: {updated_data.get('max_users') if updated_data else None}"))
    print(f"\n[Test 7] Verify Update -> Name: {updated_data.get('name') if updated_data else None} | Max Users: {updated_data.get('max_users') if updated_data else None}")

    # 8. Disable (Deactivate) Institute
    code, resp = http_req('PUT', f'/institute/deactivate/{created_id}', token=sa_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Disable / Deactivate Institute', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 8] Deactivate Institute -> HTTP {code}: {resp.get('statusMessage')}")

    # Verify Deactivation status
    code, resp = http_req('GET', f'/get-institutes?institute_id={created_id}', token=sa_token)
    deactivated_data = resp.get('data', [])[0] if isinstance(resp, dict) and resp.get('data') else None
    passed = deactivated_data is not None and deactivated_data.get('active_status') is False
    results.append(('Verify Inactive Status State', passed, f"ActiveStatus: {deactivated_data.get('active_status') if deactivated_data else None}"))
    print(f"\n[Test 9] Verify Inactive State -> active_status: {deactivated_data.get('active_status') if deactivated_data else None}")

    # 9. Re-activate Institute
    code, resp = http_req('PUT', f'/institute/activate/{created_id}', token=sa_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Activate / Enable Institute', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"\n[Test 10] Re-activate Institute -> HTTP {code}: {resp.get('statusMessage')}")

    # 10. Search Institute by Name
    search_query = test_uid
    code, resp = http_req('GET', f'/get-institutes?name={search_query}', token=sa_token)
    search_results = resp.get('data', []) if isinstance(resp, dict) else []
    passed = code == 200 and any(i.get('institute_id') == created_id for i in search_results)
    results.append(('Search Institute by Keyword', passed, f"HTTP {code}, Found {len(search_results)} records matching '{search_query}'"))
    print(f"\n[Test 11] Search Institute -> HTTP {code} | Matches found: {len(search_results)}")

    # 11. Filter Institute (by industry=IT & active_status=true)
    code, resp = http_req('GET', f'/get-institutes?industry=IT&active_status=true', token=sa_token)
    filter_results = resp.get('data', []) if isinstance(resp, dict) else []
    passed = code == 200 and len(filter_results) > 0 and all(i.get('active_status') is True for i in filter_results)
    results.append(('Filter Institute by Industry & Status', passed, f"HTTP {code}, Found {len(filter_results)} active IT institutes"))
    print(f"\n[Test 12] Filter Institute -> HTTP {code} | Found {len(filter_results)} active IT institutes")

    # 12. Empty State Validation (Search with non-existent query)
    code, resp = http_req('GET', f'/get-institutes?name=NON_EXISTENT_INSTITUTE_XYZ_12345', token=sa_token)
    empty_data = resp.get('data', []) if isinstance(resp, dict) else None
    passed = code == 200 and empty_data == []
    results.append(('Empty State Handling (No records found)', passed, f"HTTP {code}, Data array is empty []"))
    print(f"\n[Test 13] Empty State Search -> HTTP {code} | Returned: {empty_data}")

    # 13. Pagination Check
    code, resp = http_req('GET', '/get-institutes?pageNumber=1&pageSize=5', token=sa_token)
    page_data = resp.get('data', []) if isinstance(resp, dict) else []
    total_count = resp.get('totalCount', 0) if isinstance(resp, dict) else 0
    passed = code == 200 and total_count > 0
    results.append(('Pagination Parameters Support', passed, f"HTTP {code}, TotalCount: {total_count}, Page Records: {len(page_data)}"))
    print(f"\n[Test 14] Pagination Check -> HTTP {code} | TotalCount: {total_count} | Page Records: {len(page_data)}")

    # 14. Persistence across Logout and Re-Login
    print("\n[Auth] Logging out Super Admin...")
    code_out, _ = http_req('POST', '/logout', token=sa_token)
    
    print("[Auth] Re-logging in as Super Admin...")
    code_in, sa_relogin = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
    sa_new_token = sa_relogin.get('token')

    code_chk, resp_chk = http_req('GET', f'/get-institutes?institute_id={created_id}', token=sa_new_token)
    persisted_inst = resp_chk.get('data', [])[0] if isinstance(resp_chk, dict) and resp_chk.get('data') else None
    passed = code_chk == 200 and persisted_inst is not None and persisted_inst.get('name') == updated_name and persisted_inst.get('active_status') is True
    results.append(('Persistence Across Logout/Login Cycle', passed, f"HTTP {code_chk}, Name: '{persisted_inst.get('name') if persisted_inst else None}', Status: {persisted_inst.get('active_status') if persisted_inst else None}"))
    print(f"\n[Test 15] Persistence Check After Re-login -> HTTP {code_chk} | Name: '{persisted_inst.get('name') if persisted_inst else None}' | Active: {persisted_inst.get('active_status') if persisted_inst else None}")

    # Clean up test institute (soft delete)
    print(f"\n[Cleanup] Soft-deleting temporary test institute {created_id}...")
    code_del, resp_del = http_req('DELETE', f'/delete/institute/{created_id}', token=sa_new_token)
    print(f"Cleanup Status -> HTTP {code_del}: {resp_del.get('statusMessage', resp_del)}")

    # -------------------------------------------------------------
    # Summary
    # -------------------------------------------------------------
    print("\n" + "=" * 80)
    print("PHASE 3 SUPER ADMIN TEST RESULTS SUMMARY:")
    print("=" * 80)
    all_passed = True
    for name, status, details in results:
        status_text = "[PASS]" if status else "[FAIL]"
        if not status:
            all_passed = False
        print(f"  {status_text} {name:<50} -> {details}")
    
    print("=" * 80)
    print(f"OVERALL STATUS: {'ALL TESTS PASSED' if all_passed else 'SOME TESTS FAILED'}")
    print("=" * 80)

if __name__ == '__main__':
    run_phase3_super_admin_suite()
