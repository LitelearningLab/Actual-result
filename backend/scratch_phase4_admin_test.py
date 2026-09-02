import urllib.request
import urllib.error
import json
import uuid
import time

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
print("PHASE 4 — ADMIN / INSTITUTE: CATEGORIES, QUESTION BANKS & AI ENGINE QA")
print("="*75)

# Step 0: Auth as Super Admin / Admin
code, auth = http_req('POST', '/login', {'identifier': 'praveen', 'password': 'Admin@123'})
token = auth.get('token')
print(f"[Auth] Logged in successfully -> Token: {bool(token)}")

# Fetch an active institute ID to anchor categories
code, inst_resp = http_req('GET', '/get-institutes', token=token)
institutes = inst_resp.get('data', []) if isinstance(inst_resp, dict) else []
if not institutes:
    print("[ERROR] No institutes found to attach categories to.")
    exit(1)

test_inst = institutes[0]
inst_id = test_inst.get('institute_id')
print(f"[Setup] Using Test Institute: '{test_inst.get('name')}' (ID: {inst_id})")

unique_tag = str(uuid.uuid4())[:8]

# =========================================================================
# PART A: CATEGORY / SUBJECT TESTING
# =========================================================================
print("\n" + "="*50)
print("PART A: CATEGORY / SUBJECT TESTING")
print("="*50)

# A1. Category Validation (Empty / Missing fields)
print("\n[A1] Category Validation (Missing Name)")
code, res = http_req('POST', '/add-categories', {'institute_id': inst_id, 'type': 'objective'}, token=token)
print(f"Missing Name -> HTTP {code}: {res}")

print("\n[A2] Category Validation (Missing Institute)")
code, res = http_req('POST', '/add-categories', {'name': 'No Institute Cat', 'type': 'objective'}, token=token)
print(f"Missing Institute -> HTTP {code}: {res}")

print("\n[A3] Category Validation (Invalid Institute GUID)")
code, res = http_req('POST', '/add-categories', {'name': 'Invalid Inst Cat', 'institute_id': 'NOT-A-UUID', 'type': 'objective'}, token=token)
print(f"Invalid UUID Institute -> HTTP {code}: {res}")

# A4. Create Category (Positive)
print("\n[A4] Create Category (Positive)")
cat_name = f"QA Subject Category {unique_tag}"
cat_payload = {
    'name': cat_name,
    'description': 'Comprehensive automated QA testing category for multi-question bank evaluation',
    'institute_id': inst_id,
    'type': 'objective',
    'who_inputs': 'candidate',
    'evaluation': 'automated',
    'status': 'true',
    'mark_for_each_question': 2,
    'public_access': True,
    'created_by': 'QA Engineer'
}
code, cat_create_res = http_req('POST', '/add-categories', cat_payload, token=token)
print(f"Create Category -> HTTP {code}: {cat_create_res}")

# Fetch created category ID
code, list_cats = http_req('GET', '/get-categories-list', token=token, params={'institute_id': inst_id, 'name': cat_name})
cat_list = list_cats.get('data', []) if isinstance(list_cats, dict) else []
created_cat_id = cat_list[0].get('category_id') if cat_list else None
print(f"Fetched Created Category ID: {created_cat_id} | Name: {cat_name}")

# A5. Edit Category
if created_cat_id:
    print("\n[A5] Edit / Update Category")
    update_cat_payload = {
        'category_id': created_cat_id,
        'name': f"{cat_name} - MODIFIED",
        'description': 'Updated category description',
        'type': 'objective',
        'institute_id': inst_id,
        'mark_for_each_question': 4,
        'status': 'true'
    }
    code, edit_res = http_req('PUT', f'/update-category/{created_cat_id}', update_cat_payload, token=token)
    print(f"Update Category -> HTTP {code}: {edit_res}")

# A6. Search & Filter Categories
print("\n[A6] Search & Filter Categories")
code, search_cat = http_req('GET', '/get-categories-list', token=token, params={'name': unique_tag, 'institute_id': inst_id})
print(f"Search Category by tag '{unique_tag}' -> HTTP {code} | Matches: {len(search_cat.get('data', [])) if isinstance(search_cat, dict) else 0}")

# =========================================================================
# PART B: QUESTION BANK AUTHORING (SCQ, MCQ, FIB, DESCRIPTIVE)
# =========================================================================
print("\n" + "="*50)
print("PART B: QUESTION BANK MULTI-TYPE AUTHORING & VALIDATIONS")
print("="*50)

