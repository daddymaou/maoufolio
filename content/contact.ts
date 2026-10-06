export type ContactLink = {
  label: string;
  handle: string;
  href: string | null;
};

export const contactContent = {
  title: "contact",
  eyebrow: "say hello",
  introduction:
    "For thoughtful projects, collaboration, or a good conversation.",
  email: "daddymaouu@gmail.com",
  socials: [
    {
      label: "GitHub",
      handle: "daddymaou",
      href: "https://github.com/daddymaou",
    },
    {
      label: "LinkedIn",
      handle: "maouknowsjava",
      href: "https://www.linkedin.com/in/maouknowsjava",
    },
    { label: "Telegram", handle: "fwmaou", href: "https://t.me/fwmaou" },
    { label: "X", handle: "fwmaou", href: "https://x.com/fwmaou" },
    { label: "Dev.to", handle: "Add profile link", href: null },
    { label: "CodePen", handle: "Add profile link", href: null },
    { label: "Stack Overflow", handle: "Add profile link", href: null },
    { label: "Hashnode", handle: "Add profile link", href: null },
    { label: "LeetCode", handle: "Add profile link", href: null },
    { label: "npm", handle: "Add profile link", href: null },
  ] satisfies ContactLink[],
};
