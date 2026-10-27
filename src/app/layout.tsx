import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import GitHubContribution from '@/components/GitHubContribution';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://maou.name.ng'),
  title: {
    default: 'Maou — I build things for the web.',
    template: '%s — Maou',
  },
  description: 'Musa Usman (MaouKnowsJava) — Full-stack developer building performant, accessible web products.',

  icons: {
    icon: '/favicon.jpg',
  },
  openGraph: {
    title: 'Maou — I build things for the web.',
    description: 'Musa Usman (MaouKnowsJava) — Full-stack developer building performant, accessible web products.',
    type: 'website',
    url: 'https://maou.name.ng',
    siteName: 'Maou',
    images: [{ url: '/images/just-ask-maou.jpg', width: 1200, height: 630, alt: "Maou's header image" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maou — I build things for the web.',
    description: 'Musa Usman (MaouKnowsJava) — Full-stack developer building performant, accessible web products.',
    images: ['/images/just-ask-maou.jpg'],
    creator: '@daddymaou',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <Footer />
        <GitHubContribution />
      </body>
    </html>
  );
}
