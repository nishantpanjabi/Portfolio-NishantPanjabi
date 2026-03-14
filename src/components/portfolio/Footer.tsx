import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Terminal className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm font-semibold text-gradient-cyan">Nishant Panjabi</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs text-muted-foreground text-center flex items-center gap-1.5"
          >
            © 2026 Nishant Panjabi · Built with
            <Heart className="w-3 h-3 text-primary inline" />
            and modern web technologies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xs font-mono text-muted-foreground/50"
          >
            React · Framer Motion · Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
