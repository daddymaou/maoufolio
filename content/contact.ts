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
    { label: "CodePen", handle: "Daddy Maou", href: "https://codepen.io/daddymaou" },
    { label: "Whatsapp", handle: "Daddy Maou", href:"https://wa.me/2348154899093" },
    { label: "PyPi", handle: "Daddymaou", href: "https://pypi.org/user/daddymaou/" },
    { label: "npm", handle: "Daddymaou", href: "https://npmjs.com/daddymaou" },
  ] satisfies ContactLink[],
};
