// Everything Suman might need to update lives here: contact details, availability,
// experience, education, skills. Case studies are in work.ts.

export const site = {
  url: "https://sumankunwar.info.np",
  title: "Suman Kunwar · Full Stack Developer",
  description:
    "Full stack developer who built school management and accounting software used in Nepal. MSc Computer Science student at Sapienza University of Rome, open to part-time developer roles in Italy.",
  cvPdf: "/suman-kunwar-cv.pdf",
};

export const person = {
  name: "Suman Kunwar",
  role: "Full Stack Developer",
  location: "Rome, Italy",
  email: "sumankunwar755@gmail.com",
  phone: "+977 9767864470",
  github: "https://github.com/SumanKunwar1",
  linkedin: "https://www.linkedin.com/in/suman-kunwar-204286227/",
};

export const intro = {
  lead: "I'm a full stack developer. I build software that schools and businesses in Nepal use every day.",
  body: [
    "At Virgu Technology I worked on FullBagERP and FullBagAccounting as one of the company's first developers, and I built the FullBag transport app on my own. I'm now in Rome, studying for a master's in Computer Science at Sapienza University.",
  ],
  availability: "I'm looking for part-time developer work in Italy, up to 20 hours a week. No visa sponsorship needed.",
};

export const availability = [
  "Part-time developer roles in Italy, up to 20 hours a week during my studies",
  "Internships and working-student positions",
  "Full-time roles after I graduate in 2028",
  "No visa sponsorship needed for part-time work during my studies",
];

export type Featured = {
  name: string;
  url: string;
  text: string;
  stack?: string;
  shot: { src: string; width: number; height: number; alt: string };
};

// The websites Suman wants emphasised, each with a screenshot of the live homepage (taken 2026-10-22).
export const featuredSites: Featured[] = [
  {
    name: "Pure Land Tours & Travels",
    url: "https://purelandtravels.com.np/",
    text: "A booking site for a tour operator covering Nepal, Tibet, Bhutan and India: trip search, Nepal and international trips, deals, combo trips, retreats, trips payable in instalments, customer accounts and a separate login for travel agents.",
    shot: {
      src: "/shots/site-purelandtravels",
      width: 1440,
      height: 900,
      alt: "Pure Land Tours & Travels homepage with trip search, menus for EMI, international and Nepal trips, deals and retreats, and a banner for a Bhutan pilgrimage package.",
    },
  },
  {
    name: "OM Sounds",
    url: "https://omsounds.com/",
    text: "An online store selling hand-hammered Nepali singing bowls to customers worldwide, with a shop, cart, customer accounts and pages about sound healing.",
    shot: {
      src: "/shots/site-omsounds",
      width: 1440,
      height: 900,
      alt: "OM Sounds homepage: a dark hero with a singing bowl, the line “Crafted in Nepal. Heard Around the World.” and a button to shop singing bowls.",
    },
  },
  {
    name: "virgutech.com",
    url: "https://virgutech.com/",
    text: "Virgu Technology's company website, with product pages for FullBagERP and FullBagAccounting, a blog, and demo and sales request forms.",
    stack: "Next.js",
    shot: {
      src: "/shots/site-virgutech",
      width: 1440,
      height: 900,
      alt: "Virgu Technology homepage: the headline “Software that runs your accounts” beside a mock-up of the FullBagERP dashboard, with buttons to book a demo and explore the products.",
    },
  },
];

