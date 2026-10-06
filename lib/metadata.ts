import type { Metadata } from "next";

const siteUrl = "https://maou.name.ng";
const socialImage = {
  url: "/images/just-ask-maou.jpg",
  alt: "Maou — Creative Developer",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Maou",
      title,
      description,
      url,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}
