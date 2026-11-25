import os
import sys
import json
import time
import uuid
import queue
import logging
import threading
from datetime import datetime
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

logger = logging.getLogger(__name__)

JOBS_PERSISTENCE_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "static",
    "uploads",
    "evaluation_jobs"
)
os.makedirs(JOBS_PERSISTENCE_DIR, exist_ok=True)


class BulkEvaluationManager:
    """
    Manages bounded parallel evaluation of student answer sheets with
    live SSE progress streaming, per-student status tracking, and
    thread-safe database execution.
    """

    def __init__(self, max_workers: int = 2):
        self.max_workers = max_workers
        self.executor = ThreadPoolExecutor(
            max_workers=self.max_workers,
            thread_name_prefix="BulkEvalWorker"
        )
        self.jobs = {}
        self.listeners = defaultdict(list)  # job_id -> list of queue.Queue
        self.lock = threading.RLock()
        self._recover_interrupted_jobs()

    def _persist_job(self, job_id: str):
        """Persists job metadata to disk for crash recovery (Stage 5 persistence)."""
        job = self.jobs.get(job_id)
        if not job:
            return
        try:
            filepath = os.path.join(JOBS_PERSISTENCE_DIR, f"{job_id}.json")
            # Create a serializable snapshot (excluding non-serializable objects)
            snapshot = {
                "job_id": job["job_id"],
                "exam_id": job["exam_id"],
                "status": job["status"],
                "created_at": job["created_at"],
                "updated_at": datetime.utcnow().isoformat(),
                "total_students": job["total_students"],
                "completed_students": job["completed_students"],
                "failed_students": job["failed_students"],
                "students": job["students"]
            }
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(snapshot, f, indent=2)

            # Non-blocking GCS backup so job state survives server/PC restarts
            snapshot_bytes = json.dumps(snapshot, indent=2).encode("utf-8")
            exam_id_val = str(job["exam_id"])
            job_status_val = job["status"]

            def _sync_gcs():
                try:
                    from others.gcs_service import gcs_storage
                    if not gcs_storage.is_gcs_active():
                        return
                    gcs_storage.upload_media(
                        file_bytes=snapshot_bytes,
                        filename="job.json",
                        exact_object_path=f"evaluation_jobs/{job_id}/job.json",
                        expected_type="any",
                    )
                    exam_ptr = f"evaluation_jobs/by_exam/{exam_id_val}/active_job.json"
                    if job_status_val in ("in_progress", "pending", "paused_insufficient_credits", "interrupted"):
                        gcs_storage.upload_media(
                            file_bytes=snapshot_bytes,
                            filename="active_job.json",
                            exact_object_path=exam_ptr,
                            expected_type="any",
                        )
                    else:
                        gcs_storage.delete_media(exam_ptr)
                except Exception as gcs_err:
                    logger.warning(f"[BulkEvalManager] GCS job persist warning {job_id}: {gcs_err}")

            threading.Thread(target=_sync_gcs, daemon=True).start()
        except Exception as e:
            logger.warning(f"[BulkEvalManager] Failed persisting job {job_id}: {e}")

    def _recover_interrupted_jobs(self):
        """Marks any pending jobs from a previous backend run as interrupted."""
        try:
            for fname in os.listdir(JOBS_PERSISTENCE_DIR):
                if fname.endswith(".json"):
                    fpath = os.path.join(JOBS_PERSISTENCE_DIR, fname)
                    try:
                        with open(fpath, "r", encoding="utf-8") as f:
                            data = json.load(f)
                        if data.get("status") in ("in_progress", "pending"):
                            data["status"] = "interrupted"
                            self.jobs[data["job_id"]] = data
                            with open(fpath, "w", encoding="utf-8") as f:
                                json.dump(data, f, indent=2)
                        elif data.get("status") == "paused_insufficient_credits":
                            self.jobs[data["job_id"]] = data
                    except Exception:
                        pass
        except Exception as e:
            logger.warning(f"[BulkEvalManager] Recovery check warning: {e}")

    def create_job(self, exam_id: str, student_tasks: list, current_user=None, schedule_id: str = None, explicit_inst_id: str = None) -> str:
        """
        Initializes an evaluation batch job and queues student sheets to the bounded worker pool.
        Each item in student_tasks is:
        {
            "user_id": str,
            "student_name": str,
            "file_items": list of (filename, bytes)
        }
        """
        job_id = str(uuid.uuid4())
        resolved_schedule_id = str(schedule_id or exam_id)
        user_info = None
        if current_user:
            user_info = {
                "user_id": str(getattr(current_user, "user_id", "")),
                "user_name": str(getattr(current_user, "user_name", "")),
                "user_role": str(getattr(current_user, "user_role", ""))
            }

        # Resolve institute_id
        role_str = (user_info.get("user_role", "") if user_info else "").strip().lower().replace(" ", "_")
        is_super_admin = role_str in ("super_admin", "superadmin")

        inst_id = str(explicit_inst_id).strip() if explicit_inst_id else None
        if not is_super_admin and current_user:
            cu_inst = getattr(current_user, "institute_id", None)
            if not cu_inst and isinstance(current_user, dict):
                cu_inst = current_user.get("institute_id")
            if cu_inst:
                inst_id = str(cu_inst).strip()

        # Query actual exam question IDs and order numbers from database mapping
        actual_questions = []
        try:
            from others.exams import SQLiteDB, ExamQuestionMapping, Exam
            from sqlalchemy import or_
            db_temp = SQLiteDB()
            sess_temp = db_temp.connect()
            if sess_temp:
                exam_obj = (
                    sess_temp.query(Exam)
                    .filter(or_(Exam.exam_id == str(exam_id), Exam.schedule_id == str(exam_id)))
                    .first()
                )
                ps_tmp = None
                if not exam_obj:
                    from db.models import PaperSchedule
                    ps_tmp = sess_temp.query(PaperSchedule).filter(PaperSchedule.schedule_id == str(resolved_schedule_id)).first()
                    if ps_tmp:
                        exam_obj = sess_temp.query(Exam).filter(Exam.exam_id == ps_tmp.exam_id).first()
                else:
                    from db.models import PaperSchedule
                    ps_tmp = sess_temp.query(PaperSchedule).filter(
                        (PaperSchedule.schedule_id == str(resolved_schedule_id)) | (PaperSchedule.exam_id == str(exam_obj.exam_id))
                    ).first()

                if not inst_id and ps_tmp and getattr(ps_tmp, "institute_id", None):
                    inst_id = str(ps_tmp.institute_id).strip()
                elif not inst_id and exam_obj and getattr(exam_obj, "institute_id", None):
                    inst_id = str(exam_obj.institute_id).strip()
                target_exam_ids = list({str(exam_id), str(exam_obj.exam_id)}) if exam_obj else [str(exam_id)]
                eqm_rows = (
                    sess_temp.query(ExamQuestionMapping.question_id, ExamQuestionMapping.order_number)
                    .filter(ExamQuestionMapping.exam_id.in_(target_exam_ids))
                    .order_by(ExamQuestionMapping.order_number.asc())
                    .all()
                )
                seen_qids = set()
                actual_questions = []
                for idx, r in enumerate(eqm_rows):
                    qid_str = str(r[0])
                    if qid_str and qid_str not in seen_qids:
                        seen_qids.add(qid_str)
                        actual_questions.append({
                            "question_id": qid_str,
                            "number": r[1] if r[1] is not None else len(actual_questions) + 1
                        })
                sess_temp.close()
        except Exception as q_err:
            logger.warning(f"[BulkEvalManager] Could not read question mapping: {q_err}")

        from others.gcs_service import gcs_storage

        students_map = {}
        for t in student_tasks:
            uid = str(t["user_id"])
            gcs_files = []
            if gcs_storage.is_gcs_active():
                for fname, fbytes in (t.get("file_items") or []):
                    if not fname or not fbytes:
                        continue
                    try:
                        stage_path = f"evaluation_jobs/{job_id}/{uid}/{fname}"
                        gcs_storage.upload_media(
                            file_bytes=fbytes,
                            filename=fname,
                            exact_object_path=stage_path,
                            expected_type="any",
                        )
                        gcs_files.append({"filename": fname, "gcs_path": stage_path})
                    except Exception as gcs_stage_err:
                        logger.warning(f"[BulkEvalManager] Failed staging {fname} to GCS for {uid}: {gcs_stage_err}")

            students_map[uid] = {
                "user_id": uid,
                "student_name": t.get("student_name") or "Student",
                "roll_no": t.get("roll_no") or "",
                "status": "queued",  # queued | evaluating | completed | failed
                "status_phase": "Waiting in queue",
                "total_questions": len(actual_questions),
                "completed_questions": 0,
                "failed_questions": 0,
                "questions": [
                    {
                        "question_id": q["question_id"],
                        "number": q["number"],
                        "status": "Waiting",
                        "marks": None
                    }
                    for q in actual_questions
                ],
                "gcs_files": gcs_files,
                "marks": None,
                "total_pages": None,
                "error": None,
                "started_at": None,
                "completed_at": None
            }

        with self.lock:
            self.jobs[job_id] = {
                "job_id": job_id,
                "exam_id": str(exam_id),
                "schedule_id": resolved_schedule_id,
                "institute_id": str(inst_id) if inst_id else None,
                "status": "in_progress",
                "created_at": datetime.utcnow().isoformat(),
                "total_students": len(student_tasks),
                "completed_students": 0,
                "failed_students": 0,
                "students": students_map,
                "raw_tasks": {str(t["user_id"]): t for t in student_tasks},
                "user_info": user_info
            }
            self._persist_job(job_id)

        # Dispatch each student sheet to the bounded worker pool
        for task in student_tasks:
            self.executor.submit(self._worker_process_sheet, job_id, task, user_info)

        return job_id

    def _worker_process_sheet(self, job_id: str, task: dict, user_info: dict = None):
        """Worker thread task processing a single student's answer sheet."""
        user_id = str(task["user_id"])
        student_name = task.get("student_name") or "Student"
        file_items = task.get("file_items") or []

        # Check before starting if job or student was cancelled or paused
        with self.lock:
            job = self.jobs.get(job_id)
            if not job or job.get("cancelled") or job.get("status") == "paused_insufficient_credits":
                return
            st_record = job["students"].get(user_id)
            if not st_record or st_record.get("cancelled") or st_record.get("status") == "completed":
                return

        # Pre-flight check via AICreditManager enforcing 8,000 tokens/page and 1,000 token reserve floor
        from others.ai_credits import AICreditManager, TOKENS_PER_EVAL_PAGE
        target_inst_id = job.get("institute_id")
        student_page_cnt = max(1, st_record.get("total_pages") or len(file_items) or 1)
        est_tokens_for_sheet = student_page_cnt * TOKENS_PER_EVAL_PAGE

        has_access, err_msg, err_code, _ = AICreditManager.check_and_reserve(
            institute_id=target_inst_id,
            user_id=user_id,
            estimated_tokens=est_tokens_for_sheet,
            feature_name="Paper Evaluation",
            enforce_reserve=True
        )
        if not has_access:
            if target_inst_id:
                try:
                    from others.ai_credit_notifications import AICreditNotificationManager
                    AICreditNotificationManager().create_notification(
                        institute_id=target_inst_id,
                        event_type="EXHAUSTED",
                        severity="critical",
                        title="AI Evaluation - Insufficient Credits",
                        message=f"Evaluation paused at student {student_name}. Remaining students are waiting for AI credits.",
                        credits_amount=0,
                        remaining_credits=0
                    )
                except Exception as _b_notif_err:
                    logger.warning(f"[BulkEvalManager] Notification error: {_b_notif_err}")
            with self.lock:
                job["status"] = "paused_insufficient_credits"
                st_record["status"] = "paused"
                st_record["status_phase"] = "Paused – Reached 1,000 token reserve floor"
                for sid, s in job.get("students", {}).items():
                    if s.get("status") in ("queued", "evaluating"):
                        s["status"] = "paused"
                        s["status_phase"] = "Paused – Waiting for AI credits"
                self._persist_job(job_id)
            self._emit_event(job_id, "job_paused_credits", {
                "job_id": job_id,
                "status": "paused_insufficient_credits",
                "user_id": user_id,
                "student_name": student_name,
                "message": err_msg or "AI credit reserve reached (1,000 token reserve preserved). Evaluation paused safely. Completed work is saved."
            })
            return

        # 1. Update status to 'evaluating' and notify
        with self.lock:
            job = self.jobs.get(job_id)
            if not job or job.get("cancelled"):
                return
            st_record = job["students"].get(user_id)
            if not st_record or st_record.get("cancelled"):
                return
            st_record["status"] = "evaluating"
            st_record["status_phase"] = "AI Evaluating – All Questions"
            for q in st_record.get("questions", []):
                q["status"] = "Evaluating"
            st_record["started_at"] = datetime.utcnow().isoformat()
            self._persist_job(job_id)

        self._emit_event(job_id, "sheet_started", {
            "job_id": job_id,
            "user_id": user_id,
            "student_name": student_name,
            "roll_no": st_record.get("roll_no", ""),
            "status": "evaluating",
            "status_phase": "AI Evaluating – All Questions",
            "total_questions": st_record.get("total_questions", 0),
            "completed_questions": 0,
            "questions": st_record.get("questions", []),
            "message": f"Evaluating answer sheet for {student_name}..."
        })

        def on_sheet_progress(event_type, payload):
            if event_type == "question_saved":
                with self.lock:
                    j = self.jobs.get(job_id)
                    if j:
                        st = j["students"].get(user_id)
                        if st:
                            qid_target = str(payload.get("question_id") or "")
                            qnum_target = str(payload.get("question_number") or "")
                            for q in st.get("questions", []):
                                if (qid_target and str(q.get("question_id")) == qid_target) or (qnum_target and str(q.get("number")) == qnum_target):
                                    q["status"] = payload.get("status")
                                    q["marks"] = payload.get("marks")
                                    if qid_target:
                                        q["question_id"] = qid_target
                                    break
                            st["completed_questions"] = payload.get("completed_questions", st.get("completed_questions", 0))
                            st["failed_questions"] = payload.get("failed_questions", st.get("failed_questions", 0))
                            if payload.get("total_questions"):
                                st["total_questions"] = payload.get("total_questions")
                            elif st["completed_questions"] > (st.get("total_questions") or 0):
                                st["total_questions"] = st["completed_questions"]
                            if payload.get("status") == "Failed":
                                st["status_phase"] = f"Error saving Q{payload.get('question_number')}"
                            else:
                                st["status_phase"] = f"Saved Q{payload.get('question_number')} ({st['completed_questions']}/{st['total_questions']})"
                            self._persist_job(job_id)
                self._emit_event(job_id, "question_saved", {
                    "job_id": job_id,
                    **payload
                })

        # 2. Execute evaluation using core function with isolated DB session
        from others.exams import process_single_student_answer_sheet

        try:
            res_data, status_code = process_single_student_answer_sheet(
                exam_id=job["exam_id"],
                user_id=user_id,
                file_items=file_items,
                replace=True,
                current_user=user_info,
                on_progress=on_sheet_progress,
                schedule_id=job.get("schedule_id") or job.get("exam_id"),
                institute_id=job.get("institute_id")
            )

            # Check if cancelled while LLM / processing was executing
            with self.lock:
                job = self.jobs.get(job_id)
                is_cancelled = not job or job.get("cancelled") or (job.get("students", {}).get(user_id, {}).get("cancelled"))
                if is_cancelled:
                    logger.info(f"[BulkEvalWorker] Student {student_name} was stopped - purging DB attempt.")
                    try:
                        from others.exams import SQLiteDB, Exam_Attempt, Answer, AnswerSheetPage
                        from sqlalchemy import func, String
                        db = SQLiteDB()
                        sess = db.connect()
                        if sess:
                            eval_sched_id = str(job.get("schedule_id") or job.get("exam_id"))
                            att_rows = sess.query(Exam_Attempt.attempt_id).filter(
                                Exam_Attempt.user_id == str(user_id),
                                Exam_Attempt.schedule_id == eval_sched_id
                            ).all()
                            att_ids = [str(r[0]) for r in att_rows if r[0]]
                            if att_ids:
                                sess.query(Answer).filter(func.cast(Answer.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess.query(AnswerSheetPage).filter(func.cast(AnswerSheetPage.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess.query(Exam_Attempt).filter(func.cast(Exam_Attempt.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess.commit()
                            sess.close()
                    except Exception as err:
                        logger.warning(f"Error purging cancelled DB attempt: {err}")
                    return

            if status_code == 200 and res_data.get("status"):
                data_payload = res_data.get("data") or {}
                marks_str = data_payload.get("marks") or "Evaluated"
                total_pages = data_payload.get("total_pages") or 1
                display_status = data_payload.get("display_status") or "AI Evaluated"

                with self.lock:
                    job = self.jobs.get(job_id)
                    if job:
                        st_record = job["students"].get(user_id)
                        if st_record:
                            st_record["status"] = "completed"
                            st_record["display_status"] = display_status
                            st_record["marks"] = marks_str
                            st_record["total_pages"] = total_pages
                            st_record["completed_at"] = datetime.utcnow().isoformat()
                        job["completed_students"] += 1
                        completed_cnt = job["completed_students"]
                        failed_cnt = job["failed_students"]
                        total_cnt = job["total_students"]
                        is_all_done = (completed_cnt + failed_cnt >= total_cnt)
                        if is_all_done:
                            job["status"] = "completed"
                        self._persist_job(job_id)

                self._emit_event(job_id, "sheet_completed", {
                    "job_id": job_id,
                    "user_id": user_id,
                    "student_name": student_name,
                    "roll_no": st_record.get("roll_no", "") if st_record else "",
                    "status": display_status,
                    "status_phase": "Completed",
                    "marks": marks_str,
                    "total_pages": total_pages,
                    "completed_questions": st_record.get("completed_questions", len(st_record.get("questions", []))) if st_record else 1,
                    "total_questions": st_record.get("total_questions", len(st_record.get("questions", []))) if st_record else 1,
                    "questions": st_record.get("questions", []) if st_record else [],
                    "completed": completed_cnt,
                    "failed": failed_cnt,
                    "total": total_cnt,
                    "percentage": round((completed_cnt / total_cnt) * 100) if total_cnt > 0 else 100,
                    "message": f"Successfully evaluated {student_name} ({marks_str})"
                })

                if is_all_done:
                    self._emit_event(job_id, "job_completed", {
                        "job_id": job_id,
                        "status": "completed",
                        "completed": completed_cnt,
                        "failed": failed_cnt,
                        "total": total_cnt,
                        "message": f"Bulk evaluation complete: {completed_cnt} evaluated, {failed_cnt} failed."
                    })
                    if failed_cnt == 0:
                        self._cleanup_gcs_staging_files(job)

            else:
                err_msg = res_data.get("statusMessage") or f"Evaluation failed with status {status_code}"
                is_credit_exhausted = (
                    status_code == 403 or
                    res_data.get("code") == "AI_CREDIT_EXHAUSTED" or
                    "credit" in str(err_msg).lower() or
                    "quota" in str(err_msg).lower()
                )
                if is_credit_exhausted:
                    # Clean up dirty partial attempt for interrupted student to prevent corrupt state
                    try:
                        from others.exams import SQLiteDB, Exam_Attempt, Answer, AnswerSheetPage
                        from sqlalchemy import func, String
                        db_clean = SQLiteDB()
                        sess_clean = db_clean.connect()
                        if sess_clean:
                            eval_sched_id = str(job.get("schedule_id") or job.get("exam_id"))
                            att_rows = sess_clean.query(Exam_Attempt.attempt_id).filter(
                                Exam_Attempt.user_id == str(user_id),
                                Exam_Attempt.schedule_id == eval_sched_id
                            ).all()
                            att_ids = [str(r[0]) for r in att_rows if r[0]]
                            if att_ids:
                                sess_clean.query(Answer).filter(func.cast(Answer.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess_clean.query(AnswerSheetPage).filter(func.cast(AnswerSheetPage.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess_clean.query(Exam_Attempt).filter(func.cast(Exam_Attempt.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                                sess_clean.commit()
                            sess_clean.close()
                    except Exception as clean_err:
                        logger.warning(f"[BulkEvalWorker] Error rolling back interrupted student DB attempt: {clean_err}")

                    with self.lock:
                        job = self.jobs.get(job_id)
                        if job:
                            job["status"] = "paused_insufficient_credits"
                            st_record = job["students"].get(user_id)
                            if st_record:
                                st_record["status"] = "paused"
                                st_record["status_phase"] = "Paused – Reached 1,000 token reserve floor"
                            for sid, s in job.get("students", {}).items():
                                if s.get("status") in ("queued", "evaluating"):
                                    s["status"] = "paused"
                                    s["status_phase"] = "Paused – Waiting for AI credits"
                            self._persist_job(job_id)
                    self._emit_event(job_id, "job_paused_credits", {
                        "job_id": job_id,
                        "status": "paused_insufficient_credits",
                        "user_id": user_id,
                        "student_name": student_name,
                        "message": f"Evaluation paused: {err_msg}. Mandatory 1,000 token reserve protected. All completed student marks are saved. Evaluation will resume after recharge."
                    })
                    return
                self._handle_sheet_error(job_id, user_id, student_name, err_msg)

        except Exception as e:
            err_msg = str(e)
            logger.error(f"[BulkEvalWorker] Error evaluating {student_name} ({user_id}): {err_msg}", exc_info=True)
            self._handle_sheet_error(job_id, user_id, student_name, err_msg)

    def stop_job(self, job_id: str, user_id: str = None) -> dict:
        """Stops the entire job or cancels a specific student task within the job."""
        event_to_emit = None
        db_cleanup_task = None

        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return {"status": False, "statusMessage": f"Job {job_id} not found."}

            exam_id = job.get("schedule_id") or job.get("exam_id")

            if user_id:
                st = job["students"].get(str(user_id))
                if st:
                    st["cancelled"] = True
                    st["status"] = "cancelled"

                    # Decrement active total students so progress reflects remaining active sheets
                    if job.get("total_students", 0) > 0:
                        job["total_students"] -= 1

                    db_cleanup_task = (str(user_id), str(exam_id))

                    total_cnt = job["total_students"]
                    completed_cnt = job["completed_students"]
                    failed_cnt = job["failed_students"]
                    is_all_done = (completed_cnt + failed_cnt >= total_cnt)
                    if is_all_done:
                        job["status"] = "completed"

                    self._persist_job(job_id)
                    event_to_emit = ("sheet_stopped", {
                        "job_id": job_id,
                        "user_id": str(user_id),
                        "student_name": st.get("student_name", "Student"),
                        "status": "Not Evaluated",
                        "total": total_cnt,
                        "completed": completed_cnt,
                        "failed": failed_cnt,
                        "percentage": round((completed_cnt / total_cnt) * 100) if total_cnt > 0 else 0,
                        "message": f"Evaluation stopped for {st.get('student_name', 'Student')}."
                    }, f"Evaluation stopped for {st.get('student_name', 'Student')}.")
                else:
                    return {"status": False, "statusMessage": f"Student {user_id} not found in job."}
            else:
                job["cancelled"] = True
                job["status"] = "cancelled"
                all_uids_to_clean = []
                for uid, st in job["students"].items():
                    if st["status"] in ("queued", "evaluating"):
                        st["cancelled"] = True
                        st["status"] = "cancelled"
                        all_uids_to_clean.append(str(uid))
                self._persist_job(job_id)
                event_to_emit = ("job_stopped", {
                    "job_id": job_id,
                    "status": "cancelled",
                    "message": "Bulk evaluation stopped by user."
                }, "Bulk evaluation stopped.")

        # Clean up database records outside the lock so other threads are never blocked
        uids_to_clean = [db_cleanup_task[0]] if db_cleanup_task else (all_uids_to_clean if 'all_uids_to_clean' in locals() else [])
        if uids_to_clean and exam_id:
            try:
                from others.exams import SQLiteDB, Exam_Attempt, Answer, AnswerSheetPage
                from sqlalchemy import func, String
                db = SQLiteDB()
                sess = db.connect()
                if sess:
                    att_rows = sess.query(Exam_Attempt.attempt_id).filter(
                        Exam_Attempt.user_id.in_(uids_to_clean),
                        Exam_Attempt.schedule_id == str(exam_id)
                    ).all()
                    att_ids = [str(r[0]) for r in att_rows if r[0]]
                    if att_ids:
                        sess.query(Answer).filter(func.cast(Answer.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                        sess.query(AnswerSheetPage).filter(func.cast(AnswerSheetPage.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                        sess.query(Exam_Attempt).filter(func.cast(Exam_Attempt.attempt_id, String).in_(att_ids)).delete(synchronize_session=False)
                        sess.commit()
                    sess.close()
            except Exception as clean_err:
                logger.warning(f"Failed cleaning stopped student DB attempts: {clean_err}")

        # Emit events outside the lock
        if event_to_emit:
            evt_name, evt_data, ret_msg = event_to_emit
            self._emit_event(job_id, evt_name, evt_data)
            return {"status": True, "statusMessage": ret_msg}

        return {"status": False, "statusMessage": "No action taken."}

    def _handle_sheet_error(self, job_id: str, user_id: str, student_name: str, error_msg: str):
        """Handles single student failure cleanly without failing other concurrent workers."""
        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return
            st_record = job["students"].get(user_id)
            if st_record:
                st_record["status"] = "failed"
                st_record["status_phase"] = "Evaluation failed"
                st_record["error"] = error_msg
                st_record["completed_at"] = datetime.utcnow().isoformat()
                for q in st_record.get("questions", []):
                    if q.get("status") != "Evaluated":
                        q["status"] = "Failed"
            job["failed_students"] += 1
            completed_cnt = job["completed_students"]
            failed_cnt = job["failed_students"]
            total_cnt = job["total_students"]
            is_all_done = (completed_cnt + failed_cnt >= total_cnt)
            if is_all_done:
                job["status"] = "completed"
            self._persist_job(job_id)

        # Persist failure status to DB so it survives browser refresh / SSE reconnect.
        # Uses schedule_id + user_id to target only this student's attempt — never touches other students.
        try:
            from others.exams import SQLiteDB, Exam_Attempt
            db_fail = SQLiteDB()
            sess_fail = db_fail.connect()
            if sess_fail:
                eval_sched_id = str(job.get("schedule_id") or job.get("exam_id"))
                sess_fail.query(Exam_Attempt).filter(
                    Exam_Attempt.user_id == str(user_id),
                    Exam_Attempt.schedule_id == eval_sched_id,
                    Exam_Attempt.status == "in_progress"  # only update this student's in-progress attempt
                ).update({"status": "failed"}, synchronize_session=False)
                sess_fail.commit()
                sess_fail.close()
        except Exception as _db_fail_err:
            logger.warning(f"[BulkEvalManager] Could not persist failure status to DB for {user_id}: {_db_fail_err}")

        self._emit_event(job_id, "sheet_failed", {
            "job_id": job_id,
            "user_id": user_id,
            "student_name": student_name,
            "roll_no": st_record.get("roll_no", "") if st_record else "",
            "status": "Failed",
            "status_phase": "Evaluation failed",
            "questions": st_record.get("questions", []) if st_record else [],
            "error": error_msg,
            "completed": completed_cnt,
            "failed": failed_cnt,
            "total": total_cnt,
            "percentage": round(((completed_cnt + failed_cnt) / total_cnt) * 100) if total_cnt > 0 else 100,
            "message": f"Failed evaluating {student_name}: {error_msg}"
        })

        if is_all_done:
            self._emit_event(job_id, "job_completed", {
                "job_id": job_id,
                "status": "completed",
                "completed": completed_cnt,
                "failed": failed_cnt,
                "total": total_cnt,
                "message": f"Bulk evaluation complete: {completed_cnt} evaluated, {failed_cnt} failed."
            })

    def _emit_event(self, job_id: str, event_name: str, data: dict):
        """Pushes an SSE event payload to all active listener queues for this job."""
        with self.lock:
            queues = list(self.listeners.get(job_id, []))

        payload = f"event: {event_name}\ndata: {json.dumps(data)}\n\n"
        for q in queues:
            try:
                q.put_nowait(payload)
            except Exception:
                pass

    def _build_resume_task(self, uid: str, st: dict, raw_tasks: dict) -> dict:
        """Uses in-memory raw_tasks if available, otherwise downloads staged PDFs from GCS."""
        existing = raw_tasks.get(uid)
        if existing and existing.get("file_items"):
            return existing

        file_items = []
        gcs_files = st.get("gcs_files") or []
        if gcs_files:
            from others.gcs_service import gcs_storage
            for gf in gcs_files:
                gcs_path = gf.get("gcs_path")
                fname = gf.get("filename") or "answersheet.pdf"
                if gcs_path:
                    try:
                        file_bytes = gcs_storage.download_media_bytes(gcs_path)
                        if file_bytes:
                            file_items.append((fname, file_bytes))
                    except Exception as dl_err:
                        logger.warning(f"[BulkEvalManager] Failed downloading {gcs_path} from GCS: {dl_err}")

        return {
            "user_id": uid,
            "student_name": st.get("student_name"),
            "roll_no": st.get("roll_no"),
            "file_items": file_items,
        }

    def _cleanup_gcs_staging_files(self, job: dict):
        """Deletes temporary GCS staging files once all students in the job are completed."""
        paths = []
        for st in (job.get("students") or {}).values():
            for gf in (st.get("gcs_files") or []):
                if gf.get("gcs_path"):
                    paths.append(gf["gcs_path"])
        if paths:
            try:
                from others.gcs_service import gcs_storage
                gcs_storage.delete_media_batch(paths)
            except Exception as cl_err:
                logger.warning(f"[BulkEvalManager] GCS staging cleanup warning: {cl_err}")

    def auto_resume_institute_jobs(self, institute_id: str):
        """
        Decision 2 Implementation:
        Automatically resumes paused bulk evaluations in the background when
        additional credits are allocated by the Super Admin.
        Reconciles against DB records to skip already completed students.
        """
        if not institute_id:
            return 0
        total_resumed = 0
        with self.lock:
            for job_id, job in list(self.jobs.items()):
                if str(job.get("institute_id")) == str(institute_id) and job.get("status") == "paused_insufficient_credits":
                    exam_id = job.get("schedule_id") or job.get("exam_id")
                    completed_uids = set()
                    try:
                        from others.exams import SQLiteDB, Exam_Attempt
                        sess = SQLiteDB().connect()
                        if sess:
                            completed_uids = set(
                                str(r[0]) for r in sess.query(Exam_Attempt.user_id).filter(
                                    Exam_Attempt.schedule_id == str(exam_id),
                                    Exam_Attempt.total_score.isnot(None)
                                ).all()
                            )
                            sess.close()
                    except Exception as db_err:
                        logger.warning(f"[BulkEvalManager] DB check error in auto-resume: {db_err}")

                    job["status"] = "in_progress"
                    job["cancelled"] = False
                    user_info = job.get("user_info")
                    raw_tasks = job.get("raw_tasks") or {}

                    resumed_students_in_job = 0
                    for uid, st in job.get("students", {}).items():
                        # Skip students who are already finalized in database
                        if str(uid) in completed_uids:
                            st["status"] = "completed"
                            continue
                        if st.get("status") in ("paused", "queued"):
                            st["status"] = "queued"
                            st["status_phase"] = "Waiting in queue (Auto-resumed)"
                            task = self._build_resume_task(uid, st, raw_tasks)
                            self.executor.submit(self._worker_process_sheet, job_id, task, user_info)
                            resumed_students_in_job += 1
                            total_resumed += 1

                    self._persist_job(job_id)
                    self._emit_event(job_id, "job_resumed", {
                        "job_id": job_id,
                        "status": "in_progress",
                        "resumed_count": resumed_students_in_job,
                        "message": f"AI credits replenished. Background bulk evaluation automatically resumed for {resumed_students_in_job} pending students."
                    })
                    logger.info(f"[BulkEvalManager] Auto-resumed job {job_id} for institute {institute_id} ({resumed_students_in_job} students).")
        return total_resumed

    def resume_evaluation_job(self, job_id: str):
        """
        Manually triggers resumption of a paused or interrupted evaluation job,
        skipping all students whose evaluations are already completed in the database.
        """
        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return {"status": False, "statusMessage": f"Job {job_id} not found."}

            # Pre-flight credit check before resuming
            from others.ai_credits import AICreditManager, TOKENS_PER_EVAL_PAGE
            target_inst_id = job.get("institute_id")
            has_access, err_msg, err_code, _ = AICreditManager.check_and_reserve(
                institute_id=target_inst_id,
                user_id=None,
                estimated_tokens=TOKENS_PER_EVAL_PAGE,
                feature_name="Paper Evaluation",
                enforce_reserve=True
            )
            if not has_access:
                return {
                    "status": False,
                    "code": "AI_CREDIT_EXHAUSTED",
                    "statusMessage": err_msg or "Insufficient AI credits to resume evaluation. Minimum 1,000 token reserve required."
                }

            exam_id = job.get("schedule_id") or job.get("exam_id")
            user_info = job.get("user_info")
            raw_tasks = job.get("raw_tasks") or {}

            # Query DB for already completed students to prevent duplicate credit deduction
            completed_uids = set()
            try:
                from others.exams import SQLiteDB, Exam_Attempt, ExamSchedule
                from sqlalchemy import or_
                sess = SQLiteDB().connect()
                if sess:
                    sched_subq = sess.query(ExamSchedule.schedule_id).filter(ExamSchedule.exam_id == str(exam_id))
                    completed_uids = set(
                        str(r[0]) for r in sess.query(Exam_Attempt.user_id).filter(
                            or_(Exam_Attempt.schedule_id == str(exam_id), Exam_Attempt.schedule_id.in_(sched_subq)),
                            Exam_Attempt.status == "evaluated"
                        ).all()
                    )
                    sess.close()
            except Exception as db_err:
                logger.warning(f"[BulkEvalManager] DB completed check error: {db_err}")

            job["status"] = "in_progress"
            job["cancelled"] = False
            job["failed_students"] = 0

            resumed_count = 0
            completed_count = 0
            for uid, st in job.get("students", {}).items():
                if str(uid) in completed_uids:
                    st["status"] = "completed"
                    completed_count += 1
                    continue
                if st.get("status") in ("paused", "queued", "failed", "completed"):
                    st["status"] = "queued"
                    st["status_phase"] = "Waiting in queue (Resumed)"
                    st["completed_questions"] = 0
                    task = self._build_resume_task(uid, st, raw_tasks)
                    self.executor.submit(self._worker_process_sheet, job_id, task, user_info)
                    resumed_count += 1
            job["completed_students"] = completed_count

            self._persist_job(job_id)
            self._emit_event(job_id, "job_resumed", {
                "job_id": job_id,
                "status": "in_progress",
                "resumed_count": resumed_count,
                "message": f"Evaluation resumed for {resumed_count} pending students. Completed evaluations were skipped."
            })
            return {
                "status": True,
                "statusMessage": f"Successfully resumed {resumed_count} pending students.",
                "resumed_count": resumed_count
            }

    def get_job_summary(self, job_id: str) -> dict:
        """Returns snapshot summary of the job state."""
        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return None
            return {
                "job_id": job["job_id"],
                "exam_id": job["exam_id"],
                "status": job["status"],
                "total": job["total_students"],
                "completed": job["completed_students"],
                "failed": job["failed_students"],
                "percentage": round((job["completed_students"] / job["total_students"]) * 100) if job["total_students"] > 0 else 0,
                "students": list(job["students"].values())
            }

    def get_active_job_for_exam(self, exam_id: str) -> dict:
        """Returns active/paused job for exam_id from memory or GCS."""
        target_exam = str(exam_id)
        with self.lock:
            for job in self.jobs.values():
                if str(job.get("exam_id")) == target_exam and job.get("status") in (
                    "in_progress", "pending", "paused_insufficient_credits", "interrupted"
                ):
                    return self.get_job_summary(job["job_id"])

        try:
            from others.gcs_service import gcs_storage
            if gcs_storage.is_gcs_active():
                raw = gcs_storage.download_media_bytes(f"evaluation_jobs/by_exam/{target_exam}/active_job.json")
                if raw:
                    data = json.loads(raw.decode("utf-8"))
                    if data.get("status") in ("in_progress", "pending", "paused_insufficient_credits", "interrupted"):
                        # Reconcile against DB: if job claims completed students but DB has 0 attempts, DB was cleared -> discard stale job
                        if data.get("completed_students", 0) > 0:
                            try:
                                from others.exams import SQLiteDB, Exam_Attempt, ExamSchedule
                                from sqlalchemy import or_
                                sess = SQLiteDB().connect()
                                if sess:
                                    sched_subq = sess.query(ExamSchedule.schedule_id).filter(ExamSchedule.exam_id == target_exam)
                                    db_att_count = sess.query(Exam_Attempt.attempt_id).filter(
                                        or_(Exam_Attempt.schedule_id == target_exam, Exam_Attempt.schedule_id.in_(sched_subq))
                                    ).count()
                                    sess.close()
                                    if db_att_count == 0:
                                        gcs_storage.delete_media(f"evaluation_jobs/by_exam/{target_exam}/active_job.json")
                                        return None
                            except Exception:
                                pass
                        if data.get("status") in ("in_progress", "pending"):
                            data["status"] = "interrupted"
                        with self.lock:
                            self.jobs[data["job_id"]] = data
                        return self.get_job_summary(data["job_id"])
        except Exception:
            pass
        return None

    def subscribe_events(self, job_id: str):
        """
        SSE Generator yielding event-stream chunks to connected browser clients.
        Includes initial snapshot and keep-alive ping.
        """
        listener_queue = queue.Queue(maxsize=100)
        with self.lock:
            self.listeners[job_id].append(listener_queue)

        try:
            # Send initial snapshot event
            snapshot = self.get_job_summary(job_id)
            if snapshot:
                yield f"event: job_snapshot\ndata: {json.dumps(snapshot)}\n\n"

            # Stream real-time events as they occur
            while True:
                try:
                    payload = listener_queue.get(timeout=12.0)
                    yield payload
                    # If this was job_completed event, finish stream after short delay
                    if "event: job_completed" in payload:
                        break
                except queue.Empty:
                    # Keep-alive heartbeat comment to prevent proxy timeout
                    yield ": ping\n\n"

                # Check if job is finished
                summary = self.get_job_summary(job_id)
                if summary and summary.get("status") in ("completed", "failed", "interrupted"):
                    if listener_queue.empty():
                        break

        finally:
            with self.lock:
                if job_id in self.listeners and listener_queue in self.listeners[job_id]:
                    self.listeners[job_id].remove(listener_queue)


# Singleton instance shared across Flask app
bulk_eval_manager = BulkEvaluationManager(max_workers=2)