// Every other site from the previous portfolio. Some were unreachable on 2026-10-22
// (Pure Land Hospitality, Constellation Cooperative, W.A.S. Media, and FBH Nepal's expired
// certificate); Suman asked to keep them listed and will fix them.
export const clientSites: { name: string; url: string; text: string }[] = [
  { name: "FBH Nepal", url: "https://fbhnepal.com/", text: "Trade show site, top Google result in Nepal for “exhibition in Nepal”" },
  { name: "Pure Land Hospitality", url: "https://purelandhospitality.com.np/", text: "Hospitality services, accommodation and experiences" },
  { name: "Padmasambhava Trip", url: "https://padmasambhavatrip.com/", text: "Pilgrimage and cultural trips" },
  { name: "NgYungNe Retreat", url: "https://ngyungne.org/", text: "Retreat programmes, schedules and registration" },
  { name: "Rooted In Sound", url: "https://www.rootedinsound.com/", text: "Sound healing and singing bowls" },
  { name: "Dharma Ideal", url: "https://www.dharmaideal.org/", text: "Teachings and community for a spiritual organisation" },
  { name: "Constellation Cooperative", url: "https://constellationcooperative.com/", text: "Services and initiatives of a cooperative" },
  { name: "Trinity Waterproofing", url: "https://www.trinitywaterproofing.com.np/", text: "Services for a waterproofing company" },
  { name: "RASS Engineering", url: "https://rassengineering.com.np/", text: "Services and projects for an engineering firm" },
  { name: "SNS Tech", url: "https://snstech.co", text: "IT services company" },
  { name: "W.A.S. Media Marketing", url: "https://wasmediamarketing.com/", text: "Digital marketing agency" },
];

export type SideProject = { name: string; url: string; short: string; text: string; points: string[]; stack: string };

// Personal projects on GitHub. Facts from each repository (README, package.json, requirements.txt).
export const sideProjects: SideProject[] = [
  {
    name: "CollegeEase",
    url: "https://github.com/SumanKunwar1/CollegeEase",
    short: "a student hub built with Next.js, Express and MongoDB",
    text: "A student hub for choosing and getting into college, and for what comes after.",
    points: [
      "College search and side-by-side comparison, college details and virtual tours",
      "Applications, scholarships and scholarship applications",
      "Mentor profiles, one-to-one bookings and paid group sessions with PayPal",
      "Jobs, job-market analysis, industry trends, skill development and a resource library",
      "An admin area for colleges, blog posts, success stories and FAQs",
    ],
    stack: "TypeScript, Next.js, React, Tailwind CSS, Node.js, Express, MongoDB, Redis, PayPal",
  },
  {
    name: "ChurnIQ",
    url: "https://github.com/SumanKunwar1/Customer-churn-analysis",
    short: "churn prediction with XGBoost, SHAP and a Streamlit dashboard",
    text: "A churn prediction system for the IBM Telco dataset (7,043 customers): it predicts who will leave, explains why, and shows the result in a dashboard.",
    points: [
      "20+ engineered features and KMeans customer segments",
      "XGBoost and LightGBM tuned with Optuna, SMOTE for class imbalance, stratified 5-fold cross-validation",
      "About 0.84 ROC-AUC on the test set, against 0.74 for the logistic regression baseline",
      "SHAP explanations for every customer, MLflow experiment tracking, and a Streamlit dashboard",
    ],
    stack: "Python, pandas, scikit-learn, XGBoost, LightGBM, Optuna, SHAP, MLflow, Streamlit, pytest",
  },
];

