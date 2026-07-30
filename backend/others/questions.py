from db.models import Question, Option, QuestionMapping, Categories, CategoriesDepartments, CategoriesTeams, User, openai_requests
from db.db import SQLiteDB
from sqlalchemy import func, or_
import sys
import pandas as pd
import json
import datetime
from others.llm import descriptive_evaluation, openai_client

def _resolve_institute_scope(request):
    args = getattr(request, "args", {})
    institute_id = str(args.get("institute_id") or args.get("institute") or "").strip()
    if institute_id:
        return institute_id
    headers = getattr(request, "headers", {})
    return str(headers.get("X-Institute-Id") or headers.get("X-Global-Institute-Id") or "").strip()

def add_question(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:

        data = request.json
        institute_id = data.get("institute_id")
        category_id = data.get("category_id", None)
        created_by = data.get("created_by",'System')
        if not institute_id or not category_id:
            json_data = {
                "statusMessage": "Please select an Institution and Category before saving.",
                "status": False
            }
            return json_data, 400
        questions = data.get("questions", [])
        valid_questions = [
            q for q in questions
            if q and q.get("type") and str(q.get("text", "")).strip()
        ]
        if not valid_questions:
            json_data = {
                "statusMessage": "Please add at least one question before saving.",
                "status": False
            }
            return json_data, 400
        # json_data = {
        #     "statusMessage": "Category ID is required",
        #     "status": False,
        # }
        # return json_data, 400

        for data in valid_questions:
            question_type = data.get("type")
            question_text = data.get("text")
            marks = data.get("marks")
            created_by = created_by

            question_options = data.get("options")
            question_correct = data.get("correct")
            question_answer_text = data.get("answerText")
            question_correct_indices = data.get("correct_indices")

            question_data = Question(
                question_type=question_type,
                question_text=question_text,
                marks=marks,
                created_by=created_by
            )
            session.add(question_data)
            session.flush()  # To get question_data.id before commit

                # options=question_options,
                # correct=question_correct,
                # answerText=question_answer_text,
                # correct_indices=question_correct_indices,
            if question_type in ['choose', 'multi']:
                for idx, option_text in enumerate(question_options):
                    is_correct = 1 if idx in (question_correct_indices or []) else 0
                    option = Option(
                    question_id=question_data.question_id,
                    option_text=option_text,
                    is_correct=is_correct
                    )
                    session.add(option)
            else:
                question_answer = Option(
                    question_id=question_data.question_id,
                    option_text=question_answer_text,
                    is_correct=1
                )
                session.add(question_answer)
            mapping_data= QuestionMapping(
                question_id=question_data.question_id,
                category_id=category_id
            )
            session.add(mapping_data)
            session.commit()
        json_data ={
            "statusMessage": "Question inserted successfully",
            "status": True
        }
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while inserting euestion at line {sys.exc_info()[-1].tb_lineno}")
        json_data = {
            "statusMessage": "Error inserting question",
            "status": False,
        }
        return json_data, 500

def bulk_upload_questions(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    institute_id = request.form.get("institute_id", None)
    category_id = request.form.get("category_id", None)
    created_by = request.form.get("created_by", 'System')
    # get file from request
    file = request.files.get("file", None)
    if not file:
        return {"statusMessage": "No file provided", "status": False}, 400
    # read file using pandas
    filename = (getattr(file, "filename", "") or "").lower()
    df = pd.read_excel(file) if filename.endswith((".xlsx", ".xls")) else pd.read_csv(file)

    def parse_correct_indices(value):
        indices = []
        for part in str(value or "").split(","):
            part = part.strip()
            if not part:
                continue
            try:
                numeric_value = float(part)
                if numeric_value.is_integer():
                    indices.append(int(numeric_value))
            except Exception:
                pass
        return indices
    
    for index, row in df.iterrows():
        uploaded_type = row.get("Type", "")
        question_type = str(uploaded_type).strip().lower() if not pd.isna(uploaded_type) else ""
        if question_type == "choice":
            question_type = "choose"
        if question_type not in ["choose", "multi", "fill", "descriptive"]:
            question_type = "fill"
        question_text = row.get("Question")
        marks = row.get("marks", 1)
        question_correct_raw = row.get("Correct_answer", "")
        question_correct = "" if pd.isna(question_correct_raw) else str(question_correct_raw).strip()

        question_correct_indices = []
        if question_type in ["choose", "multi"]:
            question_correct_indices = parse_correct_indices(question_correct)
            if len(question_correct_indices) > 1:
                question_type = "multi"
            elif len(question_correct_indices) == 1:
                question_type = "choose"
        elif question_type == "fill" and (',' in question_correct or (len(question_correct) == 1 and question_correct in '1234567890')):
            question_type = 'choose'
            question_correct_indices = parse_correct_indices(question_correct)
            if len(question_correct_indices) > 1:
                question_type = 'multi'
        
        question_options_list = []
        for idx in range(1, 11):
            val = row.get(f"option_{idx}", None)
            if pd.isna(val):
                val = None
            question_options_list.append(val)

        question_options_list = [opt for opt in question_options_list if opt is not None]

        question_data = Question(
            question_type=question_type,
            question_text=question_text,
            marks=marks,
            created_by=created_by
        )
        session.add(question_data)
        session.flush()  # To get question_data.id before commit

        if question_type in ['choose', 'multi']:
            for idx, option_text in enumerate(question_options_list, start=1):
                is_correct = 1 if idx in (question_correct_indices or []) else 0
                option = Option(
                question_id=question_data.question_id,
                option_text=option_text,
                is_correct=is_correct
                )
                session.add(option)
        else:
            question_answer = Option(
                question_id=question_data.question_id,
                option_text=question_correct,
                is_correct=1
            )
            session.add(question_answer)
        mapping_data= QuestionMapping(
            question_id=question_data.question_id,
            category_id=category_id
        )
        session.add(mapping_data)
        session.commit()
    json_data ={
        "statusMessage": "Question inserted successfully",
        "status": True
    }
    return json_data, 200

def get_questions_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:
        filter = []
        args = getattr(request, "args", {})
        public_access_arg = args.get("public_access")
        public_access = (1 if str(public_access_arg).lower() == "true" else 0)

        active_cat_filter = (func.coalesce(Categories.is_deleted, False) == False)
        institute_scope = _resolve_institute_scope(request)

        if institute_scope:
            Category_data = session.query(Categories).filter(Categories.institute_id == institute_scope, active_cat_filter).all()
            Category_list = [c.category_id for c in Category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(Category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("category_name"):
            category_query = session.query(Categories).filter(Categories.name == f"{args.get('category_name')}", active_cat_filter)
            if public_access_arg is not None:
                category_query = category_query.filter(Categories.public_access==public_access)
            category_data = category_query.all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("category_id"):
            raw_cat_list = args.get("category_id").split(",")
            active_cats = session.query(Categories.category_id).filter(Categories.category_id.in_(raw_cat_list), active_cat_filter).all()
            category_list = [c.category_id for c in active_cats]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("departments"):
            department_ids = args.get("departments").split(",")
            category_data = session.query(CategoriesDepartments).join(Categories, Categories.category_id == CategoriesDepartments.category_id).filter(CategoriesDepartments.department_id.in_(department_ids), active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("teams"):
            team_ids = args.get("teams").split(",")
            category_data = session.query(CategoriesTeams).join(Categories, Categories.category_id == CategoriesTeams.category_id).filter(CategoriesTeams.team_id.in_(team_ids), active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("created_by"):
            category_data = session.query(Categories).filter(Categories.created_by == args.get("created_by"), active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("created_after"):
            category_data = session.query(Categories).filter(Categories.created_date >= args.get("created_after"), active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("created_before"):
            category_data = session.query(Categories).filter(Categories.created_date <= args.get("created_before"), active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))
        if args.get("public_access") is not None:
            category_data = session.query(Categories).filter(Categories.public_access == public_access, active_cat_filter).all()
            category_list = [c.category_id for c in category_data]
            mappingdata  = session.query(QuestionMapping).filter(QuestionMapping.category_id.in_(category_list)).all()
            question_list = [q.question_id for q in mappingdata]
            filter.append(Question.question_id.in_(question_list))

        questions = session.query(Question).filter(*filter).all()
        question_list = []
        for q in questions:
            # Get category information for this question & ensure category is active
            mapping = session.query(QuestionMapping).filter_by(question_id=q.question_id).first()
            if not mapping:
                continue
            category = session.query(Categories).filter(Categories.category_id == mapping.category_id, active_cat_filter).first()
            if not category:
                continue

            options = session.query(Option).filter_by(question_id=q.question_id, active_status=1).all()
            option_list = [{"id": opt.options_id, "text": opt.option_text, "is_correct": opt.is_correct} for opt in options]
            
            # Get category information for this question
            mapping = session.query(QuestionMapping).filter_by(question_id=q.question_id).first()
            category = session.query(Categories).filter_by(category_id=mapping.category_id).first() if mapping else None

            # get user infor for created_by and updated_by
            created_by_user = None
            if q.created_by is not None:
                created_by_user = session.query(User).filter_by(user_id=q.created_by).first()
            updated_by_user = None
            if q.updated_by is not None:
                updated_by_user = session.query(User).filter_by(user_id=q.updated_by).first()
            
            ans = ""
            if q.question_type in ['fill', 'descriptive', 'description', 'subjective', 'essay', 'long_answer']:
                ans_opt = next((opt.option_text for opt in options if opt.is_correct == 1), None)
                if ans_opt is None and options:
                    ans_opt = options[0].option_text
                ans = ans_opt or ""

            question_list.append({
            "id": q.question_id,
            "text": q.question_text,
            "type": q.question_type,
            "marks": q.marks,
            "options": option_list,
            "answer": ans,
            "answerText": ans,
            "category_id": mapping.category_id if mapping else None,
            "institute_id": category.institute_id if category else None,
            "category": category.name if category else None,
            "category_description": category.description if category else None,
            "created_date": q.created_date.isoformat() if getattr(q, 'created_date', None) else None,
            "created_by": created_by_user.full_name if created_by_user else None,
            "created_by_id": created_by_user.user_id if created_by_user else None,
            "updated_date": q.updated_date.isoformat() if getattr(q, 'updated_date', None) else None,
            "updated_by": updated_by_user.full_name if updated_by_user else None,
            "updated_by_id": updated_by_user.user_id if updated_by_user else None,
            })
        json_data = {"status": True, "data": question_list, "total": len(question_list)}
        return json_data, 200
    except Exception as e:
        print(f"{e} occurred while fetching question details at line {sys.exc_info()[-1].tb_lineno}")
        return {"status": False, "message": "Error fetching question details"}, 500

def update_question(question_id, request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        data = request.json
        updated_by = data.get("updated_by", "System")
        q = session.query(Question).filter_by(question_id=question_id).first()
        if not q:
            return {"statusMessage": "Question not found", "status": False}, 404

        # Update basic fields
        if 'type' in data: q.question_type = data.get('type')
        if 'text' in data: q.question_text = data.get('text')
        if 'marks' in data:
            try:
                q.marks = int(data.get('marks') or 0)
            except Exception:
                pass

        qtype = (q.question_type or data.get('type') or '').lower()
        ans_text = data.get("answerText") if data.get("answerText") is not None else (data.get("answer_text") if data.get("answer_text") is not None else data.get("answer"))

        if qtype in ['fill', 'descriptive', 'description', 'subjective', 'essay', 'long_answer']:
            if ans_text is None and 'options' in data and data.get('options'):
                opts = data.get('options')
                ans_text = opts[0] if len(opts) > 0 else ''
            
            val = str(ans_text if ans_text is not None else '')
            existing_opts = session.query(Option).filter_by(question_id=question_id).all()
            if existing_opts:
                existing_opts[0].option_text = val
                existing_opts[0].is_correct = 1
                existing_opts[0].active_status = 1
                for extra in existing_opts[1:]:
                    extra.active_status = 0
            else:
                new_opt = Option(question_id=question_id, option_text=val, is_correct=1, active_status=1)
                session.add(new_opt)
        else:
            # Update options: update overlapping options by index, append new ones, delete surplus
            if 'options' in data:
                new_options = data.get('options') or []
                correct_indices = set(data.get('correct_indices') or [])
                existing_opts = session.query(Option).filter_by(question_id=question_id).all()

                # Update overlapping options
                min_len = min(len(existing_opts), len(new_options))
                for idx in range(min_len):
                    opt = existing_opts[idx]
                    try:
                        opt.option_text = new_options[idx]
                    except Exception:
                        opt.option_text = str(new_options[idx])
                    opt.is_correct = 1 if idx in correct_indices else 0
                    opt.active_status = 1

                # Append new options if provided
                for idx in range(min_len, len(new_options)):
                    otext = new_options[idx]
                    try:
                        otext = str(otext)
                    except Exception:
                        pass
                    is_correct = 1 if idx in correct_indices else 0
                    new_opt = Option(question_id=question_id, option_text=otext, is_correct=is_correct, active_status=1)
                    session.add(new_opt)

                # inactivate surplus existing options not present in new list
                for idx in range(len(new_options), len(existing_opts)):
                    try:
                        existing_opts[idx].active_status = 0
                    except Exception:
                        pass

        # Update mapping (category)
        if 'category_id' in data and data.get('category_id'):
            # update existing mapping or insert new
            mapping = session.query(QuestionMapping).filter_by(question_id=question_id).first()
            if mapping:
                mapping.category_id = data.get('category_id')
            else:
                newmap = QuestionMapping(question_id=question_id, category_id=data.get('category_id'))
                session.add(newmap)
        q.updated_by = updated_by
        q.updated_date = datetime.datetime.utcnow()
        session.commit()
        return {"statusMessage": "Question updated", "status": True}, 200
    except Exception as e:
        session.rollback()
        return {"statusMessage": str(e), "status": False}, 500

def delete_question(question_id, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    question = session.query(Question).filter_by(question_id=question_id).first()
    if not question:
        return {"statusMessage": "Question not found", "status": False}, 404

    try:
        # delete related options
        session.query(Option).filter_by(question_id=question_id).delete()
        # delete question mappings
        session.query(QuestionMapping).filter_by(question_id=question_id).delete()
        # delete the question
        session.delete(question)
        session.commit()
        return {"statusMessage": "Question deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        return {"statusMessage": f"Error deleting question: {str(e)}", "status": False}, 500
    
def default_result():
    result = {
    "data": [
        {
        "correct_answer": "payment",
        "mark": 1,
        "question_text": "Fill in the blank: A hotel is a commercial establishment that provides lodging, meals, and other guest services for travelers and visitors in exchange for ___.",
        "type": "fill"
        },
        {
        "correct_answer": "Front Office Department",
        "mark": 1,
        "options": [
            "Housekeeping Department",
            "Front Office Department",
            "Food and Beverage Department",
            "Sales and Marketing Department"
        ],
        "question_text": "Which of the following departments in a hotel is responsible for guest registration, check-in, and check-out?",
        "type": "choose"
        },
        {
        "correct_answer": [
            0,
            2
        ],
        "mark": 1,
        "options": [
            "City Hotels",
            "One Star Hotels",
            "Airport Hotels",
            "Boutique Hotels"
        ],
        "question_text": "Select all the classifications of hotels based on location.",
        "type": "multi"
        },
        {
        "correct_answer": "The hotel industry supports tourism and travel by providing accommodation and related services to travelers and guests. It creates employment opportunities, contributing to income generation for individuals and communities. Additionally, it contributes to foreign exchange earnings by attracting international tourists. The industry also promotes cultural exchange by hosting guests from diverse backgrounds and enhances regional development by stimulating local businesses and infrastructure growth. Overall, the hotel industry plays a significant role in national and global economic development.",
        "mark": 1,
        "question_text": "Describe the role of the hotel industry in economic development and tourism.",
        "type": "descriptive"
        },
        {
        "correct_answer": "Decline in hygiene and safety standards",
        "mark": 1,
        "options": [
            "Use of technology and online booking systems",
            "Focus on sustainability and eco-friendly practices",
            "Decline in hygiene and safety standards",
            "Growth of boutique and experiential hotels"
        ],
        "question_text": "Which of the following is NOT a current trend in the hotel industry?",
        "type": "choose"
        }
    ],
    "mark": 5,
    "status": True,
    "type": "All types"
    }

    return result

def create_question_using_llm(request):
    # return default_result(), 200

    data_json = request.get_json(silent=True) or {}
    form = request.form or {}
    question_file = request.files.get("file")

    def gv(key, default=None):
        # return form value if provided, else json value, else default
        if key in form and form.get(key) is not None:
            return form.get(key)
        return data_json.get(key, default)
    institute_id = gv("institute_id", None)
    user_id = gv("user_id", None)
    language = gv("language", "English")
    industry = gv("industry", "Education")
    target_users = gv("target_users", "Students")
    user_role = gv("user_role", "Learner")
    type = gv("type", "fill")
    number_of_options = int(gv("number_of_options", 4) or 4)
    number_of_questions = int(gv("number_of_questions", 1) or 1)
    complexity = gv("complexity", "medium")
    source_text = gv("source_text", "")
    additional_instructions = gv("additional_instructions", "")
    question_mark = int(gv("marks_per_question", 2) or 2)
    if question_mark >= 2 and question_mark <=4:
        recommended_words_count = '60-65 words'
        character_count = 450
    elif question_mark >= 5 and question_mark <=9:
        recommended_words_count = '250-280 words'
        character_count = 2000
    elif question_mark >= 10 and question_mark <=15:
        recommended_words_count = '550-600 words'
        character_count = 4000
    else:
        recommended_words_count = 'as appropriate'
        character_count = 500  # default estimate
    aimodel = 2 if question_mark <5 else 1
    openai_client_instance = openai_client()

    # Token calculation based on number of questions and character count
    total_tokens_estimate = number_of_questions * character_count // 4

    system_message = '''You are an expert question setter and evaluator. Your task is to create a question and answer based on the provided source text and parameters.
    Note for Question Type : 
        'fill' --> Filling the blanks
        'choose' --> Multiple choice single answer
        'multi' --> Multiple choice multiple answers
        'descriptive' --> Question for descriptive answer, appropriate for the answer character count
    '''
    user_message = f'''    Using the following parameters, 
    - Language: {language}
    - Industry: {industry}
    - Target Users: {target_users}
    - User Role: {user_role}
    - create {number_of_questions} question(s) along with their correct answers.
    - Question Type: {type}
    - Number of Options (if applicable): {number_of_options}
    - Number of Questions: {number_of_questions}
    - Complexity Level: {complexity} (easy, medium, hard)
    - Source Text: {source_text}
    - Additional Instructions: {additional_instructions}
    - Question Mark: {question_mark}
    - Recommended Answer Length: approximately {recommended_words_count} - ({character_count} characters) (±10%),
    Provide the output as a JSON array of objects (one object per question). Each object should follow this format:
    [
        {{
            "question_text": "<The text of the question>",
            "options": ["<Option 1>", "<Option 2>", "..."] (only for 'choose' and 'multi' types),
            "correct_answer": "<The correct answer text or indices of correct options>",
            "type": "<question type>"('fill', 'choose', 'multi' or 'descriptive')",
            "mark": <question mark>
        }}
    ]
    If only a single question is requested, returning a single JSON object is also acceptable. Ensure the output is valid JSON with no surrounding markdown or text.
    '''
    # Token calculation based on number of questions and character/ word count
    total_tokens_estimate = number_of_questions * character_count // 4  
    try:
        response = openai_client_instance.chat_completion(system_message, user_message, aimodel = aimodel, max_tokens= total_tokens_estimate + 500)
        # with open("debug_response.json", "w") as debug_file:
        #     debug_file.write(response.text)
        response_json = response.json()
        # with open("debug_response.json", "r") as debug_file:
        #     response_json = json.load(debug_file)
        #     class MockResponse:
        #         def __init__(self, json_data, status=200):
        #             self._json = json_data
        #             self.status_code = status
        #         def json(self):
        #             return self._json
        #     response = MockResponse(response_json)
        if response.status_code != 200:
            print(f"Error response from LLM: {response_json}")
            error = response_json.get("error", "Unknown error")
            if isinstance(error, dict):
                error = error.get("message", str(error))
            return {"status": False, "error": error}, response.status_code
        response_tracker(response_json, institute_id, user_id)
        result_text = response_json['choices'][0]['message']['content'].strip()
        # Remove markdown code blocks if present
        if result_text.startswith('```'):
            result_text = result_text.split('```')[1]
            if result_text.startswith('json'):
                result_text = result_text[4:]
            result_text = result_text.strip()
        parsed = json.loads(result_text)
        # normalize parsed output to a consistent dict
        if isinstance(parsed, list):
            result = { 'status': True, 'data': parsed, 'type': type, 'mark': question_mark }
        elif isinstance(parsed, dict):
            parsed['status'] = True
            parsed['type'] = parsed.get('type', type)
            parsed['mark'] = parsed.get('mark', question_mark)
            result = parsed
        else:
            result = { 'status': False, 'error': 'Unexpected AI response format' }
    
    except Exception as e:
        print(f"Error in create_question_using_llm: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        return {
            "status": False,
            "error": str(e)
        }, 500
    return result, 200
def response_tracker(response_json, institute_id = None, user_id= None):
    db = SQLiteDB()
    session = db.connect()

    id = response_json.get("id", None)
    object_type = response_json.get("object", None)
    choices = response_json.get("choices", None)
    model = response_json.get("model", None)
    usage = response_json.get("usage", None)
    service_tier = response_json.get("service_tier", None)
    system_fingerprint = response_json.get("system_fingerprint", None)

    role = choices[0]['message'].get("role", None)
    content = choices[0]['message'].get("content", None)
    finish_reason = choices[0].get("finish_reason", None)

    prompt_tokens = usage.get("prompt_tokens", None)
    completion_tokens = usage.get("completion_tokens", None)
    total_tokens = usage.get("total_tokens", None)

    insert_record =  openai_requests(
        id=id,
        # object_type=object_type,
        model=model,
        service_tier=service_tier,
        system_fingerprint=system_fingerprint,
        role=role,
        content=content,
        finish_reason=finish_reason,
        prompt_tokens=prompt_tokens,
        completion_tokens=completion_tokens,
        total_tokens=total_tokens,
        institute_id=institute_id,
        created_by=user_id)
    session.add(insert_record)
    session.commit()
    session.close()
    return

def default_fine_tune_result():
    result = {
    "data":
        {
        "question_text": "What is the primary purpose of a hotel?",
        "answer_text": "The primary purpose of a hotel is to provide lodging, meals, and other guest services for travelers and visitors in exchange for payment."
        },
    "status": True
    }

    return result
def fine_tune_questions_using_llm(request):
    # return default_fine_tune_result(), 200
    
    data_json = request.get_json(silent=True)
    openai_client_instance = openai_client()

    def gv(key, default=None):
        return data_json.get(key, default)
    
    questions = gv("question_text", [])
    answer_text = gv("answer_text", "")
    additional_instructions = gv("additional_instructions", "Update the question with additional related items to make the answer also more detailed ( close to 1800 characters) ")
    institute_id = gv("institute_id", None)
    user_id = gv("user_id", None)

    try:
        system_message = "You are an expert question and answer evaluator. Your task is to evaluate and improve the provided question(s) and answer based on the given answer text and additional instructions."
        user_message = f'''Using the following parameters,
        - Question Text(s): {questions}
        - Answer Text: {answer_text}
        - Additional Instructions: {additional_instructions}
        For each question, evaluate its clarity, relevance, and alignment with the provided answer text. Suggest improvements to enhance the quality of the questions and answers.
        Provide the output as a JSON array of objects (one object per question). Each object should follow this format:
            {{
                "question_text": "<The improved question text>",
                "answer_text": "<The improved answer text>"
            }}
        Ensure the output is valid JSON with no surrounding markdown or text.
        '''
        response = openai_client_instance.chat_completion(system_message, user_message)
        # with open("debug_fine_tune_response.json", "w") as debug_file:
        #     debug_file.write(response.text)
        response_json = response.json()
        # with open("debug_fine_tune_response.json", "r") as debug_file:
        #     response_json = json.load(debug_file)
        #     class MockResponse:
        #         def __init__(self, json_data, status=200):
        #             self._json = json_data
        #             self.status_code = status
        #         def json(self):
        #             return self._json
        #     response = MockResponse(response_json)
        response_tracker(response_json, institute_id, user_id)
        if response.status_code != 200:
            print(f"Error response from LLM: {response_json}")
            result = {"status": False, "error": response_json.get("error", "Unknown error")}
            return result, 500
        result_text = response_json['choices'][0]['message']['content'].strip()
        # Remove markdown code blocks if present
        if result_text.startswith('```'):
            result_text = result_text.split('```')[1]
            if result_text.startswith('json'):
                result_text = result_text[4:]
            result_text = result_text.strip()
        parsed = json.loads(result_text)[0]
        result = { 'status': True, 'data': parsed }
        return result , 200
    except Exception as e:
        print(f"Error in fine_tune_questions_using_llm: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        return  {
            "status": False,
            "error": str(e)
        }, 500
