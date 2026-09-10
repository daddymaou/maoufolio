export const metadata = {
  title: "Contact — Maou",
  description:
    "Get in touch with Maou for projects, collaboration, or just to say hi.",
};

export default function ContactPage() {
  return (
    <section className="px-6 md:px-12 pt-8 pb-24 max-w-2xl">
      <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-6">
        contact
      </h1>

      <p className="text-[17px] font-light text-ink/80 leading-relaxed mb-12">
        Have a project in mind, want to collaborate, or just want to say hi?
        Drop a message — I usually reply within a day or two.
      </p>

      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">
            Email
          </p>
          <a
            href="mailto:hello@maou.name.ng"
            className="text-[18px] font-medium underline underline-offset-4 hover:opacity-60 transition"
          >
            hello@maou.name.ng
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

      <form className="mt-16 space-y-6" action="mailto:hello@maou.name.ng" method="get">
        <div>
          <label htmlFor="name" className="block text-sm mb-2 text-ink/60">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-rule bg-transparent px-4 py-3 text-[16px] focus:outline-none focus:border-ink transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-ink/60">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-rule bg-transparent px-4 py-3 text-[16px] focus:outline-none focus:border-ink transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-2 text-ink/60">
            Message
          </label>
          <textarea
            id="message"
            name="body"
            rows={5}
            required
            className="w-full border border-rule bg-transparent px-4 py-3 text-[16px] focus:outline-none focus:border-ink transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-ink text-paper px-8 py-3.5 text-[15px] font-medium hover:opacity-90 transition"
        >
          Send message
          <span aria-hidden>→</span>
        </button>
      </form>
    </section>
  );
}
