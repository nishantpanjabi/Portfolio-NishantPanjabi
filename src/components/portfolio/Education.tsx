import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  );
}

const education = [
  {
    institution: "Sardar Patel Institute of Technology",
    location: "Mumbai",
    degree: "B.Tech in Computer Science and Engineering",
    details: [{ label: "CGPA", value: "8.41" }],
    period: "2023 – 2027",
    Icon: GraduationCap,
    current: true,
    color: "primary",
  },
  {
    institution: "Pearl Academy",
    location: "Mumbai",
    degree: "Minor in UI/UX",
    details: [],
    period: "2024 – 2027",
    Icon: PaletteIcon,
    current: true,
    color: "accent",
  },
  {
    institution: "Jai Hind College",
    location: "Sambhajinagar",
    degree: "Higher Secondary & Competitive Exams",
    details: [
      { label: "Class X", value: "92.20%" },
      { label: "Class XII", value: "78%" },
      { label: "JEE Mains", value: "97.14 percentile" },
      { label: "MHT-CET", value: "98.9 percentile" },
    ],
    period: "2021 – 2023",
    Icon: Award,
    current: false,
    color: "muted",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">02 — Education</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Academic Journey</h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Track */}
          <div className="timeline-track absolute left-4 top-3 bottom-3" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="relative pl-12"
              >
                {/* Node */}
                <div className="absolute left-0 top-3 flex items-center justify-center w-9 h-9">
                  <div
                    className="timeline-node relative"
                    style={{
                      background:
                        item.color === "accent"
                          ? "hsl(var(--accent))"
                          : item.color === "primary"
                          ? "hsl(var(--primary))"
                          : "hsl(var(--muted))",
                      boxShadow: item.current
                        ? item.color === "accent"
                          ? "0 0 12px rgba(139,92,246,0.5)"
                          : "0 0 12px rgba(14,165,233,0.5)"
                        : "none",
                    }}
                  />
                  {item.current && (
                    <span
                      className="absolute w-3 h-3 rounded-full opacity-40"
                      style={{
                        background:
                          item.color === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
                        animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card p-6 hover:border-primary/20 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{item.institution}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.location}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tabular-nums">{item.period}</span>
                  </div>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{
                      color: item.color === "accent" ? "hsl(var(--accent))" : "hsl(var(--primary))",
                    }}
                  >
                    {item.degree}
                  </p>
                  {item.details.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {item.details.map((d) => (
                        <div
                          key={d.label}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border border-border"
                        >
                          <span className="text-xs text-muted-foreground">{d.label}:</span>
                          <span className="text-xs font-mono font-semibold text-foreground tabular-nums">
                            {d.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
