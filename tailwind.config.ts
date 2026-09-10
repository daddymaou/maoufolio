import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#ffffff",
        muted: "#7a7a7a",
        rule: "#e6e6e6",
      },
    },
  },
  plugins: [],
};

export default config;
