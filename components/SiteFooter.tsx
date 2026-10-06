import { contactContent } from "@/content/contact";
import { footerContent } from "@/content/footer";

export default function SiteFooter() {
  return (
    <footer className="site-footer wrap mono">
      <div className="footer-main">
        <span>© {new Date().getFullYear()} Maou</span>
        <span className="footer-tagline">{footerContent.tagline}</span>
        <a className="link footer-top" href="#top">
          {footerContent.backToTop}
        </a>
      </div>
      <div className="footer-bottom">
        <p>{footerContent.inspiration}</p>
        <nav className="footer-socials" aria-label="Social links">
          {contactContent.socials.map(
            ({ label, href }) =>
              href && (
                <a
                  className="link"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ),
          )}
        </nav>
      </div>
    </footer>
  );
}
