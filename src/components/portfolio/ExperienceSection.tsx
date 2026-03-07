import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Lead Strategist",
    company: "W.A.S. Media Marketing",
    period: "2025 – Present",
    type: "Full-time",
    current: true,
    highlights: [
      "Leading technical planning and digital platform development",
      "Data-driven strategy and analytics implementation",
      "Full-stack system architecture and team leadership",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "W.A.S. Media Marketing",
    period: "2024 – 2025",
    type: "Full-time",
    current: false,
    highlights: [
      "Built scalable MERN applications for multiple clients",
      "Developed RESTful APIs and optimized backend performance",
      "Collaborated with cross-functional teams on production platforms",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "W.A.S. Media Marketing",
    period: "2024",
    type: "Internship",
    current: false,
    highlights: [
      "Assisted in web development and deployment workflows",
      "Supported testing, debugging, and QA processes",
      "Gained hands-on experience with modern dev stack",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            — Career Path —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work{" "}
            <span className="text-gradient-royal">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${i}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                className={`relative flex ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      exp.current
                        ? "bg-gradient-premium border-accent shadow-glow-gold"
                        : "bg-background-card border-border glass-card"
                    }`}
                  >
                    <Briefcase className={`w-5 h-5 ${exp.current ? "text-accent-foreground" : "text-primary"}`} />
                  </div>
                  {exp.current && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent animate-pulse-glow" />
                  )}
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Card — full width on mobile, half on desktop */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div
                    className={`p-6 rounded-2xl ${
                      exp.current ? "glass-card-gold" : "glass-card"
                    } hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-display text-lg font-bold text-foreground">{exp.role}</h3>
                      {exp.current && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25 font-medium shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-semibold text-sm mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-muted/60 border border-border/50">
                        {exp.type}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
