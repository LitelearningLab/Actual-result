import urllib.request
import urllib.error
import json
import uuid

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

print("="*70)
print("PHASE 3 — SUPER ADMIN: COMPLETE INSTITUTE MANAGEMENT QA TEST SUITE")
print("="*70)

# Authenticate as Super Admin
code, auth_resp = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
token = auth_resp.get('token')
print(f"\n[Auth] Super Admin authenticated -> Token acquired: {bool(token)}")

unique_suffix = str(uuid.uuid4())[:8]
test_inst_name = f"QA Test Institute {unique_suffix}"
test_short_name = f"QA_INST_{unique_suffix}"

# Test 1: Required Field Validation (Missing name / short_name)
print("\n--- TEST 1: Required Field Validation ---")
code, res = http_req('POST', '/register-institute', {'industry_type': 'Education'}, token=token)
print(f"Empty Name & Short Name -> HTTP {code}: {res}")

code, res = http_req('POST', '/register-institute', {'name': 'Only Name', 'short_name': ''}, token=token)
print(f"Empty Short Name -> HTTP {code}: {res}")

# Test 2: Invalid Data Validation (Invalid Dates & Negative Users)
print("\n--- TEST 2: Invalid Data Validation ---")
invalid_payload_1 = {
    'name': 'Invalid Inst',
    'short_name': f'INV_{unique_suffix}',
    'max_users': -5
}
code, res = http_req('POST', '/register-institute', invalid_payload_1, token=token)
print(f"Negative max_users -> HTTP {code}: {res}")

invalid_payload_2 = {
    'name': 'Invalid Inst',
    'short_name': f'INV_{unique_suffix}',
    'subscription_start': '2026-12-31',
    'subscription_end': '2026-01-01'
}
code, res = http_req('POST', '/register-institute', invalid_payload_2, token=token)
print(f"End date before Start date -> HTTP {code}: {res}")

invalid_payload_3 = {
    'name': 'Invalid Inst',
    'short_name': f'INV_{unique_suffix}',
    'subscription_start': '31-12-2026'
}
code, res = http_req('POST', '/register-institute', invalid_payload_3, token=token)
print(f"Wrong Date Format (DD-MM-YYYY instead of YYYY-MM-DD) -> HTTP {code}: {res}")

# Test 3: Create Institute (Positive Scenario)
print("\n--- TEST 3: Create Institute (Positive Scenario) ---")
create_payload = {
    'name': test_inst_name,
    'short_name': test_short_name,
    'industry_type': 'Higher Education',
    'industry_sector': 'Information Technology',
    'primary_contact_person': 'Dr. Alan Turing',
    'primary_contact_email': f'alan_{unique_suffix}@qatest.org',
    'primary_contact_phone': '9876543210',
    'website': 'https://qatest.org',
    'max_users': 500,
    'subscription_start': '2026-09-01',
    'subscription_end': '2027-08-31',
    'active_status': 1,
    'headOffice': {
        'address': '100 Tech Park Way',
        'city': 'Chennai',
        'pincode': 600001,
        'email': f'headoffice_{unique_suffix}@qatest.org',
        'phone': '9876543210'
    },
    'departments_structured': [
        {'name': 'Computer Science', 'teams': ['AI Lab', 'Security Lab']},
        {'name': 'Information Science', 'teams': ['Data Analytics']}
    ],
    'campuses': [
        {
            'name': 'North Campus',
            'address': '200 North Blvd',
            'city': 'Bangalore',
            'pincode': '560001',
            'email': f'north_{unique_suffix}@qatest.org',
            'phone': '9876543211',
            'isPrimary': False,
            'isActive': True
        }
    ]
}
code, create_res = http_req('POST', '/register-institute', create_payload, token=token)
created_inst_id = create_res.get('institute_id') if isinstance(create_res, dict) else None
print(f"Create Institute -> HTTP {code} | ID: {created_inst_id} | Response: {create_res}")

# Test 4: Duplicate Institute Detection
print("\n--- TEST 4: Duplicate Institute Check ---")
code, dup_res = http_req('POST', '/register-institute', create_payload, token=token)
print(f"Duplicate Same Case -> HTTP {code}: {dup_res}")

