import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

from others.exams import _match_objective_option, _norm_math, _strip_equation_prefix

class MockOption:
    def __init__(self, id, text, is_correct=0):
        self.options_id = id
        self.option_text = text
        self.is_correct = is_correct

def run_verification():
    print("=" * 60)
    print("RUNNING COMPREHENSIVE OBJECTIVE-QUESTION EVALUATION VERIFICATION")
    print("=" * 60)

    # 1. Negative Numerical Answers
    q_matrix_opts = [
        MockOption("opt-A", "2", 0),
        MockOption("opt-B", "1", 0),
        MockOption("opt-C", "-2", 1),
        MockOption("opt-D", "4", 0),
    ]

    opt, letter = _match_objective_option("-2", q_matrix_opts)
    assert letter == "C" and opt.options_id == "opt-C", f"Expected C, got {letter}"
    print("[PASS] Q6 (Negative numerical): '-2' strictly matched Option C ('-2'), NOT Option A ('2')")

    opt, letter = _match_objective_option("2", q_matrix_opts)
    assert letter == "A" and opt.options_id == "opt-A", f"Expected A, got {letter}"
    print("[PASS] Q6 (Positive counter-test): '2' matched Option A ('2')")

    # Suffix collision edge cases
    q_neg_cases = [
        MockOption("opt-1", "5", 0),
        MockOption("opt-2", "-5", 1),
        MockOption("opt-3", "12", 0),
        MockOption("opt-4", "-12", 0),
    ]
    opt, letter = _match_objective_option("-5", q_neg_cases)
    assert letter == "B" and opt.options_id == "opt-2"
    opt, letter = _match_objective_option("5", q_neg_cases)
    assert letter == "A" and opt.options_id == "opt-1"
    opt, letter = _match_objective_option("-12", q_neg_cases)
    assert letter == "D" and opt.options_id == "opt-4"
    print("[PASS] Negative numerical test cases: '-5' -> -5, '5' -> 5, '-12' -> -12 (Suffix collision prevented)")

    # 2. Mathematical Expressions & LaTeX Normalization
    q_deriv_opts = [
        MockOption("opt-A", "$x^2$", 0),
        MockOption("opt-B", "$2x^3$", 0),
        MockOption("opt-C", "$3x^2$", 1),
        MockOption("opt-D", "$3x$", 0),
    ]
    opt, letter = _match_objective_option("3x²", q_deriv_opts)
    assert letter == "C" and opt.options_id == "opt-C", f"Expected C, got {letter}"
    print("[PASS] Q1 (Math exponent): '3x²' strictly matched Option C ('$3x^2$'), NOT Option A ('$x^2$')")

    q_trig_opts = [
        MockOption("opt-A", "$f(x) = \\ln(x)$", 0),
        MockOption("opt-B", "$f(x) = \\sin(x)$", 1),
        MockOption("opt-C", "$f(x) = x$", 0),
        MockOption("opt-D", "$f(x) = e^x$", 0),
    ]
    opt, letter = _match_objective_option("f(x) = sin(x)", q_trig_opts)
    assert letter == "B" and opt.options_id == "opt-B"
    opt, letter = _match_objective_option("sin(x)", q_trig_opts)
    assert letter == "B" and opt.options_id == "opt-B"
    print("[PASS] Q3 (Trigonometric): Both 'f(x) = sin(x)' and 'sin(x)' matched Option B ('$f(x) = \\sin(x)$')")

    q_quad_opts = [
        MockOption("opt-A", "$x = \\frac{-b \\pm \\sqrt{4ac}}{2a}$", 0),
        MockOption("opt-B", "$x = \\frac{-b \\pm 4ac}{2a}$", 0),
        MockOption("opt-C", "$x = \\frac{b \\pm \\sqrt{b^2 + 4ac}}{2a}$", 0),
        MockOption("opt-D", "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", 1),
    ]
    opt, letter = _match_objective_option("x = (-b ± √(b² - 4ac))/2a", q_quad_opts)
    assert letter == "D" and opt.options_id == "opt-D"
    print("[PASS] Q9 (Quadratic formula): 'x = (-b ± √(b² - 4ac))/2a' matched Option D")

    # 3. Correct vs Incorrect Selections
    q_sqrt_opts = [
        MockOption("opt-A", "4", 1),
        MockOption("opt-B", "2", 0),
        MockOption("opt-C", "16", 0),
        MockOption("opt-D", "8", 0),
    ]
    opt, letter = _match_objective_option("2", q_sqrt_opts)
    assert letter == "B" and opt.options_id == "opt-B" and opt.is_correct == 0
    print("[PASS] Q4 (Incorrect choice): Student wrote '2' -> Selected Option B (is_correct=0, 0 marks)")

    # 4. Unclear Handwriting / Unmatched Answers
    q_poly_opts = [
        MockOption("opt-A", "$x^2 + 4$", 0),
        MockOption("opt-B", "$x^2 + 2x + 2$", 0),
        MockOption("opt-C", "$x^2 + 4x + 4$", 1),
        MockOption("opt-D", "$x^2 + 2x + 4$", 0),
    ]
    opt, letter = _match_objective_option("x² + 3x + 4", q_poly_opts)
    assert opt is None and letter is None
    print("[PASS] Q7 (Unmatched expression): 'x² + 3x + 4' returned None (No false guess)")

    opt, letter = _match_objective_option("[unclear]", q_matrix_opts)
    assert opt is None and letter is None
    opt, letter = _match_objective_option("", q_matrix_opts)
    assert opt is None and letter is None
    print("[PASS] Unclear handwriting ('[unclear]' and '') returned None")

    # 5. Letter Patterns & Formats
    opt, letter = _match_objective_option("B", q_matrix_opts)
    assert letter == "B"
    opt, letter = _match_objective_option("c)", q_matrix_opts)
    assert letter == "C"
    opt, letter = _match_objective_option("(c)", q_matrix_opts)
    assert letter == "C"
    opt, letter = _match_objective_option("C. -2", q_matrix_opts)
    assert letter == "C"
    opt, letter = _match_objective_option("(C) -2", q_matrix_opts)
    assert letter == "C"
    opt, letter = _match_objective_option("Option B: f(x) = sin(x)", q_trig_opts)
    assert letter == "B"
    print("[PASS] Letter formats ('B', 'c)', '(c)', 'C. -2', '(C) -2', 'Option B: ...') all matched correctly")

    print("\nALL VERIFICATION TESTS COMPLETED SUCCESSFULLY!")
    print("=" * 60)

if __name__ == "__main__":
    run_verification()
