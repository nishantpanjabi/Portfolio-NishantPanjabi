import { motion } from "framer-motion";
import { BookOpen, Palette } from "lucide-react";

const experiences = [
  {
    Icon: BookOpen,
    role: "Teaching Assistant",
    supervisor: "Dr. Renuka Pawar",
    organization: "SPIT",
    type: "Academic",
    description:
      "Helped design and evaluate assignments, quizzes, and lab exercises. Supported course coordination and provided guidance to students on academic material.",
    period: "2024 – Present",
    skills: ["Pedagogy", "Course Design", "Lab Management", "Student Mentoring"],
    color: "primary",
  },
  {
    Icon: Palette,
    role: "Head of Creatives",
    supervisor: null as string | null,
    organization: "Sports Committee, SPIT",
    type: "Leadership",
    description:
      "Led the creative direction for college sports events. Designed and produced promotional materials including posters, banners, and digital assets for all major sports events.",
    period: "2023 – Present",
    skills: ["Creative Direction", "Graphic Design", "Event Branding", "Team Leadership"],
    color: "accent",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">06 — Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Positions & Roles</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col gap-4 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: exp.color === "primary" ? "rgba(14,165,233,0.1)" : "rgba(139,92,246,0.1)",
                    border: `1px solid ${exp.color === "primary" ? "rgba(14,165,233,0.2)" : "rgba(139,92,246,0.2)"}`,
                  }}
                >
                  <exp.Icon
                    className="w-4 h-4"
                    style={{ color: exp.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: exp.color === "primary" ? "rgba(14,165,233,0.08)" : "rgba(139,92,246,0.08)",
                        color: exp.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground tabular-nums">{exp.period}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mt-2 leading-snug">{exp.role}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {exp.supervisor ? `Under ${exp.supervisor} · ` : ""}{exp.organization}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded font-mono text-muted-foreground"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
