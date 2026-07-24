import pandas as pd
from db.models import User, Institute, InstituteDepartment, InstituteTeam,InstituteCampus
from db.models import Credential, UserPageAccess, Page, Country, State,City
from db.db import SQLiteDB
from datetime import datetime
from passlib.hash import argon2
from sqlalchemy import or_

def _validate_user_institute_scope(session, institute_id, department_id=None, team_id=None, campus_id=None):
    """Ensure every institute-owned selection belongs to the submitted institute."""
    if not institute_id:
        return "Institute is required"
    if not session.query(Institute).filter(Institute.institute_id == institute_id).first():
        return "Selected institute does not exist"

    checks = (
        ("department", InstituteDepartment, InstituteDepartment.department_id, department_id),
        ("team", InstituteTeam, InstituteTeam.team_id, team_id),
        ("campus", InstituteCampus, InstituteCampus.campus_id, campus_id),
    )
    for label, model, id_column, selected_id in checks:
        if not selected_id:
            continue
        record = session.query(model).filter(id_column == selected_id).first()
        if not record:
            return f"Selected {label} does not exist"
        if str(record.institute_id) != str(institute_id):
            return f"Selected {label} does not belong to the selected institute"
    return None

def _apply_campus_location(session, data, campus_id):
    """Use the campus as the canonical source for a user's location fields."""
    if not campus_id:
        return
    campus = session.query(InstituteCampus).filter(InstituteCampus.campus_id == campus_id).first()
    if campus:
        data["country_id"] = campus.country_id
        data["state_id"] = campus.state_id
        data["city_id"] = campus.city_id

def get_pagination(request):
    return (request.args.get('pageNumber', 1, type=int),
            request.args.get('pageSize', 25, type=int))

def insert_user(data):
    full_name = data.get("display_name", None)
    user_name = data.get("user_name",None)
    email = data.get("email", None)
    user_role = data.get("user_role",None)
    institute_id = data.get("institute_id", None)
    contact_no = data.get("contact_no", None)
    active_status = 1 if data.get("active_status", None) == True else 0
    password =  data.get('password' , None)
    department_id = data.get("department_id", None)
    team_id = data.get("team_id", None)
    campus_id = data.get("campus_id", None)
    country_id = data.get("country_id", None)
    state_id = data.get("state_id", None)
    city_id = data.get("city_id", None)
    joining_date = data.get("joining_date", None)
    joining_date = joining_date.split("T")[0] if joining_date else None    
    joining_date = datetime.strptime(joining_date, "%Y-%m-%d") if joining_date else None
    created_by = data.get("current_user", "Admin")

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    
    # Check each unique login identifier separately so either conflict blocks creation.
    existing_email = session.query(User).filter(User.email == email).first()
    if existing_email:
        json_data = {
            "statusMessage": "Email already exists",
            "status": False
        }
        return json_data, 400
    
    existing_username = session.query(User).filter(User.user_name == user_name).first()
    if existing_username:
        json_data = {
            "statusMessage": "Username already exists",
            "status": False
        }
        return json_data, 400

    validation_error = _validate_user_institute_scope(
        session, institute_id, department_id, team_id, campus_id
    )
    if validation_error:
        return {"statusMessage": validation_error, "status": False}, 400

    normalized_data = {
        "country_id": country_id,
        "state_id": state_id,
        "city_id": city_id,
    }
    _apply_campus_location(session, normalized_data, campus_id)
    country_id = normalized_data["country_id"]
    state_id = normalized_data["state_id"]
    city_id = normalized_data["city_id"]

    new_user = User(
        full_name = full_name,
        user_name=user_name,
        email=email,
        user_role=user_role,
        institute_id= institute_id,
        contact_no =contact_no,
        active_status =active_status,
        department_id = department_id,
        team_id = team_id,
        campus_id = campus_id,
        country_id = country_id,
        state_id = state_id,
        city_id = city_id,
        joining_date = joining_date,
        created_by = created_by

    )
    try:
        session.add(new_user)
        session.flush()
        user_id = new_user.user_id

        # add data in UserPageAccess for user-management
        page_data = data.get('page_access', [])
        for page_access in page_data:
            user_page_access = UserPageAccess(
                user_id=user_id,
                page_id=page_access.get('page_key'),
                can_view=page_access.get('view', False),
                can_add=page_access.get('add', False),
                can_edit=page_access.get('edit', False),
                can_delete=page_access.get('delete', False)
            )
            session.add(user_page_access)
        password_hash = argon2.hash(password)
        # insert credentials
        cred_data = Credential(
            user_id=user_id,
            password_hash=password_hash
        )
        session.add(cred_data)
        session.commit()


        json_data = {
            "statusMessage": "User registered successfully",
            "status": True,
            "user_id": user_id
        }
        return json_data, 201
    except Exception as e:
        print(f"Error inserting user: {e}")
        session.rollback()
        json_data = {
            "statusMessage": "Failed to register user",
            "status": False
        }
        return json_data, 500

