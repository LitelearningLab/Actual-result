"""
Test Suite for Phase 3: Review API, Authorization Enforcement, and Security Safeguards.

Covers:
1. Version 2 answer JSON parsing in review_user_exam.
2. Typed answer text and image metadata separation.
3. Ordering of multiple images (ascending order).
4. Legacy text-only and Base64 answer compatibility.
5. Malformed answer JSON handling.
6. Signed URL generation and expiry configuration (60 minutes).
7. Student access restricted to their own attempt.
8. Teacher/admin access restricted by institute context.
9. Unauthorized / unauthenticated access rejection.
10. Local fallback path traversal prevention in download_media_bytes and delete_media.
11. Cleanup of images when an entire question is removed from autosave.
12. Database rollback without premature GCS deletion.
"""
import unittest
from unittest.mock import MagicMock, patch
import json
import base64
import os
import sys

backend_dir = os.path.dirname(os.path.abspath(__file__))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from others.gcs_service import (
    gcs_storage,
    build_student_answer_object_path,
    GCSStorageService,
)
from others.exams import (
    _replace_attempt_answers,
    autosave_exam_answers,
)
from others.exam_review import (
    review_user_exam,
    _validate_student_answer_gcs_path,
)
from db.models import Answer, Exam_Attempt, ExamSchedule, Question


class MockRequest:
    def __init__(self, args=None):
        self.args = args or {}


class TestPhase3SecuritySafeguards(unittest.TestCase):
    """Tests for Step 1 safeguards: path traversal prevention and orphan question cleanup."""

    def test_local_fallback_path_traversal_rejection(self):
        """Test download_media_bytes rejects ../ path traversal attempts in local fallback."""
        service = GCSStorageService()
        service.bucket = None
        service.allow_local_fallback = True

        traversal_paths = [
            "../../../etc/passwd",
            "..\\..\\..\\windows\\win.ini",
            "static/uploads/../../secret.txt",
            "/media/../../../boot.ini",
        ]
        for bad_path in traversal_paths:
            with self.assertRaises(ValueError) as ctx:
                service.download_media_bytes(bad_path)
            self.assertIn("Directory traversal detected", str(ctx.exception))

    def test_local_fallback_delete_media_traversal_rejection(self):
        """Test delete_media rejects ../ path traversal attempts in local fallback."""
        service = GCSStorageService()
        service.bucket = None
        service.allow_local_fallback = True

        traversal_paths = [
            "../../../etc/shadow",
            "..\\..\\..\\windows\\system32\\calc.exe",
            "static/uploads/../../config.json",
            "/absolute/root/file.txt",
        ]
        for bad_path in traversal_paths:
            with self.assertRaises(ValueError) as ctx:
                service.delete_media(bad_path)
            self.assertIn("Directory traversal detected", str(ctx.exception))

    @patch("others.exams.gcs_storage")
    def test_cleanup_images_when_question_omitted(self, mock_gcs):
        """Test _replace_attempt_answers cleans up GCS images when an entire question is omitted from payload."""
        mock_gcs.is_configured = True
        mock_gcs.delete_media = MagicMock(return_value=True)

        mock_session = MagicMock()
        attempt_id = 999
        schedule_id = 555
        inst_id = "inst_test"
        exam_id = 101

        mock_attempt = Exam_Attempt(
            attempt_id=attempt_id,
            schedule_id=schedule_id,
            user_id="user_1"
        )

        mock_sched = ExamSchedule(
            schedule_id=schedule_id,
            exam_id=exam_id,
            institute_id=inst_id
        )

        # Previous DB state: Question 1 and Question 2 had handwritten images
        q1_ans = Answer(
            attempt_id=attempt_id,
            question_id=1,
            written_answer=json.dumps({
                "version": 2,
                "images": [{
                    "gcs_path": "student_answers/inst_test/101/999/1/img1.png",
                    "hash": "hash1",
                    "order": 1
                }],
                "text": ""
            })
        )
        q2_ans = Answer(
            attempt_id=attempt_id,
            question_id=2,
            written_answer=json.dumps({
                "version": 2,
                "images": [{
                    "gcs_path": "student_answers/inst_test/101/999/2/img2.png",
                    "hash": "hash2",
                    "order": 1
                }],
                "text": ""
            })
        )

        # Mock session query results
        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            if model == ExamSchedule:
                q_mock.first.return_value = mock_sched
            elif model == Answer:
                q_mock.all.return_value = [q1_ans, q2_ans]
                q_mock.delete.return_value = 2
            elif model == Question:
                q_inst = MagicMock()
                q_inst.question_type = "descriptive"
                q_mock.first.return_value = q_inst
            return q_mock

        mock_session.query.side_effect = query_side_effect

        # New payload: Omits question 2 entirely, only answers question 1 with existing image
        new_answers_payload = {
            "1": {
                "images": ["student_answers/inst_test/101/999/1/img1.png"],
                "text": ""
            }
        }

        newly_uploaded, orphaned = _replace_attempt_answers(
            session=mock_session,
            exam_attempt=mock_attempt,
            answers=new_answers_payload
        )

        # q2 image must be scheduled for deletion because question 2 was omitted!
        self.assertIn("student_answers/inst_test/101/999/2/img2.png", orphaned)
        # q1 image must NOT be deleted because question 1 retained it!
        self.assertNotIn("student_answers/inst_test/101/999/1/img1.png", orphaned)

        # Verify that actual deletion happens only after successful database commit
        mock_attempt.status = "in_progress"
        call_order = []
        mock_session.commit.side_effect = lambda: call_order.append("commit")
        mock_gcs.delete_media.side_effect = lambda path: call_order.append(f"delete:{path}")

        def query_filter_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.filter_by.return_value = q_mock
            if model == ExamSchedule:
                q_mock.first.return_value = mock_sched
            elif model == Exam_Attempt:
                q_mock.first.return_value = mock_attempt
            elif model == Answer:
                q_mock.all.return_value = [q1_ans, q2_ans]
                q_mock.delete.return_value = 2
            elif model == Question:
                q_inst = MagicMock()
                q_inst.question_type = "descriptive"
                q_mock.first.return_value = q_inst
            return q_mock

        mock_session.query.side_effect = query_filter_side_effect

        with patch("others.exams.SQLiteDB") as mock_db_class:
            mock_db_class.return_value.connect.return_value = mock_session
            autosave_exam_answers({
                "attempt_id": attempt_id,
                "answers": new_answers_payload
            })

        self.assertEqual(call_order, ["commit", "delete:student_answers/inst_test/101/999/2/img2.png"])
        mock_gcs.delete_media.assert_called_with("student_answers/inst_test/101/999/2/img2.png")

    @patch("others.exams.gcs_storage")
    def test_database_rollback_prevents_premature_gcs_deletion(self, mock_gcs):
        """Test if database commit fails, existing GCS images are NOT deleted."""
        mock_gcs.is_configured = True
        mock_gcs.delete_media = MagicMock()

        mock_session = MagicMock()
        mock_attempt = Exam_Attempt(attempt_id=123, schedule_id=555)

        # Simulate DB error during query
        mock_session.query.side_effect = RuntimeError("Database connection failure")

        with self.assertRaises(RuntimeError):
            _replace_attempt_answers(
                session=mock_session,
                exam_attempt=mock_attempt,
                answers={"1": "answer"}
            )

        # GCS delete must NOT be called if DB fails!
        mock_gcs.delete_media.assert_not_called()


