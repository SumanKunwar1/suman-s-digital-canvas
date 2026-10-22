# Facts from the codebases

Collected 2026-10-22 from Suman's local checkouts. Only what the code shows. No secrets, internal hostnames or customer names. Items marked **CONFLICT** disagree with BRIEF.md and must be resolved with Suman before they go on the site.

---

## Current portfolio (audit)

- Framework: Vite 5 + React 18 SPA (Lovable template), Tailwind, shadcn/ui, framer-motion — source: package.json
- Rendering: client-only. `index.html` has an empty `<div id="root">`; the live site returns no content without JS.
- Live title is "Suman App"; live build is stale (Last-Modified 7 Mar 2026) — source: response headers of sumankunwar.info.np
- Hosting: nginx 1.28 on Ubuntu (self-managed server), serving static files. No deploy script or CI in the repo — deploy is manual.
- Content: hard-coded inside each component in `src/components/portfolio/*.tsx`.
- Contact form: **fake.** `handleSubmit` only runs `setTimeout(() => setSent(true))`; no message is sent anywhere — source: ContactSection.tsx. → Remove; use email link.
- CV: Google Drive download link — source: HeroSection.tsx. → Replace with PDF generated from `/cv`.
- Client site URLs (from ProjectsSection.tsx), status checked 2026-10-22 from this machine:
  - OM Sounds — https://omsounds.com/ — 200
  - Pure Land Travels — https://purelandtravels.com.np/ — 200
  - Pure Land Hospitality — https://purelandhospitality.com.np/ — **500**
  - Constellation Cooperative — https://constellationcooperative.com/ — **no response**
  - NgYungNe Retreat — https://ngyungne.org/ — 200
  - Trinity Waterproofing — https://www.trinitywaterproofing.com.np/ — 200
  - RASS Engineering — https://rassengineering.com.np/ — 200
  - W.A.S. Media Marketing — https://wasmediamarketing.com/ — **no response**
  - Rooted In Sound — https://www.rootedinsound.com/ — 200
  - SNS Tech — https://snstech.co — 200
  - Padmasambhava Trip — https://padmasambhavatrip.com/ — 200
  - Dharma Ideal — https://www.dharmaideal.org/ — 200
  - FBH Nepal — https://fbhnepal.com/ — **no response** (recheck before launch; may be a network issue here)

## virgutech.com

- Next.js with prerendering, served behind nginx on Ubuntu — source: response headers (`X-Powered-By: Next.js`, `x-nextjs-prerender`). No local repo given, so nothing further confirmed.

---

## FullBagERP (repo: Paramount-Academy)

- Frontend: Next.js (App Router, `client/app`), Tailwind, shadcn/ui — source: client/package.json, client/components.json
- Backend: Node.js, Express 5, Prisma 7 on PostgreSQL — source: backend/package.json
- Multi-tenancy: **database per school**. One central DB plus one physical tenant DB per school; the school is resolved from the subdomain and sent as `x-tenant-id` — source: DEPLOY-PROD-V2.md, prisma.central/tenant configs
- Queues: BullMQ on Redis, with workers for SMS, email, attendance emails, fee emails, provisioning, and a dead-letter queue — source: backend/src/queues/
- Bikram Sambat dates: `bikram-sambat-js` — source: backend/package.json
- Other services used: AWS S3 (uploads), Puppeteer + pdfkit (PDF reports), ExcelJS, Swagger, Prometheus client, Winston + Loki logging — source: backend/package.json
- CI/CD: GitHub Actions builds backend and client Docker images, pushes to GitHub Container Registry, then deploys over SSH with `docker compose pull && up` — source: .github/workflows/prod-v2.yml, staging-v2.yml
- Runtime: Docker Compose (Redis, backend, client) on a server — source: docker-compose.prod.yml
- **RESOLVED — no Kubernetes** (Suman, 2026-10-22). Describe infrastructure as PostgreSQL, Redis, Docker, and CI/CD with GitHub Actions. Never mention Kubernetes.
- Repo history: 2,052 commits; Suman's first 2026-03-26, last 2026-09-30; 467 commits under his email (second-highest of ~8 contributors) — source: git shortlog
- **Suman's areas (from his commits):**
  - Transport module, backend and frontend: buses, routes, stops, student assignment to bus + pickup stop, transport timetable, live vehicle tracking, transport reports (e.g. Route & Crew Schedule) — commits 2026-07-11 → 2026-09-30
  - Admissions: public online admission form (backend + frontend), admission numbers, student migration and reactivation wizard
  - Curriculum setup and tracker, unit planning, tasks and assessments, quiz builder
  - Staff and teacher management, issuing login credentials, password-reset links
  - Role-based access control: enforcing permissions on routes, RBAC seeds
  - Role-based dashboards for leadership, teaching and office staff
  - Management reports: attendance, roster, teacher and staff
  - Moving academics/student/teacher models to the database-per-school design (removing `schoolId` from tenant models)
- Live tracking (ERP side) — source: backend/src/module/transport/tracking/
  - Two position sources: the driver app's ping endpoint, and a third-party GPS tracker feed over WebSocket (`vtsBridge`)
  - One shared rule (`movement.js`): a position is stored only if the vehicle moved ≥ 10 m, so a parked bus costs one row, not one every 30 s
  - Parent map view: the server looks up the parent's own children from their profile and returns only those children's buses; student IDs never come from the client
  - Tests: `movement.test.js`, `vtsBridge.reconcile.test.js`
  - Authors of the tracking module: Suman and one teammate (6 commits each)

## FullBagAccounting (repos: Virgu-Accounting-Backend, Virgu-Accounting-Frontend)

