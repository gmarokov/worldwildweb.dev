# Copilot Instructions

## Commands

```bash
yarn install       # install dependencies
yarn develop       # start dev server at http://localhost:8000
yarn build         # production build (also copies robots.txt)
yarn serve         # serve production build locally
yarn clean         # clear Gatsby cache
yarn prettier      # format all JS/TS/JSON/MDX files
```

GraphQL explorer available at `http://localhost:8000/___graphql` during development.

No test suite exists in this project.

## Architecture

This is a **Gatsby 5 personal blog/portfolio** site, deployed to Netlify. Content is authored in MDX and sourced from the `content/` directory. Styling uses Tailwind CSS with the typography plugin. Dark mode is toggled via the `class` strategy.

### Content → Page pipeline

1. `gatsby-source-filesystem` picks up MDX files from `content/blogs/`, `content/projects/`, `content/hobbies/`, and `content/pages/`.
2. `gatsby-node.js` (`onCreateNode`) generates slugs and resolves remote images (hosted on Cloudinary) into local `File` nodes using `createRemoteFileNode` — this applies to `featuredImage`, `embeddedImages`, and `logo` frontmatter fields.
3. `createPages` maps each MDX node's `frontmatter.type` to a template: `src/templates/{type}.js` (`blog`, `project`, `hobbie`, `page`).
4. MDX files with `status: draft` in frontmatter are excluded from page generation.

### Slug convention

- `type: page` → slug is the bare file path (e.g., `/about/`)
- All other types → `/{type}s/{path}` (e.g., `/blogs/2021/06/my-post/`)
- Content is nested by year/month: `content/blogs/YYYY/MM/slug.mdx`

### MDX rendering

`MdxParser` (`src/components/partials/mdx-parser.js`) wraps MDX content with an `MDXProvider` that overrides:
- `<a>` — external URLs open in `_blank`; jump links (`#`) strip the leading slash; internal links use Gatsby `<Link>`
- `<code>` — fenced code blocks go through `PrismSyntaxHighlight`; inline code renders as plain `<code>`
- `<GatsbyImage>` and `<MarkdownCtaLink>` are available as JSX components inside MDX files

MDX page files in `content/pages/` can import React components directly (e.g., `index.mdx` imports `LatestBlogs`, `LatestProjects`, etc.).

### Layout

`gatsby-browser.js` wraps every page in `PageElement` and the root in `RootElement`. The aside column (`AsideElement`) is rendered from within each template, not the layout wrapper.

### Gatsby Functions

`src/api/newsletter.js` is a Gatsby Function (serverless) endpoint. It is currently unused but kept for reference.

## Global State & Layout Wiring

`AppContext` (`src/context/app-context.js`) is the only React context. It holds a single boolean `isNavOpen` + `handleNav` toggle, used to open/close the mobile sidebar. It is provided at the root via `RootElement` → `AppProvider`, and consumed in `PageElement` (lightbox overlay) and `SidebarNav` (slide-in animation).

Dark mode is **not** managed in React state. It uses Tailwind's `class` strategy — a `dark` class on `<html>` is toggled by vanilla JS in the header. Theme-aware styles are applied through the custom CSS utility classes defined in `src/styles/global.css` (e.g. `m-btn`, `m-border`, `m-background`, `m-text`, `m-active-link`). Always use these `m-*` classes for new interactive/themed elements instead of writing inline `dark:` variants directly.

## Search

`SiteSearch` (`src/components/search/site-search.js`) is a `cmdk` Command palette rendered in the sidebar. It receives all non-draft MDX nodes (`blog | project | hobbie`) via the `useAllMdx` static query hook. The palette opens on `⌘K` (global `keydown` listener) or via the `QuickSearch` button. Individual `Command.Item` nodes are set `disabled={true}` and navigation is handled via a `Link` child + `onKeyDown` Enter handler.

The `useAllMdx` hook (`src/hooks/use-all-mdx.js`) is the canonical static query for site-wide content — reuse it rather than writing a new `useStaticQuery` when you need a list of all published content nodes.

## Hobbies Content

Hobbies are similar to blogs/projects but use different frontmatter fields:

```yaml
---
type: hobbie          # note: single 'e' — matches template filename hobbie.js
title: "..."
date: YYYY-MM-DD
status: published     # hobbies use "published" not just absence of "draft"
tags: [Tag1, Tag2]
category: Investing   # free-form category label
url: https://...      # optional external link (e.g. YouTube)
logo: https://res.cloudinary.com/...        # resolved to a File node
featuredImage: https://res.cloudinary.com/...
---
```

Note the deliberate misspelling `hobbie` (not `hobby`) — it matches the template file `src/templates/hobbie.js` and the slug prefix `/hobbies/`. Do not change this.

## Key Conventions

### Frontmatter schema

All MDX content files require a `type` field that must match an existing template name. Common fields:

```yaml
---
type: blog           # blog | project | hobbie | page
title: "..."
tags: [Tag1, Tag2]
date: YYYY-MM-DD
dateModified: YYYY-MM-DD   # optional; shown in place of date when present
author: Georgi Marokov
featuredImage: https://res.cloudinary.com/...   # resolved to a File node at build time
embeddedImages:                                  # array of Cloudinary URLs
  - https://res.cloudinary.com/...
status: draft        # omit to publish; set to "draft" to exclude from build
pinned: true         # optional
---
```

### Tailwind usage

Tailwind classes used only inside MDX content (not in component files) must be added to the `safelist` array in `tailwind.config.js` to survive purging. Custom grid column templates (`1fr-auto`, `auto-1fr`, etc.) are defined in `theme.extend.gridTemplateColumns`.

### Prettier

Config: single quotes, no trailing commas, semicolons on, print width 120, tab width 2. Formatting runs automatically on staged files via lint-staged + Husky.

### Commits

Conventional Commits enforced by commitlint. Valid types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`.

### Environment variables

Copy `.env.development` and fill in values. `URL` is used as `siteMetadata.siteUrl` during local dev. `GATSBY_*` prefixed vars are exposed to the browser.
