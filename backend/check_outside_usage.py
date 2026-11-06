import sys
from sqlalchemy import text

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

target_exam_ids = [
    '0f1c7307-4e3f-41f4-bdca-3f4fd6d59355',
    'a7931767-a80b-4bbe-b4c9-ade98b607835',
    '54541e8a-26f7-4723-8f8c-73fad90bd1cb',
    'ad1a8cf3-fb34-49f3-89c1-6d27bf69c8ad',
    'd90b7546-5d0a-42df-854a-753dbee74aab',
    'fa38d088-df05-48cb-80b6-588504c6da13',
    'beb40c2c-da45-41f9-b740-ac0cbd2f6eb5',
]

q_ids = [r[0] for r in session.execute(text(f"""
    SELECT DISTINCT question_id FROM exam_question_mapping 
    WHERE exam_id IN ({','.join([f"'{e}'" for e in target_exam_ids])})
""")).fetchall()]

print(f"Total distinct questions across these exams: {len(q_ids)}")

q_ids_clause = ",".join([f"'{q}'" for q in q_ids])
other_exams = session.execute(text(f"""
    SELECT eqm.exam_id, e.title, e.institute_id
    FROM exam_question_mapping eqm
    JOIN Exams e ON eqm.exam_id = e.exam_id
    WHERE eqm.question_id IN ({q_ids_clause})
      AND eqm.exam_id NOT IN ({','.join([f"'{e}'" for e in target_exam_ids])})
""")).mappings().all()

print(f"Any other exams using these questions?: {len(other_exams)}")
for oe in other_exams:
    print(oe)

db.close()

