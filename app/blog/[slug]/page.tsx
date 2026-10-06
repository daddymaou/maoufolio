import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogContent } from "@/content/blog";
import BlogPost from "@/components/BlogPost";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostNeighbours,
  postPath,
} from "@/lib/blog";
import { createBlogPostMetadata } from "@/lib/metadata";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return createBlogPostMetadata({
    title: post.title,
    description: post.description,
    path: postPath(post.slug),
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { newer, older } = getPostNeighbours(post.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    wordCount: post.wordCount,
    mainEntityOfPage: `https://maou.name.ng${postPath(post.slug)}`,
    image: "https://maou.name.ng/images/blog-og-image.jpg",
    author: {
      "@type": "Person",
      name: "Maou",
      url: "https://maou.name.ng",
    },
    publisher: {
      "@type": "Person",
      name: "Maou",
      url: "https://maou.name.ng",
    },
  };

  return (
    <article className="page-wrap text-page blog-post">
      <header className="page-intro">
        <p className="mono eyebrow">
          <Link className="link" href="/blog">
            {blogContent.backLabel}
          </Link>
        </p>
        <h1>{post.title}</h1>
        <p className="page-lede">{post.description}</p>
        <div className="post-meta mono">
          <span>{formatPostDate(post.date)}</span>
          <span>{post.category}</span>
          <span>
            {post.readingMinutes} {blogContent.minuteLabel}
          </span>
          <span>
            {post.wordCount.toLocaleString("en")} {blogContent.wordLabel}
          </span>
        </div>
      </header>

      <BlogPost body={post.body} />

      {(newer || older) && (
        <nav className="post-pagination" aria-label="More posts">
          {newer ? (
            <Link className="post-pagination-link" href={postPath(newer.slug)}>
              <span className="mono">{blogContent.prevLabel}</span>
              <span className="post-pagination-title">{newer.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {older && (
            <Link
              className="post-pagination-link is-older"
              href={postPath(older.slug)}
            >
              <span className="mono">{blogContent.nextLabel}</span>
              <span className="post-pagination-title">{older.title}</span>
            </Link>
          )}
        </nav>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
