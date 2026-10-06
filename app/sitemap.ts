import type { MetadataRoute } from "next";

const routes = ["", "/about", "/work", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maou.name.ng";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
