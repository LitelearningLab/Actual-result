import sys
import os
import json

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

from others.questions import create_question_using_llm

class DummyFiles:
    def getlist(self, key):
        return []
    def get(self, key):
        return None

class DummyRequest:
    def __init__(self, data):
        self._data = data
        self.form = {}
        self.files = DummyFiles()

    def get_json(self, silent=True):
        return self._data

SOURCE_TEXT = """Extraction of metals from ores involves several principal stages depending on the chemical nature of the ore. 
1. Concentration of Ore: Removing gangue impurities using physical or chemical methods:
- Hydraulic washing: Uses differences in specific gravity.
- Magnetic separation: Used when ore or gangue is magnetic.
- Froth flotation: Used for sulphide ores (e.g., zinc blende ZnS, galena PbS) using collectors like pine oil and frothers.
- Leaching: Chemical dissolution of ore (e.g., bauxite with NaOH, gold with cyanide).
2. Conversion of Concentrated Ore to Oxide:
- Calcination: Heating ore in the absence or limited supply of air to expel volatile matter and moisture (e.g., ZnCO3 -> ZnO + CO2, Fe2O3.3H2O -> Fe2O3 + 3H2O).
- Roasting: Heating sulphide ore in excess air below melting point (e.g., 2ZnS + 3O2 -> 2ZnO + 2SO2, 2PbS + 3O2 -> 2PbO + 2SO2).
3. Reduction of Metal Oxide to Metal:
Using suitable reducing agents like carbon (coke), carbon monoxide, or reactive metals (e.g., ZnO + C -> Zn + CO at high temperature; Fe2O3 + 3CO -> 2Fe + 3CO2).
4. Refining of Crude Metal:
Purification using distillation (for volatile metals like Zn, Hg), liquation (for low melting metals like Sn), or electrolytic refining (for Cu, Al)."""

def test_generation(marks, limit):
    # Pass institute limits simulation via character_count in backend logic
    req = DummyRequest({
        "marks_per_question": marks,
        "type": "descriptive",
        "topic": "Metallurgy: Extraction of Metals from Ores",
        "source_text": SOURCE_TEXT,
        "language": "English",
        "complexity": "medium",
        "number_of_questions": 1
    })
    resp, status_code = create_question_using_llm(req)
    return resp, status_code

if __name__ == "__main__":
    print("Running verification for 2-mark, 5-mark, and 10-mark descriptive questions...\n")
    test_cases = [
        {"marks": 2, "limit": 450},
        {"marks": 5, "limit": 1000},
        {"marks": 10, "limit": 5000}
    ]
    
    results = []
    for tc in test_cases:
        m = tc["marks"]
        lim = tc["limit"]
        print(f"\n==================== TEST: {m} MARKS (Max Limit: {lim}) ====================")
        resp, status = test_generation(m, lim)
        if status != 200:
            print(f"FAILED (status {status}): {resp}")
            continue
        data = resp.get("data") if isinstance(resp, dict) and "data" in resp else resp
        q_item = data[0] if isinstance(data, list) and len(data) > 0 else (data if isinstance(data, dict) else {})
        
        q_text = q_item.get("question_text", "")
        a_text = q_item.get("answer_text", "") or q_item.get("correct_answer", "")
        comb_len = len(q_text) + len(a_text)
        
        results.append({
            "marks": m,
            "limit": lim,
            "question": q_text,
            "answer": a_text,
            "question_chars": len(q_text),
            "answer_chars": len(a_text),
            "total_chars": comb_len,
            "within_limit": comb_len <= lim
        })
        print(f"\nQUESTION:\n{q_text}\n")
        print(f"MODEL ANSWER:\n{a_text}\n")
        print(f"Counts: Question={len(q_text)} chars | Answer={len(a_text)} chars | Combined={comb_len} chars (Limit: {lim}) | Within Limit: {comb_len <= lim}")
    
    print("\n\n==================== FINAL VERIFICATION SUMMARY ====================")
    for r in results:
        print(f"Marks: {r['marks']:2d} | Question: {r['question_chars']:3d} chars | Answer: {r['answer_chars']:4d} chars | Total: {r['total_chars']:4d} chars | Limit: {r['limit']:4d} chars | Compliant: {r['within_limit']}")

