# Maou

A quiet, type-led personal portfolio for Maou (Musa Usman), a creative developer
based in Nigeria. Built with Next.js App Router, TypeScript, and plain CSS.

The visual direction takes inspiration from **Abdspace Writings**: warm paper
and ink, generous serif typography, small monospace labels, and a column-based
theme reveal. The implementation, content, and identity here are original to
Maou.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub activity

The work page requests public profile and repository data server-side through
GitHub GraphQL. To enable live contribution totals and language counts:

1. Create a read-only GitHub token with access to public profile/repository
   data.
2. Copy `.env.example` to `.env.local`.
3. Set `GITHUB_TOKEN` in `.env.local`.

The token is only read on the server. Never commit `.env.local` or a real token.
Without a token, or when GitHub is unavailable, the work page uses
`data/github.snapshot.json`. GitHub data is revalidated hourly.

## Editing content

Page copy and project data are separated into one file per section:

- `content/home.ts` — home page introduction and focus
- `content/about.ts` — about page copy
- `content/contact.ts` — email and social profiles
- `content/work.ts` — curated projects; add entries to its `projects` array
- `content/github.ts` — repository exclusions and display overrides
- `content/footer.ts` — footer copy
- `content/not-found.ts` — 404 page copy
- `content/blog.ts` — blog index labels
- `content/blog/*.md` — blog posts

Social profile rows without a known URL are intentionally shown as “Add profile
link.” Replace the placeholder handle and set the corresponding `href` in
`content/contact.ts` when the profile is ready.

## Writing

Blog posts are markdown files in `content/blog/`. Each one carries frontmatter:

```yaml
---
title: "The og meta tag, done properly"
description: "Why your link previews show up blank, and the small set of tags that fixes it."
category: professional
date: 2026-09-24
draft: false
---
```

- `category` must be `professional` or `personal` — the index groups by it.
- `draft: true` keeps a post out of the index, the sitemap, and the feed.
- The filename is the URL, so `og-meta-tags.md` is served at `/blog/og-meta-tags`.

Reading time and word count are derived from the body at build time, so there is
nothing to maintain by hand. Posts ship their own social card,
`public/images/blog-og-image.jpg`, and declare `og:type="article"` with a
published time, so shared links never render as the portfolio page. The feed
lives at `/blog/feed.xml`.

## Structure

- `app/` — routes, global styles, metadata, sitemap, and robots
- `components/` — shared navigation, footer, theme, and GitHub presentation
- `content/` — editable page content
- `data/github.snapshot.json` — committed GitHub fallback
- `lib/github.ts` — server-only GitHub GraphQL integration
- `lib/blog.ts` — markdown post loading, reading time, and slug helpers
- `public/favicon.jpg` — existing favicon
- `public/images/just-ask-maou.jpg` — portfolio social preview image
- `public/images/blog-og-image.jpg` — blog social preview image

## Deployment

Deploy on Vercel and add `GITHUB_TOKEN` as a server-side environment variable
for the production environment. The site remains usable without it.
