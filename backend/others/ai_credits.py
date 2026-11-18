import datetime
from datetime import timedelta
from flask import jsonify, request, g
from sqlalchemy import func, cast, Date, String, desc, or_, text
from db.db import SQLiteDB
from db.models import (
    Institute,
    openai_requests,
    User,
    Exam,
    PaperSchedule,
    PaperScheduleMapping,
    ExamSchedule,
    ExamScheduleMapping,
    ExamMapping,
    CategoriesDepartments,
    CategoriesTeams,
    Subject,
)


def resolve_institute_id(request_obj=None, explicit_inst_id=None, user_id=None):
    """
    Helper to resolve institute_id from explicit argument, request headers, 
    Flask g.current_user, or user database record.
    """
    if explicit_inst_id and str(explicit_inst_id).strip():
        return str(explicit_inst_id).strip()

    req = request_obj or request
    if req:
        args_inst = req.args.get('institute_id') if hasattr(req, 'args') else None
        if args_inst and str(args_inst).strip():
            return str(args_inst).strip()

        header_inst = req.headers.get('X-Institute-Id') or req.headers.get('X-Global-Institute-Id')
        if header_inst and str(header_inst).strip():
            return str(header_inst).strip()

    if hasattr(g, 'current_user') and g.current_user and getattr(g.current_user, 'institute_id', None):
        return str(g.current_user.institute_id).strip()

    if user_id:
        try:
            db = SQLiteDB()
            session = db.connect()
            u = session.query(User).filter_by(user_id=user_id).first()
            if u and u.institute_id:
                inst = str(u.institute_id).strip()
                session.close()
                return inst
            session.close()
        except Exception:
            pass

    return None


def check_institute_ai_access(institute_id=None, user_id=None, request_obj=None):
    """
    Checks whether the institute has valid AI access granted by Super Admin.
    Returns: (has_access: bool, error_message: str or None, status_code: int)
    """
    inst_id = resolve_institute_id(request_obj, institute_id, user_id)
    if not inst_id:
        # Check if caller is global super admin
        if hasattr(g, 'current_user') and g.current_user:
            role = getattr(g.current_user, 'role', '') or getattr(g.current_user, 'user_role', '')
            if 'super' in str(role).lower():
                return True, None, 200
        return True, None, 200

    try:
        db = SQLiteDB()
        session = db.connect()
        inst = session.query(Institute).filter(
            Institute.institute_id == str(inst_id).strip()
        ).first()

        if not inst:
            session.close()
            return False, "Institute not found.", 404

        allocated = getattr(inst, 'allocated_credits', None)
        if allocated is None or allocated <= 0:
            session.close()
            return False, "AI access has not been granted by the Super Admin. Please contact your Super Admin to allocate AI credits.", 403

        # Check total tokens used by this institute
        used_tokens = session.query(
            func.coalesce(func.sum(openai_requests.total_tokens), 0)
        ).filter(
            openai_requests.institute_id == str(inst.institute_id)
        ).scalar() or 0

        session.close()

        if used_tokens >= allocated:
            return False, f"AI credit quota exhausted ({int(used_tokens):,} / {int(allocated):,} credits used). Please contact your Super Admin to allocate more credits.", 403

        return True, None, 200

    except Exception as e:
        print(f"Error checking AI access for institute {inst_id}: {e}")
        return False, "AI access has not been granted by the Super Admin. Please contact your Super Admin to allocate AI credits.", 403


def infer_test_type(r_test_type, r_feature_name):
    """Safely infers 'paper', 'online', or 'general' from test_type or feature_name."""
    if r_test_type and str(r_test_type).strip():
        return str(r_test_type).strip().lower()
    fn = str(r_feature_name or '').lower()
    if any(k in fn for k in ["paper", "anchor", "student identification", "student id", "pdf sheet", "splitting"]):
        return "paper"
    elif any(k in fn for k in ["evaluation", "evaluat", "validate"]):
        return "online"
    return "general"


def ensure_openai_requests_columns(session):
    """
    Safely adds exam_id, schedule_id, and test_type to openai_requests table if they do not exist,
    and backfills test_type for existing records.
    """
    try:
        session.execute(text("""
            IF COL_LENGTH('openai_requests', 'exam_id') IS NULL
            BEGIN
                ALTER TABLE openai_requests ADD exam_id NVARCHAR(64) NULL;
            END;

            IF COL_LENGTH('openai_requests', 'schedule_id') IS NULL
            BEGIN
                ALTER TABLE openai_requests ADD schedule_id NVARCHAR(64) NULL;
            END;

            IF COL_LENGTH('openai_requests', 'test_type') IS NULL
            BEGIN
                ALTER TABLE openai_requests ADD test_type NVARCHAR(32) NULL;
            END;

            UPDATE openai_requests
            SET test_type = 'paper'
            WHERE (test_type IS NULL OR test_type = '')
              AND (
                  feature_name LIKE '%Paper%'
                  OR feature_name LIKE '%Anchor%'
                  OR feature_name LIKE '%Student%'
                  OR feature_name LIKE '%Split%'
              );

            UPDATE openai_requests
            SET test_type = 'online'
            WHERE (test_type IS NULL OR test_type = '')
              AND (
                  feature_name LIKE '%Evaluation%'
                  OR feature_name LIKE '%Validate%'
              );
        """))
        session.commit()
    except Exception as e:
        session.rollback()
        # Fallback for SQLite in local test environments
        try:
            session.execute(text("ALTER TABLE openai_requests ADD COLUMN exam_id VARCHAR(64)"))
            session.commit()
        except Exception:
            pass
        try:
            session.execute(text("ALTER TABLE openai_requests ADD COLUMN schedule_id VARCHAR(64)"))
            session.commit()
        except Exception:
            pass
        try:
            session.execute(text("ALTER TABLE openai_requests ADD COLUMN test_type VARCHAR(32)"))
            session.commit()
        except Exception:
            pass
        try:
            session.execute(text("""
                UPDATE openai_requests
                SET test_type = 'paper'
                WHERE (test_type IS NULL OR test_type = '')
                  AND (
                      feature_name LIKE '%Paper%'
                      OR feature_name LIKE '%Anchor%'
                      OR feature_name LIKE '%Student%'
                      OR feature_name LIKE '%Split%'
                  )
            """))
            session.commit()
        except Exception:
            pass


