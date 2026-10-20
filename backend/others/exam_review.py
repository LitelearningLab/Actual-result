import datetime
import uuid
import random
import json
# pyrefly: ignore [missing-import]
from sqlalchemy import func
from db.db import SQLiteDB
from db.models import User, Exam, ExamSchedule, Question, QuestionMedia, Option, Answer, Exam_Attempt, ExamScheduleMapping, ExamReviewComments, ExamReviewCommentsHistory, MarksHistory, ExamMapping, ExamQuestionMapping, QuestionMapping
from others.settings import get_ai_confidence_threshold
from others.llm import descriptive_evaluation, vision_evaluate_question_images, openai_client
from others.gcs_service import gcs_storage


def _validate_student_answer_gcs_path(gcs_path, attempt_id, question_id, exam_id=None, institute_id=None):
    """
    Validates that a GCS path strictly adheres to the canonical student answer structure:
    student_answers/{institute_id}/{exam_id}/{attempt_id}/{question_id}/{filename}
    Ensures no path traversal and matches the authoritative attempt_id and question_id.
    """
    if not gcs_path or not isinstance(gcs_path, str):
        return False
    if ".." in gcs_path or "\\" in gcs_path:
        return False
    clean_path = gcs_path.strip("/ ")
    parts = clean_path.split("/")
    if len(parts) < 6:
        return False
    if parts[0] != "student_answers":
        return False
    if str(parts[3]) != str(attempt_id):
        return False
    if str(parts[4]) != str(question_id):
        return False
    return True

def get_exam_question_ids(session, exam_id=None, schedule_id=None, attempt_id=None):
    """
    Returns the ordered list of all question_ids associated with this exam/attempt.
    """
    exam = None
    if attempt_id and not schedule_id:
        att = session.query(Exam_Attempt).filter(Exam_Attempt.attempt_id == attempt_id).first()
        if att and att.schedule_id:
            schedule_id = att.schedule_id
    if schedule_id and not exam_id:
        exam_schedule = session.query(ExamSchedule).filter(ExamSchedule.schedule_id == schedule_id).first()
        if exam_schedule and exam_schedule.exam_id:
            exam_id = exam_schedule.exam_id
    if exam_id:
        exam = session.query(Exam).filter(Exam.exam_id == exam_id).first()

    all_qids = []
    seen = set()

    # 1. ExamQuestionMapping rows
    if exam_id:
        eqm_rows = session.query(ExamQuestionMapping.question_id).filter(
            ExamQuestionMapping.exam_id == exam_id
        ).order_by(ExamQuestionMapping.order_number.asc()).all()
        for r in eqm_rows:
            qid = r[0] if isinstance(r, (list, tuple)) else getattr(r, 'question_id', None)
            if qid and qid not in seen:
                seen.add(qid)
                all_qids.append(qid)

    # 2. If ExamQuestionMapping was empty, resolve from ExamMapping
    if exam_id and not all_qids:
        mappings = session.query(ExamMapping).filter(ExamMapping.exam_id == exam_id).all()
        for m in mappings:
            cat_q_rows = session.query(QuestionMapping.question_id).filter(
                QuestionMapping.category_id == m.category_id
            ).all()
            cat_qids = [r[0] if isinstance(r, (list, tuple)) else getattr(r, 'question_id', None) for r in cat_q_rows]
            cat_qids = [q for q in cat_qids if q]
            limit = m.number_of_questions or len(cat_qids)
            for qid in cat_qids[:limit]:
                if qid not in seen:
                    seen.add(qid)
                    all_qids.append(qid)

    # 3. Include any additional questions that were answered in this attempt (e.g. from randomization or fallback)
    if attempt_id:
        ans_rows = session.query(Answer.question_id).filter(
            Answer.attempt_id == attempt_id
        ).distinct().all()
        for r in ans_rows:
            qid = r[0] if isinstance(r, (list, tuple)) else getattr(r, 'question_id', None)
            if qid and qid not in seen:
                seen.add(qid)
                all_qids.append(qid)

    return all_qids, exam

def get_exam_total_marks(session, exam_id=None, schedule_id=None, attempt_id=None):
    question_ids, exam = get_exam_question_ids(session, exam_id, schedule_id, attempt_id)
    if question_ids:
        total_marks = session.query(func.sum(Question.marks)).filter(Question.question_id.in_(question_ids)).scalar() or 0
        if total_marks > 0:
            return float(total_marks), question_ids
    if exam and getattr(exam, 'total_questions', None) and exam.total_questions > 0:
        return float(exam.total_questions), question_ids
    return float(len(question_ids)), question_ids

def calculate_attempt_score(session, attempt_id):
    """
    Idempotently calculates total obtained marks for an attempt based on the latest answer
    for each unique question_id. Returns (total_score, latest_answers_by_qid, all_answers).
    """
    all_answers = session.query(Answer).filter(Answer.attempt_id == attempt_id).all()
    latest_answers_by_qid = {}
    for ans in all_answers:
        qid_key = str(ans.question_id) if ans.question_id is not None else ""
        if qid_key not in latest_answers_by_qid:
            latest_answers_by_qid[qid_key] = ans
        else:
            existing = latest_answers_by_qid[qid_key]
            if ans.created_date and (not existing.created_date or ans.created_date > existing.created_date):
                latest_answers_by_qid[qid_key] = ans

    total_score = sum(float(ans.marks_awarded or 0) for ans in latest_answers_by_qid.values()) if latest_answers_by_qid else 0.0
    return total_score, latest_answers_by_qid, all_answers

def is_review_eligible_attempt(attempt):
    """Only finalized attempts can participate in student review flows."""
    return getattr(attempt, 'status', None) in ('submitted', 'evaluated')

def finalize_expired_attempts(session, exam_schedule, attempts, now=None):
    """Finalize timed-out attempts when schedule end_time passes or remaining_seconds hits 0."""
    now = now or datetime.datetime.utcnow()
    finalized_ids = []
    for attempt in attempts:
        if attempt.status != 'in_progress':
            continue
        schedule_expired = bool(exam_schedule and exam_schedule.end_time and now >= exam_schedule.end_time)
        time_ran_out = getattr(attempt, 'remaining_seconds', None) is not None and attempt.remaining_seconds <= 0
        if schedule_expired or time_ran_out:
            deadline = exam_schedule.end_time if (schedule_expired and exam_schedule.end_time) else now
            attempt.status = 'submitted'
            attempt.submitted_date = deadline
            attempt.remaining_seconds = 0
            session.add(attempt)
            finalized_ids.append(attempt.attempt_id)
    if finalized_ids:
        session.commit()
    return finalized_ids

def is_after_everyone_finished_available(session, exam_schedule, now=None):
    """Unlock when all currently assigned students submitted, or time expired."""
    now = now or datetime.datetime.utcnow()
    if exam_schedule.end_time and now >= exam_schedule.end_time:
        return True

    assigned_user_ids = session.query(ExamScheduleMapping.user_id).filter(
        ExamScheduleMapping.schedule_id == exam_schedule.schedule_id
    ).distinct().all()
    assigned_user_ids = [row[0] for row in assigned_user_ids]
    if not assigned_user_ids:
        return False

    completed_count = session.query(func.count(func.distinct(Exam_Attempt.user_id))).filter(
        Exam_Attempt.schedule_id == exam_schedule.schedule_id,
        Exam_Attempt.user_id.in_(assigned_user_ids),
        (Exam_Attempt.submitted_date.isnot(None) | Exam_Attempt.status.in_(('submitted', 'evaluated')))
    ).scalar() or 0
    return completed_count == len(assigned_user_ids)

