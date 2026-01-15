
import json
import httpx
import configparser

class openai_client:
    def read_config(self, config_file='config.ini'):
        config = configparser.ConfigParser()
        config.read(config_file)
        return config
    def __init__(self,api_key=None,  model=None):
        filename = r'./backend/config.ini'
        if api_key:
            self.api_key = api_key
        else:
            config = self.read_config(filename)
            self.api_key = config.get('openai', 'api_key')
        if model:
            self.model = model
        else:
            config = self.read_config(filename)
            self.model = config.get('openai', 'model')

        self.url = "https://api.openai.com/v1/chat/completions"
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    def chat_completion(self, system_message, InputData, temperature: float = 0.2, max_tokens: int = 1024):
        messages = []
        if system_message:
            messages.append({"role": "system", "content": system_message})
        messages.append({"role": "user", "content": InputData})

        payload = {
            "model": self.model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens
        }

        response = httpx.post(self.url, headers=self.headers, json=payload, verify=False)
        return response
def descriptive_evaluation(api_client, question_mark, expected_answer, student_answer):
    system_message = '''You are an automated, impartial answer evaluator. Always respond ONLY with a single, valid JSON object (no markdown, no surrounding text). Follow these rules:
        1. Output exactly the JSON object described in the user instructions and nothing else.
        2. Score each topic as an integer in range 0-100 using coverage, correctness, and completeness.
        3. For lists (missing, incomplete, incorrect) return either "None" or a comma-separated string of short phrases (no internal commas if possible).
        4. Keep `feedback` short (1-2 sentences) and constructive.
        5. If you cannot evaluate or parse the candidate answer, return score 0 and put diagnostic text in `feedback`.
        6. Do not ask questions or include explanations outside the JSON object.
        7. If you must truncate, prefer truncating explanation, not the JSON keys.'''
    
    user_message = f'''
        Evaluate the candidate's answer for the following topic:
        **Question Marking Scheme:** {question_mark}
        **Expected Answer Key Points:** {expected_answer}
        **Candidate's Answer:** {student_answer}
        
        please evaluate and provide marks range between 0-10 and for each point candidate answer available in the expected answer key points mention as "Available" and for missing points mention as "Missing" and for partial answer points mention as "Partial", and correct answer points mention as "Complete" and provide the short report only for the missing part in partially answered points, and for incorrect point highlight what is incorrect based on the expected answer.
                    Don't need a summary in the output. Also not required to mention the expected answer in the output.
        
        Return ONLY a valid JSON object in this exact format (no markdown, no extra text):
        {{
        "score": <number between 0-{question_mark}>,
        "missing": "<pipe-separated list of completely missing points or 'None'>",
        "incomplete": "<pipe-separated list of mentioned but incomplete points or 'None'>",
        "incorrect": "<pipe-separated list of factually incorrect statements or 'None'>",
        "feedback": "<brief constructive feedback>"
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
            "feedback": "Unable to parse evaluation results"
        }
    
    return result