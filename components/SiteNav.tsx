"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { n: "01", label: "HOME", href: "/" },
  { n: "02", label: "ABOUT", href: "/about" },
  { n: "03", label: "WORK", href: "/work" },
  { n: "04", label: "CONTACT", href: "/contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="relative z-50 px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="text-[16px] font-semibold tracking-wide">
          ᗰᗩOᑌ
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            <Link href="/about" className="hover:opacity-60 transition">
              ABOUT
            </Link>
            <Link href="/work" className="hover:opacity-60 transition">
              WORK
            </Link>
            <Link href="/contact" className="hover:opacity-60 transition">
              CONTACT
            </Link>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[5px]"
          >
            <span className="block w-5 h-px bg-ink" />
            <span className="block w-5 h-px bg-ink" />
          </button>
        </div>
      </header>

      {/* slide-down panel */}
      <div
        className={`fixed top-0 left-0 right-0 z-[200] bg-paper shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 md:px-12 py-6 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-semibold tracking-wide">ᗰᗩOᑌ</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="hover:opacity-60 transition"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map(({ n, label, href }, i) => (
              <Link
                key={n}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 group py-1"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.4s ease, transform 0.4s ease`,
                  transitionDelay: open ? `${460 + i * 110}ms` : "0ms",
                }}
              >
                <span className="text-[clamp(2.5rem,9vw,5rem)] font-medium leading-[1.1] tracking-tight text-ink/30">
                  {n}
                </span>
                <span className="text-[clamp(2.5rem,9vw,5rem)] font-medium leading-[1.1] tracking-tight group-hover:opacity-60 transition">
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-5 text-[13px] pb-2">
            <div>
              <p className="uppercase tracking-widest text-[11px] text-ink/40 mb-1">
                Location
              </p>
              <p className="font-light">Nigeria</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[11px] text-ink/40 mb-1">
                Email
              </p>
              <a
                href="mailto:hello@maou.name.ng"
                className="font-light hover:opacity-60 transition"
              >
                hello@maou.name.ng
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-[11px] text-ink/40 mb-1">
                Social
              </p>
              <div className="flex gap-5 font-light">
                <a
                  href="https://github.com/daddymaou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/fwmaou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition"
                >
                  Telegram
                </a>
                <a
                  href="https://discord.gg/UyHJ5Gcj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[199] bg-ink/20"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
