import os
import sys
import io
import json

# Add backend directory to sys.path
backend_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, backend_dir)

from others.gcs_service import (
    gcs_storage,
    sanitize_filename,
    ALLOWED_IMAGE_MIMES,
    ALLOWED_AUDIO_MIMES
)

def run_tests():
    print("=== TEST 1: GCS Service Validation & Filename Sanitization ===")
    # 1. Validation test - valid image
    fake_png_bytes = b"\x89PNG\r\n\x1a\n" + b"\x00" * 100
    is_valid, err, mtype, mime = gcs_storage.validate_media("diagram.png", fake_png_bytes, "image")
    assert is_valid is True, f"Expected valid png, got err: {err}"
    assert mtype == "image", f"Expected image type, got {mtype}"
    print(f"  [PASS] Image validation passed (MIME: {mime})")

    # 2. Validation test - valid audio
    fake_mp3_bytes = b"ID3" + b"\x00" * 200
    is_valid, err, mtype, mime = gcs_storage.validate_media("listening_test.mp3", fake_mp3_bytes, "audio")
    assert is_valid is True, f"Expected valid mp3, got err: {err}"
    assert mtype == "audio", f"Expected audio type, got {mtype}"
    print(f"  [PASS] Audio validation passed (MIME: {mime})")

    # 3. Validation test - invalid file extension
    fake_exe_bytes = b"MZ" + b"\x00" * 100
    is_valid, err, _, _ = gcs_storage.validate_media("virus.exe", fake_exe_bytes, "image")
    assert is_valid is False, "Expected invalid for .exe"
    print("  [PASS] Invalid file rejection passed")

    # 4. Filename Sanitization
    safe_name = sanitize_filename("photo @# 1.png")
    assert safe_name == "photo_1.png", f"Unexpected sanitized name: {safe_name}"
    print(f"  [PASS] Filename sanitization passed: {safe_name}")

    print("\n=== TEST 2: Local Fallback Upload & Deletion ===")
    fake_img_data = b"\x89PNG\r\n\x1a\nFake PNG Content for testing"
    res = gcs_storage.upload_media(
        file_bytes=fake_img_data,
        filename="test_diagram.png",
        folder_prefix="questions/images/test-q-1",
        expected_type="image"
    )
    assert res is not None, "Upload returned None"
    assert res.get("url"), "url is missing"
    assert res.get("gcs_path").startswith("questions/images/test-q-1/"), f"Unexpected gcs_path: {res.get('gcs_path')}"
    print(f"  [PASS] Uploaded media URL: {res.get('url')}")
    print(f"  [PASS] GCS object path: {res.get('gcs_path')}")

    # Test Deletion
    del_ok = gcs_storage.delete_media(res.get("gcs_path"))
    assert del_ok is True, "Expected delete to succeed"
    print("  [PASS] Media deletion succeeded")

    print("\n=== TEST 3: DB Models & Serialization Check ===")
    from db.models import Question, Option, QuestionMedia
    print("  [PASS] Successfully imported Question, Option, and QuestionMedia models")

    # Check model columns
    assert hasattr(Option, 'image_url'), "Option model missing image_url column"
    assert hasattr(Option, 'gcs_path'), "Option model missing gcs_path column"
    assert hasattr(QuestionMedia, 'media_id'), "QuestionMedia missing media_id"
    assert hasattr(QuestionMedia, 'gcs_path'), "QuestionMedia missing gcs_path"
    assert hasattr(QuestionMedia, 'media_type'), "QuestionMedia missing media_type"
    print("  [PASS] Verified model attributes and schema mappings")

    print("\n=== TEST 4: Questions Module Helpers Check ===")
    from others.questions import upload_question_media, delete_question_media, ensure_question_media_schema
    print("  [PASS] Successfully imported question media handlers and schema helper")

    print("\n=== ALL UNIT & INTEGRATION CHECKS PASSED SUCCESSFULLY ===")

if __name__ == "__main__":
    run_tests()
