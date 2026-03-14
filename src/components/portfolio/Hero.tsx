import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowDown } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/nishantpanjabi" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nishantpanjabi" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/nishantpanjabi" },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="mesh-gradient" />
      <div className="mesh-gradient-extra" />

      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 skill-tile border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-primary/80 tracking-wide">Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          <span className="text-foreground">Nishant </span>
          <span className="text-gradient-hero">Panjabi</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl font-mono text-primary/90 mb-6 tracking-tight"
        >
          Computer Science Engineer · Developer · Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(210 40% 75%)", textWrap: "pretty" } as React.CSSProperties}
        >
          I am a Computer Science undergraduate passionate about building intelligent systems,
          solving challenging algorithmic problems, and designing meaningful digital experiences.
          My interests lie in software development, machine learning, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            className="btn-primary flex items-center gap-2 text-sm"
            onClick={scrollToProjects}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="btn-ghost flex items-center gap-2 text-sm"
            onClick={scrollToContact}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg skill-tile text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted-foreground"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
        <span className="text-xs font-mono text-muted-foreground">scroll</span>
      </motion.div>
    </section>
  );
}
