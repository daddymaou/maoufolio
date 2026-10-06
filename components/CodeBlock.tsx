"use client";

import {
  Children,
  isValidElement,
  useState,
  type ReactNode,
} from "react";

const languageLabels: Record<string, string> = {
  bash: "bash",
  sh: "shell",
  shell: "shell",
  html: "html",
  css: "css",
  js: "javascript",
  jsx: "jsx",
  ts: "typescript",
  tsx: "tsx",
  py: "python",
  python: "python",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
  toml: "toml",
};

function extractText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(extractText).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return extractText(node.props.children);
  }

  return "";
}

function extractLanguage(children: ReactNode): string | null {
  const child = Children.toArray(children)[0];

  if (!isValidElement<{ className?: string }>(child)) return null;

  const match = /language-([\w-]+)/.exec(child.props.className ?? "");
  if (!match) return null;

  const key = match[1].toLowerCase();
  return languageLabels[key] ?? key;
}

export default function CodeBlock({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const code = extractText(children).replace(/\n$/, "");
  const language = extractLanguage(children);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setMessage("Copied");
    } catch (error) {
      console.error("Unable to copy the code sample.", error);
      setMessage("Copy unavailable");
    }
  }

  return (
    <div className="code-block">
      <div className="code-block-head mono">
        <span className="code-block-language">{language ?? "code"}</span>
        <button
          className="code-block-copy mono"
          type="button"
          onClick={copyCode}
        >
          copy
        </button>
      </div>
      <pre className="code-block-body">
        <code>{code}</code>
      </pre>
      <span className="code-block-feedback mono" role="status" aria-live="polite">
        {message}
      </span>
    </div>
  );
}
