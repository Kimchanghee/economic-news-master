from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException, Query

from config.settings import settings
from services.news_service import CATEGORY_META, LANGUAGE_LABELS, news_service

router = APIRouter(prefix="/news", tags=["news"])


def get_service() -> type(news_service):
    return news_service


@router.get("/", summary="List news items")
async def list_news(
    category: str | None = Query(None, description="Category filter"),
    language: str | None = Query(settings.API_LANGUAGES[0], description="Language code"),
    service = Depends(get_service),
) -> dict:
    return await service.list_news(category=category, language=language)


@router.get("/{news_id}", summary="Fetch a single news item")
async def get_news(news_id: str, service = Depends(get_service)) -> dict:
    item = await service.repository.get_news(news_id)
    if not item:
        raise HTTPException(status_code=404, detail="News not found")
    return item.to_dict()


@router.post("/{news_id}/like", summary="Increment like counter")
async def like_news(news_id: str, service = Depends(get_service)) -> dict:
    return await service.like_news(news_id)


@router.post("/{news_id}/view", summary="Increment view counter")
async def view_news(news_id: str, service = Depends(get_service)) -> dict:
    return await service.view_news(news_id)


@router.get("/categories", summary="Available categories")
async def categories() -> list[dict[str, str]]:
    return [
        {"id": key, "label": meta["label"], "icon": meta["icon"]}
        for key, meta in CATEGORY_META.items()
        if key != "all"
    ]


@router.get("/languages", summary="Supported languages")
async def languages() -> list[dict[str, str]]:
    return [
        {"id": code, "label": LANGUAGE_LABELS.get(code, code)}
        for code in settings.API_LANGUAGES
    ]
