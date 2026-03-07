import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "primary",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 72 },
      { name: "HTML / CSS / Tailwind", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "accent",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 87 },
      { name: "Python", level: 75 },
      { name: "Flask", level: 68 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "primary",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "MS SQL", level: 72 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "accent",
    skills: [
      { name: "AWS EC2", level: 78 },
      { name: "AWS S3", level: 80 },
      { name: "Netlify", level: 85 },
      { name: "Git / CI/CD", level: 88 },
    ],
  },
  {
    title: "Data & Analytics",
    icon: "📊",
    color: "primary",
    skills: [
      { name: "Pandas / NumPy", level: 75 },
      { name: "Scikit-learn", level: 68 },
      { name: "Matplotlib", level: 72 },
    ],
  },
  {
    title: "Interpersonal Skills",
    icon: "🤝",
    color: "accent",
    skills: [
      { name: "Problem Solving", level: 88 },
      { name: "Team Collaboration", level: 87 },
      { name: "Adaptability", level: 75 },
      { name: "Communication", level: 88 },
      { name: "Critical Thinking", level: 92 },
    ],
  },
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isGold = color === "accent";

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <span className={`text-xs font-mono font-bold ${isGold ? "text-accent" : "text-primary"}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            isGold
              ? "bg-gradient-to-r from-accent-dim to-accent"
              : "bg-gradient-to-r from-primary-dim to-primary-glow"
          }`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            — Technical Expertise —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Skills &{" "}
            <span className="text-gradient-premium">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={`p-6 rounded-2xl ${cat.color === "accent" ? "glass-card-gold" : "glass-card-blue"} hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display text-lg font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
