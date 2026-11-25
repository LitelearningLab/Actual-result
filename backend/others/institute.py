from db.models import Institute, InstituteCampus, InstituteDepartment, InstituteTeam, User, Country, State, City, Subject, openai_requests, InstituteCreditTransaction
from db.db import SQLiteDB
from datetime import datetime
from sqlalchemy import func, or_
from sqlalchemy.exc import DBAPIError, IntegrityError
from sqlalchemy import text
import threading
import json
# from sqlalchemy import text

_institute_schema_ready = False
_institute_schema_lock = threading.Lock()

def _to_bool(val):
    if isinstance(val, bool):
        return val
    return str(val or '').strip().lower() in ('1', 'true', 'yes', 'active', 'primary')


def _ensure_institute_registration_schema(session):
    """Add missing institute columns once per backend process."""
    global _institute_schema_ready
    if _institute_schema_ready:
        return

    with _institute_schema_lock:
        if _institute_schema_ready:
            return

        required_columns = {
            "primary_contact_person": "NVARCHAR(255) NULL",
            "primary_contact_email": "NVARCHAR(255) NULL",
            "primary_contact_phone": "NVARCHAR(50) NULL",
            "website": "NVARCHAR(500) NULL",
            "industry_type": "NVARCHAR(255) NULL",
            "industry_sector": "NVARCHAR(255) NULL",
            "max_users": "INT NULL",
            "subscription_start": "DATE NULL",
            "subscription_end": "DATE NULL",
            "qa_character_limits": "NVARCHAR(MAX) NULL",
            "allocated_credits": "BIGINT NULL DEFAULT 0",
            "credit_alert_threshold": "INT NULL DEFAULT 10",
            "allow_online_test": "BIT NULL DEFAULT 1",
            "allow_paper_test": "BIT NULL DEFAULT 1",
        }
        for column_name, definition in required_columns.items():
            exists = session.execute(
                text("SELECT COL_LENGTH('dbo.Institutes', :column_name)"),
                {"column_name": column_name},
            ).scalar()
            if exists is None:
                session.execute(text(
                    f"ALTER TABLE dbo.Institutes ADD [{column_name}] {definition}"
                ))

        # Ensure existing institute records have default 1 for allow_online_test and allow_paper_test
        try:
            session.execute(text("""
                UPDATE dbo.Institutes SET allow_online_test = 1 WHERE allow_online_test IS NULL;
                UPDATE dbo.Institutes SET allow_paper_test = 1 WHERE allow_paper_test IS NULL;
            """))
        except Exception:
            pass

        # Ensure dbo.Pages has Paper Test pages
        try:
            session.execute(text("""
                IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Create/Edit Paper Test' OR page_url = '/question-papers')
                BEGIN
                    INSERT INTO dbo.Pages (page_id, page_name, page_url, active_status)
                    VALUES (NEWID(), 'Create/Edit Paper Test', '/question-papers', 1);
                END;

                IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Schedule Paper Test' OR page_url = '/scheduled-paper-tests')
                BEGIN
                    INSERT INTO dbo.Pages (page_id, page_name, page_url, active_status)
                    VALUES (NEWID(), 'Schedule Paper Test', '/scheduled-paper-tests', 1);
                END;

                IF NOT EXISTS (SELECT 1 FROM dbo.Pages WHERE page_name = 'Paper Evaluation' OR page_url = '/test-evaluation')
                BEGIN
                    INSERT INTO dbo.Pages (page_id, page_name, page_url, active_status)
                    VALUES (NEWID(), 'Paper Evaluation', '/test-evaluation', 1);
                END;
            """))
        except Exception:
            pass
        city_name_exists = session.execute(
            text("SELECT COL_LENGTH('dbo.InstituteCampuses', 'city_name')")
        ).scalar()
        if city_name_exists is None:
            session.execute(text(
                "ALTER TABLE dbo.InstituteCampuses ADD city_name NVARCHAR(255) NULL"
            ))

        # Ensure openai_requests table has feature_name and credits_consumed
        openai_req_cols = {
            "feature_name": "NVARCHAR(100) NULL",
            "credits_consumed": "INT NULL DEFAULT 0",
        }
        for col, col_def in openai_req_cols.items():
            exists = session.execute(
                text("SELECT COL_LENGTH('dbo.openai_requests', :column_name)"),
                {"column_name": col},
            ).scalar()
            if exists is None:
                try:
                    session.execute(text(
                        f"ALTER TABLE dbo.openai_requests ADD [{col}] {col_def}"
                    ))
                except Exception:
                    pass

        # Ensure Institute_Credit_Transactions table exists
        try:
            session.execute(text("""
                IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Institute_Credit_Transactions' AND xtype='U')
                CREATE TABLE dbo.Institute_Credit_Transactions (
                    transaction_id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
                    institute_id NVARCHAR(64) NOT NULL,
                    transaction_type NVARCHAR(32) NOT NULL,
                    credits BIGINT NOT NULL,
                    previous_balance BIGINT NOT NULL DEFAULT 0,
                    new_balance BIGINT NOT NULL DEFAULT 0,
                    reason NVARCHAR(500) NULL,
                    performed_by NVARCHAR(100) NULL,
                    created_date DATETIME DEFAULT GETUTCDATE()
                );
            """))
        except Exception:
            pass

        session.commit()
        _institute_schema_ready = True


def normalize_qa_character_limits(raw_limits):
    default_limits = [
        {"marks": 2, "answer_min_character_limit": 450, "answer_max_character_limit": 550},
        {"marks": 5, "answer_min_character_limit": 800, "answer_max_character_limit": 1100},
        {"marks": 10, "answer_min_character_limit": 1300, "answer_max_character_limit": 1800}
    ]
    if not raw_limits:
        return default_limits
    try:
        limits = json.loads(raw_limits) if isinstance(raw_limits, str) else raw_limits
        if not isinstance(limits, list) or not limits:
            return default_limits
        normalized = []
        for item in limits:
            if not isinstance(item, dict):
                continue
            marks = int(item.get("marks", 2) or 2)
            a_min = item.get("answer_min_character_limit")
            a_max = item.get("answer_max_character_limit")
            legacy = item.get("character_limit")
            if not a_max:
                a_max = legacy if legacy else (550 if marks <= 2 else (1100 if marks <= 5 else 1800))
            if not a_min:
                a_min = int(a_max * 0.75) if a_max else (450 if marks <= 2 else (800 if marks <= 5 else 1300))
            normalized.append({
                "marks": marks,
                "answer_min_character_limit": int(a_min),
                "answer_max_character_limit": int(a_max)
            })
        return normalized if normalized else default_limits
    except Exception as e:
        return default_limits