def record_ai_usage(
    response_json,
    institute_id=None,
    user_id=None,
    feature_name="Question Generation",
    endpoint=None,
    exam_id=None,
    schedule_id=None,
    test_type=None
):
    """
    Centralized function to log token usage and feature categorization into openai_requests,
    stamping exam_id, schedule_id, and test_type when present.
    """
    if not isinstance(response_json, dict):
        return

    choices = response_json.get("choices")
    if not choices or not isinstance(choices, list) or len(choices) == 0:
        return

    try:
        db = SQLiteDB()
        session = db.connect()
        ensure_openai_requests_columns(session)

        # Idempotency check: prevent duplicate logging of the same OpenAI completion
        req_id = response_json.get("id")
        if req_id:
            existing = session.query(openai_requests).filter(openai_requests.id == req_id).first()
            if existing:
                session.close()
                return

        resolved_inst = resolve_institute_id(None, institute_id, user_id)

        # Standardize feature names
        if feature_name:
            feature_name = normalize_feature_name(feature_name)
        else:
            if endpoint and "fine-tune" in str(endpoint).lower():
                feature_name = "AI Fine-Tuning"
            elif endpoint and "anchor" in str(endpoint).lower():
                feature_name = "Question Anchor Detection"
            elif endpoint and ("identify-student" in str(endpoint).lower() or "identity" in str(endpoint).lower()):
                feature_name = "Student Identification"
            elif endpoint and "split" in str(endpoint).lower():
                feature_name = "PDF Sheet Splitting"
            elif endpoint and ("upload-answer-sheet" in str(endpoint).lower() or "paper" in str(endpoint).lower()):
                feature_name = "Paper Evaluation"
            elif endpoint and ("diagnostic" in str(endpoint).lower() or "wrong" in str(endpoint).lower()):
                feature_name = "Exam Diagnostics"
            elif endpoint and "subtopic" in str(endpoint).lower():
                feature_name = "Subtopic Classification"
            elif endpoint and ("eval" in str(endpoint).lower() or "review" in str(endpoint).lower()):
                feature_name = "AI Evaluation"
            else:
                feature_name = "AI Question Generation"

        # Determine test_type if not explicitly supplied
        if not test_type:
            if feature_name in ["Paper Evaluation", "Question Anchor Detection", "Student Identification", "PDF Sheet Splitting"]:
                test_type = "paper"
            elif feature_name in ["AI Evaluation"]:
                test_type = "online"
            else:
                test_type = "general"

        msg = choices[0].get("message") or {}
        role = msg.get("role", None)
        content = msg.get("content", None)
        finish_reason = choices[0].get("finish_reason", None)

        usage = response_json.get("usage") or {}
        prompt_tokens = usage.get("prompt_tokens", 0) or 0
        completion_tokens = usage.get("completion_tokens", 0) or 0
        total_tokens = usage.get("total_tokens", 0) or (prompt_tokens + completion_tokens)

        insert_record = openai_requests(
            id=response_json.get("id", None),
            endpoint=endpoint,
            model=response_json.get("model", None),
            service_tier=response_json.get("service_tier", None),
            system_fingerprint=response_json.get("system_fingerprint", None),
            role=role,
            content=content,
            finish_reason=finish_reason,
            prompt_tokens=prompt_tokens,
            completion_tokens=completion_tokens,
            total_tokens=total_tokens,
            feature_name=feature_name,
            credits_consumed=total_tokens,
            institute_id=resolved_inst,
            exam_id=str(exam_id).strip() if exam_id else None,
            schedule_id=str(schedule_id).strip() if schedule_id else None,
            test_type=test_type,
            created_by=user_id,
            created_date=datetime.datetime.utcnow()
        )
        session.add(insert_record)
        session.commit()
        session.close()
    except Exception as db_err:
        print(f"[record_ai_usage] Failed to record usage: {db_err}")


def get_ai_credits_summary_api():
    """
    GET /edu/api/ai-credits/summary
    Returns remaining and used credits, allocated credits, and token totals for the scoped institute.
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    try:
        if str(inst_id).lower() == 'all':
            allocated_credits = session.query(
                func.coalesce(func.sum(Institute.allocated_credits), 0)
            ).filter(
                or_(Institute.is_deleted == False, Institute.is_deleted == 0, Institute.is_deleted == None)
            ).scalar() or 0
            allocated_credits = int(allocated_credits)
            alert_threshold = 10

            usage_query = session.query(
                func.coalesce(func.sum(openai_requests.total_tokens), 0),
                func.coalesce(func.sum(openai_requests.prompt_tokens), 0),
                func.coalesce(func.sum(openai_requests.completion_tokens), 0),
                func.count(openai_requests.request_id)
            ).first()

            used_credits = int(usage_query[0] or 0)
            prompt_tokens = int(usage_query[1] or 0)
            completion_tokens = int(usage_query[2] or 0)
            total_operations = int(usage_query[3] or 0)

            remaining_credits = max(0, allocated_credits - used_credits) if allocated_credits > 0 else 0
            percentage_used = round((used_credits / allocated_credits * 100), 1) if allocated_credits > 0 else 0.0

            is_low_credit = False
            if allocated_credits > 0:
                remaining_pct = (remaining_credits / allocated_credits) * 100
                is_low_credit = remaining_pct <= alert_threshold

            session.close()
            return jsonify({
                "status": True,
                "data": {
                    "institute_id": "all",
                    "institute_name": "All Registered Institutes (Global Overview)",
                    "industry_type": "",
                    "industry_sector": "",
                    "allocated_credits": allocated_credits,
                    "used_credits": used_credits,
                    "remaining_credits": remaining_credits,
                    "percentage_used": percentage_used,
                    "prompt_tokens": prompt_tokens,
                    "completion_tokens": completion_tokens,
                    "total_tokens": used_credits,
                    "total_operations": total_operations,
                    "is_low_credit": is_low_credit,
                    "alert_threshold": alert_threshold
                }
            }), 200

        inst = session.query(Institute).filter_by(institute_id=inst_id).first()
        allocated_credits = int(getattr(inst, "allocated_credits", 0) or 0) if inst else 0
        alert_threshold = int(getattr(inst, "credit_alert_threshold", 10) or 10) if inst else 10

        # Aggregate total tokens used by this institute
        usage_query = session.query(
            func.coalesce(func.sum(openai_requests.total_tokens), 0),
            func.coalesce(func.sum(openai_requests.prompt_tokens), 0),
            func.coalesce(func.sum(openai_requests.completion_tokens), 0),
            func.count(openai_requests.request_id)
        ).filter(openai_requests.institute_id == str(inst_id)).first()

        used_credits = int(usage_query[0] or 0)
        prompt_tokens = int(usage_query[1] or 0)
        completion_tokens = int(usage_query[2] or 0)
        total_operations = int(usage_query[3] or 0)

        remaining_credits = max(0, allocated_credits - used_credits) if allocated_credits > 0 else 0
        percentage_used = round((used_credits / allocated_credits * 100), 1) if allocated_credits > 0 else 0.0

        is_low_credit = False
        if allocated_credits > 0:
            remaining_pct = (remaining_credits / allocated_credits) * 100
            is_low_credit = remaining_pct <= alert_threshold

        session.close()
        return jsonify({
            "status": True,
            "data": {
                "institute_id": inst_id,
                "institute_name": inst.name if inst else "Unknown",
                "industry_type": (getattr(inst, "industry_type", None) or "") if inst else "",
                "industry_sector": (getattr(inst, "industry_sector", None) or "") if inst else "",
                "allocated_credits": allocated_credits,
                "used_credits": used_credits,
                "remaining_credits": remaining_credits,
                "percentage_used": percentage_used,
                "prompt_tokens": prompt_tokens,
                "completion_tokens": completion_tokens,
                "total_tokens": used_credits,
                "total_operations": total_operations,
                "is_low_credit": is_low_credit,
                "alert_threshold": alert_threshold
            }
        }), 200
    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching AI credit summary: {str(e)}"}), 500


FEATURE_CONFIG = [
    {"key": "question_generation", "title": "AI Question Generation", "icon": "help_outline"},
    {"key": "fine_tuning", "title": "AI Fine-Tuning", "icon": "tune"},
    {"key": "ai_evaluation", "title": "AI Evaluation", "icon": "fact_check"},
    {"key": "paper_evaluation", "title": "Paper Evaluation", "icon": "description"},
    {"key": "anchor_detection", "title": "Question Anchor Detection", "icon": "pin_drop"},
    {"key": "student_identification", "title": "Student Identification", "icon": "person_search"},
    {"key": "pdf_splitting", "title": "PDF Sheet Splitting", "icon": "call_split"},
    {"key": "exam_diagnostics", "title": "Exam Diagnostics", "icon": "analytics"},
    {"key": "subtopic_classification", "title": "Subtopic Classification", "icon": "category"}
]

def normalize_feature_name(raw_name):
    n = str(raw_name or "").lower().strip()
    if "fine" in n:
        return "AI Fine-Tuning"
    elif "anchor" in n:
        return "Question Anchor Detection"
    elif "student" in n or "identity" in n or "roster" in n:
        return "Student Identification"
    elif "split" in n:
        return "PDF Sheet Splitting"
    elif "paper" in n or "sheet" in n:
        return "Paper Evaluation"
    elif "diagnostic" in n or "misconception" in n or "wrong" in n:
        return "Exam Diagnostics"
    elif "subtopic" in n:
        return "Subtopic Classification"
    elif "question" in n:
        return "AI Question Generation"
    elif "evaluat" in n:
        return "AI Evaluation"
    return "AI Evaluation"


def get_ai_feature_breakdown_api():
    """
    GET /edu/api/ai-credits/feature-breakdown
    Returns aggregated table of AI features used, both as horizontal columns and as a breakdown list.
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    try:
        query = session.query(
            openai_requests.feature_name,
            func.count(openai_requests.request_id).label('op_count'),
            func.coalesce(func.sum(openai_requests.prompt_tokens), 0).label('prompt_tok'),
            func.coalesce(func.sum(openai_requests.completion_tokens), 0).label('comp_tok'),
            func.coalesce(func.sum(openai_requests.total_tokens), 0).label('total_tok'),
            func.max(openai_requests.created_date).label('last_used')
        )
        if str(inst_id).lower() != 'all':
            query = query.filter(openai_requests.institute_id == str(inst_id))

        rows = query.group_by(openai_requests.feature_name).all()

        # Map by normalized feature title
        aggregated = {}
        for r in rows:
            norm_title = normalize_feature_name(r.feature_name)
            if norm_title not in aggregated:
                aggregated[norm_title] = {
                    "count": 0, "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "last_used": None
                }
            aggregated[norm_title]["count"] += int(r.op_count or 0)
            aggregated[norm_title]["prompt_tokens"] += int(r.prompt_tok or 0)
            aggregated[norm_title]["completion_tokens"] += int(r.comp_tok or 0)
            aggregated[norm_title]["total_tokens"] += int(r.total_tok or 0)
            if r.last_used:
                r_dt_str = r.last_used.strftime("%Y-%m-%d %H:%M")
                if not aggregated[norm_title]["last_used"] or r_dt_str > aggregated[norm_title]["last_used"]:
                    aggregated[norm_title]["last_used"] = r_dt_str

        # Build complete feature list for columns
        columns = []
        breakdown = []
        grand_total_ops = 0
        grand_prompt_tokens = 0
        grand_comp_tokens = 0
        grand_total_tokens = 0

        for cfg in FEATURE_CONFIG:
            title = cfg["title"]
            data = aggregated.get(title, {
                "count": 0, "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0, "last_used": None
            })
            op_count = data["count"]
            p_tok = data["prompt_tokens"]
            c_tok = data["completion_tokens"]
            t_tok = data["total_tokens"]
            last_used_dt = data["last_used"]

            grand_total_ops += op_count
            grand_prompt_tokens += p_tok
            grand_comp_tokens += c_tok
            grand_total_tokens += t_tok

            feature_entry = {
                "key": cfg["key"],
                "feature": title,
                "icon": cfg["icon"],
                "count": op_count,
                "prompt_tokens": p_tok,
                "completion_tokens": c_tok,
                "total_tokens": t_tok,
                "credits_consumed": t_tok,
                "last_used": last_used_dt
            }
            columns.append(feature_entry)
            breakdown.append(feature_entry)

        session.close()
        return jsonify({
            "status": True,
            "data": {
                "columns": columns,
                "breakdown": breakdown,
                "totals": {
                    "count": grand_total_ops,
                    "prompt_tokens": grand_prompt_tokens,
                    "completion_tokens": grand_comp_tokens,
                    "total_tokens": grand_total_tokens,
                    "credits_consumed": grand_total_tokens
                }
            }
        }), 200
    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching feature breakdown: {str(e)}"}), 500


