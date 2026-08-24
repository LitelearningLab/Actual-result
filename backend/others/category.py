from db.models import Categories, CategoriesDepartments, CategoriesTeams, Institute, User, InstituteDepartment, InstituteTeam, Question, QuestionMapping
from db.db import SQLiteDB
from datetime import datetime
# pyrefly: ignore [missing-import]
from sqlalchemy import func, text, or_
# pyrefly: ignore [missing-import]
from sqlalchemy.exc import IntegrityError
import uuid

def ensure_category_columns(session):
    try:
        session.execute(text("""
            IF COL_LENGTH('Categories', 'is_deleted') IS NULL
            BEGIN
                ALTER TABLE Categories ADD is_deleted BIT NULL;
            END;

            IF COL_LENGTH('Categories', 'name') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN name NVARCHAR(255) NULL;
            END;

            IF COL_LENGTH('Categories', 'description') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN description NVARCHAR(MAX) NULL;
            END;

            IF COL_LENGTH('Categories', 'type') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN type NVARCHAR(100) NULL;
            END;

            IF COL_LENGTH('Categories', 'answer_by') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN answer_by NVARCHAR(100) NULL;
            END;

            IF COL_LENGTH('Categories', 'evaluation') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN evaluation NVARCHAR(100) NULL;
            END;

            IF COL_LENGTH('Categories', 'created_by') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN created_by NVARCHAR(255) NULL;
            END;

            IF COL_LENGTH('Categories', 'updated_by') IS NOT NULL
            BEGIN
                ALTER TABLE Categories ALTER COLUMN updated_by NVARCHAR(255) NULL;
            END;

            IF COL_LENGTH('CategoriesDepartments', 'name') IS NOT NULL
            BEGIN
                ALTER TABLE CategoriesDepartments ALTER COLUMN name NVARCHAR(255) NULL;
            END;

            IF COL_LENGTH('CategoriesTeams', 'name') IS NOT NULL
            BEGIN
                ALTER TABLE CategoriesTeams ALTER COLUMN name NVARCHAR(255) NULL;
            END;
        """))
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Error expanding category table columns: {e}", flush=True)

def _resolve_institute_scope(request):
    args = getattr(request, "args", {})
    institute_id = str(args.get("institute_id") or args.get("institute") or "").strip()
    if institute_id:
        return institute_id
    headers = getattr(request, "headers", {})
    header_scope = str(headers.get("X-Institute-Id") or headers.get("X-Global-Institute-Id") or "").strip()
    return header_scope