def _extract_id(val, id_keys=('id', 'country_id', 'state_id', 'city_id', '_id')):
    if val is None:
        return None
    if isinstance(val, dict):
        for k in id_keys:
            if k in val and val[k]:
                s = str(val[k]).strip()
                if s and s.lower() not in ('none', 'null', ''):
                    return s
        return None
    s = str(val).strip()
    if not s or s.lower() in ('none', 'null', '{}', 'undefined'):
        return None
    if s.startswith('{') and '}' in s:
        return None
    return s


def _campus_city_values(session, value):
    """Store city as normalized Title Case free text (e.g., 'chennai' -> 'Chennai')."""
    if isinstance(value, dict):
        city_name = (
            value.get('city_name')
            or value.get('City_Name')
            or value.get('name')
            or value.get('city')
            or value.get('city_id')
        )
        city_value = str(city_name or '').strip()
    else:
        city_value = str(value or '').strip()
    if not city_value or city_value.lower() in ('none', 'null', '{}', 'undefined'):
        return None, None
    if city_value.startswith('{') and '}' in city_value:
        return None, None
    # Capitalize first letter of each word
    return None, city_value.title()


def get_pagination(request):
    return (request.args.get('pageNumber', 1, type=int),
            request.args.get('pageSize', 25, type=int))

