import Image from 'next/image';
import SiteNav from '@/components/SiteNav';

export default function Custom404() {
  return (
    <>
      <SiteNav />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl font-display mb-4">404</h1>
        <p className="text-stone-600 text-xl mb-8">Oops! This page doesn't exist.</p>
        <Link href="/" className="text-gold-600 underline">Go back home</Link>
      </main>
    </>
  );
}
