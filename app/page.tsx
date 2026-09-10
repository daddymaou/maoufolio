import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import ScrollFadeText from "@/components/ScrollFadeText";

const roles = [
  {
    n: "01",
    title: "developer",
    items: [
      "building web apps, mobile apps & REST APIs",
      "Java, Dart/Flutter & full-stack systems",
      { label: "see the work", href: "/work" },
    ],
  },
  {
    n: "02",
    title: "focus",
    items: [
      "APIs that stay out of the way",
      "clean architecture, experimental edges",
    ],
  },
  {
    n: "03",
    title: "currently",
    items: [
      "exploring lightweight digital products",
      "open to remote collaboration",
    ],
  },
  {
    n: "04",
    title: "status",
    items: ["available for work", "based in Nigeria"],
  },
];

const skills = [
  "Frontend — React, TypeScript, Tailwind",
  "Mobile — Dart, Flutter",
  "Backend — Java, Node, Python, Django",
  "REST APIs & full-stack app development",
  "Bots, automation & AI tools",
];

const rotatingWords = [
  "code. automate. iterate.",
  "building things that feel alive.",
  "interfaces with personality.",
];

function Bullet() {
  return (
    <span
      aria-hidden
      className="mt-[7px] mr-2 inline-block h-[10px] w-[10px] shrink-0 rounded-full border border-ink/70"
    >
      <span className="block h-full w-full rounded-full bg-ink/70 scale-[0.45]" />
    </span>
  );
}

function SocialIcons() {
  return (
    <div className="flex flex-row items-center gap-5 text-ink/80">
      <a
        href="https://github.com/daddymaou"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:opacity-60 transition"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/maouknowsjava"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:opacity-60 transition"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="https://t.me/fwmaou"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="hover:opacity-60 transition"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>
      <a
        href="https://discord.gg/UyHJ5Gcj"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        className="hover:opacity-60 transition"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.635-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      </a>
    </div>
  );
}

function RoleList() {
  return (
    <>
      {roles.map((r) => (
        <div key={r.n}>
          <h2 className="text-[18px] font-medium leading-[1.2] tracking-normal mb-2">
            <span className="mr-1.5">[{r.n}]</span>
            {r.title}
          </h2>
          <ul className="space-y-1 text-[16px] font-light text-ink/80 leading-[1.2] tracking-[-0.02em]">
            {r.items.map((it, i) => (
              <li key={i} className="flex">
                <Bullet />
                {typeof it === "string" ? (
                  <span>{it}</span>
                ) : (
                  <Link
                    href={it.href}
                    className="underline underline-offset-2 hover:opacity-60 transition"
                  >
                    {it.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function SkillsList({ className }: { className?: string }) {
  return (
    <ul
      className={`text-[16px] font-light text-ink/70 border-b border-rule ${className ?? ""}`}
    >
      {skills.map((s) => (
        <li key={s} className="border-t border-rule py-1">
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section className="pt-6 pb-24">
      {/* ── MOBILE ───────────────────────── */}
      <div className="md:hidden px-6 flex flex-col gap-6">
        <h1 className="text-[clamp(2.5rem,11.5vw,64px)] font-medium tracking-[-0.2px] leading-[1.0]">
          hi! i&apos;m Maou.
        </h1>

        <div className="flex items-center justify-between">
          <SocialIcons />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-5 py-2.5 text-[15px] font-medium hover:opacity-90 transition"
          >
            view work <span aria-hidden>⇒</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[16px] font-light text-ink/70">
            <Typewriter words={rotatingWords} />
          </p>
          <div className="flex flex-col gap-4">
            <RoleList />
          </div>
        </div>

        <div className="flex gap-4 items-start mt-4">
          <SkillsList className="flex-1" />
          <div className="w-[38%] aspect-square relative">
            <Image
              src="/images/male_avatar_monochrome_no_bg.png"
              alt="Maou"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <ScrollFadeText className="text-[16px] font-light leading-[1.5] text-ink mt-8">
          i build digital experiences that combine clean design with practical
          functionality. four years in — still chasing interfaces that feel
          human and distinct. open to collaborating with people who care about
          the craft.
        </ScrollFadeText>

        <div className="-mx-6 w-screen relative aspect-[4/3] mt-4">
          <Image
            src="/images/male_desk_monochrome_no_bg.png"
            alt="Working at the desk"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ── DESKTOP ───────────────────── */}
      <div className="hidden md:block px-6 md:pl-6 md:pr-12 pt-2">
        <div className="relative grid grid-cols-10 gap-8 items-start">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[30%] w-px bg-rule"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[80%] w-px bg-rule"
          />

          {/* LEFT — sticky */}
          <aside className="col-span-3 sticky top-[calc(var(--nav-h)+2rem)] self-start flex flex-col gap-6 h-[calc(100vh-var(--nav-h)-3rem)]">
            <h1 className="text-[clamp(2.5rem,8vw,90px)] font-light tracking-[-0.2px] leading-[1.1]">
              hi!
              <br />
              i&apos;m Maou.
            </h1>
            <SocialIcons />
            <SkillsList className="mt-auto mb-12" />
          </aside>

          {/* MIDDLE — scrolls */}
          <div className="col-span-5 flex flex-col gap-10">
            <p className="text-[16px] font-light text-ink/70">
              <Typewriter words={rotatingWords} />
            </p>
            <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-x-8 gap-y-10">
              <RoleList />
            </div>
            <div className="w-full aspect-square relative max-w-md">
              <Image
                src="/images/male_avatar_monochrome_no_bg.png"
                alt="Maou"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="h-[40vh]" aria-hidden />
          </div>

          {/* RIGHT — sticky */}
          <aside className="col-span-2 sticky top-[calc(var(--nav-h)+2rem)] self-start flex flex-col items-end gap-6 h-[calc(100vh-var(--nav-h)-3rem)]">
            <div className="flex items-center gap-2 text-[16px] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>available :)</span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-[16px] font-medium hover:opacity-90 transition"
            >
              view work <span aria-hidden>→</span>
            </Link>
            <p className="text-[16px] font-light text-ink/70">☆ based in Nigeria</p>
            <a
              href="mailto:daddymaouu@gmail.com"
              className="mt-auto text-[16px] font-light text-ink/70 hover:opacity-60"
            >
              daddymaouu@gmail.com
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}