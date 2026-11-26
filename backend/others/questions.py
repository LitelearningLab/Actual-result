from db.models import (
    Question,
    Option,
    QuestionMapping,
    QuestionMedia,
    Categories,
    CategoriesDepartments,
    CategoriesTeams,
    User,
    openai_requests,
    InstituteDepartment,
    InstituteTeam,
    Institute,
)
from db.db import SQLiteDB
from sqlalchemy import func, or_, text
import sys
import pandas as pd
import json
import re
import threading
import datetime
import uuid
import base64
import io
from others.llm import descriptive_evaluation, openai_client
from others.gcs_service import gcs_storage


_schema_lock = threading.Lock()
_question_media_schema_ensured = False


def ensure_question_media_schema(session):
    """Ensures QuestionMedia table and Options media columns exist at runtime (once per worker)."""
    global _question_media_schema_ensured
    if _question_media_schema_ensured:
        return
    with _schema_lock:
        if _question_media_schema_ensured:
            return
        try:
            create_qm_sql = """
            IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='QuestionMedia' AND xtype='U')
            BEGIN
                CREATE TABLE QuestionMedia (
                    media_id NVARCHAR(50) PRIMARY KEY,
                    question_id NVARCHAR(50) NOT NULL,
                    media_type NVARCHAR(50) NOT NULL,
                    file_url NVARCHAR(1000) NOT NULL,
                    gcs_path NVARCHAR(500) NULL,
                    original_filename NVARCHAR(255) NULL,
                    mime_type NVARCHAR(100) NULL,
                    file_size INT NULL,
                    caption NVARCHAR(500) NULL,
                    order_number INT DEFAULT 1,
                    active_status INT DEFAULT 1,
                    created_by NVARCHAR(50) NULL,
                    created_date DATETIME DEFAULT GETUTCDATE(),
                    updated_by NVARCHAR(50) NULL,
                    updated_date DATETIME NULL
                );
                CREATE INDEX IX_QuestionMedia_Question ON QuestionMedia(question_id);
            END
            """
            session.execute(text(create_qm_sql))

            add_opt_img_sql = """
            IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('Options') AND name = 'image_url')
            BEGIN
                ALTER TABLE Options ADD image_url NVARCHAR(1000) NULL;
            END
            """
            session.execute(text(add_opt_img_sql))

            add_opt_gcs_sql = """
            IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('Options') AND name = 'gcs_path')
            BEGIN
                ALTER TABLE Options ADD gcs_path NVARCHAR(500) NULL;
            END
            """
            session.execute(text(add_opt_gcs_sql))

            add_qm_play_limit_sql = """
            IF NOT EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('QuestionMedia') AND name = 'play_limit')
            BEGIN
                ALTER TABLE QuestionMedia ADD play_limit INT DEFAULT 0;
            END
            """
            session.execute(text(add_qm_play_limit_sql))
            session.commit()
            _question_media_schema_ensured = True
        except Exception as e:
            session.rollback()
            try:
                from db.models import Base

                Base.metadata.create_all(session.bind)
                _question_media_schema_ensured = True
            except Exception:
                pass


def upload_question_media(request):
    """
    Uploads an image or audio file for questions or MCQ options to Google Cloud Storage.
    Accepts multipart/form-data with 'file', optional 'question_id', and 'expected_type'.
    """
    file = (
        request.files.get("file")
        or request.files.get("media")
        or (
            request.files.getlist("files")[0]
            if request.files.getlist("files")
            else None
        )
    )
    if not file:
        return {"status": False, "statusMessage": "No file uploaded"}, 400

    filename = getattr(file, "filename", "") or "media_file"
    file_bytes = file.read()
    if not file_bytes:
        return {"status": False, "statusMessage": "Uploaded file is empty"}, 400

    media_type = (
        request.form.get("media_type") or request.form.get("expected_type") or "any"
    )
    expected_type = request.form.get("expected_type") or media_type or "any"
    raw_qid = (request.form.get("question_id") or "").strip()
    question_id = (
        raw_qid if (raw_qid and raw_qid.lower() != "temp") else str(uuid.uuid4())
    )
    folder = request.form.get("folder") or request.form.get("category") or "question"

    if folder in ("options", "option"):
        subfolder = "options"
    elif media_type == "audio" or folder == "audio" or expected_type == "audio":
        subfolder = "audio"
    elif media_type in ("document", "file") or folder in ("documents", "docs"):
        subfolder = "documents"
    else:
        subfolder = "images"

    folder_prefix = f"questions/{subfolder}"

    try:
        res = gcs_storage.upload_media(
            file_bytes=file_bytes,
            filename=filename,
            folder_prefix=folder_prefix,
            expected_type=expected_type,
        )
        return {
            "status": True,
            "statusMessage": "File uploaded successfully",
            "data": res,
        }, 200
    except ValueError as val_err:
        return {"status": False, "statusMessage": str(val_err)}, 400
    except Exception as e:
        print(
            f"Error in upload_question_media: {e} at line {sys.exc_info()[-1].tb_lineno}"
        )
        return {"status": False, "statusMessage": f"Upload failed: {str(e)}"}, 500


def delete_question_media(request):
    """
    Deletes a media file from GCS and database if media_id is provided.
    """
    data = request.get_json(silent=True) or request.form or {}
    gcs_path = data.get("gcs_path")
    media_id = data.get("media_id")

    if not gcs_path and not media_id:
        return {
            "status": False,
            "statusMessage": "gcs_path or media_id is required",
        }, 400

    db = SQLiteDB()
    session = db.connect()

    try:
        if media_id and session:
            m = session.query(QuestionMedia).filter_by(media_id=media_id).first()
            if m:
                gcs_path = gcs_path or m.gcs_path
                session.delete(m)
                session.commit()

        if gcs_path:
            gcs_storage.delete_media(gcs_path)

        return {"status": True, "statusMessage": "Media deleted successfully"}, 200
    except Exception as e:
        if session:
            session.rollback()
        return {
            "status": False,
            "statusMessage": f"Error deleting media: {str(e)}",
        }, 500
    finally:
        if session:
            session.close()


def _resolve_institute_scope(request):
    args = getattr(request, "args", {})
    institute_id = str(args.get("institute_id") or args.get("institute") or "").strip()
    if institute_id:
        return institute_id
    headers = getattr(request, "headers", {})
    return str(
        headers.get("X-Institute-Id") or headers.get("X-Global-Institute-Id") or ""
    ).strip()


def add_question(request):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:
        ensure_question_media_schema(session)

        data = request.json
        institute_id = data.get("institute_id")
        category_id = data.get("category_id", None)
        created_by = data.get("created_by", "System")
        if not institute_id or not category_id:
            json_data = {
                "statusMessage": "Please select an Institution and Category before saving.",
                "status": False,
            }
            return json_data, 400
        questions = data.get("questions", [])
        valid_questions = [
            q
            for q in questions
            if q and q.get("type") and str(q.get("text", "")).strip()
        ]
        if not valid_questions:
            return {
                "statusMessage": "Please add at least one question before saving.",
                "status": False,
            }, 400

        category = session.query(Categories).filter_by(category_id=category_id).first()
        if not category:
            return {
                "statusMessage": "Selected Question Bank was not found.",
                "status": False,
            }, 400

        cat_type = str(getattr(category, "type", "") or "").strip().lower()
        if cat_type:
            for q in valid_questions:
                q_type = str(q.get("type", "")).strip().lower()
                if cat_type == "objective" and q_type in [
                    "descriptive",
                    "paragraph",
                    "subjective",
                    "essay",
                    "long_answer",
                ]:
                    return {
                        "statusMessage": f"Cannot add Descriptive question to an Objective question bank ('{category.name}').",
                        "status": False,
                    }, 400
                elif cat_type == "descriptive" and q_type in [
                    "choose",
                    "choice",
                    "multi",
                    "single",
                    "fill",
                ]:
                    return {
                        "statusMessage": f"Cannot add Objective question to a Descriptive question bank ('{category.name}').",
                        "status": False,
                    }, 400

        # Duplicate Question Checks
        seen_in_batch = set()
        for q in valid_questions:
            norm_text = str(q.get("text", "")).strip().lower()
            if norm_text in seen_in_batch:
                return {
                    "statusMessage": f"Duplicate question detected: '{q.get('text', '').strip()}'. Duplicate questions cannot be added a second time.",
                    "status": False,
                }, 400
            seen_in_batch.add(norm_text)

        # Check existing questions in database for this category
        existing_q_texts = (
            session.query(Question.question_text)
            .join(QuestionMapping, Question.question_id == QuestionMapping.question_id)
            .filter(QuestionMapping.category_id == category_id)
            .all()
        )
        existing_text_set = {
            str(row[0]).strip().lower() for row in existing_q_texts if row[0]
        }

        for q in valid_questions:
            norm_text = str(q.get("text", "")).strip().lower()
            if norm_text in existing_text_set:
                return {
                    "statusMessage": f"Question '{q.get('text', '').strip()}' has already been saved in this category. Duplicate questions cannot be added a second time.",
                    "status": False,
                }, 400

        for data in valid_questions:
            question_type = data.get("type")
            if question_type in ["choose", "multi"]:
                opts = data.get("options") or []
                valid_opts = [
                    o
                    for o in opts
                    if (
                        isinstance(o, dict)
                        and (
                            str(o.get("text") or o.get("option_text") or "").strip()
                            or o.get("image_url")
                            or o.get("url")
                        )
                    )
                    or (not isinstance(o, dict) and str(o).strip())
                ]
                if len(valid_opts) < 2:
                    return {
                        "statusMessage": f"Choice question '{str(data.get('text', '')).strip()}' must have at least 2 options.",
                        "status": False,
                    }, 400

            question_text = data.get("text")
            marks = data.get("marks")
            created_by = created_by

            question_options = data.get("options")
            question_correct = data.get("correct")
            question_answer_text = data.get("answerText")
            question_correct_indices = data.get("correct_indices")

            question_data = Question(
                question_type=question_type,
                question_text=question_text,
                marks=marks,
                created_by=created_by,
            )
            session.add(question_data)
            session.flush()  # To get question_data.question_id before commit

            # Save Question Media (images, audio)
            media_items = data.get("media") or data.get("media_list") or []
            if isinstance(media_items, list):
                for m_idx, m_item in enumerate(media_items):
                    if not isinstance(m_item, dict):
                        continue
                    m_url = m_item.get("file_url") or m_item.get("url")
                    if not m_url:
                        continue
                    guessed_m_type = m_item.get("media_type")
                    if not guessed_m_type:
                        guessed_m_type = (
                            "audio"
                            if any(
                                str(m_url).lower().endswith(ext)
                                for ext in [
                                    ".mp3",
                                    ".wav",
                                    ".ogg",
                                    ".webm",
                                    ".m4a",
                                    ".aac",
                                ]
                            )
                            else "image"
                        )
                    try:
                        raw_play_limit = m_item.get("play_limit")
                        play_limit_val = (
                            int(raw_play_limit) if raw_play_limit is not None else 0
                        )
                    except Exception:
                        play_limit_val = 0
                    qm = QuestionMedia(
                        question_id=question_data.question_id,
                        media_type=guessed_m_type,
                        file_url=m_url,
                        gcs_path=m_item.get("gcs_path"),
                        original_filename=m_item.get("original_filename"),
                        mime_type=m_item.get("mime_type"),
                        file_size=m_item.get("file_size"),
                        caption=m_item.get("caption"),
                        order_number=m_idx + 1,
                        play_limit=play_limit_val,
                        created_by=created_by,
                    )
                    session.add(qm)

            if question_type in ["choose", "multi"]:
                for idx, opt_item in enumerate(question_options or []):
                    is_correct = 1 if idx in (question_correct_indices or []) else 0
                    if isinstance(opt_item, dict):
                        opt_text = (
                            opt_item.get("text", "")
                            or opt_item.get("option_text", "")
                            or ""
                        )
                        opt_image = (
                            opt_item.get("image_url")
                            or opt_item.get("url")
                            or opt_item.get("image")
                        )
                        opt_gcs = opt_item.get("gcs_path")
                    else:
                        opt_text = str(opt_item) if opt_item is not None else ""
                        opt_image = None
                        opt_gcs = None

                    option = Option(
                        question_id=question_data.question_id,
                        option_text=opt_text,
                        image_url=opt_image,
                        gcs_path=opt_gcs,
                        is_correct=is_correct,
                    )
                    session.add(option)
            else:
                question_answer = Option(
                    question_id=question_data.question_id,
                    option_text=question_answer_text or "",
                    is_correct=1,
                )
                session.add(question_answer)
            mapping_data = QuestionMapping(
                question_id=question_data.question_id, category_id=category_id
            )
            session.add(mapping_data)
            session.commit()
        json_data = {"statusMessage": "Question inserted successfully", "status": True}
        return json_data, 200
    except Exception as e:
        session.rollback()
        print(
            f"{e} occurred while inserting question at line {sys.exc_info()[-1].tb_lineno}"
        )
        json_data = {
            "statusMessage": "Error inserting question",
            "status": False,
        }
        return json_data, 500


