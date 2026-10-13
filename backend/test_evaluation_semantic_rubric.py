import unittest
from unittest.mock import MagicMock, patch
import json
from others.llm import descriptive_evaluation
from others.exam_review import validate_answers
from db.models import Answer, Question, Option, Exam_Attempt, ExamReviewComments, ExamSchedule, MarksHistory

class TestEvaluationSemanticRubric(unittest.TestCase):
    def setUp(self):
        self.cpp_class_question = (
            "Write a simple C++ program that demonstrates the use of a class and an object. "
            "Explain how the class and object interact."
        )
        self.dog_sample_answer = (
            "Here is a simple C++ program: \n\n"
            "class Dog {\npublic:\n    void bark() {\n        cout << 'Woof!';\n    }\n};\n\n"
            "int main() {\n    Dog myDog;\n    myDog.bark();\n    return 0;\n}\n\n"
            "In this program, 'Dog' is a class that defines a behavior (bark). "
            "'myDog' is an object of the class 'Dog' that can call the 'bark' method, "
            "demonstrating how classes and objects interact in C++."
        )

    def test_case1_valid_alternative_example_receives_full_marks(self):
        """Case 1: A correct answer using a different but valid example (Student class instead of Dog class)."""
        student_answer = (
            "#include <iostream>\nusing namespace std;\n\n"
            "class Student {\npublic:\n    string name;\n    void display() {\n"
            "        cout << \"Student name: \" << name << endl;\n    }\n};\n\n"
            "int main() {\n    Student s1;\n    s1.name = \"Alice\";\n    s1.display();\n    return 0;\n}\n\n"
            "Interaction explanation: The class Student acts as a blueprint defining the data (name) and method (display). "
            "The object s1 is an instance of Student that holds specific state and invokes the member function."
        )

        mock_client = MagicMock()
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "score": 2.0,
                        "missing": "None",
                        "incomplete": "None",
                        "incorrect": "None",
                        "feedback": "Great job demonstrating class definition, object instantiation, and member function interaction using a Student class.",
                        "ai_confidence": 95
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_response

        result = descriptive_evaluation(
            mock_client,
            question_mark=2,
            expected_answer=self.dog_sample_answer,
            student_answer=student_answer,
            question_text=self.cpp_class_question
        )

        self.assertTrue(result["status"])
        self.assertEqual(result["score"], 2.0)
        self.assertEqual(result["missing"], "None")
        self.assertEqual(result["incomplete"], "None")
        self.assertEqual(result["incorrect"], "None")
        self.assertNotIn("dog", result["feedback"].lower())
        self.assertNotIn("bark", result["feedback"].lower())

        # Verify the prompt sent to LLM included the question and illustrative instruction
        called_args = mock_client.chat_completion.call_args[0]
        system_msg, user_msg = called_args[0], called_args[1]
        self.assertIn("Question Asked", user_msg)
        self.assertIn(self.cpp_class_question, user_msg)
        self.assertIn("ILLUSTRATIVE REFERENCE SOLUTIONS", system_msg)

    def test_case2_answer_missing_one_required_concept(self):
        """Case 2: An answer that demonstrates a class and object but completely misses the explanation of interaction."""
        student_answer = (
            "class Calculator {\npublic:\n    int add(int a, int b) { return a + b; }\n};\n"
            "int main() { Calculator c; c.add(2, 3); return 0; }"
        )

        mock_client = MagicMock()
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "score": 1.0,
                        "missing": "Explanation of how class and object interact",
                        "incomplete": "None",
                        "incorrect": "None",
                        "feedback": "The C++ program demonstrates a class and object, but you omitted the explanation of how they interact.",
                        "ai_confidence": 90
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_response

        result = descriptive_evaluation(
            mock_client,
            question_mark=2,
            expected_answer=self.dog_sample_answer,
            student_answer=student_answer,
            question_text=self.cpp_class_question
        )

        self.assertTrue(result["status"])
        self.assertEqual(result["score"], 1.0)
        self.assertIn("Explanation of how class and object interact", result["missing"])
        self.assertNotIn("dog", result["missing"].lower())
        self.assertNotIn("bark", result["missing"].lower())

    def test_case3_answer_with_incorrect_technical_statement(self):
        """Case 3: An answer containing a demonstrably incorrect technical statement."""
        student_answer = (
            "A class is an actual piece of hardware in memory, while an object is a virtual blueprint. "
            "Calling myCar.drive() works directly because all class members in C++ are automatically public."
        )

        mock_client = MagicMock()
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "score": 0.0,
                        "missing": "Working C++ program demonstration",
                        "incomplete": "None",
                        "incorrect": "Class is hardware in memory|Class members are automatically public in C++",
                        "feedback": "Incorrect definitions: classes are software blueprints, and C++ class members default to private.",
                        "ai_confidence": 92
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_response

        result = descriptive_evaluation(
            mock_client,
            question_mark=2,
            expected_answer=self.dog_sample_answer,
            student_answer=student_answer,
            question_text=self.cpp_class_question
        )

        self.assertTrue(result["status"])
        self.assertEqual(result["score"], 0.0)
        self.assertIn("hardware in memory", result["incorrect"])
        self.assertNotIn("Dog", result["incorrect"])

    def test_case4_answer_with_incomplete_explanation(self):
        """Case 4: An answer that addresses a concept but explains it incompletely."""
        student_answer = (
            "class Box { public: double width; };\n"
            "int main() { Box b; b.width = 10; }\n"
            "Interaction: they interact."
        )

        mock_client = MagicMock()
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "score": 1.0,
                        "missing": "None",
                        "incomplete": "Explanation of class and object interaction lacks detail on roles of blueprint and instance",
                        "incorrect": "None",
                        "feedback": "Good code example, but the interaction explanation is too brief and incomplete.",
                        "ai_confidence": 88
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_response

        result = descriptive_evaluation(
            mock_client,
            question_mark=2,
            expected_answer=self.dog_sample_answer,
            student_answer=student_answer,
            question_text=self.cpp_class_question
        )

        self.assertTrue(result["status"])
        self.assertEqual(result["score"], 1.0)
        self.assertIn("incomplete", result)
        self.assertNotEqual(result["incomplete"], "None")

    def test_case5_two_questions_with_different_requirements(self):
        """Case 5: Two questions with similar topics (OOP in C++) but different requirements."""
        q1_text = "Write a simple C++ program that demonstrates a class and object."
        q1_ref = "class Dog { public: void bark(); };"
        
        q2_text = "Write a C++ program explicitly demonstrating inheritance between a Base and Derived class."
        q2_ref = "class Animal { }; class Dog : public Animal { };"

        mock_client = MagicMock()

        # Call for Q1 with Student class (no inheritance needed)
        student_q1 = "class Student { public: string name; }; int main() { Student s; }"
        mock_client.chat_completion.return_value.status_code = 200
        mock_client.chat_completion.return_value.json.return_value = {
            "choices": [{"message": {"content": json.dumps({"score": 2.0, "missing": "None", "incomplete": "None", "incorrect": "None", "feedback": "Valid class demonstration.", "ai_confidence": 95})}}]
        }
        res_q1 = descriptive_evaluation(mock_client, 2, q1_ref, student_q1, question_text=q1_text)
        self.assertEqual(res_q1["score"], 2.0)

        # Call for Q2 with Student class that has NO inheritance (inheritance IS required by Q2)
        mock_client.chat_completion.return_value.json.return_value = {
            "choices": [{"message": {"content": json.dumps({"score": 0.5, "missing": "Inheritance between Base and Derived class", "incomplete": "None", "incorrect": "None", "feedback": "Demonstrated a single class but omitted the required inheritance relationship.", "ai_confidence": 90})}}]
        }
        res_q2 = descriptive_evaluation(mock_client, 2, q2_ref, student_q1, question_text=q2_text)
        self.assertEqual(res_q2["score"], 0.5)
        self.assertIn("Inheritance", res_q2["missing"])

    @patch("others.exam_review.SQLiteDB")
    @patch("others.exam_review.openai_client")
    @patch("others.exam_review.descriptive_evaluation")
    def test_case6_and_7_multiple_questions_and_stale_comment_cleanup(self, mock_desc_eval, mock_client_factory, mock_db_cls):
        """Case 6 & 7: Multiple questions evaluated in same attempt, and prior stale comments are cleared."""
        session_mock = MagicMock()
        mock_db_cls.return_value.connect.return_value = session_mock

        # Setup attempt
        attempt = MagicMock()
        attempt.attempt_id = "attempt-uuid-1"
        attempt.schedule_id = "sched-uuid-1"

        # Question 1
        q1 = MagicMock()
        q1.question_id = "q-1"
        q1.question_type = "descriptive"
        q1.question_text = self.cpp_class_question
        q1.marks = 2.0

        opt1 = MagicMock()
        opt1.option_text = self.dog_sample_answer
        opt1.active_status = 1

        ans1 = MagicMock()
        ans1.answer_id = "ans-1"
        ans1.attempt_id = "attempt-uuid-1"
        ans1.question_id = "q-1"
        ans1.is_validated = 0
        ans1.marks_awarded = 0.0
        ans1.written_answer = "class Student { public: string name; }; int main() { Student s; }"

        # Question 2
        q2 = MagicMock()
        q2.question_id = "q-2"
        q2.question_type = "descriptive"
        q2.question_text = "What is encapsulation in C++?"
        q2.marks = 2.0

        opt2 = MagicMock()
        opt2.option_text = "Encapsulation bundles data and functions together into a class, hiding internal details."
        opt2.active_status = 1

        ans2 = MagicMock()
        ans2.answer_id = "ans-2"
        ans2.attempt_id = "attempt-uuid-1"
        ans2.question_id = "q-2"
        ans2.is_validated = 0
        ans2.marks_awarded = 0.0
        ans2.written_answer = "Encapsulation means wrapping data members and member functions in a single class unit."

        def query_side_effect(model):
            q_mock = MagicMock()
            if model == Exam_Attempt:
                q_mock.filter_by.return_value.first.return_value = attempt
                return q_mock
            elif model == ExamSchedule:
                q_mock.filter_by.return_value.first.return_value = MagicMock()
                return q_mock
            elif model == Answer:
                q_mock.filter_by.return_value.all.return_value = [ans1, ans2]
                return q_mock
            elif model == Question:
                def q_filter_by(question_id=None):
                    res = MagicMock()
                    res.first.return_value = q1 if question_id == "q-1" else q2
                    return res
                q_mock.filter_by.side_effect = q_filter_by
                return q_mock
            elif model == Option:
                def opt_filter_by(question_id=None, active_status=1):
                    res = MagicMock()
                    res.all.return_value = [opt1] if question_id == "q-1" else [opt2]
                    return res
                q_mock.filter_by.side_effect = opt_filter_by
                return q_mock
            elif model == ExamReviewComments:
                filter_mock = MagicMock()
                filter_mock.delete.return_value = 1
                q_mock.filter.return_value = filter_mock
                return q_mock
            elif model == MarksHistory:
                q_mock.filter.return_value.first.return_value = None
                return q_mock
            return q_mock

        session_mock.query.side_effect = query_side_effect

        mock_desc_eval.side_effect = [
            # Evaluation for Q1
            {
                "status": True,
                "score": 2.0,
                "ai_confidence": 95,
                "feedback": "Correct class demonstration using Student.",
                "missing": "None",
                "incomplete": "None",
                "incorrect": "None"
            },
            # Evaluation for Q2
            {
                "status": True,
                "score": 2.0,
                "ai_confidence": 92,
                "feedback": "Accurate definition of encapsulation.",
                "missing": "None",
                "incomplete": "None",
                "incorrect": "None"
            }
        ]

        with patch("others.exam_review.calculate_attempt_score", return_value=(4.0, {"q-1": ans1, "q-2": ans2}, None)), \
             patch("others.exam_review.get_exam_total_marks", return_value=(4.0, None)):
            validate_answers("attempt-uuid-1")

        # Verify descriptive_evaluation was called twice, once per question
        self.assertEqual(mock_desc_eval.call_count, 2)

        # Check call 1 passed Q1's question_text
        c1 = mock_desc_eval.call_args_list[0]
        self.assertEqual(c1[1]["question_text"], self.cpp_class_question)

        # Check call 2 passed Q2's question_text
        c2 = mock_desc_eval.call_args_list[1]
        self.assertEqual(c2[1]["question_text"], "What is encapsulation in C++?")

        # Check answers marks
        self.assertEqual(ans1.marks_awarded, 2.0)
        self.assertEqual(ans2.marks_awarded, 2.0)


if __name__ == "__main__":
    unittest.main()
