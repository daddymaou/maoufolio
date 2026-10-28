"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "maou-theme";
const LIGHT_COLOR = "#f2f0ea";
const DARK_COLOR = "#10100f";
const COLUMN_COUNT = 10;
const STYLE_ID = "maou-ink-transition";

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    finished: Promise<void>;
  };
};

function updateTheme(theme: Theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", isDark ? DARK_COLOR : LIGHT_COLOR);

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.warn("Unable to save the theme preference.", error);
  }

  window.dispatchEvent(new Event("maou-theme-change"));
}

function installInkTransitionStyles() {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = ["dusk", "dawn"]
    .map((direction) => {
      const columns = Array.from({ length: COLUMN_COUNT }, (_, index) => {
        const order =
          direction === "dusk" ? COLUMN_COUNT - index - 1 : index;
        const delay = (order * 0.037).toFixed(3);
        const verticalPosition = direction === "dusk" ? "0%" : "100%";
        return {
          position: `calc(100% * ${index} / ${COLUMN_COUNT - 1}) ${verticalPosition}`,
          size: `calc(100% / ${COLUMN_COUNT} + 1px) calc(clamp(0, var(--shift-t) * 1.48 - ${delay}, 1) * 100%)`,
        };
      });
      const selector = `html[data-shift="${direction}"]::view-transition-new(root)`;

      return `${selector} {
        mask-image: ${columns.map(() => "linear-gradient(#000 0 0)").join(", ")};
        mask-repeat: no-repeat;
        mask-position: ${columns.map((column) => column.position).join(", ")};
        mask-size: ${columns.map((column) => column.size).join(", ")};
        animation: ink-columns 1200ms cubic-bezier(0.65, 0, 0.25, 1) both;
      }`;
    })
    .join("\n");

  document.head.append(style);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const syncTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    };

    syncTheme();
    installInkTransitionStyles();
    window.addEventListener("maou-theme-change", syncTheme);

    return () => {
      window.removeEventListener("maou-theme-change", syncTheme);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const transitionDocument = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!transitionDocument.startViewTransition || reduceMotion) {
      updateTheme(nextTheme);
      return;
    }

    root.dataset.shift = nextTheme === "dark" ? "dusk" : "dawn";
    const transition = transitionDocument.startViewTransition(() => {
      updateTheme(nextTheme);
    });
    const clearDirection = () => {
      delete root.dataset.shift;
    };

    transition.finished.then(clearDirection, clearDirection);
  }

  const isDark = theme === "dark";

  return (
    <button
      className={`theme-toggle${isDark ? " is-dark" : ""}`}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
    >
      <svg
        className="theme-glyph"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle className="theme-disc" cx="12" cy="12" r="7.25" />
        <path className="theme-split" d="M12 4.75v14.5" />
      </svg>
    </button>
  );
}
