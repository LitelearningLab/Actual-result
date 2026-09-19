from db.models import Institute, User, AppSession, Credential, Country, InstituteCampus, InstituteDepartment, InstituteTeam, City
from sqlalchemy import or_, func

import datetime
import re
import jwt
import requests
import base64
import rsa
import threading
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization
from passlib.hash import argon2
import pandas as pd

from db.db import SQLiteDB

login_session_lock = threading.Lock()

def get_user_country_details(session, user):
    """
    Resolves country and locale information for a user.
    Checks user.country_id -> campus.country_id -> institute.country.
    """
    default_country = {
        "country_id": None,
        "country_name": "United States",
        "country_code": "US",
        "locale": "en-US",
        "currency_code": "USD"
    }
    if not user or not session:
        return default_country

    country = None

    try:
        # 1. Directly from user record
        if getattr(user, 'country_id', None):
            country = session.query(Country).filter_by(country_id=str(user.country_id)).first()

        # 2. Fallback to campus country if available
        if not country and getattr(user, 'campus_id', None):
            campus = session.query(InstituteCampus).filter_by(campus_id=str(user.campus_id)).first()
            if campus and getattr(campus, 'country_id', None):
                country = session.query(Country).filter_by(country_id=str(campus.country_id)).first()

        # 3. Fallback to institute country if available
        if not country and getattr(user, 'institute_id', None):
            inst = session.query(Institute).filter_by(institute_id=str(user.institute_id)).first()
            if inst and getattr(inst, 'country', None):
                country = session.query(Country).filter(
                    or_(
                        Country.country_name.ilike(inst.country),
                        Country.country_id == str(inst.country),
                        Country.iso2.ilike(inst.country),
                        Country.iso3.ilike(inst.country)
                    )
                ).first()

        if country:
            iso2 = (getattr(country, 'iso2', None) or "US").strip().upper()
            locale = f"en-{iso2}"
            return {
                "country_id": str(country.country_id),
                "country_name": getattr(country, 'country_name', 'United States'),
                "country_code": iso2,
                "locale": locale,
                "currency_code": getattr(country, 'currency_code', None) or "USD"
            }
    except Exception as ce:
        print(f"[Auth] Warning resolving country details: {ce}", flush=True)

    return default_country


