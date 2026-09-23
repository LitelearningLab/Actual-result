from db.models import InstituteDepartment, InstituteTeam, Subject, Institute
from db.db import SQLiteDB
from datetime import datetime
from sqlalchemy import func, or_, text
import uuid

def ensure_subject_table(session):
    try:
        session.execute(text("""
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Subjects' AND xtype='U')
            BEGIN
                CREATE TABLE Subjects (
                    subject_id NVARCHAR(50) PRIMARY KEY,
                    institute_id NVARCHAR(50) NOT NULL,
                    subject_name NVARCHAR(255) NOT NULL,
                    created_by NVARCHAR(255) NULL,
                    created_date DATETIME DEFAULT GETUTCDATE(),
                    updated_by NVARCHAR(255) NULL,
                    updated_date DATETIME NULL,
                    active_status INT DEFAULT 1,
                    is_deleted BIT DEFAULT 0
                );
                CREATE INDEX IX_Subjects_Institute ON Subjects(institute_id);
            END;
        """))
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Error ensuring Subjects table: {e}", flush=True)

def get_institute_department_details(institute_id, filter_by_institute=False):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:
        if institute_id:
            ids = [i.strip() for i in str(institute_id).split(',') if i.strip()]
            departments = session.query(InstituteDepartment).filter(InstituteDepartment.institute_id.in_(ids)).all()
        elif filter_by_institute:
            departments = []
        else:
            departments = session.query(InstituteDepartment).all()
            
        json_data = []
        for department in departments:
            json_data.append({
                "id": department.department_id,
                "name": department.name
            })
        json_data = {
            "statusMessage": "Institute department details fetched successfully",
            "status": True,
            "data": json_data
        }
        return json_data, 200
    except Exception as e:
        print(f"Error fetching institute department details: {e}")
        json_data = {
            "statusMessage": "Institute department details not found",
            "status": False
        }
        return json_data, 404
    finally:
        session.close()

def get_institute_team_details(institute_id, filter_by_institute=False):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:
        if institute_id:
            ids = [i.strip() for i in str(institute_id).split(',') if i.strip()]
            teams = session.query(InstituteTeam).filter(InstituteTeam.institute_id.in_(ids)).all()
        elif filter_by_institute:
            teams = []
        else:
            teams = session.query(InstituteTeam).all()
            
        json_data = []
        for team in teams:
            dept_id = team.department_id
            dept_name = None
            if not dept_id and team.institute_id:
                # Fallback: check if institute has a department to bind
                dept_obj = session.query(InstituteDepartment).filter_by(institute_id=team.institute_id).first()
                if dept_obj:
                    team.department_id = dept_obj.department_id
                    dept_id = dept_obj.department_id
                    try:
                        session.commit()
                    except Exception:
                        session.rollback()
            if dept_id:
                dept_obj = session.query(InstituteDepartment).filter_by(department_id=dept_id).first()
                if dept_obj:
                    dept_name = dept_obj.name

            json_data.append({
                "id": team.team_id,
                "name": team.name,
                "department_id": dept_id,
                "department_name": dept_name
            })
        json_data = {
            "statusMessage": "User details fetched successfully",
            "status": True,
            "data": json_data
        }
        return json_data, 200
    except Exception as e:
        print(f"Error fetching institute team details: {e}")
        json_data = {
            "statusMessage": "Institute team details not found",
            "status": False
        }
        return json_data, 404
    finally:
        session.close()

def get_institute_subject_details(institute_id, filter_by_institute=False, active_only=False):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_subject_table(session)
        query = session.query(Subject).filter(
            or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
        )
        if institute_id:
            ids = [i.strip() for i in str(institute_id).split(',') if i.strip()]
            query = query.filter(Subject.institute_id.in_(ids))
        elif filter_by_institute:
            query = query.filter(Subject.subject_id == None)

        if active_only:
            query = query.filter(or_(Subject.active_status == 1, Subject.active_status.is_(None)))

        subjects = query.order_by(Subject.subject_name.asc()).all()
        json_data = []
        for s in subjects:
            is_active = bool(s.active_status in (1, True, '1')) if s.active_status is not None else True
            json_data.append({
                "id": s.subject_id,
                "subject_id": s.subject_id,
                "name": s.subject_name,
                "subject_name": s.subject_name,
                "institute_id": s.institute_id,
                "active_status": 1 if is_active else 0,
                "active": is_active,
                "created_date": s.created_date.isoformat() if s.created_date else None,
                "created_by": s.created_by
            })
        return {
            "statusMessage": "Subjects fetched successfully",
            "status": True,
            "data": json_data
        }, 200
    except Exception as e:
        print(f"Error fetching institute subjects: {e}", flush=True)
        return {
            "statusMessage": f"Failed to fetch subjects: {str(e)}",
            "status": False
        }, 500
    finally:
        session.close()