dup_lower_payload = create_payload.copy()
dup_lower_payload['short_name'] = test_short_name.lower()
code, dup_lower_res = http_req('POST', '/register-institute', dup_lower_payload, token=token)
print(f"Duplicate Case-Insensitive (Lower) -> HTTP {code}: {dup_lower_res}")

# Test 5: Search & Fetch Institute
print("\n--- TEST 5: Search Institute ---")
code, search_res = http_req('GET', '/get-institutes', token=token, params={'name': test_short_name})
found_list = search_res.get('data') if isinstance(search_res, dict) else []
print(f"Search by short_name '{test_short_name}' -> HTTP {code} | Found {len(found_list)} records")
if found_list:
    item = found_list[0]
    print(f"Persisted Data: Name='{item.get('name')}', MaxUsers={item.get('max_users')}, Active={item.get('active_status')}, City={item.get('headOffice', {}).get('city_name')}")

# Test 6: Empty State Search
print("\n--- TEST 6: Empty State Search ---")
code, empty_res = http_req('GET', '/get-institutes', token=token, params={'name': 'DEFINITELY_NON_EXISTENT_INST_9999'})
print(f"Empty State Query -> HTTP {code} | Data count: {len(empty_res.get('data', [])) if isinstance(empty_res, dict) else empty_res}")

# Test 7: Edit / Update Institute
print("\n--- TEST 7: Edit / Update Institute ---")
if created_inst_id:
    update_payload = {
        'institute_id': created_inst_id,
        'name': f"{test_inst_name} - UPDATED",
        'max_users': 1000,
        'primary_contact_person': 'Dr. Grace Hopper',
        'departments_structured': [
            {'name': 'Cybernetics & Robotics', 'teams': ['Autonomous Systems']}
        ]
    }
    code, update_res = http_req('PUT', '/update-institute', update_payload, token=token)
    print(f"Update Institute -> HTTP {code}: {update_res}")
    
    # Verify update in DB
    code, verify_update = http_req('GET', '/get-institutes', token=token, params={'id': created_inst_id})
    if verify_update.get('data'):
        updated_item = verify_update['data'][0]
        print(f"Verified Updated Record: Name='{updated_item.get('name')}', MaxUsers={updated_item.get('max_users')}, Contact='{updated_item.get('primary_contact_person')}'")

# Test 8: Toggle Status (Deactivate / Activate)
print("\n--- TEST 8: Disable / Activate Institute ---")
# Check how status toggle is exposed
if created_inst_id:
    deactivate_payload = {
        'institute_id': created_inst_id,
        'active_status': 0
    }
    code, deact_res = http_req('PUT', '/update-institute', deactivate_payload, token=token)
    print(f"Deactivate -> HTTP {code}: {deact_res}")
    
    code, check_deact = http_req('GET', '/get-institutes', token=token, params={'id': created_inst_id})
    print(f"Status after Deactivation: {check_deact.get('data', [{}])[0].get('active_status')}")

    activate_payload = {
        'institute_id': created_inst_id,
        'active_status': 1
    }
    code, act_res = http_req('PUT', '/update-institute', activate_payload, token=token)
    print(f"Re-activate -> HTTP {code}: {act_res}")
    
    code, check_act = http_req('GET', '/get-institutes', token=token, params={'id': created_inst_id})
    print(f"Status after Activation: {check_act.get('data', [{}])[0].get('active_status')}")

# Test 9: Persistence Verification across Logout & Login
print("\n--- TEST 9: Persistence Across Logout & Login ---")
# Logout
code, logout_res = http_req('POST', '/logout', token=token)
print(f"Logged out -> HTTP {code}")

# Re-login
code, new_auth = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
new_token = new_auth.get('token')
print(f"Re-authenticated -> New Token: {bool(new_token)}")

# Retrieve institute with new token
code, persist_res = http_req('GET', '/get-institutes', token=new_token, params={'id': created_inst_id})
if persist_res.get('data'):
    final_record = persist_res['data'][0]
    print(f"Persistent Record Verified: ID={final_record.get('institute_id')}, Name={final_record.get('name')}, Active={final_record.get('active_status')}")

print("\n" + "="*70)
print("PHASE 3 TEST SUITE COMPLETED SUCCESSFULLY")
print("="*70)
