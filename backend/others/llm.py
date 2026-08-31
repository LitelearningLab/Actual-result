
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
        configured_model1 = os.getenv("OPENAI_MODEL_1") or os.getenv("model1") or config.get("model1") or ""
        configured_model2 = os.getenv("OPENAI_MODEL_2") or os.getenv("model2") or config.get("model2") or configured_model1
        self.model1 = (model or configured_model1).strip()
        self.model2 = (model or configured_model2).strip()

        self.url = "https://api.openai.com/v1/chat/completions"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def chat_completion(self, system_message, InputData, aimodel =1, max_tokens: int = 5200, temperature: float = 0.2):
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
            response = httpx.post(self.url, headers=self.headers, json=payload, verify=False, timeout=30.0)
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
        4. Keep `feedback` short (1-2 sentences) and constructive.
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
                    Don't need a summary in the output. Also not required to mention the expected answer in the output.
        
        Return ONLY a valid JSON object in this exact format (no markdown, no extra text):
        {{
        "score": <number between 0 and {question_mark}>,
        "missing": "<pipe-separated list of Crisp phrase on what is missed or 'None'>",
        "incomplete": "<pipe-separated list of Crisp explanation on which part is incomplete or 'None'>",
        "incorrect": "<pipe-separated list of Crisp explanation on what is incorrect and why or 'None'>",
        "feedback": "<brief constructive feedback>",
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
    Analyzes student wrong answers using LLM to provide:
    - Diagnostic summary of why students made mistakes
    - Recommendations / remediation points
    - Semantic clustering of wrong answers into misconception themes with matched answer IDs
    """
    if not wrong_answers_list:
        return {
            "status": True,
            "diagnostic_summary": "No wrong answers recorded for this question.",
            "recommendations": "No remediation required.",
            "clusters": []
        }

    system_message = """You are an expert educational assessment analyst and pedagogical AI.
Your task is to analyze incorrect student submissions for a specific exam question and generate actionable analytics.
Always respond ONLY with a single, valid JSON object (no markdown, no surrounding text).
Follow these guidelines:
1. Group/cluster all incorrect student answers into meaningful misconception themes or error patterns.
2. For each theme:
   - Provide a concise 'theme_name' (e.g., 'Confused Thread with Process', 'Incomplete Exception Handling', 'Synonym/Syntax Variation').
   - Provide a clear 'explanation' of the core misconception or knowledge gap.
   - List the 'answer_ids' belonging to this theme (each answer ID from the input must be mapped to exactly one theme).
3. Provide an executive 'diagnostic_summary' explaining overall student struggle areas.
4. Provide constructive, actionable 'recommendations' for the instructor on what key topics to re-teach.

Output Format:
{
  "diagnostic_summary": "Brief analytical summary of why students struggled...",
  "recommendations": "Actionable points for instructors to clarify...",
  "clusters": [
    {
      "theme_name": "Short descriptive theme name",
      "explanation": "Why students made this error and what is misunderstood",
      "answer_ids": ["id1", "id2"]
    }
  ]
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
Expected / Correct Answer: {expected_answer}

Incorrect Student Submissions to Analyze:
{json.dumps(items, ensure_ascii=False, indent=2)}

Please cluster these incorrect submissions into distinct misconception themes and provide the analytical diagnostic summary and recommendations."""

    try:
        response = api_client.chat_completion(system_message, user_message, max_tokens=3000, temperature=0.2)
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
        return {
            "status": True,
            "diagnostic_summary": parsed.get("diagnostic_summary", ""),
            "recommendations": parsed.get("recommendations", ""),
            "clusters": parsed.get("clusters", [])
        }
    except Exception as e:
        print(f"Error in analyze_wrong_answers_ai: {str(e)} - Line # : {getattr(e, '__traceback__', None) and e.__traceback__.tb_lineno}")
        return {
            "status": False,
            "error": str(e),
            "diagnostic_summary": "Automatic AI analysis could not be generated at this time.",
            "recommendations": "Review individual student answers manually.",
            "clusters": []
        }

