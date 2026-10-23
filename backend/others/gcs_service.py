import os
import re
import uuid
import time
import mimetypes
from datetime import datetime, timedelta
from dotenv import load_dotenv

_backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(_backend_dir, ".env"))

ALLOWED_IMAGE_MIMES = {
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"],
    "image/gif": [".gif"],
    "image/webp": [".webp"],
    "image/svg+xml": [".svg"],
    "image/bmp": [".bmp"]
}

ALLOWED_AUDIO_MIMES = {
    "audio/mpeg": [".mp3"],
    "audio/mp3": [".mp3"],
    "audio/wav": [".wav"],
    "audio/x-wav": [".wav"],
    "audio/ogg": [".ogg"],
    "audio/webm": [".webm"],
    "audio/aac": [".aac"],
    "audio/m4a": [".m4a"],
    "audio/x-m4a": [".m4a"],
    "audio/flac": [".flac"]
}

ALLOWED_DOCUMENT_MIMES = {
    "application/msword": [".doc"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    "application/vnd.ms-excel": [".xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"]
}

MAX_IMAGE_SIZE_BYTES = int(os.getenv("MAX_IMAGE_SIZE_BYTES", 15 * 1024 * 1024))  # 15 MB
MAX_AUDIO_SIZE_BYTES = int(os.getenv("MAX_AUDIO_SIZE_BYTES", 30 * 1024 * 1024))  # 30 MB
MAX_DOC_SIZE_BYTES = int(os.getenv("MAX_DOC_SIZE_BYTES", 25 * 1024 * 1024))  # 25 MB


def sanitize_filename(filename: str) -> str:
    """Sanitize filename to prevent directory traversal and unsafe characters."""
    clean = os.path.basename(filename).strip()
    clean = re.sub(r'[^a-zA-Z0-9._-]', '_', clean)
    clean = re.sub(r'_+', '_', clean)
    return clean or "media_file"


def build_student_answer_object_path(institute_id: str, exam_id: str, attempt_id: str, question_id: str, image_uuid: str, extension: str = "jpg") -> str:
    """
    Builds the standardized canonical GCS object path for student answer images:
    student_answers/{institute_id}/{exam_id}/{attempt_id}/{question_id}/{image_uuid}.{extension}
    """
    clean_inst = sanitize_filename(str(institute_id or "global"))
    clean_exam = sanitize_filename(str(exam_id))
    clean_att = sanitize_filename(str(attempt_id))
    clean_qid = sanitize_filename(str(question_id))
    clean_uuid = sanitize_filename(str(image_uuid))
    ext = f".{extension.lstrip('.')}" if extension else ".jpg"
    return f"student_answers/{clean_inst}/{clean_exam}/{clean_att}/{clean_qid}/{clean_uuid}{ext}"


class GCSStorageService:
    def __init__(self):
        self.bucket_name = os.getenv("GCS_BUCKET_NAME", "").strip()
        self.project_id = os.getenv("GCS_PROJECT_ID", "").strip() or None
        self.credentials_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS", "").strip()
        self.public_url_base = os.getenv("GCS_PUBLIC_URL_BASE", "").strip()
        self.use_signed_urls = os.getenv("GCS_USE_SIGNED_URLS", "false").strip().lower() in ("true", "1", "yes")
        self.signed_url_expiration_minutes = int(os.getenv("GCS_SIGNED_URL_EXPIRATION_MINUTES", "1440"))  # default 24h
        self.allow_local_fallback = os.getenv("ALLOW_LOCAL_FALLBACK", "true" if not self.bucket_name else "false").strip().lower() in ("true", "1", "yes")
        self.client = None
        self.bucket = None
        self._init_gcs()

    def _init_gcs(self):
        """Initialize GCS client if credentials/bucket are configured."""
        if not self.bucket_name:
            return

        try:
            from google.cloud import storage
            if self.credentials_path and os.path.exists(self.credentials_path):
                self.client = storage.Client.from_service_account_json(
                    self.credentials_path, project=self.project_id
                )
            else:
                self.client = storage.Client(project=self.project_id)
            self.bucket = self.client.bucket(self.bucket_name)
        except Exception as e:
            print(f"[GCSStorageService] Warning: Failed to initialize Google Cloud Storage client: {e}")
            self.client = None
            self.bucket = None

    def is_gcs_active(self) -> bool:
        """Returns True if Google Cloud Storage bucket is actively connected."""
        return self.bucket is not None

    def validate_media(self, filename: str, file_bytes: bytes, expected_type: str = "any"):
        """
        Validates filename, MIME type, and size against whitelist.
        expected_type: 'image', 'audio', or 'any'
        """
        if not file_bytes:
            return False, "File is empty", None, None

        ext = os.path.splitext(filename)[1].lower()
        mime_type, _ = mimetypes.guess_type(filename)
        mime_type = (mime_type or "").lower()

        # Determine media category
        is_image = False
        is_audio = False
        is_doc = False

        for m, exts in ALLOWED_IMAGE_MIMES.items():
            if mime_type == m or ext in exts:
                is_image = True
                mime_type = m
                break

        for m, exts in ALLOWED_AUDIO_MIMES.items():
            if mime_type == m or ext in exts:
                is_audio = True
                mime_type = m
                break

        for m, exts in ALLOWED_DOCUMENT_MIMES.items():
            if mime_type == m or ext in exts:
                is_doc = True
                mime_type = m
                break

        if not is_image and not is_audio and not is_doc:
            # Fallback check on extensions
            if ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"]:
                is_image = True
                mime_type = "image/jpeg" if ext in [".jpg", ".jpeg"] else f"image/{ext.replace('.', '')}"
            elif ext in [".mp3", ".wav", ".ogg", ".webm", ".m4a", ".aac", ".flac"]:
                is_audio = True
                mime_type = f"audio/{ext.replace('.', '')}"
            elif ext in [".doc", ".docx"]:
                is_doc = True
                mime_type = "application/msword" if ext == ".doc" else "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            elif ext in [".xls", ".xlsx"]:
                is_doc = True
                mime_type = "application/vnd.ms-excel" if ext == ".xls" else "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            else:
                return False, f"Unsupported file type '{ext}'. Allowed: images (JPG, PNG, GIF, WebP, SVG), documents (Word, Excel), and audio (MP3, WAV, OGG, WebM, M4A, AAC)", None, None

        if is_image:
            media_type = "image"
        elif is_audio:
            media_type = "audio"
        else:
            media_type = "document"

        if expected_type == "image" and not is_image:
            return False, "Expected an image file (JPG, PNG, GIF, WebP, SVG)", None, None
        if expected_type == "audio" and not is_audio:
            return False, "Expected an audio file (MP3, WAV, OGG, WebM, M4A, AAC)", None, None
        if expected_type == "document" and not is_doc:
            return False, "Expected a Word or Excel document (.doc, .docx, .xls, .xlsx)", None, None

        # Size check
        size_len = len(file_bytes)
        if is_image and size_len > MAX_IMAGE_SIZE_BYTES:
            max_mb = MAX_IMAGE_SIZE_BYTES // (1024 * 1024)
            return False, f"Image size exceeds maximum limit of {max_mb}MB", None, None
        if is_audio and size_len > MAX_AUDIO_SIZE_BYTES:
            max_mb = MAX_AUDIO_SIZE_BYTES // (1024 * 1024)
            return False, f"Audio size exceeds maximum limit of {max_mb}MB", None, None
        if is_doc and size_len > MAX_DOC_SIZE_BYTES:
            max_mb = MAX_DOC_SIZE_BYTES // (1024 * 1024)
            return False, f"Document size exceeds maximum limit of {max_mb}MB", None, None

        return True, None, media_type, mime_type

    def upload_media(self, file_bytes: bytes, filename: str, folder_prefix: str = "questions", expected_type: str = "any", custom_object_id: str = None, is_private: bool = False, exact_object_path: str = None) -> dict:
        """
        Uploads media to GCS (or local fallback storage if GCS not configured).
        If exact_object_path is given, uses that canonical path directly.
        Returns metadata dictionary with URL, GCS path, MIME type, file size.
        """
        valid, err_msg, media_type, mime_type = self.validate_media(filename, file_bytes, expected_type)
        if not valid:
            raise ValueError(err_msg)

        if exact_object_path:
            gcs_object_path = exact_object_path.strip("/\\").replace("\\", "/")
            clean_folder = os.path.dirname(gcs_object_path).replace("\\", "/")
            unique_filename = os.path.basename(gcs_object_path)
            safe_name = sanitize_filename(filename or unique_filename)
        else:
            safe_name = sanitize_filename(filename)
            obj_uid = custom_object_id or str(uuid.uuid4())
            unique_filename = f"{obj_uid}_{safe_name}"
            clean_folder = folder_prefix.strip("/\\")
            gcs_object_path = f"{clean_folder}/{unique_filename}"

        file_size = len(file_bytes)

        if self.is_gcs_active():
            try:
                blob = self.bucket.blob(gcs_object_path)
                blob.upload_from_string(file_bytes, content_type=mime_type)

                # Determine URL strategy (Signed URL vs Public/CDN URL)
                if is_private or self.use_signed_urls:
                    media_url = self.generate_signed_url(gcs_object_path, expiration_minutes=self.signed_url_expiration_minutes)
                elif self.public_url_base:
                    media_url = f"{self.public_url_base.rstrip('/')}/{gcs_object_path}"
                else:
                    media_url = f"https://storage.googleapis.com/{self.bucket_name}/{gcs_object_path}"

                return {
                    "url": media_url,
                    "file_url": media_url,
                    "gcs_path": gcs_object_path,
                    "media_type": media_type,
                    "mime_type": mime_type,
                    "file_size": file_size,
                    "original_filename": safe_name,
                    "storage_provider": "gcs",
                    "is_private": is_private or self.use_signed_urls
                }
            except Exception as e:
                print(f"[GCSStorageService] Upload to GCS failed: {e}")
                if not self.allow_local_fallback:
                    raise RuntimeError(f"GCS storage upload failed: {e}. Local fallback is disabled for production safety.")

        # Local storage fallback (when GCS is not configured or allow_local_fallback is enabled)
        if self.bucket_name and not self.allow_local_fallback:
            raise RuntimeError("Google Cloud Storage is configured but not connected. Local fallback is disabled in production.")

        # Validate local fallback destination path to prevent directory traversal
        target_path = exact_object_path if exact_object_path else gcs_object_path
        if (
            ".." in target_path
            or target_path.startswith(("/", "\\"))
            or os.path.isabs(target_path)
            or bool(re.match(r'^[a-zA-Z]:', target_path))
            or bool(os.path.splitdrive(target_path)[0])
            or (folder_prefix and (".." in folder_prefix or folder_prefix.startswith(("/", "\\")) or os.path.isabs(folder_prefix) or bool(re.match(r'^[a-zA-Z]:', folder_prefix)) or bool(os.path.splitdrive(folder_prefix)[0])))
            or ".." in gcs_object_path
            or gcs_object_path.startswith(("/", "\\"))
            or os.path.isabs(gcs_object_path)
            or bool(re.match(r'^[a-zA-Z]:', gcs_object_path))
            or bool(os.path.splitdrive(gcs_object_path)[0])
        ):
            raise ValueError(f"Directory traversal detected for '{exact_object_path or gcs_object_path}'")

        uploads_root = os.path.abspath(os.path.join(_backend_dir, "static", "uploads"))
        resolved_dir = os.path.abspath(os.path.join(uploads_root, clean_folder.replace("/", os.sep)))
        resolved_file = os.path.abspath(os.path.join(resolved_dir, unique_filename))

        try:
            if os.path.commonpath([uploads_root, resolved_dir]) != uploads_root:
                raise ValueError(f"Directory traversal detected for '{gcs_object_path}'")
            if os.path.commonpath([uploads_root, resolved_file]) != uploads_root:
                raise ValueError(f"Directory traversal detected for '{gcs_object_path}'")
            real_root = os.path.realpath(uploads_root)
            real_file = os.path.realpath(resolved_file)
            if os.path.commonpath([real_root, real_file]) != real_root:
                raise ValueError(f"Directory traversal detected for '{gcs_object_path}'")
        except ValueError:
            raise ValueError(f"Directory traversal detected for '{gcs_object_path}'")

        os.makedirs(resolved_dir, exist_ok=True)
        with open(resolved_file, "wb") as f:
            f.write(file_bytes)

        media_url = f"/edu/api/uploads/media/{clean_folder}/{unique_filename}"

        return {
            "url": media_url,
            "file_url": media_url,
            "gcs_path": gcs_object_path,
            "media_type": media_type,
            "mime_type": mime_type,
            "file_size": file_size,
            "original_filename": safe_name,
            "storage_provider": "local",
            "is_private": False
        }

    def download_media_bytes(self, gcs_path: str) -> bytes:
        """
        Downloads media bytes from Google Cloud Storage or local fallback storage.
        Returns the raw binary bytes of the file.
        Raises FileNotFoundError or RuntimeError on failure.
        """
        if not gcs_path:
            raise ValueError("gcs_path is required")

        if ".." in gcs_path or gcs_path.startswith(("/", "\\")):
            raise ValueError(f"Directory traversal detected for '{gcs_path}'")

        cleaned_path = gcs_path.strip("/\\").replace("\\", "/")

        # 1. Try GCS if active
        if self.is_gcs_active():
            try:
                blob = self.bucket.blob(cleaned_path)
                if blob.exists():
                    return blob.download_as_bytes()
                if not self.allow_local_fallback:
                    raise FileNotFoundError(f"Object '{cleaned_path}' not found in Google Cloud Storage.")
            except FileNotFoundError:
                raise
            except Exception as e:
                if not self.allow_local_fallback:
                    raise RuntimeError(f"Failed to download '{cleaned_path}' from Google Cloud Storage: {e}")
                print(f"[GCSStorageService] GCS download failed for '{cleaned_path}', checking local fallback: {e}")

        # 2. Check local fallback storage
        uploads_root = os.path.abspath(os.path.join(_backend_dir, "static", "uploads"))
        resolved_file = os.path.abspath(os.path.join(uploads_root, cleaned_path.replace("/", os.sep)))
        try:
            if os.path.commonpath([uploads_root, resolved_file]) != uploads_root:
                raise ValueError(f"Directory traversal detected for '{cleaned_path}'")
        except ValueError:
            raise ValueError(f"Directory traversal detected for '{cleaned_path}'")

        if os.path.exists(resolved_file):
            try:
                with open(resolved_file, "rb") as f:
                    return f.read()
            except Exception as e:
                raise RuntimeError(f"Failed to read local fallback file '{resolved_file}': {e}")

        raise FileNotFoundError(f"Media file '{cleaned_path}' not found in GCS or local storage.")

    def delete_media(self, gcs_path: str) -> bool:
        """Deletes media file from GCS and/or local fallback storage."""
        if not gcs_path:
            return True

        if ".." in gcs_path or gcs_path.startswith(("/", "\\")):
            raise ValueError(f"Directory traversal detected for '{gcs_path}'")

        cleaned_path = gcs_path.strip("/\\").replace("\\", "/")
        deleted = False

        if self.is_gcs_active():
            try:
                blob = self.bucket.blob(cleaned_path)
                if blob.exists():
                    blob.delete()
                    deleted = True
            except Exception as e:
                print(f"[GCSStorageService] Error deleting blob {cleaned_path} from GCS: {e}")

        # Also remove from local fallback if exists
        try:
            uploads_root = os.path.abspath(os.path.join(_backend_dir, "static", "uploads"))
            resolved_file = os.path.abspath(os.path.join(uploads_root, cleaned_path.replace("/", os.sep)))
            if os.path.commonpath([uploads_root, resolved_file]) == uploads_root and os.path.exists(resolved_file):
                os.remove(resolved_file)
                deleted = True
        except Exception as e:
            print(f"[GCSStorageService] Error deleting local fallback {cleaned_path}: {e}")

        return deleted

    def generate_signed_url(self, gcs_path: str, expiration_minutes: int = 1440) -> str:
        """Generates a v4 signed URL for secure temporary media access."""
        if not self.is_gcs_active() or not gcs_path:
            return gcs_path

        cleaned_path = gcs_path.strip("/\\").replace("\\", "/")
        try:
            blob = self.bucket.blob(cleaned_path)
            t_sign_start = time.perf_counter()
            signed_url = blob.generate_signed_url(
                version="v4",
                expiration=timedelta(minutes=expiration_minutes),
                method="GET"
            )
            t_sign_duration = time.perf_counter() - t_sign_start
            print(
                f"[PERF] [SIGNED_URL_GEN] object_path={cleaned_path} expiration_mins={expiration_minutes} duration={t_sign_duration:.4f}s",
                flush=True,
            )
            return signed_url
        except Exception as e:
            print(f"[GCSStorageService] Error generating signed URL for {gcs_path}: {e}")
            if self.public_url_base:
                return f"{self.public_url_base.rstrip('/')}/{cleaned_path}"
            return f"https://storage.googleapis.com/{self.bucket_name}/{cleaned_path}"


# Singleton instance
gcs_storage = GCSStorageService()

