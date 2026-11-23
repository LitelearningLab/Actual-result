from db.db import SQLiteDB
from db.models import Page, UserPageAccess

PAGE_NAME_MAP = {
    "Categories": "Question Banks",
    "Category": "Question Banks",
    "Exams": "Create/Edit Test",
    "Exam": "Create/Edit Test",
    "Schedule Exam": "Schedule Test",
    "Schedule": "Schedule Test",
    "Exam Reports": "Test Reports",
    "Create/Edit Paper Test": "Create/Edit Paper Test",
    "Schedule Paper Test": "Schedule Paper Test",
    "Paper Evaluation": "Paper Evaluation",
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
        # Default modules should not appear in the configurable privileges list
        if display_name in ('Paper Evaluation', 'Test Reports', 'Admin Dashboard', 'AI Credits') or raw_name in ('Paper Evaluation', 'Test Reports', 'Admin Dashboard', 'AI Credits'):
            continue
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