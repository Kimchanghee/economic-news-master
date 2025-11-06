from __future__ import annotations

import asyncio
import json
import logging
import uuid
from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

import feedparser
from fastapi import HTTPException

from config.settings import settings

try:
    import google.generativeai as genai  # type: ignore
except Exception:  # pragma: no cover - optional dependency
    genai = None

try:
    from google.cloud import firestore  # type: ignore
except Exception:  # pragma: no cover - optional dependency
    firestore = None

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


CATEGORY_META: Dict[str, Dict[str, str]] = {
    "all": {"label": "전체", "icon": "🌐", "accent": "text-blue-400"},
    "stocks": {"label": "주식", "icon": "📈", "accent": "text-blue-400"},
    "crypto": {"label": "암호화폐", "icon": "🪙", "accent": "text-orange-400"},
    "economy": {"label": "경제", "icon": "💰", "accent": "text-green-400"},
    "technology": {"label": "기술", "icon": "💻", "accent": "text-purple-400"},
    "business": {"label": "기업", "icon": "🏢", "accent": "text-pink-400"},
    "forex": {"label": "환율", "icon": "💱", "accent": "text-sky-400"},
}

NEWS_SOURCES: Dict[str, List[str]] = {
    "stocks": [
        "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
        "https://www.investing.com/rss/news_25.rss",
    ],
    "crypto": [
        "https://www.coindesk.com/arc/outboundfeeds/rss/",
        "https://www.cointelegraph.com/rss",
    ],
    "economy": [
        "https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best",
        "https://feeds.bbci.co.uk/news/business/economy/rss.xml",
    ],
    "technology": [
        "https://feeds.arstechnica.com/arstechnica/technology-lab",
        "https://www.theverge.com/rss/index.xml",
    ],
    "business": [
        "https://feeds.feedburner.com/entrepreneur/latest",
        "https://www.cnbc.com/id/10001147/device/rss/rss.html",
    ],
    "forex": [
        "https://www.dailyfx.com/feeds/technical-analysis",
        "https://www.fxstreet.com/rss/news",
    ],
}

LANGUAGE_LABELS: Dict[str, str] = {
    "en": "English",
    "ko": "한국어",
    "ja": "日本語",
    "zh": "中文",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
}

DEFAULT_LANGUAGE = "en"


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


@dataclass
class NewsItem:
    id: str
    title: str
    summary: str
    link: str
    category: str
    source: str
    published_at: datetime
    language: str = DEFAULT_LANGUAGE
    image_url: Optional[str] = None
    views: int = 0
    likes: int = 0

    def to_dict(self) -> Dict[str, Any]:
        payload = asdict(self)
        payload["published_at"] = self.published_at.isoformat()
        return payload

    @staticmethod
    def from_dict(payload: Dict[str, Any]) -> "NewsItem":
        published_at_raw = payload.get("published_at")
        if isinstance(published_at_raw, str):
            published_at = datetime.fromisoformat(published_at_raw)
        elif isinstance(published_at_raw, datetime):
            published_at = published_at_raw
        else:
            published_at = _utc_now()
        return NewsItem(
            id=payload["id"],
            title=payload["title"],
            summary=payload.get("summary", ""),
            link=payload.get("link", ""),
            category=payload.get("category", "economy"),
            source=payload.get("source", ""),
            published_at=published_at,
            language=payload.get("language", DEFAULT_LANGUAGE),
            image_url=payload.get("image_url"),
            views=int(payload.get("views", 0)),
            likes=int(payload.get("likes", 0)),
        )


@dataclass
class CollectionLog:
    id: str
    executed_at: datetime
    total_collected: int
    language: str
    operator: str = "system"
    notes: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        record = asdict(self)
        record["executed_at"] = self.executed_at.isoformat()
        return record

    @staticmethod
    def from_dict(payload: Dict[str, Any]) -> "CollectionLog":
        executed_raw = payload.get("executed_at")
        if isinstance(executed_raw, str):
            executed_at = datetime.fromisoformat(executed_raw)
        else:
            executed_at = executed_raw or _utc_now()
        return CollectionLog(
            id=payload.get("id", str(uuid.uuid4())),
            executed_at=executed_at,
            total_collected=int(payload.get("total_collected", 0)),
            language=payload.get("language", DEFAULT_LANGUAGE),
            operator=payload.get("operator", "system"),
            notes=payload.get("notes"),
        )


