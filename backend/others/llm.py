
import json
import os
from pathlib import Path

import httpx
from dotenv import dotenv_values


class _ErrorResponse:
    def __init__(self, status_code, message):
        self.status_code = status_code
        self._message = message

    def json(self):
        return {"error": self._message}

class openai_client:
    def __init__(self,api_key=None,  model=None):
        # Resolve the file relative to this module so configuration does not
        # depend on the directory from which Flask was started. Environment
        # variables take precedence in deployed environments.
        env_file = Path(__file__).resolve().parents[1] / ".env"
        config = dotenv_values(env_file)

        self.api_key = (api_key or os.getenv("OPENAI_API_KEY") or
                        os.getenv("api_key") or config.get("OPENAI_API_KEY") or
                        config.get("api_key") or "").strip()
        configured_model1 = os.getenv("OPENAI_MODEL_1") or os.getenv("model1") or config.get("OPENAI_MODEL_1") or config.get("model1") or "gpt-4o-mini"
        configured_model2 = os.getenv("OPENAI_MODEL_2") or os.getenv("model2") or config.get("OPENAI_MODEL_2") or config.get("model2") or configured_model1
        self.model1 = (model or configured_model1).strip()
        self.model2 = (model or configured_model2).strip()

        self.url = "https://api.openai.com/v1/chat/completions"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def chat_completion(self, system_message, InputData, aimodel =1, max_tokens: int = 5200, temperature: float = 0.2, timeout: float = 30.0):
        if not self.api_key:
            return _ErrorResponse(
                503,
                "OpenAI API key is not configured. Set OPENAI_API_KEY on the backend service."
            )

        messages = []
        if system_message:
            messages.append({"role": "system", "content": system_message})
        messages.append({"role": "user", "content": InputData})
        model = self.model1 if aimodel == 1 else self.model2
        if not model:
            return _ErrorResponse(
                503,
                "OpenAI model is not configured. Set OPENAI_MODEL_1 and OPENAI_MODEL_2 on the backend service."
            )
        payload = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens
        }

        try:
            response = httpx.post(self.url, headers=self.headers, json=payload, verify=False, timeout=timeout)
        except httpx.ReadTimeout:
            response = _ErrorResponse(504, "OpenAI request timed out")
        except httpx.RequestError as exc:
            response = _ErrorResponse(502, str(exc))
        return response
