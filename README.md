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

Social profile rows without a known URL are intentionally shown as “Add profile
link.” Replace the placeholder handle and set the corresponding `href` in
`content/contact.ts` when the profile is ready.

## Structure

- `app/` — routes, global styles, metadata, sitemap, and robots
- `components/` — shared navigation, footer, theme, and GitHub presentation
- `content/` — editable page content
- `data/github.snapshot.json` — committed GitHub fallback
- `lib/github.ts` — server-only GitHub GraphQL integration
- `public/favicon.jpg` — existing favicon
- `public/images/just-ask-maou.jpg` — social preview image

## Deployment

Deploy on Vercel and add `GITHUB_TOKEN` as a server-side environment variable
for the production environment. The site remains usable without it.