class NewsRepository:
    """Persist news to Firestore when available, otherwise to a local JSON file."""

    def __init__(self) -> None:
        self._use_firestore = False
        self._firestore_client: Any = None
        self._news_collection: Any = None
        self._logs_collection: Any = None

        data_dir = Path(__file__).resolve().parent.parent / "data"
        data_dir.mkdir(exist_ok=True, parents=True)
        self._news_path = data_dir / "news_store.json"
        self._logs_path = data_dir / "collection_logs.json"

        self._news_cache: Dict[str, NewsItem] = {}
        self._logs_cache: List[CollectionLog] = []

        if settings.GCP_PROJECT_ID and firestore:
            try:
                self._firestore_client = firestore.Client(project=settings.GCP_PROJECT_ID)
                self._news_collection = self._firestore_client.collection("economic_news")
                self._logs_collection = self._firestore_client.collection("economic_news_logs")
                self._use_firestore = True
                logger.info("Using Firestore backend for news storage")
            except Exception as exc:  # pragma: no cover - Firestore optional
                logger.warning("Firestore disabled: %s", exc)

        if not self._use_firestore:
            self._load_local()
            logger.info("Using local JSON backend for news storage")

    # ---------- Local storage helpers ----------
    def _load_local(self) -> None:
        if self._news_path.exists():
            try:
                with self._news_path.open("r", encoding="utf-8") as stream:
                    raw_news = json.load(stream)
                self._news_cache = {
                    item["id"]: NewsItem.from_dict(item) for item in raw_news
                }
            except Exception as exc:
                logger.error("Failed loading news cache: %s", exc)
        if self._logs_path.exists():
            try:
                with self._logs_path.open("r", encoding="utf-8") as stream:
                    raw_logs = json.load(stream)
                self._logs_cache = [CollectionLog.from_dict(item) for item in raw_logs]
            except Exception as exc:
                logger.error("Failed loading log cache: %s", exc)

    def _flush_local(self) -> None:
        with self._news_path.open("w", encoding="utf-8") as stream:
            json.dump([item.to_dict() for item in self._news_cache.values()], stream, ensure_ascii=False, indent=2)
        with self._logs_path.open("w", encoding="utf-8") as stream:
            json.dump([log.to_dict() for log in self._logs_cache], stream, ensure_ascii=False, indent=2)

    # ---------- Public async API ----------
    async def list_news(self, *, category: Optional[str] = None, language: Optional[str] = None) -> List[NewsItem]:
        return await asyncio.to_thread(self._list_news_sync, category, language)

    def _list_news_sync(self, category: Optional[str], language: Optional[str]) -> List[NewsItem]:
        if self._use_firestore:
            news_iter = self._news_collection.stream()
            records = [NewsItem.from_dict({"id": doc.id, **doc.to_dict()}) for doc in news_iter]
        else:
            records = list(self._news_cache.values())

        filtered = []
        for item in records:
            if category and category != "all" and item.category != category:
                continue
            if language and item.language != language:
                continue
            filtered.append(item)

        filtered.sort(key=lambda x: x.published_at, reverse=True)
        return filtered

    async def get_news(self, news_id: str) -> Optional[NewsItem]:
        return await asyncio.to_thread(self._get_news_sync, news_id)

    def _get_news_sync(self, news_id: str) -> Optional[NewsItem]:
        if self._use_firestore:
            doc = self._news_collection.document(news_id).get()
            if not doc.exists:
                return None
            return NewsItem.from_dict({"id": doc.id, **doc.to_dict()})
        return self._news_cache.get(news_id)

    async def save_news(self, item: NewsItem) -> None:
        await asyncio.to_thread(self._save_news_sync, item)

    def _save_news_sync(self, item: NewsItem) -> None:
        if self._use_firestore:
            data = item.to_dict()
            self._news_collection.document(item.id).set(data)
        else:
            self._news_cache[item.id] = item
            self._flush_local()

    async def bulk_upsert(self, items: Iterable[NewsItem]) -> int:
        return await asyncio.to_thread(self._bulk_upsert_sync, list(items))

    def _bulk_upsert_sync(self, items: List[NewsItem]) -> int:
        stored = 0
        if self._use_firestore:
            batch = self._firestore_client.batch()
            for item in items:
                doc_ref = self._news_collection.document(item.id)
                batch.set(doc_ref, item.to_dict())
                stored += 1
            batch.commit()
        else:
            for item in items:
                self._news_cache[item.id] = item
                stored += 1
            self._flush_local()
        return stored

    async def delete_news(self, news_id: str) -> None:
        await asyncio.to_thread(self._delete_news_sync, news_id)

    def _delete_news_sync(self, news_id: str) -> None:
        if self._use_firestore:
            self._news_collection.document(news_id).delete()
        else:
            if news_id in self._news_cache:
                del self._news_cache[news_id]
                self._flush_local()

    async def increment_counter(self, news_id: str, field: str) -> None:
        await asyncio.to_thread(self._increment_counter_sync, news_id, field)

    def _increment_counter_sync(self, news_id: str, field: str) -> None:
        if field not in {"views", "likes"}:
            raise ValueError("Invalid counter field")
        if self._use_firestore:
            self._news_collection.document(news_id).update({field: firestore.Increment(1)})
        else:
            item = self._news_cache.get(news_id)
            if item:
                setattr(item, field, getattr(item, field) + 1)
                self._flush_local()

    async def log_collection(self, log: CollectionLog) -> None:
        await asyncio.to_thread(self._log_collection_sync, log)

    def _log_collection_sync(self, log: CollectionLog) -> None:
        if self._use_firestore:
            self._logs_collection.document(log.id).set(log.to_dict())
        else:
            self._logs_cache.append(log)
            self._flush_local()

    async def list_logs(self, limit: int = 20) -> List[CollectionLog]:
        return await asyncio.to_thread(self._list_logs_sync, limit)

    def _list_logs_sync(self, limit: int) -> List[CollectionLog]:
        if self._use_firestore:
            query = self._logs_collection.order_by("executed_at", direction=firestore.Query.DESCENDING).limit(limit)
            return [CollectionLog.from_dict({"id": doc.id, **doc.to_dict()}) for doc in query.stream()]
        return sorted(self._logs_cache, key=lambda log: log.executed_at, reverse=True)[:limit]


