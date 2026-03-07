import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

// Real website screenshots via thum.io free screenshot API
const SHOT = (url: string) =>
  `https://image.thum.io/get/width/600/crop/380/noanimate/${url}`;

const projects = [
  {
    title: "Constellation Cooperative",
    url: "https://constellationcooperative.com/",
    screenshot: SHOT("https://constellationcooperative.com/"),
    description:
      "A professional cooperative organization website presenting the company's services, initiatives, and organizational structure with a modern digital presence.",
    category: "Corporate Website",
    tags: ["React", "Node.js", "CMS"],
    color: "gold",
  },
  {
    title: "OM Sounds",
    url: "https://omsounds.com/",
    screenshot: SHOT("https://omsounds.com/"),
    description:
      "An e-commerce platform for authentic Nepali hand-hammered singing bowls worldwide — blending portfolio storytelling with a full online store.",
    category: "E-commerce + Portfolio",
    tags: ["MERN", "Stripe", "MongoDB"],
    color: "warm",
  },
  {
    title: "Pure Land Hospitality",
    url: "https://purelandhospitality.com.np/",
    screenshot: SHOT("https://purelandhospitality.com.np/"),
    description:
      "A professional hospitality website showcasing services, accommodations, and experiences.",
    category: "Company Website",
    tags: ["React", "CMS", "Tailwind"],
    color: "gold",
  },
  {
    title: "NgYungNe Retreat",
    url: "https://ngyungne.org/",
    screenshot: SHOT("https://ngyungne.org/"),
    description:
      "A retreat website with spiritual programs, schedules, teachings, and online registration.",
    category: "Organization Website",
    tags: ["React", "Calendar", "Forms"],
    color: "warm",
  },
  {
    title: "Pure Land Travels",
    url: "https://purelandtravels.com.np/",
    screenshot: SHOT("https://purelandtravels.com.np/"),
    description:
      "A travel agency website presenting tours, travel packages, and services for tourists exploring Nepal.",
    category: "Travel Website",
    tags: ["Next.js", "Booking", "Maps"],
    color: "gold",
  },
  {
    title: "Trinity Waterproofing",
    url: "https://www.trinitywaterproofing.com.np/",
    screenshot: SHOT("https://www.trinitywaterproofing.com.np/"),
    description:
      "Business portfolio with service listings and information for a waterproofing and construction solutions company.",
    category: "Business Portfolio",
    tags: ["React", "SEO", "Tailwind"],
    color: "warm",
  },
  {
    title: "RASS Engineering",
    url: "https://rassengineering.com.np/",
    screenshot: SHOT("https://rassengineering.com.np/"),
    description:
      "A professional engineering company website highlighting services, projects, and corporate information.",
    category: "Company Portfolio",
    tags: ["React", "Node.js", "CMS"],
    color: "gold",
  },
  {
    title: "WAS Media Marketing",
    url: "https://wasmediamarketing.com/",
    screenshot: SHOT("https://wasmediamarketing.com/"),
    description:
      "A digital marketing agency website presenting services, portfolio, and business capabilities.",
    category: "Agency Portfolio",
    tags: ["MERN", "Analytics", "CMS"],
    color: "warm",
  },
  {
    title: "SNS Tech",
    url: "https://snstech.co",
    screenshot: SHOT("https://snstech.co"),
    description:
      "A technology company website presenting IT services, solutions, and digital innovation capabilities.",
    category: "Tech Company",
    tags: ["React", "TypeScript", "AWS"],
    color: "gold",
  },
  {
    title: "Rooted In Sound",
    url: "https://www.rootedinsound.com/",
    screenshot: SHOT("https://www.rootedinsound.com/"),
    description:
      "A sound healing website focused on singing bowls and spiritual sound practices.",
    category: "Wellness Website",
    tags: ["React", "CMS", "Tailwind"],
    color: "warm",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isGold = project.color === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isGold ? "glass-card-gold" : "glass-card-blue"
      } ${hovered ? "scale-[1.03] -translate-y-1.5 shadow-glow-gold" : ""}`}
    >
      {/* ── Screenshot thumbnail ── */}
      <div className="relative h-44 overflow-hidden bg-background-card">
        {/* Actual screenshot */}
        {!imgError ? (
          <img
            src={project.screenshot}
            alt={`${project.title} homepage screenshot`}
            onError={() => setImgError(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-700 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          /* Fallback if screenshot fails */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background-glass to-background-card">
            <Globe className="w-10 h-10 text-primary/40" />
          </div>
        )}

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
              isGold
                ? "bg-accent text-accent-foreground shadow-gold"
                : "bg-primary text-primary-foreground shadow-blue"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-4 h-4" />
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Category badge pinned top-right */}
        <span
          className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold backdrop-blur-md ${
            isGold
              ? "bg-accent/20 text-accent-glow border border-accent/30"
              : "bg-primary/20 text-primary-glow border border-primary/25"
          }`}
        >
          {project.category}
        </span>
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-foreground mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            — Portfolio —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Production websites and platforms built for real clients across diverse industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
