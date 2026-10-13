"""
Unit and Integration Test Suite for Phase 1: GCS Service and Answer Upload Pipeline.

Verifies:
1. Canonical GCS object path generation (student_answers/{institute_id}/{exam_id}/{attempt_id}/{question_id}/{image_uuid}.{extension}).
2. Secure download_media_bytes from GCS and local fallback.
3. Base64 offloading to GCS and lightweight JSON persistence in Answer.written_answer (No Base64 in DB).
4. Autosave deduplication: unchanged images are NOT re-uploaded on consecutive autosaves.
5. Multi-image ordering and preservation of student typed text.
6. Error handling and cleanup of newly uploaded orphaned GCS objects on database failure.
7. Safe cleanup of replaced/removed images after successful transaction commit.
8. Backward compatibility with plain text, fill-in-the-blanks, and multi-choice option answers.
"""

import unittest
from unittest.mock import MagicMock, patch
import json
import base64
import hashlib
import uuid
import os
import sys

# Add backend directory to sys.path
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
    submit_exam_answers,
    _extract_handwritten_image_components,
    _process_handwritten_answer_images,
)
from db.models import Answer, Exam_Attempt, ExamSchedule


class TestGCSAnswerUploadPipeline(unittest.TestCase):

    def setUp(self):
        # 1x1 transparent PNG data URL
        self.tiny_png_bytes = b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1f\x15c4\x00\x00\x00\nIDATx\x9cc\x00\x01\x00\x00\x05\x00\x01\r\n-\xb4\x00\x00\x00\x00IEND\xaeB`\x82"
        self.tiny_png_b64 = f"data:image/png;base64,{base64.b64encode(self.tiny_png_bytes).decode('utf-8')}"

        # 1x1 JPEG data URL
        self.tiny_jpg_bytes = b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00\xff\xdb\x00C\x00\x08\x06\x06\x07\x06\x05\x08\x07\x07\x07\t\t\x08\n\x0c\x14\r\x0c\x0b\x0b\x0c\x19\x12\x13\x0f\x14\x1d\x1a\x1f\x1e\x1d\x1a\x1c\x1c $.' \",#\x1c\x1c(7),01444\x1f'9=82<.342\xff\xc0\x00\x0b\x08\x00\x01\x00\x01\x01\x01\x11\x00\xff\xc4\x00\x1f\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xda\x00\x08\x01\x01\x00\x00?\x00\xbf\x00\xff\xd9"
        self.tiny_jpg_b64 = f"data:image/jpeg;base64,{base64.b64encode(self.tiny_jpg_bytes).decode('utf-8')}"

    def test_canonical_object_path_generation(self):
        """Test build_student_answer_object_path formats exact path without redundant uuid prefixes."""
        path = build_student_answer_object_path(
            institute_id="inst_123",
            exam_id="exam_456",
            attempt_id="att_789",
            question_id="q_101",
            image_uuid="uuid_abc",
            extension=".png",
        )
        self.assertEqual(
            path, "student_answers/inst_123/exam_456/att_789/q_101/uuid_abc.png"
        )

        # Traversal sanitization
        path_traversal = build_student_answer_object_path(
            institute_id="../../inst",
            exam_id="exam/sub",
            attempt_id="att",
            question_id="q",
            image_uuid="id",
            extension="jpg",
        )
        self.assertNotIn("..", path_traversal)
        self.assertTrue(path_traversal.startswith("student_answers/"))

    def test_download_media_bytes_from_local_fallback(self):
        """Test download_media_bytes reads local fallback file cleanly."""
        service = GCSStorageService()
        service.allow_local_fallback = True
        service.bucket = None
        test_rel_path = f"test_downloads/{uuid.uuid4().hex}/sample.txt"
        local_full_path = os.path.join(
            backend_dir, "static", "uploads", test_rel_path.replace("/", os.sep)
        )
        os.makedirs(os.path.dirname(local_full_path), exist_ok=True)
        try:
            with open(local_full_path, "wb") as f:
                f.write(b"Hello Local Fallback")

            content = service.download_media_bytes(test_rel_path)
            self.assertEqual(content, b"Hello Local Fallback")
        finally:
            if os.path.exists(local_full_path):
                os.remove(local_full_path)

    def test_replace_attempt_answers_offloads_images_to_storage(self):
        """Test _replace_attempt_answers converts Base64 images to canonical GCS JSON records."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-uuid-1"
        attempt_mock.user_id = "user-uuid-1"
        attempt_mock.schedule_id = "sched-uuid-1"

        sched_mock = MagicMock()
        sched_mock.exam_id = "exam-uuid-1"
        sched_mock.institute_id = "inst-uuid-1"
        session_mock.query.return_value.filter.return_value.first.return_value = (
            sched_mock
        )
        session_mock.query.return_value.filter.return_value.all.return_value = []

        with patch("others.exams.gcs_storage.upload_media") as mock_upload:
            mock_upload.return_value = {
                "gcs_path": "student_answers/inst-uuid-1/exam-uuid-1/att-uuid-1/q-1/abc.png",
                "storage_provider": "gcs",
                "mime_type": "image/png",
                "file_size": len(self.tiny_png_bytes),
            }

            answers_payload = {
                "q-1": {
                    "text": "The proof is written below:",
                    "images": [self.tiny_png_b64],
                },
                "q-2": "11111111-2222-3333-4444-555555555555",
                "q-3": "Photosynthesis",
            }

            newly_uploaded, orphaned_old = _replace_attempt_answers(
                session_mock, attempt_mock, answers_payload
            )

            self.assertEqual(len(newly_uploaded), 1)
            self.assertEqual(len(orphaned_old), 0)
            mock_upload.assert_called_once()

            # Verify Answer rows added
            added_answers = [call[0][0] for call in session_mock.add.call_args_list]
            self.assertEqual(len(added_answers), 3)

            q1_ans = next(a for a in added_answers if a.question_id == "q-1")
            parsed_json = json.loads(q1_ans.written_answer)

            # Assert NO Base64 strings exist in written_answer
            self.assertNotIn("data:image", q1_ans.written_answer)
            self.assertEqual(parsed_json["text"], "The proof is written below:")
            self.assertEqual(len(parsed_json["images"]), 1)
            img_entry = parsed_json["images"][0]
            self.assertEqual(img_entry["storage_provider"], "gcs")
            self.assertTrue(img_entry["gcs_path"].startswith("student_answers/"))
            self.assertEqual(img_entry["file_size"], len(self.tiny_png_bytes))
            self.assertEqual(img_entry["order"], 1)

            # Assert MCQ and Fill answers remain unchanged
            q2_ans = next(a for a in added_answers if a.question_id == "q-2")
            self.assertEqual(
                q2_ans.selected_option_id, "11111111-2222-3333-4444-555555555555"
            )
            self.assertIsNone(q2_ans.written_answer)

            q3_ans = next(a for a in added_answers if a.question_id == "q-3")
            self.assertEqual(q3_ans.written_answer, "Photosynthesis")
            self.assertIsNone(q3_ans.selected_option_id)

    def test_autosave_deduplication_does_not_reupload_unchanged_images(self):
        """Test that consecutive autosaves with the same image do NOT trigger redundant uploads."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-uuid-2"
        attempt_mock.user_id = "user-uuid-2"
        attempt_mock.schedule_id = "sched-uuid-2"

        # Simulate existing answer from previous autosave
        content_hash = hashlib.sha256(self.tiny_png_bytes).hexdigest()
        existing_answer = MagicMock()
        existing_answer.question_id = "q-desc"
        existing_answer.written_answer = json.dumps(
            {
                "version": 2,
                "text": "Draft 1",
                "images": [
                    {
                        "image_id": "existing-img-uuid",
                        "gcs_path": "student_answers/inst/exam/att-uuid-2/q-desc/existing.png",
                        "storage_provider": "gcs",
                        "mime_type": "image/png",
                        "file_size": len(self.tiny_png_bytes),
                        "sha256": content_hash,
                        "order": 1,
                    }
                ],
            }
        )

        session_mock.query.return_value.filter.return_value.all.return_value = [
            existing_answer
        ]

        with patch("others.exams.gcs_storage.upload_media") as mock_upload:
            answers_payload = {
                "q-desc": {
                    "text": "Draft 2 with same photo",
                    "images": [self.tiny_png_b64],  # Same base64 image resubmitted
                }
            }

            newly_uploaded, orphaned_old = _replace_attempt_answers(
                session_mock, attempt_mock, answers_payload
            )

            # Upload should NOT be called because SHA256 matched existing image
            mock_upload.assert_not_called()
            self.assertEqual(len(newly_uploaded), 0)
            self.assertEqual(len(orphaned_old), 0)

            added_answers = [call[0][0] for call in session_mock.add.call_args_list]
            saved_ans = added_answers[0]
            parsed = json.loads(saved_ans.written_answer)
            self.assertEqual(parsed["text"], "Draft 2 with same photo")
            self.assertEqual(
                parsed["images"][0]["gcs_path"],
                "student_answers/inst/exam/att-uuid-2/q-desc/existing.png",
            )

    def test_multi_image_ordering(self):
        """Test multiple images per question preserve their exact submission order."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-uuid-3"
        attempt_mock.user_id = "user-uuid-3"
        attempt_mock.schedule_id = "sched-uuid-3"

        session_mock.query.return_value.filter.return_value.all.return_value = []

        with patch("others.exams.gcs_storage.upload_media") as mock_upload:

            def fake_upload(file_bytes, exact_object_path=None, **kwargs):
                return {
                    "gcs_path": exact_object_path,
                    "storage_provider": "gcs",
                    "mime_type": "image/png",
                    "file_size": len(file_bytes),
                }

            mock_upload.side_effect = fake_upload

            answers_payload = {
                "q-multi": {
                    "text": "Multi-page submission",
                    "images": [self.tiny_png_b64, self.tiny_jpg_b64],
                }
            }

            newly_uploaded, _ = _replace_attempt_answers(
                session_mock, attempt_mock, answers_payload
            )
            self.assertEqual(len(newly_uploaded), 2)

            added_answers = [call[0][0] for call in session_mock.add.call_args_list]
            parsed = json.loads(added_answers[0].written_answer)
            self.assertEqual(len(parsed["images"]), 2)
            self.assertEqual(parsed["images"][0]["order"], 1)
            self.assertEqual(parsed["images"][1]["order"], 2)
            self.assertIn(".png", parsed["images"][0]["gcs_path"])
            self.assertIn(".jpg", parsed["images"][1]["gcs_path"])

    def test_upload_failure_cleans_up_newly_uploaded_objects(self):
        """Test that if an upload or database operation fails midway, newly uploaded objects are deleted."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-uuid-fail"
        attempt_mock.user_id = "user-uuid-fail"
        attempt_mock.schedule_id = "sched-uuid-fail"

        session_mock.query.return_value.filter.return_value.all.return_value = []

        with patch("others.exams.gcs_storage.upload_media") as mock_upload, patch(
            "others.exams.gcs_storage.delete_media"
        ) as mock_delete:

            # First image succeeds, second image fails
            mock_upload.side_effect = [
                {
                    "gcs_path": "student_answers/inst/exam/att-uuid-fail/q-1/img1.png",
                    "storage_provider": "gcs",
                    "mime_type": "image/png",
                    "file_size": 10,
                },
                RuntimeError("GCS connection timeout"),
            ]

            answers_payload = {
                "q-1": {
                    "text": "Two photos",
                    "images": [self.tiny_png_b64, self.tiny_jpg_b64],
                }
            }

            with self.assertRaises(RuntimeError):
                _replace_attempt_answers(session_mock, attempt_mock, answers_payload)

            # First uploaded object must be deleted to prevent orphaned GCS objects
            mock_delete.assert_called_once()
            deleted_path = mock_delete.call_args[0][0]
            self.assertTrue(deleted_path.startswith("student_answers/"))
            self.assertIn("att-uuid-fail", deleted_path)

    def test_removed_image_tracked_for_cleanup(self):
        """Test that when a student removes an image from a question, it is tracked in orphaned_old."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-uuid-remove"
        attempt_mock.user_id = "user-uuid-remove"
        attempt_mock.schedule_id = "sched-uuid-remove"

        existing_answer = MagicMock()
        existing_answer.question_id = "q-remove"
        existing_answer.written_answer = json.dumps(
            {
                "version": 2,
                "text": "Initial",
                "images": [
                    {
                        "image_id": "img-1",
                        "gcs_path": "student_answers/inst/exam/att/q/img1.png",
                        "sha256": "hash1",
                        "order": 1,
                    },
                    {
                        "image_id": "img-2",
                        "gcs_path": "student_answers/inst/exam/att/q/img2.png",
                        "sha256": "hash2",
                        "order": 2,
                    },
                ],
            }
        )
        session_mock.query.return_value.filter.return_value.all.return_value = [
            existing_answer
        ]

        # Resubmit with only img-1 (img-2 removed)
        answers_payload = {
            "q-remove": {
                "text": "Initial with 1 photo",
                "images": [
                    {
                        "image_id": "img-1",
                        "gcs_path": "student_answers/inst/exam/att/q/img1.png",
                    }
                ],
            }
        }

        newly_uploaded, orphaned_old = _replace_attempt_answers(
            session_mock, attempt_mock, answers_payload
        )
        self.assertEqual(len(newly_uploaded), 0)
        self.assertIn("student_answers/inst/exam/att/q/img2.png", orphaned_old)

    def test_local_fallback_upload_media_traversal_rejection(self):
        """Test upload_media in local fallback rejects traversal, drive-qualified, and absolute paths."""
        service = GCSStorageService()
        service.allow_local_fallback = True
        service.bucket = None

        traversal_candidates = [
            "../../outside.jpg",
            "..\\..\\outside.jpg",
            "/absolute_root.jpg",
            "\\absolute_root.jpg",
            "C:\\windows\\win.jpg",
            "D:/external/drive.jpg",
            "student_answers/../../outside.jpg",
        ]

        for bad_path in traversal_candidates:
            with self.subTest(bad_path=bad_path):
                with self.assertRaises(ValueError) as ctx:
                    service.upload_media(
                        file_bytes=self.tiny_jpg_bytes,
                        filename="test.jpg",
                        exact_object_path=bad_path,
                    )
                self.assertIn("Directory traversal detected", str(ctx.exception))

        # Also test bad folder_prefix
        bad_prefixes = ["../../bad_prefix", "C:\\bad_drive", "/bad_abs"]
        for bad_prefix in bad_prefixes:
            with self.subTest(bad_prefix=bad_prefix):
                with self.assertRaises(ValueError) as ctx:
                    service.upload_media(
                        file_bytes=self.tiny_jpg_bytes,
                        filename="test.jpg",
                        folder_prefix=bad_prefix,
                    )
                self.assertIn("Directory traversal detected", str(ctx.exception))

    def test_local_fallback_invalid_paths_do_not_create_files_outside_root(self):
        """Test invalid upload paths do not create directories or files outside upload root."""
        service = GCSStorageService()
        service.allow_local_fallback = True
        service.bucket = None

        test_canary_filename = f"canary_escape_{uuid.uuid4().hex}.jpg"
        outside_path = f"../../{test_canary_filename}"
        expected_canary_file = os.path.abspath(
            os.path.join(backend_dir, test_canary_filename)
        )

        try:
            with self.assertRaises(ValueError):
                service.upload_media(
                    file_bytes=self.tiny_jpg_bytes,
                    filename=test_canary_filename,
                    exact_object_path=outside_path,
                )
            # Ensure the file was not created outside upload root
            self.assertFalse(os.path.exists(expected_canary_file))
        finally:
            if os.path.exists(expected_canary_file):
                os.remove(expected_canary_file)

    def test_local_fallback_valid_nested_student_answer_uploads_successfully(self):
        """Test valid nested student-answer path uploads successfully in local fallback."""
        service = GCSStorageService()
        service.allow_local_fallback = True
        service.bucket = None

        u_id = uuid.uuid4().hex
        valid_path = (
            f"student_answers/inst_valid/exam_valid/att_valid/q_valid/{u_id}.jpg"
        )
        uploads_root = os.path.abspath(os.path.join(backend_dir, "static", "uploads"))
        expected_file = os.path.join(uploads_root, valid_path.replace("/", os.sep))

        try:
            result = service.upload_media(
                file_bytes=self.tiny_jpg_bytes,
                filename=f"{u_id}.jpg",
                exact_object_path=valid_path,
            )
            self.assertEqual(result["storage_provider"], "local")
            self.assertEqual(result["gcs_path"], valid_path)
            self.assertTrue(os.path.exists(expected_file))
            with open(expected_file, "rb") as f:
                self.assertEqual(f.read(), self.tiny_jpg_bytes)
        finally:
            if os.path.exists(expected_file):
                os.remove(expected_file)
                # Cleanup directory if empty
                try:
                    os.removedirs(os.path.dirname(expected_file))
                except OSError:
                    pass

    def test_remove_all_images_while_retaining_typed_text_orphans_old_images(self):
        """Test removing all images while retaining typed text collects the old image paths for cleanup."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-clear-imgs"
        attempt_mock.user_id = "user-1"
        attempt_mock.schedule_id = "sched-1"

        old_gcs_path = "student_answers/inst/exam/att/q1/old_img.jpg"
        existing_answer = MagicMock()
        existing_answer.question_id = "q1"
        existing_answer.written_answer = json.dumps(
            {
                "version": 2,
                "text": "Old handwritten text",
                "images": [
                    {
                        "image_id": "img-old-1",
                        "gcs_path": old_gcs_path,
                        "sha256": "hash1",
                        "order": 1,
                    }
                ],
            }
        )
        session_mock.query.return_value.filter.return_value.all.return_value = [
            existing_answer
        ]

        # Student removes all images, but keeps or edits typed text
        answers_payload = {"q1": {"text": "Answer text without photos", "images": []}}

        added_answers = []

        def mock_add(inst):
            added_answers.append(inst)

        session_mock.add.side_effect = mock_add
        session_mock.new = added_answers

        newly_uploaded, orphaned_old = _replace_attempt_answers(
            session_mock, attempt_mock, answers_payload
        )
        self.assertEqual(len(newly_uploaded), 0)
        self.assertIn(old_gcs_path, orphaned_old)

        # Verify typed text is preserved in Answer.written_answer
        self.assertEqual(len(added_answers), 1)
        saved_answer_obj = added_answers[0]
        parsed = json.loads(saved_answer_obj.written_answer)
        self.assertEqual(parsed.get("version"), 2)
        self.assertEqual(parsed.get("text"), "Answer text without photos")
        self.assertEqual(parsed.get("images"), [])

    def test_remove_three_images_collects_all_three_paths(self):
        """Test removing three images collects all three paths for cleanup."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-clear-3"
        attempt_mock.user_id = "user-1"
        attempt_mock.schedule_id = "sched-1"

        paths = [
            "student_answers/inst/exam/att/q1/img_1.jpg",
            "student_answers/inst/exam/att/q1/img_2.jpg",
            "student_answers/inst/exam/att/q1/img_3.jpg",
        ]
        existing_answer = MagicMock()
        existing_answer.question_id = "q1"
        existing_answer.written_answer = json.dumps(
            {
                "version": 2,
                "text": "Had 3 images",
                "images": [
                    {
                        "image_id": f"img-{i}",
                        "gcs_path": paths[i - 1],
                        "sha256": f"hash{i}",
                        "order": i,
                    }
                    for i in range(1, 4)
                ],
            }
        )
        session_mock.query.return_value.filter.return_value.all.return_value = [
            existing_answer
        ]

        answers_payload = {"q1": {"text": "All 3 images deleted", "images": []}}

        added_answers = []
        session_mock.add.side_effect = lambda inst: added_answers.append(inst)
        session_mock.new = added_answers

        newly_uploaded, orphaned_old = _replace_attempt_answers(
            session_mock, attempt_mock, answers_payload
        )
        self.assertEqual(len(newly_uploaded), 0)
        for p in paths:
            self.assertIn(p, orphaned_old)
        self.assertEqual(len(orphaned_old), 3)

    def test_retained_or_reused_image_not_scheduled_for_deletion(self):
        """Test retaining or reusing an image in another question does not schedule it for deletion."""
        session_mock = MagicMock()
        attempt_mock = MagicMock()
        attempt_mock.attempt_id = "att-reuse"
        attempt_mock.user_id = "user-1"
        attempt_mock.schedule_id = "sched-1"

        reused_path = "student_answers/inst/exam/att/q1/shared_image.jpg"
        unique_q1_path = "student_answers/inst/exam/att/q1/q1_only.jpg"

        existing_answer = MagicMock()
        existing_answer.question_id = "q1"
        existing_answer.written_answer = json.dumps(
            {
                "version": 2,
                "text": "Initial q1",
                "images": [
                    {
                        "image_id": "img-share",
                        "gcs_path": reused_path,
                        "sha256": "h_share",
                        "order": 1,
                    },
                    {
                        "image_id": "img-q1",
                        "gcs_path": unique_q1_path,
                        "sha256": "h_q1",
                        "order": 2,
                    },
                ],
            }
        )
        session_mock.query.return_value.filter.return_value.all.return_value = [
            existing_answer
        ]

        # Student clears images from q1, but attaches shared_image.jpg to q2
        answers_payload = {
            "q1": {"text": "Cleared q1", "images": []},
            "q2": {"text": "Reused image in q2", "images": [reused_path]},
        }

        added_answers = []
        session_mock.add.side_effect = lambda inst: added_answers.append(inst)
        session_mock.new = added_answers

        newly_uploaded, orphaned_old = _replace_attempt_answers(
            session_mock, attempt_mock, answers_payload
        )

        # q1_only.jpg must be orphaned, but shared_image.jpg must NOT be orphaned
        self.assertIn(unique_q1_path, orphaned_old)
        self.assertNotIn(reused_path, orphaned_old)

    @patch("others.exams.gcs_storage")
    def test_successful_commit_happens_before_deletion_in_autosave(self, mock_gcs):
        """Test a successful database commit happens before deletion of old GCS objects."""
        call_order = []

        mock_session = MagicMock()

        def record_commit():
            call_order.append("commit")

        mock_session.commit.side_effect = record_commit

        def record_delete(path):
            call_order.append(f"delete:{path}")
            return True

        mock_gcs.delete_media.side_effect = record_delete

        mock_attempt = MagicMock()
        mock_attempt.attempt_id = "att-order"
        mock_attempt.status = "in_progress"
        mock_attempt.remaining_seconds = 100

        orphaned_path = "student_answers/inst/exam/att-order/q1/old.jpg"
        existing_ans = MagicMock()
        existing_ans.question_id = "q1"
        existing_ans.written_answer = json.dumps(
            {"version": 2, "text": "Old", "images": [{"gcs_path": orphaned_path}]}
        )

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.filter_by.return_value = q_mock
            if model == Exam_Attempt:
                q_mock.first.return_value = mock_attempt
            elif model == Answer:
                q_mock.all.return_value = [existing_ans]
                q_mock.delete.return_value = 1
            return q_mock

        mock_session.query.side_effect = query_side_effect
        mock_session.new = []

        with patch("others.exams.SQLiteDB") as mock_db_class:
            mock_db_class.return_value.connect.return_value = mock_session

            resp, code = autosave_exam_answers(
                {
                    "attempt_id": "att-order",
                    "remaining_seconds": 90,
                    "answers": {"q1": {"text": "Updated typed", "images": []}},
                }
            )

            self.assertEqual(code, 200)
            self.assertEqual(call_order, ["commit", f"delete:{orphaned_path}"])

    @patch("others.exams.gcs_storage")
    def test_database_commit_failure_does_not_delete_existing_images_in_autosave(
        self, mock_gcs
    ):
        """Test database commit failure does not delete existing images and rolls back cleanly."""
        mock_session = MagicMock()
        mock_session.commit.side_effect = RuntimeError("Database deadlock / disk error")

        mock_attempt = MagicMock()
        mock_attempt.attempt_id = "att-fail"
        mock_attempt.status = "in_progress"

        orphaned_path = "student_answers/inst/exam/att-fail/q1/old.jpg"
        existing_ans = MagicMock()
        existing_ans.question_id = "q1"
        existing_ans.written_answer = json.dumps(
            {"version": 2, "text": "Old", "images": [{"gcs_path": orphaned_path}]}
        )

        def query_side_effect(model):
            q_mock = MagicMock()
            q_mock.filter.return_value = q_mock
            q_mock.filter_by.return_value = q_mock
            if model == Exam_Attempt:
                q_mock.first.return_value = mock_attempt
            elif model == Answer:
                q_mock.all.return_value = [existing_ans]
                q_mock.delete.return_value = 1
            return q_mock

        mock_session.query.side_effect = query_side_effect
        mock_session.new = []

        with patch("others.exams.SQLiteDB") as mock_db_class:
            mock_db_class.return_value.connect.return_value = mock_session

            resp, code = autosave_exam_answers(
                {
                    "attempt_id": "att-fail",
                    "remaining_seconds": 90,
                    "answers": {"q1": {"text": "Updated typed", "images": []}},
                }
            )

            self.assertEqual(code, 500)
            mock_session.rollback.assert_called_once()
            # GCS delete_media must NEVER be called on DB failure!
            mock_gcs.delete_media.assert_not_called()


if __name__ == "__main__":
    unittest.main()
