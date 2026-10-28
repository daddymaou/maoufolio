import Link from "next/link";
import { homeContent } from "@/content/home";

export const metadata = {
  title: "Home",
  description:
    "Maou is a creative developer based in Nigeria, making thoughtful digital experiences and useful products.",
};

export default function HomePage() {
  return (
    <section className="page-wrap home-page">
      <header className="page-intro">
        <p className="mono eyebrow">{homeContent.eyebrow}</p>
        <h1>{homeContent.title}</h1>
        <p className="home-lede">{homeContent.lede}</p>
      </header>

      <dl className="intro-list">
        {homeContent.intro.map(({ label, lines }) => (
          <div className="intro-row" key={label}>
            <dt className="mono">{label}</dt>
            <dd>
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-heading">
          <h2 className="mono" id="skills-heading">
            {homeContent.skillsLabel}
          </h2>
        </div>
        <ul className="skills-list">
          {homeContent.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <p className="home-cta">
        <Link className="link" href="/work">
          view work →
        </Link>
      </p>
    </section>
  );
}
