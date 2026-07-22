from sqlalchemy.sql import func

from db.db import SQLiteDB
from db.models import Setting


DEFAULT_AI_CONFIDENCE_THRESHOLD = 70.0


def get_ai_confidence_threshold(session=None):
    """Return the live threshold, falling back safely before the seed exists."""
    owns_session = session is None
    if owns_session:
        session = SQLiteDB().connect()
    try:
        setting = session.query(Setting).order_by(Setting.updated_at.desc()).first()
        return float(setting.ai_confidence_threshold) if setting else DEFAULT_AI_CONFIDENCE_THRESHOLD
    finally:
        if owns_session and session:
            session.close()


def get_ai_confidence_threshold_response():
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"status": False, "statusMessage": "Error connecting to database"}, 500
    try:
        threshold = get_ai_confidence_threshold(session)
        return {
            "status": True,
            "statusMessage": "Success",
            "data": {"ai_confidence_threshold": threshold}
        }, 200
    except Exception as exc:
        return {"status": False, "statusMessage": f"Error fetching setting: {exc}"}, 500
    finally:
        session.close()


def update_ai_confidence_threshold(data, current_user):
    raw_value = (data or {}).get("ai_confidence_threshold")
    try:
        threshold = float(raw_value)
    except (TypeError, ValueError):
        return {"status": False, "statusMessage": "ai_confidence_threshold must be a number"}, 400
    if threshold < 0 or threshold > 100:
        return {"status": False, "statusMessage": "ai_confidence_threshold must be between 0 and 100"}, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"status": False, "statusMessage": "Error connecting to database"}, 500
    try:
        setting = session.query(Setting).order_by(Setting.updated_at.desc()).first()
        if not setting:
            setting = Setting()
        setting.ai_confidence_threshold = threshold
        setting.updated_by = current_user.user_id
        setting.updated_at = func.now()
        session.add(setting)
        session.commit()
        return {
            "status": True,
            "statusMessage": "AI confidence threshold updated successfully",
            "data": {"ai_confidence_threshold": threshold}
        }, 200
    except Exception as exc:
        session.rollback()
        return {"status": False, "statusMessage": f"Error updating setting: {exc}"}, 500
    finally:
        session.close()
