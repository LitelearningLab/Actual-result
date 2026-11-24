import base64
import io
import os
import traceback
from flask import g
from others.llm import openai_client

def extract_text_from_image(request):
    """
    Extracts handwritten or printed answer text from an uploaded image.
    Supports multipart form upload (file) or JSON payload with base64 image data.
    Uses OpenAI Vision API as primary provider, with pytesseract as fallback.
    """
    try:
        file_bytes = None
        mime_type = "image/jpeg"

        # 1. Check for multipart file upload
        if request.files and ("file" in request.files or "image" in request.files):
            file_obj = request.files.get("file") or request.files.get("image")
            if file_obj:
                file_bytes = file_obj.read()
                filename = getattr(file_obj, "filename", "") or ""
                if filename.lower().endswith(".png"):
                    mime_type = "image/png"
                elif filename.lower().endswith(".webp"):
                    mime_type = "image/webp"
                elif filename.lower().endswith(".gif"):
                    mime_type = "image/gif"

        # 2. Check JSON payload with base64 data
        if not file_bytes:
            data = request.get_json(silent=True) or {}
            img_b64 = data.get("image") or data.get("file") or data.get("image_base64")
            if img_b64 and isinstance(img_b64, str):
                if "," in img_b64:
                    header, img_b64 = img_b64.split(",", 1)
                    if "png" in header:
                        mime_type = "image/png"
                    elif "webp" in header:
                        mime_type = "image/webp"

                file_bytes = base64.b64decode(img_b64)

        if not file_bytes:
            return {
                "status": False,
                "statusMessage": "No valid image file or image data provided."
            }, 400

        # Primary: OpenAI Vision API
        client = openai_client()
        if client.api_key:
            try:
                base64_img = base64.b64encode(file_bytes).decode("utf-8")
                data_uri = f"data:{mime_type};base64,{base64_img}"

                system_prompt = (
                    "You are an expert Optical Character Recognition (OCR) system specializing in student assessment handwritten and printed answers. "
                    "Extract all text contained in the provided image with high precision. "
                    "Return ONLY the extracted text. Do not add markdown code fences, headers, introductory phrases, or commentary. "
                    "If the image contains no readable text, return an empty response."
                )

                user_content = [
                    {
                        "type": "text",
                        "text": "Extract all handwritten or printed answer text from this image exactly as written."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": data_uri
                        }
                    }
                ]

                # Obtain institute ID strictly from verified authenticated user
                current_user = getattr(g, "current_user", None)
                role = str(getattr(current_user, "user_role", "") or "").lower()
                is_super = role in ("super_admin", "superadmin", "super-admin")

                if is_super:
                    # Super Admins may explicitly specify institute scope or use global institute filter
                    target_inst_id = (
                        getattr(g, "global_institute_id", None)
                        or (request.form.get("institute_id") if hasattr(request, "form") else None)
                        or (request.args.get("institute_id") if hasattr(request, "args") else None)
                        or ((request.get_json(silent=True) or {}).get("institute_id") if hasattr(request, "get_json") else None)
                        or getattr(current_user, "institute_id", None)
                    )
                else:
                    # Non-superadmin users are strictly locked to their authenticated account's institute_id
                    target_inst_id = getattr(current_user, "institute_id", None) if current_user else None

                if not target_inst_id:
                    return {
                        "status": False,
                        "statusMessage": "Institute authorization required for AI processing."
                    }, 403

                user_identifier = getattr(current_user, "user_name", None) or getattr(current_user, "user_id", None)

                response = client.chat_completion(
                    system_message=system_prompt,
                    InputData=user_content,
                    aimodel=1,
                    max_tokens=2000,
                    temperature=0.1,
                    user_name=user_identifier,
                    institute_id=target_inst_id,
                    feature_name="OCR Extraction",
                    endpoint="/ocr-extract"
                )

                if response.status_code == 200:
                    resp_data = response.json()
                    choices = resp_data.get("choices", [])
                    if choices:
                        extracted_text = choices[0].get("message", {}).get("content", "").strip()
                        # Clean code fences if any were added
                        if extracted_text.startswith("```"):
                            lines = extracted_text.splitlines()
                            if lines[0].startswith("```"):
                                lines = lines[1:]
                            if lines and lines[-1].startswith("```"):
                                lines = lines[:-1]
                            extracted_text = "\n".join(lines).strip()

                        return {
                            "status": True,
                            "text": extracted_text,
                            "statusMessage": "Text extracted successfully via Vision AI."
                        }, 200
            except Exception as vision_err:
                print(f"OpenAI Vision OCR failed, falling back to Tesseract: {vision_err}")

        # Secondary Fallback: pytesseract / PIL
        try:
            from PIL import Image
            import pytesseract

            image = Image.open(io.BytesIO(file_bytes))
            extracted_text = pytesseract.image_to_string(image).strip()
            return {
                "status": True,
                "text": extracted_text,
                "statusMessage": "Text extracted successfully via Tesseract OCR."
            }, 200
        except Exception as tess_err:
            print(f"Tesseract OCR fallback failed: {tess_err}")

        return {
            "status": False,
            "statusMessage": "Failed to extract text from the provided image."
        }, 500

    except Exception as e:
        tb = traceback.format_exc()
        print(f"Error in extract_text_from_image: {e}\n{tb}")
        return {
            "status": False,
            "statusMessage": f"Server error processing image: {str(e)}"
        }, 500
