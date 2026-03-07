import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const courses = [
  "Data Structures",
  "Algorithms",
  "Artificial Intelligence",
  "Database Systems",
  "Software Engineering",
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "gold",
    year: "2024",
  },
  {
    title: "Programming for Everybody",
    issuer: "University of Michigan · Coursera",
    icon: "🐍",
    color: "blue",
    year: "2023",
  },
  {
    title: "Meta Social Media Strategy & Planning",
    issuer: "Meta · Coursera",
    icon: "📱",
    color: "gold",
    year: "2023",
  },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            — Academic Background —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Education &{" "}
            <span className="text-gradient-gold">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card-blue rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-royal flex items-center justify-center shadow-glow-blue">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Degree</p>
                  <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-display text-lg font-bold text-foreground">
                  BSc (Hons.) Information Technology
                </h4>
                <p className="text-primary font-semibold">Lord Buddha Education Foundation</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/25 font-bold">
                    CGPA: 3.46
                  </span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Relevant Coursework</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-lg glass-card border border-primary/20 text-primary-glow font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Award className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Credentials</p>
                <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
              </div>
            </div>

            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className={`p-5 rounded-xl flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 ${
                  cert.color === "gold" ? "glass-card-gold" : "glass-card-blue"
                }`}
              >
                <span className="text-3xl shrink-0">{cert.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm leading-tight">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <span
                  className={`text-xs font-mono shrink-0 px-2 py-1 rounded ${
                    cert.color === "gold"
                      ? "bg-accent/15 text-accent"
                      : "bg-primary/15 text-primary"
                  }`}
                >
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
