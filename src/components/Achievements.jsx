import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function Achievements() {
  const [ref, inView] = useInView();

  if (portfolio.achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-24 md:py-32 scroll-mt-20" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">07 / achievements</p>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Outside the codebase.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {portfolio.achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-[var(--border)] p-5 flex gap-3"
              style={{ background: "var(--surface)" }}
            >
              <Award size={18} style={{ color: "var(--accent)" }} className="shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                {item.description && (
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
