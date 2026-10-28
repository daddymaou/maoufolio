import type { Metadata } from "next";

const siteUrl = "https://maou.name.ng";
const socialImage = {
  url: "/images/just-ask-maou.jpg",
  alt: "Maou — Creative Developer",
};

// The blog keeps its own card rather than borrowing the portfolio's, so a
// shared post never renders as the site it was read from.
const blogSocialImage = {
  url: "/images/blog-og-image.jpg",
  alt: "Maou Usually Talks",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: typeof socialImage;
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = socialImage,
  publishedTime,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();
  const type = publishedTime ? "article" : "website";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: "Maou",
      title,
      description,
      url,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export function createBlogPostMetadata({
  title,
  description,
  path,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
}): Metadata {
  return createPageMetadata({
    title,
    description,
    path,
    image: blogSocialImage,
    publishedTime,
  });
}

export function getBlogSocialImage() {
  return blogSocialImage;
}
