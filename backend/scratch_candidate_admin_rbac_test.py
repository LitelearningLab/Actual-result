import urllib.request
import urllib.error
import json

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None):
    url = BASE_URL + path
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

# Candidate login
code, resp = http_req('POST', '/login', {'identifier': 'michael', 'password': 'Admin@123'})
cand_token = resp.get('token')

print("="*60)
print("TESTING CANDIDATE (USER ROLE) INVOKING ADMIN REST APIs")
print("="*60)

admin_endpoints = [
    ('POST', '/add-categories', {'category_name': 'Hacked Category'}),
    ('POST', '/add-question', {'question_text': 'Hacked Question'}),
    ('POST', '/register-exam', {'exam_name': 'Hacked Exam'}),
    ('POST', '/add-exam-schedule', {'exam_id': '123'}),
    ('GET', '/get-institutes', None),
    ('GET', '/get-institute-list', None),
]

for method, path, body in admin_endpoints:
    code, res = http_req(method, path, body, token=cand_token)
    print(f"Candidate calling {method} {path} -> HTTP {code} | Res: {str(res)[:100]}")
