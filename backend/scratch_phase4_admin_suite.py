import urllib.request
import urllib.error
import json
import uuid
import time

BASE_URL = 'http://127.0.0.1:5001/edu/api'

def http_req(method, path, data=None, token=None, timeout=45):
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

def run_phase4_suite():
    results = []
    print("=" * 80)
    print("PHASE 4 — ADMIN / INSTITUTE: CATEGORIES, QUESTIONS & AI ENGINES TEST SUITE")
    print("=" * 80)

    # 1. Admin Login (ajay / Admin@123)
    code, login_resp = http_req('POST', '/login', {'identifier': 'ajay', 'password': 'Admin@123'})
    admin_token = login_resp.get('token')
    admin_user = login_resp.get('user', {})
    inst_id = admin_user.get('institute_id')
    user_id = admin_user.get('user_id')
    print(f"\n[Auth] Admin Login -> HTTP {code} | Institute ID: {inst_id} | Token Acquired: {bool(admin_token)}")

    if not admin_token or not inst_id:
        print("FATAL: Admin login failed or institute_id missing.")
        return

    test_uid = uuid.uuid4().hex[:6].upper()
    cat_name = f"QA Assessment Bank {test_uid}"

    # =========================================================================
    # A. CATEGORY / SUBJECT TESTING
    # =========================================================================
    print("\n--- [A. CATEGORY / SUBJECT TESTING] ---")

    # A1. Validation (Empty payload / missing name)
    code, resp = http_req('POST', '/add-categories', {}, token=admin_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('Category Validation: Missing Name', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[A1] Missing Category Name -> HTTP {code}: {resp.get('statusMessage')}")

    # A2. Validation (Invalid Institute UUID)
    code, resp = http_req('POST', '/add-categories', {'name': cat_name, 'institute_id': 'invalid-uuid-123', 'type': 'objective'}, token=admin_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('Category Validation: Invalid Institute ID', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[A2] Invalid Institute UUID -> HTTP {code}: {resp.get('statusMessage')}")

    # A3. Create Category
    valid_cat_payload = {
        "name": cat_name,
        "description": "Comprehensive QA test question bank category",
        "institute_id": inst_id,
        "type": "objective",
        "who_inputs": "faculty",
        "evaluation": "auto",
        "status": "true",
        "mark_for_each_question": 2,
        "public_access": True,
        "created_by": user_id
    }
    code, resp = http_req('POST', '/add-categories', valid_cat_payload, token=admin_token)
    passed = code == 201 and resp.get('status') is True
    results.append(('Create Category / Question Bank Container', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[A3] Create Category -> HTTP {code}: {resp.get('statusMessage')}")

    # A4. Search / Fetch Category by Name & Retrieve Category ID
    code, resp = http_req('GET', f'/category-details?name={test_uid}&institute_id={inst_id}', token=admin_token)
    cat_data = resp.get('data', []) if isinstance(resp, dict) else []
    created_cat = next((c for c in cat_data if c.get('name') == cat_name), None)
    cat_id = created_cat.get('category_id') if created_cat else None
    passed = code == 200 and cat_id is not None
    results.append(('Search & Verify Created Category', passed, f"HTTP {code}, Cat ID: {cat_id}"))
    print(f"[A4] Search Category -> HTTP {code} | Category ID: {cat_id}")

    # A5. Edit Category
    updated_cat_name = f"{cat_name} - Updated"
    edit_cat_payload = {
        "name": updated_cat_name,
        "description": "Updated QA category description with expanded scope",
        "type": "objective",
        "mark_for_each_question": 4,
        "status": "true"
    }
    code, resp = http_req('PUT', f'/update-category/{cat_id}', edit_cat_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Edit Category / Subject Details', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[A5] Edit Category -> HTTP {code}: {resp.get('statusMessage')}")

    # Verify Edit
    code, resp = http_req('GET', f'/category-details?category_id={cat_id}', token=admin_token)
    updated_cat_data = resp.get('data', [])[0] if isinstance(resp, dict) and resp.get('data') else {}
    passed = updated_cat_data.get('name') == updated_cat_name and updated_cat_data.get('mark_each_question') == 4
    results.append(('Verify Edited Category State', passed, f"Name: {updated_cat_data.get('name')}, Marks: {updated_cat_data.get('mark_each_question')}"))
    print(f"[A6] Verify Category Edit -> Name: {updated_cat_data.get('name')} | Marks: {updated_cat_data.get('mark_each_question')}")

    # =========================================================================
    # B. QUESTION BANK & AUTHORING (4 TYPES)
    # =========================================================================
    print("\n--- [B. QUESTION BANK AUTHORING (4 TYPES) & VALIDATIONS] ---")

    # B1. Required Fields Validation (Missing Category & Questions)
    code, resp = http_req('POST', '/add-question', {"institute_id": inst_id, "questions": []}, token=admin_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('Question Validation: Empty Questions List', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B1] Empty Questions Validation -> HTTP {code}: {resp.get('statusMessage')}")

    # B2. Add Single Choice (choose) Question
    scq_payload = {
        "institute_id": inst_id,
        "category_id": cat_id,
        "created_by": user_id,
        "questions": [
            {
                "type": "choose",
                "text": f"Which protocol is used for secure client-server communication? ({test_uid})",
                "marks": 2,
                "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
                "correct_indices": [1] # HTTPS
            }
        ]
    }
    code, resp = http_req('POST', '/add-question', scq_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Add Single Choice (SCQ) Question', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B2] Add Single Choice Question -> HTTP {code}: {resp.get('statusMessage')}")

    # B3. Add Multiple Choice (multi) Question
    mcq_payload = {
        "institute_id": inst_id,
        "category_id": cat_id,
        "created_by": user_id,
        "questions": [
            {
                "type": "multi",
                "text": f"Select all database types supported by the platform: ({test_uid})",
                "marks": 4,
                "options": ["SQL Server", "SQLite", "MongoDB", "PostgreSQL"],
                "correct_indices": [0, 1] # SQL Server & SQLite
            }
        ]
    }
    code, resp = http_req('POST', '/add-question', mcq_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Add Multiple Choice (MCQ) Question', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B3] Add Multiple Choice Question -> HTTP {code}: {resp.get('statusMessage')}")

    # B4. Add Fill in the Blank (fill) Question
    fib_payload = {
        "institute_id": inst_id,
        "category_id": cat_id,
        "created_by": user_id,
        "questions": [
            {
                "type": "fill",
                "text": f"The standard port for HTTP communication is ___. ({test_uid})",
                "marks": 2,
                "answerText": "80"
            }
        ]
    }
    code, resp = http_req('POST', '/add-question', fib_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Add Fill in the Blank (FIB) Question', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B4] Add Fill in the Blank Question -> HTTP {code}: {resp.get('statusMessage')}")

    # B5. Add Descriptive / Subjective Question (Long Text & Special Characters)
    long_desc = "Explain in detail the ACID properties (Atomicity, Consistency, Isolation, Durability) in relational databases. " * 3
    special_chars_model = "Atomicity: All-or-nothing; Consistency: Valid state invariants & constraints; Isolation: Serializability level ≥ READ COMMITTED; Durability: Write-Ahead Logging (WAL) & non-volatile storage commit (100% data retention)!"
    desc_payload = {
        "institute_id": inst_id,
        "category_id": cat_id,
        "created_by": user_id,
        "questions": [
            {
                "type": "descriptive",
                "text": f"{long_desc} ({test_uid})",
                "marks": 10,
                "answerText": special_chars_model
            }
        ]
    }
    code, resp = http_req('POST', '/add-question', desc_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Add Descriptive Question with Long Text & Special Chars', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B5] Add Descriptive Question -> HTTP {code}: {resp.get('statusMessage')}")

    # B6. Fetch and Verify all 4 Question Types in Question Bank
    code, resp = http_req('GET', f'/get-questions-details?category_id={cat_id}&institute_id={inst_id}', token=admin_token)
    q_list = resp.get('data', []) if isinstance(resp, dict) else []
    q_types = [q.get('type') for q in q_list]
    passed = code == 200 and len(q_list) == 4 and set(['choose', 'multi', 'fill', 'descriptive']).issubset(set(q_types))
    results.append(('Verify All 4 Question Types in Bank', passed, f"Found {len(q_list)} questions: {q_types}"))
    print(f"[B6] Verify 4 Question Types -> HTTP {code} | Total: {len(q_list)} | Types: {q_types}")

    # B7. Edit / Update a Question
    first_q = q_list[0] if q_list else {}
    first_q_id = first_q.get('id')
    edit_q_payload = {
        "type": first_q.get('type'),
        "text": f"{first_q.get('text')} [Edited by QA]",
        "marks": 5,
        "options": ["HTTP", "HTTPS", "FTP", "SSH"],
        "correct_indices": [1]
    }
    code, resp = http_req('PUT', f'/update-question/{first_q_id}', edit_q_payload, token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Edit / Update Question & Options', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B7] Edit Question -> HTTP {code}: {resp.get('statusMessage')}")

    # B8. Delete a Question
    del_q = q_list[-1] if len(q_list) > 1 else {}
    del_q_id = del_q.get('id')
    code, resp = http_req('DELETE', f'/delete/question/{del_q_id}', token=admin_token)
    passed = code == 200 and resp.get('status') is True
    results.append(('Delete Question from Bank', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
    print(f"[B8] Delete Question -> HTTP {code}: {resp.get('statusMessage')}")

    # =========================================================================
    # C. AI QUESTION GENERATION (OpenAI API)
    # =========================================================================
    print("\n--- [C. AI QUESTION GENERATION ENGINE (OpenAI API)] ---")

    # C1. Empty / Missing Content Validation
    code, resp = http_req('POST', '/create-question-using-ai', {"source_text": "", "type": "choose"}, token=admin_token)
    passed = code == 400 and resp.get('status') is False
    results.append(('AI Generation Validation: Empty Content Rejection', passed, f"HTTP {code}: {resp.get('statusMessage', resp.get('error'))}"))
    print(f"[C1] Empty Content Rejection -> HTTP {code}: {resp.get('statusMessage', resp.get('error'))}")

    # C2. Generate Questions from Valid Content (Single Choice / choose, Medium, count 2)
    sample_source = """
    Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. 
    Instead of buying, owning, and maintaining physical servers, organizations can access technology services 
    such as compute power, storage, and databases on an as-needed basis from a cloud provider like AWS, Azure, or GCP.
    """
    ai_gen_payload = {
        "source_text": sample_source,
        "type": "choose",
        "complexity": "medium",
        "number_of_questions": 2,
        "number_of_options": 4,
        "marks_per_question": 2,
        "institute_id": inst_id,
        "user_id": user_id
    }
    print("[C2] Invoking OpenAI API for Question Generation...")
    code, ai_resp = http_req('POST', '/create-question-using-ai', ai_gen_payload, token=admin_token, timeout=60)
    ai_data = ai_resp.get('data', []) if isinstance(ai_resp, dict) else []
    if isinstance(ai_data, dict):
        ai_data = [ai_data]
    passed = code == 200 and len(ai_data) > 0 and 'question_text' in ai_data[0]
    results.append(('AI Question Generation (OpenAI API)', passed, f"HTTP {code}, Generated {len(ai_data)} questions. Sample: '{ai_data[0].get('question_text')[:60] if ai_data else None}...'"))
    print(f"[C2] AI Question Generation -> HTTP {code} | Generated {len(ai_data)} questions: '{ai_data[0].get('question_text')[:60] if ai_data else None}...'")

    # C3. Verify Saving AI-Generated Question to Question Bank
    if ai_data:
        gen_q = ai_data[0]
        save_gen_payload = {
            "institute_id": inst_id,
            "category_id": cat_id,
            "created_by": user_id,
            "questions": [
                {
                    "type": "choose",
                    "text": gen_q.get('question_text'),
                    "marks": 2,
                    "options": gen_q.get('options', ["A", "B", "C", "D"]),
                    "correct_indices": [0]
                }
            ]
        }
        code, resp = http_req('POST', '/add-question', save_gen_payload, token=admin_token)
        passed = code == 200 and resp.get('status') is True
        results.append(('Save AI-Generated Question to Bank', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
        print(f"[C3] Save AI Question -> HTTP {code}: {resp.get('statusMessage')}")

    # =========================================================================
    # D. QUESTION FINE-TUNING (OpenAI API)
    # =========================================================================
    print("\n--- [D. QUESTION FINE-TUNING ENGINE (OpenAI API)] ---")

    # D1. Fine-Tune an Existing Question
    original_q_text = "What is database normalization?"
    original_a_text = "Database normalization organizes tables to reduce redundancy."
    fine_tune_payload = {
        "question_text": original_q_text,
        "answer_text": original_a_text,
        "additional_instructions": "Make the question more specific and the answer comprehensively detailed for a senior database engineer.",
        "institute_id": inst_id,
        "user_id": user_id
    }
    print("[D1] Invoking OpenAI API for Question Fine-Tuning...")
    code, ft_resp = http_req('POST', '/fine-tune-question', fine_tune_payload, token=admin_token, timeout=60)
    ft_data = ft_resp.get('data', {}) if isinstance(ft_resp, dict) else {}
    improved_q = ft_data.get('question_text')
    improved_a = ft_data.get('answer_text')
    passed = code == 200 and bool(improved_q) and bool(improved_a)
    results.append(('AI Question Fine-Tuning (OpenAI API)', passed, f"HTTP {code}, Improved Q: '{improved_q[:60] if improved_q else None}...'"))
    print(f"[D1] Fine-Tuning Response -> HTTP {code} | Improved Q: '{improved_q[:60] if improved_q else None}...'")

    # D2. Verify Updating Question with Fine-Tuned Content in DB
    if first_q_id and improved_q:
        ft_update_payload = {
            "type": "descriptive",
            "text": improved_q,
            "answerText": improved_a,
            "marks": 5
        }
        code, resp = http_req('PUT', f'/update-question/{first_q_id}', ft_update_payload, token=admin_token)
        passed = code == 200 and resp.get('status') is True
        results.append(('Persist Fine-Tuned Question into Database', passed, f"HTTP {code}: {resp.get('statusMessage')}"))
        print(f"[D2] Persist Fine-Tuned Question -> HTTP {code}: {resp.get('statusMessage')}")

    # Cleanup: Delete the temporary test category
    print(f"\n[Cleanup] Soft-deleting test category {cat_id}...")
    code_del_cat, resp_del_cat = http_req('DELETE', f'/delete/category/{cat_id}', token=admin_token)
    print(f"Cleanup Status -> HTTP {code_del_cat}: {resp_del_cat.get('statusMessage', resp_del_cat)}")

    # =========================================================================
    # SUMMARY
    # =========================================================================
    print("\n" + "=" * 80)
    print("PHASE 4 ADMIN TEST RESULTS SUMMARY:")
    print("=" * 80)
    all_passed = True
    for name, status, details in results:
        status_text = "[PASS]" if status else "[FAIL]"
        if not status:
            all_passed = False
        print(f"  {status_text} {name:<52} -> {details}")
    
    print("=" * 80)
    print(f"OVERALL STATUS: {'ALL TESTS PASSED' if all_passed else 'SOME TESTS FAILED'}")
    print("=" * 80)

if __name__ == '__main__':
    run_phase4_suite()
