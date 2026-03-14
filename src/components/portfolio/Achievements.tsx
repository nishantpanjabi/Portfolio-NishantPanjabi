import { motion } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

const achievements = [
  {
    Icon: Trophy,
    title: "Finalist – Smart India Hackathon 2025",
    description:
      "Developed a technology-driven solution addressing a real-world challenge through collaborative ideation and development. Selected among top teams nationwide.",
    badge: "SIH 2025",
    color: "primary",
    meta: "National Level · 2025",
  },
  {
    Icon: Star,
    title: "MHT-CET 98.9 Percentile",
    description:
      "Achieved 98.9 percentile in MHT-CET — Maharashtra's highly competitive engineering entrance examination.",
    badge: "98.9%ile",
    color: "accent",
    meta: "Engineering Entrance · 2023",
  },
  {
    Icon: Zap,
    title: "JEE Mains 97.14 Percentile",
    description:
      "Scored 97.14 percentile in JEE Mains, qualifying for admission to top engineering institutions across India.",
    badge: "97.14%ile",
    color: "primary",
    meta: "National Entrance · 2023",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">05 — Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Milestones</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="space-y-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ x: 4 }}
              className="glass-card p-6 group flex items-start gap-5 transition-all duration-300 hover:border-primary/20"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: item.color === "primary" ? "rgba(14,165,233,0.1)" : "rgba(139,92,246,0.1)",
                  border: `1px solid ${item.color === "primary" ? "rgba(14,165,233,0.2)" : "rgba(139,92,246,0.2)"}`,
                }}
              >
                <item.Icon
                  className="w-5 h-5"
                  style={{ color: item.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))" }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-foreground leading-snug">{item.title}</h3>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{
                      background: item.color === "primary" ? "rgba(14,165,233,0.1)" : "rgba(139,92,246,0.1)",
                      color: item.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))",
                      border: `1px solid ${item.color === "primary" ? "rgba(14,165,233,0.2)" : "rgba(139,92,246,0.2)"}`,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                <p className="text-xs font-mono text-muted-foreground/60 tabular-nums">{item.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
