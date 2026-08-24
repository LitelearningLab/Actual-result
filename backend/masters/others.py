from db.db import SQLiteDB
from db.models import Page, UserPageAccess

PAGE_NAME_MAP = {
    "Categories": "Question Banks",
    "Category": "Question Banks",
    "Exams": "Manage test",
    "Exam": "Manage test",
    "Schedule Exam": "Schedule Test",
    "Schedule": "Schedule Test",
    "Exam Reports": "Test Reports"
}

def get_pages_list(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    page_details = session.query(Page).all()
    page_data = []
    for page in page_details:
        raw_name = page.page_name
        display_name = PAGE_NAME_MAP.get(raw_name, raw_name)
        page_data.append({
            "page_id": page.page_id,
            "page_name": display_name,
        })
    json_data ={
        "data": page_data,
        "status": True,
        "statusMessage": "Pages retrieved successfully"
    }
    return json_data, 200