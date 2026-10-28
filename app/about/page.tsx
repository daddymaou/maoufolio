import Link from "next/link";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "A little about Maou, a creative developer based in Nigeria.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="page-wrap text-page">
      <header className="page-intro">
        <p className="mono eyebrow">{aboutContent.eyebrow}</p>
        <h1>{aboutContent.title}</h1>
      </header>
      <div className="prose-copy">
        <p>{aboutContent.paragraph}</p>
      </div>
      <p className="text-page-link">
        <Link className="link" href="/contact">
          get in touch →
        </Link>
      </p>
    </article>
  );
}