def get_categories_list(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    filter = []
    args = getattr(request, "args", {})
    filter.append(or_(Categories.is_deleted == False, Categories.is_deleted == 0, Categories.is_deleted.is_(None)))
    if args.get("include_inactive") != "true":
        filter.append(or_(Categories.active_status == 1, Categories.active_status.is_(None)))
    institute_scope = _resolve_institute_scope(request)
    if institute_scope:
        inst_val = str(institute_scope).strip()
        if ',' in inst_val:
            filter.append(Categories.institute_id.in_([i.strip() for i in inst_val.split(',') if i.strip()]))
        else:
            filter.append(Categories.institute_id == inst_val)
    if args.get("created_after"):
        filter.append(Categories.created_date >= args.get("created_after"))
    if args.get("created_before"):
        filter.append(Categories.created_date <= args.get("created_before"))
    if args.get("departments"):
        departments = [d.strip() for d in args.get("departments").split(",") if d.strip()]
        if departments:
            dept_cat_ids = [d.category_id for d in session.query(CategoriesDepartments).filter(CategoriesDepartments.department_id.in_(departments)).all()]
            all_dept_cat_ids = [c[0] for c in session.query(CategoriesDepartments.category_id).distinct().all()]
            filter.append(or_(Categories.category_id.in_(dept_cat_ids), ~Categories.category_id.in_(all_dept_cat_ids)))
    if args.get("teams"):
        teams = [t.strip() for t in args.get("teams").split(",") if t.strip()]
        if teams:
            team_cat_ids = [t.category_id for t in session.query(CategoriesTeams).filter(CategoriesTeams.team_id.in_(teams)).all()]
            all_team_cat_ids = [t[0] for t in session.query(CategoriesTeams.category_id).distinct().all()]
            filter.append(or_(Categories.category_id.in_(team_cat_ids), ~Categories.category_id.in_(all_team_cat_ids)))
    if args.get("type"):
        category_types = [value.strip() for value in args.get("type").split(",") if value.strip()]
        if category_types:
            filter.append(Categories.type.in_(category_types))
    if args.get("access_scope") == "owned_or_public":
        current_user_id = args.get("current_user_id")
        if current_user_id:
            filter.append(or_(Categories.created_by == current_user_id, Categories.public_access == 1))
    else:
        if args.get("created_by") is not None:
            filter.append(Categories.created_by == args.get("created_by"))
        if args.get("public_access") is not None:
            val = str(args.get("public_access")).lower()
            if val in ['true', '1']:
                filter.append(Categories.public_access == 1)
            elif val in ['false', '0']:
                filter.append(Categories.public_access == 0)

    categories = session.query(Categories).filter(*filter).all()
    categories_list =[]
    for category in categories:
        categories_list.append({
            "id": category.category_id,
            "name": category.name,
            "description": category.description,
            "type": category.type,
            "created_date": category.created_date.isoformat() if category.created_date else None,
            "created_by": category.created_by,
            "public_access": getattr(category, "public_access", None)
        })
    json_data = {
        "statusMessage": "Categories retrieved successfully",
        "status": True,
        "data": categories_list
    }
    return json_data, 200

def get_category_details(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    ensure_category_columns(session)

    filter = []
    args = getattr(request, "args", {})
    filter.append(or_(Categories.is_deleted == False, Categories.is_deleted == 0, Categories.is_deleted.is_(None)))
    if args.get("category_id"):
        filter.append(Categories.category_id == args.get("category_id"))
    institute_id = _resolve_institute_scope(request)
    if institute_id:
        inst_val = str(institute_id).strip()
        if ',' in inst_val:
            filter.append(Categories.institute_id.in_([i.strip() for i in inst_val.split(',') if i.strip()]))
        else:
            filter.append(Categories.institute_id == inst_val)
    if args.get("departments"):
        departments = args.get("departments").split(",")
        filter.append(CategoriesDepartments.department_id.in_(departments))
    if args.get("teams"):
        teams = args.get("teams").split(",")
        filter.append(CategoriesTeams.team_id.in_(teams))
    if args.get("name"):
        category_names = [
            name.strip()
            for name in args.get("name").split(",")
            if name.strip()
        ]
        if category_names:
            filter.append(or_(*[
                Categories.name.ilike(f"%{name}%")
                for name in category_names
            ]))
    if args.get("active_status") is not None:
        filter.append(Categories.active_status == (1 if args.get("active_status") == 'true' else 0))
    if args.get("public_access") is not None:
        filter.append(Categories.public_access == (1 if args.get("public_access") == 'true' else 0))
    if args.get("created_by") is not None:
        filter.append(Categories.created_by == args.get("created_by"))
    if args.get("created_after"):
        filter.append(Categories.created_date >= args.get("created_after"))
    if args.get("created_before"):
        filter.append(Categories.created_date <= args.get("created_before"))

    if args.get("type"):
        t_val = str(args.get("type")).strip().lower()
        types = [t.strip() for t in t_val.split(",") if t.strip()] if "," in t_val else [t_val]
        q_types = []
        if "objective" in types:
            q_types.extend(["choose", "multi", "fill", "objective"])
        if "descriptive" in types:
            q_types.extend(["descriptive", "paragraph"])

        matching_cat_ids = [
            r[0] for r in session.query(QuestionMapping.category_id)
            .join(Question, Question.question_id == QuestionMapping.question_id)
            .filter(Question.question_type.in_(q_types)).all()
        ]

        type_conditions = [Categories.type.ilike(f"%{tp}%") for tp in types]
        if matching_cat_ids:
            type_conditions.append(Categories.category_id.in_(matching_cat_ids))

        filter.append(or_(*type_conditions))



    query = session.query(Categories)
    if args.get("departments"):
        query = query.join(CategoriesDepartments, Categories.category_id == CategoriesDepartments.category_id)
    if args.get("teams"):
        query = query.join(CategoriesTeams, Categories.category_id == CategoriesTeams.category_id)
    category_details = query.filter(*filter).order_by(Categories.created_date.desc()).distinct().all()
    result = []
    for category in category_details:
        # Fetch institute_name based on institute_id
        institute_name = None
        if category.institute_id:
            institute = session.query(Institute).filter_by(institute_id=category.institute_id).first()
            if institute:
                institute_name = institute.name
        # Fetch department_name based on department_id
        department_details = {}
        if category.category_id:
            department = session.query(CategoriesDepartments).filter_by(category_id=category.category_id).all()
            if department:
                department_list = []
                for dept in department:
                    # get department name from InstituteDepartment table
                    department_master = session.query(InstituteDepartment).filter_by(department_id=dept.department_id).first()
                    if department_master:
                        department_list.append({"department_id": dept.department_id, "department_name": department_master.name})
                department_details = department_list
            # Fetch team_name based on team_id
            team_details = {}
            team = session.query(CategoriesTeams).filter_by(category_id=category.category_id).all()
            if team:
                team_list = []
                for t in team:
                    # get team name from InstituteTeam table
                    team_master = session.query(InstituteTeam).filter_by(team_id=t.team_id).first()
                    if team_master:
                        team_list.append({"team_id": t.team_id, "team_name": team_master.name})
                team_details = team_list
        # get created_by and updated_by names
        created_by_name = None
        updated_by_name = None
        if category.created_by:
            created_by = session.query(User).filter_by(user_id=category.created_by).first()
            if created_by:
                created_by_name = created_by.full_name
        if category.updated_by:
            updated_by = session.query(User).filter_by(user_id=category.updated_by).first()
            if updated_by:
                updated_by_name = updated_by.full_name

        category_info = {
            "category_id": category.category_id,
            "name": category.name,
            "description": category.description,
            "institute": {
                "institute_id": category.institute_id,
                "institute_name": institute_name,
            },
            "type": category.type,
            "answer_by": category.answer_by,
            "evaluation": category.evaluation,
            "mark_each_question": category.mark_each_question,
            "departments": department_details,
            "teams": team_details,
            "active_status": True if category.active_status else False,
            "public_access": True if category.public_access else False,
            "created_by": created_by_name,
            "created_date": category.created_date,
            "updated_by": updated_by_name,
            "updated_date": category.updated_date
        }
        result.append(category_info)
    json_data = {
        "statusMessage": "Category details fetched successfully",
        "status": True,
        "data": result,
        "total": len(result)
    }
    return json_data, 200

def add_categories(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_category_columns(session)
        category_data = request.get_json(silent=True) or {}
        if not category_data.get("name"):
            return {"statusMessage": "Category name is required", "status": False}, 400
        if not category_data.get("institute_id"):
            return {"statusMessage": "Institute is required", "status": False}, 400
        if not category_data.get("type"):
            return {"statusMessage": "Category type is required", "status": False}, 400

        institute_id = str(category_data.get("institute_id"))
        try:
            uuid.UUID(institute_id)
        except (TypeError, ValueError):
            return {"statusMessage": "Please select a valid institute.", "status": False}, 400

        institute = session.query(Institute).filter_by(institute_id=institute_id).first()
        if not institute:
            return {"statusMessage": "Selected institute was not found.", "status": False}, 400

        department_ids = [str(d) for d in (category_data.get("departments", []) or []) if d]
        team_ids = [str(t) for t in (category_data.get("teams", []) or []) if t]

        if department_ids:
            valid_departments = session.query(InstituteDepartment.department_id).filter(
                InstituteDepartment.institute_id == institute_id,
                InstituteDepartment.department_id.in_(department_ids)
            ).all()
            valid_department_ids = {row[0] for row in valid_departments}
            if any(d not in valid_department_ids for d in department_ids):
                return {"statusMessage": "One or more selected departments are invalid for this institute.", "status": False}, 400

        if team_ids:
            valid_teams = session.query(InstituteTeam.team_id).filter(
                InstituteTeam.institute_id == institute_id,
                InstituteTeam.team_id.in_(team_ids)
            ).all()
            valid_team_ids = {row[0] for row in valid_teams}
            if any(t not in valid_team_ids for t in team_ids):
                return {"statusMessage": "One or more selected teams are invalid for this institute.", "status": False}, 400

        created_by = category_data.get("created_by", "")
        created_date = datetime.utcnow()
        new_category = Categories(
            name=category_data.get("name"),
            description=category_data.get("description"),
            institute_id=institute_id,
            type=category_data.get("type"),
            answer_by=category_data.get("who_inputs",""),
            evaluation=category_data.get("evaluation",""),
            active_status= 1 if category_data.get("status") == 'true' else 0,
            mark_each_question=category_data.get("mark_for_each_question",1),
            public_access= 1 if category_data.get("public_access") == True else 0,
            created_by=created_by,
            created_date=created_date
        )
        session.add(new_category)
        session.commit()
        category_id = new_category.category_id
        for department_id in department_ids:
            category_department = CategoriesDepartments(
                category_id=category_id,
                department_id=department_id,
                created_by=created_by,
                created_date=created_date
            )
            session.add(category_department)
        for team_id in team_ids:
            category_team = CategoriesTeams(
                category_id=category_id,
                team_id=team_id,
                created_by=created_by,
                created_date=created_date
            )
            session.add(category_team)
        session.commit()
        json_data = {
            "statusMessage": "Category added successfully",
            "status": True
        }
        return json_data, 201
    except IntegrityError as e:
        session.rollback()
        print(f"Integrity error adding category: {e}")
        return {"statusMessage": "Category could not be saved because one of the selected values is invalid.", "status": False}, 400
    except Exception as e:
        session.rollback()
        print(f"Error adding category: {e}")
        return {"statusMessage": f"Failed to add category: {str(e)}", "status": False}, 500

def update_category(category_id, request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_category_columns(session)
        data = request.get_json(silent=True) or {}
        category = session.query(Categories).filter_by(category_id=category_id).first()
        if not category:
            return {"statusMessage": "Category not found", "status": False}, 404

        institute_id = str(data.get('institute_id') or category.institute_id or '')
        if institute_id:
            try:
                uuid.UUID(institute_id)
            except (TypeError, ValueError):
                return {"statusMessage": "Please select a valid institute.", "status": False}, 400

            institute = session.query(Institute).filter_by(institute_id=institute_id).first()
            if not institute:
                return {"statusMessage": "Selected institute was not found.", "status": False}, 400

        dept_ids = [str(d) for d in (data.get('departments', []) or []) if d]
        team_ids = [str(t) for t in (data.get('teams', []) or []) if t]

        if institute_id and dept_ids:
            valid_departments = session.query(InstituteDepartment.department_id).filter(
                InstituteDepartment.institute_id == institute_id,
                InstituteDepartment.department_id.in_(dept_ids)
            ).all()
            valid_department_ids = {row[0] for row in valid_departments}
            if any(d not in valid_department_ids for d in dept_ids):
                return {"statusMessage": "One or more selected departments are invalid for this institute.", "status": False}, 400

        if institute_id and team_ids:
            valid_teams = session.query(InstituteTeam.team_id).filter(
                InstituteTeam.institute_id == institute_id,
                InstituteTeam.team_id.in_(team_ids)
            ).all()
            valid_team_ids = {row[0] for row in valid_teams}
            if any(t not in valid_team_ids for t in team_ids):
                return {"statusMessage": "One or more selected teams are invalid for this institute.", "status": False}, 400

        # update fields
        category.name = data.get('name', category.name)
        category.description = data.get('description', category.description)
        category.type = data.get('type', category.type)
        category.answer_by = data.get('who_inputs', category.answer_by)
        category.evaluation = data.get('evaluation', category.evaluation)
        category.updated_by = data.get('updated_by', category.updated_by)
        category.updated_date = datetime.utcnow()
        # status mapping
        if 'status' in data:
            category.active_status = 1 if str(data.get('status')).lower() in ['true','1','yes'] else 0
        if 'mark_for_each_question' in data:
            category.mark_each_question = data.get('mark_for_each_question')
        if 'public_access' in data:
            category.public_access = 1 if data.get('public_access') else 0
        if 'institute_id' in data:
            category.institute_id = institute_id

        session.query(CategoriesDepartments).filter_by(category_id=category_id).delete()
        session.query(CategoriesTeams).filter_by(category_id=category_id).delete()
        for d in dept_ids:
            cd = CategoriesDepartments(category_id=category_id, department_id=d)
            session.add(cd)
        for t in team_ids:
            ct = CategoriesTeams(category_id=category_id, team_id=t)
            session.add(ct)
        session.commit()
        return {"statusMessage": "Category updated successfully", "status": True}, 200
    except IntegrityError as e:
        session.rollback()
        print(f"Integrity error updating category: {e}")
        return {"statusMessage": "Category could not be updated because one of the selected values is invalid.", "status": False}, 400
    except Exception as e:
        session.rollback()
        print(f"Error updating category: {e}")
        return {"statusMessage": f"Failed to update category: {str(e)}", "status": False}, 500

def delete_category(category_id, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    category = session.query(Categories).filter_by(category_id=category_id).first()
    if not category:
        return {"statusMessage": "Category not found", "status": False}, 404
    
    try:
        # # remove related department/team links first
        # try:
        #     session.query(CategoriesDepartments).filter_by(category_id=category_id).delete()
        # except Exception:
        #     pass
        # try:
        #     session.query(CategoriesTeams).filter_by(category_id=category_id).delete()
        # except Exception:
        #     pass
        # session.delete(category)
        category.is_deleted = 1
        category.active_status = 0
        category.updated_by = deleted_by
        category.updated_date = datetime.utcnow()
        session.commit()
        return {"statusMessage": "Category deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        return {"statusMessage": f"Error deleting category: {str(e)}", "status": False}, 500

def manage_category(action, uuid, updated_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    # support activate/deactivate/delete
    if action not in ["activate", "deactivate", "delete"]:
        return {"statusMessage": f"Invalid action '{action}'. Use 'activate', 'deactivate' or 'delete'.", "status": False}, 400
    category = session.query(Categories).filter_by(category_id=uuid).first()
    if not category:
        return {"statusMessage": "Category not found", "status": False}, 404
    if action == 'delete':
        category.is_deleted = 1
        category.active_status = 0
        category.updated_by = updated_by
        category.updated_date = datetime.utcnow()
        session.commit()
        return {"statusMessage": "Category deleted", "status": True}, 200
    # activate/deactivate
    category.active_status = 1 if action == 'activate' else 0
    category.updated_by = updated_by
    category.updated_date = datetime.utcnow()
    session.commit()
    return {"statusMessage": f"Category {'activated' if category.active_status else 'deactivated'} successfully", "status": True}, 200
