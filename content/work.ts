export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [];

export const workContent = {
  title: "work",
  eyebrow: "selected work",
  projects,
};