def descriptive_evaluation(api_client, question_mark, expected_answer, student_answer):
    system_message = '''You are an automated, impartial answer evaluator. Always respond ONLY with a single, valid JSON object (no markdown, no surrounding text). Follow these rules:
        1. Output exactly the JSON object described in the user instructions and nothing else.
        2. Score each topic as an integer in range 0-100 using coverage, correctness, and completeness.
        3. For lists (missing, incomplete, incorrect) return either "None" or a comma-separated string of short phrases (no internal commas if possible).
        4. The `feedback` must be clear and easy for a student to understand. It must briefly explain:
            - what the student answered correctly,
            - what important point or points are missing or incorrect,
            - and what the student should add or improve.
            Use simple educational language. Do not use vague statements such as "expand on the benefits" or "needs more detail" without saying what detail is needed. Keep feedback to 2-3 short sentences.
        5. If you cannot evaluate or parse the candidate answer, return score 0 and put diagnostic text in `feedback`.
        6. Do not ask questions or include explanations outside the JSON object.
        7. Include an integer field `ai_confidence` in the JSON output (0-100) representing the model's confidence in this evaluation. If you cannot determine a confidence, return 0.
        7. If you must truncate, prefer truncating explanation, not the JSON keys.'''
    
    user_message = f'''
        Evaluate the candidate's answer for the following topic:
        **Question Marking Scheme:** {question_mark}
        **Expected Answer Key Points:** {expected_answer}
        **Candidate's Answer:** {student_answer}
        
        please evaluate and award a score between 0 and {question_mark} (maximum allowed marks is {question_mark}). For each point candidate answer available in the expected answer key points mention as "Available" and for missing points mention as "Missing" and for partial answer points mention as "Partial", and correct answer points mention as "Complete" and provide the short report only for the missing part in partially answered points, and for incorrect point highlight what is incorrect based on the expected answer.
                The feedback must be based only on the actual evaluation above. Clearly tell the student what they did well and specifically identify the missing or incorrect points. Give a practical suggestion for improving the answer. Do not give generic feedback.
                    Don't need a summary in the output. Also not required to mention the expected answer in the output.
        
        Return ONLY a valid JSON object in this exact format (no markdown, no extra text):
        {{
        "score": <number between 0 and {question_mark}>,
        "missing": "<pipe-separated list of Crisp phrase on what is missed or 'None'>",
        "incomplete": "<pipe-separated list of Crisp explanation on which part is incomplete or 'None'>",
        "incorrect": "<pipe-separated list of Crisp explanation on what is incorrect and why or 'None'>",
        "feedback": "<clear student-friendly feedback explaining what was correct, what was missing or incorrect, and exactly what should be improved>",
        "ai_confidence": <integer between 0-100>
        }}
        
        Note: Use the pipe character '|' as the separator between list items (no spaces around the pipe) to avoid ambiguity with commas. If there are no items for a field, return "None".
        '''
    try:
        response = api_client.chat_completion(system_message, user_message)
        response_json = response.json()
        if response.status_code != 200:
            result = {"status": False, "error": response_json.get("error", "Unknown error")}
            return result
        result_text = response_json['choices'][0]['message']['content'].strip()
        
        # Remove markdown code blocks if present
        if result_text.startswith('```'):
            result_text = result_text.split('```')[1]
            if result_text.startswith('json'):
                result_text = result_text[4:]
            result_text = result_text.strip()
        
        result = json.loads(result_text)
        # Ensure ai_confidence exists and is an int between 0 and 100
        ai_conf = result.get('ai_confidence')
        if isinstance(ai_conf, int) and 0 <= ai_conf <= 100:
            result['ai_confidence'] = ai_conf
        else:
            # Fallback: derive confidence from numeric score if possible
            try:
                max_marks = int(question_mark) if str(question_mark).isdigit() else None
                score = result.get('score')
                if max_marks and isinstance(score, (int, float)):
                    # Map score in [0, max_marks] -> confidence in [0,100]
                    conf = int(round(100.0 * float(score) / float(max_marks)))
                    result['ai_confidence'] = max(0, min(100, conf))
                else:
                    result['ai_confidence'] = 0
            except Exception:
                result['ai_confidence'] = 0
        result['status'] = True
    except Exception as e:
        print(f"Error in evaluate_topic_answer: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        result = {
            "status": False,
            "error": str(e),
            "score": 0,
            "missing": "Error in evaluation",
            "incomplete": "Error in evaluation",
            "incorrect": "Error in evaluation",
            "feedback": "Unable to parse evaluation results",
            "ai_confidence": 0
        }
    
    return result


