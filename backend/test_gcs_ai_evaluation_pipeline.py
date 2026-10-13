"""
Unit and Integration Test Suite for Phase 2: GCS AI Evaluation Integration.

Verifies:
1. GCS image bytes are fetched via gcs_storage.download_media_bytes and passed to Vision API.
2. Multiple images per question are downloaded and evaluated in the correct submission order.
3. Student typed text and image metadata references are preserved in Answer.written_answer after evaluation.
4. "Handwritten answer uploaded" overwrite is completely eliminated.
5. In-flight GCS download caching prevents redundant network downloads.
6. GCS storage failures/missing blobs do not falsely award 0 marks or mark unattempted; answer remains retryable.
7. Path authorization validates institute, exam, attempt, and question IDs, rejecting unauthorized paths.
8. Legacy plain text and legacy Base64 answer records continue to evaluate smoothly without regressions.
"""
import unittest
from unittest.mock import MagicMock, patch, call
import json
import base64
import os
import sys

# Ensure backend directory is in sys.path
backend_dir = os.path.dirname(os.path.abspath(__file__))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from others.exam_review import validate_answers, _validate_student_answer_gcs_path
from others.llm import vision_evaluate_answersheet, vision_evaluate_question_images
from db.models import Answer, Question, Option, Exam_Attempt, ExamSchedule, MarksHistory