export type Job = {
  title: string;
  org: string;
  place: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Job[] = [
  {
    title: "Full Stack Developer",
    org: "Virgu Technology",
    place: "Kathmandu (remote)",
    start: "Mar 2026",
    end: "Oct 2026",
    points: [
      "One of the first developers hired, working on FullBagERP (school management) and FullBagAccounting (cloud accounting) from their early versions as the team grew to about 15 people.",
      "In FullBagERP I built the transport module (routes, stops, student assignment, live vehicle tracking and the parents' view), the online admission form, curriculum and unit planning, staff management, role-based permissions and dashboards.",
      "In FullBagAccounting I built master data, Nepal Rastra Bank exchange rates, voucher numbering by Nepali financial year, and the Cash/Bank, Journal and Debit/Credit Note screens.",
      "Built the FullBag transport app alone in React Native: live vehicle location for school admins and parents, an offline queue so no position is lost when signal drops, and QR code student attendance.",
      "Worked on the products' infrastructure: PostgreSQL, Redis, Docker, and CI/CD with GitHub Actions.",
      "Built the company website, virgutech.com.",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "W.A.S. Media Marketing",
    place: "Kathmandu",
    start: "Oct 2024",
    end: "Feb 2026",
    points: [
      "Built and deployed websites and web applications for the agency's clients, with primary sites hosted on Hostinger and AWS used for specific services.",
      "Built and optimised the FBH Nepal exhibition website, which reached the top Google result in Nepal for searches like “food and beverage exhibition in Nepal” and “upcoming exhibition”.",
      "Built REST APIs and MERN-stack applications for client projects.",
    ],
  },
  {
    title: "Web Developer",
    org: "House of Rajkarnicar",
    place: "Kathmandu",
    start: "Mar 2024",
    end: "Oct 2024",
    points: [
      "Built and maintained event and brand websites, including social media integrations.",
      "Improved search visibility with technical SEO.",
    ],
  },
];

export const earlier = {
  heading: "Before that: digital products and marketing",
  span: "2021 – 2024",
  roles: [
    { title: "Product Head / Digital Marketer", org: "Socheko.com", start: "Jul 2021", end: "Oct 2023" },
    { title: "Digital Marketer & E-commerce Officer", org: "MastaKala.com", start: "Dec 2023", end: "Mar 2024" },
  ],
  note: "I ran e-commerce operations and digital marketing and led a small team. It's where I learned how online products actually make money.",
};

export const education = [
  {
    degree: "MSc in Computer Science – Informatica",
    detail: "Laurea Magistrale, LM-18",
    school: "Sapienza University of Rome",
    span: "2026 – 2028",
    lines: ["Taught in English."],
  },
  {
    degree: "BSc (Hons) Information Technology",
    detail: "Awarded by Asia Pacific University of Technology & Innovation (APU), Malaysia",
    school: "Studied at Lord Buddha Education Foundation, Kathmandu",
    span: "2022 – 2025",
    lines: [
      "Second Class Honours (First Division). CGPA 3.46 / 4.00, final semester GPA 3.90.",
      "Relevant modules: Advanced Database Systems, Designing and Developing Applications on the Cloud, Cloud Infrastructure and Services, Distributed Computer Systems, Object-Oriented Development with Java, Web Applications, Programming for Data Analysis, Probability and Statistical Modelling, System and Network Administration, final-year IT Project.",
      "Two industry internships completed as part of the degree.",
    ],
  },
];

export const certification = { name: "AWS Certified Cloud Practitioner", year: "2025" };

export const languages = [
  { name: "Nepali", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "C1 (IELTS Academic 7.0, January 2026)" },
  { name: "Italian", level: "Beginner, currently learning" },
];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, SQL" },
  { group: "Frontend", items: "React, Next.js, Vue.js, HTML, CSS, Tailwind CSS" },
  { group: "Mobile", items: "React Native, Expo, Leaflet maps, on-device SQLite" },
  { group: "Backend", items: "Node.js, Express, Prisma, Flask, REST APIs, BullMQ job queues" },
  { group: "Databases", items: "PostgreSQL, MongoDB, MySQL, Redis" },
  { group: "Cloud and DevOps", items: "AWS (EC2, S3), Docker, GitHub Actions, Git" },
  { group: "Data and ML", items: "pandas, NumPy, scikit-learn, XGBoost, LightGBM, SHAP, MLflow, Streamlit" },
];

export const about = [
  "I grew up in Nepal and spent six years of my childhood in India. I started in tech on the business side, running e-commerce and digital marketing for online stores, and the more I worked with the software behind them, the more I wanted to build it myself. Since 2024 I've worked as a developer, and the software I helped build now runs attendance, exams, fees and accounts for schools and businesses in Nepal.",
  "In Rome I'm studying for my master's at Sapienza and looking for a team where I can keep building useful products part-time while I study.",
];