def user_bulk_upload(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed. Please try again later.", "status": False}, 500
    
    institute_id = request.form.get("institute_id", None)
    created_by = request.form.get("current_user", "Admin")
    # get file from request
    file = request.files.get("file", None)
    if not file or not getattr(file, 'filename', None):
        return {"statusMessage": "Please select a file to upload.", "status": False}, 400

    # Read file using pandas (supports CSV and Excel formats)
    try:
        filename = file.filename.lower()
        if filename.endswith(('.xlsx', '.xls')):
            df = pd.read_excel(file)
        else:
            df = pd.read_csv(file)
    except Exception:
        return {
            "statusMessage": "Your file format doesn't match the template. Please re-download the template and re-upload.",
            "status": False
        }, 400

    if df is None or df.empty or len(df.columns) == 0:
        return {
            "statusMessage": "Your uploaded file is empty. Please check the file and try again.",
            "status": False
        }, 400

    # Clean up column names in dataframe
    df.columns = [str(c).strip() for c in df.columns]

    # Required and optional column definitions with user-friendly display labels
    column_definitions = {
        "full_name": {
            "aliases": ["full_name", "fullname", "name", "display_name", "full name"],
            "label": "Full Name",
            "required": True
        },
        "username": {
            "aliases": ["username", "user_name", "user name", "user"],
            "label": "Username",
            "required": True
        },
        "email": {
            "aliases": ["email", "email_address", "email address", "mail"],
            "label": "Email",
            "required": True
        },
        "role": {
            "aliases": ["role", "user_role", "user role"],
            "label": "Role",
            "required": True
        },
        "contact_no": {
            "aliases": ["contact_no", "contact", "phone", "phone_number", "phone number", "mobile"],
            "label": "Phone Number",
            "required": False
        },
        "department": {
            "aliases": ["department", "dept"],
            "label": "Department",
            "required": False
        },
        "team": {
            "aliases": ["team"],
            "label": "Team",
            "required": False
        },
        "campus": {
            "aliases": ["campus"],
            "label": "Campus",
            "required": False
        },
        "joining_date": {
            "aliases": ["joining_date", "joining date", "join_date", "date_of_joining"],
            "label": "Joining Date",
            "required": False
        },
        "password": {
            "aliases": ["password", "pwd"],
            "label": "Password",
            "required": False
        }
    }

    # Map actual columns in the file to canonical keys
    df_cols_map = {str(col).strip().lower(): col for col in df.columns}
    canonical_map = {}

    for key, spec in column_definitions.items():
        matched_col = None
        for alias in spec["aliases"]:
            if alias in df_cols_map:
                matched_col = df_cols_map[alias]
                break
        if matched_col:
            canonical_map[key] = matched_col
        elif spec["required"]:
            return {
                "statusMessage": f"Column '{spec['label']}' is missing in your file. Please check the downloaded template and try again.",
                "status": False
            }, 400

    active_status = 1

    # Get Page table data
    page_data = session.query(Page).all()

    # Get institute limit for user creation
    inst_record = session.query(Institute).filter_by(institute_id=institute_id).first() if institute_id else None
    max_user_limit = inst_record.max_users if inst_record and inst_record.max_users is not None else 0
    already_assigned = session.query(User).filter_by(institute_id=institute_id, active_status=1, is_deleted=0).count() if institute_id else 0
    available_licenses = max_user_limit - already_assigned

    error_users_list = []
    seen_file_emails = set()
    seen_file_usernames = set()

    for index, row in df.iterrows():
        row_num = index + 2  # Excel/CSV row 1 is the header line

        if available_licenses <= 0:
            msg = f"Row {row_num}: User limit exceeded for the institute."
            error_users_list.append(msg)
            df.loc[index:, 'status'] = "Failed: User limit exceeded for the institute"
            break

        # Extract values
        fn_col = canonical_map.get("full_name")
        un_col = canonical_map.get("username")
        em_col = canonical_map.get("email")
        rl_col = canonical_map.get("role")
        cn_col = canonical_map.get("contact_no")
        pw_col = canonical_map.get("password")
        dp_col = canonical_map.get("department")
        tm_col = canonical_map.get("team")
        cp_col = canonical_map.get("campus")
        jd_col = canonical_map.get("joining_date")

        full_name = str(row.get(fn_col, '')).strip() if fn_col and pd.notna(row.get(fn_col)) else None
        user_name = str(row.get(un_col, '')).strip() if un_col and pd.notna(row.get(un_col)) else None
        email = str(row.get(em_col, '')).strip() if em_col and pd.notna(row.get(em_col)) else None
        user_role = str(row.get(rl_col, '')).strip() if rl_col and pd.notna(row.get(rl_col)) else None
        contact_no = str(row.get(cn_col, '')).strip() if cn_col and pd.notna(row.get(cn_col)) else None
        password = str(row.get(pw_col, "User@12321")).strip() if pw_col and pd.notna(row.get(pw_col)) else "User@12321"
        department = str(row.get(dp_col, '')).strip() if dp_col and pd.notna(row.get(dp_col)) else None
        team = str(row.get(tm_col, '')).strip() if tm_col and pd.notna(row.get(tm_col)) else None
        campus = str(row.get(cp_col, '')).strip() if cp_col and pd.notna(row.get(cp_col)) else None
        raw_joining_date = str(row.get(jd_col, '')).strip() if jd_col and pd.notna(row.get(jd_col)) else None

        # Check required fields
        if not full_name:
            err_msg = f"Row {row_num}, Column 'Full Name' is empty. Please fill in all required fields."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        if not user_name:
            err_msg = f"Row {row_num}, Column 'Username' is empty. Please fill in all required fields."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        if not email:
            err_msg = f"Row {row_num}, Column 'Email' is empty. Please fill in all required fields."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        if not user_role:
            err_msg = f"Row {row_num}, Column 'Role' is empty. Please fill in all required fields."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        if cn_col and not contact_no:
            err_msg = f"Row {row_num}, Column 'Phone Number' is empty. Please fill in all required fields."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        # Duplicate email check in file
        if email.lower() in seen_file_emails:
            err_msg = f"Row {row_num}: Email '{email}' is duplicated in your file."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        # Duplicate username check in file
        if user_name.lower() in seen_file_usernames:
            err_msg = f"Row {row_num}: Username '{user_name}' is duplicated in your file."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        # Parse joining date if provided
        joining_date = None
        if raw_joining_date:
            parsed = False
            for fmt in ("%d-%m-%Y", "%Y-%m-%d", "%d/%m/%Y", "%Y/%m/%d", "%d-%b-%Y"):
                try:
                    joining_date = datetime.strptime(raw_joining_date, fmt)
                    parsed = True
                    break
                except ValueError:
                    pass
            if not parsed:
                err_msg = f"Row {row_num}: Invalid date format for 'Joining Date'. Please use DD-MM-YYYY format."
                error_users_list.append(err_msg)
                df.at[index, 'status'] = f"Failed: {err_msg}"
                continue

        # Check existing email in DB
        if session.query(User).filter(User.email == email).first():
            err_msg = f"Row {row_num}: Email '{email}' is already registered."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        # Check existing username in DB
        if session.query(User).filter(User.user_name == user_name).first():
            err_msg = f"Row {row_num}: Username '{user_name}' is already taken."
            error_users_list.append(err_msg)
            df.at[index, 'status'] = f"Failed: {err_msg}"
            continue

        # Lookup department
        department_id = None
        if department:
            dept_rec = session.query(InstituteDepartment).filter(
                InstituteDepartment.institute_id == institute_id,
                InstituteDepartment.name.ilike(f"%{department}%")
            ).first()
            department_id = dept_rec.department_id if dept_rec else None

        # Lookup team
        team_id = None
        if team:
            team_rec = session.query(InstituteTeam).filter(
                InstituteTeam.institute_id == institute_id,
                InstituteTeam.name.ilike(f"%{team}%")
            ).first()
            team_id = team_rec.team_id if team_rec else None

        # Lookup campus
        campus_id, country_id, state_id, city_id = None, None, None, None
        if campus:
            campus_rec = session.query(InstituteCampus).filter(
                InstituteCampus.institute_id == institute_id,
                InstituteCampus.name.ilike(f"%{campus}%")
            ).first()
            if campus_rec:
                campus_id = campus_rec.campus_id
                country_id = campus_rec.country_id
                state_id = campus_rec.state_id
                city_id = campus_rec.city_id

        try:
            new_user = User(
                full_name=full_name,
                user_name=user_name,
                email=email,
                user_role=user_role,
                institute_id=institute_id,
                contact_no=contact_no,
                active_status=active_status,
                department_id=department_id,
                team_id=team_id,
                campus_id=campus_id,
                country_id=country_id,
                state_id=state_id,
                city_id=city_id,
                joining_date=joining_date,
                created_by=created_by
            )

            session.add(new_user)
            session.flush()
            user_id = new_user.user_id

            if str(user_role).lower() == 'admin':
                for page_access in page_data:
                    user_page_access = UserPageAccess(
                        user_id=user_id,
                        page_id=page_access.page_id,
                        can_view=True,
                        can_add=True,
                        can_edit=True,
                        can_delete=True
                    )
                    session.add(user_page_access)
                session.flush()

            password_hash = argon2.hash(password)
            cred_data = Credential(
                user_id=user_id,
                password_hash=password_hash
            )
            session.add(cred_data)
            session.commit()

            available_licenses -= 1
            seen_file_emails.add(email.lower())
            seen_file_usernames.add(user_name.lower())
            df.at[index, 'status'] = 'Success'
        except Exception as e:
            session.rollback()
            err_str = str(e).lower()
            if "unique constraint" in err_str or "already exists" in err_str:
                if "email" in err_str:
                    reason = f"Row {row_num}: Email '{email}' is already registered."
                elif "user_name" in err_str or "username" in err_str:
                    reason = f"Row {row_num}: Username '{user_name}' is already taken."
                else:
                    reason = f"Row {row_num}: Duplicate record found."
            else:
                reason = f"Row {row_num}: Failed to register user. Please check your inputs."

            error_users_list.append(reason)
            df.at[index, 'status'] = f"Failed: {reason}"

    if error_users_list:
        json_data = {
            "status": False,
            "statusMessage": error_users_list[0],
            "data": df.to_dict(orient='records')
        }
        return json_data, 400

    json_data = {
        "statusMessage": "User registered successfully",
        "status": True
    }
    return json_data, 200

def delete_user(user_id, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    user = session.query(User).filter_by(user_id=user_id).first()
    if not user:
        json_data = {
            "statusMessage": "User not found",
            "status": False
        }
        return json_data, 404
    user.is_deleted = 1
    user.updated_by = deleted_by
    user.updated_date = datetime.utcnow()
    try:
        session.commit()
        json_data = {
            "statusMessage": "User deleted successfully",
            "status": True
        }
        return json_data, 200
    except Exception as e:
        session.rollback()
        json_data = {
            "statusMessage": f"Failed to delete user: {str(e)}",
            "status": False
        }
        return json_data, 500
    finally:
        session.close()

def update_user_details(user_id, request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    data = request.json

    user = session.query(User).filter_by(user_id=user_id).first()
    if not user:
        json_data = {
            "statusMessage": "User not found",
            "status": False
        }
        return json_data, 404

    institute_id = data.get("institute_id", user.institute_id)
    department_id = data.get("department_id", user.department_id)
    team_id = data.get("team_id", user.team_id)
    campus_id = data.get("campus_id", user.campus_id)
    validation_error = _validate_user_institute_scope(
        session, institute_id, department_id, team_id, campus_id
    )
    if validation_error:
        return {"statusMessage": validation_error, "status": False}, 400
    _apply_campus_location(session, data, campus_id)
    
    # Update user details based on the provided data
    date_fields = ['joining_date']

    for field in date_fields:
        if field in data and data[field]:
            data[field] = datetime.strptime(data[field], "%Y-%m-%d")

    for key, value in data.items():
        if hasattr(user, key):
            setattr(user, key, value)

    user.updated_by = data.get("current_user", "system")
    user.updated_date = datetime.utcnow()

    # update user privileges
    page_data = data.get('page_access', [])
    for page_access in page_data:
        user_page_access = session.query(UserPageAccess).filter_by(user_id=user_id,page_id=page_access.get('page_key')).first()
        if user_page_access:
            user_page_access.can_view = page_access.get('view', user_page_access.can_view)
            user_page_access.can_add = page_access.get('add', user_page_access.can_add)
            user_page_access.can_edit = page_access.get('edit', user_page_access.can_edit)
            user_page_access.can_delete = page_access.get('delete', user_page_access.can_delete)
        else:
            new_access = UserPageAccess(
                user_id=user_id,
                page_id=page_access.get('page_key'),
                can_view=page_access.get('view', False),
                can_add=page_access.get('add', False),
                can_edit=page_access.get('edit', False),
                can_delete=page_access.get('delete', False)
            )
            session.add(new_access)
    try:
        session.commit()
        json_data = {
            "statusMessage": "User updated successfully",
            "status": True
        }
        return json_data, 200
    except Exception as e:
        session.rollback()
        json_data = {
            "statusMessage": f"Failed to update user: {str(e)}",
            "status": False
        }
        return json_data, 500

def get_user_details(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    page_number, page_size = get_pagination(request)
    filter = []
    args = getattr(request, "args", {})
    # Legacy users may have NULL here; only an explicit true/1 is deleted.
    filter.append(or_(User.is_deleted == 0, User.is_deleted.is_(None)))
    if args.get("institute_id"):
        filter.append(User.institute_id == args.get("institute_id"))
    if args.get("department"):
        filter.append(User.department_id == args.get("department"))
    if args.get("team"):
        filter.append(User.team_id == args.get("team"))
    if args.get("name"):
        filter.append(User.full_name.ilike(f"%{args.get('name')}%"))
    if args.get("active_status") is not None:
        filter.append(User.active_status == (1 if args.get("active_status") == 'true' else 0))
    if args.get("campus"):
        filter.append(User.campus_id == args.get("campus"))
    country_filter = str(args.get("country") or '').strip()
    if country_filter:
        # Country selectors now send Countries.country_id, but older user rows
        # may contain an ISO code from the previous registration UI. Accept
        # both forms and also use the user's campus country when the redundant
        # User.country_id value is missing.
        country = session.query(Country).filter(or_(
            Country.country_id == country_filter,
            Country.iso2 == country_filter,
            Country.iso3 == country_filter,
            Country.country_name == country_filter
        )).first()
        country_values = [country_filter]
        canonical_country_id = country_filter
        if country:
            canonical_country_id = country.country_id
            country_values = [value for value in (
                country.country_id, country.iso2, country.iso3, country.country_name
            ) if value]

        # Keep country-only filtering independent of the campus outer join.  A
        # user matches when either its own country value is compatible with the
        # selected country, or its assigned campus belongs to that country.
        # Using a campus-id subquery also avoids multiplying user rows when the
        # request is filtered by country only.
        campus_ids_for_country = session.query(InstituteCampus.campus_id).filter(
            InstituteCampus.country_id == canonical_country_id
        )
        filter.append(or_(
            User.country_id.in_(country_values),
            User.campus_id.in_(campus_ids_for_country)
        ))
    state_filter = str(args.get("state") or '').strip()
    if state_filter:
        filter.append(or_(
            User.state_id == state_filter,
            InstituteCampus.state_id == state_filter
        ))
    city_filter = str(args.get("city") or '').strip()
    if city_filter:
        city = session.query(City).filter(or_(
            City.city_id == city_filter,
            City.city_name == city_filter
        )).first()
        city_id = city.city_id if city else city_filter
        filter.append(or_(
            User.city_id == city_id,
            InstituteCampus.city_id == city_id,
            InstituteCampus.city_name.ilike(f"%{city_filter}%")
        ))

    query = session.query(User)
    if city_filter or state_filter:
        query = query.outerjoin(InstituteCampus, User.campus_id == InstituteCampus.campus_id)
    filtered_query = query.filter(*filter)
    user_details = filtered_query.order_by(User.created_date).offset((page_number - 1) * page_size).limit(page_size).all()
    total_count = filtered_query.count()
    
    result = []
    for user in user_details:
        # Fetch institute_name based on institute_id
        institute_name = None
        if user.institute_id:
            institute = session.query(Institute).filter_by(institute_id=user.institute_id).first()
            if institute:
                institute_name = institute.name

        department_name = None
        if user.department_id:
            department = session.query(InstituteDepartment).filter_by(department_id=user.department_id).first()
            if department:
                department_name = department.name

        team_name = None
        if user.team_id:
            team = session.query(InstituteTeam).filter_by(team_id=user.team_id).first()
            if team:
                team_name = team.name
        # get campus 
        campus_name = None
        campus = None
        if user.campus_id:
            campus = session.query(InstituteCampus).filter_by(campus_id=user.campus_id).first()
            if campus:
                campus_name = campus.name
        # get countrt, state and city data also
        country_name = None
        if user.country_id:
            country = session.query(Country).filter_by(country_id=user.country_id).first()
            if country:
                country_name = country.country_name
        
        state_name = None
        if user.state_id:
            state = session.query(State).filter_by(state_id=user.state_id).first()
            if state:
                state_name = state.state_name

        city_name = campus.city_name if campus else None
        if user.city_id:
            city = session.query(City).filter_by(city_id=user.city_id).first()
            if city:
                city_name = city.city_name

        # get created user details
        created_user_name = None
        if user.created_by:
            created_user = session.query(User).filter_by(user_id=user.created_by).first()
            if created_user:
                created_user_name = created_user.full_name
        # updated user details
        updated_user_name = None
        if user.updated_by:
            updated_user = session.query(User).filter_by(user_id=user.updated_by).first()
            if updated_user:
                updated_user_name = updated_user.full_name

        user_page_accesses = session.query(UserPageAccess).filter_by(user_id=user.user_id).all()
        page_access_list = []
        for access in user_page_accesses:
            page = session.query(Page).filter_by(page_id=access.page_id).first()
            page_name = page.page_name if page else None
            page_access_list.append({
                "page_id": access.page_id,
                "page_name": page_name,
                "can_view": access.can_view,
                "can_add": access.can_add,
                "can_edit": access.can_edit,
                "can_delete": access.can_delete
            })
        user_info = {
            "user_id": user.user_id,
            "full_name": user.full_name,
            "user_name": user.user_name,
            "user_role": user.user_role,
            "institute": {
                "institute_id": user.institute_id,
                "institute_name": institute_name,
            },
            "department": {"department_id": user.department_id, "department_name": department_name},
            "team": {"team_id": user.team_id, "team_name": team_name},
            "campus": {"campus_id": user.campus_id, "campus_name": campus_name},
            "country": {"country_id": user.country_id, "country_name": country_name},
            "state": {"state_id": user.state_id, "state_name": state_name},
            "city": {"city_id": user.city_id, "city_name": city_name},
            "user_privileges": page_access_list,
            "email": user.email,
            "contact_no": user.contact_no,
            "joining_date": user.joining_date.strftime("%d-%m-%Y") if user.joining_date else None,
            "active_status": True if user.active_status else False,
            "created_by": created_user_name,
            "created_date": user.created_date.strftime("%d-%m-%Y") if user.created_date else None,
            "updated_by": updated_user_name,
            "updated_date": user.updated_date.strftime("%d-%m-%Y") if user.updated_date else None
        }
        result.append(user_info)
    json_data = {
        "statusMessage": "User details fetched successfully",
        "status": True,
        "data": result,
        "total": len(result),
        "totalCount": total_count
    }
    return json_data, 200

def get_user_list(request, current_user=None):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    filter = []
    args = getattr(request, "args", {})
    # Legacy users may have NULL here; only an explicit true/1 is deleted.
    filter.append(or_(User.is_deleted == 0, User.is_deleted.is_(None)))

    current_role = getattr(current_user, "user_role", None) if current_user else None
    if current_user and current_role not in ("super_admin", "superadmin", "super-admin"):
        if current_role == "admin":
            filter.append(User.institute_id == current_user.institute_id)
        else:
            filter.append(User.user_id == current_user.user_id)
    elif args.get("institute_id"):
        filter.append(User.institute_id == args.get("institute_id"))
    if args.get("department_id"):
        filter.append(User.department_id == args.get("department_id"))
    if args.get("team_id"):
        filter.append(User.team_id == args.get("team_id"))
    if args.get("name"):
        filter.append(User.full_name.ilike(f"%{args.get('name')}%"))
    if args.get("active_status") is not None:
        filter.append(User.active_status == (1 if args.get("active_status") == 'true' else 0))
    if args.get("campus_id"):
        filter.append(User.campus_id == args.get("campus_id"))

    user_details = session.query(User).filter(*filter).all()
    result = []
    for user in user_details:
        # Fetch institute_name based on institute_id
        institute_name = None
        if user.institute_id:
            institute = session.query(Institute).filter_by(institute_id=user.institute_id).first()
            if institute:
                institute_name = institute.name
        # Fetch department_name based on department_id
        department_name = None
        if user.department_id:
            department = session.query(InstituteDepartment).filter_by(department_id=user.department_id).first()
            if department:
                department_name = department.name
        # Fetch team_name based on team_id
        team_name = None
        if user.team_id:
            team = session.query(InstituteTeam).filter_by(team_id=user.team_id).first()
            if team:
                team_name = team.name
        user_info = {
            "user_id": user.user_id,
            "full_name": user.full_name,
            "user_name": user.user_name,
            "user_role": user.user_role,
            "institute": {"institute_id": user.institute_id,"institute_name": institute_name,},
            "department": {"department_id": user.department_id, "department_name": department_name},
            "team": {"team_id": user.team_id, "team_name": team_name},
            "email": user.email,
            "active_status": True if user.active_status else False
        }
        result.append(user_info)
    json_data = {
        "statusMessage": "User details fetched successfully",
        "status": True,
        "data": result,
        "total": len(result)
    }
    return json_data, 200

def get_user_limit(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    args = getattr(request, "args", {})
    institute_id = args.get("institute_id")

    max_user_limit = session.query(Institute).filter_by(institute_id=institute_id).first().max_users

    already_assigned = session.query(User).filter_by(institute_id=institute_id, active_status=1,is_deleted=0).count()
    available_licenses = max_user_limit - already_assigned

    json_data = {
       "statusMessage": "User limit fetched successfully",
       "status": True,
       "data": {
       "max_user_limit": max_user_limit,
       "available_licenses": available_licenses,
       "already_assigned": already_assigned,}
       }
    return json_data, 200

def get_user_page_access(user_id):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    #  get details from Page, UserPageAccess
    access_details = session.query(
        Page.page_id,
        Page.page_name,
        UserPageAccess.can_view,
        UserPageAccess.can_add,
        UserPageAccess.can_edit,
        UserPageAccess.can_delete
    ).outerjoin(
        UserPageAccess,
        (UserPageAccess.page_id == Page.page_id) & (UserPageAccess.user_id == user_id)
    ).all()

    result = []
    for access in access_details:
        result.append({
            "page_id": access.page_id,
            "page_name": access.page_name,
            "can_view": access.can_view if access.can_view is not None else False,
            "can_add": access.can_add if access.can_add is not None else False,
            "can_edit": access.can_edit if access.can_edit is not None else False,
            "can_delete": access.can_delete if access.can_delete is not None else False
        })

    json_data = {
        "statusMessage": "User page access fetched successfully",
        "status": True,
        "data": result
    }
    return json_data, 200

def manage_user(action, uuid, updated_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    if action not in ["activate", "deactivate"]:
        return {"statusMessage": f"Invalid action '{action}'. Use 'activate' or 'deactivate'.", "status": False}, 400
    active_status = 1 if action == "activate" else 0
    user = session.query(User).filter_by(user_id=uuid).first()
    if not user:
        return {"statusMessage": "User not found", "status": False}, 404
    user.active_status = active_status
    user.updated_by = updated_by
    user.updated_date = datetime.utcnow()
    session.commit()
    return {"statusMessage": f"User {'activated' if active_status else 'deactivated'} successfully", "status": True}, 200
