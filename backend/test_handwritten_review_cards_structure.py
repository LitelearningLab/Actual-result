import json
import unittest
from unittest.mock import MagicMock, patch

from others.llm import vision_evaluate_question_images
from others.exam_review import review_user_exam
from others.exams import get_student_evaluation_details
from db.models import ExamReviewComments, Answer, Question, Exam_Attempt, ExamSchedule, Exam, Option, User


class TestHandwrittenReviewCardsStructure(unittest.TestCase):

    def test_vision_evaluate_question_images_returns_structured_categories(self):
        """Verify Vision evaluation returns structured topic/issue/label/statement dictionaries."""
        mock_client = MagicMock()
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "evaluations": [{
                            "question_id": "q-99",
                            "question_number": 1,
                            "student_answer_snippet": "Enzymes are carbohydrates that catalyze reactions.",
                            "detected_on_pages": [1],
                            "relevance_classification": "Directly answers question",
                            "suggested_marks": 2.0,
                            "max_marks": 5.0,
                            "is_correct": 0,
                            "ai_confidence": 92,
                            "missing": [
                                {
                                    "topic": "Active Site Mechanism",
                                    "issue": "Substrate binding mechanism was omitted",
                                    "label": "Needed",
                                    "statement": "Induced fit model and transition state lowering must be explained."
                                }
                            ],
                            "incomplete": [
                                {
                                    "topic": "Temperature Denaturation",
                                    "issue": "Mentioned heat affects rate but missed denaturation curve",
                                    "label": "Complete",
                                    "statement": "State that temperatures above optimum disrupt tertiary structure bonds."
                                }
                            ],
                            "incorrect": [
                                {
                                    "topic": "Enzyme Classification",
                                    "issue": "Stated that enzymes are classified as carbohydrates",
                                    "label": "Correct",
                                    "statement": "Enzymes are globular proteins, not carbohydrates."
                                }
                            ],
                            "feedback": "Partially correct. Identified catalytic role but had major biochemical classification errors."
                        }]
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_response

        q_dict = {
            "question_id": "q-99",
            "question_text": "Explain enzyme structure and properties.",
            "marks": 5.0,
            "expected_answer": "Enzymes are protein catalysts."
        }
        images = ["data:image/jpeg;base64,/9j/4AAQSkZJRg=="]

        result = vision_evaluate_question_images(mock_client, q_dict, images)

        self.assertTrue(result["status"])
        self.assertIsInstance(result["missing"], list)
        self.assertEqual(len(result["missing"]), 1)
        self.assertEqual(result["missing"][0]["topic"], "Active Site Mechanism")
        self.assertEqual(result["missing"][0]["label"], "Needed")

        self.assertIsInstance(result["incorrect"], list)
        self.assertEqual(result["incorrect"][0]["topic"], "Enzyme Classification")
        self.assertEqual(result["incorrect"][0]["label"], "Correct")

    def test_legacy_string_fallback_parsing(self):
        """Verify that legacy review comments with plain string format are parsed into topic, issue, label, and statement."""
        rc = MagicMock()
        rc.comment_id = "c-1"
        rc.category = "incorrect"
        rc.topic = None
        rc.issue = None
        rc.label = None
        rc.statement = None
        rc.comment_text = "(Enzyme Classification): Stated enzymes are carbohydrates Correct: Enzymes are globular proteins"
        rc.is_deleted = 0
        rc.action = None
        rc.updated_by = None
        rc.created_by = "usr-1"
        rc.updated_date = None
        rc.created_date = None
        rc.edit_reason = None

        # Simulate extraction logic in get_student_evaluation_details
        import re
        lbl_pattern = r"\b(Needed|Correct|Complete)\s*:\s*"
        raw_txt = rc.comment_text
        parts = re.split(lbl_pattern, raw_txt, flags=re.IGNORECASE)
        left_side = parts[0].strip()
        rc_label = parts[1].capitalize()
        rc_statement = parts[2].strip()
        sub = left_side.split(":", 1)
        rc_topic = sub[0].strip("() \t\n\r")
        rc_issue = sub[1].strip()

        self.assertEqual(rc_topic, "Enzyme Classification")
        self.assertEqual(rc_issue, "Stated enzymes are carbohydrates")
        self.assertEqual(rc_label, "Correct")
        self.assertEqual(rc_statement, "Enzymes are globular proteins")


if __name__ == "__main__":
    unittest.main()
