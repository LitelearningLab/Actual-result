import random

attempt_a = "0150a409-3c89-4a5d-bd7e-1f4bed455712"
attempt_b = "7474ba30-ee5c-43dc-b9c6-1aeab800c32e"

questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]
options = ["Option A", "Option B", "Option C", "Option D"]

def shuffle_for_attempt(attempt_id):
    rng = random.Random(attempt_id)
    q_copy = list(questions)
    opt_copy = list(options)
    rng.shuffle(opt_copy)
    rng.shuffle(q_copy)
    return q_copy, opt_copy

q_a, opt_a = shuffle_for_attempt(attempt_a)
q_b, opt_b = shuffle_for_attempt(attempt_b)

print(f"Student A Questions: {q_a}")
print(f"Student A Options:   {opt_a}")
print()
print(f"Student B Questions: {q_b}")
print(f"Student B Options:   {opt_b}")

# Reload test for Student A
q_a_reload, opt_a_reload = shuffle_for_attempt(attempt_a)
assert q_a == q_a_reload and opt_a == opt_a_reload, "Reload check failed!"
print("\nReload verification PASSED: Same attempt ID retains consistent shuffle across reloads.")
