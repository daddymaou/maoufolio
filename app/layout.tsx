import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maou — Creative Developer",
  description:
    "ᗰᗩOᑌ · Full-stack developer & creative technologist. Building digital experiences at the intersection of code and design. Based in Nigeria.",
  keywords: [
    "Maou",
    "Musa Usman",
    "full-stack developer",
    "creative developer",
    "Nigeria",
    "web development",
    "UI/UX",
  ],
  authors: [{ name: "Maou" }],
  creator: "Maou",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maou.name.ng",
    siteName: "Maou",
    title: "Maou — Creative Developer",
    description:
      "ᗰᗩOᑌ · Full-stack developer & creative technologist. Building digital experiences at the intersection of code and design.",
    images: [
      {
        url: "/favicon.jpg",
        width: 800,
        height: 800,
        alt: "Maou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maou — Creative Developer",
    description:
      "ᗰᗩOᑌ · Full-stack developer & creative technologist. Based in Nigeria.",
    images: ["/favicon.jpg"],
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
      className={inter.variable}
      style={{ ["--nav-h" as string]: "4.5rem" }}
    >
      <body className="font-sans text-ink bg-paper min-h-screen flex flex-col">
        <SmoothScroll />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