class TestPhase3ReviewAPIAndAuthorization(unittest.TestCase):
    """Tests for Step 3 and Step 4: review API parsing and authorization enforcement."""

    def setUp(self):
        self.mock_user_student = MagicMock()
        self.mock_user_student.user_id = "42"
        self.mock_user_student.user_role = "student"
        self.mock_user_student.institute_id = "inst_A"

        self.mock_user_teacher = MagicMock()
        self.mock_user_teacher.user_id = "99"
        self.mock_user_teacher.user_role = "instructor"
        self.mock_user_teacher.institute_id = "inst_A"

        self.mock_user_other_institute = MagicMock()
        self.mock_user_other_institute.user_id = "88"
        self.mock_user_other_institute.user_role = "instructor"
        self.mock_user_other_institute.institute_id = "inst_B"

    @patch("others.exam_review.gcs_storage")
    @patch("others.exam_review.SQLiteDB")
    def test_v2_json_parsing_and_signed_url_generation(self, MockSQLiteDB, mock_gcs):
        """Test v2 JSON written_answer is parsed cleanly into answer_images with 60-min signed URLs and student_text."""
        mock_gcs.generate_signed_url.side_effect = lambda p, expiration_minutes: f"https://signed.gcs/{p}?exp={expiration_minutes}"

        mock_session = MagicMock()
        MockSQLiteDB.return_value.connect.return_value = mock_session

        mock_schedule = MagicMock()
        mock_schedule.institute_id = "inst_A"
        mock_schedule.exam_id = 100
        mock_schedule.schedule_id = 555
        mock_schedule.published = 1
        mock_schedule.review_mode = "instant"
        mock_schedule.pass_mark = 50.0

        mock_attempt = MagicMock()
        mock_attempt.attempt_id = 10
        mock_attempt.user_id = "42"
        mock_attempt.schedule_id = 555
        mock_attempt.score = 85.0
        mock_attempt.status = "evaluated"
        mock_attempt.percentage = 90.0

        mock_q = MagicMock()
        mock_q.question_id = 1
        mock_q.question_text = "Explain photosynthesis in detail."
        mock_q.question_type = "descriptive"
        mock_q.marks = 10

        v2_answer_payload = {
            "version": 2,
            "images": [
                {
                    "gcs_path": "student_answers/inst_A/100/10/1/page2.png",
                    "hash": "hash2",
                    "order": 2,
                    "filename": "page2.png",
                    "mime_type": "image/png"
                },
                {
                    "gcs_path": "student_answers/inst_A/100/10/1/page1.png",
                    "hash": "hash1",
                    "order": 1,
                    "filename": "page1.png",
                    "mime_type": "image/png"
                }
            ],
            "text": "Here is my handwritten explanation and equations."
        }

        mock_ans = MagicMock()
        mock_ans.attempt_id = 10
        mock_ans.question_id = 1
        mock_ans.written_answer = json.dumps(v2_answer_payload)
        mock_ans.marks_obtained = 9.0
        mock_ans.marks_awarded = 9.0
        mock_ans.feedback = "Good work"
        mock_ans.comments = None
        mock_ans.ai_confidence = None
        mock_ans.manual_review_required = 0

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.order_by.return_value = q_mock
            q_mock.distinct.return_value = q_mock
            if model is ExamSchedule:
                q_mock.first.return_value = mock_schedule
            elif model is Exam_Attempt:
                q_mock.all.return_value = [mock_attempt]
                q_mock.first.return_value = mock_attempt
            elif model is Question:
                q_mock.all.return_value = [mock_q]
            elif model is Answer:
                q_mock.all.return_value = [mock_ans]
            elif getattr(model, 'key', None) == 'question_id' or getattr(model, 'name', None) == 'question_id':
                q_mock.all.return_value = [(1,)]
            else:
                q_mock.all.return_value = []
                q_mock.first.return_value = None
                q_mock.scalar.return_value = 10.0
            return q_mock

        mock_session.query.side_effect = query_side_effect

        req = MockRequest(args={"user_id": "42", "scheduler_id": "555", "attempt_id": "10"})
        data, status = review_user_exam(request=req, current_user=self.mock_user_student)

        self.assertEqual(status, 200)
        self.assertTrue(data["status"])
        self.assertIn("review", data["data"][0])
        self.assertIn("items", data["data"][0])
        self.assertEqual(data["data"][0]["items"], data["data"][0]["review"])
        items = data["data"][0]["items"]
        self.assertEqual(len(items), 1)

        q_item = items[0]
        # Verify typed text extracted
        self.assertEqual(q_item["student_text"], "Here is my handwritten explanation and equations.")
        self.assertEqual(q_item["selected_option"], ["Here is my handwritten explanation and equations."])

        # Verify images present and sorted by order (Page 1 then Page 2)
        self.assertEqual(len(q_item["answer_images"]), 2)
        self.assertEqual(q_item["answer_images"][0]["order"], 1)
        self.assertEqual(q_item["answer_images"][0]["filename"], "page1.png")
        self.assertEqual(q_item["answer_images"][0]["original_filename"], "page1.png")
        self.assertIn("https://signed.gcs/", q_item["answer_images"][0]["signed_url"])
        self.assertEqual(q_item["answer_images"][0]["url"], q_item["answer_images"][0]["signed_url"])
        self.assertEqual(q_item["answer_images"][0]["file_url"], q_item["answer_images"][0]["signed_url"])

        self.assertEqual(q_item["answer_images"][1]["order"], 2)
        self.assertEqual(q_item["answer_images"][1]["filename"], "page2.png")

        # Verify signed URL was called with 60 minutes expiry
        mock_gcs.generate_signed_url.assert_any_call("student_answers/inst_A/100/10/1/page1.png", expiration_minutes=60)
        mock_gcs.generate_signed_url.assert_any_call("student_answers/inst_A/100/10/1/page2.png", expiration_minutes=60)

    @patch("others.exam_review.SQLiteDB")
    def test_student_restricted_to_own_attempt(self, MockSQLiteDB):
        """Test student cannot view another student's exam attempt (returns 403 Forbidden)."""
        mock_session = MagicMock()
        MockSQLiteDB.return_value.connect.return_value = mock_session

        req = MockRequest(args={"user_id": "999", "scheduler_id": "555", "attempt_id": "20"})
        data, status = review_user_exam(request=req, current_user=self.mock_user_student)

        self.assertEqual(status, 403)
        self.assertFalse(data["status"])

    @patch("others.exam_review.SQLiteDB")
    def test_teacher_restricted_by_institute(self, MockSQLiteDB):
        """Test teacher from Institute B cannot view attempt from Institute A (returns 403 Forbidden)."""
        mock_session = MagicMock()
        MockSQLiteDB.return_value.connect.return_value = mock_session

        mock_schedule = MagicMock()
        mock_schedule.institute_id = "inst_A"  # Belongs to Institute A
        mock_schedule.schedule_id = 555
        mock_schedule.published = 1

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            if model == ExamSchedule:
                q_mock.first.return_value = mock_schedule
            else:
                q_mock.all.return_value = []
                q_mock.first.return_value = None
            return q_mock

        mock_session.query.side_effect = query_side_effect

        req = MockRequest(args={"user_id": "42", "scheduler_id": "555", "attempt_id": "10"})
        data, status = review_user_exam(request=req, current_user=self.mock_user_other_institute)

        self.assertEqual(status, 403)
        self.assertFalse(data["status"])

    @patch("others.exam_review.gcs_storage")
    @patch("others.exam_review.SQLiteDB")
    def test_legacy_text_and_base64_backward_compatibility(self, MockSQLiteDB, mock_gcs):
        """Test legacy plain text and Base64 answers are supported without breaking review flow."""
        mock_session = MagicMock()
        MockSQLiteDB.return_value.connect.return_value = mock_session

        mock_schedule = MagicMock()
        mock_schedule.institute_id = "inst_A"
        mock_schedule.exam_id = 100
        mock_schedule.schedule_id = 555
        mock_schedule.published = 1
        mock_schedule.review_mode = "instant"
        mock_schedule.pass_mark = 50.0

        mock_attempt = MagicMock()
        mock_attempt.attempt_id = 10
        mock_attempt.user_id = "42"
        mock_attempt.schedule_id = 555
        mock_attempt.score = 4.0
        mock_attempt.status = "evaluated"
        mock_attempt.percentage = 80.0

        mock_q1 = MagicMock()
        mock_q1.question_id = 1
        mock_q1.question_type = "descriptive"
        mock_q1.marks = 5

        # Plain text legacy answer
        mock_ans1 = MagicMock()
        mock_ans1.attempt_id = 10
        mock_ans1.question_id = 1
        mock_ans1.written_answer = "This is a simple typed descriptive answer."
        mock_ans1.marks_obtained = 4.0
        mock_ans1.marks_awarded = 4.0
        mock_ans1.feedback = None
        mock_ans1.comments = None
        mock_ans1.ai_confidence = None
        mock_ans1.manual_review_required = 0

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.order_by.return_value = q_mock
            q_mock.distinct.return_value = q_mock
            if model is ExamSchedule:
                q_mock.first.return_value = mock_schedule
            elif model is Exam_Attempt:
                q_mock.all.return_value = [mock_attempt]
                q_mock.first.return_value = mock_attempt
            elif model is Question:
                q_mock.all.return_value = [mock_q1]
            elif model is Answer:
                q_mock.all.return_value = [mock_ans1]
            elif getattr(model, 'key', None) == 'question_id' or getattr(model, 'name', None) == 'question_id':
                q_mock.all.return_value = [(1,)]
            else:
                q_mock.all.return_value = []
                q_mock.first.return_value = None
                q_mock.scalar.return_value = 5.0
            return q_mock

        mock_session.query.side_effect = query_side_effect

        req = MockRequest(args={"user_id": "42", "scheduler_id": "555", "attempt_id": "10"})
        data, status = review_user_exam(request=req, current_user=self.mock_user_student)

        self.assertEqual(status, 200)
        self.assertTrue(data["status"])
        self.assertIn("review", data["data"][0])
        self.assertIn("items", data["data"][0])
        self.assertEqual(data["data"][0]["items"], data["data"][0]["review"])
        item = data["data"][0]["items"][0]
        self.assertEqual(item["selected_option"], ["This is a simple typed descriptive answer."])
        self.assertEqual(item["student_text"], "This is a simple typed descriptive answer.")
        self.assertEqual(item["answer_images"], [])

    @patch("others.exam_review.gcs_storage")
    @patch("others.exam_review.SQLiteDB")
    def test_malformed_json_handling(self, MockSQLiteDB, mock_gcs):
        """Test malformed JSON string in written_answer does not crash the endpoint (graceful fallback)."""
        mock_session = MagicMock()
        MockSQLiteDB.return_value.connect.return_value = mock_session

        mock_schedule = MagicMock()
        mock_schedule.institute_id = "inst_A"
        mock_schedule.exam_id = 100
        mock_schedule.schedule_id = 555
        mock_schedule.published = 1
        mock_schedule.review_mode = "instant"
        mock_schedule.pass_mark = 50.0

        mock_attempt = MagicMock()
        mock_attempt.attempt_id = 10
        mock_attempt.user_id = "42"
        mock_attempt.schedule_id = 555
        mock_attempt.score = 3.0
        mock_attempt.status = "evaluated"
        mock_attempt.percentage = 60.0

        mock_q = MagicMock()
        mock_q.question_id = 1
        mock_q.question_type = "descriptive"
        mock_q.marks = 5

        # Broken JSON string
        mock_ans = MagicMock()
        mock_ans.attempt_id = 10
        mock_ans.question_id = 1
        mock_ans.written_answer = '{"version": 2, "images": [BROKEN JSON...'
        mock_ans.marks_obtained = 3.0
        mock_ans.marks_awarded = 3.0
        mock_ans.feedback = None
        mock_ans.comments = None
        mock_ans.ai_confidence = None
        mock_ans.manual_review_required = 0

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.order_by.return_value = q_mock
            q_mock.distinct.return_value = q_mock
            if model is ExamSchedule:
                q_mock.first.return_value = mock_schedule
            elif model is Exam_Attempt:
                q_mock.all.return_value = [mock_attempt]
                q_mock.first.return_value = mock_attempt
            elif model is Question:
                q_mock.all.return_value = [mock_q]
            elif model is Answer:
                q_mock.all.return_value = [mock_ans]
            elif getattr(model, 'key', None) == 'question_id' or getattr(model, 'name', None) == 'question_id':
                q_mock.all.return_value = [(1,)]
            else:
                q_mock.all.return_value = []
                q_mock.first.return_value = None
                q_mock.scalar.return_value = 5.0
            return q_mock

        mock_session.query.side_effect = query_side_effect

        req = MockRequest(args={"user_id": "42", "scheduler_id": "555", "attempt_id": "10"})
        data, status = review_user_exam(request=req, current_user=self.mock_user_student)

        self.assertEqual(status, 200)
        self.assertTrue(data["status"])
        self.assertIn("review", data["data"][0])
        self.assertIn("items", data["data"][0])
        self.assertEqual(data["data"][0]["items"], data["data"][0]["review"])
        item = data["data"][0]["items"][0]
        # Falls back to string as typed answer without 500 error
        self.assertEqual(item["selected_option"], ['{"version": 2, "images": [BROKEN JSON...'])
        self.assertEqual(item["answer_images"], [])

    def test_validate_student_answer_gcs_path(self):
        """Test _validate_student_answer_gcs_path rejects traversal and foreign paths."""
        self.assertTrue(
            _validate_student_answer_gcs_path(
                "student_answers/inst1/exam1/10/1/pic.png",
                attempt_id="10",
                question_id="1"
            )
        )
        # Traversal attempt
        self.assertFalse(
            _validate_student_answer_gcs_path(
                "student_answers/inst1/100/10/1/../../../etc/passwd",
                attempt_id="10",
                question_id="1"
            )
        )
        # Attempt mismatch
        self.assertFalse(
            _validate_student_answer_gcs_path(
                "student_answers/inst1/100/999/1/pic.png",
                attempt_id="10",
                question_id="1"
            )
        )
        # Question mismatch
        self.assertFalse(
            _validate_student_answer_gcs_path(
                "student_answers/inst1/100/10/99/pic.png",
                attempt_id="10",
                question_id="1"
            )
        )
        # Non student_answers path
        self.assertFalse(
            _validate_student_answer_gcs_path(
                "system/admin_creds.json",
                attempt_id="10",
                question_id="1"
            )
        )


if __name__ == "__main__":
    unittest.main()
