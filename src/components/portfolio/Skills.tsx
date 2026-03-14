import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "Python", "SQL", "JavaScript"],
    color: "primary",
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "OOP"],
    color: "accent",
  },
  {
    category: "Web Dev",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "primary",
  },
  {
    category: "Databases",
    skills: ["MySQL"],
    color: "accent",
  },
  {
    category: "ML / Vision",
    skills: ["YOLO", "OpenCV", "Computer Vision", "Deep Learning"],
    color: "primary",
  },
  {
    category: "Tools",
    skills: ["Git", "Django", "Canvas API", "Figma"],
    color: "accent",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">04 — Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">The Tech Matrix</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.07, ease: "easeOut" }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-1 h-4 rounded-full"
                  style={{
                    background: group.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))",
                  }}
                />
                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04, ease: "easeOut" }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="skill-tile text-xs px-3 py-1.5 rounded-lg cursor-default font-mono"
                    style={{
                      color:
                        group.color === "primary"
                          ? "hsl(199 89% 55%)"
                          : "hsl(250 89% 72%)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
