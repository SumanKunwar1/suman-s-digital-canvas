import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Constellation Cooperative",
    url: "https://constellationcooperative.com/",
    description:
      "A professional cooperative organization website designed to present the company's services, initiatives, and organizational structure with a modern and informative digital presence.",
    category: "Corporate Website",
    tags: ["React", "Node.js", "CMS"],
    color: "blue",
    emoji: "🌟",
  },
  {
    title: "OM Sounds",
    url: "https://omsounds.com/",
    description:
      "An e-commerce platform for selling authentic Nepali hand-hammered singing bowls worldwide. Combines portfolio storytelling with a full online store experience.",
    category: "E-commerce + Portfolio",
    tags: ["MERN", "Stripe", "MongoDB"],
    color: "gold",
    emoji: "🔔",
  },
  {
    title: "Pure Land Hospitality",
    url: "https://purelandhospitality.com.np/",
    description:
      "A professional hospitality website showcasing services, accommodations, and experiences provided by the organization.",
    category: "Company Website",
    tags: ["React", "CMS", "Tailwind"],
    color: "blue",
    emoji: "🏨",
  },
  {
    title: "NgYungNe Retreat",
    url: "https://ngyungne.org/",
    description:
      "A retreat website providing information about spiritual retreat programs, schedules, teachings, and online registration.",
    category: "Organization Website",
    tags: ["React", "Calendar", "Forms"],
    color: "gold",
    emoji: "🧘",
  },
  {
    title: "Pure Land Travels",
    url: "https://purelandtravels.com.np/",
    description:
      "A travel agency website designed to present tours, travel packages, and services for tourists exploring Nepal.",
    category: "Travel Website",
    tags: ["Next.js", "Booking", "Maps"],
    color: "blue",
    emoji: "✈️",
  },
  {
    title: "Trinity Waterproofing",
    url: "https://www.trinitywaterproofing.com.np/",
    description:
      "A company portfolio website with service listings and business information for a waterproofing and construction solutions company.",
    category: "Business Portfolio",
    tags: ["React", "SEO", "Tailwind"],
    color: "gold",
    emoji: "🏗️",
  },
  {
    title: "RASS Engineering",
    url: "https://rassengineering.com.np/",
    description:
      "A professional engineering company website highlighting services, projects, and corporate information.",
    category: "Company Portfolio",
    tags: ["React", "Node.js", "CMS"],
    color: "blue",
    emoji: "⚙️",
  },
  {
    title: "WAS Media Marketing",
    url: "https://wasmediamarketing.com/",
    description:
      "A digital marketing agency website presenting services, portfolio, and business capabilities.",
    category: "Agency Portfolio",
    tags: ["MERN", "Analytics", "CMS"],
    color: "gold",
    emoji: "📣",
  },
  {
    title: "SNS Tech",
    url: "https://snstech.co",
    description:
      "A technology company website presenting IT services, solutions, and digital innovation capabilities.",
    category: "Tech Company",
    tags: ["React", "TypeScript", "AWS"],
    color: "blue",
    emoji: "💻",
  },
  {
    title: "Rooted In Sound",
    url: "https://www.rootedinsound.com/",
    description:
      "A website focused on sound healing, singing bowls, and spiritual sound practices.",
    category: "Wellness Website",
    tags: ["React", "CMS", "Tailwind"],
    color: "gold",
    emoji: "🎵",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isGold = project.color === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
        isGold ? "glass-card-gold" : "glass-card-blue"
      } ${hovered ? "scale-[1.03] -translate-y-1" : ""}`}
    >
      {/* Gradient header */}
      <div
        className={`relative h-40 flex items-center justify-center overflow-hidden ${
          isGold
            ? "bg-gradient-to-br from-accent/10 to-accent/5"
            : "bg-gradient-to-br from-primary/10 to-primary/5"
        }`}
      >
        <div className="absolute inset-0 grid-dot-bg opacity-30" />
        <motion.span
          className="text-6xl select-none"
          animate={hovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {project.emoji}
        </motion.span>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`absolute inset-0 ${isGold ? "bg-accent/10" : "bg-primary/10"} backdrop-blur-sm`} />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
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
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base font-bold text-foreground leading-tight">
            {project.title}
          </h3>
          <span
            className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
              isGold
                ? "bg-accent/15 text-accent border border-accent/25"
                : "bg-primary/15 text-primary border border-primary/25"
            }`}
          >
            {project.category}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
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
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A showcase of production websites and platforms built for clients across diverse industries.
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
