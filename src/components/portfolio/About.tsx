import { motion } from "framer-motion";
import { Code2, Brain, Palette, Rocket } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const traits = [
  { icon: Code2, title: "Full-Stack Dev", desc: "Building end-to-end systems with modern web technologies." },
  { icon: Brain, title: "ML & AI", desc: "Applying deep learning models to real-world computer vision problems." },
  { icon: Palette, title: "UI/UX Minor", desc: "Bridging technical engineering with thoughtful design." },
  { icon: Rocket, title: "Problem Solver", desc: "Competitive programming and algorithmic thinking at the core." },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeInUp} className="mb-16">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">01 — About</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Who I Am
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: "hsl(210 40% 78%)" }}>
              I am currently pursuing <span className="text-foreground font-medium">B.Tech in Computer Science and Engineering</span> from{" "}
              <span className="text-primary font-medium">Sardar Patel Institute of Technology, Mumbai</span>. I enjoy solving
              real-world problems using technology and continuously exploring areas like machine learning,
              data analytics, and full-stack development.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "hsl(210 40% 78%)" }}>
              I am also pursuing a <span className="text-accent font-medium">Minor in UI/UX from Pearl Academy</span>, which helps
              me combine technical development with good design and user experience — thinking not just about
              how systems work, but how they feel.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "hsl(210 40% 78%)" }}>
              I build systems that <span className="text-foreground font-medium">see, learn, and scale</span> — from computer vision
              pipelines to competitive programming platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "8.41", label: "CGPA" },
                { value: "SIH'25", label: "Finalist" },
                { value: "98.9%", label: "MHT-CET" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-xl font-bold font-mono text-gradient-cyan tabular-nums">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="glass-card p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <trait.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{trait.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
