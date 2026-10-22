"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// Highlights the section being read on the home page, and "Work" on case studies.
export function NavLinks() {
  const path = usePathname();
  const [active, setActive] = useState<string | null>(path.startsWith("/work") ? "work" : null);

  useEffect(() => {
    if (path !== "/") {
      setActive(path.startsWith("/work") ? "work" : null);
      return;
    }
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter((s): s is HTMLElement => !!s);
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(best && best[1] > 0 ? best[0] : null);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [path]);

  return (
    <ul className="nav-pill">
      {LINKS.map((l) => (
        <li key={l.id}>
          <Link href={`/#${l.id}`} aria-current={active === l.id ? "true" : undefined}>
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
