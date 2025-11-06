# Contributing to EconNews

Thank you for your interest in contributing to EconNews! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Adding New Languages](#adding-new-languages)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to support@econnews.dev.

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, versions)

Use the bug report template when creating issues.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why is this enhancement useful?
- **Proposed solution** or implementation ideas
- **Alternatives considered**

### Contributing Code

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Test your changes thoroughly
5. Commit with clear messages
6. Push to your fork
7. Submit a Pull Request

## Development Setup

### Prerequisites

- Node.js 18+
- Python 3.9+
- Git

### Backend Setup

```bash
cd backend
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\Scripts\activate
# Linux/Mac:
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment template
cp .env.example .env

# Edit .env with your configuration
# Run development server
uvicorn main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install

# Copy environment template
cp .env.local.example .env.local

# Edit .env.local with your configuration
# Run development server
npm run dev
```

### Running Tests

#### Backend Tests
```bash
cd backend
pytest
```

#### Frontend Tests
```bash
cd frontend
npm run lint
npm run type-check
```

## Coding Standards

### Python (Backend)

We follow PEP 8 with some modifications:

- **Line length**: 100 characters
- **Imports**: Group stdlib, third-party, local imports
- **Type hints**: Use type hints for function parameters and return values
- **Docstrings**: Use Google-style docstrings

```python
from typing import Optional

def fetch_news(category: str, limit: Optional[int] = 10) -> list[dict]:
    """
    Fetch news articles by category.

    Args:
        category: News category to filter by
        limit: Maximum number of articles to return

    Returns:
        List of news article dictionaries
    """
    pass
```

**Tools:**
- `black` for formatting
- `flake8` for linting
- `mypy` for type checking

Run before committing:
```bash
black .
flake8 .
mypy .
```

### TypeScript/JavaScript (Frontend)

We use TypeScript with strict mode enabled:

- **Use TypeScript** for all new files
- **Prefer functional components** with hooks
- **Use explicit types** over `any`
- **Follow Next.js conventions** for file structure

```typescript
interface NewsItem {
  id: string;
  title: string;
  summary: string;
}

export async function fetchNews(): Promise<NewsItem[]> {
  const response = await fetch('/api/news');
  return response.json();
}
```

**Tools:**
- ESLint for linting
- Prettier for formatting

Run before committing:
```bash
npm run lint
npm run format
```

### CSS/Styling

- Use **Tailwind CSS** utility classes
- Follow **mobile-first** responsive design
- Use **semantic class names** when custom CSS is needed
- Maintain **dark/light theme** consistency

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```
feat(frontend): add Korean language support

- Add ko.ts locale file
- Update language selector component
- Add Korean translations for all pages

Closes #123
```

```
fix(backend): resolve RSS feed parsing error

The feedparser was failing on feeds with malformed dates.
Added fallback date parsing logic.

Fixes #456
```

### Scope

Common scopes:
- `frontend` - Next.js frontend changes
- `backend` - FastAPI backend changes
- `api` - API endpoint changes
- `ui` - UI component changes
- `seo` - SEO-related changes
- `docs` - Documentation changes

## Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Add tests** for new features
3. **Update the README** if needed
4. **Follow the PR template** when creating your PR
5. **Link related issues** using keywords (Fixes #123, Closes #456)
6. **Request review** from maintainers
7. **Address feedback** promptly

### PR Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated and passing
- [ ] Dependent changes merged
- [ ] Commits follow commit message guidelines

### PR Title Format

Use conventional commit format:

```
feat(frontend): add search functionality
fix(api): resolve authentication bug
docs: update installation guide
```

## Adding New Languages

To add a new language to the frontend:

1. **Create locale file**: `frontend/app/[lang]/locales/xx.ts`

```typescript
import { LocaleContent } from "./types";

const xx: LocaleContent = {
  locale: "xx-XX",
  metaTitle: "EconNews — Your title in language",
  metaDescription: "Description in language",
  keywords: ["keyword1", "keyword2"],
  // ... other translations
};

export default xx;
```

2. **Update index.ts**: Add import and export

```typescript
import xx from "./xx";

const localeContent = {
  // ... existing languages
  xx,
};
```

3. **Update layout.tsx**: Add language alternate

```typescript
alternates: {
  languages: {
    // ... existing languages
    "xx-XX": `${SITE_URL}/xx`,
  },
}
```

4. **Test thoroughly**:
   - Visit `/xx` route
   - Check meta tags
   - Verify SEO elements
   - Test all translations

5. **Update documentation**:
   - Add to README.md language table
   - Update SEO_CHECKLIST.md

## Style Guide

### React Components

```typescript
// Good
export default function NewsCard({ title, summary }: NewsCardProps) {
  return (
    <article className="rounded-lg border p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{summary}</p>
    </article>
  );
}

// Avoid
export default function NewsCard(props: any) {
  return <div>
    <h2>{props.title}</h2>
    <p>{props.summary}</p>
  </div>
}
```

### API Routes

```python
# Good
@router.get("/news", response_model=list[NewsSchema])
async def get_news(
    category: Optional[str] = None,
    limit: int = Query(10, ge=1, le=100)
) -> list[NewsSchema]:
    """Get news articles with optional filtering."""
    return await news_service.get_news(category, limit)

# Avoid
@router.get("/news")
def get_news(category=None, limit=10):
    return news_service.get_news(category, limit)
```

## Testing Guidelines

### Backend Testing

```python
def test_get_news_success():
    """Test successful news retrieval."""
    response = client.get("/news?limit=5")
    assert response.status_code == 200
    assert len(response.json()) <= 5
```

### Frontend Testing

```typescript
describe('NewsCard', () => {
  it('renders news article correctly', () => {
    const news = { title: 'Test', summary: 'Summary' };
    render(<NewsCard {...news} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## Getting Help

- **GitHub Discussions**: Ask questions and share ideas
- **GitHub Issues**: Report bugs and request features
- **Email**: support@econnews.dev

## Recognition

Contributors will be recognized in:
- README.md acknowledgments
- Release notes
- Project website (coming soon)

Thank you for contributing to EconNews!
