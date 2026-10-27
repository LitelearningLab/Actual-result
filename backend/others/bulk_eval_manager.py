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
        self.lock = threading.Lock()
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
                    except Exception:
                        pass
        except Exception as e:
            logger.warning(f"[BulkEvalManager] Recovery check warning: {e}")

    def create_job(self, exam_id: str, student_tasks: list, current_user=None) -> str:
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
        user_info = None
        if current_user:
            user_info = {
                "user_id": str(getattr(current_user, "user_id", "")),
                "user_name": str(getattr(current_user, "user_name", "")),
                "user_role": str(getattr(current_user, "user_role", ""))
            }

        students_map = {}
        for t in student_tasks:
            uid = str(t["user_id"])
            students_map[uid] = {
                "user_id": uid,
                "student_name": t.get("student_name") or "Student",
                "status": "queued",  # queued | evaluating | completed | failed
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
                "status": "in_progress",
                "created_at": datetime.utcnow().isoformat(),
                "total_students": len(student_tasks),
                "completed_students": 0,
                "failed_students": 0,
                "students": students_map,
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

        # 1. Update status to 'evaluating' and notify
        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return
            st_record = job["students"].get(user_id)
            if st_record:
                st_record["status"] = "evaluating"
                st_record["started_at"] = datetime.utcnow().isoformat()
            self._persist_job(job_id)

        self._emit_event(job_id, "sheet_started", {
            "job_id": job_id,
            "user_id": user_id,
            "student_name": student_name,
            "status": "evaluating",
            "message": f"Evaluating answer sheet for {student_name}..."
        })

        # 2. Execute evaluation using core function with isolated DB session
        from others.exams import process_single_student_answer_sheet

        try:
            res_data, status_code = process_single_student_answer_sheet(
                exam_id=job["exam_id"],
                user_id=user_id,
                file_items=file_items,
                replace=True,
                current_user=user_info
            )

            if status_code == 200 and res_data.get("status"):
                data_payload = res_data.get("data") or {}
                marks_str = data_payload.get("marks") or "Evaluated"
                total_pages = data_payload.get("total_pages") or 1

                with self.lock:
                    job = self.jobs.get(job_id)
                    if job:
                        st_record = job["students"].get(user_id)
                        if st_record:
                            st_record["status"] = "completed"
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
                    "status": "AI Evaluated",
                    "marks": marks_str,
                    "total_pages": total_pages,
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

            else:
                err_msg = res_data.get("statusMessage") or f"Evaluation failed with status {status_code}"
                self._handle_sheet_error(job_id, user_id, student_name, err_msg)

        except Exception as e:
            err_msg = str(e)
            logger.error(f"[BulkEvalWorker] Error evaluating {student_name} ({user_id}): {err_msg}", exc_info=True)
            self._handle_sheet_error(job_id, user_id, student_name, err_msg)

    def _handle_sheet_error(self, job_id: str, user_id: str, student_name: str, error_msg: str):
        """Handles single student failure cleanly without failing other concurrent workers."""
        with self.lock:
            job = self.jobs.get(job_id)
            if not job:
                return
            st_record = job["students"].get(user_id)
            if st_record:
                st_record["status"] = "failed"
                st_record["error"] = error_msg
                st_record["completed_at"] = datetime.utcnow().isoformat()
            job["failed_students"] += 1
            completed_cnt = job["completed_students"]
            failed_cnt = job["failed_students"]
            total_cnt = job["total_students"]
            is_all_done = (completed_cnt + failed_cnt >= total_cnt)
            if is_all_done:
                job["status"] = "completed"
            self._persist_job(job_id)

        self._emit_event(job_id, "sheet_failed", {
            "job_id": job_id,
            "user_id": user_id,
            "student_name": student_name,
            "status": "Failed",
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
