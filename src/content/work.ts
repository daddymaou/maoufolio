export type Project = {
  name: string;
  details: string;
  tags: string[];
  github: string;
  site: string;
};

export type WorkData = {
  title: string;
  eyebrow: string;
  projects: Project[];
};

export const projects: Project[] = [
  {
    name: 'otakubate',
    details:
      'The ultimate anime social network — fully responsive, performant, and built to be shared with the anime community. Features include real-time chat and communities.',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'PostgreSQL'],
    github: 'https://github.com/daddymaou/otakubate',
    site: 'https://otakubate.com',
  },
  {
    name: 'wizardgram',
    details:
      'Async Telegram bot framework for Python with command/regex/update routing, middleware, scenes, inline and reply keyboards, webhooks, and flood control.',
    tags: ['Python', 'Telegram', 'async', 'framework'],
    github: 'https://github.com/daddymaou/wizardgram',
    site: '',
  },
  {
    name: 'ship',
    details:
      'A developer-focused static web hosting platform. Deploy static sites in seconds directly from your terminal, with automated edge routing and cloud hosting.',
    tags: ['DevTools', 'Hosting', 'CLI'],
    github: 'https://github.com/daddymaou/ship',
    site: '',
  },
  {
    name: 'kelpie',
    details:
      'A local-first sync engine built to stay useful offline: durable writes against local data, a typed outbox, hybrid logical clocks, and per-table resolver policies. Ships with a self-hosted Hono + Postgres sync server, React and Svelte adapters, and a CLI.',
    tags: ['TypeScript', 'local-first', 'sync'],
    github: 'https://github.com/daddymaou/kelpie',
    site: '',
  },
  {
    name: 'sparts',
    details:
      'Five static pages built with shared vanilla JavaScript and no build step or framework: a home desk, project cards, a lab, devlog notes, and a hang page. Ships page-to-page View Transitions, an easter-egg terminal, and NEPA mode.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/daddymaou/sparts',
    site: 'https://daddymaou.github.io/sparts/',
  },
];

export const workData: WorkData = {
  title: 'work',
  eyebrow: 'selected work',
  projects,
};
