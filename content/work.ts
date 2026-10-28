export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "otakubate",
    year: "2026",
    tagline: "The ultimate anime social network.",
    description:
      "A full-featured social network for anime fans: discover and discuss trending anime, join communities, chat in real time, and build a profile. Ships Google OAuth, JWT auth with refresh tokens, a follow system, notifications, OtakuHub clubs with moderation tools, and an admin dashboard.",
    tags: ["TypeScript", "React", "Node.js", "MongoDB"],
    link: "https://www.otakubate.name.ng/",
  },
  {
    name: "wizardgram",
    year: "2026",
    tagline: "Async Telegram bot framework for Python.",
    description:
      "A typed, async Telegram bot framework with command/regex/update routing, middleware, scenes, inline and reply keyboards, webhooks, flood control, and an offline test harness. Ships a public table tracking which Bot API methods are verified.",
    tags: ["Python", "Telegram", "async", "framework"],
    link: "https://github.com/daddymaou/wizardgram",
  },
  {
    name: "ship",
    year: "2026",
    tagline: "Developer-focused static web hosting.",
    description:
      "A minimalist, developer-first static web hosting platform. Deploy static sites in seconds directly from your terminal, with automated edge routing and cloud hosting infrastructure for apps, portfolios, and digital products.",
    tags: ["DevTools", "Hosting", "CLI"],
    link: "https://github.com/daddymaou/ship",
  },
  {
    name: "notebook",
    year: "2026",
    tagline: "telegra.ph, but it feels like paper.",
    description:
      "A paper-styled publishing app with no accounts: ruled lines, a red margin, handwritten titles, and a drying-ink publish effect. Pick up a page, write, tear it off, share an 8-character link. TipTap editor, Convex backend, content sanitized on both client and server.",
    tags: ["TypeScript", "React", "TipTap", "Convex"],
    link: "https://notebook.zone.id",
  },
  {
    name: "kelpie",
    year: "2026",
    tagline: "Local-first sync engine for TypeScript applications.",
    description:
      "A local-first sync engine built to stay useful offline: durable writes against local data, a typed outbox, hybrid logical clocks, and per-table resolver policies. Ships with a self-hosted Hono + Postgres sync server, React and Svelte adapters, and a CLI.",
    tags: ["TypeScript", "local-first", "sync"],
    link: "https://github.com/daddymaou/kelpie",
  },
  {
    name: "sparts",
    year: "2026",
    tagline: "The home on the internet of a small Nigerian dev collective.",
    description:
      "Five static pages built with shared vanilla JavaScript and no build step or framework: a home desk, project cards, a lab, devlog notes, and a hang page. Ships page-to-page View Transitions, an easter-egg terminal, and NEPA mode.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://daddymaou.github.io/sparts/",
  },
];

export const workContent = {
  title: "work",
  eyebrow: "selected work",
  projects,
};