def insert_institute(data):
    data = data or {}
    operation = "validate_payload"
    name = data.get("name", None)
    short_name = data.get("short_name", None)
    industry_sector = data.get("industry_sector", None)
    industry_type = data.get("industry_type", None)
    primary_contact_person = data.get("primary_contact_person", None)
    primary_contact_email = data.get("primary_contact_email", None)
    primary_contact_phone = data.get("primary_contact_phone", None) 
    website = data.get("website", None)
    max_users = data.get("max_users", None)
    if max_users in ("", None):
        max_users = None
    else:
        try:
            max_users = int(max_users)
        except (TypeError, ValueError):
            return {"statusMessage": "max_users must be a whole number", "status": False}, 400
        if max_users < 1:
            return {"statusMessage": "max_users must be at least 1", "status": False}, 400
    active_status = data.get("active_status", data.get("active", 1))
    active_status = 1 if active_status in (True, 1, "1", "true", "True", "active", "Active") else 0

    allow_online_test_raw = data.get("allow_online_test", 1)
    allow_online_test = 0 if allow_online_test_raw in (False, 0, "0", "false", "False") else 1
    allow_paper_test_raw = data.get("allow_paper_test", 1)
    allow_paper_test = 0 if allow_paper_test_raw in (False, 0, "0", "false", "False") else 1

    allocated_credits = data.get("allocated_credits", 0)
    try:
        allocated_credits = int(allocated_credits or 0)
    except (TypeError, ValueError):
        allocated_credits = 0

    subscription_start_str = data.get("subscription_start", None)
    subscription_end_str = data.get("subscription_end", None)
    created_by = data.get("current_user", 'system')
    qa_character_limits_val = data.get("qa_character_limits", None)
    if isinstance(qa_character_limits_val, (list, dict)):
        qa_character_limits = json.dumps(qa_character_limits_val)
    elif isinstance(qa_character_limits_val, str) and qa_character_limits_val.strip():
        qa_character_limits = qa_character_limits_val.strip()
    else:
        qa_character_limits = '[{"marks": 2, "answer_min_character_limit": 450, "answer_max_character_limit": 550}, {"marks": 5, "answer_min_character_limit": 800, "answer_max_character_limit": 1100}, {"marks": 10, "answer_min_character_limit": 1300, "answer_max_character_limit": 1800}]'

    missing_fields = [field for field, value in (("name", name), ("short_name", short_name))
                      if value is None or not str(value).strip()]
    if missing_fields:
        return {
            "statusMessage": f"Missing required fields: {', '.join(missing_fields)}",
            "status": False,
        }, 400

    subscription_start = None
    subscription_end = None
    date_format = "%Y-%m-%d"
    if subscription_start_str:
        try:
            subscription_start = datetime.strptime(subscription_start_str, date_format).date()
        except (TypeError, ValueError):
            return {"statusMessage": "subscription_start must use YYYY-MM-DD format", "status": False}, 400
    if subscription_end_str:
        try:
            subscription_end = datetime.strptime(subscription_end_str, date_format).date()
        except (TypeError, ValueError):
            return {"statusMessage": "subscription_end must use YYYY-MM-DD format", "status": False}, 400

    if subscription_start and subscription_end and subscription_end <= subscription_start:
        return {"statusMessage": "Subscription end date must be after the start date", "status": False}, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        operation = "ensure_schema"
        _ensure_institute_registration_schema(session)

        operation = "check_duplicate"
        existing_inst = session.query(Institute).filter(
            Institute.is_deleted == 0,
            func.lower(Institute.short_name) == func.lower(short_name)
        ).first()
        if existing_inst:
            return {
                "statusMessage": "Institute already exists",
                "status": False,
                "institute_id": existing_inst.institute_id
            }, 409

        operation = "insert_institute"
        new_inst = Institute(
            name=name,
            short_name=short_name,
            industry_sector=industry_sector,
            industry_type=industry_type,
            primary_contact_person=primary_contact_person,
            primary_contact_email=primary_contact_email,
            primary_contact_phone=primary_contact_phone,
            website=website,
            max_users=max_users,
            allocated_credits=allocated_credits,
            subscription_start=subscription_start,
            subscription_end=subscription_end,
            qa_character_limits=qa_character_limits,
            allow_online_test=allow_online_test,
            allow_paper_test=allow_paper_test,
            active_status=active_status,
            created_by=created_by,
        )
        session.add(new_inst)
        session.flush()
        institute_id = new_inst.institute_id

        if allocated_credits > 0:
            try:
                init_tx = InstituteCreditTransaction(
                    institute_id=str(institute_id),
                    transaction_type="INITIAL",
                    credits=allocated_credits,
                    previous_balance=0,
                    new_balance=allocated_credits,
                    reason="Initial institute quota setup",
                    performed_by=created_by or "Super Admin",
                    created_date=datetime.utcnow()
                )
                session.add(init_tx)

                from others.ai_credit_notifications import credit_notification_manager
                credit_notification_manager.create_notification(
                    institute_id=str(institute_id),
                    event_type="ALLOCATION",
                    severity="INFO",
                    title="AI Credits Allocated",
                    message=f"{allocated_credits:,} AI credits allocated to {new_inst.name}.",
                    credits_amount=allocated_credits,
                    remaining_credits=allocated_credits,
                    allocated_credits=allocated_credits,
                    created_by=created_by or "Super Admin"
                )
            except Exception as _ne:
                print(f"[register_institute] Credit notification notice: {_ne}")

        operation = "insert_locations"
        head_office_data = data.get('headOffice') or {}
        address = head_office_data.get('address', None)
        country_id = _extract_id(head_office_data.get('country'))
        state_id = _extract_id(head_office_data.get('state'))
        city_id, city_name = _campus_city_values(session, head_office_data.get('city'))
        pin_code = str(head_office_data.get('pincode') or '').strip() or None
        email = str(head_office_data.get('email') or '').strip() or None
        phone = str(head_office_data.get('phone') or '').strip() or None
        campuses_list = data.get('campuses') or []
        has_explicit_primary = any(_to_bool(c.get('isPrimary')) for c in campuses_list)
        is_primary = '0' if has_explicit_primary else '1'

        if any([address, country_id, state_id, city_name, pin_code, email, phone]):
            new_campus = InstituteCampus(
                institute_id=institute_id,
                name=short_name,
                address=address,
                country_id=country_id,
                state_id=state_id,
                city_id=city_id,
                city_name=city_name,
                pin_code=pin_code,
                email=email,
                phone=phone,
                is_primary=is_primary,
                active_status='1'
            )
            session.add(new_campus)

        for index, campuses in enumerate(campuses_list, start=1):
            name = str(campuses.get('name') or '').strip()
            if not name:
                return {
                    "statusMessage": f"Campus {index} requires a name",
                    "status": False,
                }, 400
            address = campuses.get('address', None)
            country_id = _extract_id(campuses.get('country'))
            state_id = _extract_id(campuses.get('state'))
            city_id, city_name = _campus_city_values(session, campuses.get('city'))
            pin_code = str(campuses.get('pincode') or '').strip() or None
            email = str(campuses.get('email') or '').strip() or None
            phone = str(campuses.get('phone') or '').strip() or None
            is_primary = '1' if _to_bool(campuses.get('isPrimary')) else '0'
            active_status = '0' if campuses.get('isActive') in (False, 0, '0', 'false', 'False') else '1'

            new_campus = InstituteCampus(
                    institute_id=institute_id,
                    name=name,
                    address=address,
                    country_id=country_id,
                    state_id=state_id,
                    city_id=city_id,
                    city_name=city_name,
                    pin_code=pin_code,
                    email=email,
                    phone=phone,
                    is_primary=is_primary,
                    active_status=active_status
                )
            session.add(new_campus)

        operation = "insert_departments_and_teams"
        departments_structured = data.get('departments_structured')
        if departments_structured is not None and isinstance(departments_structured, list):
            for dept_info in departments_structured:
                dept_name = (dept_info.get('name') if isinstance(dept_info, dict) else str(dept_info)).strip()
                if not dept_name:
                    continue
                new_InstituteDepartment = InstituteDepartment(
                    institute_id=institute_id,
                    name=dept_name,
                    created_by=created_by
                )
                session.add(new_InstituteDepartment)
                session.flush()

                teams_list = dept_info.get('teams') if isinstance(dept_info, dict) else []
                for team_name in teams_list or []:
                    team_str = (team_name.get('name') if isinstance(team_name, dict) else str(team_name)).strip()
                    if not team_str:
                        continue
                    new_InstituteTeam = InstituteTeam(
                        institute_id=institute_id,
                        department_id=new_InstituteDepartment.department_id,
                        name=team_str,
                        created_by=created_by
                    )
                    session.add(new_InstituteTeam)
        else:
            for department in data.get('department') or []:
                if not department:
                    continue
                new_InstituteDepartment = InstituteDepartment(
                    institute_id=institute_id,
                    name=department,
                    created_by=created_by
                )
                session.add(new_InstituteDepartment)

            for team in data.get('team') or []:
                if not team:
                    continue
                new_InstituteTeam = InstituteTeam(
                    institute_id=institute_id,
                    name=team,
                    created_by=created_by
                )
                session.add(new_InstituteTeam)

        operation = "insert_subjects"
        for subj in data.get('subjects') or []:
            subj_str = (subj.get('name') if isinstance(subj, dict) else str(subj)).strip()
            if not subj_str:
                continue
            new_Subject = Subject(
                institute_id=institute_id,
                subject_name=subj_str,
                created_by=created_by,
                active_status=1,
                is_deleted=0
            )
            session.add(new_Subject)

        operation = "commit"
        session.commit()

        json_data = {
            "statusMessage": "Institute registered successfully",
            "status": True,
            "institute_id": institute_id
        }
        return json_data, 201
    except Exception as e:
        session.rollback()
        print(f"Error inserting institute during {operation}: {e!r}", flush=True)
        error_text = str(getattr(e, "orig", e)).lower()
        if isinstance(e, DBAPIError) and (
            "invalid column name" in error_text
            or "alter permission was denied" in error_text
        ):
            status_message = "Database schema is out of date. Apply the institute registration migration."
        elif "string or binary data would be truncated" in error_text:
            status_message = "An institute field exceeds the database column size. Apply the institute registration migration."
        elif isinstance(e, IntegrityError):
            status_message = "Institute data conflicts with an existing record or location reference."
        else:
            status_message = "Failed to register institute"
        json_data = {
            "statusMessage": status_message,
            "status": False,
            "errorCode": f"INSTITUTE_REGISTRATION_{operation.upper()}_FAILED",
        }
        return json_data, 500
    finally:
        session.close()

