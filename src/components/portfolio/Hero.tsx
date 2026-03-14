import { motion } from "framer-motion";
import { Github, Linkedin, Code2, ArrowDown } from "lucide-react";
import { Terminal } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const socialLinks = [
  { Icon: Github, label: "GitHub", href: "https://github.com/nishantpanjabi" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nishantpanjabi" },
  { Icon: Code2, label: "LeetCode", href: "https://leetcode.com/nishantpanjabi" },
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-particle w-2 h-2 bg-primary/30 top-1/4 left-1/4"></div>
        <div className="floating-particle w-3 h-3 bg-accent/20 top-1/3 right-1/4"></div>
        <div className="floating-particle w-1.5 h-1.5 bg-primary/40 bottom-1/4 left-1/3"></div>
        <div className="floating-particle w-2.5 h-2.5 bg-accent/25 top-2/3 right-1/3"></div>
        <div className="floating-particle w-1 h-1 bg-primary/50 bottom-1/3 right-1/5"></div>
        
        {/* Rotating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-8 h-8 border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-6 h-6 border-2 border-accent/20 rotate-45"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-4 h-4 bg-primary/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 skill-tile border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-mono text-gradient-cyan">Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            textShadow: [
              "0 0 20px rgba(147, 51, 234, 0.3)",
              "0 0 30px rgba(236, 72, 153, 0.3)",
              "0 0 20px rgba(147, 51, 234, 0.3)"
            ]
          }}
          transition={{ 
            opacity: { duration: 0.55, delay: 0.1, ease: "easeOut" },
            y: { duration: 0.55, delay: 0.1, ease: "easeOut" },
            textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-foreground">Nishant </span>
          <span className="text-gradient-hero">Panjabi</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-mono mb-6 tracking-tight text-gradient-cyan typewriter"
        >
          Computer Science Engineer · Developer · Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-muted-foreground"
        >
          I am a Computer Science undergraduate passionate about building intelligent systems,
          solving challenging algorithmic problems, and designing meaningful digital experiences.
          My interests lie in software development, machine learning, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
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
          transition={{ duration: 0.55, delay: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ Icon, label, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg skill-tile text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ y: -3, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
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
        transition={{ delay: 1.2, ease: "easeOut" }}
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
