import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/Chrome";
import { AccountingDiagram, ErpDiagram, TransportDiagram } from "@/components/Diagram";
import { Screenshot } from "@/components/Screenshot";
import { person } from "@/content/site";
import { work, workBySlug } from "@/content/work";

const diagrams: Record<string, () => React.JSX.Element> = {
  "fullbag-erp": ErpDiagram,
  "fullbag-accounting": AccountingDiagram,
  "fullbag-transport": TransportDiagram,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const w = workBySlug((await params).slug);
  if (!w) return {};
  const path = `/work/${w.slug}/`;
  return {
    title: `${w.name} case study`,
    description: w.oneLine,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${w.name} case study · ${person.name}`, description: w.oneLine },
  };
}

const shortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default async function CaseStudyPage({ params }: Props) {
  const w = workBySlug((await params).slug);
  if (!w) notFound();
  const Diagram = diagrams[w.slug];
  const next = work[(work.indexOf(w) + 1) % work.length];
  const phones = w.shots.filter((s) => s.phone);
  const screens = w.shots.filter((s) => !s.phone);

  return (
    <>
      <Header dark />
      <main id="main">
        <div className="case-hero">
          <div className="wrap">
            <Link className="back" href="/#work">
              All work
            </Link>
            <h1>{w.name}</h1>
            <p className="summary">{w.oneLine}</p>
            <p className={w.solo ? "role-tag solo" : "role-tag"}>{w.solo ? "Built alone, start to finish" : w.role}</p>
            <dl className="facts">
              {w.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="wrap">
          <section className="case-section" aria-labelledby="problem">
            <h2 id="problem">The problem</h2>
            <div className="prose">
              {w.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section className="case-section" aria-labelledby="features">
            <h2 id="features">What it does</h2>
            <div>
              <ul className="features">
                {w.features.map((f) => (
                  <li key={f.title}>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </li>
                ))}
              </ul>
              {w.shots.length > 0 && (
                <div className="gallery">
                  {phones.length > 0 && (
                    <div className="phones">
                      {phones.map((s) => (
                        <Screenshot key={s.src} shot={s} />
                      ))}
                    </div>
                  )}
                  {screens.map((s, i) => (
                    <Screenshot key={s.src} shot={s} eager={i === 0 && phones.length === 0} />
                  ))}
                  <p className="muted small">School, staff and student names are removed from these screenshots.</p>
                </div>
              )}
            </div>
          </section>

          {w.myPart && (
          <section className="case-section" aria-labelledby="my-part">
            <h2 id="my-part">My part</h2>
            <div>
              <ul className="bullets">
                {w.myPart.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <ul className="commit-quotes" aria-label="Some of my commits">
                {w.commits?.map((c) => (
                  <li key={c.subject}>
                    <time dateTime={c.date}>{shortDate(c.date)}</time>
                    {c.subject}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          )}

          <section className="case-section" aria-labelledby="how">
            <h2 id="how">How it works</h2>
            <div>
              <div className="prose">
                {w.howItWorks.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Diagram />
            </div>
          </section>

          <section className="case-section" aria-labelledby="decisions">
            <h2 id="decisions">Hard problems and decisions</h2>
            <ol className="decisions">
              {w.decisions.map((d) => (
                <li key={d.title}>
                  <h3>{d.title}</h3>
                  <dl>
                    <div>
                      <dt>Problem</dt>
                      <dd>{d.problem}</dd>
                    </div>
                    <div>
                      <dt>What I chose</dt>
                      <dd>{d.choice}</dd>
                    </div>
                    <div>
                      <dt>Why</dt>
                      <dd>{d.why}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          </section>

          <nav className="next-case" aria-label="Next case study">
            <Link href={`/work/${next.slug}/`}>
              <span>Next case study</span>
              <strong>{next.name}</strong>
            </Link>
            <p className="case-note">The source code is private. I&apos;m happy to walk through it in an interview.</p>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
