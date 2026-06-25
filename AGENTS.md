# Repository Guidelines

## Project Overview

Personal portfolio and blog of Iván Yakimovicz (iyaki.ar). A bilingual (Spanish-primary)
static site built with [Eleventy](https://www.11ty.dev/) v3. Blog posts start as
Markdown drafts, run through a local Node.js CLI tool (`poster/`) that processes
wikilinks and abbreviations, then are committed into the Eleventy source tree for
build and deployment to GitHub Pages.

## Architecture & Data Flow

```
drafts/            poster/ (CLI)        web/ (Eleventy src)      _site/ (output)
  .md ──────────▶  post.sh → main.js ──▶ posts/<slug>/       ──▶ static site
  (no frontmatter)  ├─ wikilinker.js     _includes/              (deployed to Pages)
                    ├─ Remarkable MD     _data/
                    └─ add abbrevs       css, images, ...
                                         components/
```

**Post lifecycle:**

1. Write a draft in `drafts/` as plain Markdown (filename: `YYYYMMDD_title.md`)
2. Run `./poster/post.sh path/to/draft.md` → processes wikilinks, expands common
   abbreviations, generates HTML from a template → writes into `web/posts/<slug>/`
3. Manually edit `description` and `epigraph` in the generated HTML frontmatter
4. Commit → GitHub Actions builds with `npm run build` (Eleventy + Jampack) and
   deploys to GitHub Pages

**Build pipeline:**

- **Eleventy** reads `web/` as input directory
- **Production-tweaks plugin** (`.eleventy/production-tweaks.js`): compiles CSS
  through PostCSS (`postcss-preset-env` + `cssnano`), minifies HTML/XML, adds
  `loading=lazy` to images, injects `rel=noopener noreferrer` on external links
- **Jampack** post-processes `_site/` for further optimization (CSS reset inlining,
  asset bundling)

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `drafts/` | Raw Markdown blog drafts, no frontmatter |
| `poster/` | Node.js CLI tool to convert drafts → Eleventy-compatible posts |
| `web/` | Eleventy source input (templates, posts, assets) |
| `web/_includes/` | Liquid layouts: `default.html`, `blog.html`, `page-with-header.html` |
| `web/_data/` | Global Eleventy data: `site.json`, `env.js` |
| `web/posts/` | Processed blog posts—each post is a directory with an `.html` file |
| `web/components/` | Custom web components (vanilla JS, e.g. `ImgViewerElement.js`) |
| `web/css/` | Stylesheets (`default.css` with modern CSS features) |
| `.eleventy/` | Eleventy plugin: `production-tweaks.js` |
| `.github/workflows/` | CI/CD: build test, deploy, auto-merge deps, archive to Wayback |
| `_site/` | Build output (gitignored) |

## Development Commands

```bash
# Build site for production
npm run build

# Dev server with live reload (Eleventy --serve)
npm run serve

# Process a draft through the poster tool
./poster/post.sh drafts/20260625_mañana.md

# Check all links on the deployed site
npm run checklinks
```

All commands run from the project root. Node.js 24 required (enforced via
`.npmrc` `engine-strict=true` and `.tool-versions`).

## Code Conventions & Common Patterns

### Formatting & Style

- **ES Modules everywhere** (`"type": "module"` in both `package.json`s)
- **Tabs for indentation** (2-space width), spaces for `.md` and YAML
  (enforced via `.editorconfig`)
- **LF line endings**, UTF-8, trailing newline required
- **No closing tag auto-completion** in HTML (`html.autoClosingTags: false`)

### Liquid Templates (Eleventy)

- Layouts are nested: `page-with-header.html` → `default.html`; `blog.html` → `default.html`
- Frontmatter keys: `title`, `description`, `epigraph`, `date`, `created`, `section`,
  `noindex`, `head` (array for extra `<head>` elements), `keywords`, `tags`
- Posts use `layout: blog.html` and carry `tags: [post]`
- Post listing uses `collections.post` (Eleventy collection) with `reversed`
- `site.*` globals come from `web/_data/site.json` (`name`, `url`, `author`)
- `env.*` comes from `web/_data/env.js` (exposes `ELEVENTY_RUN_MODE`)
- Template syntax: standard Liquid with `{% liquid %}` tag blocks for complex logic
- Partials included via `{% render 'path' %}` (used for inline CSS during build)
- Sitemap: `web/sitemap.liquid` generates `sitemap.xml`
- Atom feed: `web/posts/feed.liquid` generates `/posts/feed.xml`

### CSS Conventions

- Modern CSS features used throughout:
  - CSS nesting (`& > selector`)
  - `light-dark()` color function for theme support
  - `view-transition-name` for cross-document view transitions
  - `@media (hover: hover) and (pointer: fine)` for hover-dependent styles
  - Custom properties (`--ease-out`, `--main-content-width`, color tokens)
- No CSS framework—hand-written stylesheets
- Inline `<style>` blocks in templates (compiled through PostCSS during build;
  linked via `<link>` in dev mode)
- External link indicator via `::after` pseudo-elements with inline SVGs

### JavaScript (Browser)

- Vanilla JS custom elements (e.g., `ImgViewerElement extends HTMLElement`)
- Speculation Rules API for prerendering (`<script type="speculationrules">`)
- GoatCounter for analytics
- giscus for blog comments (GitHub Discussions-backed)
- No bundler—scripts are passthrough copies

### Poster Tool Patterns

- `poster/main.js` — CLI entry, parses args, orchestrates pipeline
- `poster/article.js` — Factory functions `newMarkdownArticle()` and `newHtmlArticleFrom()`
  with getter-based property access
- `poster/wikilinker.js` — Replaces `[[keyword]]` syntax with Markdown links
- `poster/utils/markdown.js` — Uses `remarkable` parser; exposes `htmlFrom()`,
  `firstTitleFrom()`, `addCommonAbbreviations()`, `replaceWikiLinks()`
- `poster/utils/file.js` — Sync `read`/`write` with mkdirp; UTF-8 BOM handling
  (`removeUtf8Bom`, `addUtf8Bom`)
- No async/await in poster—all sync file operations
- New vs. update detection: filename starts with 8 digits = existing post;
  otherwise = new (date-prefixed)

### Naming Conventions

- Draft files: `YYYYMMDD_slug.md`
- Post directories: `web/posts/YYYYMMDD_slug/`
- Post HTML files: `web/posts/YYYYMMDD_slug/YYYYMMDD_slug.html`
- CSS classes: kebab-case (`.site-footer`, `.status-label`, `.skip-link`)
- JS identifiers: camelCase (`newMarkdownArticle`, `getFilenameWithoutExtension`)

## Important Files

| File | Role |
|------|------|
| `.eleventy.js` | Eleventy config: input dir, passthrough copies, plugins |
| `.eleventy/production-tweaks.js` | CSS pipeline, HTML/XML minification, image lazy loading, noopener injection |
| `web/_includes/default.html` | Base HTML shell: meta tags, Open Graph, theme-color, prerender, footer |
| `web/_includes/blog.html` | Blog layout: sticky sidebar, newsletter form, giscus comments, schema.org |
| `web/_includes/page-with-header.html` | Simple page layout with logo header |
| `web/_data/site.json` | Global site metadata (`name`, `url`, `author`) |
| `web/css/default.css` | Global styles: typography, colors, layout utilities, status labels |
| `web/components/ImgViewerElement.js` | Custom image viewer web component |
| `poster/templates/post.html` | Blog post HTML template with frontmatter placeholders |
| `jampack.config.js` | Post-build optimization config (inline CSS reset) |
| `dependabot.yml` | Automated dependency updates (monthly, patch) |

## Runtime/Tooling Preferences

| Requirement | Value |
|-------------|-------|
| Runtime | Node.js 24.x (strict via `engine-strict=true`) |
| Package manager | npm (lockfile committed) |
| Static site generator | Eleventy v3 (`@11ty/eleventy`) |
| Post-processor | Jampack (`@divriots/jampack`) |
| CSS toolchain | PostCSS + `postcss-preset-env` + `cssnano` |
| Markdown parser (poster) | `remarkable` |
| IDE | VS Code (config in `.vscode/`) |
| Recommended extensions | Shopify Liquid, Markdown All-in-One, Spanish spell checker |

## Testing & QA

- **No formal test framework** for this project (no test runner configured)
- **CI build verification**: `.github/workflows/test.yml` runs `npm run build`
  on push to `main` and on pull requests touching `web/`, `.eleventy*`,
  `package*.json`, or `.npmrc`
- **Deployment**: `.github/workflows/publish.yml` builds and deploys to GitHub
  Pages on `main` changes to the same paths
- **Dependency updates**: Dependabot (monthly, patches only); auto-merged up to
  minor via `automerge_dependencies.yml`
- **Link checking**: `npm run checklinks` uses `linkinator` against the live site
- **Archive**: After each deploy, `preserve.yml` archives the site to Wayback Machine
  via a custom `web-archiver` CLI
- **Manual QA**: Run `npm run serve` for local preview, then `npm run build` and
  inspect `_site/` before committing