def get_ai_analytics_api():
    """
    GET /edu/api/ai-credits/analytics?period=today|weekly|monthly
    Returns time-series bar chart data: Today (hourly), Weekly (7 days), Monthly (30 days).
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    period = (request.args.get('period') or 'weekly').lower().strip()
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    now = datetime.datetime.utcnow()

    try:
        is_all = str(inst_id).lower() == 'all'
        if period == 'today':
            # Today from 00:00 to now, grouped by 2-hour or 3-hour buckets
            start_date = now.replace(hour=0, minute=0, second=0, microsecond=0)
            q = session.query(
                openai_requests.created_date,
                openai_requests.prompt_tokens,
                openai_requests.completion_tokens,
                openai_requests.total_tokens,
                openai_requests.feature_name
            ).filter(openai_requests.created_date >= start_date)
            if not is_all:
                q = q.filter(openai_requests.institute_id == str(inst_id))
            records = q.all()

            # 8 buckets of 3 hours: 00-03, 03-06, 06-09, 09-12, 12-15, 15-18, 18-21, 21-24
            labels = ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"]
            buckets = [0] * len(labels)
            prompt_buckets = [0] * len(labels)
            comp_buckets = [0] * len(labels)

            for rec in records:
                if rec.created_date:
                    hour = rec.created_date.hour
                    idx = min(hour // 3, len(labels) - 1)
                    tot = int(rec.total_tokens or 0)
                    p_tok = int(rec.prompt_tokens or 0)
                    c_tok = int(rec.completion_tokens or 0)
                    buckets[idx] += tot
                    prompt_buckets[idx] += p_tok
                    comp_buckets[idx] += c_tok

            peak_val = max(buckets) if buckets else 0
            peak_idx = buckets.index(peak_val) if buckets else 0
            peak_label = labels[peak_idx] if buckets else "N/A"
            period_total = sum(buckets)

            session.close()
            return jsonify({
                "status": True,
                "data": {
                    "period": "today",
                    "labels": labels,
                    "values": buckets,
                    "prompt_values": prompt_buckets,
                    "completion_values": comp_buckets,
                    "peak_label": peak_label,
                    "peak_value": peak_val,
                    "period_total": period_total,
                    "avg": round(period_total / len(labels), 1) if labels else 0
                }
            }), 200

        elif period == 'monthly':
            # Last 30 days grouped into 5 weeks or 6-day intervals
            start_date = (now - timedelta(days=29)).replace(hour=0, minute=0, second=0, microsecond=0)
            q = session.query(
                openai_requests.created_date,
                openai_requests.prompt_tokens,
                openai_requests.completion_tokens,
                openai_requests.total_tokens
            ).filter(openai_requests.created_date >= start_date)
            if not is_all:
                q = q.filter(openai_requests.institute_id == str(inst_id))
            records = q.all()

            # 5 weekly intervals: Week 1, Week 2, Week 3, Week 4, Week 5
            labels = ["W-4 (28d)", "W-3 (21d)", "W-2 (14d)", "W-1 (7d)", "Current Week"]
            buckets = [0] * 5
            prompt_buckets = [0] * 5
            comp_buckets = [0] * 5

            for rec in records:
                if rec.created_date:
                    days_ago = (now - rec.created_date).days
                    # Map to 0-4
                    if days_ago < 7:
                        idx = 4
                    elif days_ago < 14:
                        idx = 3
                    elif days_ago < 21:
                        idx = 2
                    elif days_ago < 28:
                        idx = 1
                    else:
                        idx = 0
                    tot = int(rec.total_tokens or 0)
                    buckets[idx] += tot
                    prompt_buckets[idx] += int(rec.prompt_tokens or 0)
                    comp_buckets[idx] += int(rec.completion_tokens or 0)

            peak_val = max(buckets) if buckets else 0
            peak_idx = buckets.index(peak_val) if buckets else 0
            peak_label = labels[peak_idx] if buckets else "N/A"
            period_total = sum(buckets)

            session.close()
            return jsonify({
                "status": True,
                "data": {
                    "period": "monthly",
                    "labels": labels,
                    "values": buckets,
                    "prompt_values": prompt_buckets,
                    "completion_values": comp_buckets,
                    "peak_label": peak_label,
                    "peak_value": peak_val,
                    "period_total": period_total,
                    "avg": round(period_total / 30, 1)
                }
            }), 200

        else:
            # Default: weekly (last 7 days, e.g. Mon, Tue, Wed, Thu, Fri, Sat, Sun)
            start_date = (now - timedelta(days=6)).replace(hour=0, minute=0, second=0, microsecond=0)
            q = session.query(
                openai_requests.created_date,
                openai_requests.prompt_tokens,
                openai_requests.completion_tokens,
                openai_requests.total_tokens
            ).filter(openai_requests.created_date >= start_date)
            if not is_all:
                q = q.filter(openai_requests.institute_id == str(inst_id))
            records = q.all()

            # Generate 7 days labels ending with today
            day_labels = []
            day_dates = []
            for i in range(7):
                d = (now - timedelta(days=6 - i)).date()
                day_dates.append(d)
                day_labels.append(d.strftime("%a (%b %d)"))

            buckets = [0] * 7
            prompt_buckets = [0] * 7
            comp_buckets = [0] * 7

            for rec in records:
                if rec.created_date:
                    rec_date = rec.created_date.date()
                    if rec_date in day_dates:
                        idx = day_dates.index(rec_date)
                        tot = int(rec.total_tokens or 0)
                        buckets[idx] += tot
                        prompt_buckets[idx] += int(rec.prompt_tokens or 0)
                        comp_buckets[idx] += int(rec.completion_tokens or 0)

            peak_val = max(buckets) if buckets else 0
            peak_idx = buckets.index(peak_val) if buckets else 0
            peak_label = day_labels[peak_idx] if buckets else "N/A"
            period_total = sum(buckets)

            session.close()
            return jsonify({
                "status": True,
                "data": {
                    "period": "weekly",
                    "labels": day_labels,
                    "values": buckets,
                    "prompt_values": prompt_buckets,
                    "completion_values": comp_buckets,
                    "peak_label": peak_label,
                    "peak_value": peak_val,
                    "period_total": period_total,
                    "avg": round(period_total / 7, 1)
                }
            }), 200

    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching AI analytics: {str(e)}"}), 500


def get_all_institutes_overview_api():
    """
    GET /edu/api/ai-credits/institutes-overview
    Super Admin endpoint to list all institutes with their allocated quota, 
    used tokens, remaining quota, percentage used, and status.
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    try:
        institutes = session.query(Institute).filter(
            or_(Institute.is_deleted == False, Institute.is_deleted == 0, Institute.is_deleted == None)
        ).order_by(Institute.name.asc()).all()

        # Query all usage aggregated by institute_id
        usage_by_inst = session.query(
            openai_requests.institute_id,
            func.coalesce(func.sum(openai_requests.total_tokens), 0).label("used_tokens"),
            func.coalesce(func.sum(openai_requests.prompt_tokens), 0).label("prompt_tokens"),
            func.coalesce(func.sum(openai_requests.completion_tokens), 0).label("completion_tokens"),
            func.count(openai_requests.request_id).label("operations")
        ).group_by(openai_requests.institute_id).all()

        usage_map = {}
        for u in usage_by_inst:
            if u.institute_id:
                usage_map[str(u.institute_id).lower().strip()] = {
                    "used_tokens": int(u.used_tokens or 0),
                    "prompt_tokens": int(u.prompt_tokens or 0),
                    "completion_tokens": int(u.completion_tokens or 0),
                    "operations": int(u.operations or 0)
                }

        overview_list = []
        for inst in institutes:
            inst_uuid = str(inst.institute_id).lower().strip()
            allocated = int(getattr(inst, 'allocated_credits', 0) or 0)
            threshold = int(getattr(inst, 'credit_alert_threshold', 10) or 10)
            u_info = usage_map.get(inst_uuid, {"used_tokens": 0, "prompt_tokens": 0, "completion_tokens": 0, "operations": 0})
            used = u_info["used_tokens"]
            remaining = max(0, allocated - used) if allocated > 0 else 0
            pct = round((used / allocated * 100), 1) if allocated > 0 else 0.0

            if allocated == 0:
                status = "Not Allocated"
            elif used >= allocated:
                status = "Exhausted"
            elif remaining > 0 and ((remaining / allocated) * 100) <= threshold:
                status = "Low Balance"
            else:
                status = "Active"

            overview_list.append({
                "institute_id": str(inst.institute_id),
                "name": inst.name,
                "short_name": inst.short_name or "",
                "industry_type": getattr(inst, 'industry_type', None) or "",
                "industry_sector": getattr(inst, 'industry_sector', None) or "",
                "allocated_credits": allocated,
                "used_credits": used,
                "remaining_credits": remaining,
                "percentage_used": pct,
                "prompt_tokens": u_info["prompt_tokens"],
                "completion_tokens": u_info["completion_tokens"],
                "operations": u_info["operations"],
                "threshold": threshold,
                "status": status
            })

        session.close()
        return jsonify({
            "status": True,
            "data": overview_list
        }), 200
    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching institutes overview: {str(e)}"}), 500


