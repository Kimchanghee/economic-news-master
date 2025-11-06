from __future__ import annotations

import hashlib
from datetime import datetime, timedelta
from typing import Any, Dict

import jwt

from config.settings import settings


class SecurityManager:
    """Helper utilities for hashing and JWT auth."""

    @staticmethod
    def _now() -> datetime:
        return datetime.utcnow()

    @staticmethod
    def hash_password(password: str) -> str:
        """Return a salted SHA256 hash."""

        salt = settings.JWT_SECRET_KEY.encode("utf-8")
        return hashlib.sha256(salt + password.encode("utf-8")).hexdigest()

    @staticmethod
    def verify_password(password: str, password_hash: str) -> bool:
        return SecurityManager.hash_password(password) == password_hash

    @staticmethod
    def create_jwt_token(admin_id: str, expires_in_hours: int = 24) -> str:
        now = SecurityManager._now()
        payload = {
            "admin_id": admin_id,
            "exp": now + timedelta(hours=expires_in_hours),
            "iat": now,
        }
        return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm="HS256")

    @staticmethod
    def verify_jwt_token(token: str) -> Dict[str, Any]:
        return jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=["HS256"])


security_manager = SecurityManager()
