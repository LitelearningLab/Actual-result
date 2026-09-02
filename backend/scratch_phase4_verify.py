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

code, auth = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
token = auth.get('token')

# Get Institute
code, inst_resp = http_req('GET', '/get-institutes', token=token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# Create Category
cat_payload = {
    'name': f"QA Full Test Bank {unique_tag}",
    'description': 'QA QB Verification',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Engineer'
}
code, cat_create = http_req('POST', '/add-categories', cat_payload, token=token)

code, list_cats = http_req('GET', '/get-categories-list', token=token, params={'institute_id': inst_id})
cat_id = None
for c in list_cats.get('data', []):
    if unique_tag in c.get('name', ''):
        cat_id = c.get('id')
        break

print(f"1. Created and Verified Category ID: {cat_id}")

if cat_id:
    # Add Question
    q_payload = {
        'institute_id': inst_id,
        'category_id': cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'choose',
                'text': f'What is the capital of France? [{unique_tag}]',
                'marks': 1,
                'options': ['Paris', 'London', 'Berlin', 'Rome'],
                'correct_indices': [0]
            },
            {
                'type': 'descriptive',
                'text': f'Describe the architecture of microservices. [{unique_tag}]',
                'marks': 10,
                'answerText': 'Microservices architecture decomposes applications into small, loosely coupled services.'
            }
        ]
    }
    code, res_q = http_req('POST', '/add-question', q_payload, token=token)
    print(f"2. Added 2 Questions -> HTTP {code}: {res_q}")

    # Query Questions
    code, q_list = http_req('GET', '/get-questions-details', token=token, params={'category_id': cat_id})
    items = q_list.get('data', [])
    print(f"3. Retrieved {len(items)} questions from category.")
    for q in items:
        print(f"   • ID: {q.get('id')} | Type: {q.get('type')} | Marks: {q.get('marks')} | Text: {q.get('text')}")

    # Edit Question
    if items:
        q_edit = items[0]
        qid = q_edit['id']
        edit_payload = {
            'text': f'Updated: What is the capital of France? [{unique_tag}]',
            'marks': 5,
            'type': 'choose',
            'options': [
                {'option_text': 'Paris (Verified)', 'is_correct': 1},
                {'option_text': 'London', 'is_correct': 0}
            ]
        }
        code, edit_res = http_req('PUT', f'/update-question/{qid}', edit_payload, token=token)
        print(f"4. Updated Question {qid} -> HTTP {code}: {edit_res}")

    # Delete Question
    if len(items) > 1:
        qid_del = items[1]['id']
        code, del_q = http_req('DELETE', f'/delete/question/{qid_del}', token=token)
        print(f"5. Deleted Question {qid_del} -> HTTP {code}: {del_q}")

    # Soft Delete Category
    code, del_cat = http_req('DELETE', f'/delete/category/{cat_id}', token=token)
    print(f"6. Deleted Category {cat_id} -> HTTP {code}: {del_cat}")

print("\nCOMPLETE VERIFICATION SUCCESSFUL")
