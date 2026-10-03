import os
import re
import uuid
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

MAX_IMAGE_SIZE_BYTES = int(os.getenv("MAX_IMAGE_SIZE_BYTES", 15 * 1024 * 1024))  # 15 MB
MAX_AUDIO_SIZE_BYTES = int(os.getenv("MAX_AUDIO_SIZE_BYTES", 30 * 1024 * 1024))  # 30 MB


def sanitize_filename(filename: str) -> str:
    """Sanitize filename to prevent directory traversal and unsafe characters."""
    clean = os.path.basename(filename).strip()
    clean = re.sub(r'[^a-zA-Z0-9._-]', '_', clean)
    clean = re.sub(r'_+', '_', clean)
    return clean or "media_file"


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

        if not is_image and not is_audio:
            # Fallback check on extensions
            if ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"]:
                is_image = True
                mime_type = "image/jpeg" if ext in [".jpg", ".jpeg"] else f"image/{ext.replace('.', '')}"
            elif ext in [".mp3", ".wav", ".ogg", ".webm", ".m4a", ".aac", ".flac"]:
                is_audio = True
                mime_type = f"audio/{ext.replace('.', '')}"
            else:
                return False, f"Unsupported file type '{ext}'. Allowed: images (JPG, PNG, GIF, WebP, SVG) and audio (MP3, WAV, OGG, WebM, M4A, AAC)", None, None

        media_type = "image" if is_image else "audio"

        if expected_type == "image" and not is_image:
            return False, "Expected an image file (JPG, PNG, GIF, WebP, SVG)", None, None
        if expected_type == "audio" and not is_audio:
            return False, "Expected an audio file (MP3, WAV, OGG, WebM, M4A, AAC)", None, None

        # Size check
        size_len = len(file_bytes)
        if is_image and size_len > MAX_IMAGE_SIZE_BYTES:
            max_mb = MAX_IMAGE_SIZE_BYTES // (1024 * 1024)
            return False, f"Image size exceeds maximum limit of {max_mb}MB", None, None
        if is_audio and size_len > MAX_AUDIO_SIZE_BYTES:
            max_mb = MAX_AUDIO_SIZE_BYTES // (1024 * 1024)
            return False, f"Audio size exceeds maximum limit of {max_mb}MB", None, None

        return True, None, media_type, mime_type

    def upload_media(self, file_bytes: bytes, filename: str, folder_prefix: str = "questions", expected_type: str = "any", custom_object_id: str = None, is_private: bool = False) -> dict:
        """
        Uploads media to GCS (or local fallback storage if GCS not configured).
        Returns metadata dictionary with URL, GCS path, MIME type, file size.
        """
        valid, err_msg, media_type, mime_type = self.validate_media(filename, file_bytes, expected_type)
        if not valid:
            raise ValueError(err_msg)

        safe_name = sanitize_filename(filename)
        file_ext = os.path.splitext(safe_name)[1].lower()
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

        local_dir = os.path.join(_backend_dir, "static", "uploads", clean_folder.replace("/", os.sep))
        os.makedirs(local_dir, exist_ok=True)
        local_file_path = os.path.join(local_dir, unique_filename)

        with open(local_file_path, "wb") as f:
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

    def delete_media(self, gcs_path: str) -> bool:
        """Deletes media file from GCS and/or local fallback storage."""
        if not gcs_path:
            return True

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
            local_file = os.path.join(_backend_dir, "static", "uploads", cleaned_path.replace("/", os.sep))
            if os.path.exists(local_file):
                os.remove(local_file)
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
            signed_url = blob.generate_signed_url(
                version="v4",
                expiration=timedelta(minutes=expiration_minutes),
                method="GET"
            )
            return signed_url
        except Exception as e:
            print(f"[GCSStorageService] Error generating signed URL for {gcs_path}: {e}")
            if self.public_url_base:
                return f"{self.public_url_base.rstrip('/')}/{cleaned_path}"
            return f"https://storage.googleapis.com/{self.bucket_name}/{cleaned_path}"


# Singleton instance
gcs_storage = GCSStorageService()