def analyze_wrong_answers_ai(api_client, question_text, question_type, expected_answer, wrong_answers_list):
    """
    Analyzes student incorrect/sub-optimal answers using LLM to provide:
    - Relevance classification: Relevant but Incorrect vs. Completely Irrelevant and Incorrect
    - Semantic misconception clustering with representative sample answer IDs
    - Diagnostic summary of why students struggled (pedagogical, without marks/grades)
    - Actionable recommendations
    """
    if not wrong_answers_list:
        return {
            "status": True,
            "diagnostic_summary": "No incorrect answers recorded for this question.",
            "recommendations": "No remediation required.",
            "categories": {
                "relevant_but_incorrect": {
                    "clusters": []
                },
                "completely_irrelevant_and_incorrect": {
                    "answer_ids": []
                }
            },
            "clusters": []
        }

    system_message = """You are an expert educational evaluator, assessment specialist, and pedagogical data analyst.
Your task is to analyze and validate a batch of student descriptive answers for an online test to identify completely irrelevant responses and deeply analyze relevant but incorrect answers to uncover specific learner misconceptions, enabling targeted corrective action.
You are NOT grading the answers or assigning marks. Do NOT calculate scores or percentages.

Always respond ONLY with a single, valid JSON object (no markdown formatting, no surrounding text).

Categorize all provided student responses into the following two major categories:

1. "completely_irrelevant_and_incorrect":
   - STRICT CRITERIA: Answers that are off-topic, discuss a totally different subject domain (for example, writing about biology, photosynthesis, plants, history, economics, literature, or generic random text when asked a technical/computer science/programming question, or vice versa), non-sensical, gibberish, blank, or have NO logical/subject-matter connection to the specific question asked.
   - CRITICAL RULE: If a student's answer is about an unrelated topic or subject domain (e.g. photosynthesis/biology in a computer science test), you MUST classify its answer_id under "completely_irrelevant_and_incorrect". NEVER invent or hallucinate a technical/programming misconception theme for an off-topic or biology answer!
   - Requirement: Assign their answer IDs under "answer_ids".

2. "relevant_but_incorrect":
   - STRICT CRITERIA: Answers where the student genuinely addresses the specific subject matter and domain of the Question, but provided flawed logic, conceptual confusion within the domain, calculation errors, vocabulary mismatch, process inversion, or incomplete understanding.
   - Deep-Dive Misconception Analysis: Dynamically identify the underlying types of misunderstandings within the subject domain (e.g., conceptual confusion, process inversion, calculation errors, vocabulary mismatch, overgeneralisation).
   - Quantification & Clustering: Group genuine within-domain incorrect understandings together into cohesive clusters. For each distinct misunderstanding identified:
     * "theme_name": A short, descriptive name for the specific error/misconception (e.g., "Confusing Static vs Dynamic Arrays").
     * "explanation": A deep-dive explanation of the specific flawed logic or misconception.
     * "answer_ids": Array of answer IDs belonging to this cluster. Every relevant answer ID must belong to exactly one cluster.
     * "sample_answer_ids": 1-2 most representative answer IDs from this cluster.
   - If ALL submitted answers are off-topic/irrelevant, "clusters" under "relevant_but_incorrect" MUST be an empty array [].

Pedagogical Synthesis:
- "diagnostic_summary": A short and clear summary of the main problems found in the student answers.

Diagnostic Summary Requirements:
- Write in very simple English.
- Make it easy for a student, teacher, or layman to understand.
- Clearly state what the students got wrong and what the correct concept should be.
- Use specific details from the actual student answers.
- Do not use vague statements such as "lack of clarity", "conceptual gaps", "incomplete understanding", or "students display a misunderstanding" without explaining the exact problem.
- Keep the diagnostic summary to a maximum of 4–5 short lines.
- Focus only on the main problem found in the answers.
- Do not include recommendations or solutions in the diagnostic summary.
- Do not invent problems that are not present in the student answers.

- "recommendations": Concrete, actionable pedagogical recommendations for educators to reinforce these weak areas.

Crucial Rules:
- Every input answer_id MUST appear in exactly one place (either under one relevant cluster or under completely_irrelevant_and_incorrect).
- Never invent new IDs or mutate answer text.

Output Format:
{
  "diagnostic_summary": "Concise pedagogical summary of student misconception patterns...",
  "recommendations": "Targeted corrective actions and remediation advice for instructors...",
  "categories": {
    "relevant_but_incorrect": {
      "clusters": [
        {
          "theme_name": "Short descriptive misconception label",
          "explanation": "Deep-dive pedagogical explanation of the specific error or misconception",
          "answer_ids": ["id1", "id2"],
          "sample_answer_ids": ["id1"]
        }
      ]
    },
    "completely_irrelevant_and_incorrect": {
      "answer_ids": ["id3"]
    }
  }
}"""

    # Prepare sanitized input payload
    items = []
    for idx, item in enumerate(wrong_answers_list):
        items.append({
            "answer_id": str(item.get("answer_id") or f"ans_{idx}"),
            "student_answer": (item.get("written_answer") or "").strip()
        })

    user_message = f"""Question Type: {question_type}
Question: {question_text}
Expected / Rubric Key Points: {expected_answer}

Incorrect Student Submissions to Analyze ({len(items)} submissions):
{json.dumps(items, ensure_ascii=False, indent=2)}

Please classify relevance, cluster misconceptions, and provide the diagnostic summary."""

    try:
        response = api_client.chat_completion(system_message, user_message, max_tokens=3500, temperature=0.2, timeout=12.0)
        response_json = response.json()
        if response.status_code != 200:
            return {"status": False, "error": response_json.get("error", "AI service returned error")}

        result_text = response_json['choices'][0]['message']['content'].strip()
        if result_text.startswith('```'):
            result_text = result_text.split('```')[1]
            if result_text.startswith('json'):
                result_text = result_text[4:]
            result_text = result_text.strip()

        parsed = json.loads(result_text)
        
        # Normalize and ensure categories structure
        categories = parsed.get("categories") or {}
        rel_cat = categories.get("relevant_but_incorrect") or {}
        irrel_cat = categories.get("completely_irrelevant_and_incorrect") or {}
        
        rel_clusters = rel_cat.get("clusters") or parsed.get("clusters") or []
        irrel_answer_ids = irrel_cat.get("answer_ids") or []

        return {
            "status": True,
            "diagnostic_summary": parsed.get("diagnostic_summary", ""),
            "recommendations": parsed.get("recommendations", ""),
            "categories": {
                "relevant_but_incorrect": {
                    "clusters": rel_clusters
                },
                "completely_irrelevant_and_incorrect": {
                    "answer_ids": irrel_answer_ids
                }
            },
            "clusters": rel_clusters
        }
    except Exception as e:
        print(f"Error in analyze_wrong_answers_ai: {str(e)} - Line # : {getattr(e, '__traceback__', None) and e.__traceback__.tb_lineno}")
        return {
            "status": False,
            "error": str(e),
            "diagnostic_summary": "Automatic AI analysis could not be generated at this time.",
            "recommendations": "Review individual student answers manually.",
            "categories": {
                "relevant_but_incorrect": {
                    "clusters": []
                },
                "completely_irrelevant_and_incorrect": {
                    "answer_ids": []
                }
            },
            "clusters": []
        }


