import Link from "next/link";
import { blogContent } from "@/content/blog";
import {
  blogCategories,
  formatPostDate,
  getAllPosts,
  postPath,
  type BlogPost,
} from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Notes on what Maou is building and thinking about, from build logs to post-mortems.",
  path: "/blog",
});

function PostRow({ post }: { post: BlogPost }) {
  return (
    <li className="blog-entry">
      <Link className="blog-entry-link" href={postPath(post.slug)}>
        <div className="blog-entry-meta mono">
          <span>{formatPostDate(post.date)}</span>
          <span>
            {post.readingMinutes} {blogContent.minuteLabel}
          </span>
        </div>
        <h3 className="blog-entry-title">{post.title}</h3>
        <p className="blog-entry-description">{post.description}</p>
      </Link>
    </li>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="page-wrap text-page blog-page">
      <header className="page-intro">
        <p className="mono eyebrow">{blogContent.eyebrow}</p>
        <h1>{blogContent.title}</h1>
        <p className="page-lede">{blogContent.lede}</p>
      </header>

      {blogCategories.map(({ key, label }) => {
        const categoryPosts = posts.filter((post) => post.category === key);

        return (
          <section
            className="blog-lane"
            key={key}
            aria-labelledby={`blog-lane-${key}`}
          >
            <div className="section-heading">
              <h2 className="mono" id={`blog-lane-${key}`}>
                {label}
              </h2>
            </div>
            {categoryPosts.length > 0 ? (
              <ul className="blog-list">
                {categoryPosts.map((post) => (
                  <PostRow key={post.slug} post={post} />
                ))}
              </ul>
            ) : (
              <p className="blog-empty">{blogContent.emptyLabel}</p>
            )}
          </section>
        );
      })}

      <p className="blog-feed-link mono">
        <a className="link" href="/blog/feed.xml">
          {blogContent.feedLabel}
        </a>
      </p>
    </section>
  );
}