def bulk_upload_questions(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None
    institute_id = request.form.get("institute_id", None)
    category_id = request.form.get("category_id", None)
    created_by = request.form.get("created_by", "System")
    # get file from request
    file = request.files.get("file", None)
    if not file:
        return {"statusMessage": "No file provided", "status": False}, 400
    # read file using pandas
    filename = (getattr(file, "filename", "") or "").lower()
    df = (
        pd.read_excel(file)
        if filename.endswith((".xlsx", ".xls"))
        else pd.read_csv(file)
    )

    def parse_correct_indices(value):
        indices = []
        for part in str(value or "").split(","):
            part = part.strip()
            if not part:
                continue
            try:
                numeric_value = float(part)
                if numeric_value.is_integer():
                    indices.append(int(numeric_value))
            except Exception:
                pass
        return indices

    category = session.query(Categories).filter_by(category_id=category_id).first()
    if not category:
        return {
            "statusMessage": "Selected Question Bank was not found.",
            "status": False,
        }, 400

    cat_type = str(getattr(category, "type", "") or "").strip().lower()

    # Pre-validate all rows against Question Bank type
    if cat_type:
        for idx, row in df.iterrows():
            raw_t = (
                str(row.get("Type", "")).strip().lower()
                if not pd.isna(row.get("Type", ""))
                else ""
            )
            if cat_type == "objective" and raw_t in [
                "descriptive",
                "paragraph",
                "subjective",
                "essay",
                "long_answer",
            ]:
                return {
                    "statusMessage": f"Row {idx + 1} contains a Descriptive question, but Question Bank '{category.name}' is Objective.",
                    "status": False,
                }, 400
            elif cat_type == "descriptive" and raw_t in [
                "choose",
                "choice",
                "multi",
                "single",
                "fill",
            ]:
                return {
                    "statusMessage": f"Row {idx + 1} contains an Objective question, but Question Bank '{category.name}' is Descriptive.",
                    "status": False,
                }, 400

    for index, row in df.iterrows():
        uploaded_type = row.get("Type", "")
        question_type = (
            str(uploaded_type).strip().lower() if not pd.isna(uploaded_type) else ""
        )
        if question_type == "choice":
            question_type = "choose"
        if question_type not in ["choose", "multi", "fill", "descriptive"]:
            question_type = "fill"
        question_text = row.get("Question")
        marks = row.get("marks", 1)
        question_correct_raw = row.get("Correct_answer", "")
        question_correct = (
            "" if pd.isna(question_correct_raw) else str(question_correct_raw).strip()
        )

        question_correct_indices = []
        if question_type in ["choose", "multi"]:
            question_correct_indices = parse_correct_indices(question_correct)
            if len(question_correct_indices) > 1:
                question_type = "multi"
            elif len(question_correct_indices) == 1:
                question_type = "choose"
        elif question_type == "fill" and (
            "," in question_correct
            or (len(question_correct) == 1 and question_correct in "1234567890")
        ):
            question_type = "choose"
            question_correct_indices = parse_correct_indices(question_correct)
            if len(question_correct_indices) > 1:
                question_type = "multi"

        question_options_list = []
        for idx in range(1, 11):
            val = row.get(f"option_{idx}", None)
            if pd.isna(val):
                val = None
            question_options_list.append(val)

        question_options_list = [
            opt for opt in question_options_list if opt is not None
        ]

        question_data = Question(
            question_type=question_type,
            question_text=question_text,
            marks=marks,
            created_by=created_by,
        )
        session.add(question_data)
        session.flush()  # To get question_data.id before commit

        if question_type in ["choose", "multi"]:
            for idx, option_text in enumerate(question_options_list, start=1):
                is_correct = 1 if idx in (question_correct_indices or []) else 0
                option = Option(
                    question_id=question_data.question_id,
                    option_text=option_text,
                    is_correct=is_correct,
                )
                session.add(option)
        else:
            question_answer = Option(
                question_id=question_data.question_id,
                option_text=question_correct,
                is_correct=1,
            )
            session.add(question_answer)
        mapping_data = QuestionMapping(
            question_id=question_data.question_id, category_id=category_id
        )
        session.add(mapping_data)
        session.commit()
    json_data = {"statusMessage": "Question inserted successfully", "status": True}
    return json_data, 200


def get_questions_details(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return None

    try:
        filter = []
        args = getattr(request, "args", {})
        public_access_arg = args.get("public_access")
        public_access = 1 if str(public_access_arg).lower() == "true" else 0

        active_cat_filter = or_(
            Categories.is_deleted == False,
            Categories.is_deleted == 0,
            Categories.is_deleted.is_(None),
        )
        def _qids_for_cat_query(cat_subq):
            return session.query(QuestionMapping.question_id).filter(
                QuestionMapping.category_id.in_(cat_subq)
            )

        institute_scope = _resolve_institute_scope(request)

        if institute_scope:
            if "," in str(institute_scope):
                inst_ids = [
                    i.strip() for i in str(institute_scope).split(",") if i.strip()
                ]
                cat_subq = session.query(Categories.category_id).filter(
                    Categories.institute_id.in_(inst_ids), active_cat_filter
                )
            else:
                cat_subq = session.query(Categories.category_id).filter(
                    Categories.institute_id == institute_scope, active_cat_filter
                )
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("category_name"):
            cat_subq = session.query(Categories.category_id).filter(
                Categories.name == f"{args.get('category_name')}", active_cat_filter
            )
            if public_access_arg is not None:
                cat_subq = cat_subq.filter(Categories.public_access == public_access)
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("category_id"):
            raw_cat_list = [
                c.strip() for c in str(args.get("category_id")).split(",") if c.strip()
            ]
            if raw_cat_list:
                cat_subq = session.query(Categories.category_id).filter(
                    Categories.category_id.in_(raw_cat_list), active_cat_filter
                )
                filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("departments"):
            raw_depts = [
                d.strip() for d in args.get("departments").split(",") if d.strip()
            ]
            if raw_depts:
                dept_records = (
                    session.query(InstituteDepartment.department_id, InstituteDepartment.name)
                    .filter(
                        or_(
                            InstituteDepartment.department_id.in_(raw_depts),
                            InstituteDepartment.name.in_(raw_depts),
                        )
                    )
                    .all()
                )
                resolved_dept_ids = list(
                    set(
                        [d.department_id for d in dept_records]
                        + [d.name for d in dept_records]
                        + raw_depts
                    )
                )

                dept_cat_subq = session.query(CategoriesDepartments.category_id).filter(
                    CategoriesDepartments.department_id.in_(resolved_dept_ids)
                )
                all_dept_cat_subq = session.query(
                    CategoriesDepartments.category_id
                ).filter(CategoriesDepartments.category_id.isnot(None))
                cat_subq = session.query(Categories.category_id).filter(
                    or_(
                        Categories.category_id.in_(dept_cat_subq),
                        ~Categories.category_id.in_(all_dept_cat_subq),
                    ),
                    active_cat_filter,
                )
                filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("teams"):
            raw_teams = [t.strip() for t in args.get("teams").split(",") if t.strip()]
            if raw_teams:
                team_records = (
                    session.query(InstituteTeam.team_id, InstituteTeam.name)
                    .filter(
                        or_(
                            InstituteTeam.team_id.in_(raw_teams),
                            InstituteTeam.name.in_(raw_teams),
                        )
                    )
                    .all()
                )
                resolved_team_ids = list(
                    set(
                        [t.team_id for t in team_records]
                        + [t.name for t in team_records]
                        + raw_teams
                    )
                )
                team_cat_subq = session.query(CategoriesTeams.category_id).filter(
                    CategoriesTeams.team_id.in_(resolved_team_ids)
                )
                all_team_cat_subq = session.query(CategoriesTeams.category_id).filter(
                    CategoriesTeams.category_id.isnot(None)
                )
                cat_subq = session.query(Categories.category_id).filter(
                    or_(
                        Categories.category_id.in_(team_cat_subq),
                        ~Categories.category_id.in_(all_team_cat_subq),
                    ),
                    active_cat_filter,
                )
                filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("created_by"):
            cat_subq = session.query(Categories.category_id).filter(
                Categories.created_by == args.get("created_by"), active_cat_filter
            )
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("created_after"):
            cat_subq = session.query(Categories.category_id).filter(
                Categories.created_date >= args.get("created_after"),
                active_cat_filter,
            )
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("created_before"):
            cat_subq = session.query(Categories.category_id).filter(
                Categories.created_date <= args.get("created_before"),
                active_cat_filter,
            )
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))
        if args.get("public_access") is not None:
            cat_subq = session.query(Categories.category_id).filter(
                Categories.public_access == public_access, active_cat_filter
            )
            filter.append(Question.question_id.in_(_qids_for_cat_query(cat_subq)))

        if args.get("type"):
            raw_types = [
                t.strip().lower() for t in str(args.get("type")).split(",") if t.strip()
            ]
            type_conditions = []
            cat_type_conditions = []
            for t_val in raw_types:
                if t_val == "objective":
                    type_conditions.extend(
                        [
                            "choose",
                            "multi",
                            "fill",
                            "objective",
                            "mcq",
                            "fill_in_the_blanks",
                            "multiple_choice",
                            "true_false",
                        ]
                    )
                    cat_type_conditions.extend(
                        [
                            "choose",
                            "multi",
                            "fill",
                            "objective",
                            "mcq",
                            "fill_in_the_blanks",
                            "multiple_choice",
                            "true_false",
                        ]
                    )
                elif t_val == "descriptive":
                    type_conditions.extend(
                        [
                            "descriptive",
                            "description",
                            "paragraph",
                            "subjective",
                            "essay",
                            "long_answer",
                            "short_answer",
                        ]
                    )
                    cat_type_conditions.extend(
                        [
                            "descriptive",
                            "description",
                            "paragraph",
                            "subjective",
                            "essay",
                            "long_answer",
                            "short_answer",
                        ]
                    )
                else:
                    type_conditions.append(t_val)
                    cat_type_conditions.append(t_val)
            if type_conditions:
                cat_ids_with_type_subq = session.query(Categories.category_id).filter(
                    Categories.type.in_(cat_type_conditions), active_cat_filter
                )
                mapping_with_type_subq = session.query(
                    QuestionMapping.question_id
                ).filter(QuestionMapping.category_id.in_(cat_ids_with_type_subq))
                filter.append(
                    or_(
                        Question.question_type.in_(type_conditions),
                        Question.question_id.in_(mapping_with_type_subq),
                    )
                )

        ensure_question_media_schema(session)
        questions = session.query(Question).filter(*filter).all()
        if not questions:
            return {"status": True, "data": [], "total": 0}, 200

        def _chunked(seq, size=900):
            for idx in range(0, len(seq), size):
                yield seq[idx : idx + size]

        def _norm_id(val):
            return str(val).lower() if val is not None else ""

        raw_qids = list(dict.fromkeys(q.question_id for q in questions if q.question_id is not None))

        # 1. Bulk-fetch QuestionMapping (keep first mapping per question_id, matching .first())
        mapping_by_qid = {}
        for chunk in _chunked(raw_qids):
            for m in (
                session.query(QuestionMapping)
                .filter(QuestionMapping.question_id.in_(chunk))
                .all()
            ):
                key = _norm_id(m.question_id)
                if key not in mapping_by_qid:
                    mapping_by_qid[key] = m

        # 2. Bulk-fetch active Categories
        raw_cat_ids = list(
            dict.fromkeys(
                m.category_id for m in mapping_by_qid.values() if m.category_id is not None
            )
        )
        category_by_id = {}
        for chunk in _chunked(raw_cat_ids):
            for c in (
                session.query(Categories)
                .filter(Categories.category_id.in_(chunk), active_cat_filter)
                .all()
            ):
                category_by_id[_norm_id(c.category_id)] = c

        # Only fetch media/options/users for questions that have an active mapping & category
        valid_questions = []
        for q in questions:
            mapping = mapping_by_qid.get(_norm_id(q.question_id))
            if not mapping:
                continue
            category = category_by_id.get(_norm_id(mapping.category_id))
            if not category:
                continue
            valid_questions.append((q, mapping, category))

        if not valid_questions:
            return {"status": True, "data": [], "total": 0}, 200

        valid_qids = list(dict.fromkeys(q.question_id for q, _, _ in valid_questions))

        # 3. Bulk-fetch QuestionMedia
        media_by_qid = {}
        for chunk in _chunked(valid_qids):
            for m in (
                session.query(QuestionMedia)
                .filter(QuestionMedia.question_id.in_(chunk), QuestionMedia.active_status == 1)
                .order_by(QuestionMedia.order_number.asc())
                .all()
            ):
                media_by_qid.setdefault(_norm_id(m.question_id), []).append(m)

        # 4. Bulk-fetch Options
        options_by_qid = {}
        for chunk in _chunked(valid_qids):
            for opt in (
                session.query(Option)
                .filter(Option.question_id.in_(chunk), Option.active_status == 1)
                .all()
            ):
                options_by_qid.setdefault(_norm_id(opt.question_id), []).append(opt)

        # 5. Bulk-fetch Users (created_by and updated_by together)
        raw_user_ids = []
        seen_user_keys = set()
        for q, _, _ in valid_questions:
            for uid in (q.created_by, q.updated_by):
                if uid is None:
                    continue
                ukey = _norm_id(uid)
                if not ukey or ukey in seen_user_keys:
                    continue
                try:
                    uuid.UUID(str(uid))
                    seen_user_keys.add(ukey)
                    raw_user_ids.append(uid)
                except (ValueError, TypeError):
                    pass

        user_by_id = {}
        for chunk in _chunked(raw_user_ids):
            for u in session.query(User).filter(User.user_id.in_(chunk)).all():
                user_by_id[_norm_id(u.user_id)] = u

        question_list = []
        for q, mapping, category in valid_questions:
            q_key = _norm_id(q.question_id)
            q_media = media_by_qid.get(q_key, [])
            media_list = [
                {
                    "media_id": str(m.media_id),
                    "media_type": m.media_type,
                    "file_url": m.file_url,
                    "url": m.file_url,
                    "gcs_path": m.gcs_path,
                    "original_filename": m.original_filename,
                    "mime_type": m.mime_type,
                    "file_size": m.file_size,
                    "caption": m.caption,
                    "order_number": m.order_number,
                    "play_limit": (
                        getattr(m, "play_limit", 0)
                        if getattr(m, "play_limit", 0) is not None
                        else 0
                    ),
                }
                for m in q_media
            ]

            options = options_by_qid.get(q_key, [])
            option_list = [
                {
                    "id": opt.options_id,
                    "text": opt.option_text,
                    "is_correct": opt.is_correct,
                    "image_url": opt.image_url,
                    "url": opt.image_url,
                    "gcs_path": opt.gcs_path,
                }
                for opt in options
            ]

            created_by_user = (
                user_by_id.get(_norm_id(q.created_by)) if q.created_by is not None else None
            )
            updated_by_user = (
                user_by_id.get(_norm_id(q.updated_by)) if q.updated_by is not None else None
            )

            ans = ""
            if q.question_type in [
                "fill",
                "descriptive",
                "description",
                "subjective",
                "essay",
                "long_answer",
            ]:
                ans_opt = next(
                    (opt.option_text for opt in options if opt.is_correct == 1), None
                )
                if ans_opt is None and options:
                    ans_opt = options[0].option_text
                ans = ans_opt or ""

            question_list.append(
                {
                    "id": q.question_id,
                    "text": q.question_text,
                    "type": q.question_type,
                    "marks": q.marks,
                    "mark_each_question": category.mark_each_question if category else None,
                    "media": media_list,
                    "options": option_list,
                    "answer": ans,
                    "answerText": ans,
                    "category_id": mapping.category_id if mapping else None,
                    "institute_id": category.institute_id if category else None,
                    "category": category.name if category else None,
                    "category_description": category.description if category else None,
                    "created_date": (
                        q.created_date.isoformat()
                        if getattr(q, "created_date", None)
                        else None
                    ),
                    "created_by": (
                        created_by_user.full_name if created_by_user else None
                    ),
                    "created_by_id": (
                        created_by_user.user_id if created_by_user else None
                    ),
                    "updated_date": (
                        q.updated_date.isoformat()
                        if getattr(q, "updated_date", None)
                        else None
                    ),
                    "updated_by": (
                        updated_by_user.full_name if updated_by_user else None
                    ),
                    "updated_by_id": (
                        updated_by_user.user_id if updated_by_user else None
                    ),
                }
            )
        json_data = {"status": True, "data": question_list, "total": len(question_list)}
        return json_data, 200
    except Exception as e:
        print(
            f"{e} occurred while fetching question details at line {sys.exc_info()[-1].tb_lineno}"
        )
        return {"status": False, "message": "Error fetching question details"}, 500


