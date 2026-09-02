import os
import sys

backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

from flask import Flask, Request
from others.exams import get_user_exam_details

class MockRequest:
    args = {'user_id': 'cac37fab-4de6-4792-969b-96e57e3c910a'}

resp, status = get_user_exam_details(MockRequest())
print("Status:", status)
print("Response:", resp)
