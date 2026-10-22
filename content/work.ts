// The three case studies. Technical claims are in FACTS.md with their source.
// FullBagERP and FullBagAccounting are described as complete products (Suman, 2026-10-22);
// the transport app, which Suman built alone, keeps a "My part" section.

export type Shot = {
  src: string; // path under /public, without extension; .avif and .webp exist for each
  alt: string;
  width: number;
  height: number;
  caption?: string;
  phone?: boolean;
};

export type Decision = { title: string; problem: string; choice: string; why: string };

export type CaseStudy = {
  slug: string;
  name: string;
  oneLine: string;
  role: string;
  solo?: boolean;
  highlights: string[];
  facts: { label: string; value: string }[];
  problem: string[];
  features: { title: string; text: string }[];
  shots: Shot[];
  myPart?: string[];
  commits?: { date: string; subject: string }[];
  howItWorks: string[];
  decisions: Decision[];
};

export const work: CaseStudy[] = [
  {
    slug: "fullbag-erp",
    name: "FullBagERP",
    oneLine:
      "School management software for private schools, colleges and school groups: admissions, attendance, academics, exams, fees, transport, staff, library and a parent app, in one system.",
    role: "Full stack developer, on the team from the beginning",
    highlights: [
      "Attendance by phone or QR scan, with an automatic SMS to parents of absent students",
      "Fees with online payment, posted straight into FullBagAccounting",
      "Live tracking of every school vehicle, for admins and for parents",
    ],
    facts: [
      { label: "Role", value: "Full stack developer, one of the first developers on the team" },
      { label: "Timeline", value: "March 2026 – September 2026" },
      { label: "Platform", value: "Web app for school staff, parent app, Android phones for teachers' daily tasks" },
      { label: "Status", value: "In use at schools in Nepal" },
      { label: "Stack", value: "Next.js, Node.js, Express, Prisma, PostgreSQL, Redis, BullMQ, AWS S3, Docker, GitHub Actions" },
    ],
    problem: [
      "A school in Nepal has to run admissions, attendance, academics, exams, fees, timetables, transport, staff and a library, and parents expect to hear quickly about an absence or a fee that is due.",
      "FullBagERP puts all of that in one system. Each school's data is kept separate, dates follow Bikram Sambat and the Nepali fiscal year, and the interface works in Nepali or English. A school group can run several campuses under one account.",
    ],
    features: [
      { title: "Dashboards", text: "A view for each role. Leadership sees attendance, fee collection and the exceptions that need a decision; teachers and office staff see their own work." },
      { title: "Admissions", text: "Online enquiry and admission forms, an admission workflow, student profiles, bulk import of existing students, and printed ID and admit cards." },
      { title: "Attendance", text: "Homeroom or period-wise attendance on a phone or by QR scan, with present, absent, late and leave. Parents of absent students get an SMS and an app alert." },
      { title: "Academics", text: "Curriculum setup and tracking for each programme, unit planning, tasks and assessments, and a task board for planning teams." },
      { title: "Exams and results", text: "Custom grading systems, report card templates, OCR-assisted marking of scanned objective answer sheets, and results published to the parent app." },
      { title: "Fees and billing", text: "Class-wise fee structures, discounts, scholarships, fines, receipts, due reminders, a live collection dashboard, and online payments matched to the student." },
      { title: "Academic calendar", text: "Term dates, holidays, exams, briefings and assignments, with Bikram Sambat dates first and AD beneath." },
      { title: "Timetable", text: "Class timetables with clash and substitution detection." },
      { title: "Transport", text: "Vehicles, stops, routes, a transport timetable, student assignments, attendance on the vehicle, a live map of every vehicle, and transport fees on the student bill." },
      { title: "Staff and payroll", text: "Teacher and employee records, logins issued from the people screens, and payroll." },
      { title: "Library", text: "Catalogue with barcodes, loans and automatic late fines." },
      { title: "Messaging and parent app", text: "Bulk SMS and email with templates. Parents see attendance, homework, results and dues, and can message the class teacher." },
      { title: "Reports", text: "Attendance, roster, staff, transport and finance reports, exported to PDF or Excel." },
      { title: "Security", text: "Each school's data in its own database, role-based access for every screen and API route, and daily backups." },
    ],
    shots: [
      {
        src: "/shots/erp-dashboard",
        width: 1143,
        height: 450,
        alt: "FullBagERP leadership dashboard: cards for student attendance, staff attendance, fees collected and total students, a bar chart of attendance over the last seven school days, and a list of exceptions that need a decision.",
        caption: "Leadership dashboard",
      },
      {
        src: "/shots/erp-transport",
        width: 1158,
        height: 580,
        alt: "FullBagERP live tracking: a list of school vans with their signal status on the left, and an OpenStreetMap map showing where each van was last seen.",
        caption: "Live tracking of the school's vehicles",
      },
      {
        src: "/shots/erp-students",
        width: 1143,
        height: 540,
        alt: "FullBagERP student management: totals for active, pending, migrated and inactive students, tabs for online admissions, migrated students and drafts, student counts per programme, and search filters.",
        caption: "Student management",
      },
    ],
    howItWorks: [
      "Each school gets its own subdomain. The Next.js app reads the school from the subdomain and sends it with every request as an x-tenant-id header.",
      "The Express API looks the school up in a central database and connects to that school's own PostgreSQL database. Every school has a separate physical database.",
      "Slow work runs outside the request. SMS, email and provisioning jobs go onto BullMQ queues in Redis, with a dead-letter queue for jobs that keep failing. Uploaded files go to S3.",
      "GitHub Actions builds Docker images for the API and the web app, pushes them to GitHub's container registry, and deploys them to the server with Docker Compose.",
    ],
    decisions: [
      {
        title: "One database per school",
        problem: "In a shared database every query needs a school filter, and one forgotten filter shows one school's students to another.",
        choice: "Each school has its own PostgreSQL database, found through a central registry. The student, teacher and academics models were moved over and their schoolId columns removed.",
        why: "A query can't reach another school's data, because it runs on a connection to one school's database.",
      },
      {
        title: "Parents only see their own child's bus",
        problem: "The parents' live map must not become a way to look up any bus, or any child, in the school.",
        choice: "The server builds the list from the parent's own profile: their children, then the buses those children are assigned to. The app never sends student IDs.",
        why: "If the client can't name a student, it can't ask for someone else's.",
      },
      {
        title: "Permissions checked on the server",
        problem: "Teachers, accountants, office staff and leadership need different parts of the system, and hiding a button in the UI doesn't stop a direct API call.",
        choice: "Role-based permissions are enforced on the API routes, seeded per role, and the dashboards follow the same roles.",
        why: "The API refuses what the role doesn't allow, whatever the UI shows.",
      },
    ],
  },
  {
    slug: "fullbag-accounting",
    name: "FullBagAccounting",
    oneLine:
      "Cloud accounting for small businesses and the accounting firms that keep their books, from quotation and VAT invoice to balance sheet, in Nepali (Bikram Sambat) and English dates.",
    role: "Full stack developer, on the team from the beginning",
    highlights: [
      "Vouchers numbered per Nepali financial year, never repeated",
      "Official Nepal Rastra Bank exchange rates for every currency it quotes",
      "VAT invoices, inventory, banking and full financial reports",
    ],
    facts: [
      { label: "Role", value: "Full stack developer, on the team from the beginning" },
      { label: "Platform", value: "Web app" },
      { label: "Users", value: "Retail, trading and service businesses, and accounting firms managing several companies" },
      { label: "Stack", value: "TypeScript, React, Vite, Node.js, Express, Prisma, PostgreSQL, decimal.js, Docker" },
    ],
    problem: [
      "Small businesses in Nepal need VAT-ready invoices, books that follow the Nepali fiscal year from Shrawan to Asar, and reports their accountant can work from. Accounting firms keep books for several client companies at once.",
      "FullBagAccounting covers the whole cycle, from quotation to balance sheet, with separate books for each company and dates in both Bikram Sambat and AD.",
    ],
    features: [
      { title: "Sales and invoicing", text: "Quotations, VAT-ready tax invoices, credit notes, recurring bills, partial payments, credit limits and overdue reminders." },
      { title: "Purchases and expenses", text: "Supplier bills, expenses and payments, with payables tracked by supplier." },
      { title: "Vouchers", text: "Cash/Bank, Journal, Contra and Debit/Credit Note entry, with post-dated cheques, registers, drafts and voids." },
      { title: "Voucher series", text: "Numbers like PV-2083/084-0001 per voucher type, starting again every Shrawan 1. A number is given when a voucher is saved and never changes." },
      { title: "Ledgers", text: "Chart of accounts, ledgers and sub-ledgers. Ledgers are never deleted, only deactivated." },
      { title: "Inventory", text: "Items, units, batches and multiple warehouses, with stock moving automatically with each bill." },
      { title: "Banking", text: "Statement import, reconciliation and cheques." },
      { title: "Currencies", text: "Every ISO 4217 currency the company trades in, at Nepal Rastra Bank's published buying and selling rates." },
      { title: "Financial reports", text: "Profit and loss, balance sheet, trial balance, cash flow, day book, ledgers and receivable/payable ageing, exported to Excel or PDF." },
      { title: "VAT", text: "VAT summaries and sales and purchase registers." },
      { title: "Companies and branches", text: "Accounting firms manage several companies from one login, each with separate books, branches and consolidated reporting." },
      { title: "Control", text: "Roles and permissions, approval steps, a full audit trail, and import of opening balances, customers, suppliers and items from Excel or older software." },
    ],
    shots: [
      {
        src: "/shots/acc-voucher-series",
        width: 1109,
        height: 515,
        alt: "FullBagAccounting voucher series page for financial year 2083/84, listing Payment, Receipt, Journal and Contra vouchers with their next numbers, such as PV-2083/084-0001.",
        caption: "Voucher series for the Nepali financial year",
      },
      {
        src: "/shots/acc-cash-bank",
        width: 1109,
        height: 500,
        alt: "FullBagAccounting Cash Bank voucher entry: voucher date in Bikram Sambat, cash or bank ledger, cheque details, currency with the Nepal Rastra Bank rate, a grid of ledgers with received and payment amounts, and totals.",
        caption: "Cash/Bank voucher entry",
      },
      {
        src: "/shots/acc-exchange-rates",
        width: 1093,
        height: 574,
        alt: "FullBagAccounting exchange rates page converting one US dollar to Nepalese rupees at Nepal Rastra Bank's buying and selling rates for a Bikram Sambat date, above a table of all published rates.",
        caption: "Exchange rates from Nepal Rastra Bank",
      },
    ],
    howItWorks: [
      "A React app built with Vite and served by nginx talks to an Express API written in TypeScript.",
      "The API uses the same pattern as FullBagERP: a central database that knows every client company, and a separate PostgreSQL database for each one's books, reached through Prisma.",
      "Money is handled with decimal.js rather than floating-point numbers. Exchange rates come from Nepal Rastra Bank's public API and are cached per day.",
    ],
    decisions: [
      {
        title: "Voucher numbers that never repeat",
        problem: "Every voucher needs a number like PV-2083/084-0001: its type, its Nepali financial year, and a sequence. Two people saving vouchers at the same moment must never get the same number.",
        choice: "The voucher's date picks the financial year. The next number comes from a single INSERT … ON CONFLICT DO UPDATE … RETURNING inside the voucher's transaction. Closed years and full series are refused with a message that says what to do.",
        why: "The database does the increment in one statement, so there is no read-then-write gap for two requests to fall into. Unit, integration and end-to-end tests cover it.",
      },
      {
        title: "A connection pool deadlock",
        problem: "Under load, the API froze. Each request held a database connection while its handler also queried through Prisma, and both drew from one pool. With enough parallel requests, every connection was held by a request waiting for a second one.",
        choice: "Prisma now gets its own pool for each company's database, and the API checks at startup that the worst-case number of connections fits the server's budget.",
        why: "A request can always get its second connection. An integration test reproduces the original deadlock, so it can't quietly come back.",
      },
      {
        title: "Reading Nepal Rastra Bank's rates",
        problem: "NRB publishes official buying and selling rates, but quotes some currencies per 10 or 100 units, and its API answers HTTP 200 even when something went wrong.",
        choice: "Rates are normalised to one unit. The response body decides the outcome: an empty day is a 404, a refused or unreachable call is a 502. Each day's rates are cached for an hour.",
        why: "Accountants see either the real rate or a clear error, never a silently wrong number.",
      },
    ],
  },
  {
    slug: "fullbag-transport",
    name: "FullBag transport app",
    oneLine:
      "A React Native driver app that shares a school vehicle's live location with school admins and parents, and records student attendance by QR code.",
    role: "Sole developer",
    solo: true,
    highlights: [
      "Every position is saved on the phone first, so nothing is lost without signal",
      "One app for every school, signed in with a school code",
      "QR code student attendance on the vehicle",
    ],
    facts: [
      { label: "Role", value: "Sole developer. I designed and built the whole app." },
      { label: "Timeline", value: "July 2026 – August 2026" },
      { label: "Platform", value: "Android app for drivers, part of FullBagERP. Private, not on public app stores." },
      { label: "Stack", value: "React Native, Expo, TypeScript, Expo Router, Zustand, SQLite, Leaflet with OpenStreetMap" },
    ],
    problem: [
      "Schools in Nepal run their own buses and vans. School admins need to know where every vehicle is, and parents want to know where their child's bus is without phoning the driver.",
      "The driver app shares the vehicle's position with FullBagERP while the driver is on a route, and records which students are on board.",
    ],
    features: [
      { title: "Sign in with a school code", text: "One app serves every school. The driver enters their school's code once, and it's stored in the phone's keychain." },
      { title: "My buses", text: "Drivers only see the buses they are rostered on in the school's transport timetable." },
      { title: "Drive", text: "A map and a Start/Stop button. While driving, the app records the position every 30 seconds and keeps the screen awake." },
      { title: "QR code attendance", text: "Student attendance on the vehicle is recorded by QR code, so the school and parents know who is on board." },
      { title: "Live view in FullBagERP", text: "School admins see every vehicle. Parents see only the bus their own child is assigned to." },
    ],
    shots: [],
    myPart: [
      "I built the whole app on my own: the screens, sign-in and session handling, the location tracker, the offline queue, the map, the QR attendance, and the Android release build with EAS.",
      "On the ERP side I built the live tracking endpoints the app reports to, and the parents' view of their child's bus.",
    ],
    commits: [
      { date: "2026-07-21", subject: "Add FullBag ERP Driver App" },
      { date: "2026-07-24", subject: "feat: multi-school login, offline location queue, keep screen awake" },
      { date: "2026-08-06", subject: "build: add EAS build config and signing setup" },
    ],
    howItWorks: [
      "Every 30 seconds the app reads a high-accuracy GPS fix and writes it to a SQLite table on the phone before trying to send anything.",
      "It then uploads waiting positions to the FullBagERP API in batches of up to 200, grouped by bus, with the school code in an X-Tenant-ID header and the driver's token from the phone's keychain.",
      "The API checks that the driver is rostered on that bus and has permission to report its location, then stores the position in that school's database. The admin map and the parents' map read from there.",
    ],
    decisions: [
      {
        title: "No position lost when the signal drops",
        problem: "Mobile signal drops on the road. If the app only sent positions live, every dead zone would leave a gap in the route.",
        choice: "Every fix goes into an on-device SQLite outbox first. The uploader sends batches in order and stops at the first failure, leaving the rest queued for the next try. Each position carries a client ID, and a unique index on bus and client ID means a retried batch is never stored twice.",
        why: "The phone keeps every position until the server has it. A long outage is capped at the newest 5,000 positions, more than a full day of driving.",
      },
      {
        title: "One app for every school",
        problem: "FullBagERP gives each school its own database, and building a separate app per school would not scale.",
        choice: "The driver enters a school code at sign-in. It is stored in the device keychain and sent as X-Tenant-ID on every request, the same header the web app uses.",
        why: "One build works for every school, and the server routes each request to the right school's database.",
      },
      {
        title: "Positions never sent under the wrong driver",
        problem: "If one driver signs out and another signs in on the same phone, positions still queued from the first must not upload under the second driver's account.",
        choice: "Signing out clears the outbox. The server only accepts positions for buses the driver is rostered on, with a dedicated permission for reporting location.",
        why: "Each position is tied to the person who was actually driving.",
      },
      {
        title: "A stopped tracker that stays stopped",
        problem: "Stopping and starting a drive quickly could leave an old timer still running, posting positions for the previous session.",
        choice: "Every start bumps a generation number. Each tick checks it before reading GPS and again before reporting, and quits if a newer run has started.",
        why: "Only one tracking loop can ever be live, without needing locks.",
      },
    ],
  },
];

export const workBySlug = (slug: string) => work.find((w) => w.slug === slug);
