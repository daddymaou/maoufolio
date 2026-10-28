import "server-only";

import { unstable_cache } from "next/cache";
import snapshot from "@/data/github.snapshot.json";
import { githubContent } from "@/content/github";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_LOGIN = "daddymaou";
const PAGE_SIZE = 100;

export type GitHubLanguageCount = {
  name: string;
  count: number;
};

export type GitHubRepository = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  pushedAt: string;
  stars: number;
};

export type GitHubPortfolioData = {
  updatedAt: string | null;
  contributionsLast12Months: number | null;
  publicRepoCount: number | null;
  topLanguages: GitHubLanguageCount[];
  recentRepos: GitHubRepository[];
  source: "live" | "snapshot";
};

type GraphQLRepository = {
  name: string;
  url: string;
  description: string | null;
  primaryLanguage: { name: string } | null;
  pushedAt: string;
  stargazerCount: number;
  isFork: boolean;
};

type GraphQLPage = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
      };
    };
    repositories: {
      totalCount: number;
      nodes: GraphQLRepository[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
    };
  } | null;
};

type GraphQLResponse = {
  data?: GraphQLPage;
  errors?: Array<{ message: string }>;
};

const query = `
  query PortfolioGitHubData($from: DateTime!, $to: DateTime!, $after: String) {
    user(login: "${GITHUB_LOGIN}") {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
        }
      }
      repositories(
        first: ${PAGE_SIZE}
        after: $after
        privacy: PUBLIC
        orderBy: { field: PUSHED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          url
          description
          primaryLanguage {
            name
          }
          pushedAt
          stargazerCount
          isFork
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

async function requestGitHubPage(
  token: string,
  from: string,
  to: string,
  after: string | null,
) {
  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { from, to, after },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GitHub GraphQL returned ${response.status} ${response.statusText}`,
    );
  }

  const result = (await response.json()) as GraphQLResponse;
  if (result.errors?.length) {
    throw new Error(
      `GitHub GraphQL error: ${result.errors.map(({ message }) => message).join("; ")}`,
    );
  }

  const user = result.data?.user;
  if (!user) {
    throw new Error(`GitHub user "${GITHUB_LOGIN}" was not returned.`);
  }

  return user;
}

function applyRepoOverrides(repo: GraphQLRepository): GitHubRepository {
  const override = githubContent.repoOverrides[repo.name];
  return {
    name: repo.name,
    url: override?.url ?? repo.url,
    description:
      override?.description !== undefined
        ? override.description
        : repo.description,
    language:
      override?.language !== undefined
        ? override.language
        : (repo.primaryLanguage?.name ?? null),
    pushedAt: repo.pushedAt,
    stars: repo.stargazerCount,
  };
}

function filterAndOverrideRepos(
  repos: GitHubRepository[],
): GitHubRepository[] {
  const hiddenRepos = new Set(
    githubContent.hiddenRepos.map((name) => name.toLocaleLowerCase()),
  );

  return repos
    .filter((repo) => !hiddenRepos.has(repo.name.toLocaleLowerCase()))
    .map((repo) => {
      const override = githubContent.repoOverrides[repo.name];
      return {
        ...repo,
        url: override?.url ?? repo.url,
        description:
          override?.description !== undefined
            ? override.description
            : repo.description,
        language:
          override?.language !== undefined
            ? override.language
            : repo.language,
      };
    })
    .slice(0, 6);
}

async function getLiveGitHubData(token: string): Promise<GitHubPortfolioData> {
  const to = new Date();
  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);

  const firstPage = await requestGitHubPage(
    token,
    from.toISOString(),
    to.toISOString(),
    null,
  );
  const allRepos = [...firstPage.repositories.nodes];
  let pageInfo = firstPage.repositories.pageInfo;

  while (pageInfo.hasNextPage) {
    if (!pageInfo.endCursor) {
      throw new Error("GitHub pagination reported another page without a cursor.");
    }

    const page = await requestGitHubPage(
      token,
      from.toISOString(),
      to.toISOString(),
      pageInfo.endCursor,
    );
    allRepos.push(...page.repositories.nodes);
    pageInfo = page.repositories.pageInfo;
  }

  const languageCounts = new Map<string, number>();
  for (const repo of allRepos) {
    const language = repo.primaryLanguage?.name;
    if (language) {
      languageCounts.set(language, (languageCounts.get(language) ?? 0) + 1);
    }
  }

  const recentRepos = allRepos
    .filter(
      (repo) =>
        !repo.isFork &&
        !githubContent.hiddenRepos.some(
          (name) => name.toLocaleLowerCase() === repo.name.toLocaleLowerCase(),
        ),
    )
    .slice(0, 6)
    .map(applyRepoOverrides);

  return {
    updatedAt: to.toISOString(),
    contributionsLast12Months:
      firstPage.contributionsCollection.contributionCalendar.totalContributions,
    publicRepoCount: firstPage.repositories.totalCount,
    topLanguages: [...languageCounts]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
      .slice(0, 3),
    recentRepos,
    source: "live",
  };
}

export async function getGitHubPortfolioData(): Promise<GitHubPortfolioData> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {
      ...snapshot,
      recentRepos: filterAndOverrideRepos(snapshot.recentRepos),
      source: "snapshot",
    };
  }

  try {
    const getCachedLiveData = unstable_cache(
      () => getLiveGitHubData(token),
      ["github-portfolio-data-v1"],
      { revalidate: 3600 },
    );
    return await getCachedLiveData();
  } catch (error) {
    console.warn(
      "Unable to load live GitHub portfolio data; using the committed snapshot.",
      error,
    );
    return {
      ...snapshot,
      recentRepos: filterAndOverrideRepos(snapshot.recentRepos),
      source: "snapshot",
    };
  }
}