def update_institute(request):
    data = request.json
    institute_id = data.get("institute_id", None)
    if not institute_id:
        json_data = {
            "statusMessage": "institute_id is required",
            "status": False
        }
        return json_data, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    institute = session.query(Institute).filter_by(institute_id=institute_id).first()
    if not institute:
        json_data = {
            "statusMessage": "Institute not found",
            "status": False
        }
        return json_data, 404

    if "active" in data and "active_status" not in data:
        data["active_status"] = 1 if data.get("active") in (True, 1, "1", "true", "True", "active", "Active") else 0

    # Update fields
    date_fields = ["subscription_start", "subscription_end"]
    date_format = "%Y-%m-%d"
    parsed_dates = {}
    for key in date_fields:
        if key not in data:
            continue
        value = data.get(key)
        if value in (None, ""):
            parsed_dates[key] = None
            continue
        if not isinstance(value, str):
            session.close()
            return {"statusMessage": f"{key} must use YYYY-MM-DD format", "status": False}, 400
        try:
            parsed_dates[key] = datetime.strptime(value, date_format).date()
        except ValueError:
            session.close()
            return {"statusMessage": f"{key} must use YYYY-MM-DD format", "status": False}, 400

    effective_start = parsed_dates.get("subscription_start", institute.subscription_start)
    effective_end = parsed_dates.get("subscription_end", institute.subscription_end)
    if effective_start and effective_end and effective_end <= effective_start:
        session.close()
        return {"statusMessage": "Subscription end date must be after the start date", "status": False}, 400

    for key, value in data.items():
        if hasattr(institute, key) and key != "institute_id":
            if key in parsed_dates:
                value = parsed_dates[key]
            elif key == "qa_character_limits" and isinstance(value, (list, dict)):
                value = json.dumps(value)
            elif key in ("allow_online_test", "allow_paper_test"):
                value = 0 if value in (False, 0, "0", "false", "False") else 1
            setattr(institute, key, value)

    institute.updated_by = data.get("current_user", 'system')
    institute.updated_date = datetime.utcnow()

    # update departments & teams if departments_structured is provided
    departments_structured = data.get('departments_structured', None)
    if departments_structured is not None and isinstance(departments_structured, list):
        # Fetch existing departments and teams for this institute to preserve their IDs
        existing_dept_records = session.query(InstituteDepartment).filter_by(institute_id=institute_id).all()
        existing_depts_by_name = {d.name.strip().lower(): d for d in existing_dept_records if d.name}
        existing_depts_by_id = {d.department_id: d for d in existing_dept_records if d.department_id}

        existing_team_records = session.query(InstituteTeam).filter_by(institute_id=institute_id).all()
        existing_teams_by_name_and_dept = {
            (t.name.strip().lower(), t.department_id): t for t in existing_team_records if t.name
        }
        existing_teams_by_id = {t.team_id: t for t in existing_team_records if t.team_id}

        active_dept_ids = set()
        active_team_ids = set()

        for dept_info in departments_structured:
            dept_name = (
                dept_info.get('name') if isinstance(dept_info, dict) else str(dept_info)
            ).strip()
            
            if not dept_name:
                continue

            dept_id_param = dept_info.get('id') or dept_info.get('department_id') or dept_info.get('dept_id') if isinstance(dept_info, dict) else None
            dept_key = dept_name.lower()

            # Reuse existing department record if present to keep user linkages intact
            dept_obj = None
            if dept_id_param and dept_id_param in existing_depts_by_id:
                dept_obj = existing_depts_by_id[dept_id_param]
                dept_obj.name = dept_name
            elif dept_key in existing_depts_by_name:
                dept_obj = existing_depts_by_name[dept_key]
                dept_obj.name = dept_name
            else:
                dept_obj = InstituteDepartment(
                    institute_id=institute_id,
                    name=dept_name,
                    created_by=data.get("current_user", 'system')
                )
                session.add(dept_obj)
                session.flush()

            active_dept_ids.add(dept_obj.department_id)

            teams_list = dept_info.get('teams') if isinstance(dept_info, dict) else []
            for team_item in teams_list or []:
                team_str = (
                    team_item.get('name') if isinstance(team_item, dict) else str(team_item)
                ).strip()

                if not team_str:
                    continue

                team_id_param = team_item.get('id') or team_item.get('team_id') if isinstance(team_item, dict) else None
                team_key = (team_str.lower(), dept_obj.department_id)

                # Reuse existing team record if present
                team_obj = None
                if team_id_param and team_id_param in existing_teams_by_id:
                    team_obj = existing_teams_by_id[team_id_param]
                    team_obj.name = team_str
                    team_obj.department_id = dept_obj.department_id
                elif team_key in existing_teams_by_name_and_dept:
                    team_obj = existing_teams_by_name_and_dept[team_key]
                    team_obj.name = team_str
                else:
                    team_obj = InstituteTeam(
                        institute_id=institute_id,
                        department_id=dept_obj.department_id,
                        name=team_str,
                        created_by=data.get("current_user", 'system')
                    )
                    session.add(team_obj)
                    session.flush()

                active_team_ids.add(team_obj.team_id)

        # Delete only teams and departments that were removed from the incoming list
        if active_team_ids:
            session.query(InstituteTeam).filter(
                InstituteTeam.institute_id == institute_id,
                ~InstituteTeam.team_id.in_(list(active_team_ids))
            ).delete(synchronize_session=False)
        else:
            session.query(InstituteTeam).filter(
                InstituteTeam.institute_id == institute_id
            ).delete(synchronize_session=False)

        if active_dept_ids:
            session.query(InstituteDepartment).filter(
                InstituteDepartment.institute_id == institute_id,
                ~InstituteDepartment.department_id.in_(list(active_dept_ids))
            ).delete(synchronize_session=False)
        else:
            session.query(InstituteDepartment).filter(
                InstituteDepartment.institute_id == institute_id
            ).delete(synchronize_session=False)
    else:
        # Fallback flat lists update
        department_list = data.get('department', None)
        if department_list is not None:
            existing_departments = session.query(InstituteDepartment).filter_by(institute_id=institute_id).all()
            existing_department_names = {dept.name for dept in existing_departments}
            for department in department_list:
                if department not in existing_department_names:
                    new_InstituteDepartment = InstituteDepartment(
                        institute_id=institute_id,
                        name=department,
                        created_by=data.get("current_user", 'system')
                    )
                    session.add(new_InstituteDepartment)

        team_list = data.get('team', None)
        if team_list is not None:
            existing_teams = session.query(InstituteTeam).filter_by(institute_id=institute_id).all()
            existing_team_names = {team.name for team in existing_teams}
            for team in team_list:
                if team not in existing_team_names:
                    new_InstituteTeam = InstituteTeam(
                        institute_id=institute_id,
                        name=team,
                        created_by=data.get("current_user", 'system')
                    )
                    session.add(new_InstituteTeam)

    # update subjects if provided
    subjects_list = data.get('subjects', None)
    if subjects_list is not None:
        existing_subjects = session.query(Subject).filter(
            Subject.institute_id == institute_id,
            or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
        ).all()
        existing_map = {s.subject_name.lower(): s for s in existing_subjects}
        incoming_names = set()
        for s in subjects_list:
            s_name = (s.get('name') if isinstance(s, dict) else str(s)).strip()
            if not s_name:
                continue
            incoming_names.add(s_name.lower())
            if s_name.lower() not in existing_map:
                new_Subject = Subject(
                    institute_id=institute_id,
                    subject_name=s_name,
                    created_by=data.get("current_user", 'system'),
                    active_status=1,
                    is_deleted=0
                )
                session.add(new_Subject)
        for s_lower, s_obj in existing_map.items():
            if s_lower not in incoming_names:
                s_obj.is_deleted = 1

    # update campuses if provided
    campus_list = data.get('campuses', None)
    # Debug update payloads so campus persistence issues can be traced from the backend terminal.
    print("Received campuses:", campus_list)
    if campus_list is not None:
        # Fetch existing campuses for the institute
        existing_campuses = session.query(InstituteCampus).filter_by(institute_id=institute_id).all()
        existing_campus_ids = {campus.campus_id for campus in existing_campuses}
        # Build a set of campus_ids from the incoming list (if present)
        incoming_campus_ids = set()
        for campus in campus_list:
            campus_id = campus.get('campus_id')
            if campus_id:
                incoming_campus_ids.add(campus_id)

        # Delete campuses that are not in the incoming list
        for campus in existing_campuses:
            if campus.campus_id not in incoming_campus_ids:
                session.delete(campus)

        # Update or insert campuses
        for campus in campus_list:
            campus_id = campus.get('campus_id')
            if campus_id and campus_id in existing_campus_ids:
            # Update existing campus
                existing_campus = session.query(InstituteCampus).filter_by(campus_id=campus_id, institute_id=institute_id).first()
                if existing_campus:
                    existing_campus.name = campus.get('name')
                    existing_campus.address = campus.get('address')
                    existing_campus.country_id = _extract_id(campus.get('country'))
                    existing_campus.state_id = _extract_id(campus.get('state'))
                    existing_campus.city_id, existing_campus.city_name = _campus_city_values(
                        session, campus.get('city')
                    )
                    existing_campus.pin_code = str(campus.get('pincode') or '').strip() or None
                    existing_campus.email = str(campus.get('email') or '').strip() or None
                    existing_campus.phone = str(campus.get('phone') or '').strip() or None
                    existing_campus.is_primary = '1' if _to_bool(campus.get('isPrimary')) else '0'
                    existing_campus.active_status = '1' if _to_bool(campus.get('isActive')) else '0'
                    existing_campus.updated_by = data.get("current_user", 'system')
                    existing_campus.updated_date = datetime.utcnow()
            else:
                # Insert new campus
                city_id, city_name = _campus_city_values(session, campus.get('city'))
                new_InstituteCampus = InstituteCampus(
                    institute_id=institute_id,
                    name=campus.get('name'),
                    address=campus.get('address'),
                    country_id=_extract_id(campus.get('country')),
                    state_id=_extract_id(campus.get('state')),
                    city_id=city_id,
                    city_name=city_name,
                    pin_code=str(campus.get('pincode') or '').strip() or None,
                    email=str(campus.get('email') or '').strip() or None,
                    phone=str(campus.get('phone') or '').strip() or None,
                    is_primary='1' if _to_bool(campus.get('isPrimary')) else '0',
                    active_status='1' if _to_bool(campus.get('isActive')) else '0',
                    created_by=data.get("current_user", 'system')
                )
                session.add(new_InstituteCampus)

    try:
        session.commit()
        json_data = {
            "statusMessage": "Institute updated successfully",
            "status": True
        }
        return json_data, 200
    except Exception as e:
        print(f"Error updating institute: {e}")
        session.rollback()
        json_data = {
            "statusMessage": "Failed to update institute",
            "status": False
        }
        return json_data, 500

