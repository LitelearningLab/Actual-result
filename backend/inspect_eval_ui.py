import sys
sys.stdout.reconfigure(encoding='utf-8')
from others.exams import get_student_evaluation_details

class MockReq:
    args = {'exam_id': '45338523-b67c-4bfa-8417-61c820522702', 'user_id': '776876d0-187c-4aca-a88c-0c4977124085'}

res, code = get_student_evaluation_details(MockReq())
print('HTTP Code:', code)
print('Attempt ID:', res.get('attempt_id'))
print('Total score:', res.get('summary', {}).get('marks_awarded'))

for q in res.get('questions', []):
    print(f"--- Q#{q['question_number']} ---")
    print(f"Text: {q['question_text']}")
    print(f"Marks Awarded: {q['marks_awarded']} / {q['max_marks']}")
    print(f"Selected Option ID: {q['selected_option_id']}")
    print(f"Student Answer Text: {q['student_answer']!r}")
    for oi, opt in enumerate(q.get('options', [])):
        letter = chr(ord('A') + oi)
        is_sel = (opt['id'] == q['selected_option_id'])
        print(f"  [{letter}] id={opt['id']} | text={opt['text']!r} | is_correct={opt['is_correct']} | selected={is_sel}")
