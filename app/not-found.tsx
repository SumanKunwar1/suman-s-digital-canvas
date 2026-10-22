import Link from "next/link";
import { Header, Footer } from "@/components/Chrome";
import { person } from "@/content/site";
import { work } from "@/content/work";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap">
        <div className="notfound">
          <h1>There&apos;s no page at this address.</h1>
          <p style={{ marginTop: "1rem" }}>It may have moved when I rebuilt the site. These are the pages that exist:</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            {work.map((w) => (
              <li key={w.slug}>
                <Link href={`/work/${w.slug}/`}>{w.name} case study</Link>
              </li>
            ))}
            <li><Link href="/cv/">CV</Link></li>
            <li><a href={`mailto:${person.email}`}>Email me</a></li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