def _parse_iso_date_only(val):
    """Safely parses an ISO date or datetime string into a datetime.date object."""
    if not val:
        return None
    if isinstance(val, datetime.datetime):
        return val.date()
    if isinstance(val, datetime.date):
        return val
    try:
        s = str(val).strip()
        if not s:
            return None
        # Handle YYYY-MM-DD prefix first
        if len(s) >= 10 and s[4] == '-' and s[7] == '-':
            return datetime.date.fromisoformat(s[:10])
        return datetime.datetime.fromisoformat(s.replace('Z', '')).date()
    except Exception:
        return None


def get_test_ai_usage_api():
    """
    GET /edu/api/ai-credits/test-usage
    Returns itemized AI credits consumption per test with dynamic filter metadata.
    Query parameters:
      - institute_id: 'all' or specific institute ID
      - test_type: 'all' | 'paper' | 'online'
      - start_date, end_date: ISO date strings for openai_requests.created_date (legacy optional)
      - schedule_start_date, schedule_end_date: ISO date strings (YYYY-MM-DD) for test scheduled date range
      - department_id: class / department ID
      - team_id: section / year / team ID
      - subject: subject_id or subject name
      - test_id: specific schedule_id or exam_id
      - created_by: creator user_id or username
      - search: string to match test title or subject (optional)
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    test_type_filter = (request.args.get('test_type') or 'all').lower().strip()
    start_date_str = request.args.get('start_date')
    end_date_str = request.args.get('end_date')
    search_term = (request.args.get('search') or '').strip().lower()

    # Popup filter parameters (applied to tests table only; KPI totals remain untouched)
    department_filter = (request.args.get('department_id') or '').strip().lower()
    team_filter = (request.args.get('team_id') or '').strip().lower()
    campus_filter = (request.args.get('campus_id') or '').strip().lower()
    subject_filter = (request.args.get('subject') or '').strip().lower()
    test_id_filter = (request.args.get('test_id') or '').strip().lower()
    created_by_filter = (request.args.get('created_by') or '').strip().lower()
    created_by_me_flag = str(request.args.get('created_by_me') or '').strip().lower() in ('1', 'true', 'yes')
    created_start_date = _parse_iso_date_only(
        request.args.get('created_start_date') or request.args.get('schedule_start_date')
    )
    created_end_date = _parse_iso_date_only(
        request.args.get('created_end_date') or request.args.get('schedule_end_date')
    )

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    try:
        ensure_openai_requests_columns(session)

        base_q = session.query(openai_requests)
        if str(inst_id).lower() != 'all':
            base_q = base_q.filter(openai_requests.institute_id == str(inst_id))

        if start_date_str:
            try:
                sd = datetime.datetime.fromisoformat(start_date_str.replace('Z', ''))
                base_q = base_q.filter(openai_requests.created_date >= sd)
            except Exception:
                pass

        if end_date_str:
            try:
                ed = datetime.datetime.fromisoformat(end_date_str.replace('Z', ''))
                base_q = base_q.filter(openai_requests.created_date <= ed)
            except Exception:
                pass

        all_records = base_q.order_by(desc(openai_requests.created_date)).all()

        # Build comprehensive Test & Schedule lookup cache across PaperSchedule, ExamSchedule, and Exams
        all_candidate_ids = list(set(
            [str(r.exam_id).strip() for r in all_records if r.exam_id and str(r.exam_id).strip()] +
            [str(r.schedule_id).strip() for r in all_records if r.schedule_id and str(r.schedule_id).strip()]
        ))

        titles_cache = {}
        linked_exam_ids = set()
        paper_sched_ids = set()
        exam_sched_ids = set()
        creator_raw_ids = set()

        if all_candidate_ids:
            # 1. Look up PaperSchedules (both schedule_id and exam_id)
            try:
                found_paper_scheds = session.query(PaperSchedule).filter(
                    or_(
                        PaperSchedule.schedule_id.in_(all_candidate_ids),
                        PaperSchedule.exam_id.in_(all_candidate_ids)
                    )
                ).all()
                for ps in found_paper_scheds:
                    ps_sid = str(ps.schedule_id)
                    paper_sched_ids.add(ps_sid)
                    cb = str(ps.created_by).strip() if getattr(ps, "created_by", None) else ""
                    if cb:
                        creator_raw_ids.add(cb)
                    s_start = ps.start_time or ps.created_date
                    s_end = ps.end_time or s_start
                    ps_created = ps.created_date or s_start
                    ps_meta = {
                        "title": ps.title or "Paper Test",
                        "subject": "Paper Test",
                        "subject_id": "",
                        "mode": "paper",
                        "exam_id": str(ps.exam_id) if ps.exam_id else None,
                        "schedule_id": ps_sid,
                        "department_ids": set(),
                        "team_ids": set(),
                        "campus_ids": set(),
                        "created_by_id": cb,
                        "created_by_name": "",
                        "created_date": ps_created.strftime("%Y-%m-%d") if isinstance(ps_created, (datetime.datetime, datetime.date)) else "",
                        "scheduled_start": s_start.strftime("%Y-%m-%d") if isinstance(s_start, (datetime.datetime, datetime.date)) else "",
                        "scheduled_end": s_end.strftime("%Y-%m-%d") if isinstance(s_end, (datetime.datetime, datetime.date)) else "",
                    }
                    titles_cache[ps_sid] = ps_meta
                    if ps.exam_id:
                        linked_exam_ids.add(str(ps.exam_id))
                        titles_cache.setdefault(str(ps.exam_id), ps_meta)
            except Exception as _ps_err:
                print(f"[get_test_ai_usage_api] PaperSchedule cache lookup error: {_ps_err}")

            # 2. Look up ExamSchedules (both schedule_id and exam_id)
            try:
                found_exam_scheds = session.query(ExamSchedule).filter(
                    or_(
                        ExamSchedule.schedule_id.in_(all_candidate_ids),
                        ExamSchedule.exam_id.in_(all_candidate_ids)
                    )
                ).all()
                for es in found_exam_scheds:
                    es_sid = str(es.schedule_id)
                    exam_sched_ids.add(es_sid)
                    cb = str(es.created_by).strip() if getattr(es, "created_by", None) else ""
                    if cb:
                        creator_raw_ids.add(cb)
                    s_start = es.start_time or es.created_date
                    s_end = es.end_time or s_start
                    es_created = es.created_date or s_start
                    es_meta = {
                        "title": es.title or getattr(es, "name", None) or "Online Test",
                        "subject": "Online Test",
                        "subject_id": "",
                        "mode": "online",
                        "exam_id": str(es.exam_id) if es.exam_id else None,
                        "schedule_id": es_sid,
                        "department_ids": set(),
                        "team_ids": set(),
                        "campus_ids": set(),
                        "created_by_id": cb,
                        "created_by_name": "",
                        "created_date": es_created.strftime("%Y-%m-%d") if isinstance(es_created, (datetime.datetime, datetime.date)) else "",
                        "scheduled_start": s_start.strftime("%Y-%m-%d") if isinstance(s_start, (datetime.datetime, datetime.date)) else "",
                        "scheduled_end": s_end.strftime("%Y-%m-%d") if isinstance(s_end, (datetime.datetime, datetime.date)) else "",
                    }
                    titles_cache[es_sid] = es_meta
                    if es.exam_id:
                        linked_exam_ids.add(str(es.exam_id))
                        titles_cache.setdefault(str(es.exam_id), es_meta)
            except Exception as _es_err:
                print(f"[get_test_ai_usage_api] ExamSchedule cache lookup error: {_es_err}")

            # 2b. Look up PaperScheduleMapping and ExamScheduleMapping for Class/Dept & Section/Team
            sched_user_links = {}  # schedule_id -> set(user_id)
            all_mapped_user_ids = set()

            if paper_sched_ids:
                try:
                    ps_maps = session.query(PaperScheduleMapping).filter(
                        PaperScheduleMapping.schedule_id.in_(list(paper_sched_ids))
                    ).all()
                    for m in ps_maps:
                        sid = str(m.schedule_id)
                        meta = titles_cache.get(sid)
                        if not meta:
                            continue
                        if m.department_id:
                            meta["department_ids"].add(str(m.department_id).strip())
                        if m.team_id:
                            meta["team_ids"].add(str(m.team_id).strip())
                        if getattr(m, "campus_id", None):
                            meta["campus_ids"].add(str(m.campus_id).strip())
                        if m.user_id:
                            uid = str(m.user_id).strip()
                            sched_user_links.setdefault(sid, set()).add(uid)
                            all_mapped_user_ids.add(uid)
                except Exception as _psm_err:
                    print(f"[get_test_ai_usage_api] PaperScheduleMapping lookup error: {_psm_err}")

            if exam_sched_ids:
                try:
                    es_maps = session.query(ExamScheduleMapping).filter(
                        ExamScheduleMapping.schedule_id.in_(list(exam_sched_ids))
                    ).all()
                    for m in es_maps:
                        sid = str(m.schedule_id)
                        meta = titles_cache.get(sid)
                        if not meta:
                            continue
                        if m.department_id:
                            meta["department_ids"].add(str(m.department_id).strip())
                        if m.team_id:
                            meta["team_ids"].add(str(m.team_id).strip())
                        if getattr(m, "campus_id", None):
                            meta["campus_ids"].add(str(m.campus_id).strip())
                        if m.user_id:
                            uid = str(m.user_id).strip()
                            sched_user_links.setdefault(sid, set()).add(uid)
                            all_mapped_user_ids.add(uid)
                except Exception as _esm_err:
                    print(f"[get_test_ai_usage_api] ExamScheduleMapping lookup error: {_esm_err}")

            if all_mapped_user_ids:
                try:
                    mapped_users = session.query(
                        User.user_id, User.department_id, User.team_id, User.campus_id
                    ).filter(
                        cast(User.user_id, String).in_(list(all_mapped_user_ids))
                    ).all()
                    user_dt_map = {}
                    for u_row in mapped_users:
                        user_dt_map[str(u_row.user_id).strip()] = (
                            str(u_row.department_id).strip() if u_row.department_id else None,
                            str(u_row.team_id).strip() if u_row.team_id else None,
                            str(u_row.campus_id).strip() if getattr(u_row, "campus_id", None) else None,
                        )
                    for sid, uids in sched_user_links.items():
                        meta = titles_cache.get(sid)
                        if not meta:
                            continue
                        for uid in uids:
                            ud, ut, uc = user_dt_map.get(uid, (None, None, None))
                            if ud:
                                meta["department_ids"].add(ud)
                            if ut:
                                meta["team_ids"].add(ut)
                            if uc:
                                meta["campus_ids"].add(uc)
                except Exception as _mu_err:
                    print(f"[get_test_ai_usage_api] Mapped user dept/team lookup error: {_mu_err}")

            # 3. Look up master Exams & resolve Subject names
            exam_lookup_ids = list(set(all_candidate_ids + list(linked_exam_ids)))
            subject_ids_to_lookup = set()
            exam_meta_map = {}
            try:
                found_exams = session.query(Exam).filter(Exam.exam_id.in_(exam_lookup_ids)).all()
                for ex in found_exams:
                    ex_id_str = str(ex.exam_id)
                    subj_id = str(ex.subject_id).strip() if getattr(ex, "subject_id", None) else ""
                    if subj_id:
                        subject_ids_to_lookup.add(subj_id)
                    subj = (ex.subject_name or "").strip() or subj_id or "General"
                    cb = str(ex.created_by).strip() if getattr(ex, "created_by", None) else ""
                    if cb:
                        creator_raw_ids.add(cb)
                    ex_start = ex.start_time or ex.created_date
                    ex_end = ex.end_time or ex_start
                    ex_created = ex.created_date or ex_start
                    exam_meta_map[ex_id_str] = {
                        "title": ex.title or "Untitled Test",
                        "subject": subj,
                        "subject_id": subj_id,
                        "mode": ex.test_mode or "online",
                        "created_by_id": cb,
                        "created_date": ex_created.strftime("%Y-%m-%d") if isinstance(ex_created, (datetime.datetime, datetime.date)) else "",
                        "scheduled_start": ex_start.strftime("%Y-%m-%d") if isinstance(ex_start, (datetime.datetime, datetime.date)) else "",
                        "scheduled_end": ex_end.strftime("%Y-%m-%d") if isinstance(ex_end, (datetime.datetime, datetime.date)) else "",
                    }

                # Resolve subject names from Subjects table if any subject_id is set
                subj_name_by_id = {}
                if subject_ids_to_lookup:
                    try:
                        found_subjs = session.query(Subject).filter(
                            Subject.subject_id.in_(list(subject_ids_to_lookup))
                        ).all()
                        for sb in found_subjs:
                            subj_name_by_id[str(sb.subject_id).strip()] = (sb.subject_name or "").strip()
                    except Exception:
                        pass

                for ex_id_str, em in exam_meta_map.items():
                    if em["subject_id"] and em["subject_id"] in subj_name_by_id and subj_name_by_id[em["subject_id"]]:
                        em["subject"] = subj_name_by_id[em["subject_id"]]
                    # Enrich any schedule pointing to this exam
                    for k, v in titles_cache.items():
                        if v.get("exam_id") == ex_id_str:
                            v["subject"] = em["subject"]
                            if em["subject_id"]:
                                v["subject_id"] = em["subject_id"]
                            if not v.get("created_by_id") and em["created_by_id"]:
                                v["created_by_id"] = em["created_by_id"]
                            if not v.get("created_date") and em["created_date"]:
                                v["created_date"] = em["created_date"]
                            if not v.get("scheduled_start") and em["scheduled_start"]:
                                v["scheduled_start"] = em["scheduled_start"]
                            if not v.get("scheduled_end") and em["scheduled_end"]:
                                v["scheduled_end"] = em["scheduled_end"]
                    # If this exam is not already stored under a schedule's title, store it
                    if ex_id_str not in titles_cache:
                        titles_cache[ex_id_str] = {
                            "title": em["title"],
                            "subject": em["subject"],
                            "subject_id": em["subject_id"],
                            "mode": em["mode"],
                            "exam_id": ex_id_str,
                            "schedule_id": None,
                            "department_ids": set(),
                            "team_ids": set(),
                            "campus_ids": set(),
                            "created_by_id": em["created_by_id"],
                            "created_by_name": "",
                            "created_date": em["created_date"],
                            "scheduled_start": em["scheduled_start"],
                            "scheduled_end": em["scheduled_end"],
                        }
                    elif titles_cache[ex_id_str].get("subject") in ("Paper Test", "Online Test", "General"):
                        titles_cache[ex_id_str]["subject"] = em["subject"]
                        if em["subject_id"]:
                            titles_cache[ex_id_str]["subject_id"] = em["subject_id"]
            except Exception as _ex_err:
                print(f"[get_test_ai_usage_api] Exam cache lookup error: {_ex_err}")

            # 3b. Fallback: enrich department_ids / team_ids via ExamMapping -> CategoriesDepartments / CategoriesTeams
            # for any test/schedule that still has no direct schedule mapping
            unmapped_exam_ids = set()
            for v in titles_cache.values():
                if not v.get("department_ids") and v.get("exam_id"):
                    unmapped_exam_ids.add(str(v["exam_id"]))
            if unmapped_exam_ids:
                try:
                    em_rows = session.query(ExamMapping.exam_id, ExamMapping.category_id).filter(
                        ExamMapping.exam_id.in_(list(unmapped_exam_ids))
                    ).all()
                    exam_cat_map = {}
                    cat_ids = set()
                    for em_r in em_rows:
                        if em_r.category_id:
                            cid = str(em_r.category_id).strip()
                            exam_cat_map.setdefault(str(em_r.exam_id), set()).add(cid)
                            cat_ids.add(cid)
                    if cat_ids:
                        cat_depts = {}
                        for cd in session.query(CategoriesDepartments).filter(
                            cast(CategoriesDepartments.category_id, String).in_(list(cat_ids))
                        ).all():
                            if cd.department_id:
                                cat_depts.setdefault(str(cd.category_id).strip(), set()).add(str(cd.department_id).strip())
                        cat_teams = {}
                        for ct in session.query(CategoriesTeams).filter(
                            cast(CategoriesTeams.category_id, String).in_(list(cat_ids))
                        ).all():
                            if ct.team_id:
                                cat_teams.setdefault(str(ct.category_id).strip(), set()).add(str(ct.team_id).strip())
                        for v in titles_cache.values():
                            ex_id = v.get("exam_id")
                            if ex_id and ex_id in exam_cat_map:
                                for cid in exam_cat_map[ex_id]:
                                    if not v["department_ids"] and cid in cat_depts:
                                        v["department_ids"].update(cat_depts[cid])
                                    if not v["team_ids"] and cid in cat_teams:
                                        v["team_ids"].update(cat_teams[cid])
                except Exception as _cm_err:
                    print(f"[get_test_ai_usage_api] Category dept/team fallback error: {_cm_err}")

            # 4. Resolve creator display names from Users table
            creator_name_map = {}
            if creator_raw_ids:
                try:
                    raw_list = list(creator_raw_ids)
                    found_creators = session.query(
                        User.user_id, User.full_name, User.user_name, User.email
                    ).filter(
                        or_(
                            cast(User.user_id, String).in_(raw_list),
                            User.user_name.in_(raw_list),
                            User.email.in_(raw_list)
                        )
                    ).all()
                    for u_row in found_creators:
                        disp = (u_row.full_name or u_row.user_name or u_row.email or "").strip()
                        uid_s = str(u_row.user_id).strip()
                        creator_name_map[uid_s.lower()] = (uid_s, disp)
                        if u_row.user_name:
                            creator_name_map[str(u_row.user_name).strip().lower()] = (uid_s, disp)
                        if u_row.email:
                            creator_name_map[str(u_row.email).strip().lower()] = (uid_s, disp)
                except Exception as _cr_err:
                    print(f"[get_test_ai_usage_api] Creator lookup error: {_cr_err}")

            for v in titles_cache.values():
                raw_cb = (v.get("created_by_id") or "").strip()
                if raw_cb:
                    resolved = creator_name_map.get(raw_cb.lower())
                    if resolved:
                        v["created_by_id"] = resolved[0]
                        v["created_by_name"] = resolved[1]
                    else:
                        v["created_by_name"] = raw_cb

        # Category totals across all institute records (NEVER altered by popup filters)
        total_paper = 0
        total_online = 0
        total_standalone = 0

        # Group by Test / Exam
        tests_map = {}

        for r in all_records:
            ttype = infer_test_type(r.test_type, r.feature_name)
            credits = int(r.total_tokens or r.credits_consumed or 0)

            if ttype == 'paper':
                total_paper += credits
            elif ttype == 'online':
                total_online += credits
            else:
                total_standalone += credits

            # Filter for tests table by selected tab
            if test_type_filter != 'all' and ttype != test_type_filter:
                continue

            # Resolve Test Metadata
            sched_key = str(r.schedule_id).strip() if r.schedule_id else None
            exam_key = str(r.exam_id).strip() if r.exam_id else None
            meta = (titles_cache.get(sched_key) if sched_key else None) or (titles_cache.get(exam_key) if exam_key else None) or {}

            # Primary group key: prefer schedule_id if present, else exam_id
            group_key = sched_key or exam_key
            if group_key:
                if group_key not in tests_map:
                    resolved_title = meta.get("title") or (f"Test ({group_key[:8]})")
                    resolved_subj = meta.get("subject") or "General"
                    tests_map[group_key] = {
                        "id": group_key,
                        "exam_id": exam_key or group_key,
                        "schedule_id": sched_key,
                        "title": resolved_title,
                        "subject": resolved_subj,
                        "subject_id": meta.get("subject_id") or "",
                        "department_ids": sorted(list(meta.get("department_ids") or [])),
                        "team_ids": sorted(list(meta.get("team_ids") or [])),
                        "campus_ids": sorted(list(meta.get("campus_ids") or [])),
                        "created_by_id": meta.get("created_by_id") or "",
                        "created_by_name": meta.get("created_by_name") or "",
                        "created_date": meta.get("created_date") or "",
                        "scheduled_start": meta.get("scheduled_start") or "",
                        "scheduled_end": meta.get("scheduled_end") or "",
                        "test_type": ttype,
                        "total_credits": 0,
                        "prompt_tokens": 0,
                        "completion_tokens": 0,
                        "operations_count": 0,
                        "last_activity": None,
                        "features": {}
                    }
                t = tests_map[group_key]
                t["total_credits"] += credits
                t["prompt_tokens"] += int(r.prompt_tokens or 0)
                t["completion_tokens"] += int(r.completion_tokens or 0)
                t["operations_count"] += 1
                dt_str = r.created_date.strftime("%Y-%m-%d %H:%M") if r.created_date else None
                if dt_str and (not t["last_activity"] or dt_str > t["last_activity"]):
                    t["last_activity"] = dt_str

                # Per-feature breakdown inside this test
                feat = r.feature_name or "AI Evaluation"
                if feat not in t["features"]:
                    t["features"][feat] = {"credits": 0, "count": 0, "prompt_tokens": 0, "completion_tokens": 0}
                t["features"][feat]["credits"] += credits
                t["features"][feat]["count"] += 1
                t["features"][feat]["prompt_tokens"] += int(r.prompt_tokens or 0)
                t["features"][feat]["completion_tokens"] += int(r.completion_tokens or 0)

        # Build filter_options from the unfiltered tests + active institute schedules for this tab
        all_tests_unfiltered = list(tests_map.values())
        creators_map = {}
        tests_meta_by_id = {}

        for t in all_tests_unfiltered:
            cid = (t.get("created_by_id") or "").strip()
            cname = (t.get("created_by_name") or "").strip()
            if cid and cname:
                creators_map[cid] = cname
            tests_meta_by_id[t["id"]] = {
                "id": t["id"],
                "exam_id": t["exam_id"],
                "schedule_id": t["schedule_id"],
                "title": t["title"],
                "test_type": t["test_type"],
                "subject": t["subject"],
                "subject_id": t["subject_id"],
                "department_ids": t["department_ids"],
                "team_ids": t["team_ids"],
                "campus_ids": t["campus_ids"],
                "created_by_id": cid,
                "created_by_name": cname,
                "created_date": t["created_date"],
                "scheduled_start": t["scheduled_start"],
                "scheduled_end": t["scheduled_end"],
            }

        # Supplement dropdown options with institute's active schedules for the selected tab
        try:
            if test_type_filter == 'paper':
                ps_q = session.query(PaperSchedule).filter(
                    or_(PaperSchedule.is_deleted == False, PaperSchedule.is_deleted == 0, PaperSchedule.is_deleted == None)
                )
                if str(inst_id).lower() != 'all':
                    ps_q = ps_q.filter(PaperSchedule.institute_id == str(inst_id))
                extra_ps = [ps for ps in ps_q.all() if str(ps.schedule_id) not in tests_meta_by_id]

                if extra_ps:
                    extra_sids = [str(ps.schedule_id) for ps in extra_ps]
                    extra_eids = list({str(ps.exam_id) for ps in extra_ps if ps.exam_id})
                    ps_dept_map, ps_team_map, ps_campus_map, ps_user_links = {}, {}, {}, {}
                    ps_uid_set = set()
                    for m in session.query(PaperScheduleMapping).filter(PaperScheduleMapping.schedule_id.in_(extra_sids)).all():
                        sid = str(m.schedule_id)
                        if m.department_id:
                            ps_dept_map.setdefault(sid, set()).add(str(m.department_id).strip())
                        if m.team_id:
                            ps_team_map.setdefault(sid, set()).add(str(m.team_id).strip())
                        if getattr(m, "campus_id", None):
                            ps_campus_map.setdefault(sid, set()).add(str(m.campus_id).strip())
                        if m.user_id:
                            uid = str(m.user_id).strip()
                            ps_user_links.setdefault(sid, set()).add(uid)
                            ps_uid_set.add(uid)
                    if ps_uid_set:
                        for u_row in session.query(User.user_id, User.department_id, User.team_id, User.campus_id).filter(
                            cast(User.user_id, String).in_(list(ps_uid_set))
                        ).all():
                            uid_s = str(u_row.user_id).strip()
                            for sid, uids in ps_user_links.items():
                                if uid_s in uids:
                                    if u_row.department_id:
                                        ps_dept_map.setdefault(sid, set()).add(str(u_row.department_id).strip())
                                    if u_row.team_id:
                                        ps_team_map.setdefault(sid, set()).add(str(u_row.team_id).strip())
                                    if getattr(u_row, "campus_id", None):
                                        ps_campus_map.setdefault(sid, set()).add(str(u_row.campus_id).strip())

                    ex_subj_map = {}
                    if extra_eids:
                        ex_rows = session.query(Exam).filter(Exam.exam_id.in_(extra_eids)).all()
                        extra_subj_ids = {str(ex.subject_id).strip() for ex in ex_rows if getattr(ex, "subject_id", None)}
                        extra_subj_names = {}
                        if extra_subj_ids:
                            for sb in session.query(Subject).filter(Subject.subject_id.in_(list(extra_subj_ids))).all():
                                extra_subj_names[str(sb.subject_id).strip()] = (sb.subject_name or "").strip()
                        for ex in ex_rows:
                            s_id = str(ex.subject_id or "").strip()
                            s_name = extra_subj_names.get(s_id) or (ex.subject_name or "").strip() or "General"
                            ex_subj_map[str(ex.exam_id)] = (s_id, s_name)

                    for ps in extra_ps:
                        sid = str(ps.schedule_id)
                        eid = str(ps.exam_id) if ps.exam_id else sid
                        s_id, s_name = ex_subj_map.get(eid, ("", "General"))
                        dt = ps.created_date or ps.start_time
                        tests_meta_by_id[sid] = {
                            "id": sid,
                            "exam_id": eid,
                            "schedule_id": sid,
                            "title": ps.title or "Paper Test",
                            "test_type": "paper",
                            "subject": s_name,
                            "subject_id": s_id,
                            "department_ids": sorted(list(ps_dept_map.get(sid, set()))),
                            "team_ids": sorted(list(ps_team_map.get(sid, set()))),
                            "campus_ids": sorted(list(ps_campus_map.get(sid, set()))),
                            "created_by_id": str(ps.created_by or "").strip(),
                            "created_by_name": str(ps.created_by or "").strip(),
                            "created_date": dt.strftime("%Y-%m-%d") if isinstance(dt, (datetime.datetime, datetime.date)) else "",
                            "scheduled_start": ps.start_time.strftime("%Y-%m-%d") if isinstance(ps.start_time, (datetime.datetime, datetime.date)) else "",
                            "scheduled_end": ps.end_time.strftime("%Y-%m-%d") if isinstance(ps.end_time, (datetime.datetime, datetime.date)) else "",
                        }

            elif test_type_filter == 'online':
                es_q = session.query(ExamSchedule).filter(
                    or_(ExamSchedule.is_deleted == False, ExamSchedule.is_deleted == 0, ExamSchedule.is_deleted == None)
                )
                if str(inst_id).lower() != 'all':
                    es_q = es_q.filter(ExamSchedule.institute_id == str(inst_id))
                extra_es = [es for es in es_q.all() if str(es.schedule_id) not in tests_meta_by_id]

                if extra_es:
                    extra_sids = [str(es.schedule_id) for es in extra_es]
                    es_dept_map, es_team_map, es_campus_map, es_user_links = {}, {}, {}, {}
                    es_uid_set = set()
                    for m in session.query(ExamScheduleMapping).filter(ExamScheduleMapping.schedule_id.in_(extra_sids)).all():
                        sid = str(m.schedule_id)
                        if m.department_id:
                            es_dept_map.setdefault(sid, set()).add(str(m.department_id).strip())
                        if m.team_id:
                            es_team_map.setdefault(sid, set()).add(str(m.team_id).strip())
                        if getattr(m, "campus_id", None):
                            es_campus_map.setdefault(sid, set()).add(str(m.campus_id).strip())
                        if m.user_id:
                            uid = str(m.user_id).strip()
                            es_user_links.setdefault(sid, set()).add(uid)
                            es_uid_set.add(uid)
                    if es_uid_set:
                        for u_row in session.query(User.user_id, User.department_id, User.team_id, User.campus_id).filter(
                            cast(User.user_id, String).in_(list(es_uid_set))
                        ).all():
                            uid_s = str(u_row.user_id).strip()
                            for sid, uids in es_user_links.items():
                                if uid_s in uids:
                                    if u_row.department_id:
                                        es_dept_map.setdefault(sid, set()).add(str(u_row.department_id).strip())
                                    if u_row.team_id:
                                        es_team_map.setdefault(sid, set()).add(str(u_row.team_id).strip())
                                    if getattr(u_row, "campus_id", None):
                                        es_campus_map.setdefault(sid, set()).add(str(u_row.campus_id).strip())

                    for es in extra_es:
                        sid = str(es.schedule_id)
                        eid = str(es.exam_id) if es.exam_id else sid
                        dt = es.created_date or es.start_time
                        tests_meta_by_id[sid] = {
                            "id": sid,
                            "exam_id": eid,
                            "schedule_id": sid,
                            "title": es.title or "Online Test",
                            "test_type": "online",
                            "subject": "",
                            "subject_id": "",
                            "department_ids": sorted(list(es_dept_map.get(sid, set()))),
                            "team_ids": sorted(list(es_team_map.get(sid, set()))),
                            "campus_ids": sorted(list(es_campus_map.get(sid, set()))),
                            "created_by_id": str(es.created_by or "").strip(),
                            "created_by_name": str(es.created_by or "").strip(),
                            "created_date": dt.strftime("%Y-%m-%d") if isinstance(dt, (datetime.datetime, datetime.date)) else "",
                            "scheduled_start": es.start_time.strftime("%Y-%m-%d") if isinstance(es.start_time, (datetime.datetime, datetime.date)) else "",
                            "scheduled_end": es.end_time.strftime("%Y-%m-%d") if isinstance(es.end_time, (datetime.datetime, datetime.date)) else "",
                        }
        except Exception as _sched_opt_err:
            print(f"[get_test_ai_usage_api] Extra schedule options lookup warning: {_sched_opt_err}")

        all_tests_meta = sorted(tests_meta_by_id.values(), key=lambda x: (x["title"] or "").lower())
        creators_list = sorted(
            [{"id": k, "name": v} for k, v in creators_map.items()],
            key=lambda x: x["name"].lower()
        )

        # Apply popup filters (all conditions work together via AND)
        tests_list = all_tests_unfiltered

        if department_filter:
            tests_list = [
                t for t in tests_list
                if any(d.lower() == department_filter for d in (t.get("department_ids") or []))
            ]

        if team_filter:
            tests_list = [
                t for t in tests_list
                if any(tm.lower() == team_filter for tm in (t.get("team_ids") or []))
            ]

        if campus_filter:
            tests_list = [
                t for t in tests_list
                if any(c.lower() == campus_filter for c in (t.get("campus_ids") or []))
            ]

        if subject_filter:
            tests_list = [
                t for t in tests_list
                if (t.get("subject_id") or "").lower() == subject_filter
                or (t.get("subject") or "").lower() == subject_filter
            ]

        if test_id_filter:
            tests_list = [
                t for t in tests_list
                if (t.get("id") or "").lower() == test_id_filter
                or (t.get("schedule_id") or "").lower() == test_id_filter
                or (t.get("exam_id") or "").lower() == test_id_filter
            ]

        if created_by_me_flag:
            me_ids = set()
            if hasattr(g, 'current_user') and g.current_user:
                for attr in ('user_id', 'user_name', 'email', 'full_name'):
                    val = getattr(g.current_user, attr, None)
                    if val and str(val).strip():
                        me_ids.add(str(val).strip().lower())
            if created_by_filter:
                me_ids.add(created_by_filter)
            if me_ids:
                tests_list = [
                    t for t in tests_list
                    if (t.get("created_by_id") or "").lower() in me_ids
                    or (t.get("created_by_name") or "").lower() in me_ids
                ]
        elif created_by_filter:
            tests_list = [
                t for t in tests_list
                if (t.get("created_by_id") or "").lower() == created_by_filter
                or (t.get("created_by_name") or "").lower() == created_by_filter
            ]

        if created_start_date or created_end_date:
            filtered_by_date = []
            for t in tests_list:
                t_date = _parse_iso_date_only(t.get("created_date") or t.get("scheduled_start"))
                if not t_date:
                    continue
                if created_start_date and t_date < created_start_date:
                    continue
                if created_end_date and t_date > created_end_date:
                    continue
                filtered_by_date.append(t)
            tests_list = filtered_by_date

        # Apply search filter
        if search_term:
            tests_list = [
                t for t in tests_list
                if search_term in t["title"].lower() or search_term in t["subject"].lower()
            ]
        tests_list.sort(key=lambda x: x["last_activity"] or "", reverse=True)

        session.close()
        return jsonify({
            "status": True,
            "data": {
                "summary": {
                    "total_paper_credits": total_paper,
                    "total_online_credits": total_online,
                    "total_standalone_credits": total_standalone,
                    "grand_total": total_paper + total_online + total_standalone
                },
                "tests": tests_list,
                "filter_options": {
                    "creators": creators_list,
                    "tests": all_tests_meta
                }
            }
        }), 200

    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching test AI usage: {str(e)}"}), 500
