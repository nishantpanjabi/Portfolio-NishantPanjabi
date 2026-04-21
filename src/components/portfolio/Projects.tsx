import { motion } from "framer-motion";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/projects-data";

export default function Projects() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">03 — Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Things I've Built</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="project-card group relative overflow-hidden flex flex-col"
                style={{ minHeight: "280px" }}
              >
              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background:
                    project.color === "primary"
                      ? "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.06) 0%, transparent 70%)"
                      : "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{project.title}</h3>
                    <p
                      className="text-xs font-mono mt-0.5"
                      style={{
                        color: project.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))",
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                  {/* Design Logic tooltip */}
                  <div className="relative">
                    <button
                      onClick={(event) => event.preventDefault()}
                      onMouseEnter={() => setTooltip(project.title)}
                      onMouseLeave={() => setTooltip(null)}
                      className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <AlertCircle className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    </button>
                    {tooltip === project.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute right-0 top-8 z-20 w-56 glass-card p-3 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary font-medium block mb-1">Design Logic</span>
                        {project.logic}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground mb-5 flex-1">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-0.5 rounded border font-mono"
                      style={{
                        color: project.color === "primary" ? "hsl(var(--primary) / 0.9)" : "hsl(var(--accent) / 0.9)",
                        borderColor: project.color === "primary" ? "rgba(14,165,233,0.25)" : "rgba(139,92,246,0.25)",
                        background: project.color === "primary" ? "rgba(14,165,233,0.06)" : "rgba(139,92,246,0.06)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded font-mono text-muted-foreground"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
