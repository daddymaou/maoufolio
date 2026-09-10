import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Maou",
  description:
    "About Maou (Musa Usman) — creative developer based in Nigeria. Full-stack web apps, REST APIs in Java, and cross-platform mobile in Dart/Flutter.",
};

export default function AboutPage() {
  return (
    <section className="px-6 md:px-12 pt-8 pb-24 max-w-4xl">
      <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-10">
        about
      </h1>

      <div className="grid md:grid-cols-[1fr_220px] gap-10 items-start">
        <div className="space-y-6 text-[17px] font-light leading-[1.6] text-ink/90">
          <p>
            I&apos;m <strong className="font-medium">Musa Usman</strong>, better
            known as <strong className="font-medium">Maou</strong>.
          </p>
          <p>
            With four years in the field, I build across the stack — full-stack
            web apps, REST APIs in Java, and cross-platform mobile in
            Dart/Flutter. I focus on interfaces that feel human and distinct,
            steering clear of passing trends.
          </p>
          <p>
            My work lives at the intersection of programming and design
            exploration. Currently exploring experimental web interactions,
            AI-assisted tools, and lightweight digital products.
          </p>
          <p>
            I care about systems that are clean under the hood and quiet on the
            surface. Code should get out of the way so the experience can
            breathe.
          </p>
        </div>

        <div className="relative w-full aspect-square max-w-[220px]">
          <Image
            src="/images/male_avatar_monochrome_no_bg.png"
            alt="Maou — Musa Usman"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-4">
            Capabilities
          </h2>
          <ul className="space-y-2 text-[16px] font-light">
            <li>HTML, CSS & modern layout systems</li>
            <li>JavaScript / TypeScript / React</li>
            <li>Java — backend & REST APIs</li>
            <li>Dart / Flutter — cross-platform mobile</li>
            <li>Node.js, Python, Django</li>
            <li>UI/UX architecture</li>
            <li>Bots & automation tools</li>
            <li>Creative / experimental web</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-ink/40 mb-4">
            Currently
          </h2>
          <ul className="space-y-2 text-[16px] font-light">
            <li>Available for remote work</li>
            <li>Building digital products</li>
            <li>Exploring AI-assisted tools</li>
            <li>
              <Link
                href="/contact"
                className="underline underline-offset-2 hover:opacity-60"
              >
                Let&apos;s talk →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 relative w-full max-w-lg aspect-[4/3]">
        <Image
          src="/images/male_coding_monochrome_no_bg.png"
          alt="Coding setup"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}