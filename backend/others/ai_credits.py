import datetime
from datetime import timedelta
from flask import jsonify, request, g
from sqlalchemy import func, cast, Date, desc, or_, text
from db.db import SQLiteDB
from db.models import Institute, openai_requests, User, Exam, PaperSchedule, ExamSchedule


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


def get_test_ai_usage_api():
    """
    GET /edu/api/ai-credits/test-usage
    Returns itemized AI credits consumption per test and daily timeline.
    Query parameters:
      - institute_id: 'all' or specific institute ID
      - test_type: 'all' | 'paper' | 'online'
      - start_date, end_date: ISO date strings (optional)
      - search: string to match test title (optional)
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    test_type_filter = (request.args.get('test_type') or 'all').lower().strip()
    start_date_str = request.args.get('start_date')
    end_date_str = request.args.get('end_date')
    search_term = (request.args.get('search') or '').strip().lower()

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
                    ps_meta = {
                        "title": ps.title or "Paper Test",
                        "subject": "Paper Test",
                        "mode": "paper",
                        "exam_id": str(ps.exam_id) if ps.exam_id else None
                    }
                    titles_cache[str(ps.schedule_id)] = ps_meta
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
                    es_meta = {
                        "title": es.title or getattr(es, "name", None) or "Online Test",
                        "subject": "Online Test",
                        "mode": "online",
                        "exam_id": str(es.exam_id) if es.exam_id else None
                    }
                    titles_cache[str(es.schedule_id)] = es_meta
                    if es.exam_id:
                        linked_exam_ids.add(str(es.exam_id))
                        titles_cache.setdefault(str(es.exam_id), es_meta)
            except Exception as _es_err:
                print(f"[get_test_ai_usage_api] ExamSchedule cache lookup error: {_es_err}")

            # 3. Look up master Exams
            exam_lookup_ids = list(set(all_candidate_ids + list(linked_exam_ids)))
            try:
                found_exams = session.query(Exam).filter(Exam.exam_id.in_(exam_lookup_ids)).all()
                for ex in found_exams:
                    ex_id_str = str(ex.exam_id)
                    subj = ex.subject_name or getattr(ex, "subject_id", "") or "General"
                    # Enrich any schedule pointing to this exam with the proper subject name
                    for k, v in titles_cache.items():
                        if v.get("exam_id") == ex_id_str:
                            v["subject"] = subj
                    # If this exam is not already stored under a schedule's title, store it
                    if ex_id_str not in titles_cache:
                        titles_cache[ex_id_str] = {
                            "title": ex.title or "Untitled Test",
                            "subject": subj,
                            "mode": ex.test_mode or "online"
                        }
                    elif titles_cache[ex_id_str].get("subject") in ("Paper Test", "Online Test"):
                        titles_cache[ex_id_str]["subject"] = subj
            except Exception as _ex_err:
                print(f"[get_test_ai_usage_api] Exam cache lookup error: {_ex_err}")

        # Category totals across all institute records
        total_paper = 0
        total_online = 0
        total_standalone = 0

        # Group by Test / Exam
        tests_map = {}
        daily_map = {}

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
                        "exam_id": exam_key or group_key,
                        "schedule_id": sched_key,
                        "title": resolved_title,
                        "subject": resolved_subj,
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

            # Daily timeline grouping
            if r.created_date:
                day_key = r.created_date.strftime("%Y-%m-%d")
                day_label = r.created_date.strftime("%A, %b %d, %Y")
                if day_key not in daily_map:
                    daily_map[day_key] = {
                        "date": day_key,
                        "label": day_label,
                        "total_credits": 0,
                        "prompt_tokens": 0,
                        "completion_tokens": 0,
                        "operations": 0
                    }
                d = daily_map[day_key]
                d["total_credits"] += credits
                d["prompt_tokens"] += int(r.prompt_tokens or 0)
                d["completion_tokens"] += int(r.completion_tokens or 0)
                d["operations"] += 1

        # Flatten tests list & apply search filter
        tests_list = list(tests_map.values())
        if search_term:
            tests_list = [
                t for t in tests_list 
                if search_term in t["title"].lower() or search_term in t["subject"].lower()
            ]
        tests_list.sort(key=lambda x: x["last_activity"] or "", reverse=True)

        daily_list = sorted(daily_map.values(), key=lambda x: x["date"], reverse=True)

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
                "daily_timeline": daily_list
            }
        }), 200

    except Exception as e:
        session.close()
        return jsonify({"status": False, "statusMessage": f"Error fetching test AI usage: {str(e)}"}), 500
