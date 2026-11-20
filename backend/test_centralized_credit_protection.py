import unittest
from unittest.mock import MagicMock, patch
import json

from others.ai_credits import AICreditManager, check_institute_ai_access
from others.bulk_eval_manager import BulkEvaluationManager


class TestCentralizedCreditProtection(unittest.TestCase):

    def test_check_and_reserve_no_allocation(self):
        """Pre-flight check blocks if institute has no allocated credits."""
        mock_session = MagicMock()
        with patch.object(AICreditManager, "get_institute_balance", return_value=(0, 0, 0, False)):
            allowed, msg, code, rem = AICreditManager.check_and_reserve(
                institute_id="test-inst",
                session=mock_session
            )
            self.assertFalse(allowed)
            self.assertEqual(code, 403)
            self.assertIn("AI access has not been granted", msg)

    def test_check_and_reserve_exhausted(self):
        """Pre-flight check blocks if credits are exhausted."""
        mock_session = MagicMock()
        with patch.object(AICreditManager, "get_institute_balance", return_value=(5000, 5000, 0, True)):
            allowed, msg, code, rem = AICreditManager.check_and_reserve(
                institute_id="test-inst",
                session=mock_session
            )
            self.assertFalse(allowed)
            self.assertEqual(code, 403)
            self.assertIn("quota exhausted", msg)

    def test_check_and_reserve_insufficient_for_estimate(self):
        """Pre-flight check blocks if remaining credits are less than estimated tokens."""
        mock_session = MagicMock()
        with patch.object(AICreditManager, "get_institute_balance", return_value=(5000, 4800, 200, True)):
            allowed, msg, code, rem = AICreditManager.check_and_reserve(
                institute_id="test-inst",
                estimated_tokens=500,
                feature_name="Bulk Paper Evaluation",
                session=mock_session
            )
            self.assertFalse(allowed)
            self.assertEqual(code, 403)
            self.assertIn("Insufficient AI credits", msg)

    def test_check_and_reserve_sufficient(self):
        """Pre-flight check allows if remaining credits are sufficient."""
        mock_session = MagicMock()
        with patch.object(AICreditManager, "get_institute_balance", return_value=(10000, 2000, 8000, True)):
            allowed, msg, code, rem = AICreditManager.check_and_reserve(
                institute_id="test-inst",
                estimated_tokens=2000,
                feature_name="AI Question Generation",
                session=mock_session
            )
            self.assertTrue(allowed)
            self.assertEqual(code, 200)
            self.assertIsNone(msg)
            self.assertEqual(rem, 8000)

    def test_bulk_eval_manager_auto_resume(self):
        """Decision 2: Bulk evaluation auto-resumes paused students when credits are added."""
        mgr = BulkEvaluationManager(max_workers=2)
        job_id = "job-paused-1"
        mgr.jobs[job_id] = {
            "job_id": job_id,
            "exam_id": "exam-100",
            "schedule_id": "exam-100",
            "created_at": "2026-11-19T00:00:00",
            "institute_id": "inst-123",
            "status": "paused_insufficient_credits",
            "total_students": 3,
            "completed_students": 1,
            "failed_students": 0,
            "students": {
                "user-1": {"status": "completed", "student_name": "Alice"},
                "user-2": {"status": "paused", "student_name": "Bob"},
                "user-3": {"status": "paused", "student_name": "Charlie"},
            },
            "raw_tasks": {
                "user-2": {"user_id": "user-2", "student_name": "Bob", "file_items": []},
                "user-3": {"user_id": "user-3", "student_name": "Charlie", "file_items": []},
            },
            "user_info": None
        }

        with patch.object(mgr.executor, "submit") as mock_submit:
            resumed_count = mgr.auto_resume_institute_jobs("inst-123")
            self.assertEqual(resumed_count, 2)
            self.assertEqual(mgr.jobs[job_id]["status"], "in_progress")
            # Completed student Alice is NOT re-submitted!
            self.assertEqual(mock_submit.call_count, 2)
            # Verify Bob and Charlie are re-queued
            self.assertEqual(mgr.jobs[job_id]["students"]["user-2"]["status"], "queued")
            self.assertEqual(mgr.jobs[job_id]["students"]["user-3"]["status"], "queued")
            self.assertEqual(mgr.jobs[job_id]["students"]["user-1"]["status"], "completed")


if __name__ == "__main__":
    unittest.main()
