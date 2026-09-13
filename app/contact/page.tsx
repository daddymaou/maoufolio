export const metadata = {
  title: "Contact — Maou",
  description:
    "Get in touch with Maou for projects, collaboration, or just to say hi.",
};

const WHATSAPP_NUMBER = "2348154899093";
const WHATSAPP_MESSAGE = "Hi Maou! I found your portfolio and wanted to reach out.";

function Icon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 18,
    height: 18,
    fill: "currentColor" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5Zm10.5 8.4L2.4 6.6v11.4h19.2V6.6L12 12.9Zm0-2.1 9.4-5.4H2.6L12 10.8Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common}>
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      );
    case "discord":
      return (
        <svg {...common}>
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.635-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common}>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

type ContactRowProps = {
  label: string;
  href: string;
  icon: string;
  children: React.ReactNode;
  external?: boolean;
};

function ContactRow({
  label,
  href,
  icon,
  children,
  external = true,
}: ContactRowProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
        {label}
      </p>
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="inline-flex items-center gap-3 text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
      >
        <Icon name={icon} />
        {children}
      </a>
    </div>
  );
}

export default function ContactPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <section className="px-6 md:px-12 pt-8 pb-24 max-w-2xl">
      <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-6">
        contact
      </h1>

      <p className="text-[17px] font-light text-ink/80 leading-relaxed mb-12">
        Have a project in mind, want to collaborate, or just want to say hi?
      </p>

      <div className="space-y-8">
        <ContactRow label="WhatsApp" href={waLink} icon="whatsapp">
          Message me on WhatsApp →
        </ContactRow>

        <ContactRow
          label="Email"
          href="mailto:daddymaouu@gmail.com"
          icon="email"
          external={false}
        >
          daddymaouu@gmail.com
        </ContactRow>

        <ContactRow
          label="LinkedIn"
          href="https://www.linkedin.com/in/maouknowsjava"
          icon="linkedin"
        >
          linkedin.com/in/maouknowsjava
        </ContactRow>

        <ContactRow label="Telegram" href="https://t.me/fwmaou" icon="telegram">
          @fwmaou
        </ContactRow>

        <ContactRow
          label="Discord"
          href="https://discord.gg/UyHJ5Gcj"
          icon="discord"
        >
          Join the server
        </ContactRow>

        <ContactRow
          label="X"
          href="https://x.com/fwmaou"
          icon="x"
        >
          @fwmaou
        </ContactRow>

        <ContactRow
          label="GitHub"
          href="https://github.com/daddymaou"
          icon="github"
        >
          github.com/daddymaou
        </ContactRow>
      </div>
    </section>
  );
}