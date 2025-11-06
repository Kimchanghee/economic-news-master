from __future__ import annotations

from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from pydantic import BaseModel, EmailStr

from config.settings import settings
from services.news_service import news_service
from utils.security import security_manager

router = APIRouter(prefix="/admin", tags=["admin"])
http_bearer = HTTPBearer(auto_error=False)


class AdminLoginRequest(BaseModel):
    email: EmailStr
    password: str


def get_current_admin(credentials: HTTPAuthorizationCredentials | None = Depends(http_bearer)) -> Dict[str, Any]:
    if credentials is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Missing credentials")
    token = credentials.credentials
    try:
        return security_manager.verify_jwt_token(token)
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token") from exc


@router.post("/login", summary="Authenticate as admin")
async def admin_login(payload: AdminLoginRequest) -> dict:
    if settings.ADMIN_EMAIL and payload.email.lower() != settings.ADMIN_EMAIL.lower():
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    if payload.password != settings.ADMIN_PASSWORD:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = security_manager.create_jwt_token(admin_id=payload.email)
    return {"access_token": token, "token_type": "bearer"}


@router.get("/dashboard", summary="Administrative dashboard snapshot")
async def dashboard(_: Dict[str, Any] = Depends(get_current_admin)) -> dict:
    stats = await news_service.compute_stats()
    recent_logs = await news_service.fetch_logs(limit=5)
    return {
        "stats": stats,
        "recent_logs": recent_logs,
    }


@router.post("/collect", summary="Trigger news collection")
async def manual_collect(
    language: str = settings.API_LANGUAGES[0],
    admin=Depends(get_current_admin),
) -> dict:
    operator = admin.get("admin_id", "admin")
    return await news_service.collect_news(language=language, operator=operator)


@router.delete("/news/{news_id}", summary="Remove a news item")
async def remove_news(news_id: str, _: Dict[str, Any] = Depends(get_current_admin)) -> dict:
    await news_service.delete_news(news_id)
    return {"status": "deleted", "id": news_id}


@router.get("/logs", summary="Fetch recent collection logs")
async def collection_logs(_: Dict[str, Any] = Depends(get_current_admin)) -> dict:
    logs = await news_service.fetch_logs(limit=20)
    return {"items": logs, "total": len(logs)}
