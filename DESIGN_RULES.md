# Design Rules: Suman Kunwar Portfolio

These rules apply to every design and code decision on this website. Read them fully before planning or writing anything. If a rule conflicts with a habit or a default, the rule wins. If you're unsure whether something breaks a rule, assume it does and ask.

## The goal

This site must look like a thoughtful human designer made it for one specific person, not like it came out of a template or an AI tool. Its audience is hiring managers and tech leads in Italy and Europe who will spend 30–60 seconds deciding whether Suman is a real engineer who ships real software. Every choice should help them reach "yes" faster.

The site's personality comes from its real content: software used every day by schools and businesses in Nepal, a real-time tracking app built solo, and a developer moving to Rome for his master's. Design choices should come from that story, not from trends.

---

## 1. Banned: the "AI-generated website" look

Do not use any of the following. No exceptions unless Suman explicitly asks for one.

### Color
- No neon colors: no electric purple, cyan, magenta, acid green, hot pink.
- No purple-to-blue, pink-to-orange, or any other decorative gradients. No gradient text. No gradient buttons. No gradient borders.
- No glowing effects: no colored box-shadows, no "glow" around buttons, cards or text.
- No glassmorphism: no frosted glass panels, no `backdrop-filter: blur` cards.
- No mesh gradients, aurora backgrounds, noise blobs, or blurred color orbs floating behind content.
- None of these overused AI palettes:
  - warm cream background with a terracotta or clay accent
  - near-black background with a single acid-green or bright red accent
  - dark background with gold accent (the current site's look; replace it)
- No color used purely as decoration. Every color has a job: text, background, link, status, or one deliberate accent.

### Icons and imagery
- No emoji used as icons (🚀 ⚡ 🎨 ☁️ 🐍 💡 etc.). None, anywhere.
- No "AI" icons: sparkles, magic wands, robot heads, brains, stars.
- No icon placed on every card or above every heading. Use an icon only when it helps someone recognize an action (e.g. a GitHub link, a download).
- No stock photos (Unsplash, Pexels), no AI-generated images, no 3D illustrations, no abstract "developer at laptop" art, no floating 3D shapes.
- No fake code-editor decorations, `<developer />` tags, terminal windows with fake commands, or binary/matrix effects.
- Imagery is only: real product screenshots, real screen recordings, real architecture diagrams, and optionally a real photo of Suman.

### Layout
- No grid of identical rounded cards with the same shadow. Different content gets a different treatment based on its importance.
- No single border-radius applied to everything. No soft grey drop shadow under every element.
- No everything-centered layout. Default to left-aligned text with a clear grid.
- No hero made of a giant name + 3 pill badges + 2 buttons + stat counters. That is the most common AI portfolio hero.
- No stat counters ("40+ Projects", "35+ Clients", "4+ Years") that animate or count up.
- No skill percentage bars, skill circles, or ratings of any kind.
- No "Services" or "What I do" grid with three icon cards.
- No vertical timeline with dots and a line for work history, unless it genuinely reads better than a simple list.
- No numbered markers (01 / 02 / 03) unless the content truly is a sequence.
- No "SCROLL" indicator, no bouncing arrow.
- No marquee or infinite-scrolling logo/tech strip.

### Typography
- Do not reach for Poppins, Montserrat, Space Grotesk, or other default "modern portfolio" fonts. Choose type deliberately and explain why it fits this person and this content.
- Use one or two type families at most. If two, they must be clearly different in role.
- No all-caps tracked-out labels above headings (e.g. "— ABOUT ME —"). Remove section eyebrows entirely unless they carry real information.
- No highlighting one word in a headline with a different color, italic, or gradient.
- No middle-dot strings ("Full Stack · MERN · Cloud") as decoration.
- No "→" arrows appended to every link and button.
- No monospace font used just to "look technical". Monospace only for actual code.
- Set a real type scale. Line length 60–75 characters for body text. Generous line-height.

### Motion
- No fade-and-slide-up animation on every section as you scroll.
- No typing / typewriter effects, no rotating words in the hero.
- No cursor-follower effects, particles, parallax, tilt-on-hover cards, magnetic buttons.
- No hover animation on every card.
- At most one deliberate motion moment on the whole site, and only if it shows something real (e.g. the tracking app's live map moving). Everything else is still.
- Motion that responds to a user action (opening, expanding) is fine when it explains what changed.
- Always respect `prefers-reduced-motion`.

---

## 2. Banned: generic AI copywriting

### Words and phrases to never use
passionate, crafting digital experiences, bringing ideas to life, cutting-edge, innovative, seamless, robust, leverage, synergy, elevate, unlock, empower, journey, delve, game-changer, next-level, pixel-perfect, rockstar, ninja, "turning coffee into code", "Let's build something amazing together", "Hire Me", "I'd love to hear from you", "Global Mindset", "Performance First", "Passionate Builder", "Problem Solving", "Critical Thinking".

### Writing rules
- Plain, direct sentences in first person. Write like a confident engineer talking to another engineer.
- Specific beats impressive. "Built the GPS tracking app alone, from location permissions to the parent's live map" beats "Developed a scalable real-time solution".
- Every claim must be true and checkable. Never invent numbers, users, metrics, testimonials, or results.
- If a number or fact is unknown, write `[TODO: ...]` and list it for Suman. Do not guess.
- No soft-skill claims. Show them through what was built.
- Sentence case for all headings and buttons.
- Buttons say exactly what happens: "Download CV (PDF)", "Email me", "View on GitHub".
- Keep it short. If a sentence doesn't help a recruiter decide, delete it.

---

## 3. What to do instead

- **Let the work be the hero.** The strongest visual on the site should be Suman's real products: real screenshots of FullBagERP, FullBagAccounting, and the transport app, shown large and clearly. Use only demo/fake data in any screenshot. Never show real student or customer data.
- **Hierarchy through content importance.** The three Virgu products get full case studies. Older client websites get a compact, quiet list. Earlier marketing roles get a single short line.
- **Restraint.** Spend boldness in exactly one place (one memorable element), and keep everything else calm and disciplined. Before finishing any page, remove one decorative thing.
- **Real structure.** Borders, dividers, and labels only where they encode information, never as decoration.
- **A neutral, honest palette** with one accent color at most, chosen for a reason that comes from the content.

---

## 4. Process: plan before code

Do not write any code until Suman approves a design plan.

1. **Propose 2–3 genuinely different design directions.** Suman doesn't like Apple, Stripe, Vercel, or his current site, so do not copy any of them. Each direction must include:
   - A one-sentence concept and why it fits Suman's story
   - A palette of 4–6 named hex values, each with its role
   - Typefaces and their roles, with the reason for choosing them
   - An ASCII wireframe of the homepage (desktop and mobile)
   - The one memorable element of that direction
2. **Self-check each direction against sections 1 and 2.** If any part looks like a default you'd produce for any developer portfolio, revise it and say what you changed.
3. **Wait for Suman to choose** (or mix) a direction.
4. **Build**, then take screenshots at desktop and 375px mobile widths and review them against these rules. Fix anything that breaks a rule before calling it done.

---

## 5. Quality floor (non-negotiable)

- Fully responsive from 360px up. No horizontal scroll on mobile.
- Content must be in the HTML when the page loads (static generation or server-side rendering), so search engines, link previews, and recruiters' tools can read it. No blank page while JavaScript loads.
- Fast: Lighthouse performance, accessibility, best practices, and SEO each 95+. Optimize images (modern formats, proper sizes, lazy-load below the fold).
- Accessible: semantic HTML, proper heading order, alt text on every screenshot, visible keyboard focus, color contrast meeting WCAG AA.
- Real metadata: page title "Suman Kunwar · Full Stack Developer" (not "Suman App"), a proper meta description, and a correct Open Graph image.
- Works without any animation library. Add dependencies only when clearly needed.
- No placeholder links, dead buttons, or lorem ipsum in the final build.

---

## 6. Final check before every delivery

Ask yourself:
- Could this page belong to any other developer if you swapped the name? If yes, it's too generic. Fix it.
- Is there anything on screen that's only decoration? Remove it.
- Is every number and claim true and sourced from Suman? If not, mark it `[TODO]`.
- Would a busy tech lead in Milan understand who Suman is, what he built, and how to contact him within 30 seconds?
