import sys
import unittest
import uuid
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.sqlite.base import SQLiteTypeCompiler
from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER

# Enable SQLite to compile MSSQL UNIQUEIDENTIFIER columns during unit tests
if not hasattr(SQLiteTypeCompiler, 'visit_UNIQUEIDENTIFIER'):
    def visit_UNIQUEIDENTIFIER(self, type_, **kw):
        return "VARCHAR(36)"
    SQLiteTypeCompiler.visit_UNIQUEIDENTIFIER = visit_UNIQUEIDENTIFIER

sys.path.insert(0, 'backend')

from db.models import Base, AICreditNotification, Institute, openai_requests
from others.ai_credit_notifications import AICreditNotificationManager


class TestAICreditNotifications(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Create an in-memory SQLite database for test isolation
        cls.engine = create_engine('sqlite:///:memory:', echo=False)
        Institute.__table__.create(cls.engine)
        AICreditNotification.__table__.create(cls.engine)
        cls.Session = sessionmaker(bind=cls.engine)
        cls.manager = AICreditNotificationManager()
        cls.manager._schema_verified = True

    def setUp(self):
        self.session = self.Session()
        # Mock SQLiteDB.connect to return this in-memory session for the manager
        from unittest.mock import patch
        self.patcher = patch('others.ai_credit_notifications.SQLiteDB')
        self.mock_db_cls = self.patcher.start()
        self.mock_db_inst = self.mock_db_cls.return_value
        self.mock_db_inst.connect.return_value = self.session

    def tearDown(self):
        self.patcher.stop()
        self.session.rollback()
        self.session.close()

    def test_01_create_and_fetch_notification(self):
        inst_id = f"test-inst-{uuid.uuid4().hex[:8]}"
        res = self.manager.create_notification(
            institute_id=inst_id,
            event_type="ALLOCATION",
            severity="INFO",
            title="Initial Credits",
            message="100,000 credits allocated.",
            credits_amount=100000,
            remaining_credits=100000,
            allocated_credits=100000,
            created_by="Super Admin"
        )
        self.assertIsNotNone(res)
        self.assertEqual(res["event_type"], "ALLOCATION")
        self.assertFalse(res["is_read"])

        # Fetch notifications
        fetch_res = self.manager.get_notifications(institute_id=inst_id)
        self.assertEqual(fetch_res["total"], 1)
        self.assertEqual(fetch_res["unread_count"], 1)
        self.assertEqual(fetch_res["notifications"][0]["title"], "Initial Credits")

    def test_02_mark_single_and_all_read(self):
        inst_id = f"test-inst-{uuid.uuid4().hex[:8]}"
        n1 = self.manager.create_notification(inst_id, "ADJUSTMENT", "INFO", "Added 50k", "50k credits added.", 50000)
        n2 = self.manager.create_notification(inst_id, "LOW_BALANCE", "WARNING", "Low Balance", "Balance is low.", remaining_credits=30000)

        unread_before = self.manager.get_notifications(institute_id=inst_id)["unread_count"]
        self.assertEqual(unread_before, 2)

        # Mark first one read
        success = self.manager.mark_as_read(n1["notification_id"], user_id="admin-1")
        self.assertTrue(success)

        unread_after_one = self.manager.get_notifications(institute_id=inst_id)["unread_count"]
        self.assertEqual(unread_after_one, 1)

        # Mark all read
        marked_count = self.manager.mark_all_as_read(institute_id=inst_id, user_id="admin-1")
        self.assertEqual(marked_count, 1)

        unread_after_all = self.manager.get_notifications(institute_id=inst_id)["unread_count"]
        self.assertEqual(unread_after_all, 0)

    def test_03_deduplication_anti_spam(self):
        inst_id = f"test-inst-{uuid.uuid4().hex[:8]}"
        allocated = 100000

        # Balance drops to 35,000 (Low Balance)
        self.manager.check_balance_thresholds(self.session, inst_id, remaining_credits=35000, allocated_credits=allocated)
        count_1 = self.session.query(AICreditNotification).filter_by(institute_id=inst_id).count()
        self.assertEqual(count_1, 1, "First threshold crossing should create 1 notification")

        # Repeated prompt consumption: balance drops to 34,500 (still Low Balance tier)
        self.manager.check_balance_thresholds(self.session, inst_id, remaining_credits=34500, allocated_credits=allocated)
        count_2 = self.session.query(AICreditNotification).filter_by(institute_id=inst_id).count()
        self.assertEqual(count_2, 1, "Deduplication must suppress repeated alerts in the same tier")

        # Balance drops further to 4,000 (Critical Balance tier)
        self.manager.check_balance_thresholds(self.session, inst_id, remaining_credits=4000, allocated_credits=allocated)
        count_3 = self.session.query(AICreditNotification).filter_by(institute_id=inst_id).count()
        self.assertEqual(count_3, 2, "Escalation to Critical tier must create notification")

        # Balance drops to 0 (Exhausted tier)
        self.manager.check_balance_thresholds(self.session, inst_id, remaining_credits=0, allocated_credits=allocated)
        count_4 = self.session.query(AICreditNotification).filter_by(institute_id=inst_id).count()
        self.assertEqual(count_4, 3, "Escalation to Exhausted tier must create notification")

        # Another check at 0 should be deduplicated
        self.manager.check_balance_thresholds(self.session, inst_id, remaining_credits=0, allocated_credits=allocated)
        count_5 = self.session.query(AICreditNotification).filter_by(institute_id=inst_id).count()
        self.assertEqual(count_5, 3, "Repeated checks at 0 must be deduplicated")

    def test_04_multi_tenant_isolation(self):
        inst_A = f"inst-A-{uuid.uuid4().hex[:6]}"
        inst_B = f"inst-B-{uuid.uuid4().hex[:6]}"

        self.manager.create_notification(inst_A, "ALLOCATION", "INFO", "Inst A Allocation", "Allocated to A")
        self.manager.create_notification(inst_B, "ALLOCATION", "INFO", "Inst B Allocation", "Allocated to B")

        # Admin of Inst A
        notifs_A = self.manager.get_notifications(institute_id=inst_A, is_super_admin=False)
        self.assertEqual(notifs_A["total"], 1)
        self.assertEqual(notifs_A["notifications"][0]["institute_id"], inst_A)

        # Admin of Inst B
        notifs_B = self.manager.get_notifications(institute_id=inst_B, is_super_admin=False)
        self.assertEqual(notifs_B["total"], 1)
        self.assertEqual(notifs_B["notifications"][0]["institute_id"], inst_B)

        # Super Admin seeing all
        notifs_super = self.manager.get_notifications(institute_id=None, is_super_admin=True)
        super_ids = [n["institute_id"] for n in notifs_super["notifications"]]
        self.assertIn(inst_A, super_ids)
        self.assertIn(inst_B, super_ids)

    def test_05_sse_stream_subscription_and_broadcast(self):
        inst_id = f"test-inst-sse-{uuid.uuid4().hex[:6]}"
        gen = self.manager.subscribe(institute_id=inst_id, is_super_admin=False)
        # First chunk is initial connection comment
        conn_chunk = next(gen)
        self.assertIn(": connected", conn_chunk)

        # Broadcast a notification
        notif = {
            "notification_id": str(uuid.uuid4()),
            "institute_id": inst_id,
            "title": "Low Balance",
            "message": "Only 30k left"
        }
        self.manager.broadcast(notif, inst_id)

        # Next chunk should be the event
        event_chunk = next(gen)
        self.assertIn("event: credit_notification", event_chunk)
        self.assertIn("Low Balance", event_chunk)

    def test_06_flask_routes_registered(self):
        import app as flask_app_mod
        client = flask_app_mod.app.test_client()
        rules = [rule.rule for rule in flask_app_mod.app.url_map.iter_rules()]

        expected_routes = [
            '/edu/api/ai-credits/notifications',
            '/edu/api/ai-credits/notifications/unread-count',
            '/edu/api/ai-credits/notifications/mark-read',
            '/edu/api/ai-credits/notifications/mark-all-read',
            '/edu/api/ai-credits/notifications/stream',
            '/edu/api/get-ai-credit-summary'
        ]
        for route in expected_routes:
            self.assertIn(route, rules, f"Expected route {route} to be registered on Flask app")


if __name__ == '__main__':
    unittest.main()