if created_cat_id:
    # B1. Negative Validation: Empty Question text / Missing Category
    print("\n[B1] Question Validation: Missing Institution / Category")
    code, q_err1 = http_req('POST', '/add-question', {'questions': [{'text': 'Test?', 'type': 'choose'}]}, token=token)
    print(f"Missing Category/Institute -> HTTP {code}: {q_err1}")

    print("\n[B2] Question Validation: Empty Questions Array")
    code, q_err2 = http_req('POST', '/add-question', {'institute_id': inst_id, 'category_id': created_cat_id, 'questions': []}, token=token)
    print(f"Empty Questions List -> HTTP {code}: {q_err2}")

    # B3. Create Single Choice Question (SCQ)
    print("\n[B3] Authoring Single Choice Question (choose)")
    scq_payload = {
        'institute_id': inst_id,
        'category_id': created_cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'choose',
                'text': f'What is the time complexity of binary search on a sorted array of size n? [{unique_tag}]',
                'marks': 2,
                'options': ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'],
                'correct_indices': [1] # O(log n)
            }
        ]
    }
    code, scq_res = http_req('POST', '/add-question', scq_payload, token=token)
    print(f"Create SCQ -> HTTP {code}: {scq_res}")

    # B4. Create Multiple Choice Question (MCQ)
    print("\n[B4] Authoring Multiple Choice Question (multi)")
    mcq_payload = {
        'institute_id': inst_id,
        'category_id': created_cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'multi',
                'text': f'Which of the following are non-linear data structures? [{unique_tag}]',
                'marks': 4,
                'options': ['Binary Search Tree', 'Array', 'Graph', 'Singly Linked List'],
                'correct_indices': [0, 2] # BST & Graph
            }
        ]
    }
    code, mcq_res = http_req('POST', '/add-question', mcq_payload, token=token)
    print(f"Create MCQ -> HTTP {code}: {mcq_res}")

    # B5. Create Fill in the Blank Question (FIB)
    print("\n[B5] Authoring Fill in the Blank Question (fill)")
    fib_payload = {
        'institute_id': inst_id,
        'category_id': created_cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'fill',
                'text': f'In relational databases, ACID stands for Atomicity, Consistency, Isolation, and _______. [{unique_tag}]',
                'marks': 2,
                'answerText': 'Durability'
            }
        ]
    }
    code, fib_res = http_req('POST', '/add-question', fib_payload, token=token)
    print(f"Create FIB -> HTTP {code}: {fib_res}")

    # B6. Create Descriptive Question with Long Rubric & Special Unicode Characters
    print("\n[B6] Authoring Descriptive Question (descriptive) with Unicode & Special Characters")
    unicode_prompt = f"Explain Euler's identity: e^(i*π) + 1 = 0 & ACID properties in SQL <script>/*safe*/</script>. [{unique_tag}]"
    desc_payload = {
        'institute_id': inst_id,
        'category_id': created_cat_id,
        'created_by': 'QA Admin',
        'questions': [
            {
                'type': 'descriptive',
                'text': unicode_prompt,
                'marks': 10,
                'answerText': 'Euler identity links fundamental mathematical constants (e, i, pi, 1, 0). In database systems, ACID guarantees transaction reliability: Atomicity (all-or-nothing), Consistency (valid state transitions), Isolation (concurrent safety), and Durability (committed persistence).'
            }
        ]
    }
    code, desc_res = http_req('POST', '/add-question', desc_payload, token=token)
    print(f"Create Descriptive Question -> HTTP {code}: {desc_res}")

    # B7. Search & Verify Created Questions
    print("\n[B7] Search & Verify Questions in Question Bank")
    code, q_list = http_req('GET', '/get-questions-details', token=token, params={'category_id': created_cat_id})
    questions_found = q_list.get('data', []) if isinstance(q_list, dict) else []
    print(f"Fetched Questions for Category -> HTTP {code} | Total items: {len(questions_found)}")
    for q in questions_found:
        print(f"  • ID: {q.get('question_id')} | Type: {q.get('question_type')} | Marks: {q.get('marks')} | Text: {q.get('question_text')[:60]}...")

# =========================================================================
# PART C: AI QUESTION GENERATION TESTING
# =========================================================================
print("\n" + "="*50)
print("PART C: AI QUESTION GENERATION ENGINE (LLM)")
print("="*50)

source_material = """
Python is a high-level, interpreted programming language known for its readability and concise syntax. 
Memory management in Python is handled automatically through reference counting and a generational garbage collector. 
Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple native threads 
from executing Python bytecodes simultaneously in CPython.
"""

# C1. Valid AI Generation (Single Choice, Easy)
print("\n[C1] AI Question Generation: Single Choice, 2 Questions, Easy")
ai_req_1 = {
    'language': 'English',
    'industry': 'Software Engineering',
    'target_users': 'Developers',
    'user_role': 'Software Developer',
    'type': 'choose',
    'number_of_questions': 2,
    'number_of_options': 4,
    'complexity': 'easy',
    'source_text': source_material,
    'additional_instructions': 'Ensure clear options and unambiguous correct answers.',
    'question_mark': 2,
    'recommended_words_count': 50,
    'character_count': 300,
    'institute_id': inst_id
}
code, ai_res_1 = http_req('POST', '/create-question-using-ai', ai_req_1, token=token)
print(f"AI Generation (choose) -> HTTP {code} | Status: {ai_res_1.get('status') if isinstance(ai_res_1, dict) else ai_res_1}")
if isinstance(ai_res_1, dict) and ai_res_1.get('data'):
    gen_items = ai_res_1['data'] if isinstance(ai_res_1['data'], list) else [ai_res_1['data']]
    print(f"Generated {len(gen_items)} questions:")
    for idx, item in enumerate(gen_items, 1):
        print(f"  {idx}. Q: {item.get('question_text')} | Options: {item.get('options')} | Correct: {item.get('correct_answer')}")

