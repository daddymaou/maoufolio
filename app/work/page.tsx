import Image from "next/image";

export const metadata = {
  title: "Work — Maou",
  description:
    "Selected projects by Maou — full-stack apps, REST APIs, mobile apps, and digital products.",
};

type Project = {
  slug: string;
  title: string;
  year: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    slug: "otakubate",
    title: "OtakuBate",
    year: "2026",
    tagline: "Premium Anime Community Platform",
    description:
      "Social network for anime fans — discover series, join communities, share reactions, and connect worldwide. Community-first features, multilingual support, and a clean modern interface.",
    tags: ["Social", "Community", "Web App"],
    link: "https://otakubate.name.ng",
  },
  {
    slug: "idverify",
    title: "IDVerify",
    year: "2026",
    tagline: "Instant ID Verification Platform",
    description:
      "Full-stack identity verification using OCR, MRZ parsing, and screenshot detection. Validates passports, driver's licenses, and national IDs without storing user data. Available as npm + Python packages.",
    tags: ["OCR", "REST API", "TypeScript", "Python", "Security"],
    link: "https://idverify-app.vercel.app",
  },
  {
    slug: "dot",
    title: "Dot",
    year: "2026",
    tagline: "Minimal Link-in-Bio Platform",
    description:
      "Clean link-in-bio for creators and developers. Unlimited links, portfolio showcase, drag-to-reorder, sharp monochrome design. Node.js, Express, MongoDB, Cloudinary.",
    tags: ["SaaS", "Full-Stack", "REST API", "Link-in-Bio"],
    link: "https://dot.necros.web.id",
  },
  {
    slug: "crama",
    title: "Crama AI",
    year: "2026",
    tagline: "AI-Powered Academic Tutor Bot",
    description:
      "Telegram bot that helps Nigerian students with WAEC, JAMB, and university questions. Uses Groq LLM for text + vision answers, photo uploads, points system, and channel membership.",
    tags: ["Telegram Bot", "AI", "Education"],
    link: "https://t.me/CramaBot",
  },
  {
    slug: "verifypadi",
    title: "VerifyPadi",
    year: "2026",
    tagline: "Data Verification Platform",
    description:
      "Data verification and analytics platform with secure identity checks, reporting dashboards, and real-time validation services for businesses across Nigeria.",
    tags: ["Web App", "Java", "REST API", "Security"],
  },
  {
    slug: "fittrack",
    title: "FitTrack",
    year: "2026",
    tagline: "Gym & Fitness Tracker",
    description:
      "Workout plans, progress tracking, nutrition logs, and personalized recommendations. Mobile app built with Dart/Flutter, backed by a REST API.",
    tags: ["Health", "Flutter", "Mobile", "REST API"],
  },
];

export default function WorkPage() {
  return (
    <section className="px-6 md:px-12 pt-8 pb-24">
      <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-medium tracking-tight leading-[1.1] mb-4">
        selected work
      </h1>
      <p className="text-[16px] font-light text-ink/60 mb-14 max-w-xl">
        A mix of full-stack products, REST APIs, mobile apps, bots, and
        experimental tools. Most are live or actively maintained.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {projects.map((p) => (
          <article key={p.slug} className="group">
            <div className="relative aspect-[16/10] w-full bg-black border border-rule rounded-sm overflow-hidden mb-4">
              <Image
                src="/images/coming-soon.jpg"
                alt={`${p.title} — Coming Soon`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-[18px] font-medium">{p.title}</h2>
              <span className="text-sm text-ink/50 shrink-0">{p.year}</span>
            </div>

            <p className="text-[15px] font-medium text-ink/70 mb-2">
              {p.tagline}
            </p>

            <p className="text-[15px] font-light text-ink/70 leading-relaxed mb-3">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] uppercase tracking-wide px-2 py-0.5 border border-rule text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 hover:opacity-60 transition"
              >
                Visit project →
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <div className="relative w-full max-w-md aspect-[4/3]">
          <Image
            src="/images/male_error_pose_monochrome_no_bg.png"
            alt="Debugging life"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}