import datetime
from datetime import timedelta
from flask import jsonify, request, g
from sqlalchemy import func, cast, Date, desc, or_
from db.db import SQLiteDB
from db.models import Institute, openai_requests, User


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


def record_ai_usage(response_json, institute_id=None, user_id=None, feature_name="Question Generation", endpoint=None):
    """
    Centralized function to log token usage and feature categorization into openai_requests.
    """
    if not isinstance(response_json, dict):
        return

    choices = response_json.get("choices")
    if not choices or not isinstance(choices, list) or len(choices) == 0:
        return

    try:
        db = SQLiteDB()
        session = db.connect()

        # Idempotency check: prevent duplicate logging of the same OpenAI completion
        req_id = response_json.get("id")
        if req_id:
            existing = session.query(openai_requests).filter(openai_requests.id == req_id).first()
            if existing:
                session.close()
                return

        resolved_inst = resolve_institute_id(None, institute_id, user_id)

        # Standardize feature names
        if not feature_name:
            if endpoint and "fine-tune" in str(endpoint).lower():
                feature_name = "Fine-Tuning"
            elif endpoint and ("eval" in str(endpoint).lower() or "review" in str(endpoint).lower()):
                feature_name = "Evaluated"
            elif endpoint and "ocr" in str(endpoint).lower():
                feature_name = "OCR Extraction"
            else:
                feature_name = "Question Generation"

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


def get_ai_feature_breakdown_api():
    """
    GET /edu/api/ai-credits/feature-breakdown
    Returns aggregated table of AI features used:
    e.g. Question Generation: 400, Evaluated: 300, etc.
    """
    inst_id = resolve_institute_id(request)
    if not inst_id:
        return jsonify({"status": False, "statusMessage": "Institute scope is required"}), 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return jsonify({"status": False, "statusMessage": "Database connection error"}), 500

    try:
        # Group by feature_name
        query = session.query(
            func.coalesce(openai_requests.feature_name, 'Question Generation').label('feature'),
            func.count(openai_requests.request_id).label('op_count'),
            func.coalesce(func.sum(openai_requests.prompt_tokens), 0).label('prompt_tok'),
            func.coalesce(func.sum(openai_requests.completion_tokens), 0).label('comp_tok'),
            func.coalesce(func.sum(openai_requests.total_tokens), 0).label('total_tok'),
            func.max(openai_requests.created_date).label('last_used')
        )
        if str(inst_id).lower() != 'all':
            query = query.filter(openai_requests.institute_id == str(inst_id))

        rows = query.group_by(
            func.coalesce(openai_requests.feature_name, 'Question Generation')
        ).order_by(
            desc(func.coalesce(func.sum(openai_requests.total_tokens), 0))
        ).all()

        breakdown = []
        grand_total_ops = 0
        grand_prompt_tokens = 0
        grand_comp_tokens = 0
        grand_total_tokens = 0

        for r in rows:
            feature_name = r.feature
            op_count = int(r.op_count or 0)
            p_tok = int(r.prompt_tok or 0)
            c_tok = int(r.comp_tok or 0)
            t_tok = int(r.total_tok or 0)
            last_used_dt = r.last_used.strftime("%Y-%m-%d %H:%M") if r.last_used else None

            grand_total_ops += op_count
            grand_prompt_tokens += p_tok
            grand_comp_tokens += c_tok
            grand_total_tokens += t_tok

            breakdown.append({
                "feature": feature_name,
                "count": op_count,
                "prompt_tokens": p_tok,
                "completion_tokens": c_tok,
                "total_tokens": t_tok,
                "credits_consumed": t_tok,
                "last_used": last_used_dt
            })

        session.close()
        return jsonify({
            "status": True,
            "data": {
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