def review_user_exam(request, current_user=None):

    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    args = getattr(request, "args", {})

    user_id: str = args.get("user_id", "")
    schedule_id: str = args.get("scheduler_id", "") or args.get("schedule_id", "")
    attempt_id: str = args.get("attempt_id", "")

    if not schedule_id and user_id:
        att = session.query(Exam_Attempt).filter(Exam_Attempt.user_id == user_id).first()
        if att:
            schedule_id = str(att.schedule_id)
        else:
            ans = session.query(Answer).filter(Answer.user_id == user_id).first()
            if ans:
                schedule_id = str(ans.schedule_id)

    current_user_role = str(getattr(current_user, "user_role", "") or "").lower()
    is_student_request = current_user_role in ("user", "student", "learner")

    if is_student_request and str(getattr(current_user, "user_id", "")) != str(user_id):
        session.close()
        return {"statusMessage": "Access denied", "status": False}, 403

    try:
        ai_confidence_threshold = get_ai_confidence_threshold(session)
        attempts = session.query(Exam_Attempt).filter(
            Exam_Attempt.user_id == user_id,
            Exam_Attempt.schedule_id == schedule_id
        ).all()

        q_sched = session.query(ExamSchedule).filter(ExamSchedule.schedule_id == schedule_id)
        if is_student_request:
            q_sched = q_sched.filter(ExamSchedule.published == 1)
        exam_schedule = q_sched.first()

        if not exam_schedule:
            return {"statusMessage": "Schedule not found", "status": False}, 404

        # Enforce institute boundary for non-superadmin instructors/admins
        if not is_student_request and current_user and getattr(current_user, "institute_id", None):
            cur_inst = str(current_user.institute_id).strip()
            sched_inst = str(getattr(exam_schedule, "institute_id", None) or "").strip()
            if cur_inst and sched_inst and cur_inst != sched_inst and current_user_role not in ("superadmin", "super_admin"):
                session.close()
                return {"statusMessage": "Access denied for this institute", "status": False}, 403

        finalized_ids = finalize_expired_attempts(session, exam_schedule, attempts)
        for finalized_id in finalized_ids:
            try:
                validate_answers(finalized_id)
            except Exception as eval_err:
                print(f"AI evaluation warning during review for attempt {finalized_id}: {eval_err}")
        completed_attempts = [attempt for attempt in attempts if is_review_eligible_attempt(attempt)]
        completed_attempts.sort(key=lambda attempt: attempt.attempt_number or 0)
        review_mode = exam_schedule.review_mode or ('instant' if exam_schedule.user_review == 1 else 'no_review')

        requested_attempt = None
        if attempt_id:
            requested_attempt = next(
                (attempt for attempt in completed_attempts if str(attempt.attempt_id) == str(attempt_id)),
                None
            )
            if not requested_attempt:
                return {"statusMessage": "Submitted attempt not found", "status": False}, 404
            if is_student_request and str(requested_attempt.user_id) != str(getattr(current_user, "user_id", "")):
                return {"statusMessage": "Access denied for this attempt", "status": False}, 403
        elif is_student_request and completed_attempts:
            # Older student clients do not send attempt_id. Select one eligible
            # attempt so another attempt in the schedule remains independent.
            eligible_attempts = completed_attempts
            if review_mode in ('manual', 'no_review'):
                eligible_attempts = [attempt for attempt in completed_attempts if attempt.status == 'evaluated']
            unreviewed_attempts = [
                attempt for attempt in eligible_attempts
                if not getattr(attempt, 'review_opened_at', None)
            ]
            fallback_attempts = (
                unreviewed_attempts
                if not bool(exam_schedule.multiple_review) and unreviewed_attempts
                else eligible_attempts
            )
            requested_attempt = fallback_attempts[-1] if fallback_attempts else None

        review_attempts = [requested_attempt] if requested_attempt else completed_attempts
        now = datetime.datetime.utcnow()
        review_available = bool(review_attempts) and (
            not is_student_request
            or review_mode == 'instant'
            or (review_mode == 'after_schedule_ends' and exam_schedule.end_time and now >= exam_schedule.end_time)
            or (review_mode == 'after_everyone_finishes' and is_after_everyone_finished_available(session, exam_schedule, now))
            or (review_mode == 'scheduled' and exam_schedule.review_at and now >= exam_schedule.review_at and (not exam_schedule.review_end_at or now <= exam_schedule.review_end_at))
            or (
                review_mode in ('manual', 'no_review')
                and bool(exam_schedule.manual_review_enabled)
                and any(attempt.status == 'evaluated' for attempt in review_attempts)
            )
        )
        if not review_available:
            return {"statusMessage": "Review is not available for this test", "status": False}, 403

        # Record first review opening for telemetry and consumption tracking
        if is_student_request and requested_attempt:
            if not getattr(requested_attempt, 'review_opened_at', None):
                try:
                    session.query(Exam_Attempt).filter(
                        Exam_Attempt.attempt_id == requested_attempt.attempt_id,
                        Exam_Attempt.review_opened_at.is_(None)
                    ).update({Exam_Attempt.review_opened_at: now}, synchronize_session=False)
                    session.commit()
                    requested_attempt.review_opened_at = now
                except Exception:
                    session.rollback()

        exam = session.query(Exam).filter(Exam.exam_id == exam_schedule.exam_id).first()
        total_questions = exam.total_questions if exam else 0

        # Admins viewing test reports must see all report data regardless of schedule settings
        show_score = True if not is_student_request else bool(exam_schedule.show_score)
        show_explanations = True if not is_student_request else bool(exam_schedule.show_explanations)
        show_student_answers = True if not is_student_request else bool(exam_schedule.show_student_answers)
        show_correct_answers = True if not is_student_request else bool(exam_schedule.show_correct_answers)

        attempt_reviews = []
        for attempt in review_attempts:
            # get question answers and aggregate calculated score per question
            calc_score, latest_answers_by_qid, all_answers = calculate_attempt_score(session, attempt.attempt_id)
            all_answers_validated = all(getattr(ans, 'is_validated', 0) == 1 for ans in latest_answers_by_qid.values()) if latest_answers_by_qid else False

            db_needs_update = False
            if attempt.score is None or abs((attempt.score or 0.0) - calc_score) > 0.001:
                attempt.score = calc_score
                db_needs_update = True

            if all_answers_validated and attempt.status != 'evaluated':
                attempt.status = 'evaluated'
                db_needs_update = True

            review_data = {}
            review_data["attempt_id"] = attempt.attempt_id
            review_data["attempt_number"] = attempt.attempt_number
            review_data["started_date"] = attempt.started_date
            review_data["submitted_date"] = attempt.submitted_date
            time_delta = attempt.submitted_date - attempt.started_date if attempt.submitted_date and attempt.started_date else None
            review_data["time_taken"] = str(time_delta) if time_delta else None
            review_data["status"] = attempt.status
            review_data["score"] = attempt.score if show_score else None
            
            # get all test questions and total marks for this exam/attempt
            all_qids, exam_obj = get_exam_question_ids(session, exam_id=exam_schedule.exam_id, schedule_id=exam_schedule.schedule_id, attempt_id=attempt.attempt_id)
            effective_total, _ = get_exam_total_marks(session, exam_id=exam_schedule.exam_id, schedule_id=exam_schedule.schedule_id, attempt_id=attempt.attempt_id)
            
            total_questions_count = len(all_qids) if all_qids else (total_questions or 0)
            review_data["total_questions"] = total_questions_count
            review_data["total_marks"] = effective_total if show_score else None
            
            # calculate correct percentage and pass/fail status
            passing_score = exam_schedule.pass_mark if (exam_schedule and exam_schedule.pass_mark is not None) else (exam.pass_mark if (exam and exam.pass_mark is not None) else 50)
            if effective_total > 0 and attempt.score is not None:
                correct_pct = round((float(attempt.score) / float(effective_total)) * 100, 2)
            elif attempt.percentage is not None:
                correct_pct = round(attempt.percentage, 2)
            else:
                correct_pct = None

            correct_result = ('Pass' if correct_pct >= passing_score else 'Failed') if correct_pct is not None else (attempt.feedback or '')
            review_data["percentage"] = correct_pct if show_score else None
            review_data["result"] = correct_result if show_score else ""

            # Sync attempt in DB if out of sync
            if correct_pct is not None and (attempt.percentage is None or abs((attempt.percentage or 0) - correct_pct) > 0.05 or attempt.feedback != correct_result):
                attempt.percentage = correct_pct
                attempt.feedback = correct_result
                db_needs_update = True

            if db_needs_update:
                try:
                    session.add(attempt)
                    session.commit()
                except Exception:
                    session.rollback()

            review_data["review"] = []

            # If all_qids is empty (fallback), use whatever is in latest_answers_by_qid
            display_qids = [str(q) for q in (all_qids if all_qids else list(latest_answers_by_qid.keys())) if q]

            rng = random.Random(str(attempt.attempt_id)) if attempt and getattr(attempt, 'attempt_id', None) else None
            questions_for_attempt = session.query(Question).filter(Question.question_id.in_(display_qids)).all() if display_qids else []
            fetched_qids = {str(q.question_id) for q in questions_for_attempt if getattr(q, 'question_id', None)}
            all_questions_ordered = list(questions_for_attempt)
            for missing_id in display_qids:
                if str(missing_id) not in fetched_qids:
                    missing_q = session.query(Question).filter(Question.question_id == missing_id).first()
                    if missing_q:
                        all_questions_ordered.append(missing_q)
                        fetched_qids.add(str(missing_q.question_id))

            for question in all_questions_ordered:
                qid = str(question.question_id) if question and getattr(question, 'question_id', None) else ""
                question_type = question.question_type if question else ""
                question_marks = question.marks if question and question.marks is not None else 1
                options_list = session.query(Option).filter(Option.question_id == qid, Option.active_status == 1).all()

                if rng and question_type in ["choose", "multi"] and options_list:
                    opt_list_copy = [{"id": opt.options_id, "text": opt.option_text} for opt in options_list]
                    rng.shuffle(opt_list_copy)

                q_media = session.query(QuestionMedia).filter(QuestionMedia.question_id == qid, QuestionMedia.active_status == 1).order_by(QuestionMedia.order_number.asc()).all()
                media_list = [{"media_id": str(m.media_id), "media_type": m.media_type, "file_url": m.file_url, "url": m.file_url, "gcs_path": m.gcs_path, "caption": m.caption, "play_limit": getattr(m, 'play_limit', 0) or 0} for m in q_media]

                if qid in latest_answers_by_qid:
                    question_answer = latest_answers_by_qid[qid]
                    review_comment_dict = {}
                    answer_images_list = []
                    student_typed_text = ""
                    if question_type in ["fill", 'choose']:
                        selected_option = session.query(Option).filter(Option.question_id == question_answer.question_id, Option.is_correct == 1, Option.active_status == 1).first()
                        correct_answer_data = selected_option.option_text if selected_option else ""
                        selected_option = question_answer.written_answer
                        if question_type == "choose":
                            selected_data = session.query(Option).filter(Option.options_id == question_answer.selected_option_id, Option.active_status == 1).first()
                            selected_option = selected_data.option_text if selected_data else ""
                    elif question_type == "descriptive":
                        selected_option_rec = session.query(Option).filter(Option.question_id == question_answer.question_id, Option.is_correct == 1, Option.active_status == 1).first()
                        correct_answer_data = selected_option_rec.option_text if selected_option_rec else ""

                        raw_w_ans = question_answer.written_answer or ""
                        parsed_w_meta = None
                        try:
                            parsed_w_meta = json.loads(raw_w_ans)
                        except Exception:
                            pass

                        if isinstance(parsed_w_meta, dict):
                            student_typed_text = parsed_w_meta.get("text") or parsed_w_meta.get("textAnswer") or ""
                            raw_img_list = parsed_w_meta.get("images") or parsed_w_meta.get("answerImages") or parsed_w_meta.get("answer_images") or []
                            if isinstance(raw_img_list, list):
                                def _img_ord(it, def_i):
                                    if isinstance(it, dict):
                                        v = it.get("order") or it.get("page_number")
                                        if v is not None:
                                            try:
                                                return int(v)
                                            except (ValueError, TypeError):
                                                pass
                                    return def_i

                                sorted_raw_imgs = sorted(list(enumerate(raw_img_list, start=1)), key=lambda p: _img_ord(p[1], p[0]))
                                for def_i, im_entry in sorted_raw_imgs:
                                    if isinstance(im_entry, dict):
                                        gcs_p = im_entry.get("gcs_path")
                                        orig_file_name = (
                                            im_entry.get("filename")
                                            or im_entry.get("original_filename")
                                            or f"page_{def_i}.jpg"
                                        )
                                        if gcs_p and show_student_answers:
                                            if _validate_student_answer_gcs_path(gcs_p, attempt.attempt_id, question_answer.question_id):
                                                s_url = gcs_storage.generate_signed_url(gcs_p, expiration_minutes=60)
                                                answer_images_list.append({
                                                    "image_id": im_entry.get("image_id") or str(uuid.uuid4()),
                                                    "url": s_url,
                                                    "file_url": s_url,
                                                    "signed_url": s_url,
                                                    "gcs_path": gcs_p,
                                                    "order": im_entry.get("order") or def_i,
                                                    "filename": orig_file_name,
                                                    "original_filename": orig_file_name,
                                                    "mime_type": im_entry.get("mime_type") or "image/jpeg",
                                                    "file_size": im_entry.get("file_size", 0),
                                                })
                                        elif im_entry.get("url") or im_entry.get("dataUrl"):
                                            u = im_entry.get("url") or im_entry.get("dataUrl")
                                            answer_images_list.append({
                                                "image_id": im_entry.get("image_id") or str(uuid.uuid4()),
                                                "url": u,
                                                "file_url": u,
                                                "signed_url": u,
                                                "order": im_entry.get("order") or def_i,
                                                "filename": orig_file_name,
                                                "original_filename": orig_file_name,
                                                "mime_type": im_entry.get("mime_type") or "image/jpeg",
                                            })
                        elif isinstance(parsed_w_meta, list):
                            for def_i, im_str in enumerate(parsed_w_meta, start=1):
                                if isinstance(im_str, str) and show_student_answers:
                                    if im_str.startswith("student_answers/"):
                                        if _validate_student_answer_gcs_path(im_str, attempt.attempt_id, question_answer.question_id):
                                            s_url = gcs_storage.generate_signed_url(im_str, expiration_minutes=60)
                                            answer_images_list.append({
                                                "url": s_url,
                                                "file_url": s_url,
                                                "signed_url": s_url,
                                                "gcs_path": im_str,
                                                "order": def_i,
                                                "filename": f"page_{def_i}.jpg",
                                                "original_filename": f"page_{def_i}.jpg",
                                            })
                                    elif im_str.startswith(("http://", "https://", "data:image/")):
                                        answer_images_list.append({
                                            "url": im_str,
                                            "file_url": im_str,
                                            "signed_url": im_str,
                                            "order": def_i,
                                            "filename": f"page_{def_i}.jpg",
                                            "original_filename": f"page_{def_i}.jpg",
                                        })
                        else:
                            student_typed_text = raw_w_ans

                        # Format selected_option cleanly without leaking raw JSON
                        if student_typed_text:
                            selected_option = student_typed_text
                        elif answer_images_list:
                            selected_option = "Handwritten answer attached"
                        else:
                            selected_option = raw_w_ans if not (raw_w_ans.startswith("{") and "images" in raw_w_ans) else ""

                        review_comments = session.query(ExamReviewComments).filter( 
                            ExamReviewComments.attempt_id == attempt.attempt_id,
                            ExamReviewComments.question_id == question_answer.question_id
                        ).order_by(ExamReviewComments.created_date.asc()).all()
                        review_comment_dict['comments'] = []
                        for comment in review_comments:
                            review_comment_dict_item = {}
                            review_comment_dict_item['history'] = []
                            history_comments = session.query(ExamReviewCommentsHistory).filter(
                                ExamReviewCommentsHistory.comment_id == comment.comment_id
                            ).order_by(ExamReviewCommentsHistory.created_date.asc()).all()
                            for history in history_comments:
                                history_created_by = session.query(User).filter(User.user_id == history.created_by).first()
                                history_updated_by = session.query(User).filter(User.user_id == history.updated_by).first()
                                review_history_dict_item = {}
                                review_history_dict_item['history_id'] = history.history_id
                                review_history_dict_item['comment_id'] = history.comment_id
                                review_history_dict_item['category'] = history.category or comment.category
                                review_history_dict_item['comment_text'] = history.comment_text
                                review_history_dict_item['action'] = history.action
                                review_history_dict_item['is_deleted'] = history.is_deleted
                                review_history_dict_item['created_by'] = (history_created_by.full_name or history_created_by.user_name) if history_created_by else (history.created_by or 'Admin User')
                                review_history_dict_item['created_date'] = history.created_date
                                review_history_dict_item['updated_date'] = history.updated_date
                                review_history_dict_item['updated_by'] = (history_updated_by.full_name or history_updated_by.user_name) if history_updated_by else history.updated_by
                                review_history_dict_item['edit_reason'] = history.edit_reason
                                review_history_dict_item['edited_by'] = (history_updated_by.full_name or history_updated_by.user_name) if history_updated_by else history.edited_by
                                review_history_dict_item['edited_at'] = history.edited_at
                                review_comment_dict_item['history'].append(review_history_dict_item)
                            created_by = session.query(User).filter(User.user_id == comment.created_by).first()
                            updated_by = session.query(User).filter(User.user_id == comment.updated_by).first()
                            edited_by = session.query(User).filter(User.user_id == comment.edited_by).first()
                            review_comment_dict_item['comment_id'] = comment.comment_id
                            review_comment_dict_item['category'] = comment.category
                            review_comment_dict_item['comment_text'] = comment.comment_text

                             # ── ADD THESE 4 LINES ──
                            review_comment_dict_item['topic'] = comment.topic
                            review_comment_dict_item['issue'] = comment.issue
                            review_comment_dict_item['label'] = comment.label
                            review_comment_dict_item['statement'] = comment.statement



                            review_comment_dict_item['action'] = comment.action
                            review_comment_dict_item['is_deleted'] = comment.is_deleted
                            review_comment_dict_item['created_by'] = (created_by.full_name or created_by.user_name) if created_by else (comment.created_by or 'Admin User')
                            review_comment_dict_item['created_date'] = comment.created_date
                            review_comment_dict_item['updated_date'] = comment.updated_date
                            review_comment_dict_item['updated_by'] = (updated_by.full_name or updated_by.user_name) if updated_by else comment.updated_by
                            review_comment_dict_item['edit_reason'] = comment.edit_reason
                            review_comment_dict_item['edited_by'] = (edited_by.full_name or edited_by.user_name) if edited_by else comment.edited_by
                            review_comment_dict_item['edited_at'] = comment.edited_at
                            review_comment_dict['comments'].append(review_comment_dict_item)
                    else:
                        selected_options = session.query(Option).join(Answer, Answer.selected_option_id == Option.options_id).filter(
                            Answer.attempt_id == attempt.attempt_id,
                            Answer.question_id == question_answer.question_id,
                            Option.active_status == 1
                        ).all()
                        selected_option_texts = [opt.option_text for opt in selected_options]
                        selected_option = selected_option_texts
                        correct_answer = [opt for opt in options_list if str(getattr(opt, 'is_correct', 0)).lower() in ('1', 'true')]
                        correct_answer_data = ", ".join([ans.option_text for ans in correct_answer if ans.option_text])

                    updated_by = session.query(User).filter(User.user_id == question_answer.created_by).first()

                    evaluation_failed = (
                        question_type == "descriptive"
                        and not bool(question_answer.is_validated)
                        and bool(question_answer.feedback)
                    )
                    evaluation_status = None
                    if question_type == "descriptive":
                        evaluation_status = "failed" if evaluation_failed else ("success" if question_answer.is_validated else "pending")

                    q_ans_list = [a for a in all_answers if str(a.question_id) == str(question_answer.question_id)]
                    q_max_marks = max((a.marks_awarded or 0 for a in q_ans_list), default=0)
                    q_is_correct = any(a.is_correct == 1 for a in q_ans_list)

                    review_data["review"].append({
                        "answer_id": question_answer.answer_id,
                        "question_id": question_answer.question_id,
                        "question_text": question.question_text if question else "",
                        "question_type": question_type,
                        "media": media_list,
                        "options": [{"id": opt.options_id, "option_text": opt.option_text, "text": opt.option_text, "image_url": opt.image_url, "url": opt.image_url, "is_correct": opt.is_correct if show_correct_answers else 0} for opt in options_list],
                        "selected_option": ([selected_option] if isinstance(selected_option, str) else selected_option) if show_student_answers else [],
                        "student_text": student_typed_text if show_student_answers else "",
                        "answer_images": answer_images_list if show_student_answers else [],
                        "correct_option": correct_answer_data if show_correct_answers else None,
                        "review_comment": review_comment_dict if show_explanations else {},
                        "is_correct": q_is_correct if show_correct_answers else None,
                        "marks_awarded": q_max_marks if show_score else None,
                        "updated_by": updated_by.full_name if updated_by else question_answer.created_by,
                        "updated_date": question_answer.created_date,
                        "edit_reason": getattr(question_answer, 'edit_reason', None),
                        "question_marks": question_marks if show_score else None,
                        "ai_marks": (question_answer.ai_marks if question_answer.ai_marks is not None else 0) if show_explanations else None,
                        "ai_confidence": question_answer.ai_confidence if show_explanations else None,
                        "needs_manual_review": (isinstance(question_answer.ai_confidence, (int, float)) and question_answer.ai_confidence < ai_confidence_threshold) if show_explanations and question_type == 'descriptive' else False,
                        "ai_confidence_threshold": ai_confidence_threshold if show_explanations and question_type == 'descriptive' else None,
                        "manual_review_required": (True if question_answer.manual_review_required == 1 else False) if show_explanations else None,
                        "manual_marks": (question_answer.manual_marks if question_answer.manual_marks is not None else 0) if show_explanations else None,
                        "feedback": question_answer.feedback if show_explanations and not evaluation_failed and hasattr(question_answer, 'feedback') else "",
                        "evaluation_status": evaluation_status if show_explanations else None,
                        "evaluation_error": question_answer.feedback if show_explanations and evaluation_failed else None
                    })
                    # marks history can also be added here if needed by fetching from MarksHistory table
                    marks_history = session.query(MarksHistory).filter(
                        MarksHistory.answer_id == question_answer.answer_id
                    ).order_by(MarksHistory.updated_date.desc()).all()
                    if marks_history and show_score:
                        current_item = review_data["review"][-1]
                        if not current_item.get("edit_reason") and marks_history:
                            current_item["edit_reason"] = getattr(marks_history[0], 'edit_reason', None) or marks_history[0].source

                        history_list = []
                        for mh in marks_history:
                            mh_user = session.query(User).filter(User.user_id == mh.updated_by).first()
                            reason = getattr(mh, 'edit_reason', None) or mh.source
                            if not getattr(question_answer, 'edit_reason', None) and mh == marks_history[0]:
                                reason = None
                            history_list.append({
                                "marks_awarded": mh.marks_awarded,
                                "updated_by": mh_user.full_name if mh_user else (mh.updated_by or "System"),
                                "updated_date": mh.updated_date,
                                "edit_reason": reason
                            })
                        current_item["marks_history"] = history_list

                else:
                    # Unattempted question
                    if question_type in ["fill", 'choose']:
                        selected_option = session.query(Option).filter(Option.question_id == qid, Option.is_correct == 1, Option.active_status == 1).first()
                        correct_answer_data = selected_option.option_text if selected_option else ""
                    else:
                        correct_answers = session.query(Option).filter(Option.question_id == qid, Option.is_correct == 1, Option.active_status == 1).all()
                        correct_answer_data = ", ".join([ans.option_text for ans in correct_answers])

                    review_data["review"].append({
                        "answer_id": None,
                        "question_id": qid,
                        "question_text": question.question_text if question else "",
                        "question_type": question_type,
                        "media": media_list,
                        "options": [{"id": opt.options_id, "option_text": opt.option_text, "text": opt.option_text, "image_url": opt.image_url, "url": opt.image_url, "is_correct": opt.is_correct if show_correct_answers else 0} for opt in options_list],
                        "selected_option": [] if show_student_answers else [],
                        "correct_option": correct_answer_data if show_correct_answers else None,
                        "review_comment": {} if show_explanations else {},
                        "is_correct": False if show_correct_answers else None,
                        "marks_awarded": 0 if show_score else None,
                        "updated_by": None,
                        "updated_date": None,
                        "edit_reason": None,
                        "question_marks": question_marks if show_score else None,
                        "ai_marks": 0 if show_explanations else None,
                        "ai_confidence": None,
                        "needs_manual_review": False,
                        "ai_confidence_threshold": None,
                        "manual_review_required": False if show_explanations else None,
                        "manual_marks": 0 if show_explanations else None,
                        "feedback": "Not attempted" if show_explanations and question_type == 'descriptive' else "",
                        "evaluation_status": "not_attempted" if show_explanations else None,
                        "evaluation_error": None
                    })

            if rng and review_data["review"]:
                rng.shuffle(review_data["review"])

            review_data["items"] = review_data["review"]
            attempt_reviews.append(review_data)

        if is_student_request:
            session.commit()

    except Exception as e:
        print(f"Error in review_user_exam: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        return {"statusMessage": f"Error fetching exam review: {str(e)}", "status": False}, 500
    finally:
        session.close()
    return {"statusMessage": "Success", "status": True, "data": attempt_reviews}, 200
def validate_answers(attempt_id):
    db = SQLiteDB()
    session = db.connect()

    # connect llm model
    openai_client_instance = openai_client()

    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    evaluation_failures = 0

    # Retrieve authoritative attempt and schedule metadata for object path authorization
    attempt_rec = session.query(Exam_Attempt).filter_by(attempt_id=attempt_id).first()
    sched_rec = session.query(ExamSchedule).filter_by(schedule_id=attempt_rec.schedule_id).first() if attempt_rec else None
    auth_exam_id = str(sched_rec.exam_id) if (sched_rec and getattr(sched_rec, 'exam_id', None)) else None
    auth_inst_id = str(sched_rec.institute_id) if (sched_rec and getattr(sched_rec, 'institute_id', None)) else None
    download_cache = {}

    # get answer records
    answers = session.query(Answer).filter_by(attempt_id=attempt_id).all()

    # Group answers by question_id
    answers_by_question = {}
    for ans in answers:
        answers_by_question.setdefault(ans.question_id, []).append(ans)

    for question_id, question_answers in answers_by_question.items():
        # get the corresponding question
        question = session.query(Question).filter_by(question_id=question_id).first()
        if not question:
            continue
        correct_options = session.query(Option).filter_by(question_id=question_id, active_status=1).all()
        if question.question_type == 'fill' :
            # For text or code questions, manual validation is required
            for ans in question_answers:
                written_answer = ans.written_answer.strip().lower() if ans.written_answer else ""
                correct_answers = correct_options[0].option_text.strip().lower() if correct_options else ""
                if written_answer and written_answer == correct_answers:
                    is_correct = 1
                    marks_awarded = question.marks
                    feedback_part = None
                else:
                    is_correct = 0
                    marks_awarded = 0
                    feedback_part = "Answer does not match the expected response."
                ans.is_correct = is_correct
                ans.marks_awarded = marks_awarded
                ans.is_validated = 1
                ans.feedback = feedback_part
                session.add(ans)
        elif question.question_type == 'descriptive':
            # For descriptive questions, use LLM / Vision to evaluate
            for ans in question_answers:
                if ans.is_validated == 1:
                    continue
                raw_answer = ans.written_answer
                expected_answer = correct_options[0].option_text if correct_options else ""
                question_mark = question.marks

                # Check if answer contains handwritten answer images
                answer_images = []
                student_text = ""
                parsed_ans = None
                if raw_answer:
                    try:
                        parsed_ans = json.loads(raw_answer)
                        if isinstance(parsed_ans, dict):
                            answer_images = parsed_ans.get("images") or parsed_ans.get("answerImages") or parsed_ans.get("answer_images") or []
                            student_text = parsed_ans.get("text") or parsed_ans.get("textAnswer") or parsed_ans.get("written_answer") or ""
                        elif isinstance(parsed_ans, list) and len(parsed_ans) > 0 and (isinstance(parsed_ans[0], str) and (parsed_ans[0].startswith("data:image") or parsed_ans[0].lower().endswith((".jpg", ".png", ".jpeg", ".webp")))):
                            answer_images = parsed_ans
                        else:
                            student_text = str(raw_answer)
                    except Exception:
                        if raw_answer.startswith("data:image") or raw_answer.lower().endswith((".jpg", ".png", ".jpeg", ".webp")):
                            answer_images = [raw_answer]
                        else:
                            student_text = raw_answer

                if answer_images:
                    # Sort images by 'order' or 'page_number' to preserve original student submission sequence
                    def _get_img_order(item, default_idx):
                        if isinstance(item, dict):
                            val = item.get("order") or item.get("page_number")
                            if val is not None:
                                try:
                                    return int(val)
                                except (ValueError, TypeError):
                                    pass
                        return default_idx

                    sorted_images = sorted(
                        list(enumerate(answer_images, start=1)),
                        key=lambda pair: _get_img_order(pair[1], pair[0])
                    )

                    prepared_images = []
                    gcs_download_error = None

                    for default_idx, img_item in sorted_images:
                        if isinstance(img_item, dict):
                            gcs_path = img_item.get("gcs_path")
                            if gcs_path:
                                if not _validate_student_answer_gcs_path(
                                    gcs_path, attempt_id, question_id, auth_exam_id, auth_inst_id
                                ):
                                    gcs_download_error = f"Unauthorized or malformed GCS path for question {question_id}"
                                    break
                                try:
                                    if gcs_path in download_cache:
                                        img_bytes = download_cache[gcs_path]
                                    else:
                                        img_bytes = gcs_storage.download_media_bytes(gcs_path)
                                        download_cache[gcs_path] = img_bytes
                                    prepared_images.append({
                                        "image_bytes": img_bytes,
                                        "mime_type": img_item.get("mime_type") or "image/jpeg",
                                        "order": img_item.get("order") or default_idx,
                                        "image_id": img_item.get("image_id"),
                                        "gcs_path": gcs_path,
                                    })
                                except Exception as dl_err:
                                    gcs_download_error = f"Failed to retrieve image from storage: {dl_err}"
                                    break
                            else:
                                # Legacy image dict with Base64 / data / dataUrl
                                prepared_images.append(img_item)
                        elif isinstance(img_item, str):
                            if img_item.startswith("student_answers/"):
                                if not _validate_student_answer_gcs_path(
                                    img_item, attempt_id, question_id, auth_exam_id, auth_inst_id
                                ):
                                    gcs_download_error = f"Unauthorized or malformed GCS path for question {question_id}"
                                    break
                                try:
                                    if img_item in download_cache:
                                        img_bytes = download_cache[img_item]
                                    else:
                                        img_bytes = gcs_storage.download_media_bytes(img_item)
                                        download_cache[img_item] = img_bytes
                                    prepared_images.append({
                                        "image_bytes": img_bytes,
                                        "mime_type": "image/jpeg",
                                        "order": default_idx,
                                        "gcs_path": img_item,
                                    })
                                except Exception as dl_err:
                                    gcs_download_error = f"Failed to retrieve image: {dl_err}"
                                    break
                            else:
                                # Legacy Base64 string or file path
                                prepared_images.append(img_item)
                        elif isinstance(img_item, bytes):
                            prepared_images.append(img_item)

                    if gcs_download_error:
                        # Do NOT falsely mark as unattempted or give 0 marks; keep retryable
                        evaluation_failures += 1
                        print(f"AI evaluation halted for answer {ans.answer_id}: {gcs_download_error}")
                        ans.feedback = "AI evaluation could not be completed because an answer image could not be retrieved from storage. Please retry."
                        ans.ai_confidence = None
                        ans.is_validated = 0
                        session.add(ans)
                        continue

                    # Direct Visual Inspection (No OCR)
                    q_dict = {
                        "question_id": str(question.question_id),
                        "question_text": question.question_text or "",
                        "marks": float(question.marks or 1.0),
                        "expected_answer": expected_answer,
                        "rubric": expected_answer
                    }
                    evaluation = vision_evaluate_question_images(
                        openai_client_instance,
                        q_dict,
                        prepared_images,
                        written_text=student_text
                    )
                else:
                    evaluation = descriptive_evaluation(
                        openai_client_instance,
                        question_mark,
                        expected_answer,
                        student_text or raw_answer,
                        question_text=question.question_text if question else ""
                    )

                if not evaluation.get("status", False):
                    # Keep the answer retryable, but persist a visible diagnostic instead
                    # of silently returning an empty feedback section.
                    evaluation_failures += 1
                    error_detail = evaluation.get("error") or "The AI evaluation service did not return a valid result."
                    print(f"AI evaluation failed for answer {ans.answer_id}: {error_detail}")
                    ans.feedback = "AI evaluation could not be completed. Please retry the evaluation."
                    ans.ai_confidence = None
                    ans.is_validated = 0
                    session.add(ans)
                    continue
                score = evaluation.get("score", 0)
                try:
                    score_val = float(score)
                except (TypeError, ValueError):
                    score_val = 0.0
                max_marks = float(question.marks) if question and question.marks else 1.0
                # Clamp score to question marks and normalize if model gave 0-10
                if score_val > max_marks and max_marks > 0:
                    marks_awarded = min(max_marks, (score_val / 10.0) * max_marks)
                else:
                    marks_awarded = min(max_marks, max(0.0, score_val))
                ans.is_correct = 1 if marks_awarded == max_marks else 0
                ans.ai_marks = marks_awarded
                # A retry must not overwrite marks that an instructor already
                # assigned while the AI evaluation was unavailable.
                has_manual_marks = session.query(MarksHistory).filter(
                    MarksHistory.answer_id == ans.answer_id
                ).first() is not None
                if not has_manual_marks:
                    ans.marks_awarded = marks_awarded
                ans.is_validated = 1
                feedback_part = evaluation.get("feedback", "")
                ans.feedback = feedback_part
                ai_confidence = evaluation.get("ai_confidence", 0)
                ans.ai_confidence = ai_confidence

                # Preserve student answer images and lightweight metadata: Do NOT overwrite with "Handwritten answer uploaded"
                if isinstance(parsed_ans, dict):
                    ans.written_answer = json.dumps(parsed_ans)

                session.add(ans)

                # Clear prior automated review comments for this question and attempt
                session.query(ExamReviewComments).filter(
                    ExamReviewComments.attempt_id == attempt_id,
                    ExamReviewComments.question_id == question_id,
                    ExamReviewComments.reviewer_id == 'cac37fab-4de6-4792-969b-96e57e3c910a'
                ).delete(synchronize_session=False)

                # update ExamReviewComments table category wise comments
                import re

                for key in ["missing", "incomplete", "incorrect"]:
                    raw_items = evaluation.get(key) or []
                    items = []

                    # 1. Handle Pipe-Separated String format from Vision Evaluation
                    if isinstance(raw_items, str):
                        if raw_items.strip().lower() not in ("none", "null", "n/a", ""):
                            for pt in raw_items.split("|"):
                                pt = pt.strip()
                                if not pt or pt.lower() in ("none", "null", "n/a"):
                                    continue
                                default_lbl = "Correct" if key == "incorrect" else ("Needed" if key == "missing" else "Complete")
                                # Parse format: "<Issue/Concept> Needed/Complete/Correct: <Statement>"
                                parts = re.split(rf"\b{default_lbl}\s*:\s*", pt, flags=re.IGNORECASE)
                                if len(parts) == 2:
                                    issue_text = parts[0].strip()
                                    stmt_text = parts[1].strip()
                                else:
                                    issue_text = pt
                                    stmt_text = pt
                                items.append({
                                    "topic": "",
                                    "issue": issue_text,
                                    "label": default_lbl,
                                    "statement": stmt_text
                                })
                    # 2. Handle Dict format
                    elif isinstance(raw_items, dict):
                        items = [raw_items]
                    # 3. Handle List of Dicts format from Typed Descriptive Evaluation
                    elif isinstance(raw_items, list):
                        items = raw_items

                    # Save to ExamReviewComments table
                    for item in items:
                        if not isinstance(item, dict):
                            continue
                        top = item.get("topic", "").strip()
                        iss = item.get("issue", "").strip()
                        lbl = item.get("label", "Correct" if key == "incorrect" else ("Needed" if key == "missing" else "Complete"))
                        stmt = item.get("statement", "").strip()
                        if not iss and not stmt:
                            continue
                        review_comment = ExamReviewComments(
                            attempt_id=attempt_id,
                            question_id=question_id,
                            category=key,
                            topic=top,
                            issue=iss,
                            label=lbl,
                            statement=stmt,
                            comment_text=f"({top}): {iss} {lbl}: {stmt}" if top and iss != stmt else (f"{iss} {lbl}: {stmt}" if stmt and iss != stmt else (iss or stmt)),
                            reviewer_id='cac37fab-4de6-4792-969b-96e57e3c910a'
                        )
                        session.add(review_comment)


        else:
            # get the correct options for the question
            all_q_options = session.query(Option).filter_by(question_id=question_id).all()
            correct_opts = [opt for opt in all_q_options if str(getattr(opt, 'is_correct', 0)).lower() in ('1', 'true')]
            correct_option_ids = set(str(opt.options_id).lower() for opt in correct_opts)

            selected_option_ids = set(
                str(ans.selected_option_id).lower() for ans in question_answers if ans.selected_option_id
            )

            missing_options = correct_option_ids - selected_option_ids
            incorrect_options = selected_option_ids - correct_option_ids

            is_fully_correct = len(correct_option_ids) > 0 and len(missing_options) == 0 and len(incorrect_options) == 0
            awarded_marks = (question.marks if question and question.marks is not None else 1) if is_fully_correct else 0
            if is_fully_correct:
                feedback = None
            else:
                feedback = f"Incorrect. Missing correct options: {missing_options}. " if missing_options else "" f"Incorrectly selected options: {incorrect_options}."

            # Update all answer rows for this question
            for ans in question_answers:
                ans.is_correct = 1 if is_fully_correct else 0
                ans.marks_awarded = awarded_marks
                ans.is_validated = 1
                ans.feedback = feedback
                session.add(ans)
            # Optional: print/log debug info
            if not is_fully_correct:
                print(f"[INVALID] Question: {question_id}")
                print(f"  Selected: {selected_option_ids}")
                print(f"  Missing correct options: {missing_options}")
                print(f"  Incorrectly selected options: {incorrect_options}")

    # Sanitize all answer rows for this attempt so marks_awarded never exceeds question marks
    all_ans = session.query(Answer).filter_by(attempt_id=attempt_id).all()
    for ans_rec in all_ans:
        q_rec = session.query(Question).filter_by(question_id=ans_rec.question_id).first()
        if q_rec and q_rec.marks is not None and ans_rec.marks_awarded is not None and ans_rec.marks_awarded > q_rec.marks:
            ans_rec.marks_awarded = min(float(q_rec.marks), (float(ans_rec.marks_awarded) / 10.0) * float(q_rec.marks) if ans_rec.marks_awarded > q_rec.marks else float(ans_rec.marks_awarded))
            session.add(ans_rec)

    session.commit()
    session.close()

    # Update exam attempt score
    session = db.connect()
    try:
        attempt = session.query(Exam_Attempt).filter_by(attempt_id=attempt_id).first()
        if attempt:
            total_score, latest_answers_by_qid, _ = calculate_attempt_score(session, attempt_id)
            attempt.score = total_score
            sched = session.query(ExamSchedule).filter_by(schedule_id=attempt.schedule_id).first()
            exam_id = sched.exam_id if sched else None
            total_possible_marks, _ = get_exam_total_marks(session, exam_id=exam_id, schedule_id=attempt.schedule_id, attempt_id=attempt_id)
            passing_score = sched.pass_mark if (sched and sched.pass_mark is not None) else None
            if passing_score is None and sched and sched.exam_id:
                ex = session.query(Exam).filter_by(exam_id=sched.exam_id).first()
                passing_score = ex.pass_mark if (ex and ex.pass_mark is not None) else 50
            if passing_score is None:
                passing_score = 50
            if total_possible_marks > 0 and (total_score / total_possible_marks * 100) >= passing_score:
                attempt.feedback = 'Pass'
            else:
                attempt.feedback = 'Failed'
            attempt.percentage = round((total_score / total_possible_marks * 100), 2) if total_possible_marks > 0 else 0
            all_answers_validated = all(getattr(ans, 'is_validated', 0) == 1 for ans in latest_answers_by_qid.values()) if latest_answers_by_qid else False
            if all_answers_validated and evaluation_failures == 0:
                attempt.status = 'evaluated'
            session.add(attempt)
            session.commit()
    except Exception as e:
        return {"statusMessage": f"Error updating exam attempt score: {str(e)}", "status": False}, 500
    finally:
        session.close()

    if evaluation_failures:
        return {
            "statusMessage": f"{evaluation_failures} descriptive answer(s) could not be evaluated.",
            "status": False,
            "evaluation_failures": evaluation_failures
        }, 200
    return {"statusMessage": "Answers validated successfully", "status": True, "evaluation_failures": 0}, 200

# update review comments function can be added here
def update_review_comments(request, action_type="edit", current_user=None):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    
    args = request.json or {}

    comment_id: str = args.get("comment_id", "")
    history_id: str = args.get("history_id", "")
    comment_text: str = args.get("text", "")
    updated_by_raw: str = args.get("updated_by", "")
    edit_reason: str = str(args.get("edit_reason", "") or "").strip()
    if not comment_id:
        return {"statusMessage": "comment_id is required", "status": False}, 400

    updated_by = None
    if updated_by_raw and str(updated_by_raw).strip():
        u_exist = session.query(User).filter(User.user_id == str(updated_by_raw).strip()).first()
        if u_exist:
            updated_by = str(updated_by_raw).strip()
    if not updated_by and current_user and getattr(current_user, 'user_id', None):
        updated_by = getattr(current_user, 'user_id')

    try:
        if action_type == "delete":
            if history_id:
                # delete from history table
                history_record = session.query(ExamReviewCommentsHistory).filter(ExamReviewCommentsHistory.history_id == history_id).first()
                if history_record:
                    history_record.is_deleted = 1
                    history_record.updated_by = updated_by
                    history_record.updated_date = func.now()
                    session.add(history_record)
            else:
                # delete from comments table
                comment_record = session.query(ExamReviewComments).filter(ExamReviewComments.comment_id == comment_id).first()
                if comment_record:
                    comment_record.is_deleted = 1
                    comment_record.updated_by = updated_by
                    comment_record.updated_date = func.now()
                    session.add(comment_record)
        elif action_type == "edit":
            comment_record = session.query(ExamReviewComments).filter(ExamReviewComments.comment_id == comment_id).first()
            if not comment_record:
                return {"statusMessage": "Review comment not found", "status": False}, 404
            if history_id:
                history_record = session.query(ExamReviewCommentsHistory).filter(ExamReviewCommentsHistory.history_id == history_id).first()
                if history_record:
                    history_record.comment_text = comment_text
                    history_record.updated_by = updated_by
                    history_record.updated_date = func.now()
                    history_record.edit_reason = edit_reason or None
                    history_record.edited_by = updated_by
                    history_record.edited_at = func.now()
                    session.add(history_record)
            else:
                # Preserve the prior value, then update the current entry.
                cat_val = str(comment_record.category or '')[:100] if comment_record.category else None
                session.add(ExamReviewCommentsHistory(
                    comment_id=comment_id,
                    attempt_id=comment_record.attempt_id,
                    question_id=comment_record.question_id,
                    comment_text=comment_record.comment_text,
                    category=cat_val,
                    action=comment_record.action,
                    is_deleted=comment_record.is_deleted,
                    created_by=comment_record.created_by,
                    created_date=comment_record.created_date
                ))
                comment_record.comment_text = comment_text
                comment_record.action = action_type
                comment_record.updated_by = updated_by
                comment_record.updated_date = func.now()
                comment_record.edit_reason = edit_reason or None
                comment_record.edited_by = updated_by
                comment_record.edited_at = func.now()
                session.add(comment_record)
        session.commit()

    except Exception as e:
        session.rollback()
        print(f"Error in update_review_comments: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        return {"statusMessage": f"Error updating review comment: {str(e)}", "status": False}, 500
    finally:
        session.close()
    return {"statusMessage": "Comment updated successfully", "status": True}, 200


def update_manual_review_status(request):
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500
    try:
        data = request.json or {}
        answer_id = data.get("answer_id")
        if not answer_id or "manual_review_required" not in data:
            return {"statusMessage": "answer_id and manual_review_required are required", "status": False}, 400
        answer = session.query(Answer).filter(Answer.answer_id == answer_id).first()
        if not answer:
            return {"statusMessage": "Answer record not found", "status": False}, 404
        answer.manual_review_required = 1 if bool(data.get("manual_review_required")) else 0
        session.add(answer)
        session.commit()
        return {"statusMessage": "Manual review status updated", "status": True,
                "data": {"manual_review_required": bool(answer.manual_review_required)}}, 200
    except Exception as exc:
        session.rollback()
        return {"statusMessage": f"Error updating manual review status: {exc}", "status": False}, 500
    finally:
        session.close()


def update_descriptive_marks(request, current_user=None):
    """
    Update marks awarded for a descriptive question.
    Expected payload:
    {
        "question_id": "...",
        "schedule_id": "...",
        "attempt_id": "...",
        "marks_awarded": 5.0,
        "updated_by": "user_id",
        "edit_reason": "Required explanation for the change"
    }
    """
    db = SQLiteDB()
    session = db.connect()
    if not session:
        return {"statusMessage": "Error connecting to database", "status": False}, 500

    try:
        data = request.json or {}
        answer_id = data.get("answer_id") or None
        question_id = data.get("question_id") or None
        attempt_id = data.get("attempt_id") or None
        schedule_id = data.get("schedule_id") or None
        user_id = data.get("user_id") or None

        try:
            marks_awarded = float(data.get("marks_awarded", 0))
        except (ValueError, TypeError):
            marks_awarded = 0.0
        updated_by_raw = data.get("updated_by", "")
        edit_reason = str(data.get("edit_reason", "") or "").strip()

        print(f"[update_descriptive_marks] Payload received: answer_id={answer_id}, question_id={question_id}, attempt_id={attempt_id}, marks={marks_awarded}, updated_by={updated_by_raw}, reason='{edit_reason}'")

        if not edit_reason:
            print("[update_descriptive_marks] ERROR: edit_reason is empty")
            return {"statusMessage": "Description (reason for change) is required when updating marks", "status": False}, 400

        updated_by = None
        if updated_by_raw and str(updated_by_raw).strip():
            u_exist = session.query(User).filter(User.user_id == str(updated_by_raw).strip()).first()
            if not u_exist:
                u_exist = session.query(User).filter(
                    (User.full_name == str(updated_by_raw).strip()) |
                    (User.user_name == str(updated_by_raw).strip())
                ).first()
            if u_exist:
                updated_by = str(u_exist.user_id)
        if not updated_by and current_user and getattr(current_user, 'user_id', None):
            u_check_curr = session.query(User).filter_by(user_id=str(getattr(current_user, 'user_id'))).first()
            if u_check_curr:
                updated_by = str(u_check_curr.user_id)

        answer_record = None
        if answer_id:
            answer_record = session.query(Answer).filter(Answer.answer_id == answer_id).first()
        if not answer_record and attempt_id and question_id:
            answer_record = session.query(Answer).filter(
                Answer.attempt_id == attempt_id,
                Answer.question_id == question_id
            ).first()

        if not answer_record:
            if not attempt_id or not question_id:
                print(f"[update_descriptive_marks] ERROR: Neither answer_id nor (attempt_id + question_id) provided")
                return {"statusMessage": "Answer record not found and insufficient attempt/question details provided.", "status": False}, 404
            
            # Create new Answer record for previously unattempted descriptive question
            new_ans_id = str(uuid.uuid4())
            q_obj = session.query(Question).filter(Question.question_id == question_id).first()
            q_marks = q_obj.marks if q_obj else 0
            
            answer_record = Answer(
                answer_id=new_ans_id,
                attempt_id=attempt_id,
                question_id=question_id,
                schedule_id=schedule_id,
                user_id=user_id,
                written_answer="",
                marks_awarded=marks_awarded,
                manual_marks=marks_awarded,
                manual_review_required=0,
                is_validated=1,
                is_correct=1 if marks_awarded >= q_marks and q_marks > 0 else 0,
                created_by=updated_by,
                created_date=datetime.datetime.utcnow(),
                edit_reason=edit_reason
            )
            session.add(answer_record)
            session.flush()
            answer_id = new_ans_id
            print(f"[update_descriptive_marks] Created new Answer record for unattempted question: answer_id={answer_id}")
        
        print(f"[update_descriptive_marks] Found DB Answer record: answer_id={answer_record.answer_id}, old_marks={answer_record.marks_awarded}")
        
        # Verify previous created_by against Users table for ForeignKey constraint
        prev_user_id = None
        if answer_record.created_by:
            u_prev = session.query(User).filter_by(user_id=str(answer_record.created_by)).first()
            if u_prev:
                prev_user_id = str(u_prev.user_id)

        # Save snapshot of previous state to MarksHistory
        prev_reason = getattr(answer_record, 'edit_reason', None) or getattr(answer_record, 'feedback', None)
        answer_history_record = MarksHistory(
            answer_id=answer_record.answer_id,
            question_id=answer_record.question_id,
            marks_awarded=answer_record.marks_awarded,
            source='manual',
            edit_reason=prev_reason,
            updated_by=prev_user_id,
            updated_date=datetime.datetime.utcnow()
        )
        session.add(answer_history_record)

        # Update Answer record to new state
        answer_record.marks_awarded = marks_awarded
        if updated_by:
            answer_record.created_by = updated_by
        answer_record.created_date = datetime.datetime.utcnow()
        if hasattr(answer_record, 'edit_reason'):
            answer_record.edit_reason = edit_reason
        session.add(answer_record)
        session.commit()

        # Update exam attempt score
        attempt = session.query(Exam_Attempt).filter_by(attempt_id=answer_record.attempt_id).first()
        if attempt:
            total_score, latest_answers_by_qid, _ = calculate_attempt_score(session, answer_record.attempt_id)
            attempt.score = total_score
            sched = session.query(ExamSchedule).filter_by(schedule_id=attempt.schedule_id).first()
            exam_id = sched.exam_id if sched else None
            total_possible_marks, _ = get_exam_total_marks(session, exam_id=exam_id, schedule_id=attempt.schedule_id, attempt_id=attempt.attempt_id)
            passing_score = sched.pass_mark if (sched and sched.pass_mark is not None) else None
            if passing_score is None and sched and sched.exam_id:
                ex = session.query(Exam).filter_by(exam_id=sched.exam_id).first()
                passing_score = ex.pass_mark if (ex and ex.pass_mark is not None) else 50
            if passing_score is None:
                passing_score = 50
            if total_possible_marks > 0 and (total_score / total_possible_marks * 100) >= passing_score:
                attempt.feedback = 'Pass'
            else:
                attempt.feedback = 'Failed'
            attempt.percentage = round((total_score / total_possible_marks * 100), 2) if total_possible_marks > 0 else 0
            all_validated = all(getattr(ans, 'is_validated', 0) == 1 for ans in latest_answers_by_qid.values()) if latest_answers_by_qid else False
            if all_validated and attempt.status != 'evaluated':
                attempt.status = 'evaluated'
            session.add(attempt)
            session.commit()
            print(f"[update_descriptive_marks] Successfully updated DB: answer_id={answer_record.answer_id} -> new_marks={marks_awarded}, new_attempt_score={attempt.score}, pct={attempt.percentage}")
            return {"statusMessage": "Descriptive marks updated successfully", "status": True}, 200

    except Exception as e:
        session.rollback()
        print(f"Error in update_descriptive_marks: {str(e)}" + " - Line # : " + str(e.__traceback__.tb_lineno))
        return {"statusMessage": f"Error updating descriptive marks: {str(e)}", "status": False}, 500
    finally:
        session.close()


if __name__ == "__main__":
    # For testing purposes
    validate_answers("fa188ab2-23df-4c13-8f0f-77b3f15811e1")
