import Link from 'next/link';
import { getBlogPostBySlug, getSortedPosts } from '../blog-posts';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentPost = getBlogPostBySlug(slug);
  const allPosts = getSortedPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const relativeTime = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00Z');
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);

    if (diffSec < 60) return `${diffSec}s ago`;
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    return `${diffDay}d ago`;
  };

  if (!currentPost) {
    return (
      <>

        <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-display">Post not found</h1>
          <Link href="/blog" className="mt-4 text-gold-600 underline">
            Back to blog
          </Link>
        </main>
      </>
    );
  }

  return (
    <>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-stone-500 hover:text-stone-700 flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All writing
          </Link>
        </div>
        <article className="prose max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-display leading-tight">{currentPost.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="text-sm font-mono text-stone-500">{currentPost.category}</span>
              <span className="text-sm text-stone-400">{relativeTime(currentPost.date)}</span>
            </div>
          </header>
          <div className="prose-stone" dangerouslySetInnerHTML={{ __html: currentPost.content }} />
        </article>
        {prevPost && (
          <div className="mt-8 flex gap-4">
            <Link
              href={"/blog/" + prevPost.slug}
              className="flex-1 text-center py-3 border rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              &lt; {prevPost.title}
            </Link>
          </div>
        )}
        {nextPost && (
          <div className="mt-8 flex gap-4">
            <Link
              href={"/blog/" + nextPost.slug}
              className="flex-1 text-center py-3 border rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
            >
              {nextPost.title} &rarr;
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