def generate_ai_subtopics(api_client, questions_list, category_name=""):
    """
    Uses OpenAI AI to dynamically analyze a list of questions (and category context) 
    and infer a concise, high-level Subtopic for each question (max 20 characters per subtopic).
    Returns a dictionary mapping question_id -> subtopic_name.
    """
    if not questions_list:
        return {}

    system_message = """You are an expert educational curriculum taxonomy classifier.
Given a list of questions from an assessment/question bank and a Category Name, analyze the subject domain and categorize each question under an appropriate, concise Subtopic title.

CRITICAL RULES:
1. Subtopic titles MUST be strictly derived from the actual subject matter and domain of the provided questions and category name (e.g., for Java Programming: "Multithreading", "OOP Concepts", "JVM Architecture", "Exception Handling"; for Hospitality: "Front Desk", "Housekeeping", etc.).
2. Categorize ALL questions into a MAXIMUM of 6 unique subtopics overall.
3. Group multiple related questions under the exact same subtopic name. Do NOT generate a unique subtopic title per question.
4. DO NOT use or copy placeholder examples from this prompt. Use ONLY topics reflecting the actual question content.
5. Each Subtopic name MUST be concise (2 to 4 words).
6. Output MUST be ONLY a single valid JSON object mapping each question_id to its identified subtopic string:
{
  "question_id_1": "Subtopic Title 1",
  "question_id_2": "Subtopic Title 2"
}
"""

    input_payload = {
        "category_name": category_name or "",
        "questions": [
            {
                "question_id": str(q.get("question_id")),
                "question_text": q.get("question_text", "")
            }
            for q in questions_list
        ]
    }

    user_message = f"Please analyze and categorize these {len(questions_list)} questions into subtopics:\n{json.dumps(input_payload, ensure_ascii=False, indent=2)}"

    try:
        response = api_client.chat_completion(system_message, user_message, max_tokens=1500, temperature=0.2, timeout=10.0)
        if response and getattr(response, 'status_code', None) == 200:
            res_json = response.json()
            result_text = res_json['choices'][0]['message']['content'].strip()
            if result_text.startswith('```'):
                result_text = result_text.split('```')[1]
                if result_text.startswith('json'):
                    result_text = result_text[4:]
                result_text = result_text.strip()

            parsed = json.loads(result_text)
            if isinstance(parsed, dict):
                formatted_result = {}
                for qid, stitle in parsed.items():
                    stitle = str(stitle or "").strip()
                    formatted_result[str(qid)] = stitle
                return formatted_result
    except Exception as e:
        print(f"Error in generate_ai_subtopics LLM call: {e}")

    return {}