# C2. Valid AI Generation (Descriptive, Hard)
print("\n[C2] AI Question Generation: Descriptive, 1 Question, Hard")
ai_req_2 = {
    'language': 'English',
    'industry': 'Computer Science',
    'target_users': 'Architects',
    'user_role': 'Lead Engineer',
    'type': 'descriptive',
    'number_of_questions': 1,
    'complexity': 'hard',
    'source_text': source_material,
    'additional_instructions': 'Create an in-depth analytical question on GIL trade-offs.',
    'question_mark': 10,
    'recommended_words_count': 150,
    'character_count': 800,
    'institute_id': inst_id
}
code, ai_res_2 = http_req('POST', '/create-question-using-ai', ai_req_2, token=token)
print(f"AI Generation (descriptive) -> HTTP {code} | Status: {ai_res_2.get('status') if isinstance(ai_res_2, dict) else ai_res_2}")
if isinstance(ai_res_2, dict) and ai_res_2.get('data'):
    desc_gen = ai_res_2['data'] if isinstance(ai_res_2['data'], dict) else ai_res_2['data'][0]
    print(f"  • Generated Descriptive Q: {desc_gen.get('question_text')}")
    print(f"  • Model Answer: {str(desc_gen.get('correct_answer'))[:100]}...")

# C3. Negative AI Testing: Empty Source Text
print("\n[C3] Negative AI Generation: Empty Source Text")
ai_req_empty = ai_req_1.copy()
ai_req_empty['source_text'] = ''
code, ai_res_empty = http_req('POST', '/create-question-using-ai', ai_req_empty, token=token)
print(f"Empty Source Text -> HTTP {code}: {ai_res_empty}")

# =========================================================================
# PART D: QUESTION FINE-TUNING (LLM)
# =========================================================================
print("\n" + "="*50)
print("PART D: QUESTION FINE-TUNING ENGINE")
print("="*50)

# D1. Valid Question Fine-Tuning
print("\n[D1] Fine-Tune Question (Valid Prompt & Answer)")
ft_payload = {
    'question_text': ['What is GIL in Python?'],
    'answer_text': 'GIL is a lock in Python for threads.',
    'additional_instructions': 'Make both the question and answer more thorough, professional, and descriptive.',
    'institute_id': inst_id
}
code, ft_res = http_req('POST', '/fine-tune-question', ft_payload, token=token)
print(f"Fine-Tune Question -> HTTP {code} | Status: {ft_res.get('status') if isinstance(ft_res, dict) else ft_res}")
if isinstance(ft_res, dict) and ft_res.get('data'):
    ft_data = ft_res['data']
    print(f"  • Improved Question: {ft_data.get('question_text')}")
    print(f"  • Improved Answer: {str(ft_data.get('answer_text'))[:120]}...")

# D2. Persistence of Fine-Tuned Question into Question Bank
if created_cat_id and isinstance(ft_res, dict) and ft_res.get('data'):
    print("\n[D2] Persisting Fine-Tuned Question into Category QB")
    persisted_ft_payload = {
        'institute_id': inst_id,
        'category_id': created_cat_id,
        'created_by': 'QA Admin (AI Fine-Tuned)',
        'questions': [
            {
                'type': 'descriptive',
                'text': ft_res['data'].get('question_text'),
                'marks': 5,
                'answerText': ft_res['data'].get('answer_text')
            }
        ]
    }
    code, save_ft = http_req('POST', '/add-question', persisted_ft_payload, token=token)
    print(f"Save Fine-Tuned Question -> HTTP {code}: {save_ft}")

# =========================================================================
# PART E: CLEANUP & SOFT DELETE VERIFICATION
# =========================================================================
print("\n" + "="*50)
print("PART E: DELETE / SOFT DELETE VERIFICATION")
print("="*50)

if created_cat_id:
    print(f"\n[E1] Soft-Delete Category ID: {created_cat_id}")
    code, del_cat = http_req('DELETE', f'/delete/category/{created_cat_id}', token=token)
    print(f"Delete Category -> HTTP {code}: {del_cat}")

    # Verify that deleted category is omitted from standard list
    code, verify_del = http_req('GET', '/get-categories-list', token=token, params={'category_id': created_cat_id, 'institute_id': inst_id})
    active_records = [c for c in verify_del.get('data', []) if c.get('category_id') == created_cat_id]
    print(f"Verify Category removed from Active List -> Found: {len(active_records)} (Expected: 0)")

print("\n" + "="*75)
print("PHASE 4 QA TEST SUITE COMPLETED")
print("="*75)
