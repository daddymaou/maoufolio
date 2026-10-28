import Link from "next/link";
import { notFoundContent } from "@/content/not-found";

export default function NotFound() {
  return (
    <section className="page-wrap not-found-page">
      <p className="mono not-found-code">{notFoundContent.code}</p>
      <h1>{notFoundContent.title}</h1>
      <p>{notFoundContent.description}</p>
      <Link className="link" href="/">
        {notFoundContent.homeLink}
      </Link>
    </section>
  );
}
