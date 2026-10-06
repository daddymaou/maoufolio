import { contactContent } from "@/content/contact";
import { createPageMetadata } from "@/lib/metadata";
import CopyEmailButton from "@/components/CopyEmailButton";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Maou about a project, collaboration, or conversation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="page-wrap text-page">
      <header className="page-intro">
        <p className="mono eyebrow">{contactContent.eyebrow}</p>
        <h1>{contactContent.title}</h1>
        <p className="page-lede">{contactContent.introduction}</p>
      </header>

      <div className="contact-list">
        <div className="contact-row">
          <h2 className="mono">email</h2>
          <div className="contact-email">
            <a className="link" href={`mailto:${contactContent.email}`}>
              {contactContent.email}
            </a>
            <CopyEmailButton email={contactContent.email} />
          </div>
        </div>
        {contactContent.socials.map(({ label, handle, href }) => (
          <div className="contact-row" key={label}>
            <h2 className="mono">{label}</h2>
            {href ? (
              <a
                className="link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {handle}
              </a>
            ) : (
              <span className="contact-placeholder">{handle}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
