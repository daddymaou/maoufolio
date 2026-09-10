export const metadata = {
  title: "Contact — Maou",
  description:
    "Get in touch with Maou for projects, collaboration, or just to say hi.",
};

const WHATSAPP_NUMBER = "2348154899093";
const WHATSAPP_MESSAGE = "Hi Maou! I found your portfolio and wanted to reach out.";

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
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            WhatsApp
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            Message me on WhatsApp →
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            Email
          </p>
          <a
            href="mailto:daddymaouu@gmail.com"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            daddymaouu@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/maouknowsjava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            linkedin.com/in/maouknowsjava
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            Telegram
          </p>
          <a
            href="https://t.me/fwmaou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            @fwmaou
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            Discord
          </p>
          <a
            href="https://discord.gg/UyHJ5Gcj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            Join the server
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            GitHub
          </p>
          <a
            href="https://github.com/daddymaou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            github.com/daddymaou
          </a>
        </div>
      </div>
    </section>
  );
}