import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog");

const WORDS_PER_MINUTE = 225;

export const blogCategories = [
  { key: "professional", label: "professional" },
  { key: "personal", label: "personal" },
] as const;

export type BlogCategory = (typeof blogCategories)[number]["key"];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  date: string;
  draft: boolean;
  body: string;
  wordCount: number;
  readingMinutes: number;
};

function readingStats(body: string) {
  const prose = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s{0,3}#{1,6}\s+/gm, " ")
    .replace(/^\s{0,3}>\s?/gm, " ")
    .replace(/^\s{0,3}([-*+]|\d+\.)\s+/gm, " ")
    .replace(/[*_~]/g, "");

  const wordCount = prose.split(/\s+/).filter(Boolean).length;

  return {
    wordCount,
    readingMinutes: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
  };
}

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(postsDirectory, fileName), "utf-8");
  const { data, content } = matter(source);
  const category = data.category as BlogCategory;

  if (!data.title || !data.description || !data.date) {
    throw new Error(
      `Blog post "${slug}" is missing title, description or date frontmatter.`,
    );
  }

  if (!blogCategories.some(({ key }) => key === category)) {
    throw new Error(
      `Blog post "${slug}" has an unknown category "${category}".`,
    );
  }

  const date = new Date(data.date);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    category,
    date: date.toISOString(),
    draft: data.draft === true,
    body: content,
    ...readingStats(content),
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePost)
    .filter((post) => !post.draft)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const fileName = `${slug}.md`;

  if (!fs.existsSync(path.join(postsDirectory, fileName))) {
    return undefined;
  }

  return parsePost(fileName);
}

export function getPostNeighbours(slug: string) {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) return {};

  return {
    newer: posts[index - 1],
    older: posts[index + 1],
  };
}

export function formatPostDate(value: string): string {
  return new Date(value).toLocaleDateString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function postPath(slug: string): string {
  return `/blog/${slug}`;
}