def manage_institute(action, uuid, updated_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    active_status = 1 if action == "activate" else 0
    # update institute table 
    institute = session.query(Institute).filter_by(institute_id=uuid).first()
    if not institute:
        return {"statusMessage": "Institute not found", "status": False}, 404
    if action == 'delete':
        return {"statusMessage": "Insititue record deleted", "ststus": True}, 200

    institute.active_status = active_status
    institute.updated_by = updated_by
    institute.updated_date = datetime.utcnow()
    session.commit()

    return {"statusMessage": f"Institute {'activated' if active_status else 'deactivated'} successfully", "status": True}, 200

# delete institute function can be added here in future
def delete_institute(uuid, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    # update institute table 
    institute = session.query(Institute).filter_by(institute_id=uuid).first()
    if not institute:
        return {"statusMessage": "Institute not found", "status": False}, 404

    institute.is_deleted = 1
    session.commit()
    return {"statusMessage": "Insititue record deleted", "ststus": True}, 200

def get_institute_details(request):
    
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    page_number, page_size = get_pagination(request)
    filters = []
    args = getattr(request, "args", {})
    filters.append(Institute.is_deleted == 0)
    inst_param = args.get("institute_id") or args.get("institute_ids") or args.get("id")
    if inst_param:
        inst_val = str(inst_param).strip()
        if ',' in inst_val:
            filters.append(Institute.institute_id.in_([i.strip() for i in inst_val.split(',') if i.strip()]))
        else:
            filters.append(Institute.institute_id == inst_val)
    if args.get("name"):
        name_filter = f"%{args.get('name')}%"
        filters.append(or_(Institute.name.ilike(name_filter), Institute.short_name.ilike(name_filter)))
    if args.get("industry"):
        ind_val = str(args.get("industry")).strip()
        if ',' in ind_val:
            filters.append(Institute.industry_type.in_([i.strip() for i in ind_val.split(',') if i.strip()]))
        else:
            filters.append(Institute.industry_type.ilike(f"%{ind_val}%"))
    if args.get("sector"):
        sec_val = str(args.get("sector")).strip()
        if ',' in sec_val:
            filters.append(Institute.industry_sector.in_([s.strip() for s in sec_val.split(',') if s.strip()]))
        else:
            filters.append(Institute.industry_sector.ilike(f"%{sec_val}%"))
    if args.get("active_status") is not None:
        filters.append(Institute.active_status == (1 if args.get("active_status") == 'true' else 0))
    if args.get("country"):
        country_val = str(args.get("country")).strip()
        country_list = [c.strip() for c in country_val.split(',') if c.strip()] if ',' in country_val else [country_val]
        matched_cids = [c.country_id for c in session.query(Country).filter(or_(Country.country_id.in_(country_list), Country.country_name.in_(country_list))).all()]
        all_cids = list(set(country_list + matched_cids))
        filters.append(InstituteCampus.country_id.in_(all_cids))
    if args.get("city"):
        city_val = str(args.get("city") or '').strip()
        if city_val:
            city_list = [c.strip() for c in city_val.split(',') if c.strip()] if ',' in city_val else [city_val]
            city_conds = []
            for c in city_list:
                city_conds.append(InstituteCampus.city_name.ilike(f"%{c}%"))
                city_conds.append(InstituteCampus.city_id == c)
                matched_city_ids = [ct.city_id for ct in session.query(City).filter(City.city_name.ilike(f"%{c}%")).all()]
                if matched_city_ids:
                    city_conds.append(InstituteCampus.city_id.in_(matched_city_ids))
            filters.append(or_(*city_conds))

    # If country or city filters are present, join with InstituteCampus
    if any(arg in args for arg in ["country", "city"]):
        query = (
            session.query(Institute)
            .join(InstituteCampus, Institute.institute_id == InstituteCampus.institute_id)
            .filter(*filters).order_by(Institute.created_date.desc())
            .distinct()
        )
        total_count = query.count()
        # institutes = query.offset((page_number - 1) * page_size).limit(page_size).all()
        institutes = query.all()
    else:
        query = session.query(Institute).filter(*filters).order_by(Institute.created_date.desc())
        total_count = query.count()
        institutes = query.all()

    result = []
    for inst in institutes:
        # get InstituteDepartments details
        departments = session.query(InstituteDepartment).filter_by(institute_id=inst.institute_id).all()
        dept_list = []
        
        # Check for unassigned teams for this institute
        unassigned_teams = session.query(InstituteTeam).filter(
            InstituteTeam.institute_id == inst.institute_id,
            or_(InstituteTeam.department_id.is_(None), InstituteTeam.department_id == '')
        ).all()

        for idx, dept in enumerate(departments):
            d_teams = session.query(InstituteTeam).filter_by(institute_id=inst.institute_id, department_id=dept.department_id).all()
            if not d_teams and unassigned_teams:
                # If department has no explicitly linked teams, associate unassigned teams
                d_teams = unassigned_teams
                for u_team in unassigned_teams:
                    u_team.department_id = dept.department_id
                try:
                    session.commit()
                except Exception:
                    session.rollback()

            dept_list.append({
                "dept_id": dept.department_id,
                "name": dept.name,
                "active_status": True if dept.active_status else False,
                "teams": [
                    {
                        "team_id": t.team_id,
                        "name": t.name,
                        "active_status": True if t.active_status else False,
                    } for t in d_teams
                ]
            })
        # Get InstituteTeams details
        teams = session.query(InstituteTeam).filter_by(institute_id=inst.institute_id).all()
        team_list = []
        for team in teams:
            team_list.append({
                "team_id": team.team_id,
                "department_id": getattr(team, 'department_id', None),
                "name": team.name,
                "active_status": True if team.active_status else False,
            })
        #  Get InstituteCampuses details
        campuses = session.query(InstituteCampus).filter_by(institute_id=inst.institute_id).all()
        campus_list = []
        for campus in campuses:
            # Fetch country, state, and city names if possible
            country_name = None
            state_name = None
            city_name = campus.city_name

            if campus.country_id:
                country = session.query(Country).filter_by(country_id=campus.country_id).first()
                country_name = country.country_name if country else None

            if campus.state_id:
                state = session.query(State).filter_by(state_id=campus.state_id).first()
                state_name = state.state_name if state else None

            if campus.city_id:
                city = session.query(City).filter_by(city_id=campus.city_id).first()
                city_name = city.city_name if city else city_name

            campus_list.append({
            "campus_id": campus.campus_id,
            "name": campus.name,
            "address": campus.address,
            "country": {"country_id": campus.country_id,"country_name": country_name,},
            "state": {"state_id": campus.state_id,"state_name": state_name,},
            "city": {"city_id": campus.city_id,"city_name": city_name,},
            "pin_code": campus.pin_code,
            "email": campus.email,
            "phone": campus.phone,
            "is_primary": _to_bool(campus.is_primary),
            "active_status": _to_bool(campus.active_status),
            })
        created_by = None
        updated_by = None
        if inst.created_by:
            created_by = session.query(User).filter_by(user_id=inst.created_by).first()
            created_by = created_by.full_name if created_by else None
        if inst.updated_by:
            updated_by = session.query(User).filter_by(user_id=inst.updated_by).first()
            updated_by = updated_by.full_name if updated_by else None
        admins_count = session.query(User).filter(
            User.institute_id == inst.institute_id,
            User.user_role == 'admin',
            User.is_deleted == 0
        ).count()
        users_count = session.query(User).filter(
            User.institute_id == inst.institute_id,
            User.user_role == 'user',
            User.is_deleted == 0
        ).count()
        allocated_credits = int(getattr(inst, "allocated_credits", 0) or 0)
        try:
            used_credits = int(session.query(func.coalesce(func.sum(openai_requests.total_tokens), 0)).filter(
                openai_requests.institute_id == str(inst.institute_id)
            ).scalar() or 0)
        except Exception:
            used_credits = 0
        remaining_credits = max(0, allocated_credits - used_credits) if allocated_credits > 0 else 0

        result.append({
            "institute_id": inst.institute_id,
            "name": inst.name,
            "short_name": inst.short_name,
            "primary_contact_person": inst.primary_contact_person,
            "primary_contact_email": inst.primary_contact_email,
            "primary_contact_phone": inst.primary_contact_phone,
            "website": inst.website,
            "industry_type": inst.industry_type,
            "industry_sector": inst.industry_sector,
            "max_users": inst.max_users,
            "allocated_credits": allocated_credits,
            "used_credits": used_credits,
            "remaining_credits": remaining_credits,
            "admins_count": admins_count,
            "users_count": users_count,
            "subscription_start": inst.subscription_start,
            "subscription_end": inst.subscription_end,
            "qa_character_limits": normalize_qa_character_limits(getattr(inst, "qa_character_limits", None)),
            "allow_online_test": bool(inst.allow_online_test) if getattr(inst, "allow_online_test", None) is not None else True,
            "allow_paper_test": bool(inst.allow_paper_test) if getattr(inst, "allow_paper_test", None) is not None else True,
            "active_status": True if inst.active_status else False,
            "departments": dept_list,
            "teams": team_list,
            "campuses": campus_list,
            "subjects": [
                {
                    "subject_id": s.subject_id,
                    "name": s.subject_name,
                    "active_status": True if s.active_status in (1, True, '1') else False
                }
                for s in session.query(Subject).filter(
                    Subject.institute_id == inst.institute_id,
                    or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
                ).all()
            ],
            "created_by": {"user_id": inst.created_by, "user_name" :created_by},
            "created_date": inst.created_date,
            "updated_by":{ "user_id": inst.updated_by, "user_name" : updated_by},
            "updated_date": inst.updated_date
        })
    json_data = {
        "statusMessage": "Institutes retrieved successfully",
        "status": True,
        "data": result,
        "total": len(result),
        "totalCount": total_count
    }
    return json_data , 200

def get_institute_list(current_user=None, request=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    args = getattr(request, "args", {}) if request else {}
    query = session.query(Institute).filter(Institute.active_status == 1, Institute.is_deleted == 0)
    if current_user and getattr(current_user, "user_role", None) not in ("super_admin", "superadmin", "super-admin"):
        query = query.filter(Institute.institute_id == current_user.institute_id)

    if args.get("industry"):
        ind_val = str(args.get("industry")).strip()
        if ind_val:
            query = query.filter(or_(Institute.industry_type.ilike(f"%{ind_val}%"), Institute.industry_type == None, Institute.industry_type == ''))
    if args.get("sector"):
        sec_val = str(args.get("sector")).strip()
        if sec_val:
            query = query.filter(or_(Institute.industry_sector.ilike(f"%{sec_val}%"), Institute.industry_sector == None, Institute.industry_sector == ''))
    if args.get("country") or args.get("city"):
        query = query.join(InstituteCampus, Institute.institute_id == InstituteCampus.institute_id)
        if args.get("country"):
            country_val = str(args.get("country")).strip()
            country_list = [c.strip() for c in country_val.split(',') if c.strip()] if ',' in country_val else [country_val]
            matched_cids = [c.country_id for c in session.query(Country).filter(or_(Country.country_id.in_(country_list), Country.country_name.in_(country_list))).all()]
            all_cids = list(set(country_list + matched_cids))
            query = query.filter(InstituteCampus.country_id.in_(all_cids))
        if args.get("city"):
            city_val = str(args.get("city") or '').strip()
            if city_val:
                city_list = [c.strip() for c in city_val.split(',') if c.strip()] if ',' in city_val else [city_val]
                city_conds = []
                for c in city_list:
                    city_conds.append(InstituteCampus.city_name.ilike(f"%{c}%"))
                    city_conds.append(InstituteCampus.city_id == c)
                    matched_city_ids = [ct.city_id for ct in session.query(City).filter(City.city_name.ilike(f"%{c}%")).all()]
                    if matched_city_ids:
                        city_conds.append(InstituteCampus.city_id.in_(matched_city_ids))
                query = query.filter(or_(*city_conds))

    active_institutes = query.distinct().all()
    result = []
    for inst in active_institutes:
        result.append({
            "id": str(inst.institute_id),
            "institute_id": str(inst.institute_id),
            # Keep the full name alongside the abbreviation so filter UIs can display it safely.
            "institute_name": inst.name,
            "name": inst.name,
            "short_name": inst.short_name,
            "industry_type": inst.industry_type or '',
            "industry_sector": inst.industry_sector or '',
            "allow_online_test": bool(inst.allow_online_test) if getattr(inst, "allow_online_test", None) is not None else True,
            "allow_paper_test": bool(inst.allow_paper_test) if getattr(inst, "allow_paper_test", None) is not None else True,
            "qa_character_limits": normalize_qa_character_limits(getattr(inst, "qa_character_limits", None))
        })
    json_data = {
        "statusMessage": "Active institutes retrieved successfully",
        "status": True,
        "data": result,
        "total": len(result)
    }
    return json_data, 200

def get_campus_list(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    institute_id = request.args.get('institute_id', None)
    if not institute_id:
        json_data = {
            "statusMessage": "institute_id parameter is required",
            "status": False
        }
        return json_data, 400

    campuses = session.query(InstituteCampus).filter_by(institute_id=institute_id).all()
    result = []
    for campus in campuses:
        country_name = None
        state_name = None
        city_name = campus.city_name

        if campus.country_id:
            country = session.query(Country).filter_by(country_id=campus.country_id).first()
            country_name = country.country_name if country else None
        if campus.state_id:
            state = session.query(State).filter_by(state_id=campus.state_id).first()
            state_name = state.state_name if state else None
        if campus.city_id:
            city = session.query(City).filter_by(city_id=campus.city_id).first()
            city_name = city.city_name if city else city_name

        result.append({
            "campus_id": campus.campus_id,
            "name": campus.name,
            "address": campus.address,
            # Include location fields so selecting a campus can immediately fill country/state/city in the UI.
            "country": {"country_id": campus.country_id, "country_name": country_name},
            "state": {"state_id": campus.state_id, "state_name": state_name},
            "city": {"city_id": campus.city_id, "city_name": city_name},
            "pin_code": campus.pin_code
        })
    json_data = {
        "statusMessage": "Campuses retrieved successfully",
        "status": True,
        "data": result,
        "total": len(result)
    }
    return json_data, 200

def update_institute_credits(request):
    data = request.get_json(silent=True) or {}
    institute_id = data.get("institute_id")
    if not institute_id:
        return {"status": False, "statusMessage": "institute_id is required"}, 400

    new_credits = data.get("allocated_credits")
    if new_credits is None:
        return {"status": False, "statusMessage": "allocated_credits is required"}, 400

    try:
        new_credits = int(new_credits)
        if new_credits < 0:
            return {"status": False, "statusMessage": "allocated_credits must be non-negative"}, 400
    except (TypeError, ValueError):
        return {"status": False, "statusMessage": "allocated_credits must be an integer"}, 400

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"status": False, "statusMessage": "Database connection error"}, 500

    try:
        inst = session.query(Institute).filter_by(institute_id=institute_id).first()
        if not inst:
            session.close()
            return {"status": False, "statusMessage": "Institute not found"}, 404

        inst.allocated_credits = new_credits
        inst.updated_date = datetime.utcnow()
        session.commit()

        used_credits = int(session.query(func.coalesce(func.sum(openai_requests.total_tokens), 0)).filter(
            openai_requests.institute_id == str(institute_id)
        ).scalar() or 0)
        remaining = max(0, new_credits - used_credits) if new_credits > 0 else 0

        session.close()

        # Trigger background auto-resumption for any paused bulk evaluations or pending online evaluations
        try:
            from others.ai_credits import AICreditManager
            AICreditManager.trigger_auto_resume_for_institute(str(institute_id))
        except Exception as _ar_err:
            print(f"[Institute Credits] Auto-resume trigger warning: {_ar_err}")

        try:
            from others.ai_credit_notifications import credit_notification_manager
            credit_notification_manager.create_notification(
                institute_id=str(institute_id),
                event_type="RENEWAL",
                severity="INFO",
                title="AI Credit Quota Renewed",
                message=f"AI credit quota renewed to {new_credits:,} credits (Available: {remaining:,}).",
                credits_amount=new_credits,
                remaining_credits=remaining,
                allocated_credits=new_credits,
                created_by="Super Admin"
            )
        except Exception as _ne:
            print(f"[update_institute_credits] Notification error: {_ne}")

        return {
            "status": True,
            "statusMessage": "Institute credits updated successfully",
            "data": {
                "institute_id": institute_id,
                "allocated_credits": new_credits,
                "used_credits": used_credits,
                "remaining_credits": remaining
            }
        }, 200
    except Exception as e:
        session.rollback()
        session.close()
        return {"status": False, "statusMessage": f"Failed to update credits: {str(e)}"}, 500


def add_or_deduct_institute_credits(request):
    """POST /edu/api/institutes/credit-transaction"""
    data = request.get_json(silent=True) or {}
    institute_id = data.get("institute_id")
    action = (data.get("action") or "").upper().strip()
    credits_amt = data.get("credits")
    reason = (data.get("reason") or "").strip()
    performed_by = data.get("performed_by") or "Super Admin"

    if not institute_id:
        return {"status": False, "statusMessage": "institute_id is required"}, 400
    if action != "ADD":
        return {"status": False, "statusMessage": "action must be ADD"}, 400
    try:
        credits_amt = int(credits_amt)
        if credits_amt <= 0:
            return {"status": False, "statusMessage": "credits must be a positive integer"}, 400
    except (TypeError, ValueError):
        return {"status": False, "statusMessage": "Invalid credits amount"}, 400
    if not reason:
        return {"status": False, "statusMessage": "Reason is required for all credit transactions"}, 400

    db = SQLiteDB()
    session = db.connect()
    try:
        _ensure_institute_registration_schema(session)
        inst = session.query(Institute).filter_by(institute_id=institute_id).first()
        if not inst:
            session.close()
            return {"status": False, "statusMessage": "Institute not found"}, 404

        current_allocated = int(inst.allocated_credits or 0)
        used_credits = int(session.query(func.coalesce(func.sum(openai_requests.total_tokens), 0)).filter(
            openai_requests.institute_id == str(institute_id)
        ).scalar() or 0)
        previous_available = max(0, current_allocated - used_credits)

        # Base allocation on whichever is higher: current allocation or actual used credits.
        # If an institute was in overdraft/deficit (used_credits > current_allocated),
        # adding credits must absorb the deficit so the newly added amount is 
        # immediately available as usable balance.
        base_allocation = max(current_allocated, used_credits)
        new_allocated = base_allocation + credits_amt
        new_available = new_allocated - used_credits
        tx_type = "ADDITION"
        signed_credits = credits_amt

        inst.allocated_credits = new_allocated
        inst.updated_date = datetime.utcnow()

        tx = InstituteCreditTransaction(
            institute_id=str(institute_id),
            transaction_type=tx_type,
            credits=signed_credits,
            previous_balance=previous_available,
            new_balance=new_available,
            reason=reason,
            performed_by=performed_by,
            created_date=datetime.utcnow()
        )
        session.add(tx)
        session.commit()
        session.close()

        # Trigger background auto-resumption for any paused bulk evaluations or pending online evaluations
        try:
            from others.ai_credits import AICreditManager
            AICreditManager.trigger_auto_resume_for_institute(str(institute_id))
        except Exception as _ar_err:
            print(f"[Institute Credits] Auto-resume trigger warning: {_ar_err}")

        try:
            from others.ai_credit_notifications import credit_notification_manager
            credit_notification_manager.create_notification(
                institute_id=str(institute_id),
                event_type="ADJUSTMENT",
                severity="INFO",
                title=f"{credits_amt:,} credits added by {performed_by}",
                message=f"Added {credits_amt:,} credits by {performed_by}. Reason: {reason}. Available: {new_available:,}.",
                credits_amount=signed_credits,
                remaining_credits=new_available,
                allocated_credits=new_allocated,
                created_by=performed_by
            )
        except Exception as _ne:
            print(f"[add_or_deduct_institute_credits] Notification error: {_ne}")
        return {
            "status": True,
            "statusMessage": f"Successfully added {credits_amt:,} credits.",
            "data": {
                "allocated_credits": new_allocated,
                "used_credits": used_credits,
                "remaining_credits": new_available
            }
        }, 200
    except Exception as e:
        session.rollback()
        session.close()
        return {"status": False, "statusMessage": f"Transaction failed: {str(e)}"}, 500


def get_institute_credit_transactions(request):
    """GET /edu/api/institutes/credit-transactions"""
    inst_id = request.args.get("institute_id")
    if not inst_id:
        return {"status": False, "statusMessage": "institute_id is required"}, 400

    tx_type = request.args.get("type")
    page = int(request.args.get("page", 1))
    page_size = int(request.args.get("page_size", 10))

    db = SQLiteDB()
    session = db.connect()
    try:
        _ensure_institute_registration_schema(session)

        # Auto-seed baseline initial allocation if not already logged
        try:
            inst = session.query(Institute).filter_by(institute_id=inst_id).first()
            if inst and inst.allocated_credits and int(inst.allocated_credits) > 0:
                total_logged = session.query(func.coalesce(func.sum(InstituteCreditTransaction.credits), 0)).filter(
                    InstituteCreditTransaction.institute_id == str(inst_id)
                ).scalar() or 0
                if total_logged < int(inst.allocated_credits):
                    diff = int(inst.allocated_credits) - int(total_logged)
                    init_tx = InstituteCreditTransaction(
                        institute_id=str(inst_id),
                        transaction_type="INITIAL",
                        credits=diff,
                        previous_balance=0,
                        new_balance=diff,
                        reason="Initial institute quota setup",
                        performed_by="Super Admin",
                        created_date=inst.created_date or datetime.utcnow()
                    )
                    session.add(init_tx)
                    session.commit()
        except Exception:
            session.rollback()

        from sqlalchemy import desc
        q = session.query(InstituteCreditTransaction).filter(
            InstituteCreditTransaction.institute_id == str(inst_id)
        )
        if tx_type and tx_type.upper() != "ALL":
            q = q.filter(InstituteCreditTransaction.transaction_type == tx_type.upper())

        total_count = q.count()
        records = q.order_by(desc(InstituteCreditTransaction.created_date)).offset((page - 1) * page_size).limit(page_size).all()

        items = [{
            "transaction_id": str(r.transaction_id),
            "transaction_type": r.transaction_type,
            "credits": r.credits,
            "previous_balance": r.previous_balance,
            "new_balance": r.new_balance,
            "reason": r.reason,
            "performed_by": r.performed_by,
            "created_date": r.created_date.isoformat() if r.created_date else None
        } for r in records]

        session.close()
        return {"status": True, "total_count": total_count, "data": items}, 200
    except Exception as e:
        session.close()
        return {"status": False, "statusMessage": str(e)}, 500


