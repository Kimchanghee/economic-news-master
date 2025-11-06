from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config.settings import settings
from routers import admin, news

app = FastAPI(
    title="Economic News Aggregator API",
    version="1.0.0",
    description="Backend service powering the economic news dashboard",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(news.router)
app.include_router(admin.router)


@app.get("/health", tags=["system"])
async def health_check() -> dict:
    return {"status": "ok", "environment": settings.ENVIRONMENT}
