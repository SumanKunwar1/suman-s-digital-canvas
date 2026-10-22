import Link from "next/link";
import { NewTabNote, newTab } from "@/components/External";
import { NavLinks } from "@/components/NavLinks";
import { person, site } from "@/content/site";

export function Header({ dark = false }: { dark?: boolean }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={dark ? "site-header dark" : "site-header"}>
        <div className="wrap site-header-row">
          <Link className="home" href="/">
            <span className="home-name">{person.name}</span>
            <span className="home-role">Full stack developer, Rome</span>
          </Link>
          <nav aria-label="Main">
            <NavLinks />
          </nav>
          <a className="header-cv" href={site.cvPdf} download>
            Download CV
          </a>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-row">
        <p>
          {person.name}, {new Date().getFullYear()}
        </p>
        <ul>
          <li><a href={`mailto:${person.email}`}>{person.email}</a></li>
          <li><a href={person.github} {...newTab}>GitHub<NewTabNote /></a></li>
          <li><a href={person.linkedin} {...newTab}>LinkedIn<NewTabNote /></a></li>
        </ul>
      </div>
    </footer>
  );
}
