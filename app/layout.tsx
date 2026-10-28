import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Newsreader,
  Noto_Sans_Canadian_Aboriginal,
} from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const syllabics = Noto_Sans_Canadian_Aboriginal({
  subsets: ["canadian-aboriginal"],
  variable: "--font-syllabics",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maou — Creative Developer",
    template: "%s — Maou",
  },
  description:
    "Maou is a creative developer based in Nigeria, making thoughtful digital experiences and useful products.",
  keywords: [
    "Maou",
    "Musa Usman",
    "creative developer",
    "Nigeria",
  ],
  authors: [{ name: "Maou" }],
  creator: "Maou",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maou.name.ng",
    siteName: "Maou",
    title: "Maou — Creative Developer",
    description:
      "Thoughtful digital experiences and useful products, made by Maou.",
    images: [
      {
        url: "/images/just-ask-maou.jpg",
        alt: "Maou — Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maou — Creative Developer",
    description:
      "Thoughtful digital experiences and useful products, made by Maou.",
    images: ["/images/just-ask-maou.jpg"],
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  metadataBase: new URL("https://maou.name.ng"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ibmPlexMono.variable} ${syllabics.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#f2f0ea" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              let savedTheme = null;
              try {
                savedTheme = localStorage.getItem("maou-theme");
              } catch (error) {
                console.warn("Unable to read the saved theme preference.", error);
              }
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const isDark = savedTheme === "dark" || (savedTheme !== "light" && prefersDark);
              const root = document.documentElement;
              root.classList.toggle("dark", isDark);
              const color = isDark ? "#10100f" : "#f2f0ea";
              let meta = document.querySelector('meta[name="theme-color"]');
              if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", "theme-color");
                document.head.append(meta);
              }
              meta.setAttribute("content", color);
            })();`,
          }}
        />
      </head>
      <body className="site-body">
        <a className="skip-link mono" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="site-main">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
