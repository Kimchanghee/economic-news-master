import os
from functools import lru_cache
from typing import List

from dotenv import load_dotenv

# Load variables from .env when available
load_dotenv()


class Settings:
    """Application configuration values."""

    GEMINI_API_KEY: str | None = os.getenv("GEMINI_API_KEY")
    GCP_PROJECT_ID: str | None = os.getenv("GCP_PROJECT_ID")
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "dev-key")
    ADMIN_EMAIL: str | None = os.getenv("ADMIN_EMAIL")
    ADMIN_PASSWORD: str = os.getenv("ADMIN_PASSWORD", "changeme123")
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"

    NEWS_BATCH_SIZE: int = int(os.getenv("NEWS_BATCH_SIZE", "50"))
    MAX_NEWS_PER_HOUR: int = int(os.getenv("MAX_NEWS_PER_HOUR", "100"))

    API_LANGUAGES: List[str] = [
        "en",
        "ko",
        "ja",
        "zh",
        "es",
        "fr",
        "de",
    ]


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    """Return cached Settings instance."""

    return Settings()


settings = get_settings()
