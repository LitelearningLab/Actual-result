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

# Auth
code, auth = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
token = auth.get('token')

# Get Institute
code, inst_resp = http_req('GET', '/get-institutes', token=token)
inst_id = inst_resp['data'][0]['institute_id']

unique_tag = str(uuid.uuid4())[:8]

# Create Category
cat_payload = {
    'name': f"QA Question Bank {unique_tag}",
    'description': 'QA QB for Multi-type test',
    'institute_id': inst_id,
    'type': 'objective',
    'status': 'true',
    'mark_for_each_question': 2,
    'created_by': 'QA Engineer'
}
code, cat_create = http_req('POST', '/add-categories', cat_payload, token=token)
print(f"1. Category Created -> HTTP {code}: {cat_create}")

# Fetch created category ID
code, list_cats = http_req('GET', '/get-categories-list', token=token, params={'institute_id': inst_id})
cat_id = None
for c in list_cats.get('data', []):
    if unique_tag in c.get('name', ''):
        cat_id = c.get('id')
        break

print(f"2. Retrieved Category ID: {cat_id}")

if cat_id:
    # 3. Create SCQ
    scq_payload = {
        'institute_id': inst_id,
        'category_id': cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'choose',
                'text': f'What is binary search time complexity? [{unique_tag}]',
                'marks': 2,
                'options': ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
                'correct_indices': [1]
            }
        ]
    }
    code, res_scq = http_req('POST', '/add-question', scq_payload, token=token)
    print(f"3. Create SCQ -> HTTP {code}: {res_scq}")

    # 4. Create MCQ
    mcq_payload = {
        'institute_id': inst_id,
        'category_id': cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'multi',
                'text': f'Select all non-linear data structures: [{unique_tag}]',
                'marks': 4,
                'options': ['BST', 'Array', 'Graph', 'Linked List'],
                'correct_indices': [0, 2]
            }
        ]
    }
    code, res_mcq = http_req('POST', '/add-question', mcq_payload, token=token)
    print(f"4. Create MCQ -> HTTP {code}: {res_mcq}")

    # 5. Create FIB
    fib_payload = {
        'institute_id': inst_id,
        'category_id': cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'fill',
                'text': f'ACID in DB stands for Atomicity, Consistency, Isolation, and _______. [{unique_tag}]',
                'marks': 2,
                'answerText': 'Durability'
            }
        ]
    }
    code, res_fib = http_req('POST', '/add-question', fib_payload, token=token)
    print(f"5. Create FIB -> HTTP {code}: {res_fib}")

    # 6. Create Descriptive Question with Unicode / Special Characters
    desc_payload = {
        'institute_id': inst_id,
        'category_id': cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'descriptive',
                'text': f'Explain Euler formula: e^(i*π) + 1 = 0 & ACID in SQL. [{unique_tag}]',
                'marks': 10,
                'answerText': 'Euler formula links mathematical constants. ACID guarantees database transaction integrity.'
            }
        ]
    }
    code, res_desc = http_req('POST', '/add-question', desc_payload, token=token)
    print(f"6. Create Descriptive Question -> HTTP {code}: {res_desc}")

    # 7. Query Questions from Bank
    code, q_list = http_req('GET', '/get-questions-details', token=token, params={'category_id': cat_id})
    items = q_list.get('data', []) if isinstance(q_list, dict) else []
    print(f"7. Query Questions in QB -> HTTP {code} | Total items found: {len(items)}")
    for q in items:
        print(f"   • ID: {q.get('question_id')} | Type: {q.get('question_type')} | Marks: {q.get('marks')} | Q: {q.get('question_text')[:50]}...")
        if q.get('options'):
            print(f"     Options: {[(o.get('option_text'), o.get('is_correct')) for o in q.get('options')]}")

    # 8. Update Question
    if items:
        q_to_edit = items[0]
        qid = q_to_edit.get('question_id')
        edit_payload = {
            'question_text': f"Updated Question Text [{unique_tag}]",
            'marks': 5,
            'category_id': cat_id,
            'institute_id': inst_id,
            'type': q_to_edit.get('question_type'),
            'options': [{'option_text': 'Updated Option 1', 'is_correct': 1}]
        }
        code, edit_q_res = http_req('PUT', f'/update-question/{qid}', edit_payload, token=token)
        print(f"8. Update Question -> HTTP {code}: {edit_q_res}")

    # 9. Delete Question
    if len(items) > 1:
        q_to_delete = items[1]
        qid_del = q_to_delete.get('question_id')
        code, del_q_res = http_req('DELETE', f'/delete/question/{qid_del}', token=token)
        print(f"9. Delete Question -> HTTP {code}: {del_q_res}")

    # 10. Delete Category
    code, del_cat_res = http_req('DELETE', f'/delete/category/{cat_id}', token=token)
    print(f"10. Delete Category -> HTTP {code}: {del_cat_res}")

print("\nQB TEST COMPLETE")
