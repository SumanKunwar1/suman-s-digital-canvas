import { Github, Linkedin, Globe, Code2, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Portfolio" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      <div className="absolute inset-0 grid-dot-bg opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-premium flex items-center justify-center">
              <Code2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">
                Suman Kunwar<span className="text-gradient-gold">.</span>
              </p>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © 2026{" "}
            <span className="text-foreground font-medium">Suman Kunwar</span>
            {" "}—{" "}
            <span className="text-gradient-gold">Full Stack Developer</span>
          </p>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg glass-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 transition-all duration-200 hover:scale-110"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-9 h-9 rounded-lg bg-gradient-premium flex items-center justify-center text-accent-foreground shadow-glow-blue hover:shadow-glow-gold transition-all duration-300 hover:scale-110 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
