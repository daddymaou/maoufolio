import { workContent } from "@/content/work";
import GitHubActivity from "@/components/GitHubActivity";
import { getGitHubPortfolioData } from "@/lib/github";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 3600;

export const metadata = createPageMetadata({
  title: "Work",
  description: "Explore Maou's creative practice and public GitHub activity.",
  path: "/work",
});

export default async function WorkPage() {
  const githubData = await getGitHubPortfolioData();

  return (
    <section className="page-wrap work-page">
      <header className="page-intro">
        <p className="mono eyebrow">{workContent.eyebrow}</p>
        <h1>{workContent.title}</h1>
      </header>

      {workContent.projects.length > 0 && (
        <ul className="project-list" aria-label="Selected projects">
          {workContent.projects.map((project) => (
            <li className="project-entry" key={project.name}>
              <article>
                <div className="project-meta mono">
                  <span>{project.year}</span>
                  <span>{project.tags.join(" · ")}</span>
                </div>
                <h2 className="project-name">{project.name}</h2>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                {project.link && (
                  <a
                    className="link project-link mono"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    visit →
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
      <GitHubActivity data={githubData} />
    </section>
  );
}
