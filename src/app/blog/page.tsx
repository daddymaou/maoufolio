import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '@/components/SiteNav';
import { getSortedPosts } from './blog-posts';

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <SiteNav />
      <header className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/just-ask-maou.jpg"
          alt="Maou's header image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40" />
      </header>
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-mono text-gold-600 uppercase tracking-widest mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-display">Writing</h1>
          <p className="mt-4 text-stone-600 text-lg">
            Where I write when I have something to say.
          </p>
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={'\/blog/' + post.slug}
              className="block group"
            >
              <div className="border-b border-stone-200 pb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-mono text-stone-500 uppercase">{post.category}</span>
                  <span className="text-sm text-stone-400">{post.date}</span>
                </div>
                <h2 className="text-2xl font-display group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
