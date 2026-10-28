"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "about", href: "/about" },
  { label: "work", href: "/work" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Maou home"
      onClick={onClick}
    >
      <span aria-hidden="true">ᗰᗩOᑌ</span>
    </Link>
  );
}

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("button.menu-close")?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!menuRef.current.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first)?.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <header className="site-header wrap" id="top">
        <Wordmark />
        <nav className="site-nav desktop-nav mono" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link className="link" href={href} key={label}>
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="mobile-controls">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-open mono"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            menu
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu-head">
          <Wordmark onClick={closeMenu} />
          <button
            className="menu-close mono"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            close
          </button>
        </div>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {links.map(({ label, href }) => (
            <Link href={href} key={label} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </nav>
        <p className="mobile-menu-note mono">Nigeria · available for work</p>
      </div>
    </>
  );
}
