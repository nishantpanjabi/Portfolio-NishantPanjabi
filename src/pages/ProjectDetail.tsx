import { motion } from "framer-motion";
import { ArrowLeft, Clock3, UserRound, BriefcaseBusiness } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "@/components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";
import { getProjectBySlug } from "@/lib/projects-data";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-24">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">The project you opened does not exist.</p>
          <Link to="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="mesh-gradient" />
      <div className="mesh-gradient-extra" />
      <Navbar />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-6 pb-20"
      >
        <motion.section variants={itemVariants} className="pt-24 pb-10">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="project-card p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  project.color === "primary"
                    ? "radial-gradient(circle at 20% 10%, rgba(168,85,247,0.25) 0%, transparent 50%)"
                    : "radial-gradient(circle at 20% 10%, rgba(236,72,153,0.2) 0%, transparent 50%)",
              }}
            />
            <p className="text-xs font-mono uppercase tracking-widest text-primary/80 mb-3">Project Detail</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{project.subtitle}</p>
            <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-3xl">{caseStudy?.bannerTagline ?? project.description}</p>
            {project.liveUrl && (
              <div className="mt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-green-400 text-black text-sm font-medium"
                >
                  View Live
                </a>
              </div>
            )}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-14">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Overview</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <p className="text-xs text-muted-foreground mb-2 inline-flex items-center gap-2"><BriefcaseBusiness className="w-4 h-4" /> Type</p>
              <p className="font-medium">{caseStudy?.projectType ?? "Engineering Project"}</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-xs text-muted-foreground mb-2 inline-flex items-center gap-2"><Clock3 className="w-4 h-4" /> Duration</p>
              <p className="font-medium">{caseStudy?.duration ?? "In progress"}</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-xs text-muted-foreground mb-2 inline-flex items-center gap-2"><UserRound className="w-4 h-4" /> Role</p>
              <p className="font-medium">{caseStudy?.role ?? "Developer"}</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Problem Statement</p>
          <div className="glass-card p-6">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {caseStudy?.problemStatement ?? project.description}
            </p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-6">
            <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Target Users</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(caseStudy?.targetUsers ?? ["End users requiring a guided and simple workflow"]).map((user) => (
                <li key={user}>- {user}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Research Insights</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(caseStudy?.researchInsights ?? [project.logic]).map((insight) => (
                <li key={insight}>- {insight}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Solution</p>
          <div className="glass-card p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(caseStudy?.solution ?? [project.logic]).map((step) => (
                <li key={step}>- {step}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Design System</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4">Colors</h3>
              <div className="space-y-3">
                {(caseStudy?.designSystem.colors ?? []).map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md border border-white/20" style={{ backgroundColor: color.value }} />
                    <div>
                      <p className="text-sm font-medium">{color.name}</p>
                      <p className="text-xs text-muted-foreground">{color.value} - {color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4">Typography</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(caseStudy?.designSystem.typography ?? ["System typography"]).map((font) => (
                  <li key={font}>- {font}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Features</p>
          <div className="grid md:grid-cols-2 gap-4">
            {(caseStudy?.features ?? project.highlights.map((title) => ({ title, description: "Feature details coming soon." }))).map((feature) => (
              <div key={feature.title} className="project-card p-5">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Screens</p>
          <div className="grid md:grid-cols-2 gap-4">
            {(caseStudy?.screens ?? ["Primary Screen", "Secondary Screen"]).map((screen) => {
              const isImage = typeof screen === "string" && /\.(png|jpe?g|webp|svg)$/i.test(screen);
              return (
                <div key={screen} className="glass-card p-5">
                  {isImage ? (
                    <img src={screen as string} alt={project.title + " screen"} className="rounded-xl border border-white/10 bg-white/5 h-44 w-full object-cover" />
                  ) : (
                    <div className="rounded-xl border border-dashed border-white/20 bg-white/5 h-44 flex items-center justify-center text-muted-foreground text-sm">
                      {screen} Image Placeholder
                    </div>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground">{screen}</p>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="mb-12">
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Before vs After</p>
          <div className="glass-card p-0 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-3 px-4 font-semibold">Before</th>
                  <th className="py-3 px-4 font-semibold">After</th>
                </tr>
              </thead>
              <tbody>
                {(caseStudy?.beforeAfter ?? []).map((row) => (
                  <tr key={row.before} className="border-b border-white/10 last:border-b-0">
                    <td className="py-3 px-4 text-muted-foreground">{row.before}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Outcome</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(caseStudy?.outcome ?? ["Outcome details coming soon."]).map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">Learnings</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(caseStudy?.learnings ?? ["Learnings will be documented in this case study."]).map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}