# Design directions

Three directions for the rebuild. All three follow Suman's override: **black and white only**. The only colour on the site comes from the real product screenshots, so the products look like the most alive thing on the page. That is the point.

Shared by all three (not up for choice, comes from the brief):
- Next.js with static export, so every page ships as real HTML; the `out/` folder is copied to the existing nginx server. Same host and domain.
- All content in typed files under `content/`; `/cv` built from the same files.
- Left-aligned text, body line length about 65 characters, links underlined (no arrows), sentence case, no eyebrows, no icons except GitHub/LinkedIn/download where they help recognition.

---

## A. Screens first

**Concept:** The page is a white wall and the products hang on it. Screenshots are shown big, bleeding off the right edge of the page, and everything else is quiet text. Fits Suman because his case rests on software people actually use, so the software should be the first thing a recruiter sees.

**Palette**
| Name | Hex | Role |
|---|---|---|
| Paper | `#FFFFFF` | Background |
| Ink | `#000000` | Headings, body, links, buttons |
| Pencil | `#595959` | Secondary text: dates, roles, captions (7:1 on white) |
| Rule | `#DADADA` | 1px edge around screenshots so white UIs don't melt into the page; table rows in the client list |
| Shade | `#F2F2F2` | Background behind the screenshot frames only |

**Type:** one family, **Schibsted Grotesk** (400, 500, 700). Designed for a Norwegian newspaper group: sturdy, slightly irregular, reads well at 15px and at 72px. It looks made for reading, not for "tech". Not a portfolio default. Code (if any) uses the system monospace.

Scale (1.25 ratio): 15 / 18 (body) / 22 / 28 / 44 / 72px. Line height 1.6 body, 1.1 display.

**Desktop (1440)**
```
+--------------------------------------------------------------------------+
| Suman Kunwar                          Work  Experience  About  Contact   |
|                                                                          |
| Suman Kunwar                        +-----------------------------------+--
|                                     |                                   |
| I'm a full stack developer. I build |   FullBagERP screenshot           |
| software that schools and           |   (attendance / fees screen,      |
| businesses in Nepal use every day.  |    demo data) — bleeds off the    |
|                                     |    right edge of the window       |
| At Virgu Technology I worked on ... |                                   |
| I'm now in Rome, studying ...       +-----------------------------------+--
|                                                                          |
| Part-time in Italy, up to 20 h/week. No visa sponsorship needed.         |
| [See my work]  [Download CV (PDF)]  [Email me]          Rome, Italy      |
|                                                                          |
|--------------------------------------------------------------------------|
| FullBagERP                                                               |
| School management for private schools, colleges and school groups.       |
| Full stack developer, on the team from the beginning.                    |
| +----------------------------------------------------------------------+--
| |  full-width screenshot                                               |
| +----------------------------------------------------------------------+--
| Read the case study                                                      |
|                                                                          |
| FullBagAccounting           (same treatment, screenshot on the left)     |
| FullBag transport app       phone screens side by side, "Sole developer" |
|                             set larger than the other roles              |
|                                                                          |
| Also built          virgutech.com, FBH Nepal, OM Sounds as 3 short       |
|                     paragraphs, then a plain 2-column table of client    |
|                     sites: name | one line | link                        |
| Experience / Education / Skills / About / Contact — plain text blocks    |
+--------------------------------------------------------------------------+
```

**Mobile (375)**
```
+-------------------------+
| Suman Kunwar     Menu   |
|                         |
| Suman Kunwar            |
| I'm a full stack dev... |
| ...                     |
| [See my work]           |
| [Download CV (PDF)]     |
| [Email me]              |
| Rome, Italy             |
| +-----------------------+-
| | ERP screenshot,       |
| | cropped to one panel  |
| +-----------------------+-
| FullBagERP              |
| ...                     |
+-------------------------+
```

**Memorable element:** the screenshots run off the edge of the page, as if the software is bigger than the portfolio. Nothing else on the page is allowed to be big.

---

## B. Route line

**Concept:** The transport app is Suman's solo proof, so the site opens with it: a thin black line tracing a demo bus route across the hero, with one dot that travels along it once on load and stops at the school. Fits Suman because it is literally what his app does (a position every 30 seconds becoming a line on a map), and it's the one motion moment the rules allow.

**Palette**
| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | Background |
| Black | `#000000` | Text, route line, buttons |
| Grey 60 | `#5E5E5E` | Secondary text, captions |
| Grey 20 | `#CFCFCF` | Faint street grid under the route (drawn from real OSM street geometry for a demo area, no labels) |
| Grey 5 | `#F4F4F4` | Quick-facts block background on case studies |

**Type:** two families with clearly different jobs.
- **Source Serif 4** for headings and body. Long case studies read better in a serif, and it has optical sizes, so the 64px name and the 18px paragraphs are both drawn for their size. Feels like a written account, not a sales page.
- **Public Sans** for interface text only: nav, buttons, quick-facts labels, captions. Built by the US government for plain, legible UI; neutral on purpose.

Scale (1.333 ratio): 14 / 18 / 24 / 32 / 42 / 64px. Serif body line height 1.7.

