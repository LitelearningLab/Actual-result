from db.models import InstituteDepartment, InstituteTeam
from db.db import SQLiteDB

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