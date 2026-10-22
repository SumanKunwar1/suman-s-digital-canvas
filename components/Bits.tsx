"use client";

import { useEffect, useState } from "react";

// Local time in Rome, filled in after hydration so the static HTML never disagrees with the browser.
export function RomeTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Rome" });
    setTime(fmt());
    const t = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(t);
  }, []);
  return time ? <span className="rome-time">. Local time {time}</span> : null;
}

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
