// Links that leave the site open in a new tab, and say so to screen readers.

export const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;

export function NewTabNote() {
  return <span className="visually-hidden"> (opens in a new tab)</span>;
}

export function ExternalIcon() {
  return (
    <svg className="ext-icon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M6 3h7v7M13 3 4 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const domainOf = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
