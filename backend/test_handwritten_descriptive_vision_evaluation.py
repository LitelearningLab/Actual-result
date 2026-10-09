"""
Unit and Integration Test Suite for Handwritten Descriptive Answer Image Input & Direct Vision Evaluation.

Verifies:
1. Single and multiple answer images per question.
2. Direct Vision evaluation invocation without OCR.
3. Accurate preservation of image order and question grouping.
4. Correct mapping to Answer model (written_answer JSON serialization).
5. Robust fallback to typed descriptive evaluation when no images are present.
6. JSON evaluation payload formatting and scoring rules compliance.
"""
import json
import unittest
from unittest.mock import MagicMock, patch

from others.llm import vision_evaluate_question_images, vision_evaluate_answersheet
from others.exams import _replace_attempt_answers
from others.exam_review import validate_answers
from db.models import Answer, Question, Option, Exam_Attempt


class TestHandwrittenDescriptiveVisionEvaluation(unittest.TestCase):

    def setUp(self):
        self.mock_client = MagicMock()
        self.sample_base64_image1 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
        self.sample_base64_image2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="

    def test_single_and_multi_image_vision_evaluation_payload(self):
        """Verify that vision_evaluate_question_images packages multi-image answers directly to Vision API."""
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "evaluations": [{
                            "question_id": "q-101",
                            "question_number": 1,
                            "student_answer_snippet": "Active listening requires paying full attention and responding thoughtfully.",
                            "detected_on_pages": [1, 2],
                            "relevance_classification": "Directly answers question",
                            "suggested_marks": 5.0,
                            "max_marks": 5.0,
                            "is_correct": 1,
                            "ai_confidence": 95,
                            "missing": "None",
                            "incomplete": "None",
                            "incorrect": "None",
                            "feedback": "Comprehensive explanation of active listening across both handwritten pages."
                        }],
                        "overall_summary": "Excellent handwritten work.",
                        "evaluation_notes": "Clear handwriting."
                    })
                }
            }]
        }
        self.mock_client.chat_completion.return_value = mock_response

        question_dict = {
            "question_id": "q-101",
            "question_text": "Explain the role of active listening in effective communication.",
            "marks": 5.0,
            "expected_answer": "Listening helps understand others needs and respond appropriately."
        }
        answer_images = [self.sample_base64_image1, self.sample_base64_image2]

        result = vision_evaluate_question_images(
            self.mock_client,
            question_dict,
            answer_images,
            written_text="Typed note accompanying handwriting"
        )

        # Assert Vision evaluation was called directly
        self.mock_client.chat_completion.assert_called_once()
        call_kwargs = self.mock_client.chat_completion.call_args[1]

        # Ensure aimodel=1 (Vision multimodal) was used
        self.assertEqual(call_kwargs.get("aimodel"), 1)
        input_data = call_kwargs.get("InputData")

        # Verify images were passed directly without OCR text extraction intermediate
        image_items = [item for item in input_data if item.get("type") == "image_url"]
        self.assertEqual(len(image_items), 2, "Both images must be passed to Vision API")

        # Check result values
        self.assertTrue(result["status"])
        self.assertEqual(result["score"], 5.0)
        self.assertEqual(result["is_correct"], 1)
        self.assertEqual(result["ai_confidence"], 95)
        self.assertIn("Comprehensive explanation", result["feedback"])

    def test_replace_attempt_answers_with_structured_image_answer(self):
        """Verify _replace_attempt_answers serializes multi-image answers to written_answer."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-123"
        attempt_mock.user_id = "usr-456"
        attempt_mock.schedule_id = "sch-789"

        answers_payload = {
            "q-desc-1": {
                "text": "Typed summary",
                "images": [self.sample_base64_image1, self.sample_base64_image2]
            },
            "q-mcq-2": "11111111-2222-3333-4444-555555555555",
            "q-fill-3": "Hardware blueprint"
        }

        _replace_attempt_answers(session_mock, attempt_mock, answers_payload)

        # Verify added Answer instances
        added_objects = [call[0][0] for call in session_mock.add.call_args_list]
        self.assertEqual(len(added_objects), 3)

        desc_ans = next(a for a in added_objects if a.question_id == "q-desc-1")
        self.assertIsNone(desc_ans.selected_option_id)
        self.assertIsNotNone(desc_ans.written_answer)

        parsed = json.loads(desc_ans.written_answer)
        self.assertEqual(parsed["text"], "Typed summary")
        self.assertEqual(len(parsed["images"]), 2)

        mcq_ans = next(a for a in added_objects if a.question_id == "q-mcq-2")
        self.assertEqual(mcq_ans.selected_option_id, "11111111-2222-3333-4444-555555555555")
        self.assertIsNone(mcq_ans.written_answer)

        fill_ans = next(a for a in added_objects if a.question_id == "q-fill-3")
        self.assertEqual(fill_ans.written_answer, "Hardware blueprint")
        self.assertIsNone(fill_ans.selected_option_id)

    @patch("others.exam_review.SQLiteDB")
    @patch("others.exam_review.openai_client")
    @patch("others.exam_review.vision_evaluate_question_images")
    @patch("others.exam_review.descriptive_evaluation")
    def test_validate_answers_routes_images_to_vision_and_text_to_llm(
        self, mock_desc_eval, mock_vision_eval, mock_client_factory, mock_db_cls
    ):
        """Verify validate_answers routes image answers to Vision API and text answers to descriptive_evaluation."""
        session_mock = MagicMock()
        mock_db_cls.return_value.connect.return_value = session_mock

        # Question 1: Descriptive with handwritten images
        q1 = MagicMock()
        q1.question_id = "q-1"
        q1.question_type = "descriptive"
        q1.question_text = "Derive equation for kinetic energy."
        q1.marks = 5.0

        ans1 = MagicMock()
        ans1.answer_id = "ans-1"
        ans1.question_id = "q-1"
        ans1.is_validated = 0
        ans1.written_answer = json.dumps({
            "text": "",
            "images": [self.sample_base64_image1]
        })

        # Question 2: Descriptive with text only
        q2 = MagicMock()
        q2.question_id = "q-2"
        q2.question_type = "descriptive"
        q2.question_text = "What is polymorphism?"
        q2.marks = 3.0

        ans2 = MagicMock()
        ans2.answer_id = "ans-2"
        ans2.question_id = "q-2"
        ans2.is_validated = 0
        ans2.written_answer = "Polymorphism allows objects to take multiple forms."

        def mock_query(model):
            q_mock = MagicMock()
            if model == Answer:
                q_mock.filter_by.return_value.all.return_value = [ans1, ans2]
                q_mock.filter.return_value.all.return_value = [ans1, ans2]
                q_mock.filter.return_value.first.return_value = None
            elif model == Question:
                def q_filter_by(**kwargs):
                    res_mock = MagicMock()
                    qid = kwargs.get("question_id")
                    res_mock.first.return_value = q1 if qid == "q-1" else q2
                    return res_mock
                q_mock.filter_by.side_effect = q_filter_by
                q_mock.filter.return_value.first.return_value = q1
            elif model == Option:
                q_mock.filter_by.return_value.all.return_value = []
                q_mock.filter.return_value.all.return_value = []
            elif model == Exam_Attempt:
                att_obj = MagicMock()
                att_obj.attempt_id = "att-test-123"
                att_obj.schedule_id = "sch-1"
                q_mock.filter_by.return_value.first.return_value = att_obj
                q_mock.filter.return_value.first.return_value = att_obj
            else:
                q_mock.filter_by.return_value.first.return_value = None
                q_mock.filter_by.return_value.all.return_value = []
                q_mock.filter.return_value.first.return_value = None
                q_mock.filter.return_value.all.return_value = []
            return q_mock

        session_mock.query.side_effect = mock_query

        mock_vision_eval.return_value = {
            "status": True,
            "score": 5.0,
            "is_correct": 1,
            "ai_confidence": 92,
            "feedback": "Step derivation clearly visible in handwritten photo.",
            "missing": "None",
            "incomplete": "None",
            "incorrect": "None"
        }

        mock_desc_eval.return_value = {
            "status": True,
            "score": 3.0,
            "is_correct": 1,
            "ai_confidence": 90,
            "feedback": "Correct definition.",
            "missing": "None",
            "incomplete": "None",
            "incorrect": "None"
        }

        with patch("others.exam_review.calculate_attempt_score", return_value=(8.0, {"q-1": ans1, "q-2": ans2}, None)), \
             patch("others.exam_review.get_exam_total_marks", return_value=(8.0, None)):
            validate_answers("att-test-123")

        # Verify Vision evaluation was called for ans1 with image
        mock_vision_eval.assert_called_once()
        v_call_args = mock_vision_eval.call_args
        self.assertEqual(v_call_args[0][1]["question_id"], "q-1")
        self.assertEqual(len(v_call_args[0][2]), 1)

        # Verify regular descriptive_evaluation was called for ans2 (pure text)
        mock_desc_eval.assert_called_once()
        t_call_args = mock_desc_eval.call_args
        self.assertEqual(t_call_args[0][3], "Polymorphism allows objects to take multiple forms.")

        # Verify ans1.written_answer was stored as 'Handwritten answer uploaded'
        self.assertEqual(ans1.written_answer, "Handwritten answer uploaded")


if __name__ == "__main__":
    unittest.main()
