import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Globe, Zap, Heart } from "lucide-react";

const highlights = [
  { icon: Globe, title: "Global Mindset", desc: "Building digital platforms for clients worldwide" },
  { icon: Zap, title: "Performance First", desc: "Optimized, scalable, high-performance web systems" },
  { icon: Heart, title: "Passionate Builder", desc: "Genuine love for solving real-world problems with code" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-accent mb-4 block">
            — About Me —
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Crafting Digital{" "}
            <span className="text-gradient-gold">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — avatar + decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-premium opacity-20 blur-2xl scale-110" />
              <div className="relative w-72 h-80 rounded-2xl glass-card-gold overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-premium flex items-center justify-center shadow-glow-blue">
                    <User className="w-14 h-14 text-accent-foreground" />
                  </div>
                  <div className="text-center">
                    <p className="font-display text-xl font-bold text-foreground">Suman Kunwar</p>
                    <p className="text-sm text-accent font-medium">Full Stack Developer</p>
                    <p className="text-xs text-muted-foreground mt-1">Kathmandu, Nepal 🇳🇵</p>
                  </div>
                  <div className="flex gap-2">
                    {["React", "Node", "AWS", "MongoDB"].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-muted/60 text-muted-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card-blue rounded-xl px-3 py-2 text-xs font-mono text-primary"
              >
                {"<developer />"}
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card-gold rounded-xl px-3 py-2 text-xs font-medium text-accent"
              >
                ⚡ Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              Suman Kunwar is a{" "}
              <span className="text-foreground font-medium">Full Stack Developer</span> based in
              Kathmandu, Nepal with experience designing and developing scalable digital platforms.
              His expertise includes{" "}
              <span className="text-accent font-medium">MERN stack development</span>, REST APIs,
              cloud deployment, and data-driven applications.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              He has worked on multiple production websites and platforms including{" "}
              <span className="text-primary font-medium">e-commerce systems</span>, company websites,
              travel booking systems, and digital service platforms.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              He is passionate about building{" "}
              <span className="text-accent font-medium">high-performance applications</span> that
              solve real-world problems and deliver meaningful user experiences.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl glass-card border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
