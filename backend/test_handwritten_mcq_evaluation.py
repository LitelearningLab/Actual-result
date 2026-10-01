"""
Test suite for handwritten objective/MCQ answer-sheet evaluation.
Validates that:
- option letter only: B / b / b) / (b)
- option text only: Under / under / UNDER
- option letter + text: B) Under / b) under / (B) under
are correctly evaluated with full marks.
"""

def test_objective_matching_logic():
    # Mock Question & Options
    options_data = [
        {"idx": 0, "letter": "a", "text": "over", "is_correct": 0},
        {"idx": 1, "letter": "b", "text": "Under", "is_correct": 1},
        {"idx": 2, "letter": "c", "text": "between", "is_correct": 0},
        {"idx": 3, "letter": "d", "text": "above", "is_correct": 0},
    ]
    
    q_marks = 1.0

    def evaluate_snippet(student_snippet):
        student_snippet_clean = (student_snippet or "").strip().lower()
        awarded = 0.0
        is_corr = 0
        fb = "Incorrect."

        for opt in options_data:
            if opt["is_correct"] == 1:
                letter = opt["letter"]
                opt_text = (opt["text"] or "").strip().lower()
                letter_patterns = [letter, f"{letter})", f"({letter})", f"{letter}."]

                is_match = False
                if student_snippet_clean in letter_patterns:
                    is_match = True
                elif opt_text and student_snippet_clean == opt_text:
                    is_match = True
                elif opt_text and any(student_snippet_clean.startswith(pat) and opt_text in student_snippet_clean for pat in letter_patterns):
                    is_match = True
                elif opt_text and student_snippet_clean.endswith(opt_text) and any(student_snippet_clean.startswith(pat) for pat in letter_patterns):
                    is_match = True

                if is_match:
                    awarded = q_marks
                    is_corr = 1
                    fb = f"Correct. Option ({letter.upper()}) {opt['text']}"
                    break

        return awarded, is_corr, fb

    # Test Cases
    test_cases = [
        ("b) under", 1.0, 1, "Option letter + lowercase text"),
        ("B) Under", 1.0, 1, "Option letter + titlecase text"),
        ("(B) under", 1.0, 1, "Parenthesized option letter + text"),
        ("b. Under", 1.0, 1, "Dotted option letter + text"),
        ("b", 1.0, 1, "Lowercase option letter only"),
        ("B", 1.0, 1, "Uppercase option letter only"),
        ("b)", 1.0, 1, "Option letter with closing paren"),
        ("(b)", 1.0, 1, "Parenthesized option letter only"),
        ("under", 1.0, 1, "Lowercase option text only"),
        ("Under", 1.0, 1, "Titlecase option text only"),
        ("UNDER", 1.0, 1, "Uppercase option text only"),
        ("c) between", 0.0, 0, "Incorrect option letter + text"),
        ("c", 0.0, 0, "Incorrect option letter only"),
        ("above", 0.0, 0, "Incorrect option text only"),
        ("", 0.0, 0, "Empty snippet"),
    ]

    print("--- RUNNING HANDWRITTEN MCQ EVALUATION UNIT TESTS ---")
    all_passed = True
    for snippet, expected_marks, expected_corr, desc in test_cases:
        marks, corr, fb = evaluate_snippet(snippet)
        passed = (marks == expected_marks and corr == expected_corr)
        status = "PASSED" if passed else "FAILED"
        if not passed:
            all_passed = False
        print(f"[{status}] {desc}: '{snippet}' -> Marks: {marks}/{q_marks}, Correct: {corr}, Feedback: {fb}")

    assert all_passed, "Some handwritten MCQ evaluation test cases failed!"
    print("\nALL 15 TEST CASES PASSED SUCCESSFULLY!")

if __name__ == "__main__":
    test_objective_matching_logic()
