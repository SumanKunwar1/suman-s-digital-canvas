# Suman Kunwar portfolio

The site is being rebuilt from scratch. The design rules below are binding for every design, copy and code decision. If a rule conflicts with a habit or default, the rule wins. If unsure whether something breaks a rule, assume it does and ask Suman.

@DESIGN_RULES.md

The full content brief (facts, copy, page structure, technical requirements) is in [BRIEF.md](BRIEF.md). Technical facts from the product codebases go in FACTS.md. Suman's overrides: palette is black and white only (colour comes from real screenshots); virgutech.com fixes are out of scope.

## Project

Next.js 16 static export (`out/`), plain CSS in `app/globals.css`, no UI or animation libraries. All copy lives in `content/`.

**Suman's overrides of DESIGN_RULES.md (2026-10-22), after rejecting the black-and-white version as looking cheap and like a PDF:** he wants it premium, fun and interactive, and allowed breaking rules where that helps. Current design: FullBag's brand green (#16a34a / #15803d) on warm stone neutrals, a dark hero, rounded cards, pill buttons, and the hero "workbench" (`components/Workbench.tsx`): three interactive demos of real product mechanisms with made-up data. The commit-history strip was removed at his request. Still binding: honesty rules (no invented facts or metrics), no neon, no gradients, no glassmorphism, no stock or AI imagery, no emoji icons, accessibility and performance. Never query the product databases on this machine for screenshots; they may hold real school data.

Screenshots (2026-10-22): Suman supplied ERP screens that appear to be from a real school. They were cropped to remove the school name and signed-in staff member, and the van number plates were covered. The student profile, attendance register and calendar screens were left out because they show children's details or the school's name. Accounting screens use dev data; a developer note was covered. Never publish a screen showing a person's name, contact details, date of birth or address. ERP and Accounting are described as complete products with no "My part" section (Suman's choice); only the transport app keeps one. Green (#1e6b47) is used only on the main button and the contact block. See README.md for commands.

## Live inspection

Playwright (Chromium) is installed as a dev dependency. Use it to screenshot the running dev server at desktop (1440px) and mobile (375px and 360px) widths and review the result against DESIGN_RULES.md before calling any page done.