def vision_detect_question_anchors(api_client, page_images, exam_question_numbers=None, timeout=45.0):
    """
    Phase 1: Question Detection Engine.
    Scans answer sheet page images to identify which question numbers / question labels
    are PHYSICALLY WRITTEN or LABELED on each page.
    Does NOT evaluate or grade content.
    
    Parameters:
      - api_client: openai_client instance
      - page_images: list of file paths or dicts containing image data
      - exam_question_numbers: optional list of expected question numbers (e.g. [1, 2, ..., 15])
      - timeout: float HTTP request timeout in seconds
      
    Returns structured JSON:
      {
        "status": True/False,
        "pages": [
          {
            "page_number": 1,
            "detected_questions": [
              {
                "question_number": 1,
                "label": "1)",
                "location_hint": "top"
              }
            ],
            "question_numbers": [1, 2, 3]
          }
        ],
        "all_detected_question_numbers": [1, 2, 3, 11, 12, 13, 14],
        "detection_notes": "..."
      }
    """
    import base64
    import json

    if not page_images:
        return {
            "status": False,
            "error": "No answer sheet page images provided for question detection.",
            "pages": [],
            "all_detected_question_numbers": []
        }

    expected_q_text = ""
    if exam_question_numbers:
        expected_q_text = f"\nExpected examination question numbers: {sorted(list(set(exam_question_numbers)))}"

    system_prompt = f"""You are a handwritten exam answer-sheet QUESTION DETECTOR.

YOUR ONLY JOB:
Identify which numbered exam questions are physically present in the uploaded page images.

DO NOT grade answers.
DO NOT compare answers with model answers.
DO NOT infer missing questions from answer content.

EXAM QUESTIONS:
{expected_q_text}

FOR EACH PAGE:
1. Inspect the ENTIRE page from top to bottom.
2. Pay SPECIAL ATTENTION to:
   - The bottom 15% of the page (look for last questions near the bottom edge).
   - The top 15% of the page.
   - Text touching the left/right margins.
   - Question numbers split or partially cut by page boundaries (e.g. '11)' cut off or near the edge).
3. Look for handwritten question labels such as:
   - 11), 11., Q11, Q.11, 11(a), 11 (a), Ans 11, Section B 11)
4. A visible question number is enough to detect the question.
   The question number does NOT need to be perfectly clear if surrounding writing strongly confirms the intended number.
5. If a question number is partially visible or unclear but there is visual evidence of that question header/answer block, mark it as "uncertain" rather than silently ignoring it.
6. NEVER identify a question only because its answer contains similar words or concepts.
7. NEVER assign a question number based on sequential order alone.
8. A question may continue across pages. Record every page where that question's answer is physically visible.
9. If a question label appears at the very bottom of one page and its answer continues on the next page, keep the same question number.

IMPORTANT RULE:
A partially visible question number must NOT automatically be treated as absent.
If there is uncertainty, prefer "uncertain" over falsely declaring the question absent.

CLASSIFICATION:
- "detected": Question number/header is visually identifiable.
- "uncertain": There is visual evidence of a question label/block (e.g. partially cropped at margin), but exact number has minor ambiguity.
- "absent": No physical evidence of that question exists anywhere.

OUTPUT ONLY THIS JSON:
{{
  "pages": [
    {{
      "page_number": 1,
      "questions": [
        {{
          "question_number": 11,
          "status": "detected",
          "location": "bottom",
          "label_text": "11) (a)"
        }}
      ]
    }}
  ],
  "detected_question_numbers": [11],
  "uncertain_question_numbers": [],
  "detection_notes": "<concise summary of detected and uncertain questions>"
}}
"""

    user_content = []
    intro_text = f"Please detect all physically written question numbers across these {len(page_images)} answer sheet page(s):"
    user_content.append({"type": "text", "text": intro_text})

    for idx, page in enumerate(page_images, 1):
        if isinstance(page, str):
            if os.path.isfile(page):
                with open(page, "rb") as img_f:
                    b64_data = base64.b64encode(img_f.read()).decode("utf-8")
                mime = "image/png" if page.lower().endswith(".png") else "image/jpeg"
                data_uri = f"data:{mime};base64,{b64_data}"
            elif page.startswith("data:image"):
                data_uri = page
            else:
                data_uri = f"data:image/jpeg;base64,{page}"
            page_num = idx
        elif isinstance(page, dict):
            b64_data = page.get("image_base64") or page.get("data") or page.get("dataUrl") or ""
            page_num = page.get("page_number", idx)
            if b64_data.startswith("data:image"):
                data_uri = b64_data
            elif os.path.isfile(b64_data):
                with open(b64_data, "rb") as img_f:
                    raw_b64 = base64.b64encode(img_f.read()).decode("utf-8")
                mime = "image/png" if b64_data.lower().endswith(".png") else "image/jpeg"
                data_uri = f"data:{mime};base64,{raw_b64}"
            else:
                data_uri = f"data:{mime};base64,{b64_data}"
        else:
            continue

        user_content.append({
            "type": "image_url",
            "image_url": {
                "url": data_uri,
                "detail": "high"
            }
        })

    try:
        response = api_client.chat_completion(
            system_message=system_prompt,
            InputData=user_content,
            aimodel=1,
            max_tokens=2000,
            temperature=0.0,
            timeout=timeout
        )

        if not response or getattr(response, "status_code", None) != 200:
            err_msg = "Failed to connect to AI vision detection service."
            if hasattr(response, "json"):
                err_msg = response.json().get("error", err_msg)
            return {
                "status": False,
                "error": err_msg,
                "pages": [],
                "all_detected_question_numbers": [],
                "detected_question_numbers": [],
                "uncertain_question_numbers": []
            }

        resp_json = response.json()
        raw_content = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()

        clean_json = raw_content
        if clean_json.startswith("```"):
            clean_json = clean_json.split("```")[1]
            if clean_json.startswith("json"):
                clean_json = clean_json[4:]
            clean_json = clean_json.strip()

        parsed = json.loads(clean_json)
        pages_detected = parsed.get("pages", [])

        # Normalize and aggregate unique question numbers across all pages
        detected_q_nums = set()
        uncertain_q_nums = set()

        for p in pages_detected:
            p_q_nums = []
            for q_entry in (p.get("questions") or p.get("detected_questions") or []):
                q_num = q_entry.get("question_number")
                q_status = str(q_entry.get("status", "detected")).lower()
                if q_num is not None:
                    try:
                        q_num_int = int(q_num)
                        p_q_nums.append(q_num_int)
                        if q_status == "uncertain":
                            uncertain_q_nums.add(q_num_int)
                        else:
                            detected_q_nums.add(q_num_int)
                    except (ValueError, TypeError):
                        pass
            p["question_numbers"] = sorted(list(set(p_q_nums)))

        for qn in parsed.get("detected_question_numbers", []):
            try:
                detected_q_nums.add(int(qn))
            except (ValueError, TypeError):
                pass

        for qn in parsed.get("uncertain_question_numbers", []):
            try:
                uncertain_q_nums.add(int(qn))
            except (ValueError, TypeError):
                pass

        all_q_nums = sorted(list(detected_q_nums.union(uncertain_q_nums)))

        return {
            "status": True,
            "pages": pages_detected,
            "all_detected_question_numbers": all_q_nums,
            "detected_question_numbers": sorted(list(detected_q_nums)),
            "uncertain_question_numbers": sorted(list(uncertain_q_nums)),
            "detection_notes": parsed.get("detection_notes", "Question detection completed.")
        }

    except Exception as e:
        print(f"Error in vision_detect_question_anchors: {e}")
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "error": str(e),
            "pages": [],
            "all_detected_question_numbers": []
        }


