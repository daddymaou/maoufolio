import type {
  GitHubLanguageCount,
  GitHubPortfolioData,
  GitHubRepository,
} from "@/lib/github";

function relativeDate(value: string): string {
  const pushedAt = new Date(value).getTime();
  if (Number.isNaN(pushedAt)) return "date unavailable";

  const seconds = (pushedAt - Date.now()) / 1000;
  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const [unit, secondsPerUnit] of units) {
    if (Math.abs(seconds) >= secondsPerUnit) {
      return formatter.format(Math.round(seconds / secondsPerUnit), unit);
    }
  }

  return formatter.format(Math.round(seconds), "second");
}

function updatedLabel(value: string | null): string {
  if (!value) return "snapshot date not recorded";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "snapshot date unavailable";

  return `updated ${date.toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })}`;
}

function ContributionStat({
  contributions,
}: {
  contributions: number | null;
}) {
  return (
    <div className="github-contribution">
      <p className="github-number">
        {contributions === null ? "—" : contributions.toLocaleString("en")}
      </p>
      <p className="mono github-label">contributions · last 12 months</p>
    </div>
  );
}

function LanguageList({
  languages,
  fromSnapshot,
}: {
  languages: GitHubLanguageCount[];
  fromSnapshot: boolean;
}) {
  return (
    <div className="github-languages">
      <h3 className="mono github-label">top languages · repos</h3>
      {languages.length > 0 ? (
        <ul>
          {languages.map(({ name, count }) => (
            <li key={name}>
              <span>{name}</span>
              <span className="mono">{count}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="github-muted">
          {fromSnapshot
            ? "Language counts are not in the saved snapshot."
            : "No language data available."}
        </p>
      )}
    </div>
  );
}

function RepositoryEntry({ repo }: { repo: GitHubRepository }) {
  return (
    <li className="github-repo">
      <div className="github-repo-heading">
        <a
          className="link github-repo-name"
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name}
        </a>
        <span className="mono github-muted">{relativeDate(repo.pushedAt)}</span>
      </div>
      <p className="github-repo-description">
        {repo.description || "No description provided."}
      </p>
      <div className="mono github-repo-meta">
        <span>{repo.language || "Language not specified"}</span>
        {repo.stars > 0 && <span>{repo.stars} stars</span>}
      </div>
    </li>
  );
}

export default function GitHubActivity({
  data,
}: {
  data: GitHubPortfolioData;
}) {
  const fromSnapshot = data.source === "snapshot";
  const updated = updatedLabel(data.updatedAt);

  return (
    <section className="github-section" aria-labelledby="github-heading">
      <header className="github-section-header">
        <div>
          <p className="mono eyebrow">public activity</p>
          <h2 id="github-heading">on github</h2>
        </div>
        <p className="mono github-updated">
          {fromSnapshot ? "snapshot · " : ""}
          {updated}
        </p>
      </header>

      <div className="github-overview">
        <ContributionStat contributions={data.contributionsLast12Months} />
        <div className="github-repo-count">
          <p className="github-number">
            {data.publicRepoCount === null
              ? "—"
              : data.publicRepoCount.toLocaleString("en")}
          </p>
          <p className="mono github-label">public repositories</p>
        </div>
        <LanguageList
          languages={data.topLanguages}
          fromSnapshot={fromSnapshot}
        />
      </div>
      {fromSnapshot &&
        (data.contributionsLast12Months === null ||
          data.topLanguages.length === 0) && (
          <p className="mono github-snapshot-note">
            Live contribution and language totals appear when a GitHub token is
            configured; this view shows saved snapshot data where available.
          </p>
        )}

      <div className="github-recent">
        <h3 className="mono github-label">recently pushed</h3>
        {data.recentRepos.length > 0 ? (
          <ul className="github-repo-list">
            {data.recentRepos.map((repo) => (
              <RepositoryEntry key={repo.name} repo={repo} />
            ))}
          </ul>
        ) : (
          <p className="github-muted">
            No repository snapshot is available yet.
          </p>
        )}
      </div>
    </section>
  );
}
