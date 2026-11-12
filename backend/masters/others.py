from db.db import SQLiteDB
from db.models import Page, UserPageAccess, User
from sqlalchemy import or_, func

PAGE_NAME_MAP = {
    "Categories": "Question Banks",
    "Category": "Question Banks",
    "Exams": "Create/Edit Test",
    "Exam": "Create/Edit Test",
    "Schedule Exam": "Schedule Test",
    "Schedule": "Schedule Test",
    "Exam Reports": "Test Reports",
    "Question Paper": "Paper Question",
    "Question Papers": "Paper Question",
    "Create Question Paper": "Paper Question",
}

ADMIN_ROLES = ("admin", "super_admin", "superadmin", "super-admin")


def ensure_paper_question_page(session):
    """Ensure 'Paper Question' exists in Pages and backfill admin UserPageAccess."""
    existing = (
        session.query(Page)
        .filter(
            or_(
                Page.page_name == "Paper Question",
                Page.page_url == "/question-papers",
            )
        )
        .first()
    )
    if existing:
        return existing

    page = Page(
        page_name="Paper Question",
        page_url="/question-papers",
        active_status=1,
        created_by="system",
    )
    session.add(page)
    session.flush()

    admin_users = (
        session.query(User)
        .filter(func.lower(User.user_role).in_(ADMIN_ROLES))
        .all()
    )
    for u in admin_users:
        has_access = (
            session.query(UserPageAccess)
            .filter_by(user_id=u.user_id, page_id=page.page_id)
            .first()
        )
        if not has_access:
            session.add(
                UserPageAccess(
                    user_id=u.user_id,
                    page_id=page.page_id,
                    can_view=1,
                    can_add=1,
                    can_edit=1,
                    can_delete=1,
                )
            )
    session.commit()
    return page


def get_pages_list(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    ensure_paper_question_page(session)
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