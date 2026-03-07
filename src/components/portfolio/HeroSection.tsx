import { motion } from "framer-motion";
import { Download, Eye, Mail, MapPin, ArrowDown } from "lucide-react";

const floatingOrbs = [
  { size: 300, top: "10%", left: "5%", color: "hsl(221 83% 55% / 0.08)", delay: 0 },
  { size: 400, top: "50%", right: "5%", color: "hsl(43 90% 55% / 0.06)", delay: 1 },
  { size: 200, bottom: "20%", left: "20%", color: "hsl(250 70% 60% / 0.07)", delay: 2 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-dot-bg">
      {/* Background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, delay: orb.delay }}
        />
      ))}

      {/* Horizontal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Kathmandu, Nepal · Available for Work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl font-black tracking-tight leading-none mb-4"
          >
            <span className="text-foreground">Suman</span>
            <br />
            <span className="text-gradient-gold">Kunwar</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {["Full Stack Developer", "MERN Stack", "Cloud & Data Enthusiast"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm font-medium glass-card border border-primary/20 text-primary-glow"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed mb-12"
          >
            Full Stack Developer with strong foundations in software engineering, scalable web systems,
            and data-driven solutions. Experienced in building modern web platforms using{" "}
            <span className="text-accent font-medium">MERN stack</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span>,{" "}
            <span className="text-accent font-medium">cloud services</span>, and modern frameworks.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center mb-20"
          >
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-premium text-accent-foreground font-semibold shadow-glow-blue hover:shadow-glow-gold transition-all duration-300 hover:scale-105 text-sm"
            >
              <Eye className="w-4 h-4" />
              View Projects
            </button>
            <a
              href="mailto:sumankunwar755@gmail.com"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card border border-accent/30 text-accent font-semibold hover:border-accent/60 hover:shadow-gold transition-all duration-300 hover:scale-105 text-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card border border-border/60 text-foreground font-semibold hover:border-primary/40 hover:shadow-blue transition-all duration-300 hover:scale-105 text-sm"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl"
          >
            {[
              { number: "10+", label: "Projects Built" },
              { number: "20+", label: "Technologies" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "Clients Served" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card-gold rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient-gold">{stat.number}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