def vision_evaluate_answersheet(api_client, exam_rubric, page_images, timeout=60.0):
    """
    Evaluates student handwritten answer sheet page images directly using OpenAI Vision API.
    Does NOT use OCR or text extraction as an intermediate step.
    
    Parameters:
      - api_client: openai_client instance
      - exam_rubric: dict containing exam metadata and question-by-question marking schemes/rubrics
      - page_images: list of dicts:
          [{'page_number': 1, 'image_base64': '...', 'mime_type': 'image/jpeg'}, ...]
          OR list of file paths.
      - timeout: float HTTP request timeout in seconds
      
    Returns structured JSON:
      {
        "status": True/False,
        "evaluations": [
          {
            "question_id": "...",
            "question_number": 1,
            "detected_on_pages": [1],
            "suggested_marks": 4.0,
            "max_marks": 5.0,
            "is_correct": 0,
            "ai_confidence": 88,
            "missing": "...",
            "incomplete": "...",
            "incorrect": "...",
            "feedback": "..."
          }, ...
        ],
        "overall_summary": "...",
        "evaluation_notes": "..."
      }
    """
    import base64

    if not page_images:
        return {
            "status": False,
            "error": "No answer sheet page images provided for evaluation.",
            "evaluations": []
        }

    system_prompt = """You are an expert academic evaluator, assessment specialist, and visual answer sheet grader.
Your task is to visually inspect and evaluate a student's physical handwritten answer sheet pages for an examination.

PHASE 2 QUESTION-SPECIFIC EVALUATION RULES:
1. STRICT QUESTION BOUNDARY ISOLATION:
   - For each Question in the blueprint, you MUST evaluate ONLY the student's answer written specifically under that question's number/header (e.g., text directly following '14)', 'Q14', etc.).
   - NEVER use or borrow words, concepts, or sentences from adjacent answers (e.g. Q12 or Q13) to award marks to another question.
   - Grounding: Extract a short verbatim snippet of what the student actually wrote for this question into "student_answer_snippet".

2. Direct Visual Inspection (No OCR):
   - Read handwritten responses, mathematical workings, chemical formulas, step derivations, graphs/diagrams, and objective question markings directly from the images.

3. Objective / Multiple Choice Questions:
   - Identify whether the student marked, ticked, circled, or wrote down the option under this question's label.
   - Compare with the correct answer key in the rubric.
   - Award full marks if correct, 0 if incorrect or unmarked.

4. Descriptive / Mathematical / Scientific Questions:
   - Award step marks for intermediate mathematical / derivation steps, even if the final calculation has minor arithmetic errors.
   - Evaluate diagrams: check labeled axes, annotations, structural components, and clarity against the rubric.
   - Deduct marks proportionally for missing points or conceptual flaws.

5. Unattempted or Absent Questions:
   - If a question header or answer block is absent, set "suggested_marks": 0.0, "is_correct": 0, "detected_on_pages": [], "feedback": "Question was not attempted."

6. Confidence Scoring:
   - "ai_confidence" must be an integer between 0 and 100.
   - If handwriting is clear and answer is definitive, confidence should be 85-100.
   - If handwriting is ambiguous or difficult to read, reduce confidence accordingly (e.g. 40-65).

ALWAYS respond ONLY with a single valid JSON object (no markdown code blocks, no extra explanatory text outside the JSON).

OUTPUT JSON STRUCTURE:
{
  "evaluations": [
    {
      "question_id": "<exact question_id string from the rubric>",
      "question_number": <integer question number>,
      "student_answer_snippet": "<short 1-2 sentence quote of what student actually wrote under this question>",
      "detected_on_pages": [<array of page numbers where this answer is located, e.g. [1] or [1, 2]>],
      "suggested_marks": <float score between 0.0 and max_marks>,
      "max_marks": <float maximum marks for this question>,
      "is_correct": <1 if full marks awarded, 0 otherwise>,
      "ai_confidence": <integer between 0 and 100>,
      "missing": "<pipe-separated list of missing concepts/points or 'None'>",
      "incomplete": "<pipe-separated list of incomplete working steps or 'None'>",
      "incorrect": "<pipe-separated list of incorrect statements/calculations or 'None'>",
      "feedback": "<clear 1-3 sentence student-friendly explanation of score, strengths, and areas to improve>"
    }
  ],
  "overall_summary": "<1-2 sentence overall summary of student performance>",
  "evaluation_notes": "<notes on scan quality or page layout, or 'Clear scan'>"
}
"""

    # Build multimodal user content
    user_content = []
    rubric_text = f"QUESTION PAPER BLUEPRINT & MARKING SCHEME:\n{json.dumps(exam_rubric, ensure_ascii=False, indent=2)}\n\nPlease evaluate all questions across the attached {len(page_images)} answer sheet page(s):"
    user_content.append({"type": "text", "text": rubric_text})

    for idx, page in enumerate(page_images, 1):
        if isinstance(page, str):
            # File path or base64 string
            if os.path.isfile(page):
                with open(page, "rb") as img_f:
                    b64_data = base64.b64encode(img_f.read()).decode("utf-8")
                mime = "image/png" if page.lower().endswith(".png") else "image/jpeg"
                data_uri = f"data:{mime};base64,{b64_data}"
            elif page.startswith("data:image"):
                data_uri = page
            else:
                data_uri = f"data:image/jpeg;base64,{page}"
            page_num = idx
        elif isinstance(page, dict):
            b64_data = page.get("image_base64") or page.get("data") or page.get("dataUrl") or ""
            mime = page.get("mime_type") or "image/jpeg"
            page_num = page.get("page_number", idx)
            if b64_data.startswith("data:image"):
                data_uri = b64_data
            elif os.path.isfile(b64_data):
                with open(b64_data, "rb") as img_f:
                    raw_b64 = base64.b64encode(img_f.read()).decode("utf-8")
                mime = "image/png" if b64_data.lower().endswith(".png") else "image/jpeg"
                data_uri = f"data:{mime};base64,{raw_b64}"
            else:
                data_uri = f"data:{mime};base64,{b64_data}"
        else:
            continue

        user_content.append({
            "type": "image_url",
            "image_url": {
                "url": data_uri,
                "detail": "high"
            }
        })

    try:
        response = api_client.chat_completion(
            system_message=system_prompt,
            InputData=user_content,
            aimodel=1,
            max_tokens=4000,
            temperature=0.15,
            timeout=timeout
        )

        if not response or getattr(response, "status_code", None) != 200:
            err_msg = "Failed to connect to AI vision service."
            if hasattr(response, "json"):
                err_msg = response.json().get("error", err_msg)
            return {
                "status": False,
                "error": err_msg,
                "evaluations": []
            }

        resp_json = response.json()
        raw_content = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()

        # Clean markdown code fences if present
        clean_json = raw_content
        if clean_json.startswith("```"):
            clean_json = clean_json.split("```")[1]
            if clean_json.startswith("json"):
                clean_json = clean_json[4:]
            clean_json = clean_json.strip()

        parsed = json.loads(clean_json)
        evaluations = parsed.get("evaluations", [])

        # Sanitize and clamp scores to question maximum marks
        q_rubrics = {}
        for sec in exam_rubric.get("sections", []):
            for q in sec.get("questions", []):
                q_rubrics[str(q.get("question_id"))] = q

        for ev in evaluations:
            qid = str(ev.get("question_id", ""))
            matched_q = q_rubrics.get(qid)
            max_m = float(matched_q.get("max_marks", 1.0)) if matched_q else float(ev.get("max_marks", 1.0))
            ev["max_marks"] = max_m
            
            try:
                s_marks = float(ev.get("suggested_marks", 0.0))
            except (ValueError, TypeError):
                s_marks = 0.0
            
            # Clamp suggested marks between 0.0 and max_marks
            ev["suggested_marks"] = max(0.0, min(max_m, round(s_marks, 2)))
            ev["is_correct"] = 1 if ev["suggested_marks"] >= max_m and max_m > 0 else 0
            
            try:
                conf = int(ev.get("ai_confidence", 80))
            except (ValueError, TypeError):
                conf = 80
            ev["ai_confidence"] = max(0, min(100, conf))

        return {
            "status": True,
            "evaluations": evaluations,
            "overall_summary": parsed.get("overall_summary", "Evaluation completed."),
            "evaluation_notes": parsed.get("evaluation_notes", "Clear scan.")
        }

    except Exception as e:
        print(f"Error in vision_evaluate_answersheet: {e}")
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "error": str(e),
            "evaluations": []
        }

