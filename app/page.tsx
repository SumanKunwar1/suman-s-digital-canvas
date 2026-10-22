import Link from "next/link";
import { CopyEmail, RomeTime } from "@/components/Bits";
import { Header, Footer } from "@/components/Chrome";
import { ExternalIcon, NewTabNote, domainOf, newTab } from "@/components/External";
import { Screenshot } from "@/components/Screenshot";
import { Workbench } from "@/components/Workbench";
import {
  about,
  featuredSites,
  sideProjects,
  certification,
  clientSites,
  earlier,
  education,
  experience,
  intro,
  languages,
  person,
  site,
  skills,
} from "@/content/site";
import { work } from "@/content/work";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: site.url,
  jobTitle: person.role,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Rome", addressCountry: "IT" },
  affiliation: { "@type": "CollegeOrUniversity", name: "Sapienza University of Rome" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Asia Pacific University of Technology & Innovation" },
  knowsLanguage: ["ne", "hi", "en", "it"],
  sameAs: [person.github, person.linkedin],
};

const glance = [
  { label: "Now", value: "MSc Computer Science – Informatica, Sapienza University of Rome" },
  { label: "Most recently", value: "Full stack developer at Virgu Technology, Mar – Oct 2026" },
  { label: "Experience", value: "2.5+ years as a developer, 5+ years in digital products" },
  { label: "Available", value: "Part-time, up to 20 hours a week. No visa sponsorship needed." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header dark />
      <main id="main">
        <section className="hero" aria-labelledby="name">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="name">
                <span className="visually-hidden">{person.name}: </span>
                <span className="hero-statement">{intro.lead.replace("I'm a full stack developer. ", "")}</span>
              </h1>
              {intro.body.map((p) => (
                <p key={p} className="hero-body">
                  {p}
                </p>
              ))}
              <div className="actions">
                <a className="button primary" href="#work">
                  See my work
                </a>
                <a className="button light" href={site.cvPdf} download>
                  Download CV (PDF)
                </a>
                <a className="button text-light" href={`mailto:${person.email}`}>
                  Email me
                </a>
              </div>
              <p className="hero-meta">
                Based in {person.location}
                <RomeTime />
              </p>
            </div>
            <div className="hero-bench">
              <Workbench />
              <p className="bench-caption">
                Small working versions of real features from my products. The data is made up.
              </p>
            </div>
          </div>
        </section>

        <section className="glance" aria-label="At a glance">
          <dl className="wrap glance-grid">
            {glance.map((g) => (
              <div key={g.label}>
                <dt>{g.label}</dt>
                <dd>{g.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="wrap block" aria-labelledby="work-title">
          <div className="block-head">
            <h2 id="work-title">Selected work</h2>
            <p>Three products I built at Virgu Technology. The code is private; I&apos;m happy to walk through it in an interview.</p>
          </div>
          <div className="products">
            {work.map((w) => (
              <article key={w.slug} className={w.solo ? "product solo" : "product"}>
                <div className="product-copy">
                  <p className={w.solo ? "role-tag solo" : "role-tag"}>{w.role}</p>
                  <h3>
                    <Link href={`/work/${w.slug}/`}>{w.name}</Link>
                  </h3>
                  <p className="product-line">{w.oneLine}</p>
                  <ul className="bullets">
                    {w.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <Link className="button dark" href={`/work/${w.slug}/`}>
                    Read the case study
                  </Link>
                </div>
                {w.shots.length > 0 && (
                  <div className="product-shot">
                    <Screenshot shot={w.shots[0]} sizes="(min-width: 1248px) 1150px, 92vw" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="wrap block" aria-labelledby="sites-title">
          <div className="block-head">
            <h2 id="sites-title">Websites</h2>
            <p>Live sites I built for businesses in Nepal and abroad.</p>
          </div>
          <div className="sites">
            {featuredSites.map((f) => (
              <article key={f.name} className="site">
                <a className="site-shot" href={f.url} tabIndex={-1} aria-hidden="true" {...newTab}>
                  <Screenshot shot={{ ...f.shot, alt: "" }} sizes="(min-width: 960px) 380px, 92vw" />
                </a>
                <h3>
                  <a href={f.url} {...newTab}>
                    {f.name}
                    <ExternalIcon />
                    <NewTabNote />
                  </a>
                </h3>
                <p className="site-domain">{domainOf(f.url)}</p>
                <p>{f.text}</p>
                {f.stack && <p className="side-stack">Built with {f.stack}</p>}
              </article>
            ))}
          </div>
          <div className="more-sites">
            <h3>More websites</h3>
            <ul>
              {clientSites.map((c) => (
                <li key={c.name}>
                  <a href={c.url} {...newTab}>
                    <span className="tile-top">
                      <strong>{c.name}</strong>
                      <ExternalIcon />
                    </span>
                    <span className="tile-domain">{domainOf(c.url)}</span>
                    <span className="tile-text">{c.text}</span>
                    <NewTabNote />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap block" aria-labelledby="projects-title">
          <div className="block-head">
            <h2 id="projects-title">Personal projects</h2>
            <p>Built on my own. The code is public on GitHub.</p>
          </div>
          <div className="side-projects">
            {sideProjects.map((p) => (
              <article key={p.name} className="side-project">
                <h3>{p.name}</h3>
                <p className="side-text">{p.text}</p>
                <ul className="bullets">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="side-stack">{p.stack}</p>
                <a className="button dark" href={p.url} {...newTab}>
                  View on GitHub
                  <NewTabNote />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap block" aria-labelledby="experience-title">
          <div className="block-head">
            <h2 id="experience-title">Experience</h2>
          </div>
          <ol className="jobs">
            {experience.map((j) => (
              <li key={j.org} className="job">
                <p className="job-when">
                  {j.start} – {j.end}
                </p>
                <div>
                  <h3>
                    {j.title}, {j.org}
                  </h3>
                  <p className="job-where">{j.place}</p>
                  <ul className="bullets">
                    {j.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li className="job">
              <p className="job-when">{earlier.span}</p>
              <div>
                <h3>{earlier.heading}</h3>
                <p className="job-where">
                  {earlier.roles.map((r) => `${r.title}, ${r.org} (${r.start} – ${r.end})`).join(". ")}.
                </p>
                <p className="job-note">{earlier.note}</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="wrap block" aria-labelledby="education-title">
          <div className="block-head">
            <h2 id="education-title">Education and languages</h2>
          </div>
          <ol className="jobs">
            {education.map((e) => (
              <li key={e.degree} className="job">
                <p className="job-when">{e.span}</p>
                <div>
                  <h3>{e.degree}</h3>
                  <p className="job-where">
                    {e.school}. {e.detail}.
                  </p>
                  {e.lines.map((l) => (
                    <p key={l} className="job-note">
                      {l}
                    </p>
                  ))}
                </div>
              </li>
            ))}
            <li className="job">
              <p className="job-when">{certification.year}</p>
              <div>
                <h3>{certification.name}</h3>
              </div>
            </li>
            <li className="job">
              <p className="job-when">Languages</p>
              <dl className="pairs">
                {languages.map((l) => (
                  <div key={l.name}>
                    <dt>{l.name}</dt>
                    <dd>{l.level}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ol>
        </section>

        <section className="wrap block" aria-labelledby="skills-title">
          <div className="block-head">
            <h2 id="skills-title">Skills</h2>
          </div>
          <dl className="pairs skills">
            {skills.map((k) => (
              <div key={k.group}>
                <dt>{k.group}</dt>
                <dd>{k.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="about" className="wrap block about" aria-labelledby="about-title">
          <div className="block-head">
            <h2 id="about-title">About</h2>
          </div>
          <div className="about-text">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title">Hiring in Rome, or remote in Italy?</h2>
            <p className="contact-lead">The quickest way to reach me is email. References from Virgu Technology are available on request.</p>
            <p className="contact-email">
              <a href={`mailto:${person.email}`}>{person.email}</a>
              <CopyEmail email={person.email} />
            </p>
            <ul className="contact-more">
              <li>
                <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
              </li>
              <li>
                <a href={person.github} {...newTab}>
                  GitHub
                  <NewTabNote />
                </a>
              </li>
              <li>
                <a href={person.linkedin} {...newTab}>
                  LinkedIn
                  <NewTabNote />
                </a>
              </li>
              <li>
                <a href={site.cvPdf} download>
                  Download CV (PDF)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
