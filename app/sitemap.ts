import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const routes = ["", "/about", "/work", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maou.name.ng";

  const pages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
