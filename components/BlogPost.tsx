import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

const externalHosts = ["github.com", "pypi.org", "wa.me"];

function isExternal(href: string): boolean {
  return href.startsWith("http");
}

export default function BlogPost({ body }: { body: string }) {
  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href = "", children, ...props }) {
            if (!isExternal(href)) {
              return (
                <a className="link" href={href} {...props}>
                  {children}
                </a>
              );
            }

            const host = href.replace(/^https?:\/\//, "").split("/")[0];
            const known = externalHosts.includes(host);

            return (
              <a
                className="link"
                href={href}
                target={known ? undefined : "_blank"}
                rel={known ? undefined : "noopener noreferrer"}
                {...props}
              >
                {children}
              </a>
            );
          },
          img({ src = "", alt, ...props }) {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ""}
                loading="lazy"
                decoding="async"
                {...props}
              />
            );
          },
          pre({ children }) {
            return <CodeBlock>{children}</CodeBlock>;
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
