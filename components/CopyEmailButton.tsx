"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("Copied");
    } catch (error) {
      console.error("Unable to copy the email address.", error);
      setMessage("Copy unavailable — select the email to copy");
    }
  }

  return (
    <div className="copy-email">
      <button
        className="copy-email-button mono"
        type="button"
        onClick={copyEmail}
      >
        copy
      </button>
      <span className="copy-email-feedback mono" role="status" aria-live="polite">
        {message}
      </span>
    </div>
  );
}