- Backend: TypeScript, Express 5, Prisma 7, PostgreSQL, `decimal.js` for money, `nepali-date-converter` — source: Backend/package.json
- Separate central and tenant Prisma configs (same multi-tenant pattern as ERP) — source: prisma.central.config.ts, prisma.tenant.config.ts
- Frontend: React 19 + Vite, served by nginx in Docker — source: Frontend/package.json, nginx.conf, Dockerfile
- Repo history: backend from 2026-09-13, frontend from 2026-09-15 — Suman committed from the first week (first commits 2026-09-19/20). Backend 22 commits, frontend 38 commits (most of any contributor on the frontend).
- **Suman's areas:**
  - Master data: branches, financial years, currencies, payment terms (backend + frontend)
  - Nepal Rastra Bank exchange rates: reading the official NRB rates, rate board, conversion between any two currencies
  - Voucher numbering per Nepali financial year and voucher type (e.g. `PV-2083/084-0001`), configurable voucher series
  - Cash/Bank voucher entry screen on a reusable entry form, Cash/Bank and Journal registers, draft/void
  - Journal entry screen; Debit/Credit Note entry screen
  - Nepali (BS) date pickers for financial years and exchange rates
  - Report PDF export
  - OpenAPI spec + Swagger UI generated from app manifests
  - Fixed a Prisma connection-pool deadlock under concurrent requests
  - Users and roles screens, per-entity permissions

### Accounting details confirmed in Suman's commits

- Voucher numbers (commit 0599fd6, 1f524a1): format `PV-2083/084-0001` = type, Nepali financial year, 4-digit sequence. The voucher's date picks the financial year (Shrawan 1 to end of Asar); closed years refuse new vouchers. The next number comes from one `INSERT … ON CONFLICT DO UPDATE … RETURNING` inside the voucher's transaction, so two vouchers saved at the same time can't get the same number; a series that runs past its end number is refused with a clear message. Covered by unit, integration and e2e tests. `src/core/nepali-calendar.ts` added in the same commit.
- NRB rates (be9eb7a): calls Nepal Rastra Bank's public forex API; normalises rates NRB quotes per 10 or 100 units to per single unit; NRB answers HTTP 200 even on errors, so the outcome is read from the body (empty → 404, refused/unreachable → 502); rates cached per day for an hour.
- Pool deadlock (b540969): each request held a `pg` connection while its handler also queried through Prisma; on one shared pool, enough parallel requests each held one connection and waited forever for a second. Fix: Prisma gets its own pool per tenant; a startup check enforces the worst-case connection budget; integration test `prisma-pool.int-spec.ts` reproduces it.

### ERP authorship notes

- `movement.js` (store a position only after ≥10 m of movement) was written by a teammate — don't credit it to Suman.
- Parent bus view (`getParentBuses`) and the live tracking endpoints: Suman, commit 2026-07-22 "live vehicle tracking".

## FullBag transport app (repo: VirguTech/FullBag-ERP-Mobile)

- Framework: Expo SDK 54, React Native 0.81, React 19, TypeScript, Expo Router — source: package.json
- State: Zustand; forms: react-hook-form + Zod; styling: NativeWind — source: package.json
- Map: Leaflet + OpenStreetMap inside a WebView — source: src/components/BusMap/
- Location: `expo-location`, high-accuracy fix every 30 s while the Drive screen is open; `expo-keep-awake` keeps the screen on — source: src/location/tracker.ts, constants/tracking.ts
- Offline: every fix goes into an on-device SQLite outbox first (`expo-sqlite`), then uploads in batches of up to 200, grouped by bus. On failure it stops and keeps the queue for the next tick. Queue capped at 5,000 rows (newest kept). Cleared on logout so one driver's pings never upload under the next driver's token. Each ping carries a client ID for de-duplication — source: src/location/queue.ts, tracker.ts
- Auth: token stored in the device keychain (`expo-secure-store`); school code sent as `X-Tenant-ID`, so one build serves every school — source: README.md, src/auth/session.ts
- Access: a driver only sees buses they are rostered on in the timetable, and needs the `TRANSPORT.TRACKING.PUSH_LOCATION` permission (enforced by the backend) — source: README.md
- Release: EAS build config and Android signing set up — source: eas.json, commit a5c32ed
- Repo history: 14 commits, 2026-07-21 → 2026-08-26. 12 by Suman; 2 small refactor commits by a teammate. **Sole developer** (confirmed by Suman, 2026-10-22).
- **RESOLVED — no Firebase** (Suman, 2026-10-22). Real-time path: GPS fix → on-device SQLite outbox → batched HTTPS upload to the ERP API. Never mention Firebase.
- **RESOLVED — QR code attendance** (Suman, 2026-10-22): student attendance on the vehicle is recorded with QR codes. That code is on his office machine, not in this checkout, so describe the outcome only ("records student attendance by QR code"), not internals.
- **RESOLVED — no background tracking** (Suman, 2026-10-22). Tracking runs while the Drive screen is open, with the screen kept awake. Never claim background tracking.

## Commit totals (non-merge, under Suman's two git identities)

- FullBagERP: 420, 2026-03-26 → 2026-09-30. By month: Mar 12, Apr 59, May 65, Jun 107, Jul 62, Aug 85, Sep 30
- FullBagAccounting: 58 (backend 20, frontend 38), 2026-09-19 → 2026-10-15
- Transport app: 9 non-merge (12 including merges), 2026-07-21 → 2026-08-26
- Total: 487 non-merge commits, 2026-03-26 → 2026-10-15
- Admin/parent live view: not in this app; it's in the ERP web app (parent endpoint described above).
