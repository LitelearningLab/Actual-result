import sys
from sqlalchemy import text

sys.path.append(r"D:\Actula_result_production\Actual-result\backend")
from db.db import SQLiteDB

db = SQLiteDB()
session = db.connect()

target_exam_ids = [
    '0f1c7307-4e3f-41f4-bdca-3f4fd6d59355', # Unit test VI
    'a7931767-a80b-4bbe-b4c9-ade98b607835', # Unite test III
    '54541e8a-26f7-4723-8f8c-73fad90bd1cb', # Unit - Test 2
    'ad1a8cf3-fb34-49f3-89c1-6d27bf69c8ad', # Unit test IV
    'd90b7546-5d0a-42df-854a-753dbee74aab', # English (Sep 24 05:54)
    'fa38d088-df05-48cb-80b6-588504c6da13', # English (Sep 24 04:59)
    'beb40c2c-da45-41f9-b740-ac0cbd2f6eb5', # English_test_1
]

for eid in target_exam_ids:
    exam_title = session.execute(text("SELECT title FROM Exams WHERE exam_id = :eid"), {"eid": eid}).scalar()
    q_ids = [r[0] for r in session.execute(text("SELECT question_id FROM exam_question_mapping WHERE exam_id = :eid"), {"eid": eid}).fetchall()]
    print(f"\nExam: {exam_title} ({eid}) has {len(q_ids)} mapped questions.")
    
    # Check if these questions are used in any OTHER exam
    if q_ids:
        q_ids_clause = ",".join([f"'{q}'" for q in q_ids])
        other_uses = session.execute(text(f"""
            SELECT eqm.exam_id, e.title, count(eqm.question_id) as q_count
            FROM exam_question_mapping eqm
            LEFT JOIN Exams e ON eqm.exam_id = e.exam_id
            WHERE eqm.question_id IN ({q_ids_clause}) AND eqm.exam_id != :eid
            GROUP BY eqm.exam_id, e.title
        """), {"eid": eid}).mappings().all()
        if other_uses:
            print(f"  Warning: Some questions are shared with {len(other_uses)} other exam(s):")
            for u in other_uses:
                print(f"    - {u['title']} ({u['exam_id']}): {u['q_count']} shared questions")
        else:
            print("  None of these questions are shared with other exams.")

db.close()