class NewsSummarizer:
    def __init__(self) -> None:
        self._enabled = bool(settings.GEMINI_API_KEY and genai)
        self._model = None
        if self._enabled:
            try:  # pragma: no cover - external dependency
                genai.configure(api_key=settings.GEMINI_API_KEY)
                self._model = genai.GenerativeModel("gemini-pro")
            except Exception as exc:
                logger.warning("Gemini summarizer disabled: %s", exc)
                self._enabled = False

    async def summarize(self, title: str, description: str) -> str:
        clean_desc = (description or "").strip()
        if not clean_desc:
            return title
        if not self._enabled or not self._model:
            return clean_desc[:320]
        prompt = (
            "다음 경제 관련 뉴스의 핵심을 한국어 두 문장으로 요약해 주세요.\n"
            f"제목: {title}\n"
            f"내용: {clean_desc}"
        )
        try:  # pragma: no cover - depends on external API
            response = await asyncio.to_thread(self._model.generate_content, prompt)
            text = response.text.strip()
            return text[:400]
        except Exception as exc:
            logger.error("Summarization failed: %s", exc)
            return clean_desc[:320]


class NewsCollector:
    def __init__(self, summarizer: Optional[NewsSummarizer] = None) -> None:
        self.summarizer = summarizer or NewsSummarizer()

    async def collect(self, *, language: str = DEFAULT_LANGUAGE, batch_size: int = 6) -> List[NewsItem]:
        tasks = [self._load_category(category, feeds, language, batch_size) for category, feeds in NEWS_SOURCES.items()]
        results = await asyncio.gather(*tasks)
        news: List[NewsItem] = []
        for chunk in results:
            news.extend(chunk)
        return news

    async def _load_category(self, category: str, feeds: List[str], language: str, batch_size: int) -> List[NewsItem]:
        items: List[NewsItem] = []
        for feed_url in feeds:
            try:
                parsed = await asyncio.to_thread(feedparser.parse, feed_url)
            except Exception as exc:
                logger.warning("Feed parse error for %s: %s", feed_url, exc)
                continue

            for entry in parsed.entries[:batch_size]:
                title = getattr(entry, "title", "Untitled")
                summary = getattr(entry, "summary", getattr(entry, "description", ""))
                link = getattr(entry, "link", "")
                source = parsed.feed.get("title", "Unknown Source") if getattr(parsed, "feed", None) else "Unknown"
                published = self._resolve_datetime(entry)
                image = self._extract_image(entry)
                news_id = str(uuid.uuid5(uuid.NAMESPACE_URL, link or title))
                condensed = await self.summarizer.summarize(title, summary)
                items.append(
                    NewsItem(
                        id=news_id,
                        title=title,
                        summary=condensed,
                        link=link,
                        category=category,
                        source=source,
                        published_at=published,
                        language=language,
                        image_url=image,
                    )
                )
        return items

    @staticmethod
    def _resolve_datetime(entry: Any) -> datetime:
        if hasattr(entry, "published_parsed") and entry.published_parsed:
            return datetime(*entry.published_parsed[:6], tzinfo=timezone.utc)
        if hasattr(entry, "updated_parsed") and entry.updated_parsed:
            return datetime(*entry.updated_parsed[:6], tzinfo=timezone.utc)
        return _utc_now()

    @staticmethod
    def _extract_image(entry: Any) -> Optional[str]:
        media_content = getattr(entry, "media_content", [])
        if media_content and isinstance(media_content, list):
            url = media_content[0].get("url")
            if url:
                return url
        media_thumbnail = getattr(entry, "media_thumbnail", [])
        if media_thumbnail and isinstance(media_thumbnail, list):
            url = media_thumbnail[0].get("url")
            if url:
                return url
        if hasattr(entry, "links"):
            for link in entry.links:  # type: ignore[attr-defined]
                if link.get("rel") == "enclosure" and link.get("type", "").startswith("image"):
                    return link.get("href")
        return None


