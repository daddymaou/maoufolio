export const githubContent = {
  hiddenRepos: [] as string[],
  repoOverrides: {} as Record<
    string,
    Partial<{
      description: string | null;
      language: string | null;
      url: string;
    }>
  >,
};
