import datetime
import json
import queue
import threading
from collections import defaultdict
from sqlalchemy import func, desc, or_, text
from db.db import SQLiteDB
from db.models import AICreditNotification, Institute, openai_requests


class AICreditNotificationManager:
    """
    Centralized manager for AI Credit Notifications:
    - Persistence in AI_Credit_Notifications table
    - Deduplication / Tier-transition suppression
    - Multi-tenant isolation
    - Real-time Server-Sent Events (SSE) streaming
    """
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super(AICreditNotificationManager, cls).__new__(cls)
                cls._instance._initialized = False
            return cls._instance

    def __init__(self):
        if getattr(self, '_initialized', False):
            return
        self.listeners = defaultdict(list)  # institute_id -> list of queue.Queue
        self.super_admin_listeners = []     # list of queue.Queue
        self.sync_lock = threading.Lock()
        self._schema_verified = False
        self._initialized = True

    def ensure_table(self, session):
        """
        Idempotent schema migration for AI_Credit_Notifications table.
        Supports both SQL Server (production) and SQLite (testing).
        """
        if self._schema_verified:
            return
        try:
            bind = session.get_bind()
            dialect = bind.dialect.name.lower() if bind else ''

            if 'mssql' in dialect or 'pyodbc' in dialect:
                session.execute(text("""
                IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='AI_Credit_Notifications' AND xtype='U')
                BEGIN
                    CREATE TABLE dbo.AI_Credit_Notifications (
                        notification_id NVARCHAR(64) PRIMARY KEY,
                        institute_id NVARCHAR(64) NOT NULL,
                        event_type NVARCHAR(64) NOT NULL,
                        severity NVARCHAR(32) NOT NULL,
                        title NVARCHAR(255) NOT NULL,
                        message NVARCHAR(1000) NOT NULL,
                        credits_amount BIGINT NULL,
                        remaining_credits BIGINT NULL,
                        allocated_credits BIGINT NULL,
                        is_read BIT NOT NULL DEFAULT 0,
                        read_at DATETIME NULL,
                        read_by NVARCHAR(64) NULL,
                        created_by NVARCHAR(100) NULL,
                        created_date DATETIME DEFAULT GETUTCDATE()
                    );
                    CREATE INDEX IX_AI_Credit_Notifications_Inst_Read 
                    ON dbo.AI_Credit_Notifications (institute_id, is_read, created_date DESC);
                END
                """))
                session.commit()
            else:
                session.execute(text("""
                CREATE TABLE IF NOT EXISTS AI_Credit_Notifications (
                    notification_id VARCHAR(36) PRIMARY KEY,
                    institute_id VARCHAR(64) NOT NULL,
                    event_type VARCHAR(64) NOT NULL,
                    severity VARCHAR(32) NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    message TEXT NOT NULL,
                    credits_amount BIGINT NULL,
                    remaining_credits BIGINT NULL,
                    allocated_credits BIGINT NULL,
                    is_read BOOLEAN NOT NULL DEFAULT 0,
                    read_at DATETIME NULL,
                    read_by VARCHAR(64) NULL,
                    created_by VARCHAR(100) NULL,
                    created_date DATETIME DEFAULT CURRENT_TIMESTAMP
                );
                """))
                session.commit()
            self._schema_verified = True
        except Exception as e:
            session.rollback()
            print(f"[AICreditNotificationManager] Table ensure notice: {e}")

    def create_notification(
        self,
        institute_id,
        event_type,
        severity,
        title,
        message,
        credits_amount=None,
        remaining_credits=None,
        allocated_credits=None,
        created_by="System"
    ):
        """
        Creates and persists an AI credit notification, then broadcasts to active SSE listeners.
        Completely non-blocking and safe: failures will never interrupt callers.
        """
        if not institute_id:
            return None

        clean_inst = str(institute_id).strip()
        db = SQLiteDB()
        session = db.connect()
        if not session:
            return None

        try:
            self.ensure_table(session)
            notif = AICreditNotification(
                institute_id=clean_inst,
                event_type=event_type,
                severity=severity,
                title=title,
                message=message,
                credits_amount=credits_amount,
                remaining_credits=remaining_credits,
                allocated_credits=allocated_credits,
                is_read=False,
                created_by=created_by,
                created_date=datetime.datetime.utcnow()
            )
            session.add(notif)
            session.commit()

            inst_name = ""
            try:
                from sqlalchemy import cast, String
                inst = session.query(Institute.name).filter(cast(Institute.institute_id, String) == clean_inst).first()
                if inst and inst[0]:
                    inst_name = str(inst[0]).strip()
            except Exception:
                inst_name = ""

            notif_dict = {
                "notification_id": str(notif.notification_id),
                "institute_id": notif.institute_id,
                "institute_name": inst_name,
                "event_type": notif.event_type,
                "severity": notif.severity,
                "title": notif.title,
                "message": notif.message,
                "credits_amount": notif.credits_amount,
                "remaining_credits": notif.remaining_credits,
                "allocated_credits": notif.allocated_credits,
                "is_read": False,
                "created_by": notif.created_by,
                "created_date": notif.created_date.isoformat() if notif.created_date else None
            }
            session.close()

            # Non-blocking broadcast to connected clients
            self.broadcast(notif_dict, clean_inst)
            return notif_dict
        except Exception as e:
            session.rollback()
            session.close()
            print(f"[AICreditNotificationManager] Error creating notification: {e}")
            return None

    def check_balance_thresholds(self, session, institute_id, remaining_credits, allocated_credits):
        """
        Evaluates remaining balance and triggers threshold notifications with anti-spam deduplication:
        - Exhausted: remaining <= 0 (or reserve floor)
        - Critical: remaining <= 5,000
        - Low Balance: remaining <= 40,000
        """
        if not institute_id or allocated_credits <= 0:
            return

        clean_inst = str(institute_id).strip()
        remaining = int(remaining_credits or 0)
        allocated = int(allocated_credits or 0)

        # Determine target threshold event
        target_event = None
        severity = None
        title = None
        message = None

        if remaining <= 0:
            target_event = "EXHAUSTED"
            severity = "EXHAUSTED"
            title = "AI Quota Exhausted"
            message = "Your AI credit quota has been completely exhausted (0 credits remaining). AI operations are paused until refilled."
        elif remaining <= 5000:
            target_event = "CRITICAL_BALANCE"
            severity = "CRITICAL"
            title = "Critical Low Balance Alert"
            message = f"Critical balance warning: Only {remaining:,} AI credits remaining (below 5,000 threshold). Please refill immediately."
        elif remaining <= 40000:
            target_event = "LOW_BALANCE"
            severity = "WARNING"
            title = "Low AI Balance Warning"
            message = f"AI credits running low: {remaining:,} credits remaining (below 40,000 threshold)."
        else:
            # Healthy balance: no alert needed
            return

        # Deduplication check: inspect latest threshold alert for this institute
        try:
            self.ensure_table(session)
            last_alert = session.query(AICreditNotification).filter(
                AICreditNotification.institute_id == clean_inst,
                AICreditNotification.event_type.in_([
                    "LOW_BALANCE", "CRITICAL_BALANCE", "EXHAUSTED", "ALLOCATION", "ADJUSTMENT"
                ])
            ).order_by(desc(AICreditNotification.created_date)).first()

            if last_alert and last_alert.event_type in ("LOW_BALANCE", "CRITICAL_BALANCE", "EXHAUSTED"):
                # If latest alert is already for this exact event or a higher severity, do NOT spam
                if last_alert.event_type == target_event:
                    return
                if target_event == "LOW_BALANCE" and last_alert.event_type in ("CRITICAL_BALANCE", "EXHAUSTED"):
                    return
                if target_event == "CRITICAL_BALANCE" and last_alert.event_type == "EXHAUSTED":
                    return

            # Trigger notification
            self.create_notification(
                institute_id=clean_inst,
                event_type=target_event,
                severity=severity,
                title=title,
                message=message,
                remaining_credits=remaining,
                allocated_credits=allocated,
                created_by="System"
            )
        except Exception as e:
            print(f"[AICreditNotificationManager] Threshold check warning: {e}")

    def broadcast(self, notification_data, institute_id):
        """
        Dispatches event payload to all active SSE listener queues.
        """
        payload = f"event: credit_notification\ndata: {json.dumps(notification_data)}\n\n"
        with self.sync_lock:
            # 1. Send to institute-scoped subscribers (the institute admin receives it)
            inst_queues = list(self.listeners.get(str(institute_id), []))
            for q in inst_queues:
                try:
                    q.put_nowait(payload)
                except queue.Full:
                    pass

            # 2. Send to Super Admin global subscribers:
            # Only broadcast system/operational alerts (e.g. LOW_BALANCE, CRITICAL_BALANCE, EXHAUSTED)
            # Suppress self-action credit adjustments/allocations so Super Admin's bell is not echoed
            event_type = notification_data.get("event_type")
            if event_type not in ("ADJUSTMENT", "ALLOCATION", "RENEWAL"):
                for q in list(self.super_admin_listeners):
                    try:
                        q.put_nowait(payload)
                    except queue.Full:
                        pass

    def subscribe(self, institute_id=None, is_super_admin=False):
        """
        SSE Generator yielding event-stream chunks with keep-alive heartbeats.
        """
        listener_queue = queue.Queue(maxsize=100)
        clean_inst = str(institute_id).strip() if institute_id else None

        with self.sync_lock:
            if is_super_admin:
                self.super_admin_listeners.append(listener_queue)
            elif clean_inst:
                self.listeners[clean_inst].append(listener_queue)

        try:
            # Initial ping/connection established
            yield ": connected\n\n"

            while True:
                try:
                    data = listener_queue.get(timeout=15.0)
                    yield data
                except queue.Empty:
                    # Keep-alive heartbeat comment to prevent proxy / browser timeout
                    yield ": ping\n\n"
        finally:
            with self.sync_lock:
                if is_super_admin and listener_queue in self.super_admin_listeners:
                    self.super_admin_listeners.remove(listener_queue)
                elif clean_inst and clean_inst in self.listeners and listener_queue in self.listeners[clean_inst]:
                    self.listeners[clean_inst].remove(listener_queue)

    def get_notifications(self, institute_id=None, is_super_admin=False, is_read=None, page=1, page_size=20):
        """
        Fetches paginated notifications scoped to institute / Super Admin.
        """
        db = SQLiteDB()
        session = db.connect()
        if not session:
            return {"notifications": [], "total": 0, "unread_count": 0}

        try:
            self.ensure_table(session)
            q = session.query(AICreditNotification)
            if not is_super_admin and institute_id:
                q = q.filter(AICreditNotification.institute_id == str(institute_id).strip())
            elif is_super_admin:
                if institute_id and str(institute_id).strip().lower() != 'all':
                    q = q.filter(AICreditNotification.institute_id == str(institute_id).strip())
                # For Super Admin: bell shows operational alerts (e.g. LOW_BALANCE, CRITICAL_BALANCE, EXHAUSTED)
                # Suppress self-action credit adjustment/allocation receipts intended for institute admins
                q = q.filter(AICreditNotification.event_type.notin_(["ADJUSTMENT", "ALLOCATION", "RENEWAL"]))

            # Unread count
            unread_count = q.filter(AICreditNotification.is_read == False).count()

            if is_read is not None:
                q = q.filter(AICreditNotification.is_read == bool(is_read))

            total = q.count()
            page = max(1, int(page or 1))
            page_size = max(1, min(100, int(page_size or 20)))

            records = q.order_by(desc(AICreditNotification.created_date)).offset((page - 1) * page_size).limit(page_size).all()

            # Preload institute names for rich Super Admin / organization-level display
            inst_ids = list({r.institute_id for r in records if r.institute_id})
            inst_map = {}
            if inst_ids:
                try:
                    inst_rows = session.query(Institute.institute_id, Institute.name).filter(Institute.institute_id.in_(inst_ids)).all()
                    inst_map = {str(i.institute_id): str(i.name).strip() for i in inst_rows if i.name}
                except Exception:
                    pass

            results = []
            for r in records:
                inst_name = inst_map.get(str(r.institute_id), "")
                results.append({
                    "notification_id": str(r.notification_id),
                    "institute_id": r.institute_id,
                    "institute_name": inst_name,
                    "event_type": r.event_type,
                    "severity": r.severity,
                    "title": r.title,
                    "message": r.message,
                    "credits_amount": r.credits_amount,
                    "remaining_credits": r.remaining_credits,
                    "allocated_credits": r.allocated_credits,
                    "is_read": bool(r.is_read),
                    "read_at": r.read_at.isoformat() if r.read_at else None,
                    "read_by": r.read_by,
                    "created_by": r.created_by,
                    "created_date": r.created_date.isoformat() if r.created_date else None
                })

            session.close()
            return {
                "notifications": results,
                "total": total,
                "unread_count": unread_count,
                "page": page,
                "page_size": page_size
            }
        except Exception as e:
            session.close()
            print(f"[AICreditNotificationManager] get_notifications error: {e}")
            return {"notifications": [], "total": 0, "unread_count": 0}

    def mark_as_read(self, notification_id, user_id=None):
        """
        Marks a single notification as read.
        """
        if not notification_id:
            return False

        db = SQLiteDB()
        session = db.connect()
        if not session:
            return False

        try:
            self.ensure_table(session)
            notif = session.query(AICreditNotification).filter(
                AICreditNotification.notification_id == str(notification_id)
            ).first()
            if not notif:
                session.close()
                return False

            notif.is_read = True
            notif.read_at = datetime.datetime.utcnow()
            notif.read_by = str(user_id) if user_id else None
            session.commit()
            session.close()
            return True
        except Exception as e:
            session.rollback()
            session.close()
            print(f"[AICreditNotificationManager] mark_as_read error: {e}")
            return False

    def mark_all_as_read(self, institute_id=None, is_super_admin=False, user_id=None):
        """
        Marks all unread notifications as read for scoped institute.
        """
        db = SQLiteDB()
        session = db.connect()
        if not session:
            return 0

        try:
            self.ensure_table(session)
            q = session.query(AICreditNotification).filter(AICreditNotification.is_read == False)
            if not is_super_admin and institute_id:
                q = q.filter(AICreditNotification.institute_id == str(institute_id).strip())
            elif is_super_admin:
                if institute_id and str(institute_id).strip().lower() != 'all':
                    q = q.filter(AICreditNotification.institute_id == str(institute_id).strip())
                q = q.filter(AICreditNotification.event_type.notin_(["ADJUSTMENT", "ALLOCATION", "RENEWAL"]))

            records = q.all()
            count = len(records)
            now_dt = datetime.datetime.utcnow()
            for r in records:
                r.is_read = True
                r.read_at = now_dt
                if user_id:
                    r.read_by = str(user_id)

            session.commit()
            session.close()
            return count
        except Exception as e:
            session.rollback()
            session.close()
            print(f"[AICreditNotificationManager] mark_all_as_read error: {e}")
            return 0


# Global singleton instance
credit_notification_manager = AICreditNotificationManager()