class NewsService:
    def __init__(self) -> None:
        self.repository = NewsRepository()
        self.collector = NewsCollector()

    async def list_news(self, *, category: Optional[str] = None, language: Optional[str] = None) -> Dict[str, Any]:
        language = language or DEFAULT_LANGUAGE
        if language not in LANGUAGE_LABELS:
            language = DEFAULT_LANGUAGE
        records = await self.repository.list_news(category=category, language=language)
        mapped = [item.to_dict() for item in records]
        return {
            "items": mapped,
            "total": len(mapped),
            "language": language,
        }

    async def like_news(self, news_id: str) -> Dict[str, Any]:
        item = await self.repository.get_news(news_id)
        if not item:
            raise HTTPException(status_code=404, detail="News not found")
        await self.repository.increment_counter(news_id, "likes")
        updated = await self.repository.get_news(news_id)
        return {
            "id": news_id,
            "likes": updated.likes if updated else item.likes + 1,
        }

    async def view_news(self, news_id: str) -> Dict[str, Any]:
        item = await self.repository.get_news(news_id)
        if not item:
            raise HTTPException(status_code=404, detail="News not found")
        await self.repository.increment_counter(news_id, "views")
        updated = await self.repository.get_news(news_id)
        return {
            "id": news_id,
            "views": updated.views if updated else item.views + 1,
        }

    async def collect_news(self, *, language: str, operator: str = "system") -> Dict[str, Any]:
        batch = await self.collector.collect(language=language, batch_size=3)
        stored = await self.repository.bulk_upsert(batch)
        log = CollectionLog(
            id=str(uuid.uuid4()),
            executed_at=_utc_now(),
            total_collected=stored,
            language=language,
            operator=operator,
        )
        await self.repository.log_collection(log)
        stats = await self.compute_stats()
        return {
            "stored": stored,
            "language": language,
            "stats": stats,
        }

    async def delete_news(self, news_id: str) -> None:
        await self.repository.delete_news(news_id)

    async def compute_stats(self) -> Dict[str, Any]:
        records = await self.repository.list_news()
        total = len(records)
        by_category: Dict[str, int] = {key: 0 for key in CATEGORY_META if key != "all"}
        for item in records:
            by_category[item.category] = by_category.get(item.category, 0) + 1
        latest = records[0].published_at.isoformat() if records else None
        return {
            "total": total,
            "categories": by_category,
            "latest_published_at": latest,
        }

    async def fetch_logs(self, limit: int = 10) -> List[Dict[str, Any]]:
        logs = await self.repository.list_logs(limit)
        return [log.to_dict() for log in logs]


news_service = NewsService()