def add_institute_subject(data, current_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_subject_table(session)
        institute_id = str(data.get('institute_id') or '').strip()
        subject_name = str(data.get('subject_name') or data.get('name') or '').strip()

        if not institute_id:
            return {"statusMessage": "Institute ID is required.", "status": False}, 400
        if not subject_name:
            return {"statusMessage": "Subject name is required.", "status": False}, 400

        # Validate institute exists
        institute = session.query(Institute).filter_by(institute_id=institute_id).first()
        if not institute:
            return {"statusMessage": "Selected institute was not found.", "status": False}, 404

        # Check duplicate (case-insensitive) under this institute
        existing = session.query(Subject).filter(
            Subject.institute_id == institute_id,
            func.lower(Subject.subject_name) == subject_name.lower(),
            or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
        ).first()

        if existing:
            return {
                "statusMessage": f"Subject '{subject_name}' already exists for this institute.",
                "status": False
            }, 400

        new_subject = Subject(
            institute_id=institute_id,
            subject_name=subject_name,
            created_by=str(current_user_id or data.get('created_by') or ''),
            created_date=datetime.utcnow(),
            active_status=1,
            is_deleted=0
        )
        session.add(new_subject)
        session.commit()

        return {
            "statusMessage": "Subject added successfully",
            "status": True,
            "data": {
                "subject_id": new_subject.subject_id,
                "subject_name": new_subject.subject_name,
                "institute_id": new_subject.institute_id
            }
        }, 201
    except Exception as e:
        session.rollback()
        print(f"Error adding subject: {e}", flush=True)
        return {"statusMessage": f"Failed to add subject: {str(e)}", "status": False}, 500
    finally:
        session.close()

def update_institute_subject(subject_id, data, current_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_subject_table(session)
        subject = session.query(Subject).filter(
            Subject.subject_id == subject_id,
            or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
        ).first()

        if not subject:
            return {"statusMessage": "Subject not found.", "status": False}, 404

        if 'subject_name' in data or 'name' in data:
            new_name = str(data.get('subject_name') or data.get('name') or '').strip()
            if not new_name:
                return {"statusMessage": "Subject name cannot be empty.", "status": False}, 400
            
            # Check duplicate if name changed
            if new_name.lower() != subject.subject_name.lower():
                existing = session.query(Subject).filter(
                    Subject.institute_id == subject.institute_id,
                    Subject.subject_id != subject_id,
                    func.lower(Subject.subject_name) == new_name.lower(),
                    or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
                ).first()
                if existing:
                    return {
                        "statusMessage": f"Subject '{new_name}' already exists for this institute.",
                        "status": False
                    }, 400
            subject.subject_name = new_name

        if 'active_status' in data:
            val = data.get('active_status')
            subject.active_status = 1 if val in (1, True, '1', 'true', 'active') else 0
        elif 'active' in data:
            val = data.get('active')
            subject.active_status = 1 if val in (1, True, '1', 'true') else 0

        subject.updated_by = str(current_user_id or data.get('updated_by') or '')
        subject.updated_date = datetime.utcnow()
        session.commit()

        return {
            "statusMessage": "Subject updated successfully",
            "status": True,
            "data": {
                "subject_id": subject.subject_id,
                "subject_name": subject.subject_name,
                "active_status": subject.active_status
            }
        }, 200
    except Exception as e:
        session.rollback()
        print(f"Error updating subject: {e}", flush=True)
        return {"statusMessage": f"Failed to update subject: {str(e)}", "status": False}, 500
    finally:
        session.close()

def delete_institute_subject(subject_id, current_user_id=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Database connection failed", "status": False}, 500

    try:
        ensure_subject_table(session)
        subject = session.query(Subject).filter(
            Subject.subject_id == subject_id,
            or_(Subject.is_deleted == False, Subject.is_deleted == 0, Subject.is_deleted.is_(None))
        ).first()

        if not subject:
            return {"statusMessage": "Subject not found.", "status": False}, 404

        subject.is_deleted = 1
        subject.updated_by = str(current_user_id or '')
        subject.updated_date = datetime.utcnow()
        session.commit()

        return {"statusMessage": "Subject deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        print(f"Error deleting subject: {e}", flush=True)
        return {"statusMessage": f"Failed to delete subject: {str(e)}", "status": False}, 500
    finally:
        session.close()