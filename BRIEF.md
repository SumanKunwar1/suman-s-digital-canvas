# Website Brief: Suman Kunwar Portfolio (full rebuild)

This is the complete brief for rebuilding Suman's portfolio at https://sumankunwar.info.np/. It covers who the site is for, all content, what to remove, the page structure, the technical setup, and the order of work.

**Read `DESIGN_RULES.md` first.** Those rules apply to everything here.

## Overrides from Suman (2026-10-22)

- **Palette: black and white only.** Colour on the site comes from the real product screenshots, not from the UI. Any accent beyond black, white and greys needs Suman's explicit approval.
- **Section 10 (virgutech.com fixes) is out of scope.** Do not touch other sites; change only this portfolio.

All facts in this brief are confirmed by Suman or taken from his official documents. Use them exactly as written. The only facts you still need to collect are technical details that live in the product codebases (section 9). Never invent anything, and never put placeholder or "TODO" text on the site. If a detail can't be found in the code, leave it out and write around it.

---

## 0. Order of work

1. **Read** `DESIGN_RULES.md` and this whole brief.
2. **Audit the current portfolio's code:** framework, build, hosting/deploy setup, where content lives, what the contact form does, where the CV PDF comes from, and the URLs of every client project listed on the current site. Write a short summary.
3. **Collect technical facts from the product codebases** (FullBagERP, FullBagAccounting, FullBag-ERP-Mobile, and the virgutech.com website repo) into `FACTS.md`, as described in section 9.
4. **Propose 2–3 design directions** as described in `DESIGN_RULES.md` section 4. **Stop and wait for Suman to choose.**
5. **Build** the site with the content in this brief and `FACTS.md`.
6. **Capture product screenshots** and build the architecture diagrams (sections 6 and 7).
7. **Quality check** (section 11): screenshots at desktop and 375px mobile, compared against `DESIGN_RULES.md`. Fix issues, then hand over.

Local codebases: FullBagERP = `C:\Users\HP\Desktop\Paramount-Academy`, FullBagAccounting = `C:\Users\HP\Desktop\Virgu-Accounting`, transport app = `C:\Users\HP\Desktop\paramount-driver-app`. virgutech.com: https://virgutech.com/ (no local repo given).

---

## 1. Who Suman is (confirmed facts)