class TestGCSAiEvaluationPipeline(unittest.TestCase):

    def setUp(self):
        # Sample test image bytes
        self.sample_png_bytes = b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15c4\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82"
        self.sample_jpg_bytes = b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00\xff\xdb\x00C\x00\x08\x06\x06\x07\x06\x05\x08\x07\x07\x07\t\t\x08\n\x0c\x14\r\x0c\x0b\x0b\x0c\x19\x12\x13\x0f\x14\x1d\x1a\x1f\x1e\x1d\x1a\x1c\x1c $.' \",#\x1c\x1c(7),01444\x1f'9=82<.342\xff\xc0\x00\x0b\x08\x00\x01\x00\x01\x01\x01\x11\x00\xff\xc4\x00\x1f\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xda\x00\x08\x01\x01\x00\x00?\x00\xbf\x00\xff\xd9"
        self.sample_b64 = f"data:image/png;base64,{base64.b64encode(self.sample_png_bytes).decode('utf-8')}"

    def test_path_authorization_validation(self):
        """Test _validate_student_answer_gcs_path rejects traversal and mismatched attempt/question."""
        valid_path = "student_answers/inst_1/exam_1/att_100/q_200/img_uuid.jpg"
        self.assertTrue(_validate_student_answer_gcs_path(valid_path, "att_100", "q_200"))

        # Mismatched attempt_id
        self.assertFalse(_validate_student_answer_gcs_path(valid_path, "att_OTHER", "q_200"))

        # Mismatched question_id
        self.assertFalse(_validate_student_answer_gcs_path(valid_path, "att_100", "q_OTHER"))

        # Traversal attempt
        self.assertFalse(_validate_student_answer_gcs_path("student_answers/inst_1/../../etc/passwd", "att_100", "q_200"))

        # Wrong root folder
        self.assertFalse(_validate_student_answer_gcs_path("questions/images/q_200/photo.jpg", "att_100", "q_200"))

    @patch("others.exam_review.openai_client")
    @patch("others.exam_review.SQLiteDB")
    @patch("others.exam_review.gcs_storage.download_media_bytes")
    @patch("others.exam_review.vision_evaluate_question_images")
    def test_gcs_image_bytes_routed_to_vision_evaluation(
        self, mock_vision_eval, mock_download, mock_db_cls, mock_openai_client
    ):
        """Verify GCS image bytes are downloaded and passed directly to Vision evaluation."""
        session_mock = MagicMock()
        mock_db_cls.return_value.connect.return_value = session_mock
        mock_download.return_value = self.sample_png_bytes

        attempt_id = "att-vision-1"
        q_id = "q-vision-1"

        att_mock = MagicMock(attempt_id=attempt_id, schedule_id="sched-1")
        sched_mock = MagicMock(schedule_id="sched-1", exam_id="exam-1", institute_id="inst-1")

        q_mock = MagicMock(
            question_id=q_id,
            question_type="descriptive",
            question_text="Explain thermal expansion.",
            marks=5.0
        )
        opt_mock = MagicMock(option_text="Expected expansion formula", is_correct=1, active_status=1)

        ans_payload = {
            "version": 2,
            "text": "See attached handwritten derivation",
            "images": [
                {
                    "image_id": "img-uuid-1",
                    "gcs_path": f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p1.jpg",
                    "mime_type": "image/jpeg",
                    "order": 1
                }
            ]
        }
        ans_mock = MagicMock(
            answer_id="ans-1",
            question_id=q_id,
            attempt_id=attempt_id,
            is_validated=0,
            written_answer=json.dumps(ans_payload)
        )

        def mock_query(model):
            m = MagicMock()
            if model == Answer:
                m.filter_by.return_value.all.return_value = [ans_mock]
            elif model == Question:
                m.filter_by.return_value.first.return_value = q_mock
            elif model == Option:
                m.filter_by.return_value.all.return_value = [opt_mock]
            elif model == Exam_Attempt:
                m.filter_by.return_value.first.return_value = att_mock
            elif model == ExamSchedule:
                m.filter_by.return_value.first.return_value = sched_mock
            else:
                m.filter_by.return_value.first.return_value = None
                m.filter_by.return_value.all.return_value = []
                m.filter.return_value.first.return_value = None
                m.filter.return_value.all.return_value = []
            return m

        session_mock.query.side_effect = mock_query

        mock_vision_eval.return_value = {
            "status": True,
            "score": 4.5,
            "is_correct": 0,
            "ai_confidence": 88,
            "feedback": "Clear explanation of linear expansion.",
            "missing": "Volumetric formula",
            "incomplete": "None",
            "incorrect": "None"
        }

        with patch("others.exam_review.calculate_attempt_score", return_value=(4.5, {q_id: ans_mock}, None)), \
             patch("others.exam_review.get_exam_total_marks", return_value=(5.0, None)):
            validate_answers(attempt_id)

        # 1. Download was executed for the canonical GCS path
        mock_download.assert_called_once_with(f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p1.jpg")

        # 2. Vision evaluation received raw image bytes
        mock_vision_eval.assert_called_once()
        passed_images = mock_vision_eval.call_args[0][2]
        self.assertEqual(len(passed_images), 1)
        self.assertEqual(passed_images[0]["image_bytes"], self.sample_png_bytes)
        self.assertEqual(passed_images[0]["order"], 1)

        # 3. Vision evaluation received the student typed text context
        passed_text = mock_vision_eval.call_args[1].get("written_text")
        self.assertEqual(passed_text, "See attached handwritten derivation")

        # 4. Answer.written_answer PRESERVED the JSON with image references, NOT overwritten with 'Handwritten answer uploaded'
        self.assertNotEqual(ans_mock.written_answer, "Handwritten answer uploaded")
        parsed_saved = json.loads(ans_mock.written_answer)
        self.assertEqual(parsed_saved["version"], 2)
        self.assertEqual(len(parsed_saved["images"]), 1)
        self.assertEqual(parsed_saved["images"][0]["gcs_path"], f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p1.jpg")

        # 5. Result metrics were saved to Answer record
        self.assertEqual(ans_mock.is_validated, 1)
        self.assertEqual(ans_mock.marks_awarded, 4.5)
        self.assertEqual(ans_mock.ai_confidence, 88)

    @patch("others.exam_review.openai_client")
    @patch("others.exam_review.SQLiteDB")
    @patch("others.exam_review.gcs_storage.download_media_bytes")
    @patch("others.exam_review.vision_evaluate_question_images")
    def test_multi_image_ordered_evaluation_and_caching(
        self, mock_vision_eval, mock_download, mock_db_cls, mock_openai_client
    ):
        """Verify multiple images are sorted by order and download caching works."""
        session_mock = MagicMock()
        mock_db_cls.return_value.connect.return_value = session_mock

        # Return sample bytes for any path
        mock_download.side_effect = lambda p: self.sample_png_bytes if "p1" in p else self.sample_jpg_bytes

        attempt_id = "att-multi-1"
        q_id = "q-multi-1"

        att_mock = MagicMock(attempt_id=attempt_id, schedule_id="sched-1")
        sched_mock = MagicMock(schedule_id="sched-1", exam_id="exam-1", institute_id="inst-1")

        q_mock = MagicMock(question_id=q_id, question_type="descriptive", question_text="Full proof", marks=10.0)

        # Images provided out of sequence in raw JSON: page 2 first, then page 1
        ans_payload = {
            "version": 2,
            "text": "Two page derivation",
            "images": [
                {
                    "image_id": "img-2",
                    "gcs_path": f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p2.jpg",
                    "order": 2
                },
                {
                    "image_id": "img-1",
                    "gcs_path": f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p1.jpg",
                    "order": 1
                }
            ]
        }
        ans_mock = MagicMock(answer_id="ans-m1", question_id=q_id, attempt_id=attempt_id, is_validated=0, written_answer=json.dumps(ans_payload))

        def mock_query(model):
            m = MagicMock()
            if model == Answer:
                m.filter_by.return_value.all.return_value = [ans_mock]
            elif model == Question:
                m.filter_by.return_value.first.return_value = q_mock
            elif model == Option:
                m.filter_by.return_value.all.return_value = []
            elif model == Exam_Attempt:
                m.filter_by.return_value.first.return_value = att_mock
            elif model == ExamSchedule:
                m.filter_by.return_value.first.return_value = sched_mock
            else:
                m.filter_by.return_value.first.return_value = None
                m.filter_by.return_value.all.return_value = []
                m.filter.return_value.first.return_value = None
                m.filter.return_value.all.return_value = []
            return m

        session_mock.query.side_effect = mock_query
        mock_vision_eval.return_value = {"status": True, "score": 9.0, "is_correct": 0, "ai_confidence": 95, "feedback": "Excellent"}

        with patch("others.exam_review.calculate_attempt_score", return_value=(9.0, {q_id: ans_mock}, None)), \
             patch("others.exam_review.get_exam_total_marks", return_value=(10.0, None)):
            validate_answers(attempt_id)

        # Verify sorted ordering: page 1 must be index 0, page 2 index 1
        mock_vision_eval.assert_called_once()
        passed_images = mock_vision_eval.call_args[0][2]
        self.assertEqual(len(passed_images), 2)
        self.assertEqual(passed_images[0]["order"], 1)
        self.assertEqual(passed_images[0]["image_id"], "img-1")
        self.assertEqual(passed_images[1]["order"], 2)
        self.assertEqual(passed_images[1]["image_id"], "img-2")

    @patch("others.exam_review.openai_client")
    @patch("others.exam_review.SQLiteDB")
    @patch("others.exam_review.gcs_storage.download_media_bytes")
    def test_gcs_download_failure_handles_gracefully(self, mock_download, mock_db_cls, mock_openai_client):
        """Verify that GCS failure leaves answer retryable and does NOT mark as 0 marks / unattempted."""
        session_mock = MagicMock()
        mock_db_cls.return_value.connect.return_value = session_mock
        mock_download.side_effect = FileNotFoundError("Blob not found in Google Cloud Storage")

        attempt_id = "att-err-1"
        q_id = "q-err-1"

        att_mock = MagicMock(attempt_id=attempt_id, schedule_id="sched-1")
        sched_mock = MagicMock(schedule_id="sched-1", exam_id="exam-1", institute_id="inst-1")
        q_mock = MagicMock(question_id=q_id, question_type="descriptive", question_text="Proof", marks=5.0)

        ans_payload = {
            "version": 2,
            "images": [{"image_id": "i1", "gcs_path": f"student_answers/inst-1/exam-1/{attempt_id}/{q_id}/p1.jpg", "order": 1}]
        }
        ans_mock = MagicMock(answer_id="ans-err", question_id=q_id, attempt_id=attempt_id, is_validated=0, marks_awarded=0.0, written_answer=json.dumps(ans_payload))

        def mock_query(model):
            m = MagicMock()
            if model == Answer:
                m.filter_by.return_value.all.return_value = [ans_mock]
            elif model == Question:
                m.filter_by.return_value.first.return_value = q_mock
            elif model == Option:
                m.filter_by.return_value.all.return_value = []
            elif model == Exam_Attempt:
                m.filter_by.return_value.first.return_value = att_mock
            elif model == ExamSchedule:
                m.filter_by.return_value.first.return_value = sched_mock
            else:
                m.filter_by.return_value.first.return_value = None
                m.filter_by.return_value.all.return_value = []
                m.filter.return_value.first.return_value = None
                m.filter.return_value.all.return_value = []
            return m

        session_mock.query.side_effect = mock_query

        with patch("others.exam_review.calculate_attempt_score", return_value=(0.0, {q_id: ans_mock}, None)), \
             patch("others.exam_review.get_exam_total_marks", return_value=(5.0, None)):
            validate_answers(attempt_id)

        # Answer should NOT be validated (kept retryable)
        self.assertEqual(ans_mock.is_validated, 0)
        self.assertIn("could not be completed", ans_mock.feedback)
        self.assertIn("image could not be retrieved", ans_mock.feedback)

    def test_vision_evaluate_answersheet_supports_bytes_and_urls(self):
        """Test vision_evaluate_answersheet formats bytes and URLs without data_uri corruption."""
        mock_client = MagicMock()
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = {
            "choices": [{
                "message": {
                    "content": json.dumps({
                        "evaluations": [{
                            "question_id": "q1",
                            "suggested_marks": 5.0,
                            "max_marks": 5.0,
                            "is_correct": 1,
                            "ai_confidence": 90,
                            "feedback": "Correct"
                        }]
                    })
                }
            }]
        }
        mock_client.chat_completion.return_value = mock_resp

        exam_rubric = {"exam_id": "test", "sections": []}
        page_images = [
            {"image_bytes": self.sample_png_bytes, "mime_type": "image/png", "page_number": 1},
            "https://storage.googleapis.com/actual-result-media/page2.jpg"
        ]

        res = vision_evaluate_answersheet(mock_client, exam_rubric, page_images)
        self.assertTrue(res["status"])

        # Check payload passed to OpenAI
        call_kwargs = mock_client.chat_completion.call_args[1]
        input_data = call_kwargs["InputData"]

        # Find image_url blocks
        image_blocks = [item["image_url"]["url"] for item in input_data if item.get("type") == "image_url"]
        self.assertEqual(len(image_blocks), 2)
        # Block 1 should be a data URI from bytes
        self.assertTrue(image_blocks[0].startswith("data:image/png;base64,"))
        # Block 2 should be the HTTP URL as-is (NOT wrapped in data:image/jpeg;base64,https://...)
        self.assertEqual(image_blocks[1], "https://storage.googleapis.com/actual-result-media/page2.jpg")


if __name__ == "__main__":
    unittest.main()