def update_question(question_id, request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        ensure_question_media_schema(session)
        data = request.json
        updated_by = data.get("updated_by", "System")
        q = session.query(Question).filter_by(question_id=question_id).first()
        if not q:
            return {"statusMessage": "Question not found", "status": False}, 404

        # Update basic fields
        if "type" in data:
            new_type = str(data.get("type") or "").strip().lower()
            # Validate against mapped category type
            mapping = (
                session.query(QuestionMapping)
                .filter_by(question_id=question_id)
                .first()
            )
            if mapping and mapping.category_id:
                cat = (
                    session.query(Categories)
                    .filter_by(category_id=mapping.category_id)
                    .first()
                )
                if cat and cat.type:
                    cat_type = str(cat.type).strip().lower()
                    if cat_type == "objective" and new_type in [
                        "descriptive",
                        "paragraph",
                        "subjective",
                        "essay",
                        "long_answer",
                    ]:
                        return {
                            "statusMessage": f"Cannot set question type to Descriptive in an Objective Question Bank ('{cat.name}').",
                            "status": False,
                        }, 400
                    if cat_type == "descriptive" and new_type in [
                        "choose",
                        "multi",
                        "single",
                        "fill",
                    ]:
                        return {
                            "statusMessage": f"Cannot set question type to Objective in a Descriptive Question Bank ('{cat.name}').",
                            "status": False,
                        }, 400
            q.question_type = data.get("type")
        if "text" in data:
            q.question_text = data.get("text")
        if "marks" in data:
            try:
                q.marks = int(data.get("marks") or 0)
            except Exception:
                pass

        # Update Question Media if provided
        if "media" in data or "media_list" in data:
            new_media_items = (
                data.get("media")
                if data.get("media") is not None
                else data.get("media_list", [])
            )
            existing_media = (
                session.query(QuestionMedia).filter_by(question_id=question_id).all()
            )
            existing_map = {str(m.media_id): m for m in existing_media}
            kept_media_ids = set()

            for idx, m_item in enumerate(new_media_items or []):
                if not isinstance(m_item, dict):
                    continue
                mid = str(m_item.get("media_id") or "")
                m_url = m_item.get("file_url") or m_item.get("url")
                if not m_url:
                    continue
                guessed_m_type = m_item.get("media_type")
                if not guessed_m_type:
                    guessed_m_type = (
                        "audio"
                        if any(
                            str(m_url).lower().endswith(ext)
                            for ext in [".mp3", ".wav", ".ogg", ".webm", ".m4a", ".aac"]
                        )
                        else "image"
                    )

                try:
                    raw_play_limit = m_item.get("play_limit")
                    play_limit_val = (
                        int(raw_play_limit) if raw_play_limit is not None else 0
                    )
                except Exception:
                    play_limit_val = 0

                if mid and mid in existing_map:
                    kept_media_ids.add(mid)
                    em = existing_map[mid]
                    em.file_url = m_url
                    em.gcs_path = m_item.get("gcs_path") or em.gcs_path
                    em.media_type = guessed_m_type
                    em.caption = m_item.get("caption")
                    em.order_number = idx + 1
                    em.play_limit = play_limit_val
                    em.active_status = 1
                    em.updated_by = updated_by
                    em.updated_date = datetime.datetime.utcnow()
                else:
                    qm = QuestionMedia(
                        question_id=question_id,
                        media_type=guessed_m_type,
                        file_url=m_url,
                        gcs_path=m_item.get("gcs_path"),
                        original_filename=m_item.get("original_filename"),
                        mime_type=m_item.get("mime_type"),
                        file_size=m_item.get("file_size"),
                        caption=m_item.get("caption"),
                        order_number=idx + 1,
                        play_limit=play_limit_val,
                        active_status=1,
                        created_by=updated_by,
                    )
                    session.add(qm)

            for em in existing_media:
                if str(em.media_id) not in kept_media_ids:
                    if em.gcs_path:
                        try:
                            gcs_storage.delete_media(em.gcs_path)
                        except Exception:
                            pass
                    session.delete(em)

        qtype = (q.question_type or data.get("type") or "").lower()
        ans_text = (
            data.get("answerText")
            if data.get("answerText") is not None
            else (
                data.get("answer_text")
                if data.get("answer_text") is not None
                else data.get("answer")
            )
        )

        if qtype in [
            "fill",
            "descriptive",
            "description",
            "subjective",
            "essay",
            "long_answer",
        ]:
            if ans_text is None and "options" in data and data.get("options"):
                opts = data.get("options")
                first_opt = opts[0] if len(opts) > 0 else ""
                ans_text = (
                    first_opt.get("text", "")
                    if isinstance(first_opt, dict)
                    else first_opt
                )

            val = str(ans_text if ans_text is not None else "")
            existing_opts = (
                session.query(Option).filter_by(question_id=question_id).all()
            )
            if existing_opts:
                existing_opts[0].option_text = val
                existing_opts[0].is_correct = 1
                existing_opts[0].active_status = 1
                for extra in existing_opts[1:]:
                    extra.active_status = 0
            else:
                new_opt = Option(
                    question_id=question_id,
                    option_text=val,
                    is_correct=1,
                    active_status=1,
                )
                session.add(new_opt)
        else:
            if "options" in data:
                opts = data.get("options") or []
                valid_opts = [
                    o
                    for o in opts
                    if (
                        isinstance(o, dict)
                        and (
                            str(o.get("text") or o.get("option_text") or "").strip()
                            or o.get("image_url")
                            or o.get("url")
                        )
                    )
                    or (not isinstance(o, dict) and str(o).strip())
                ]
                if len(valid_opts) < 2:
                    return {
                        "statusMessage": "Choice questions (Single/Multiple choice) must have at least 2 options.",
                        "status": False,
                    }, 400
            # Update options: update overlapping options by index, append new ones, delete surplus
            if "options" in data:
                new_options = data.get("options") or []
                correct_indices = set(data.get("correct_indices") or [])
                existing_opts = (
                    session.query(Option).filter_by(question_id=question_id).all()
                )

                # Update overlapping options
                min_len = min(len(existing_opts), len(new_options))
                for idx in range(min_len):
                    opt = existing_opts[idx]
                    opt_item = new_options[idx]
                    if isinstance(opt_item, dict):
                        new_gcs = opt_item.get("gcs_path")
                        if opt.gcs_path and new_gcs != opt.gcs_path:
                            try:
                                gcs_storage.delete_media(opt.gcs_path)
                            except Exception:
                                pass
                        opt.option_text = str(
                            opt_item.get("text", "")
                            or opt_item.get("option_text", "")
                            or ""
                        )
                        opt.image_url = (
                            opt_item.get("image_url")
                            or opt_item.get("url")
                            or opt_item.get("image")
                        )
                        opt.gcs_path = new_gcs
                    else:
                        if opt.gcs_path:
                            try:
                                gcs_storage.delete_media(opt.gcs_path)
                            except Exception:
                                pass
                        opt.option_text = str(opt_item) if opt_item is not None else ""
                        opt.image_url = None
                        opt.gcs_path = None
                    opt.is_correct = 1 if idx in correct_indices else 0
                    opt.active_status = 1

                # Append new options if provided
                for idx in range(min_len, len(new_options)):
                    opt_item = new_options[idx]
                    if isinstance(opt_item, dict):
                        otext = str(
                            opt_item.get("text", "")
                            or opt_item.get("option_text", "")
                            or ""
                        )
                        oimg = (
                            opt_item.get("image_url")
                            or opt_item.get("url")
                            or opt_item.get("image")
                        )
                        ogcs = opt_item.get("gcs_path")
                    else:
                        otext = str(opt_item) if opt_item is not None else ""
                        oimg = None
                        ogcs = None
                    is_correct = 1 if idx in correct_indices else 0
                    new_opt = Option(
                        question_id=question_id,
                        option_text=otext,
                        image_url=oimg,
                        gcs_path=ogcs,
                        is_correct=is_correct,
                        active_status=1,
                    )
                    session.add(new_opt)

                # inactivate surplus existing options not present in new list and clean their GCS files
                for idx in range(len(new_options), len(existing_opts)):
                    try:
                        surplus_opt = existing_opts[idx]
                        if surplus_opt.gcs_path:
                            gcs_storage.delete_media(surplus_opt.gcs_path)
                            surplus_opt.gcs_path = None
                            surplus_opt.image_url = None
                        surplus_opt.active_status = 0
                    except Exception:
                        pass

        # Update mapping (category)
        if "category_id" in data and data.get("category_id"):
            # update existing mapping or insert new
            mapping = (
                session.query(QuestionMapping)
                .filter_by(question_id=question_id)
                .first()
            )
            if mapping:
                mapping.category_id = data.get("category_id")
            else:
                newmap = QuestionMapping(
                    question_id=question_id, category_id=data.get("category_id")
                )
                session.add(newmap)
        q.updated_by = updated_by
        q.updated_date = datetime.datetime.utcnow()
        session.commit()
        return {"statusMessage": "Question updated", "status": True}, 200
    except Exception as e:
        session.rollback()
        return {"statusMessage": str(e), "status": False}, 500


def delete_question(question_id, deleted_by):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    question = session.query(Question).filter_by(question_id=question_id).first()
    if not question:
        return {"statusMessage": "Question not found", "status": False}, 404

    try:
        # Delete question media from GCS and DB
        q_medias = session.query(QuestionMedia).filter_by(question_id=question_id).all()
        for m in q_medias:
            if m.gcs_path:
                try:
                    gcs_storage.delete_media(m.gcs_path)
                except Exception:
                    pass
        session.query(QuestionMedia).filter_by(question_id=question_id).delete()

        # Delete option images from GCS if any
        options = session.query(Option).filter_by(question_id=question_id).all()
        for opt in options:
            if opt.gcs_path:
                try:
                    gcs_storage.delete_media(opt.gcs_path)
                except Exception:
                    pass
        # delete related options
        session.query(Option).filter_by(question_id=question_id).delete()
        # delete question mappings
        session.query(QuestionMapping).filter_by(question_id=question_id).delete()
        # delete the question
        session.delete(question)
        session.commit()
        return {"statusMessage": "Question deleted successfully", "status": True}, 200
    except Exception as e:
        session.rollback()
        return {
            "statusMessage": f"Error deleting question: {str(e)}",
            "status": False,
        }, 500


def default_result():
    result = {
        "data": [
            {
                "correct_answer": "payment",
                "mark": 1,
                "question_text": "Fill in the blank: A hotel is a commercial establishment that provides lodging, meals, and other guest services for travelers and visitors in exchange for ___.",
                "type": "fill",
            },
            {
                "correct_answer": "Front Office Department",
                "mark": 1,
                "options": [
                    "Housekeeping Department",
                    "Front Office Department",
                    "Food and Beverage Department",
                    "Sales and Marketing Department",
                ],
                "question_text": "Which of the following departments in a hotel is responsible for guest registration, check-in, and check-out?",
                "type": "choose",
            },
            {
                "correct_answer": [0, 2],
                "mark": 1,
                "options": [
                    "City Hotels",
                    "One Star Hotels",
                    "Airport Hotels",
                    "Boutique Hotels",
                ],
                "question_text": "Select all the classifications of hotels based on location.",
                "type": "multi",
            },
            {
                "correct_answer": "The hotel industry supports tourism and travel by providing accommodation and related services to travelers and guests. It creates employment opportunities, contributing to income generation for individuals and communities. Additionally, it contributes to foreign exchange earnings by attracting international tourists. The industry also promotes cultural exchange by hosting guests from diverse backgrounds and enhances regional development by stimulating local businesses and infrastructure growth. Overall, the hotel industry plays a significant role in national and global economic development.",
                "mark": 1,
                "question_text": "Describe the role of the hotel industry in economic development and tourism.",
                "type": "descriptive",
            },
            {
                "correct_answer": "Decline in hygiene and safety standards",
                "mark": 1,
                "options": [
                    "Use of technology and online booking systems",
                    "Focus on sustainability and eco-friendly practices",
                    "Decline in hygiene and safety standards",
                    "Growth of boutique and experiential hotels",
                ],
                "question_text": "Which of the following is NOT a current trend in the hotel industry?",
                "type": "choose",
            },
        ],
        "mark": 5,
        "status": True,
        "type": "All types",
    }

    return result


def create_question_using_llm(request):
    # return default_result(), 200

    data_json = request.get_json(silent=True) or {}
    form = request.form or {}
    question_files = request.files.getlist("files") or request.files.getlist("file")
    question_file = question_files[0] if question_files else request.files.get("file")

    def gv(key, default=None):
        # return form value if provided, else json value, else default
        if key in form and form.get(key) is not None:
            return form.get(key)
        return data_json.get(key, default)

    institute_id = gv("institute_id", None)
    user_id = gv("user_id", None)
    language = gv("language", "English")
    topic = gv("topic", "")
    industry = gv("industry", "Education")
    target_users = gv("target_users", "Students")
    user_role = gv("user_role", "Learner")
    type = gv("type", "fill")
    number_of_options = int(gv("number_of_options", 4) or 4)
    number_of_questions = int(gv("number_of_questions", 1) or 1)
    complexity = gv("complexity", "medium")
    source_text = gv("source_text", "")
    additional_instructions = gv("additional_instructions", "")

    if (
        not str(source_text or "").strip()
        and str(additional_instructions or "").strip()
    ):
        source_text = str(additional_instructions).strip()

    if (
        not str(source_text or "").strip()
        and str(topic or "").strip()
    ):
        source_text = str(topic).strip()

    if (
        not str(source_text or "").strip()
        and not str(additional_instructions or "").strip()
        and not str(topic or "").strip()
        and not question_file
    ):
        return {
            "status": False,
            "statusMessage": "Topic or content is required.",
            "error": "Topic or content is required.",
        }, 400
    question_mark = int(gv("marks_per_question", 2) or 2)

    # Dynamic character limit lookup: Answer range (min/max)
    answer_min_char_limit = None
    answer_max_char_limit = None

    req_a_min = gv("answer_min_character_limit")
    req_a_max = gv("answer_max_character_limit")

    try:
        if req_a_min:
            answer_min_char_limit = int(req_a_min)
    except Exception:
        pass
    try:
        if req_a_max:
            answer_max_char_limit = int(req_a_max)
    except Exception:
        pass

    target_inst_id = institute_id
    if not target_inst_id and user_id:
        try:
            db_u = SQLiteDB()
            sess_u = db_u.connect()
            if sess_u:
                u_rec = sess_u.query(User).filter_by(user_id=user_id).first()
                if u_rec:
                    target_inst_id = u_rec.institute_id
                sess_u.close()
        except Exception:
            pass

    # Enforce AI credits check: if Super Admin hasn't allocated credits or credits exhausted, block AI call
    from others.ai_credits import check_institute_ai_access
    has_access, err_msg, err_code = check_institute_ai_access(
        institute_id=target_inst_id,
        user_id=user_id,
        request_obj=request
    )
    if not has_access:
        return {
            "status": False,
            "error": err_msg,
            "statusMessage": err_msg,
            "message": err_msg,
        }, err_code

    if target_inst_id and (not answer_min_char_limit or not answer_max_char_limit):
        try:
            db_inst = SQLiteDB()
            sess_inst = db_inst.connect()
            if sess_inst:
                inst_rec = sess_inst.query(Institute).filter_by(institute_id=target_inst_id).first()
                if inst_rec and getattr(inst_rec, "qa_character_limits", None):
                    raw_cfg = json.loads(inst_rec.qa_character_limits) if isinstance(inst_rec.qa_character_limits, str) else inst_rec.qa_character_limits
                    match = next((item for item in raw_cfg if int(item.get("marks", 0)) == question_mark), None)
                    if not match and raw_cfg:
                        match = min(raw_cfg, key=lambda x: abs(int(x.get("marks", 0)) - question_mark))
                    if match:
                        if not answer_max_char_limit:
                            answer_max_char_limit = int(match.get("answer_max_character_limit", 0) or match.get("character_limit", 0) or 0)
                        if not answer_min_char_limit:
                            answer_min_char_limit = int(match.get("answer_min_character_limit", 0) or 0)
                sess_inst.close()
        except Exception as e:
            print(f"Error reading institute qa_character_limits: {e}")

    # Fallback defaults if still unspecified
    if not answer_max_char_limit:
        if question_mark <= 2:
            answer_max_char_limit = 550
        elif question_mark <= 5:
            answer_max_char_limit = 1100
        else:
            answer_max_char_limit = 1800

    if not answer_min_char_limit:
        if question_mark <= 2:
            answer_min_char_limit = 450
        elif question_mark <= 5:
            answer_min_char_limit = 800
        else:
            answer_min_char_limit = 1300

    if answer_min_char_limit > answer_max_char_limit:
        answer_min_char_limit = int(answer_max_char_limit * 0.8)

    if type == "fill":
        answer_min_char_limit = 1
        answer_max_char_limit = 100

    # Combined variable for backward compatibility in token calculations
    character_count = 500 + answer_max_char_limit
    aimodel = 2 if question_mark < 5 else 1

    openai_client_instance = openai_client()

    # Calculate target word count targets from character limits
    # Average English academic text is ~5 characters per word
    min_answer_words = max(int(answer_min_char_limit / 5), 50)
    max_answer_words = max(int(answer_max_char_limit / 4.5), 100)

    # Dynamic token allocation to allow full generation in a single shot
    total_tokens_estimate = max((number_of_questions * character_count // 3) + 2000, 4500)

    system_message = f"""You are an expert academic examination setter and evaluator for school and college curricula. Your primary objective is to generate academically authoritative, scientifically rigorous examination questions and comprehensive model answers in a SINGLE, COMPLETE generation.

Mandatory Length & Depth Requirements:
- The model answer ('answer_text' and 'correct_answer') MUST satisfy the institute's required length: Minimum {answer_min_char_limit} characters (at least {min_answer_words} words) to Maximum {answer_max_char_limit} characters.
- You MUST achieve this minimum on your FIRST attempt. Do NOT produce a short summary or brief calculation.
- For descriptive questions matching {question_mark} marks with a minimum of {answer_min_char_limit} characters, you MUST structure the model answer into comprehensive academic sections:
  1. Core Principles & Definitions: Fundamental laws, definitions, and underlying scientific concepts.
  2. Step-by-Step Calculations / Derivations: Full mathematical or chemical progression with all formulas, substitutions, intermediate steps, and units explicitly shown.
  3. Physical & Analytical Interpretation: In-depth comparison, physical significance of the results, and behavioral trends.
  4. Operational Assumptions & Boundary Conditions: Applicable conditions, validity limits, and circuit/system assumptions.
  5. Practical / Real-World Applications: Contextual significance, engineering/industrial relevance, or real-world examples.
- Question Length:
  * Size 'question_text' naturally according to the topic, complexity level, source text, and {question_mark} marks context—do not artificially truncate necessary scenario details or context.
- Upper Limits:
  * 'answer_text' must strictly not exceed {answer_max_char_limit} characters.
- Quality: Ground all facts in standard curricula. Do NOT add irrelevant filler or repetitive sentences.

Question Type Specifications:
- 'fill': Fill-in-the-blanks (use '______' in question_text; correct_answer is strictly the missing word/phrase).
- 'choose': Multiple choice single answer with concise options.
- 'multi': Multiple choice multiple answers with concise options.
- 'descriptive': Comprehensive model answer satisfying all marking depth criteria and character limits.
"""
    user_message = f"""Generate {number_of_questions} question(s) with correct model answer(s) using the following parameters:
- Language: {language}
- Topic: {topic}
- Industry: {industry}
- Target Users: {target_users}
- User Role: {user_role}
- Question Type: {type}
- Number of Options (if applicable): {number_of_options}
- Number of Questions: {number_of_questions}
- Complexity Level: {complexity}
- Source Text: {source_text}
- Additional Instructions: {additional_instructions}
- Assigned Marks: {question_mark} marks per question
- MANDATORY Model Answer Range: Minimum {answer_min_char_limit} characters (at least {min_answer_words}+ words) to Maximum {answer_max_char_limit} characters for "answer_text"

CRITICAL INSTRUCTIONS FOR FIRST-SHOT LENGTH COMPLIANCE:
1. The model answer MUST reach at least {answer_min_char_limit} characters (minimum {min_answer_words} words) directly in this response.
2. Provide full academic depth across the 5 structured sections (Theory, Step-by-Step Derivations/Calculations, Interpretation, Assumptions, Practical Applications). Do NOT stop once the numerical result is found.
3. Generate "question_text" naturally according to the provided context, complexity, and source text.
4. Clean Formatting: Do NOT include mark annotations like "({question_mark} marks)" inside "question_text".

Provide the output as a JSON array of objects (one object per question). Each object format:
[
    {{
        "question_text": "<The text of the question>",
        "options": ["<Option 1>", "<Option 2>", "..."] (only for 'choose' and 'multi' types),
        "correct_answer": "<The correct answer text or comprehensive model answer for descriptive questions>",
        "answer_text": "<In-depth model answer satisfying the {answer_min_char_limit} to {answer_max_char_limit} character requirement>",
        "type": "{type}",
        "mark": {question_mark}
    }}
]

Return strictly valid JSON with no surrounding markdown or conversational text."""
    try:
        response = openai_client_instance.chat_completion(
            system_message,
            user_message,
            aimodel=aimodel,
            max_tokens=max(total_tokens_estimate + 4000, 8000),
            timeout=120.0,
            institute_id=target_inst_id,
            user_name=user_id,
            feature_name="AI Question Generation",
            endpoint="/create-question-using-ai"
        )
        # with open("debug_response.json", "w") as debug_file:
        #     debug_file.write(response.text)
        try:
            response_json = response.json()
        except Exception as json_err:
            raw_body = getattr(response, "text", "")[:300]
            print(f"[create_question_using_llm] Non-JSON HTTP response (status={getattr(response, 'status_code', '?')}): {raw_body}", flush=True)
            return {"status": False, "error": f"LLM returned non-JSON response (status {getattr(response, 'status_code', '?')}): {json_err}"}, 502
        # with open("debug_response.json", "r") as debug_file:
        #     response_json = json.load(debug_file)
        #     class MockResponse:
        #         def __init__(self, json_data, status=200):
        #             self._json = json_data
        #             self.status_code = status
        #         def json(self):
        #             return self._json
        #     response = MockResponse(response_json)
        if response.status_code != 200:
            print(f"Error response from LLM: {response_json}")
            error = response_json.get("error", "Unknown error")
            if isinstance(error, dict):
                error = error.get("message", str(error))
            return {"status": False, "error": error}, response.status_code
        response_tracker(response_json, target_inst_id, user_id, endpoint="/create-question-using-ai")
        choice0 = (response_json.get("choices") or [{}])[0]
        finish_reason = choice0.get("finish_reason", "unknown")
        result_text = (choice0.get("message", {}).get("content") or "").strip()
        if not result_text:
            print(f"[create_question_using_llm] Empty content from LLM. finish_reason={finish_reason}, usage={response_json.get('usage')}", flush=True)
            return {
                "status": False,
                "error": f"AI returned an empty response (finish_reason: {finish_reason}). Please try again.",
                "statusMessage": f"AI returned an empty response (finish_reason: {finish_reason}). Please try again."
            }, 502

        # Remove markdown code blocks if present
        result_text = re.sub(r"^```(?:json)?\s*", "", result_text, flags=re.MULTILINE)
        result_text = re.sub(r"```\s*$", "", result_text, flags=re.MULTILINE).strip()

        # Extract outermost JSON array or object if surrounded by conversational text
        arr_start, arr_end = result_text.find("["), result_text.rfind("]")
        obj_start, obj_end = result_text.find("{"), result_text.rfind("}")
        if arr_start != -1 and arr_end > arr_start and (obj_start == -1 or arr_start < obj_start):
            result_text = result_text[arr_start:arr_end + 1]
        elif obj_start != -1 and obj_end > obj_start:
            result_text = result_text[obj_start:obj_end + 1]

        try:
            parsed = json.loads(result_text, strict=False)
        except json.JSONDecodeError:
            sanitized = re.sub(r'\\(?![\\"/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', result_text)
            try:
                parsed = json.loads(sanitized, strict=False)
            except json.JSONDecodeError as parse_err:
                print(f"[create_question_using_llm] Invalid JSON from LLM (finish_reason={finish_reason}): {result_text[:300]}", flush=True)
                return {
                    "status": False,
                    "error": f"AI returned invalid JSON: {parse_err}",
                    "statusMessage": "AI returned an invalid format. Please try again."
                }, 502

                # ================= PRINT TOKEN USAGE DETAILS =================
        usage = response_json.get("usage", {}) or {}
        prompt_tokens = usage.get("prompt_tokens", 0)       # Input tokens (prompt + source text)
        completion_tokens = usage.get("completion_tokens", 0) # Output tokens (generated question tokens)
        total_tokens = usage.get("total_tokens", 0)         # Total tokens (prompt + completion)

        questions_list = parsed if isinstance(parsed, list) else [parsed]
        num_questions = len(questions_list)

        # Strip trailing mark annotations like (5 marks), [5 Marks], (5 pts) from question_text
        for q_item in questions_list:
            if isinstance(q_item, dict) and "question_text" in q_item and isinstance(q_item["question_text"], str):
                q_item["question_text"] = re.sub(r'\s*[\(\[]\s*\d+\s*(?:marks?|pts?|points?)\s*[\)\]]\s*$', '', q_item["question_text"], flags=re.IGNORECASE).strip()

        # =========================================================================
        # PYTHON VALIDATION: ENFORCE CONFIGURED CHARACTER LIMITS (LAYER 2 & 3)
        # =========================================================================
        if type == "descriptive":
            for q_item in questions_list:
                if not isinstance(q_item, dict):
                    continue

                ans = q_item.get("answer_text", "") or q_item.get("correct_answer", "")
                ans_len = len(ans)

                # Validation Rule 1: Below minimum threshold -> Request Contextual Expansion
                if ans_len < answer_min_char_limit:
                    expand_prompt = f"""The following model answer has {ans_len} characters, which is below the required minimum of {answer_min_char_limit} characters.
Question: {q_item.get('question_text')}
Current Answer: {ans}

Task: Expand the answer by adding essential scientific/academic details, underlying mechanisms, operating conditions, or relevant examples related to the topic so that the total answer length is at least {answer_min_char_limit} characters and does not exceed {answer_max_char_limit} characters. Do NOT add irrelevant filler or repeat sentences. Return ONLY the improved model answer text."""

                    expand_res = openai_client_instance.chat_completion(
                        "You are an expert academic evaluator. Provide only the expanded, academically complete model answer with no surrounding text or markdown.",
                        expand_prompt,
                        aimodel=aimodel,
                        max_tokens=max(answer_max_char_limit, 1000),
                        institute_id=target_inst_id,
                        user_name=user_id,
                        feature_name="AI Question Generation",
                        endpoint="/create-question-using-ai"
                    )
                    if expand_res.status_code == 200:
                        new_ans = expand_res.json().get("choices", [{}])[0].get("message", {}).get("content", "").strip()
                        if len(new_ans) >= answer_min_char_limit or len(new_ans) > ans_len:
                            q_item["answer_text"] = new_ans
                            q_item["correct_answer"] = new_ans

                # Validation Rule 2: Above maximum ceiling -> Request Concise Rewrite
                elif ans_len > answer_max_char_limit:
                    trim_prompt = f"""The following model answer has {ans_len} characters, which exceeds the maximum ceiling of {answer_max_char_limit} characters.
Question: {q_item.get('question_text')}
Current Answer: {ans}

Task: Rewrite the model answer more concisely while preserving all essential academic facts, formulas, and points so that its total length does NOT exceed {answer_max_char_limit} characters (and is at least {answer_min_char_limit} characters). Return ONLY the tightened model answer text."""

                    trim_res = openai_client_instance.chat_completion(
                        "You are an expert academic evaluator. Provide only the concise model answer with no surrounding text or markdown.",
                        trim_prompt,
                        aimodel=aimodel,
                        max_tokens=max(answer_max_char_limit, 1000),
                        institute_id=target_inst_id,
                        user_name=user_id,
                        feature_name="AI Question Generation",
                        endpoint="/create-question-using-ai"
                    )
                    if trim_res.status_code == 200:
                        trimmed = trim_res.json().get("choices", [{}])[0].get("message", {}).get("content", "").strip()
                        if len(trimmed) <= answer_max_char_limit:
                            q_item["answer_text"] = trimmed
                            q_item["correct_answer"] = trimmed


        # ============================================
        # ACTUAL API TOKEN USAGE
        # ============================================
        usage = response_json.get("usage") or {}

        print("\n========== ACTUAL API TOKEN USAGE ==========", flush=True)
        print(f"Model         : {response_json.get('model', 'N/A')}", flush=True)
        print(f"Input Tokens  : {usage.get('prompt_tokens', usage.get('input_tokens', 'N/A'))}", flush=True)
        print(f"Output Tokens : {usage.get('completion_tokens', usage.get('output_tokens', 'N/A'))}", flush=True)
        print(f"Total Tokens  : {usage.get('total_tokens', 'N/A')}", flush=True)
        print("============================================\n", flush=True)

        # normalize parsed output to a consistent dict
        if isinstance(parsed, list):
            result = {
                "status": True,
                "data": parsed,
                "type": type,
                "mark": question_mark,
            }
        elif isinstance(parsed, dict):
            parsed["status"] = True
            parsed["type"] = parsed.get("type", type)
            parsed["mark"] = parsed.get("mark", question_mark)
            result = parsed
        else:
            result = {"status": False, "error": "Unexpected AI response format"}

    except Exception as e:
        print(
            f"Error in create_question_using_llm: {str(e)}"
            + " - Line # : "
            + str(e.__traceback__.tb_lineno)
        )
        return {"status": False, "error": str(e)}, 500
    return result, 200


def response_tracker(response_json, institute_id=None, user_id=None, endpoint="/create-question-using-ai", feature_name=None):
    try:
        from others.ai_credits import record_ai_usage
        if not feature_name:
            feature_name = "AI Fine-Tuning" if "fine-tune" in str(endpoint).lower() else "AI Question Generation"
        record_ai_usage(response_json, institute_id=institute_id, user_id=user_id, feature_name=feature_name, endpoint=endpoint)
    except Exception as db_err:
        print(f"[response_tracker] Failed to save request metrics: {db_err}")
    return


def default_fine_tune_result():
    result = {
        "data": {
            "question_text": "What is the primary purpose of a hotel?",
            "answer_text": "The primary purpose of a hotel is to provide lodging, meals, and other guest services for travelers and visitors in exchange for payment.",
        },
        "status": True,
    }

    return result


def fine_tune_questions_using_llm(request):
    data_json = request.get_json(silent=True) or {}
    openai_client_instance = openai_client()

    def gv(key, default=None):
        return data_json.get(key, default)

    questions = gv("question_text", [])
    answer_text = gv("answer_text", "")
    additional_instructions = gv(
        "additional_instructions",
        "Update the question with additional related items to make the answer also more detailed ( close to 1800 characters) ",
    )
    institute_id = gv("institute_id", None)
    user_id = gv("user_id", None)

    # Enforce AI credits check: if Super Admin hasn't allocated credits or credits exhausted, block AI call
    from others.ai_credits import check_institute_ai_access
    has_access, err_msg, err_code = check_institute_ai_access(
        institute_id=institute_id,
        user_id=user_id,
        request_obj=request
    )
    if not has_access:
        return {
            "status": False,
            "error": err_msg,
            "statusMessage": err_msg,
            "message": err_msg,
        }, err_code

    try:
        system_message = "You are an expert question and answer evaluator. Your task is to evaluate and improve the provided question(s) and answer based on the given answer text and additional instructions."
        user_message = f"""Using the following parameters,
        - Question Text(s): {questions}
        - Answer Text: {answer_text}
        - Additional Instructions: {additional_instructions}
        For each question, evaluate its clarity, relevance, and alignment with the provided answer text. Suggest improvements to enhance the quality of the questions and answers.
        Provide the output as a JSON array of objects (one object per question). Each object should follow this format:
            {{
                "question_text": "<The improved question text>",
                "answer_text": "<The improved answer text>"
            }}
        Ensure the output is valid JSON with no surrounding markdown or text.
        """
        response = openai_client_instance.chat_completion(
            system_message=system_message,
            InputData=user_message,
            aimodel=1,
            max_tokens=2500,
            institute_id=institute_id,
            user_name=user_id,
            feature_name="AI Fine-Tuning",
            endpoint="/fine-tune-question"
        )
        response_json = response.json() if hasattr(response, "json") else {}

        if response.status_code != 200:
            print(f"Error response from LLM: {response_json}")
            error = response_json.get("error", "Unknown error")
            if isinstance(error, dict):
                error = error.get("message", str(error))
            return {"status": False, "error": error}, response.status_code

        response_tracker(response_json, institute_id, user_id, endpoint="/fine-tune-question")

        choices = response_json.get("choices") or []
        if not choices:
            return {"status": False, "error": "No response choices returned by AI"}, 500

        result_text = choices[0].get("message", {}).get("content", "").strip()
        # Remove markdown code blocks if present
        if result_text.startswith("```"):
            lines = result_text.splitlines()
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            result_text = "\n".join(lines).strip()

        # Parse JSON safely - handles both [ { ... } ] and { ... }
        match = re.search(r"(\[[\s\S]*\]|\{[\s\S]*\})", result_text)
        json_str = match.group(0) if match else result_text
        parsed_data = json.loads(json_str)

        if isinstance(parsed_data, list):
            parsed = parsed_data[0] if len(parsed_data) > 0 else {}
        elif isinstance(parsed_data, dict):
            parsed = parsed_data
        else:
            parsed = {}

        result = {"status": True, "data": parsed}
        return result, 200
    except Exception as e:
        print(
            f"Error in fine_tune_questions_using_llm: {str(e)}"
            + " - Line # : "
            + str(e.__traceback__.tb_lineno)
        )
        return {"status": False, "error": str(e)}, 500


def _parse_llm_json(raw_text):
    """
    Robust JSON parser for LLM responses:
    - Strips markdown code fences (```json ... ```)
    - Sanitizes invalid escape sequences (LaTeX like \\alpha, \\sqrt, \\times, \\degree, etc.)
    - Repairs unescaped inner double quotes inside strings (e.g. quotes in slogans, passages, titles)
    - Auto-repairs truncated JSON objects if output reached max_tokens
    - Provides resilient regex fallback for sections and questions if structure is broken
    """
    if not raw_text or not str(raw_text).strip():
        return None

    text = str(raw_text).strip()

    # 1. Clean markdown code fences
    text = re.sub(r"^```(?:json)?\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"```\s*$", "", text, flags=re.MULTILINE)
    text = text.strip()

    # 2. Extract substring between outermost { and }
    first_brace = text.find("{")
    last_brace = text.rfind("}")
    if first_brace != -1 and last_brace != -1 and last_brace > first_brace:
        json_candidate = text[first_brace:last_brace + 1]
    elif first_brace != -1:
        json_candidate = text[first_brace:]
    else:
        json_candidate = text

    # Helper to sanitize invalid escape sequences (JSON only allows \" \\ \/ \b \f \n \r \t \uXXXX)
    def sanitize_escapes(s):
        return re.sub(r'\\(?![\\"/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', s)

    # 3. Direct JSON load with strict=False
    try:
        return json.loads(json_candidate, strict=False)
    except Exception:
        pass

    # 3b. Try with sanitized invalid backslashes (handles LaTeX formulas, math, and units)
    try:
        cleaned_escapes = sanitize_escapes(json_candidate)
        return json.loads(cleaned_escapes, strict=False)
    except Exception:
        pass

    # 4. Repair unescaped inner double quotes and truncated structures
    def repair_json_string(s):
        s = sanitize_escapes(s)
        out = []
        in_str = False
        escape = False
        i = 0
        n = len(s)
        stack = []

        while i < n:
            ch = s[i]
            if escape:
                escape = False
                out.append(ch)
                i += 1
                continue

            if ch == '\\':
                escape = True
                out.append(ch)
                i += 1
                continue

            if ch == '"':
                if not in_str:
                    in_str = True
                    out.append(ch)
                else:
                    # Check if this quote is closing the string or is an inner unescaped quote
                    j = i + 1
                    while j < n and s[j] in ' \t\r\n':
                        j += 1
                    next_ch = s[j] if j < n else ''

                    # In valid JSON, closing quote must be followed by :, ,, }, ], or EOF
                    if next_ch in [':', ',', '}', ']', '']:
                        in_str = False
                        out.append(ch)
                    else:
                        # Inner quote! Escape it
                        out.append('\\"')
                i += 1
                continue

            if not in_str:
                if ch in '{[':
                    stack.append('}' if ch == '{' else ']')
                elif ch in '}]':
                    if stack and stack[-1] == ch:
                        stack.pop()

            out.append(ch)
            i += 1

        if in_str:
            out.append('"')

        repaired = "".join(out)
        # Trim dangling trailing commas or incomplete keys/values
        repaired = re.sub(r',\s*$', '', repaired)
        repaired = re.sub(r',\s*"[^"]*"\s*:\s*$', '', repaired)
        repaired = re.sub(r'"[^"]*"\s*:\s*$', '', repaired)
        repaired = re.sub(r',\s*$', '', repaired)

        while stack:
            repaired += stack.pop()

        return repaired

    try:
        repaired_text = repair_json_string(json_candidate)
        return json.loads(repaired_text, strict=False)
    except Exception as rep_err:
        print(f"[_parse_llm_json] Repair warning: {rep_err}")

    # 5. Extract questions via resilient fallback if JSON structure was too severely damaged
    try:
        # Match question blocks { ... "question": ... }
        q_blocks = re.findall(r'\{\s*"question"\s*:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?\}', text)
        if not q_blocks:
            q_matches = re.finditer(r'"question"\s*:\s*"((?:[^"\\]|\\.)*)"', text)
            q_list = []
            for qm in q_matches:
                q_text = qm.group(1).replace('\\"', '"').strip()
                if q_text:
                    q_list.append({"question": q_text, "marks": 1, "type": "descriptive"})
            if q_list:
                return {
                    "title": "Uploaded Question Paper",
                    "total_marks": len(q_list),
                    "sections": [{
                        "name": "Section A",
                        "sub_heading": "Answer all questions.",
                        "question_type": "descriptive",
                        "questions": q_list
                    }]
                }
        else:
            qs = []
            for block in q_blocks:
                q_text = block.replace('\\"', '"').strip()
                if q_text:
                    qs.append({"question": q_text, "marks": 1, "type": "descriptive"})
            if qs:
                return {
                    "title": "Uploaded Question Paper",
                    "total_marks": len(qs),
                    "sections": [{
                        "name": "Section A",
                        "sub_heading": "Answer all questions.",
                        "question_type": "descriptive",
                        "questions": qs
                    }]
                }
    except Exception as fall_err:
        print(f"[_parse_llm_json] Fallback warning: {fall_err}")

    return None


def _extract_vector_drawing_rects(page, min_size=35, table_rects=None):
    """
    Extracts and clusters vector graphics (geometry shapes, circuit diagrams, coordinate graphs, charts)
    from a PDF page using PyMuPDF get_drawings(). Filters out full-page borders, rules, dividers,
    and recognized table grid areas.
    """
    try:
        page_w = getattr(page.rect, "width", 0) or 1
        page_h = getattr(page.rect, "height", 0) or 1
        drawings = page.get_drawings()
        if not drawings:
            return []

        import fitz
        rects = []
        for d in drawings:
            r = d.get("rect")
            if not r:
                continue
            w = r.x1 - r.x0
            h = r.y1 - r.y0
            # Ignore full-page borders / outer margin boxes
            if w >= page_w * 0.9 and h >= page_h * 0.9:
                continue
            # Ignore horizontal dividers running across the page
            if h < 4 and w > page_w * 0.45:
                continue
            # Ignore vertical column lines
            if w < 4 and h > page_h * 0.45:
                continue
            # Ignore tiny isolated dots / marks
            if w < 2 and h < 2:
                continue
            # Pad by 1pt so 1D zero-width lines have non-empty rects for clustering
            rects.append(fitz.Rect(r.x0 - 1, r.y0 - 1, r.x1 + 1, r.y1 + 1))

        if not rects:
            return []

        # Cluster nearby vector drawing elements (threshold: 16 points)
        clusters = []
        for r in rects:
            merged = False
            for i, c in enumerate(clusters):
                expanded_c = fitz.Rect(c.x0 - 16, c.y0 - 16, c.x1 + 16, c.y1 + 16)
                if expanded_c.intersects(r):
                    clusters[i] = c | r
                    merged = True
                    break
            if not merged:
                clusters.append(fitz.Rect(r))

        changed = True
        while changed:
            changed = False
            new_clusters = []
            skip_indices = set()
            for i in range(len(clusters)):
                if i in skip_indices:
                    continue
                curr = fitz.Rect(clusters[i])
                for j in range(i + 1, len(clusters)):
                    if j in skip_indices:
                        continue
                    expanded = fitz.Rect(curr.x0 - 16, curr.y0 - 16, curr.x1 + 16, curr.y1 + 16)
                    if expanded.intersects(clusters[j]):
                        curr |= clusters[j]
                        skip_indices.add(j)
                        changed = True
                new_clusters.append(curr)
            clusters = new_clusters

        valid_rects = []
        for c in clusters:
            w = c.x1 - c.x0
            h = c.y1 - c.y0
            if w >= min_size and h >= min_size and w < page_w * 0.9 and h < page_h * 0.9:
                # Ignore vector clusters that overlap with recognized table bounding boxes
                if table_rects:
                    is_table = False
                    for tr in table_rects:
                        inter = c & tr
                        if not inter.is_empty and (inter.get_area() > 0.35 * min(c.get_area(), tr.get_area())):
                            is_table = True
                            break
                    if is_table:
                        continue

                # Add safe padding
                padded = fitz.Rect(
                    max(0, c.x0 - 4),
                    max(0, c.y0 - 4),
                    min(page_w, c.x1 + 4),
                    min(page_h, c.y1 + 4)
                )
                valid_rects.append(padded)

        return valid_rects
    except Exception as e:
        print(f"[_extract_vector_drawing_rects] Warning: {e}")
        return []


def extract_questions_from_paper(request):
    """
    AI-Based Question Paper Extraction & Automatic Template Generator:
    Extracts questions, numbers, sub-questions, mark allocations (1M, 2M, 5M, descriptive),
    categorizes question types (objective vs descriptive), organizes them into sections,
    and returns a structured question paper template.
    """
    doc = None
    source_pil_img = None
    try:
        file_obj = None
        if request.files and ("file" in request.files or "paper" in request.files):
            file_obj = request.files.get("file") or request.files.get("paper")

        if not file_obj:
            return {
                "status": False,
                "statusMessage": "Please upload a question paper file (PDF, PNG, JPG, or JPEG).",
            }, 400

        file_bytes = file_obj.read()
        if not file_bytes:
            return {
                "status": False,
                "statusMessage": "Uploaded file is empty.",
            }, 400

        filename = (getattr(file_obj, "filename", "") or "").lower()
        form = request.form or {}
        institute_id = form.get("institute_id")
        user_id = form.get("user_id") or "System"
        subject_id = form.get("subject_id")
        subject_name = form.get("subject_name") or ""

        # Enforce AI credits check
        from others.ai_credits import check_institute_ai_access
        has_access, err_msg, err_code = check_institute_ai_access(
            institute_id=institute_id,
            user_id=user_id,
            request_obj=request
        )
        if not has_access:
            return {
                "status": False,
                "error": err_msg,
                "statusMessage": err_msg,
                "message": err_msg,
            }, err_code

        # Convert PDF to images using PyMuPDF (dpi=200); or load directly uploaded image for Vision AI
        image_data_uris = []
        extracted_doc_images = []
        source_pil_img = None
        doc = None

        is_pdf = filename.endswith(".pdf") or "pdf" in (file_obj.content_type or "").lower()

        if is_pdf:
            try:
                import fitz
                doc = fitz.open(stream=file_bytes, filetype="pdf")
                total_pages = len(doc)
                for p_idx in range(total_pages):
                    page = doc[p_idx]
                    try:
                        pix = page.get_pixmap(dpi=200)
                        img_bytes = pix.tobytes("jpeg")
                        b64 = base64.b64encode(img_bytes).decode("utf-8")
                        image_data_uris.append(f"data:image/jpeg;base64,{b64}")
                    except Exception as img_err:
                        print(f"[extract_questions_from_paper] Page {p_idx + 1} render warning: {img_err}")
            except Exception as pdf_err:
                print(f"[extract_questions_from_paper] PDF render warning: {pdf_err}")
        else:
            # Direct image file (PNG, JPG, JPEG, WEBP, BMP, etc.) - directly pass to Vision AI without PyMuPDF
            try:
                from PIL import Image, ImageOps
                img_io = io.BytesIO(file_bytes)
                source_pil_img = Image.open(img_io)
                source_pil_img = ImageOps.exif_transpose(source_pil_img)
            except Exception as pil_err:
                print(f"[extract_questions_from_paper] PIL open warning: {pil_err}")
            mime = "image/png" if filename.endswith(".png") else "image/jpeg"
            b64 = base64.b64encode(file_bytes).decode("utf-8")
            image_data_uris.append(f"data:{mime};base64,{b64}")

        system_prompt = (
            "You are an expert exam assessment and question paper parser AI. "
            "Analyze the provided question paper document and images and extract all questions and ALL sections with high precision.\n\n"
            "CRITICAL EXTRACTION RULES:\n"
            "1. EXTRACT ALL SECTIONS (MANDATORY MULTI-SECTION EXTRACTION):\n"
            "   - Question papers typically comprise multiple distinct sections (e.g. Section A, Section B, Section C, Section D, Section E, Section F, etc., or Part A, Part B, Part C, etc.).\n"
            "   - Check the General Instructions and section headers in the document. You MUST extract and preserve EVERY single section present in the question paper as an independent section object in the 'sections' array.\n"
            "   - NEVER merge, lump, or collapse multiple sections into just one or two sections. Each section in the question paper MUST be a separate section object in sequential order.\n"
            "   - Questions belonging to Section A must go ONLY in Section A. Questions belonging to Section B must go ONLY in Section B. Questions belonging to Section C must go ONLY in Section C. Questions belonging to Section D must go ONLY in Section D. Questions belonging to Section E must go ONLY in Section E. Questions belonging to Section F must go ONLY in Section F.\n"
            "   - Do NOT stop after Section A or Section B. Extract all sections and questions until the very end of the paper.\n"
            "2. NO MISSING TEXT / NO PLACEHOLDERS: NEVER output placeholders such as '[text missing in source extraction]' or omit words. Transcribe the exact question text, options, and passages faithfully as printed in the document.\n"
            "3. NO LEADING QUESTION NUMBERS IN QUESTION TEXT: DO NOT include the leading question number (such as '1.', '2.', 'Q1.', '21.') at the start of the 'question' text field because the UI renders the question number automatically. Start directly with the question statement (e.g., 'Choose the correctly matched pair from the following (Book — Author):').\n"
            "4. MANDATORY MULTIPLE CHOICE & MATCHING PAIR OPTIONS:\n"
            "   - Whenever a question has options ((A), (B), (C), (D) or (i), (ii), (iii), (iv)) or matching pairs, you MUST extract every choice into the 'options' array.\n"
            "   - For matching pairs / table questions (like Book — Author, Column I — Column II), format each option item with the pair: e.g. options: ['(A) Amar Jiban — Tarabai Shinde', '(B) Gulamgiri — Rashsundri Debi', '(C) Burhi Aair Sadhu — Lakshminath Bezbaruah', '(D) Sambad Kaumudi — Pandita Ramabai'].\n"
            "   - FOR MATCH THE FOLLOWING / MATCH COLUMN QUESTIONS:\n"
            "     * When a question requires matching two columns (e.g. Column-I and Column-II, List-I and List-II, or Column A and Column B):\n"
            "     * You MUST format the two columns SIDE BY SIDE as a 2-column table in the question statement:\n"
            "       | Column-I (State) | Column-II (Main Regional Party) |\n"
            "       | :--- | :--- |\n"
            "       | (a) Uttar Pradesh | (i) Indian National Lok Dal |\n"
            "       | (b) West Bengal | (ii) Rashtriya Lok Dal |\n"
            "       | (c) Haryana | (iii) Biju Janata Dal |\n"
            "       | (d) Odisha | (iv) All India Forward Block |\n"
            "     * NEVER output Column-I and Column-II stacked vertically one after another in a single column. Always pair them side by side into two columns.\n"
            "     * Extract the final matching options (e.g. (A) a - i, b - iii... (B)...) into the 'options' array.\n"
            "   - Set 'type': 'choose'.\n"
            "5. NO VISUALLY IMPAIRED SUBSTITUTE TEXT IN MAIN QUESTIONS:\n"
            "   - When a question has a visual map, figure, or diagram, focus strictly on that question and diagram.\n"
            "   - Do NOT append substitute questions or notes like 'Note: The following question is for Visually Impaired Candidates only in lieu of...' into the question statement.\n"
            "   - A section containing multiple choice questions MUST have 'question_type': 'objective'.\n"
            "   - NEVER leave 'options' empty if choices exist in the document.\n"
            "5. SUB-QUESTIONS & SOURCE / PASSAGE QUESTIONS:\n"
            "   - When a question has sub-questions (e.g. Q9 with 9.1, 9.2, 9.3, or Case Study questions in Section E):\n"
            "     * Format the question clearly with the passage followed by each sub-question on a new line with its sub-number and marks:\n"
            "       e.g.: 'Read the source given below and answer the questions that follow:\\n\\n[Passage text...]\\n\\n(1) First sub-question text? (1 Mark)\\n(2) Second sub-question text? (1 Mark)\\n(3) Third sub-question text? (2 Marks)'\n"
            "     * Alternatively, if sub-questions can be separate standalone questions, you may output each sub-question as an individual question in the section.\n"
            "   - For internal choice / alternative questions ('OR' alternatives, like Q6(a) OR Q6(b)):\n"
            "     Format clearly with '\\n\\n-- OR --\\n\\n' between the two choices:\n"
            "     e.g.: 'Why did the Polish language become a symbol of struggle against Russian dominance in the 19th century? Explain.\\n\\n-- OR --\\n\\nHow did the formation of the nation-state in Britain become an ideal model in Europe? Explain.'\n"
            "6. ACCURATE SECTION DETAILS AND MARKS:\n"
            "   - Extract the exact section name from the paper: e.g. 'Section A', 'Section B', 'Section C', 'Section D', 'Section E', 'Section F'.\n"
            "   - Set sub_heading to the section description or marks formula (e.g. 'Objective Type Questions (1 Mark Each)', 'Very Short Answer Questions (2 Marks Each)', 'Short Answer Questions (3 Marks Each)', 'Long Answer Questions (5 Marks Each)', 'Case-Based Questions (4 Marks Each)', 'Map Skill Based Question (2 Marks)').\n"
            "   - Set 'question_type': 'objective' for sections with 1-mark multiple choice questions; 'descriptive' for short answer, long answer, case-based, and map questions.\n"
            "   - Set 'marks_per_q' for the section (e.g. 1, 2, 3, 4, 5).\n"
            "   - Each question must have its accurate 'marks' (e.g. 1, 2, 3, 4, 5).\n"
            "7. PRESERVE DATA TABLES, CHARTS & SCHEDULES EXACTLY:\n"
            "   - When a question contains a data table, schedule, account statement, balance sheet, or financial statement (whether present in the text, detected table grids, or visible in page images):\n"
            "   - You MUST extract and transcribe the complete table using clean Markdown table format with headers and rows:\n"
            "     | Receipts | Amount (₹) | Payments | Amount (₹) |\n"
            "     | :--- | :--- | :--- | :--- |\n"
            "     | To Subscriptions: 2019-20 | 9,000 | | |\n"
            "     | To Subscriptions: 2020-21 | 40,000 | | |\n"
            "   - DO NOT omit, merge, or collapse columns or rows. Ensure every row, cell, and number is preserved accurately.\n"
            "   - If a table is printed as an image or on a scanned page, transcribe all its rows and columns into a clean Markdown table inside the question statement.\n"
            "   - NEVER drop tables or replace them with synthetic text like '(Table not shown)'.\n"
            "8. PRESERVE QUESTIONS WITH MAPS, DIAGRAMS & IMAGES (MANDATORY DIAGRAM PRESERVATION):\n"
            "   - When a question references or contains an image, map, cartoon, diagram, circuit, graph, geometric figure, or illustration:\n"
            "   - Faithfully transcribe all question text, labels, equations, and instructions. Ensure no question statement, options, or notes are lost.\n"
            "   - NEVER insert synthetic bracketed descriptions such as '(The printed question includes a map of...)' or '(Image not shown)'. Keep the clean original question statement.\n"
            "   - If an image URL is listed in the extracted diagrams list below, set 'image_url' on that question object.\n"
            "   - For ANY question containing a diagram, figure, or visual element (especially on image uploads or visual diagrams on PDF pages), you MUST provide 'diagram_box': [ymin, xmin, ymax, xmax] with coordinates normalized from 0 to 1000 representing the exact bounding box of the visual figure on the document page/image, and 'page': <page_number (1-based)>.\n"
            "   - Maintain the original question order and exact association with its visual elements.\n\n"
            "RETURN ONLY A VALID JSON OBJECT conforming to this exact schema:\n"
            "{\n"
            "  \"title\": \"Title or test name from paper header or empty\",\n"
            "  \"total_marks\": 80,\n"
            "  \"sections\": [\n"
            "    {\n"
            "      \"name\": \"Section A\",\n"
            "      \"sub_heading\": \"Objective Type Questions (1 Mark Each)\",\n"
            "      \"question_type\": \"objective\",\n"
            "      \"marks_per_q\": 1,\n"
            "      \"questions\": [\n"
            "        {\n"
            "          \"question\": \"Choose the correctly matched pair from the following (Book — Author):\",\n"
            "          \"type\": \"choose\",\n"
            "          \"marks\": 1,\n"
            "          \"image_url\": \"\",\n"
            "          \"diagram_box\": [],\n"
            "          \"page\": 1,\n"
            "          \"options\": [\n"
            "            \"Amar Jiban — Tarabai Shinde\",\n"
            "            \"Gulamgiri — Rashsundri Debi\",\n"
            "            \"Burhi Aair Sadhu — Lakshminath Bezbaruah\",\n"
            "            \"Sambad Kaumudi — Pandita Ramabai\"\n"
            "          ],\n"
            "          \"answer\": \"Burhi Aair Sadhu — Lakshminath Bezbaruah\"\n"
            "        }\n"
            "      ]\n"
            "    },\n"
            "    {\n"
            "      \"name\": \"Section B\",\n"
            "      \"sub_heading\": \"Very Short Answer Questions (2 Marks Each)\",\n"
            "      \"question_type\": \"descriptive\",\n"
            "      \"marks_per_q\": 2,\n"
            "      \"questions\": [\n"
            "        {\n"
            "          \"question\": \"How did the European empire expand into America in the 16th century? Explain.\",\n"
            "          \"type\": \"descriptive\",\n"
            "          \"marks\": 2,\n"
            "          \"image_url\": \"\",\n"
            "          \"diagram_box\": [],\n"
            "          \"page\": 1,\n"
            "          \"options\": [],\n"
            "          \"answer\": \"\"\n"
            "        }\n"
            "      ]\n"
            "    },\n"
            "    {\n"
            "      \"name\": \"Section C\",\n"
            "      \"sub_heading\": \"Short Answer Questions (3 Marks Each)\",\n"
            "      \"question_type\": \"descriptive\",\n"
            "      \"marks_per_q\": 3,\n"
            "      \"questions\": [\n"
            "        {\n"
            "          \"question\": \"Why did the Polish language become a symbol of struggle against Russian dominance? Explain.\",\n"
            "          \"type\": \"descriptive\",\n"
            "          \"marks\": 3,\n"
            "          \"image_url\": \"\",\n"
            "          \"diagram_box\": [],\n"
            "          \"page\": 1,\n"
            "          \"options\": [],\n"
            "          \"answer\": \"\"\n"
            "        }\n"
            "      ]\n"
            "    }\n"
            "  ]\n"
            "}"
        )

        user_content = []
        user_content.append({
            "type": "text",
            "text": (
                "Inspect the provided question paper images carefully. "
                "Using only Vision AI, read every page and extract ALL sections, all questions, sub-questions, "
                "options (A, B, C, D), tables (formatted as clean Markdown tables with headers and rows), "
                "mathematical equations (formatted in LaTeX), and diagrams (with diagram_box [ymin, xmin, ymax, xmax] normalized 0-1000 and page) "
                "exactly as formatted in the document."
            )
        })
        for uri in image_data_uris:
            user_content.append({
                "type": "image_url",
                "image_url": {"url": uri}
            })

        if not user_content or not image_data_uris:
            return {
                "status": False,
                "statusMessage": "Could not read text or images from the uploaded file.",
            }, 400

        client = openai_client()
        response = client.chat_completion(
            system_message=system_prompt,
            InputData=user_content,
            aimodel=1,
            max_tokens=8192,
            temperature=0.1,
            timeout=120.0,
            response_format={"type": "json_object"},
            user_name=user_id,
            institute_id=institute_id,
            feature_name="AI Question Extraction",
            endpoint="/extract-questions-from-paper"
        )

        if response.status_code != 200:
            err_msg = "Failed to extract questions using AI."
            try:
                err_msg = response.json().get("statusMessage") or response.json().get("error") or err_msg
            except Exception:
                pass
            return {"status": False, "statusMessage": err_msg}, response.status_code

        parsed_data = {}
        try:
            resp_json = response.json()
            raw_text = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
            print("\n" + "=" * 60)
            print("[VISION AI EXTRACTION JSON RESPONSE]:")
            print(raw_text)
            print("=" * 60 + "\n", flush=True)
            parsed_data = _parse_llm_json(raw_text)
            if not parsed_data or not isinstance(parsed_data, dict):
                raise ValueError("Parsed data is empty or invalid dict")
        except Exception as parse_err:
            print(f"[extract_questions_from_paper] JSON parse error: {parse_err}")
            return {
                "status": False,
                "statusMessage": "Could not parse questions from the document. Please ensure the document is clear and readable.",
            }, 500

        raw_sections = parsed_data.get("sections") or []
        if not raw_sections:
            return {
                "status": False,
                "statusMessage": "No questions were detected in the uploaded question paper. Please verify the file and try again.",
            }, 422

        # Normalize and safeguard sections: ensure embedded section markers split cleanly
        normalized_raw_sections = []
        for sec in raw_sections:
            curr_sec_name = sec.get("name") or f"Section {chr(65 + len(normalized_raw_sections))}"
            curr_sub_heading = sec.get("sub_heading") or f"Answer all questions in {curr_sec_name}."
            curr_sec_type = sec.get("question_type")
            curr_marks_per_q = sec.get("marks_per_q")
            curr_qs = []

            for q in (sec.get("questions") or []):
                q_text = str(q.get("question") or q.get("text") or "").strip()
                sec_match = re.match(r'^(?:SECTION|PART)\s+([A-Z])[:\s\-]*(.*)$', q_text, re.IGNORECASE)
                if sec_match and curr_qs:
                    normalized_raw_sections.append({
                        "name": curr_sec_name,
                        "sub_heading": curr_sub_heading,
                        "question_type": curr_sec_type,
                        "marks_per_q": curr_marks_per_q,
                        "questions": curr_qs
                    })
                    curr_sec_letter = sec_match.group(1).upper()
                    curr_sec_name = f"Section {curr_sec_letter}"
                    curr_sub_heading = f"Answer all questions in {curr_sec_name}."
                    curr_qs = []
                    clean_text = sec_match.group(2).strip()
                    if clean_text:
                        q_copy = dict(q)
                        q_copy["question"] = clean_text
                        curr_qs.append(q_copy)
                    continue

                curr_qs.append(q)

            if curr_qs or not normalized_raw_sections:
                normalized_raw_sections.append({
                    "name": curr_sec_name,
                    "sub_heading": curr_sub_heading,
                    "question_type": curr_sec_type,
                    "marks_per_q": curr_marks_per_q,
                    "questions": curr_qs
                })

        raw_sections = normalized_raw_sections

        # Persist extracted questions into DB so they have real question IDs and categories
        db = SQLiteDB()
        session = db.connect()
        cat_id = None
        cat_name = "Uploaded Paper Questions"

        if session and institute_id:
            try:
                base_cat_name = f"Uploaded - {subject_name}" if subject_name else "Uploaded Questions"
                cat_obj = session.query(Categories).filter_by(institute_id=institute_id, name=base_cat_name).first()
                if not cat_obj:
                    cat_obj = Categories(
                        name=base_cat_name,
                        institute_id=institute_id,
                        created_by=user_id,
                        type="descriptive"
                    )
                    session.add(cat_obj)
                    session.flush()
                cat_id = str(cat_obj.category_id)
                cat_name = cat_obj.name
            except Exception as cat_err:
                print(f"[extract_questions_from_paper] Category setup warning: {cat_err}")

        formatted_sections = []
        total_questions_count = 0
        calculated_total_marks = 0

        for sec_idx, sec in enumerate(raw_sections, 1):
            sec_name = sec.get("name") or f"Section {chr(64 + sec_idx)}"
            raw_qs = sec.get("questions") or []
            has_options_in_sec = any(bool(q.get("options")) for q in raw_qs)
            sec_type = str(sec.get("question_type") or "").lower()
            if has_options_in_sec or "obj" in sec_type or "mcq" in sec_type or "1" in str(sec.get("marks_per_q") or ""):
                sec_type = "objective"
            elif not sec_type:
                sec_type = "objective" if any((float(q.get("marks") or 1) <= 1) for q in raw_qs) else "descriptive"
            elif sec_type not in ["objective", "descriptive"]:
                sec_type = "descriptive"

            sub_heading = sec.get("sub_heading") or f"Answer all questions in {sec_name}."
            sec_questions = []

            for q_idx, q in enumerate(raw_qs, 1):
                q_text = str(q.get("question") or q.get("text") or "").strip()
                if not q_text:
                    continue

                # Strip leading numbering like "1. ", "2. ", "Q1. " so question text renders cleanly
                q_text = re.sub(r'^(?:Q(?:uestion)?\s*)?\d+[\.\)\:\-]\s*', '', q_text).strip()
                # Clean any synthetic descriptions added by vision LLM
                q_text = re.sub(r'\s*\(\s*(?:The\s+)?printed\s+question\s+includes\s+[^)]+\)\s*', ' ', q_text, flags=re.IGNORECASE).strip()
                q_text = re.sub(r'\s*\(\s*(?:Image|Figure|Map|Chart)\s+(?:is\s+)?(?:not\s+shown|included|attached)[^)]*\)\s*', ' ', q_text, flags=re.IGNORECASE).strip()
                # Clean alternative questions intended only for visually impaired candidates in lieu of visual questions
                q_text = re.sub(r'(?is)\s*Note\s*:\s*The\s+following\s+question[^\n]*in\s+lieu\s+of[^\n]*.*$', '', q_text).strip()

                try:
                    q_marks = float(q.get("marks") or 1)
                    if q_marks.is_integer():
                        q_marks = int(q_marks)
                except Exception:
                    q_marks = 1

                options_list = []
                for raw_opt in (q.get("options") or []):
                    cleaned_opt = re.sub(
                        r'^\s*(?:\([A-Za-z]\)\s*|[A-Za-z][\)\.\:]\s*|[A-Za-z]-\s+)',
                        '',
                        str(raw_opt or '')
                    ).strip()
                    if cleaned_opt:
                        options_list.append(cleaned_opt)

                raw_type = str(q.get("type") or "").lower()
                if options_list or raw_type in ["choose", "mcq", "single", "single_choice"]:
                    db_q_type = "choose"
                elif raw_type in ["multi", "multiple_choice"]:
                    db_q_type = "multi"
                elif raw_type in ["fill", "fill_blank", "fill_in_the_blanks"]:
                    db_q_type = "fill"
                else:
                    db_q_type = "descriptive"

                answer_text = q.get("answer") or ""

                # Associate image if provided by LLM, cropped from diagram_box, or matched from extracted document images
                q_image_url = q.get("image_url") or ""
                diag_box = q.get("diagram_box")

                # 1. Crop from diagram_box if specified and no explicit image_url
                if not q_image_url and diag_box and isinstance(diag_box, (list, tuple)) and len(diag_box) == 4:
                    try:
                        ymin, xmin, ymax, xmax = [max(0, min(1000, float(c))) for c in diag_box]
                        if ymax > ymin + 15 and xmax > xmin + 15:
                            diag_bytes = None
                            diag_fname = f"crop_diagram_q{q_idx}.png"
                            if is_pdf and doc:
                                q_p = int(q.get("page") or 1) - 1
                                if 0 <= q_p < len(doc):
                                    p_obj = doc[q_p]
                                    pw = getattr(p_obj.rect, "width", 0) or 1
                                    ph = getattr(p_obj.rect, "height", 0) or 1
                                    pad_x = (xmax - xmin) * 0.02 * pw / 1000
                                    pad_y = (ymax - ymin) * 0.02 * ph / 1000
                                    import fitz
                                    c_rect = fitz.Rect(
                                        max(0, xmin * pw / 1000 - pad_x),
                                        max(0, ymin * ph / 1000 - pad_y),
                                        min(pw, xmax * pw / 1000 + pad_x),
                                        min(ph, ymax * ph / 1000 + pad_y)
                                    )
                                    c_pix = p_obj.get_pixmap(clip=c_rect, dpi=200)
                                    diag_bytes = c_pix.tobytes("png")
                                    diag_fname = f"crop_diagram_p{q_p+1}_q{q_idx}.png"
                            elif source_pil_img:
                                iw, ih = source_pil_img.size
                                pad_x = int((xmax - xmin) * 0.02 * iw / 1000)
                                pad_y = int((ymax - ymin) * 0.02 * ih / 1000)
                                left = max(0, int(xmin * iw / 1000) - pad_x)
                                top = max(0, int(ymin * ih / 1000) - pad_y)
                                right = min(iw, int(xmax * iw / 1000) + pad_x)
                                bottom = min(ih, int(ymax * ih / 1000) + pad_y)
                                cropped = source_pil_img.crop((left, top, right, bottom))
                                c_buf = io.BytesIO()
                                cropped.save(c_buf, format="PNG")
                                diag_bytes = c_buf.getvalue()
                                diag_fname = f"crop_diagram_img_q{q_idx}.png"

                            if diag_bytes and len(diag_bytes) > 200:
                                upload_res = gcs_storage.upload_media(
                                    file_bytes=diag_bytes,
                                    filename=diag_fname,
                                    folder_prefix="questions/images",
                                    expected_type="image"
                                )
                                q_image_url = upload_res.get("url") or upload_res.get("file_url") or ""
                    except Exception as crop_err:
                        print(f"[extract_questions_from_paper] Diagram crop warning: {crop_err}")

                # 2. If still empty, match from extracted_doc_images by question number or preceding text
                if not q_image_url and extracted_doc_images:
                    curr_global_num = total_questions_count + 1
                    for ed_img in extracted_doc_images:
                        ed_q = ed_img.get("q_num")
                        if ed_q and (ed_q == curr_global_num or ed_q == q_idx):
                            q_image_url = ed_img.get("url") or ""
                            break
                        if ed_img.get("preceding_text") and len(ed_img["preceding_text"]) >= 15:
                            if ed_img["preceding_text"][:30].lower() in q_text.lower():
                                q_image_url = ed_img.get("url") or ""
                                break

                q_media_list = [{"media_type": "image", "file_url": q_image_url, "url": q_image_url}] if q_image_url else []

                q_uuid = str(uuid.uuid4())

                # Save question to DB if session available
                if session and institute_id and cat_id:
                    try:
                        db_q = Question(
                            question_id=q_uuid,
                            question_text=q_text,
                            question_type=db_q_type,
                            marks=q_marks,
                            order_number=q_idx,
                            created_by=user_id
                        )
                        session.add(db_q)

                        # Save QuestionMedia if image is associated
                        if q_image_url:
                            session.add(QuestionMedia(
                                question_id=q_uuid,
                                media_type="image",
                                file_url=q_image_url,
                                order_number=1,
                                created_by=user_id
                            ))

                        # Options
                        if db_q_type in ["choose", "multi"] and options_list:
                            clean_ans_cmp = re.sub(
                                r'^\s*(?:\([A-Za-z]\)\s*|[A-Za-z][\)\.\:]\s*|[A-Za-z]-\s+)',
                                '',
                                str(answer_text or '')
                            ).strip().lower()
                            for opt_idx, opt_val in enumerate(options_list):
                                opt_str = str(opt_val).strip()
                                is_corr = 1 if (clean_ans_cmp and (clean_ans_cmp in opt_str.lower() or opt_str.lower() in clean_ans_cmp)) else 0
                                session.add(Option(
                                    question_id=q_uuid,
                                    option_text=opt_str,
                                    is_correct=is_corr,
                                    order_number=opt_idx + 1
                                ))
                        elif answer_text:
                            session.add(Option(
                                question_id=q_uuid,
                                option_text=str(answer_text).strip(),
                                is_correct=1
                            ))

                        session.add(QuestionMapping(
                            question_id=q_uuid,
                            category_id=cat_id
                        ))
                    except Exception as q_save_err:
                        print(f"[extract_questions_from_paper] Question DB save warning: {q_save_err}")

                sec_questions.append({
                    "id": q_uuid,
                    "question": q_text,
                    "marks": q_marks,
                    "type": db_q_type,
                    "category_id": cat_id,
                    "category_name": cat_name,
                    "options": options_list,
                    "answer": answer_text,
                    "image_url": q_image_url,
                    "media": q_media_list
                })
                total_questions_count += 1
                calculated_total_marks += q_marks

            # Infer marks per question for section if uniform
            unique_marks = list({q["marks"] for q in sec_questions})
            marks_per_q = unique_marks[0] if len(unique_marks) == 1 else (sec.get("marks_per_q") or 1)

            formatted_sections.append({
                "name": sec_name,
                "sub_heading": sub_heading,
                "instructions": sub_heading,
                "question_type": sec_type,
                "order_number": sec_idx,
                "targetCount": len(sec_questions),
                "marksPerQ": marks_per_q,
                "questions": sec_questions
            })

        if session:
            try:
                session.commit()
            except Exception as commit_err:
                session.rollback()
                print(f"[extract_questions_from_paper] Commit warning: {commit_err}")
            finally:
                session.close()

        detected_total = parsed_data.get("total_marks") or calculated_total_marks

        return {
            "status": True,
            "statusMessage": f"Successfully extracted {total_questions_count} questions organized into {len(formatted_sections)} sections.",
            "data": {
                "title": parsed_data.get("title") or "",
                "total_marks": detected_total,
                "sections": formatted_sections,
                "total_questions": total_questions_count,
            }
        }, 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "statusMessage": f"Error extracting questions: {str(e)}",
            "error": str(e)
        }, 500
    finally:
        if doc is not None:
            try:
                doc.close()
            except Exception:
                pass


def extract_and_map_answer_key(request):
    """
    Extracts answers from an uploaded answer key document (PDF or Image)
    and maps them to the existing questions in the test paper using Vision AI.
    """
    doc = None
    try:
        if "file" not in request.files:
            return {
                "status": False,
                "statusMessage": "No file uploaded. Please upload a valid answer key (PDF or image).",
            }, 400

        file_obj = request.files["file"]
        if not file_obj or not file_obj.filename:
            return {
                "status": False,
                "statusMessage": "No file selected.",
            }, 400

        file_bytes = file_obj.read()
        if not file_bytes:
            return {
                "status": False,
                "statusMessage": "Uploaded file is empty.",
            }, 400

        filename = (getattr(file_obj, "filename", "") or "").lower()
        form = request.form or {}
        institute_id = form.get("institute_id")
        user_id = form.get("user_id") or "System"
        subject_name = form.get("subject_name") or ""
        questions_raw = form.get("questions") or "[]"

        try:
            questions_list = json.loads(questions_raw) if isinstance(questions_raw, str) else (questions_raw or [])
        except Exception:
            questions_list = []

        if not questions_list:
            return {
                "status": False,
                "statusMessage": "No questions provided to map answers to.",
            }, 400

        # AI credits check
        from others.ai_credits import check_institute_ai_access
        has_access, err_msg, err_code = check_institute_ai_access(
            institute_id=institute_id,
            user_id=user_id,
            request_obj=request
        )
        if not has_access:
            return {
                "status": False,
                "error": err_msg,
                "statusMessage": err_msg,
                "message": err_msg,
            }, err_code

        # Convert PDF to images or read uploaded image
        image_data_uris = []
        is_pdf = filename.endswith(".pdf") or "pdf" in (file_obj.content_type or "").lower()

        if is_pdf:
            try:
                import fitz
                doc = fitz.open(stream=file_bytes, filetype="pdf")
                total_pages = len(doc)
                for p_idx in range(total_pages):
                    page = doc[p_idx]
                    try:
                        pix = page.get_pixmap(dpi=200)
                        img_bytes = pix.tobytes("jpeg")
                        b64 = base64.b64encode(img_bytes).decode("utf-8")
                        image_data_uris.append(f"data:image/jpeg;base64,{b64}")
                    except Exception as img_err:
                        print(f"[extract_and_map_answer_key] Page {p_idx + 1} render warning: {img_err}")
            except Exception as pdf_err:
                print(f"[extract_and_map_answer_key] PDF render warning: {pdf_err}")
        else:
            mime = "image/png" if filename.endswith(".png") else "image/jpeg"
            b64 = base64.b64encode(file_bytes).decode("utf-8")
            image_data_uris.append(f"data:{mime};base64,{b64}")

        if not image_data_uris:
            return {
                "status": False,
                "statusMessage": "Could not read images from the uploaded answer key file.",
            }, 400

        # Build questions summary for AI
        q_summary_lines = []
        for idx, q in enumerate(questions_list):
            q_id = q.get("id") or str(idx)
            sec_name = q.get("section_name") or ""
            q_type = q.get("type") or "descriptive"
            q_marks = q.get("marks") or 1
            q_text = q.get("question") or ""
            q_options = q.get("options") or []
            
            line = f"Question #{idx + 1} [ID: {q_id}] ({sec_name}, Type: {q_type}, Marks: {q_marks}):\nStatement: {q_text}"
            if q_options:
                opts_str = "\n".join([f"  - Option {chr(65 + o_idx)}: {opt.get('text') if isinstance(opt, dict) else str(opt)}" for o_idx, opt in enumerate(q_options)])
                line += f"\nOptions:\n{opts_str}"
            q_summary_lines.append(line)

        all_questions_text = "\n\n".join(q_summary_lines)

        system_prompt = (
            "You are an expert academic evaluator, examiner, and answer key parser AI. "
            "Inspect the provided Answer Key document images carefully. "
            "Your task is to extract all answers from the document and match each answer to its exact corresponding "
            "question from the test paper questions list provided.\n\n"
            "MAPPING RULES:\n"
            "1. Match answers by question numbering, sequence, section, and question content.\n"
            "2. For Multiple Choice / Objective questions ('choose'):\n"
            "   - Determine which option (e.g. A, B, C, D) is indicated in the answer key.\n"
            "   - Find the matching option in the provided options list.\n"
            "   - Provide the complete answer text and the 0-based 'correct_option_index'.\n"
            "3. For Descriptive / Short Answer / Long Answer questions:\n"
            "   - Extract the complete model answer, solution key, marking points, or explanation provided in the answer key document.\n"
            "4. Return ONLY a valid JSON object strictly conforming to this schema:\n"
            "{\n"
            "  \"answers\": [\n"
            "    {\n"
            "      \"question_id\": \"<question_id from the provided list>\",\n"
            "      \"question_index\": 0,\n"
            "      \"answer\": \"<Extracted model answer or selected option text>\",\n"
            "      \"correct_option_index\": 1\n"
            "    }\n"
            "  ]\n"
            "}"
        )

        user_content = [
            {
                "type": "text",
                "text": (
                    f"Subject: {subject_name}\n\n"
                    f"TEST PAPER QUESTIONS LIST:\n"
                    f"-------------------------\n"
                    f"{all_questions_text}\n\n"
                    f"-------------------------\n"
                    "Now inspect the uploaded answer key images below. Extract the answer for each question "
                    "and map it to the corresponding question in the list. Return the JSON object with the 'answers' array."
                )
            }
        ]
        for uri in image_data_uris:
            user_content.append({
                "type": "image_url",
                "image_url": {"url": uri}
            })

        client = openai_client()
        response = client.chat_completion(
            system_message=system_prompt,
            InputData=user_content,
            aimodel=1,
            max_tokens=8192,
            temperature=0.1,
            timeout=240.0,
            response_format={"type": "json_object"},
            user_name=user_id,
            institute_id=institute_id,
            feature_name="AI Answer Key Extraction",
            endpoint="/extract-and-map-answer-key"
        )

        if response.status_code != 200:
            err_msg = "Failed to extract and map answer key using AI."
            try:
                raw_json = response.json()
                if isinstance(raw_json, dict):
                    err_msg = raw_json.get("statusMessage") or raw_json.get("message")
                    if not err_msg and isinstance(raw_json.get("error"), dict):
                        err_msg = raw_json.get("error", {}).get("message")
                    elif not err_msg:
                        err_msg = raw_json.get("error") or err_msg
            except Exception:
                pass
            return {
                "status": False,
                "statusMessage": str(err_msg),
                "error": str(err_msg),
                "code": getattr(response, "code", "AI_CREDIT_EXHAUSTED" if response.status_code == 403 else "AI_ERROR")
            }, response.status_code

        resp_json = response.json()
        raw_text = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
        parsed_data = _parse_llm_json(raw_text) or {}
        answers_list = parsed_data.get("answers") or []

        return {
            "status": True,
            "statusMessage": f"Successfully mapped {len(answers_list)} answers from the answer key.",
            "data": {
                "answers": answers_list
            }
        }, 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "statusMessage": f"Error mapping answer key: {str(e)}",
            "error": str(e)
        }, 500
    finally:
        if doc is not None:
            try:
                doc.close()
            except Exception:
                pass


def _extract_source_material_text(files, max_chars=24000):
    """Extract plain text from uploaded PDF, DOCX, or text reference files."""
    if not files:
        return ""
    chunks = []
    for f in files:
        if not f or not getattr(f, "filename", ""):
            continue
        fname = f.filename.lower()
        try:
            f.stream.seek(0)
        except Exception:
            pass
        try:
            raw = f.read()
        except Exception:
            continue
        if not raw:
            continue

        extracted = ""
        if fname.endswith(".pdf"):
            try:
                import fitz
                doc = fitz.open(stream=raw, filetype="pdf")
                pages_txt = [page.get_text("text") or "" for page in doc]
                extracted = "\n".join(pages_txt).strip()
            except Exception as pdf_err:
                print(f"[_extract_source_material_text] PDF warning ({f.filename}): {pdf_err}")
        elif fname.endswith(".docx"):
            try:
                import docx
                import io
                doc = docx.Document(io.BytesIO(raw))
                extracted = "\n".join([p.text for p in doc.paragraphs if p.text]).strip()
            except Exception:
                try:
                    import zipfile
                    import io
                    import xml.etree.ElementTree as ET
                    with zipfile.ZipFile(io.BytesIO(raw)) as zf:
                        xml_bytes = zf.read("word/document.xml")
                    root = ET.fromstring(xml_bytes)
                    texts = [elem.text for elem in root.iter() if elem.tag.endswith("}t") and elem.text]
                    extracted = " ".join(texts).strip()
                except Exception as docx_err:
                    print(f"[_extract_source_material_text] DOCX warning ({f.filename}): {docx_err}")
        elif fname.endswith((".txt", ".md")):
            try:
                extracted = raw.decode("utf-8", errors="ignore").strip()
            except Exception:
                pass

        if extracted:
            chunks.append(f"[Source File: {f.filename}]\n{extracted}")

    combined = "\n\n".join(chunks).strip()
    if len(combined) > max_chars:
        combined = combined[:max_chars] + "\n...[source material truncated]"
    return combined


def generate_paper_answers(request):
    """
    Automatically generates answers for all questions in the question paper using AI.
    Supports optional context parameters (topic, industry, target_users, user_role,
    complexity, additional_instructions) and reference source material (text or PDF/DOCX files).
    """
    try:
        body = request.get_json(silent=True) or request.form or {}
        institute_id = body.get("institute_id")
        user_id = body.get("user_id") or "System"
        subject_name = body.get("subject_name") or ""
        topic = (body.get("topic") or "").strip()
        industry = (body.get("industry") or "").strip()
        target_users = (body.get("target_users") or "").strip()
        user_role = (body.get("user_role") or "").strip()
        complexity = (body.get("complexity") or "").strip()
        additional_instructions = (body.get("additional_instructions") or "").strip()
        source_text = (body.get("source_text") or "").strip()
        uploaded_files = request.files.getlist("files") or request.files.getlist("file") or []
        extracted_file_text = _extract_source_material_text(uploaded_files)
        if extracted_file_text:
            source_text = f"{source_text}\n\n{extracted_file_text}".strip() if source_text else extracted_file_text
        questions_raw = body.get("questions") or []

        if isinstance(questions_raw, str):
            try:
                questions_list = json.loads(questions_raw)
            except Exception:
                questions_list = []
        else:
            questions_list = questions_raw or []

        if not questions_list:
            return {
                "status": False,
                "statusMessage": "No questions provided to generate answers for.",
            }, 400

        # AI credits check
        from others.ai_credits import check_institute_ai_access
        has_access, err_msg, err_code = check_institute_ai_access(
            institute_id=institute_id,
            user_id=user_id,
            request_obj=request
        )
        if not has_access:
            return {
                "status": False,
                "error": err_msg,
                "statusMessage": err_msg,
                "message": err_msg,
            }, err_code

        # Build questions text
        q_summary_lines = []
        for idx, q in enumerate(questions_list):
            q_id = q.get("id") or str(idx)
            sec_name = q.get("section_name") or ""
            q_type = q.get("type") or "descriptive"
            q_marks = q.get("marks") or 1
            q_text = q.get("question") or ""
            q_options = q.get("options") or []
            
            line = f"Question #{idx + 1} [ID: {q_id}] ({sec_name}, Type: {q_type}, Marks: {q_marks}):\nStatement: {q_text}"
            if q_options:
                opts_str = "\n".join([f"  - Option {chr(65 + o_idx)}: {opt.get('text') if isinstance(opt, dict) else str(opt)}" for o_idx, opt in enumerate(q_options)])
                line += f"\nOptions:\n{opts_str}"
            q_summary_lines.append(line)

        all_questions_text = "\n\n".join(q_summary_lines)

        system_prompt = (
            "You are an expert academic examiner and subject matter expert. "
            "Generate an accurate, comprehensive, and clear answer key for all the provided examination questions.\n\n"
            "RULES FOR ANSWER GENERATION:\n"
            "1. For Multiple Choice / Objective questions ('choose'):\n"
            "   - Identify the correct option.\n"
            "   - Return the full text of that option (e.g. '(B) Option Text') in 'answer'.\n"
            "   - Provide the 0-based index of the correct option in 'correct_option_index'.\n"
            "2. For Descriptive, Short Answer, Long Answer, or Numerical questions:\n"
            "   - Provide an accurate, high-scoring model answer with key points and explanations proportional to the marks.\n"
            "   - Use clean formatting, bullet points, or LaTeX formulas where appropriate.\n"
            "3. Answer EVERY question in the list sequentially.\n"
            "4. Return ONLY a valid JSON object strictly conforming to this schema:\n"
            "{\n"
            "  \"answers\": [\n"
            "    {\n"
            "      \"question_id\": \"<question_id from the provided list>\",\n"
            "      \"question_index\": 0,\n"
            "      \"answer\": \"<Accurate solution or selected option text>\",\n"
            "      \"correct_option_index\": 1\n"
            "    }\n"
            "  ]\n"
            "}"
        )

        context_lines = [f"Subject: {subject_name}"]
        if topic:
            context_lines.append(f"Subject / Chapter Title: {topic}")
        if industry:
            context_lines.append(f"Industry: {industry}")
        if target_users:
            context_lines.append(f"Target Users: {target_users}")
        if user_role:
            context_lines.append(f"User Role: {user_role}")
        if complexity:
            context_lines.append(f"Complexity Level: {complexity}")
        if additional_instructions:
            context_lines.append(f"Additional Context / Instructions: {additional_instructions}")
        if source_text:
            context_lines.append(f"Reference Source Material:\n{source_text}")
        context_block = "\n".join(context_lines)

        user_content = (
            f"{context_block}\n\n"
            f"QUESTIONS LIST:\n"
            f"---------------\n"
            f"{all_questions_text}\n\n"
            f"Generate the complete answers for every question, strictly respecting any provided context, complexity, audience, instructions, and reference source material. Return the JSON object with the 'answers' array."
        )

        client = openai_client()
        response = client.chat_completion(
            system_message=system_prompt,
            InputData=user_content,
            aimodel=1,
            max_tokens=8192,
            temperature=0.1,
            timeout=240.0,
            response_format={"type": "json_object"},
            user_name=user_id,
            institute_id=institute_id,
            feature_name="AI Answer Generation",
            endpoint="/generate-paper-answers"
        )

        if response.status_code != 200:
            err_msg = "Failed to generate answers using AI."
            try:
                raw_json = response.json()
                if isinstance(raw_json, dict):
                    err_msg = raw_json.get("statusMessage") or raw_json.get("message")
                    if not err_msg and isinstance(raw_json.get("error"), dict):
                        err_msg = raw_json.get("error", {}).get("message")
                    elif not err_msg:
                        err_msg = raw_json.get("error") or err_msg
            except Exception:
                pass
            return {
                "status": False,
                "statusMessage": str(err_msg),
                "error": str(err_msg),
                "code": getattr(response, "code", "AI_CREDIT_EXHAUSTED" if response.status_code == 403 else "AI_ERROR")
            }, response.status_code

        resp_json = response.json()
        raw_text = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
        parsed_data = _parse_llm_json(raw_text) or {}
        answers_list = parsed_data.get("answers") or []

        return {
            "status": True,
            "statusMessage": f"Successfully generated answers for {len(answers_list)} questions.",
            "data": {
                "answers": answers_list
            }
        }, 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "statusMessage": f"Error generating answers: {str(e)}",
            "error": str(e)
        }, 500


def fine_tune_paper_answer(request):
    """
    Fine-tunes or refines an individual question's answer using AI based on a custom prompt/instruction.
    Supports both descriptive questions and multiple-choice questions.
    """
    try:
        body = request.get_json(silent=True) or request.form or {}
        institute_id = body.get("institute_id")
        user_id = body.get("user_id") or "System"
        question_text = body.get("question_text") or ""
        current_answer = body.get("current_answer") or ""
        instruction = body.get("instruction") or ""
        question_type = (body.get("question_type") or "descriptive").lower()
        options = body.get("options") or []
        marks = body.get("marks") or 1

        if not question_text:
            return {"status": False, "statusMessage": "Question text is required."}, 400
        if not instruction:
            return {"status": False, "statusMessage": "Instruction / prompt is required for fine-tuning."}, 400

        # AI credits check
        from others.ai_credits import check_institute_ai_access
        has_access, err_msg, err_code = check_institute_ai_access(
            institute_id=institute_id,
            user_id=user_id,
            request_obj=request
        )
        if not has_access:
            return {
                "status": False,
                "error": err_msg,
                "statusMessage": err_msg,
                "message": err_msg,
            }, err_code

        system_prompt = (
            "You are an expert academic examiner and subject matter expert. "
            "Your task is to refine, improve, or re-evaluate the answer to an examination question based strictly on the user's instructions."
        )

        is_objective = question_type in ["choose", "multi"] or (isinstance(options, list) and len(options) > 0)

        if is_objective:
            opts_str = "\n".join([f"Option {chr(65 + idx)}: {opt.get('text') if isinstance(opt, dict) else str(opt)}" for idx, opt in enumerate(options)])
            user_message = f"""Question: {question_text}
Available Options:
{opts_str}
Current Answer: {current_answer}
Marks: {marks}

User Fine-Tuning Instruction:
"{instruction}"

Based on the question, options, and user instruction, identify the single correct option.
Return ONLY valid JSON matching this schema:
{{
  "correct_option_index": <0-based integer index of correct option>,
  "answer": "<Exact text of the correct option>"
}}"""
        else:
            user_message = f"""Question: {question_text}
Current Model Answer: {current_answer}
Marks: {marks}

User Fine-Tuning Instruction:
"{instruction}"

Refine the model answer according to the user instruction while maintaining academic accuracy and appropriate depth for {marks} marks.
Return ONLY valid JSON matching this schema:
{{
  "answer": "<The refined and improved model answer>"
}}"""

        client = openai_client()
        response = client.chat_completion(
            system_message=system_prompt,
            InputData=user_message,
            aimodel=1,
            max_tokens=2048,
            temperature=0.2,
            timeout=120.0,
            response_format={"type": "json_object"},
            user_name=user_id,
            institute_id=institute_id,
            feature_name="AI Answer Fine-Tuning",
            endpoint="/fine-tune-paper-answer"
        )

        if response.status_code != 200:
            err_msg = "Failed to fine-tune answer using AI."
            try:
                raw_json = response.json()
                if isinstance(raw_json, dict):
                    err_msg = raw_json.get("statusMessage") or raw_json.get("message") or raw_json.get("error") or err_msg
            except Exception:
                pass
            return {"status": False, "statusMessage": str(err_msg), "error": str(err_msg)}, response.status_code

        resp_json = response.json()
        raw_text = resp_json.get("choices", [{}])[0].get("message", {}).get("content", "").strip()
        parsed_data = _parse_llm_json(raw_text) or {}
        new_answer = parsed_data.get("answer") or ""
        correct_idx = parsed_data.get("correct_option_index")

        return {
            "status": True,
            "statusMessage": "Answer successfully fine-tuned.",
            "data": {
                "answer": new_answer,
                "correct_option_index": correct_idx
            }
        }, 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return {
            "status": False,
            "statusMessage": f"Error fine-tuning answer: {str(e)}",
            "error": str(e)
        }, 500