| Item | Detail |
|---|---|
| Name | Suman Kunwar |
| Based in | Rome, Italy (moving in the first week of November 2026) |
| Studying | **Computer Science – Informatica**, Laurea Magistrale (Master's degree, Italian degree class LM-18), **Sapienza University of Rome**. Taught in English. Two years, 2026–2028. |
| Latest role | **Full Stack Developer, Virgu Technology (Kathmandu), remote, March 2026 – October 2026.** One of the company's first developer hires; the team grew to about 15 people. He worked on the company's products from the beginning. He is leaving this role when he moves to Italy. |
| Built at Virgu | Developer on **FullBagERP** and **FullBagAccounting**; **sole developer** of the **FullBag transport mobile app** (private repo `VirguTech/FullBag-ERP-Mobile`); built the company website **virgutech.com** |
| Bachelor's | **BSc (Hons) Information Technology**, awarded by **Asia Pacific University of Technology & Innovation (APU), Malaysia**, studied full-time at **Lord Buddha Education Foundation (LBEF), Kathmandu**, in academic collaboration with APU. February 2022 – August 2025 (degree conferred 26 September 2025). **Second Class Honours (First Division)**, CGPA 3.46 / 4.00. Final semester GPA 3.90. Taught in English. |
| English | **IELTS Academic 7.0 overall, CEFR C1** (January 2026) |
| Languages | Nepali (native), Hindi (fluent, near-native; he spent six years of his childhood in India), English (C1), Italian (beginner, currently learning) |
| Certification | AWS Certified Cloud Practitioner (2025) |
| Email | sumankunwar755@gmail.com |
| Phone | +977 9767864470 |
| LinkedIn | https://www.linkedin.com/in/suman-kunwar-204286227/ |
| GitHub | https://github.com/SumanKunwar1 (public member of the VirguTech GitHub organization) |

**Experience length (use these exact framings):**
- Building production software since **March 2024** → "2.5+ years as a developer"
- Working in tech and digital products since **July 2021** → "5+ years in digital products"
- The old site's "4+ years experience" is wrong and must not appear anywhere.

**Privacy:** never put his date of birth, passport number, Italian tax code, home address, or grades from school-level certificates on the site.

---

## 2. Audience and goal

**Audience:** hiring managers, tech leads and recruiters at companies in Italy (Rome, Milan, remote-in-Italy) and the wider EU. Many are non-technical; tech leads will check depth.

**Within 30 seconds they must understand:**
1. Suman builds real software that organizations use every day.
2. He has owned a product end to end (the transport app, built alone).
3. He's in Rome, studying at Sapienza, and available for part-time developer work.
4. How to contact him and get his CV.

**Availability (state exactly this):**
- Part-time developer roles in Italy, up to 20 hours a week during his studies
- Internships and working-student positions
- Full-time roles after graduating in 2028
- **No visa sponsorship needed** for part-time work during his studies

---

## 3. Remove from the current site

- Page title "Suman App"
- "Kathmandu, Nepal · Available for Work" badge
- Pill badges: "Full Stack Developer", "MERN Stack", "Cloud & Data Enthusiast"
- All stat counters: "40+ Projects Built", "20+ Technologies", "4+ Years Experience", "35+ Clients Served"
- "SCROLL" indicator
- All eyebrow labels: "— ABOUT ME —", "— TECHNICAL EXPERTISE —", "— CAREER PATH —", "— ACADEMIC BACKGROUND —", "— GET IN TOUCH —"
- Heading "Crafting Digital Experiences"
- `<developer />` decoration and "⚡ Open to Work" badge
- "Global Mindset / Performance First / Passionate Builder" cards
- **All skill percentage bars**, including the entire "Interpersonal Skills" group
- All emoji icons
- The 12 equal project cards as the main projects section
- Certifications "Programming for Everybody" and "Meta Social Media Strategy & Planning"
- The coursework list "Data Structures, Algorithms, Artificial Intelligence, Database Systems, Software Engineering". It doesn't match his transcript; use the real modules in section 5.5.
- The "Lead Strategist" role (his W.A.S. Media role is shown as Full Stack Developer for the whole period)
- "Let's Work Together", "Have a project in mind or want to hire a skilled developer? I'd love to hear from you.", "Response time: within 24 hours", "Hire Me", "open to freelance projects"
- Anything that presents him as a freelancer or agency developer

---

## 4. Site structure

```
/                         Home (single scrolling page)
/work/fullbag-erp         Case study
/work/fullbag-accounting  Case study
/work/fullbag-transport   Case study (mobile app)
/cv                       Print-ready CV page (source of the PDF)
/404                      Simple, useful not-found page
```

### Home page sections, in order

1. Header: name (links home), Work, Experience, About, Contact
2. Intro
3. Selected work: the three FullBag projects
4. Also built: virgutech.com, FBH Nepal, OM Sounds, and a compact list of client websites
5. Experience
6. Education and languages
7. Skills
8. About
9. Contact
10. Footer

---

## 5. Home page content

Use this copy. You may tighten wording, but keep every fact, keep the plain tone, and follow `DESIGN_RULES.md` section 2.

### 5.1 Intro

> **Suman Kunwar**
>
> I'm a full stack developer. I build software that schools and businesses in Nepal use every day.
>
> At Virgu Technology I worked on FullBagERP and FullBagAccounting as one of the company's first developers, and I built the FullBag transport app on my own. I'm now in Rome, studying for a master's in Computer Science at Sapienza University.
>
> I'm looking for part-time developer work in Italy, up to 20 hours a week. No visa sponsorship needed.
>
> Buttons: **See my work** · **Download CV (PDF)** · **Email me**

Small line under the intro: *Rome, Italy*

### 5.2 Selected work

Each entry: name, one-line description, role, large real screenshot, link "Read the case study".

1. **FullBagERP**: School management software for private schools, colleges and school groups, covering admissions, attendance with automatic SMS to parents, exams with OCR grading, fees, timetables, transport, payroll, library, and a parent app.
   *Role:* Full stack developer, on the team from the beginning.
2. **FullBagAccounting**: Cloud accounting for small businesses and the accounting firms that manage their books, from quotation and VAT invoice to balance sheet, in Nepali (Bikram Sambat) and English dates.
   *Role:* Full stack developer, on the team from the beginning.
3. **FullBag transport app**: A React Native driver app that shares a school vehicle's live location with school admins and parents, and records when each student gets on and off.
   *Role:* Sole developer.

Line under the three entries: *The code for these products is private. I'm happy to walk through the architecture and code in an interview.*

### 5.3 Also built

**virgutech.com**: Virgu Technology's company website, with product pages, a blog, and demo and sales request forms. Built with Next.js (confirm the rest of the stack from the repo). Link: https://virgutech.com/

**FBH Nepal (fbhnepal.com)**: Website for the Food, Beverage & Hospitality Exhibition, Nepal's trade show for the food and hospitality industry, organized by House of Rajkarnicar. Suman built and optimized it, and it reached the top Google result in Nepal for searches such as "food and beverage exhibition in Nepal", "exhibition in Nepal" and "upcoming exhibition". Link: https://fbhnepal.com/

**OM Sounds**: An online store selling hand-hammered Nepali singing bowls to customers worldwide. Use the URL from the current portfolio's code.

**Client websites** (compact list: name, one short line, link): Pure Land Travels, Pure Land Hospitality, Padmasambhava Trip, NgYungNe Retreat, Rooted In Sound, Dharma Ideal, Constellation Cooperative, Trinity Waterproofing, RASS Engineering, SNS Tech, W.A.S. Media Marketing. Take descriptions from the current site, shortened to one line each, and URLs from the current site's code. Check every link; drop any that are dead.

### 5.4 Experience

Clean list, newest first.

**Full Stack Developer**, Virgu Technology, Kathmandu (remote) · Mar 2026 – Oct 2026
- One of the first developers hired, working on FullBagERP (school management) and FullBagAccounting (cloud accounting) from their early versions as the team grew to about 15 people.
- Built the FullBag transport app alone in React Native (Expo): live vehicle tracking for school admins and parents, an offline-first location queue, and QR code student attendance. (Firebase removed per Suman, 2026-10-22.)
- Worked on the products' infrastructure: PostgreSQL, Redis, Docker, and CI/CD with GitHub Actions. (Kubernetes removed per Suman, 2026-10-22.)
- Built the company website, virgutech.com.
- Add one bullet on the specific ERP/Accounting modules he built, taken from `FACTS.md` (git history). If git history isn't available, leave this bullet out.

**Full Stack Developer**, W.A.S. Media Marketing, Kathmandu · Oct 2024 – Feb 2026
- Built and deployed websites and web applications for the agency's clients, with primary sites hosted on Hostinger and AWS used for specific services.
- Built and optimized the FBH Nepal exhibition website, which reached the top Google result in Nepal for searches like "food and beverage exhibition in Nepal" and "upcoming exhibition".
- Built REST APIs and MERN-stack applications for client projects.

**Web Developer**, House of Rajkarnicar, Kathmandu · Mar 2024 – Oct 2024
- Built and maintained event and brand websites, including social media integrations.
- Improved search visibility with technical SEO.

**Earlier: digital products and marketing, 2021–2024** (one short combined entry)
- Product Head / Digital Marketer, Socheko.com · Jul 2021 – Oct 2023
- Digital Marketer & E-commerce Officer, MastaKala.com · Dec 2023 – Mar 2024
- *Ran e-commerce operations and digital marketing and led a small team. It's where I learned how online products actually make money.*

### 5.5 Education and languages

**MSc in Computer Science – Informatica** (Laurea Magistrale, LM-18)
Sapienza University of Rome · 2026 – 2028 · taught in English

**BSc (Hons) Information Technology**
Asia Pacific University of Technology & Innovation (APU), Malaysia · studied at Lord Buddha Education Foundation, Kathmandu · 2022 – 2025
Second Class Honours (First Division) · CGPA 3.46 / 4.00 · final semester GPA 3.90
Relevant modules: Advanced Database Systems, Designing and Developing Applications on the Cloud, Cloud Infrastructure and Services, Distributed Computer Systems, Object-Oriented Development with Java, Web Applications, Programming for Data Analysis, Probability and Statistical Modelling, System and Network Administration, final-year IT Project. Two industry internships completed as part of the degree.

**AWS Certified Cloud Practitioner** · 2025

**Languages**
- Nepali: native
- Hindi: fluent
- English: C1 (IELTS Academic 7.0, January 2026)
- Italian: beginner, currently learning

### 5.6 Skills

Plain grouped lists. No bars, no levels, no icons.

- **Languages:** TypeScript, JavaScript, Python, SQL
- **Frontend:** React, Next.js, Vue.js, HTML, CSS, Tailwind CSS
- **Mobile:** React Native
- **Backend:** Node.js, Express, Flask, REST APIs
- **Real-time:** Firebase
- **Databases:** PostgreSQL, MongoDB, MySQL, Redis
- **Cloud and DevOps:** AWS (EC2, S3), Docker, Kubernetes, CI/CD, Git
- **Data:** Pandas, NumPy, scikit-learn

Add any other library or service that `FACTS.md` shows he used in the products (for example the maps library in the mobile app).

### 5.7 About

> I grew up in Nepal and spent six years of my childhood in India. I started in tech on the business side, running e-commerce and digital marketing for online stores, and the more I worked with the software behind them, the more I wanted to build it myself. Since 2024 I've worked as a developer, and the software I helped build now runs attendance, exams, fees and accounts for schools and businesses in Nepal.
>
> In Rome I'm studying for my master's at Sapienza and looking for a team where I can keep building useful products part-time while I study.

### 5.8 Contact

> **Contact**
>
> The quickest way to reach me is email.
>
> sumankunwar755@gmail.com
> +977 9767864470
> GitHub · LinkedIn
>
> Buttons: **Email me** · **Download CV (PDF)**
>
> References from Virgu Technology are available on request.

- The current site's form-like "Send Message" area: check in the code whether it really delivers messages. Keep a simple form only if it works reliably; otherwise remove it and use the email link.

### 5.9 Footer

Name, year, email, GitHub, LinkedIn. Nothing else.

---

## 6. Case study pages

Same structure for all three, written fresh from facts.

1. Title and one-line summary
2. Quick facts block: role, timeline, platform, status, stack
3. The problem: who uses it and what was painful before (2–4 sentences)
4. What it does: main features with real screenshots (demo data only)
5. My part: exactly what Suman built or owned; precise about team versus solo work
6. How it works: architecture diagram plus short explanation (section 7)
7. Hard problems and decisions: 3–4 real technical challenges, each with the problem, what was chosen, and why. **Only use challenges you can confirm in the code.**
8. Note: *The source code is private. I'm happy to walk through it in an interview.*
9. Link to the next case study

**Do not use Virgu's marketing figures** (number of schools, students, uptime, grading speed) anywhere on the portfolio. Describe the products by what they do and what Suman built.

### 6.1 FullBagERP

Product facts (from https://virgutech.com/products/fullbag-erp):
- For private schools (small to large), colleges and +2 schools, and school groups with several campuses under one account and consolidated reporting
- Modules: admissions (online enquiry forms, admission workflow, student profiles); attendance (teachers mark a class on a phone, automatic SMS and app alerts to parents of absent students, period-wise or daily); exams (custom grading systems, report card templates, OCR-assisted marking of scanned objective answer sheets, results published to the parent app); fees and billing (class-wise structures, discounts, scholarships, fines, receipts, due reminders, live collection dashboard, online payment matched to the student); timetable (clash and substitution detection); parent app (attendance, homework, results, dues, messaging the class teacher); staff and payroll; library (barcodes, automatic late fines); transport (routes, stops, vehicle assignments, transport fees on the student bill)
- Each school's data is kept separate, with role-based access and daily backups
- Teachers' daily tasks work on ordinary Android phones
- Fee collections can post straight into FullBagAccounting
- Bikram Sambat dates and the Nepali fiscal year; interface in Nepali or English
- Infrastructure (confirmed by Suman): PostgreSQL, Redis, Docker, Kubernetes, AWS EC2, CI/CD. Confirm the frontend and backend frameworks from the code.

Candidate "hard problems" (include only those you can confirm in the code): multi-school data separation; Bikram Sambat dates across attendance, exams and fees; reliable automatic SMS to parents (queueing, retries); OCR grading; posting fee collections into the accounting ledger without double entry; running on Kubernetes with Redis caching.

### 6.2 FullBagAccounting

Product facts (from https://virgutech.com/products/fullbag-accounting):
- For retail and trading businesses, service businesses, and accountants and firms managing several client companies from one login with separate books for each
- Modules: sales and invoicing (quotations, VAT-ready tax invoices, credit notes, recurring bills, partial payments, credit limits, overdue reminders); purchases and expenses; inventory (items, units, batches, multiple warehouses, stock moving automatically with each bill); banking (statement import, reconciliation, cheques); financial reports (profit and loss, balance sheet, trial balance, cash flow, day book, ledgers, receivable/payable ageing, export to Excel or PDF); VAT summaries and sales/purchase registers; multi-branch with consolidated reporting; Nepali fiscal year with Bikram Sambat and AD dates; roles, approval steps and a full audit trail
- Imports chart of accounts, opening balances, customers, suppliers and items from Excel or older software
- Infrastructure as for FullBagERP (confirm in the code)

Candidate "hard problems" (only if confirmed in the code): double-entry correctness and ledger consistency; multi-company data separation for accounting firms; VAT rules and invoice numbering; dual BS/AD date handling; fast report generation; audit trail design; importing legacy data.

### 6.3 FullBag transport app

Facts (confirmed by Suman):
- Mobile app for school vehicle drivers, part of the FullBagERP system
- **Built entirely by Suman** (sole developer), in **React Native**, with **Firebase** for real-time updates
- Streams the vehicle's live location in real time
- School admins see all vehicles live; parents see the live location of the vehicle assigned to their own child only
- Records student attendance automatically, so the school and parents know in real time when a child gets on or off the vehicle
- Private repository; not published on public app stores

From the repo, add to `FACTS.md` and use on the page: how location is collected in the background, how battery use and Android/iOS restrictions are handled, how Firebase is structured for live updates, what happens when the driver loses signal, **how the automatic attendance is triggered**, and how access is restricted so parents see only their child's vehicle. Only describe what the code actually does. If the attendance mechanism can't be determined, describe the outcome only.

Make it visible in the design that this was a solo project. It's Suman's strongest proof of end-to-end ownership.

---

## 7. Screenshots, demo video, and diagrams

**Screenshots**
- Run the apps locally or on a demo environment with **demo data only**: fictional schools, students, businesses and amounts.
- **Never capture real student, parent, school or customer data.** State on each case study that screenshots use demo data.
- Capture web screens with Playwright; capture the mobile app on an emulator with a simulated GPS route so the map shows movement.
- Export as AVIF/WebP with fallbacks, sized for display, with descriptive alt text.
- Present screenshots cleanly. No glossy 3D device renders.

**Transport app demo video (1–2 minutes, optional but recommended):** driver app beside the admin map and parent view, with a boarding event updating live. Muted, captioned, loaded only on click with a poster image.

**Architecture diagrams:** one per case study, as clean inline SVG in the site's style, built only from what's in the code and configs (Kubernetes manifests, Docker files, CI config, environment variable names). Readable on a phone. Never add services that aren't there.

---

## 8. Technical requirements

- **Rendering:** the current site renders only in JavaScript; a non-browser fetch returns just the meta tags. The new site must ship real HTML. Use **Next.js with static generation** unless the audit finds a strong reason otherwise. Explain the choice.
- **Hosting:** keep the current host and domain unless there's a clear reason to change.
- **Content in one place:** all text and project data in typed content files (e.g. `content/*.ts` or MDX), so Suman can update his phone number, location or availability in one edit.
- **CV:** `/cv` is a clean, print-ready page built from the same content files, and the downloadable PDF is generated from it, so site and CV always match. 1–2 pages, European style, no skill bars.
- **SEO and sharing:**
  - Title: "Suman Kunwar · Full Stack Developer"
  - Meta description: "Full stack developer who built school management and accounting software used in Nepal. MSc Computer Science student at Sapienza University of Rome, open to part-time developer roles in Italy."
  - Open Graph image made from a real product screenshot and his name
  - Canonical URL, `sitemap.xml`, `robots.txt`
  - JSON-LD `Person` schema: name, jobTitle, affiliation (Sapienza University of Rome), alumniOf (Asia Pacific University of Technology & Innovation), knowsLanguage, sameAs (GitHub, LinkedIn)
  - A proper favicon (not an emoji)
- **Performance and accessibility:** see `DESIGN_RULES.md` section 5.
- **No analytics** unless Suman asks for them.

---

## 9. `FACTS.md` (technical facts from the codebases)

Create this before writing the case studies. For each product, record what you found and where:

```
## FullBag transport app
- Framework: React Native <version> — source: package.json
- Real-time: Firebase <service> — source: src/...
- Background location: <library> — source: ...
- Attendance trigger: ... — source: ...
- Suman's commits: N, first on YYYY-MM-DD — source: git log
```

- Use `git log --author` (try his name and both email addresses) to identify his contributions to FullBagERP and FullBagAccounting.
- Anything you can't confirm stays out of the site.
- Never copy secrets, API keys, internal URLs, customer names or credentials into `FACTS.md` or the site.

---

## 10. Fixes for virgutech.com — OUT OF SCOPE

Suman decided (2026-10-22) to leave virgutech.com as it is for now. Do not work on it.

---

## 11. Final checklist

- [ ] Every fact on the site matches this brief or `FACTS.md`. Nothing invented, no placeholder or TODO text anywhere.
- [ ] Dates are consistent across home, case studies and CV.
- [ ] "2.5+ years as a developer" used consistently; "4+ years" appears nowhere.
- [ ] Course name is exactly "Computer Science – Informatica" (Laurea Magistrale, LM-18), Sapienza University of Rome.
- [ ] Bachelor's shows APU as the awarding university and LBEF as the place of study.
- [ ] Availability wording matches section 2, including "No visa sponsorship needed".
- [ ] No Virgu marketing figures on the portfolio.
- [ ] No personal data (date of birth, passport, tax code, address) anywhere.
- [ ] No real customer or student data in any screenshot or video.
- [ ] Nothing from the banned lists in `DESIGN_RULES.md`.
- [ ] All links work: client sites, fbhnepal.com, virgutech.com, GitHub, LinkedIn, CV download, email.
- [ ] Page source contains the real content (view-source test).
- [ ] Lighthouse 95+ in all four categories on mobile.
- [ ] Looks right at 360, 375, 768, 1280 and 1440px widths.
- [ ] Keyboard navigation and visible focus work everywhere.
- [ ] Open Graph preview looks right when shared.
- [ ] `/cv` prints cleanly to 1–2 pages and the PDF matches it.