def get_user_profile_payload(session, user):
    """
    Builds a complete, normalized profile dictionary for a User entity,
    resolving institute, department, team, campus, city, country, and locale.
    """
    default_payload = {
        'user_id': '',
        'name': '',
        'username': '',
        'email': '',
        'role': '',
        'user_role': '',
        'institute': None,
        'institute_name': None,
        'institute_short_name': None,
        'institute_id': None,
        'department': None,
        'department_name': None,
        'department_id': None,
        'team': None,
        'team_name': None,
        'team_id': None,
        'campus': None,
        'campus_name': None,
        'campus_id': None,
        'city': None,
        'city_name': None,
        'city_id': None,
        'country_id': None,
        'country_name': None,
        'country_code': None,
        'locale': None
    }
    if not user or not session:
        return default_payload

    uid_str = str(user.user_id) if getattr(user, 'user_id', None) else ''
    country_info = get_user_country_details(session, user)

    institute_name = None
    institute_short_name = None
    if getattr(user, 'institute_id', None):
        inst = session.query(Institute).filter_by(institute_id=str(user.institute_id)).first()
        if inst:
            institute_name = inst.name
            institute_short_name = inst.short_name

    department_name = None
    if getattr(user, 'department_id', None):
        dept = session.query(InstituteDepartment).filter(
            or_(InstituteDepartment.department_id == str(user.department_id), InstituteDepartment.name == str(user.department_id), InstituteDepartment.name.ilike(str(user.department_id)))
        ).first()
        if dept:
            department_name = dept.name
        else:
            department_name = str(user.department_id)

    team_name = None
    if getattr(user, 'team_id', None):
        team_rec = session.query(InstituteTeam).filter(
            or_(InstituteTeam.team_id == str(user.team_id), InstituteTeam.name == str(user.team_id), InstituteTeam.name.ilike(str(user.team_id)))
        ).first()
        if team_rec:
            team_name = team_rec.name
        else:
            team_name = str(user.team_id)

    campus_name = None
    campus_obj = None
    if getattr(user, 'campus_id', None):
        campus_obj = session.query(InstituteCampus).filter(
            or_(InstituteCampus.campus_id == str(user.campus_id), InstituteCampus.name == str(user.campus_id))
        ).first()
        if campus_obj:
            campus_name = campus_obj.name
        else:
            campus_name = str(user.campus_id)

    city_name = None
    if getattr(user, 'city_id', None):
        c_obj = session.query(City).filter(
            or_(City.city_id == str(user.city_id), City.city_name == str(user.city_id))
        ).first()
        if c_obj:
            city_name = c_obj.city_name
        else:
            city_name = str(user.city_id)
    if not city_name and campus_obj and getattr(campus_obj, 'city_name', None):
        city_name = campus_obj.city_name

    return {
        'user_id': uid_str,
        'name': getattr(user, 'full_name', '') or getattr(user, 'name', '') or getattr(user, 'user_name', ''),
        'username': getattr(user, 'user_name', '') or getattr(user, 'username', ''),
        'email': getattr(user, 'email', ''),
        'role': getattr(user, 'user_role', '') or getattr(user, 'role', ''),
        'user_role': getattr(user, 'user_role', '') or getattr(user, 'role', ''),
        'institute': institute_name,
        'institute_name': institute_name,
        'institute_short_name': institute_short_name,
        'institute_id': str(user.institute_id) if getattr(user, 'institute_id', None) else None,
        'department': department_name,
        'department_name': department_name,
        'department_id': str(user.department_id) if getattr(user, 'department_id', None) else None,
        'team': team_name,
        'team_name': team_name,
        'team_id': str(user.team_id) if getattr(user, 'team_id', None) else None,
        'campus': campus_name,
        'campus_name': campus_name,
        'campus_id': str(user.campus_id) if getattr(user, 'campus_id', None) else None,
        'city': city_name,
        'city_name': city_name,
        'city_id': str(user.city_id) if getattr(user, 'city_id', None) else None,
        'country_id': country_info.get('country_id'),
        'country_name': country_info.get('country_name'),
        'country_code': country_info.get('country_code'),
        'locale': country_info.get('locale')
    }