**Desktop (1440)**
```
+--------------------------------------------------------------------------+
| Suman Kunwar                          Work  Experience  About  Contact   |
|                                                                          |
|   .  .  .  .  .  . faint street grid .  .  .  .  .  .  .  .  .  .  .     |
|        ______________                                                    |
|   o___/              \_________                 ●  <- dot moves once,    |
|                                \______________/      stops at school     |
|                                                                          |
| Suman Kunwar                                                             |
| I'm a full stack developer. I build software that schools and           |
| businesses in Nepal use every day.                                       |
| ...                                                                      |
| [See my work]  [Download CV (PDF)]  [Email me]          Rome, Italy      |
|--------------------------------------------------------------------------|
| Selected work                                                            |
| +------------------------------+   FullBag transport app                 |
| | phone screenshots            |   Sole developer. Expo / React Native.  |
| +------------------------------+   Read the case study                   |
| +------------------------------+   FullBagERP ...                        |
| +------------------------------+   FullBagAccounting ...                 |
| (screenshot left, text right; transport app listed first)                |
+--------------------------------------------------------------------------+
```

**Mobile (375)**
```
+-------------------------+
| Suman Kunwar     Menu   |
|  .  .  .  .  .  .  .    |
|  o__/‾‾\___    ●        |
|  (route, shorter)       |
| Suman Kunwar            |
| I'm a full stack dev... |
| [See my work]           |
| [Download CV (PDF)]     |
| [Email me]              |
| +---------------------+ |
| | phone screenshots   | |
| +---------------------+ |
| FullBag transport app   |
+-------------------------+
```

**Memorable element:** the route line with the single moving dot. With `prefers-reduced-motion` the dot just sits at the school.

---

## C. Lightbox

**Concept:** A pure black page with white type, like a darkroom light table: the screenshots are the only bright, coloured things on it. Fits Suman because it makes the real product UIs pop harder than anything a decorative palette could, and the page itself stays out of the way.

**Palette**
| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | Background (true black, not a tinted near-black) |
| White | `#FFFFFF` | Headings, body, links, buttons |
| Grey 65 | `#A6A6A6` | Secondary text (8.6:1 on black) |
| Grey 25 | `#3F3F3F` | Dividers between experience entries, table rows |
| Grey 12 | `#1F1F1F` | Quick-facts block on case studies |

`/cv` and print styles flip to black on white automatically.

**Type:** one family, **Public Sans** variable (300–800). On black, a plain, open sans with generous spacing stays readable; no character that competes with the screenshots. Name set very large in 300 weight, so it reads quietly despite the size.

Scale (1.25 ratio): 15 / 18 / 22 / 28 / 44 / 88px.

**Desktop (1440)**
```
+--------------------------------------------------------------------------+
| Suman Kunwar                          Work  Experience  About  Contact   |
|                                                                          |
| Suman Kunwar   (88px, light weight, white on black)                      |
|                                                                          |
| I'm a full stack developer. I build software that   Rome, Italy          |
| schools and businesses in Nepal use every day.      Part-time, up to     |
| ...                                                 20 h/week. No visa   |
| [See my work] [Download CV (PDF)] [Email me]        sponsorship needed.  |
|                                                                          |
|   +----------+ +----------------------------------+ +----------+         |
|   | phone    | |  ERP screenshot (largest)        | | Accounts |         |
|   | app      | |                                  | | screen   |         |
|   +----------+ +----------------------------------+ +----------+         |
|   three real screens of different sizes, laid side by side               |
|--------------------------------------------------------------------------|
| FullBagERP          one-line + role             Read the case study      |
| FullBagAccounting   ...                                                  |
| FullBag transport   Sole developer ...                                   |
+--------------------------------------------------------------------------+
```

**Mobile (375)**
```
+-------------------------+
| Suman Kunwar     Menu   |
| Suman                   |
| Kunwar  (52px)          |
| I'm a full stack dev... |
| [See my work] ...       |
| +---------------------+ |
| | ERP screenshot      | |
| +---------------------+ |
| +--------+ +--------+   |
| | phone  | | accts  |   |
| +--------+ +--------+   |
+-------------------------+
```

**Memorable element:** the hero "light table": the three real product screens of different sizes laid side by side on pure black.

---

## Self-check against DESIGN_RULES.md (and what I changed)

- **A** first draft had a hairline rule under every section and numbered work entries (01/02/03). Both are template chrome and the work isn't a sequence. Removed: rules now only frame screenshots and separate table rows.
- **B** first draft put the route as a decorative background running down the whole page. That's decoration. Cut it to the hero only, where it shows what the app does, and made it the single motion moment.
- **B** first draft used Inter for UI. That's the default; swapped to Public Sans for a stated reason (plain government-grade UI legibility).
- **C** first draft used `#0B0B0B` as the background and a white glow behind screenshots. Tinted near-black is a tell and glow is banned. Now true `#000000`, no shadows at all.
- **C** is the riskiest against the banned "dark + one accent" palette. It has no accent at all, so it's not that pattern, but it is a dark site, and the old site was dark. If you want a clean break from the old look, choose A or B.
- All three: no stat counters, no pills, no eyebrows, no icons on headings, no scroll animations, no card grids. The client list is a plain table.

**Optional detail for any direction:** show experience dates in both calendars, e.g. "Mar 2026 (Chaitra 2082)". Suman built Bikram Sambat voucher numbering and date pickers, so it's a true, specific touch. It could confuse a recruiter in Milan, though, so it's off unless you want it.

## My recommendation

**A, with B's route line moved to the transport case study page.** A gets a recruiter to the real products fastest, which is the brief's main goal. The route line is more memorable but makes the hero about one product. On the transport page it shows exactly what that app does.
