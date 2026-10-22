import type { Metadata } from "next";
import Link from "next/link";
import {
  certification,
  earlier,
  education,
  experience,
  languages,
  person,
  site,
  skills,
  availability,
  clientSites,
  featuredSites,
  sideProjects,
} from "@/content/site";
import { work } from "@/content/work";
import { newTab } from "@/components/External";
import s from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${person.name}, full stack developer in Rome.`,
  alternates: { canonical: "/cv/" },
};

const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function CV() {
  return (
    <main className={s.page}>
      <p className={s.toolbar}>
        <Link href="/">Back to the site</Link>
        <a href={site.cvPdf} download>
          Download CV (PDF)
        </a>
      </p>

      <header className={s.head}>
        <h1>{person.name}</h1>
        <p className={s.role}>{person.role}</p>
        <ul className={s.contact}>
          <li>{person.location}</li>
          <li><a href={`mailto:${person.email}`}>{person.email}</a></li>
          <li>{person.phone}</li>
          <li><a href={person.github} {...newTab}>{host(person.github)}</a></li>
          <li><a href={person.linkedin} {...newTab}>{host(person.linkedin)}</a></li>
          <li><a href={site.url}>{host(site.url)}</a></li>
        </ul>
      </header>

      <section className={s.block}>
        <h2>Profile</h2>
        <div>
          <p>
            Full stack developer with 2.5+ years building production software and 5+ years in digital products. At
            Virgu Technology I worked on FullBagERP (school management) and FullBagAccounting (cloud accounting) as one
            of the first developers, and built the FullBag transport app on my own. Now studying for an MSc in Computer
            Science at Sapienza University of Rome.
          </p>
          <p className={s.avail}>{availability.join(". ")}.</p>
        </div>
      </section>

      <section className={s.block}>
        <h2>Experience</h2>
        <div>
          {experience.map((j) => (
            <article key={j.org} className={s.entry}>
              <h3>
                {j.title}, {j.org}
                <span>{j.start} – {j.end}</span>
              </h3>
              <p className={s.where}>{j.place}</p>
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className={s.entry}>
            <h3>
              {earlier.heading}
              <span>{earlier.span}</span>
            </h3>
            <p>
              {earlier.roles.map((r) => `${r.title}, ${r.org} (${r.start} – ${r.end})`).join("; ")}.
            </p>
          </article>
        </div>
      </section>

      <section className={s.block}>
        <h2>Products</h2>
        <div>
          {work.map((w) => (
            <p key={w.slug} className={s.product}>
              <strong>{w.name}</strong> ({w.role.toLowerCase()}). {w.oneLine}{" "}
              <a href={`${site.url}/work/${w.slug}/`}>Case study</a>
            </p>
          ))}
          <p className={s.product}>
            <strong>Personal projects:</strong> {sideProjects.map((p) => `${p.name}, ${p.short}`).join("; ")}.
          </p>
          <p className={s.product}>
            <strong>Websites:</strong> {featuredSites.map((f) => f.name).join(", ")}, and {clientSites.length} more for businesses in Nepal and abroad.
          </p>
        </div>
      </section>

      <section className={s.block}>
        <h2>Education</h2>
        <div>
          {education.map((e) => (
            <article key={e.degree} className={s.entry}>
              <h3>
                {e.degree}
                <span>{e.span}</span>
              </h3>
              <p className={s.where}>
                {e.school}. {e.detail}.
              </p>
              {e.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </article>
          ))}
          <p>
            {certification.name}, {certification.year}
          </p>
        </div>
      </section>

      <section className={s.block}>
        <h2>Skills</h2>
        <dl className={s.defs}>
          {skills.map((k) => (
            <div key={k.group}>
              <dt>{k.group}</dt>
              <dd>{k.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={s.block}>
        <h2>Languages</h2>
        <dl className={s.defs}>
          {languages.map((l) => (
            <div key={l.name}>
              <dt>{l.name}</dt>
              <dd>{l.level}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className={s.refs}>References from Virgu Technology are available on request.</p>
    </main>
  );
}