class JWTValidator:
    def __init__(self, jwt_secret, issuer=None, audience=None):
        self.jwt_secret = jwt_secret
        self.tenant_id = issuer
        self.audience = audience
        if issuer:
            self.issuer = f"https://sts.windows.net/{issuer}/"
        else:
            self.issuer = issuer

    # Convert query result to DataFrame with headers
    def query_result_to_dataframe(self, cursor, data):
        if data is None:
            return pd.DataFrame()
        columns = [desc[0] for desc in cursor.description]
        if isinstance(data, (list, tuple)) and not isinstance(data, dict):
            # Single row
            return pd.DataFrame([data], columns=columns)
        elif isinstance(data, dict):
            return pd.DataFrame([data])
        else:
            return pd.DataFrame()

    def generate_jwt(self, subject, expires_in_seconds=28800, additional_claims=None):
        now = datetime.datetime.utcnow()
        payload = {
            "sub": subject,
            "iat": now,
            "exp": now + datetime.timedelta(seconds=expires_in_seconds)
        }

        if self.audience:
            payload["aud"] = self.audience
        if self.issuer:
            payload["iss"] = self.issuer
        if additional_claims:
            payload.update(additional_claims)

        token = jwt.encode(payload, self.jwt_secret, algorithm="HS256")
        return token

    def get_public_keys(self):
        try:
            JWK_URL = f"https://login.microsoftonline.com/{self.tenant_id}/discovery/v2.0/keys"
            response = requests.get(JWK_URL)
            response.raise_for_status()
            return response.json()['keys']
        except requests.exceptions.RequestException as e:
            print(f"Error fetching public keys: {e}", flush=True)
            return []

    def jwk_to_pem(self, jwk):
        def base64url_decode(input):
            input += '=' * (4 - len(input) % 4)
            return base64.urlsafe_b64decode(input)

        public_key = rsa.RSAPublicNumbers(
            n=int.from_bytes(base64url_decode(jwk['n']), 'big'),
            e=int.from_bytes(base64url_decode(jwk['e']), 'big')
        ).public_key(default_backend())

        pem = public_key.public_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PublicFormat.SubjectPublicKeyInfo
        )
        return pem

    def validate_jwt(self, token, ignore_expiration=False):
        try:
            options = {}
            if not self.audience:
                options["verify_aud"] = False
            if not self.issuer:
                options["verify_iss"] = False
            if ignore_expiration:
                options["verify_exp"] = False
            if not self.jwt_secret:
                public_keys = self.get_public_keys()
                unverified_header = jwt.get_unverified_header(token)
                for key in public_keys:
                    if key["kid"] == unverified_header["kid"]:
                        self.jwt_secret = self.jwk_to_pem(key)
                        break
            decoded_token = jwt.decode(
                token,
                self.jwt_secret,
                algorithms=["HS256"],
                audience=self.audience,
                issuer=self.issuer,
                options=options
            )
            return decoded_token
        except jwt.ExpiredSignatureError:
            print("Token has expired", flush=True)
            raise
        except jwt.InvalidTokenError as e:
            print("Invalid token", flush=True)
            raise

    def token_validation(self, request):
        auth_header = request.headers.get("Authorization")
        if not auth_header and request.args.get("token"):
            auth_header = f"Bearer {request.args.get('token')}"
        if not auth_header and request.is_json:
            try:
                body_data = request.get_json(silent=True) or {}
                if body_data.get("token"):
                    auth_header = f"Bearer {body_data.get('token')}"
            except Exception:
                pass

        if auth_header is None:
            return "Authorization header is missing"

        if not re.match(r"^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$", auth_header):
            return "Invalid Authorization header format. Expected format: 'Bearer <token>'"

        try:
            token = auth_header.split(" ")[1]
            self.validate_jwt(token)
            db = SQLiteDB()
            session = db.connect()
            if not session:
                return "Database connection failed"
            try:
                active_session = session.query(AppSession).filter_by(token=token).first()
                if not active_session:
                    print(f"[Auth.token_validation] SESSION NOT FOUND token={token[:12]}...", flush=True)
                    return "Session is not active"
                print(f"[Auth.token_validation] SESSION VALID id={active_session.id} user_id={active_session.user_id} token={token[:12]}...", flush=True)
                return "Access granted"
            finally:
                session.close()
        except Exception as e:
            return str(e)

    def login(self, data):
        session = None
        try:
            if not data or not isinstance(data, dict):
                return {"statusMessage": "Invalid request payload", "status": False}, 400

            db = SQLiteDB()
            session = db.connect()
            if not session:
                return {"statusMessage": "Database connection failed", "status": False}, 500

            identifier = (data.get('identifier') or data.get('email') or data.get('username') or '').strip()
            password = data.get('password')

            if not identifier or not password:
                return {"statusMessage": "Email/username and password are required", "status": False}, 400

            clean_id = identifier.strip().lower()
            user = session.query(User).filter(
                or_(
                    func.lower(User.email) == clean_id,
                    func.lower(User.user_name) == clean_id,
                    User.email == identifier,
                    User.user_name == identifier
                )
            ).first()
            if not user:
                print(f"[Auth] User not found for identifier: {identifier}", flush=True)
                return {
                    "statusMessage": "Invalid email/username or password",
                    "status": False
                }, 401

            uid_str = str(user.user_id)
            cred = session.query(Credential).filter_by(user_id=uid_str).first()
            if not cred:
                cred = session.query(Credential).filter_by(user_id=user.user_id).first()

            password_valid = False
            if cred and cred.password_hash:
                try:
                    password_valid = argon2.verify(str(password), str(cred.password_hash))
                except Exception as ve:
                    print(f"Password verify exception: {ve}", flush=True)
                    password_valid = False

            if not cred or not password_valid:
                return {
                    "statusMessage": "Invalid email/username or password",
                    "status": False
                }, 401

            institute = None
            if user.institute_id:
                inst_id_str = str(user.institute_id)
                institute = session.query(Institute).filter_by(institute_id=inst_id_str).first()
                if not institute:
                    institute = session.query(Institute).filter_by(institute_id=user.institute_id).first()

            with login_session_lock:
                # Concurrent login enforcement (active session within 35s)
                ACTIVE_WORKING_THRESHOLD_SECONDS = 35

                uid_str_lower = uid_str.lower()
                existing_sessions = session.query(AppSession).filter(
                    func.lower(AppSession.user_id) == uid_str_lower
                ).all()

                now_utc = datetime.datetime.utcnow()
                active_working_found = False
                stale_sessions_to_delete = []

                print(f"[Auth.login] User: {user.email} (UID: {uid_str}) | Existing sessions count: {len(existing_sessions)}", flush=True)

                for s in existing_sessions:
                    last_hb = getattr(s, 'last_heartbeat', None) or getattr(s, 'created_date', None) or now_utc
                    elapsed = (now_utc - last_hb).total_seconds()
                    token_mask = (s.token[:8] + "...") if getattr(s, 'token', None) else "N/A"
                    print(f"[Auth.login] Existing Session ID={s.id} | Token={token_mask} | last_hb={last_hb} | now_utc={now_utc} | elapsed={elapsed:.2f}s", flush=True)
                    if elapsed <= ACTIVE_WORKING_THRESHOLD_SECONDS:
                        active_working_found = True
                        print(f"[Auth.login] ACTIVE WORKING SESSION DETECTED (ID={s.id}, elapsed={elapsed:.2f}s <= 35s). Login will be blocked with 409 active_session.", flush=True)
                    else:
                        stale_sessions_to_delete.append(s)

                if active_working_found:
                    print(f"[Auth.login] REJECTING LOGIN (409 active_session) for user={user.email}. Preserving existing PC session.", flush=True)
                    user_role = str(getattr(user, 'user_role', '') or getattr(user, 'role', '') or '').lower()
                    idle_mins = 30 if user_role in ['admin', 'super_admin', 'superadmin', 'super-admin'] else 15
                    return {
                        "status": False,
                        "is_locked": True,
                        "lock_type": "active_session",
                        "remaining_seconds": 0,
                        "statusMessage": f"THIS ACCOUNT IS ALREADY ACTIVE ON ANOTHER DEVICE.\n\nPlease log out from the other device before signing in here.\n\nIf a logged-in device remains inactive for {idle_mins} minutes, the application will log out automatically."
                    }, 409

                # Clear stale sessions (elapsed > 35s) immediately upon new login
                for s in stale_sessions_to_delete:
                    last_hb = getattr(s, 'last_heartbeat', None) or getattr(s, 'created_date', None) or now_utc
                    elapsed = (now_utc - last_hb).total_seconds()
                    print(f"[Auth.login] Deleting stale session ID={s.id} (elapsed={elapsed:.2f}s > 35s)", flush=True)
                    session.delete(s)
                session.commit()

                # Generate JWT token ONLY NOW after locks pass
                token = self.generate_jwt(user.email)
                if isinstance(token, bytes):
                    token = token.decode('utf-8')

                now_hb = datetime.datetime.utcnow()
                session_data = AppSession(user_id=uid_str, token=token, created_date=now_hb, last_heartbeat=now_hb)
                session.add(session_data)
                session.commit()
                print(f"[Auth.login] New session created ID={session_data.id} | Token={token[:8]}... | user={user.email}", flush=True)

            user_payload = get_user_profile_payload(session, user)

            json_data = {
                "statusMessage": "Login successful",
                "user": user_payload,
                "status": True,
                "token": token
            }

            return json_data, 200
        except Exception as e:
            import traceback
            tb = traceback.format_exc()
            print(f"Login error:\n{tb}", flush=True)
            return {"statusMessage": str(e), "status": False}, 500
        finally:
            if session:
                session.close()

    def refresh_token(self, request):
        session = None
        try:
            auth_header = request.headers.get("Authorization", "")
            if not auth_header.startswith("Bearer "):
                return {"status": False, "statusMessage": "Authorization header is missing"}, 401
            token = auth_header.split(" ", 1)[1]
            decoded = self.validate_jwt(token, ignore_expiration=True)

            db = SQLiteDB()
            session = db.connect()
            if not session:
                return {"status": False, "statusMessage": "Database connection failed"}, 500

            session_row = session.query(AppSession).filter_by(token=token).first()
            if not session_row:
                print(f"[Auth.refresh_token] Session NOT found for token={token[:8]}...", flush=True)
                return {"status": False, "statusMessage": "Session not found"}, 401

            user = session.query(User).filter_by(user_id=session_row.user_id).first()
            if not user:
                return {"status": False, "statusMessage": "User not found"}, 404
            if decoded.get('sub') != user.email:
                return {"status": False, "statusMessage": "Session user mismatch"}, 401

            new_token = self.generate_jwt(user.email)
            if isinstance(new_token, bytes):
                new_token = new_token.decode('utf-8')
            print(f"[Auth.refresh_token] Refreshing token for user={user.email} | OldToken={token[:8]}... | NewToken={new_token[:8]}...", flush=True)
            session_row.token = new_token
            session_row.expires_at = None
            session_row.last_heartbeat = datetime.datetime.utcnow()
            session.commit()

            user_payload = get_user_profile_payload(session, user)

            json_data = {
                "status": True,
                "statusMessage": "Token refreshed",
                "token": new_token,
                "user": user_payload
            }
            return json_data, 200
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
            return {"status": False, "statusMessage": str(e) or "Invalid or expired token"}, 401
        except Exception as e:
            return {"status": False, "statusMessage": str(e)}, 500
        finally:
            if session:
                session.close()

    def logout(self, request):
        session = None
        try:
            token = None
            auth_header = request.headers.get("Authorization", "")
            if auth_header.startswith("Bearer "):
                token = auth_header.split(" ", 1)[1]
            if not token and request.args.get("token"):
                token = request.args.get("token")
            if not token and request.is_json:
                try:
                    data = request.get_json(silent=True) or {}
                    token = data.get("token")
                except Exception:
                    pass

            if not token:
                return {"status": False, "message": "Authorization header or token is missing"}, 401
            self.validate_jwt(token)

            db = SQLiteDB()
            session = db.connect()
            if not session:
                return {"status": False, "message": "Database connection failed"}, 500

            session_data = session.query(AppSession).filter_by(token=token).first()
            if session_data:
                print(f"[Auth.logout] Deleting session ID={session_data.id} for user_id={session_data.user_id}", flush=True)
                session.delete(session_data)
                session.commit()
            return {"status": True, "message": "Logout successful"}, 200
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
            return {"status": False, "message": str(e) or "Invalid or expired token"}, 401
        except Exception as e:
            return {"status": False, "message": str(e)}, 500
        finally:
            if session:
                session.close()

    def heartbeat(self, request):
        session = None
        try:
            auth_header = request.headers.get("Authorization", "")
            if not auth_header.startswith("Bearer "):
                return {"status": False, "statusMessage": "Authorization header is missing"}, 401
            token = auth_header.split(" ", 1)[1]
            self.validate_jwt(token)

            db = SQLiteDB()
            session = db.connect()
            if not session:
                return {"status": False, "statusMessage": "Database connection failed"}, 500

            session_data = session.query(AppSession).filter_by(token=token).first()
            if not session_data:
                print(f"[Auth.heartbeat] Session NOT active in DB for token={token[:8]}...", flush=True)
                return {"status": False, "statusMessage": "Session is not active"}, 401

            prev_hb = session_data.last_heartbeat
            session_data.last_heartbeat = datetime.datetime.utcnow()
            session.commit()
            print(f"[Auth.heartbeat] Heartbeat updated for Session ID={session_data.id} | user_id={session_data.user_id} | prev_hb={prev_hb} | new_hb={session_data.last_heartbeat}", flush=True)
            return {"status": True, "statusMessage": "Heartbeat updated"}, 200
        except (jwt.ExpiredSignatureError, jwt.InvalidTokenError) as e:
            print(f"[Auth.heartbeat] JWT validation failed for token={token[:8] if 'token' in locals() else 'N/A'}: {e}", flush=True)
            return {"status": False, "statusMessage": str(e) or "Invalid or expired token"}, 401
        except Exception as e:
            print(f"[Auth.heartbeat] Error: {e}", flush=True)
            return {"status": False, "statusMessage": str(e)}, 500
        finally:
            if session:
                session.close()

