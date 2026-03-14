import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code2, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    { icon: Phone, label: "Phone", value: "+91 7391014662", href: "tel:+917391014662" },
    { icon: Mail, label: "Email", value: "nishant.panjabi23@spit.ac.in", href: "mailto:nishant.panjabi23@spit.ac.in" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/nishantpanjabi" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nishantpanjabi" },
    { icon: Code2, label: "LeetCode", href: "https://leetcode.com/nishantpanjabi" },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-3">07 — Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Let's Connect</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed" style={{ color: "hsl(210 40% 75%)" }}>
              Whether you have a project in mind, an opportunity to discuss, or just want to say hello —
              I'd love to hear from you. Let's build something great together.
            </p>

            {/* Contact items */}
            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass-card group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors hover:border-primary/20"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <motion.label
                    htmlFor={field.name}
                    animate={{
                      top: focused === field.name || form[field.name as keyof typeof form] ? "6px" : "50%",
                      fontSize: focused === field.name || form[field.name as keyof typeof form] ? "10px" : "14px",
                      y: focused === field.name || form[field.name as keyof typeof form] ? "0%" : "-50%",
                      color:
                        focused === field.name
                          ? "hsl(var(--primary))"
                          : "hsl(215 20% 50%)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-3 pointer-events-none font-medium z-10"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {field.label}
                  </motion.label>
                  <input
                    id={field.name}
                    type={field.type}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    className="input-field w-full px-3 pt-6 pb-2 text-sm h-14"
                    required
                  />
                </div>
              ))}

              {/* Textarea */}
              <div className="relative">
                <motion.label
                  htmlFor="message"
                  animate={{
                    top: focused === "message" || form.message ? "8px" : "16px",
                    fontSize: focused === "message" || form.message ? "10px" : "14px",
                    color: focused === "message" ? "hsl(var(--primary))" : "hsl(215 20% 50%)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-3 pointer-events-none font-medium z-10"
                >
                  Message
                </motion.label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  rows={4}
                  className="input-field w-full px-3 pt-6 pb-2 text-sm resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className="btn-primary w-full flex items-center justify-center gap-2 text-sm h-11"
                disabled={sent}
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
