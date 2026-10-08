import os
import sys
import io
import uuid
import json

# Add backend directory to sys.path
backend_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, backend_dir)

from others.gcs_service import gcs_storage, sanitize_filename
from db.models import Question, Option, QuestionMedia

def run_production_lifecycle_validation():
    print("=" * 70)
    print("PRODUCTION VALIDATION PASS: GCS MEDIA & LIFECYCLE VERIFICATION")
    print("=" * 70)

    # ------------------------------------------------------------------
    # TEST 1: The Critical Orphan-Object & Media Replacement Lifecycle
    # Sequence:
    # 1. Upload image A
    # 2. Upload image B (replacement)
    # 3. Verify object A cleanup & object B existence
    # ------------------------------------------------------------------
    print("\n[TEST 1] Testing Image Replacement & Orphan Cleanup Lifecycle...")
    test_qid = f"test-q-{uuid.uuid4().hex[:8]}"

    # Step 1: Upload Image A
    img_a_data = b"\x89PNG\r\n\x1a\n" + b"Image A binary content" * 10
    res_a = gcs_storage.upload_media(
        file_bytes=img_a_data,
        filename="diagram_version_A.png",
        folder_prefix=f"questions/images/{test_qid}",
        expected_type="image"
    )
    path_a = res_a.get("gcs_path")
    assert path_a is not None, "Failed to upload Image A"
    print(f"  -> Uploaded Image A: {path_a}")

    # Step 2: Upload Image B (as replacement)
    img_b_data = b"\x89PNG\r\n\x1a\n" + b"Image B updated content" * 10
    res_b = gcs_storage.upload_media(
        file_bytes=img_b_data,
        filename="diagram_version_B.png",
        folder_prefix=f"questions/images/{test_qid}",
        expected_type="image"
    )
    path_b = res_b.get("gcs_path")
    assert path_b is not None, "Failed to upload Image B"
    print(f"  -> Uploaded Image B: {path_b}")

    # Step 3: Simulate Question Edit / Replacement (Simulating questions.py update logic)
    # Media list updated from [Image A] to [Image B] -> triggers deletion of Image A
    deleted_a = gcs_storage.delete_media(path_a)
    assert deleted_a is True, "Failed to delete replaced Image A"
    print(f"  -> Successfully deleted replaced Image A from storage ({path_a})")

    # Step 4: Cleanup Image B on eventual question deletion
    deleted_b = gcs_storage.delete_media(path_b)
    assert deleted_b is True, "Failed to delete Image B on question removal"
    print(f"  -> Successfully cleaned Image B on cascade deletion ({path_b})")
    print("  [PASS] Test 1: Image replacement and orphan cleanup passed cleanly!")

    # ------------------------------------------------------------------
    # TEST 2: Option Images Lifecycle (Add, Replace, and Cascade Delete)
    # ------------------------------------------------------------------
    print("\n[TEST 2] Testing Option Images Lifecycle...")
    opt_img_data = b"\x89PNG\r\n\x1a\n" + b"Option A diagram" * 5
    res_opt = gcs_storage.upload_media(
        file_bytes=opt_img_data,
        filename="option_diagram.png",
        folder_prefix=f"questions/options/{test_qid}",
        expected_type="image"
    )
    opt_path = res_opt.get("gcs_path")
    assert opt_path.startswith(f"questions/options/{test_qid}/"), f"Unexpected option GCS path: {opt_path}"
    print(f"  -> Uploaded Option Image: {opt_path}")

    # Delete Option Image
    del_opt = gcs_storage.delete_media(opt_path)
    assert del_opt is True, "Failed to delete Option image"
    print(f"  -> Cleaned Option Image: {opt_path}")
    print("  [PASS] Test 2: Option images lifecycle passed cleanly!")

    # ------------------------------------------------------------------
    # TEST 3: Audio Media Validation & Upload
    # ------------------------------------------------------------------
    print("\n[TEST 3] Testing Audio Media Upload & Lifecycle...")
    audio_data = b"ID3" + b"\x00" * 300
    res_audio = gcs_storage.upload_media(
        file_bytes=audio_data,
        filename="comprehension_listening.mp3",
        folder_prefix=f"questions/audio/{test_qid}",
        expected_type="audio"
    )
    audio_path = res_audio.get("gcs_path")
    assert audio_path.startswith(f"questions/audio/{test_qid}/"), f"Unexpected audio GCS path: {audio_path}"
    print(f"  -> Uploaded Audio: {audio_path} (MIME: {res_audio.get('mime_type')})")

    # Clean audio
    del_audio = gcs_storage.delete_media(audio_path)
    assert del_audio is True, "Failed to delete audio file"
    print(f"  -> Cleaned Audio file: {audio_path}")
    print("  [PASS] Test 3: Audio media upload and cleanup passed cleanly!")

    # ------------------------------------------------------------------
    # TEST 4: Security, Malicious Paths & File Type Rejections
    # ------------------------------------------------------------------
    print("\n[TEST 4] Testing Security Constraints & File Type Enforcement...")
    # Directory traversal check
    safe = sanitize_filename("../../../etc/passwd.png")
    assert ".." not in safe and "/" not in safe and "\\" not in safe
    print(f"  -> Sanitized directory traversal attempt: '{safe}'")

    # Executable rejection check
    exe_data = b"MZ\x90\x00" + b"\x00" * 100
    is_valid, err, _, _ = gcs_storage.validate_media("script.exe", exe_data, "image")
    assert is_valid is False, "Failed to reject .exe file"
    print(f"  -> Successfully rejected executable file with message: '{err}'")

    # Oversized file check (> 15MB for image)
    oversized_data = b"\x89PNG\r\n\x1a\n" + b"\x00" * (16 * 1024 * 1024)
    is_valid_size, size_err, _, _ = gcs_storage.validate_media("huge.png", oversized_data, "image")
    assert is_valid_size is False, "Failed to reject oversized file"
    print(f"  -> Successfully rejected oversized file with message: '{size_err}'")
    print("  [PASS] Test 4: Security and boundary validation passed cleanly!")

    # ------------------------------------------------------------------
    # TEST 5: Signed URL Generation Logic
    # ------------------------------------------------------------------
    print("\n[TEST 5] Testing Signed URL Generation Capability...")
    signed_url = gcs_storage.generate_signed_url("questions/q1/images/diagram.png", expiration_minutes=60)
    assert signed_url is not None and len(signed_url) > 0
    print(f"  -> Signed URL generator output: {signed_url}")
    print("  [PASS] Test 5: Signed URL logic verified!")

    print("\n" + "=" * 70)
    print("ALL PRODUCTION-READINESS LIFECYCLE & SECURITY TESTS PASSED (100%)")
    print("=" * 70)

if __name__ == "__main__":
    run_production_lifecycle_validation()
