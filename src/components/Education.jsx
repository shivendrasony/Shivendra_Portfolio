import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">06 / education</p>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Academic background.
        </h2>

        <div className="mt-10 space-y-4 max-w-2xl">
          {portfolio.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-[var(--border)] p-6 flex gap-4"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="shrink-0 h-10 w-10 rounded-md flex items-center justify-center"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <GraduationCap size={18} />
              </span>
              <div>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {edu.institution}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
                <p className="text-xs mt-2 field-label">
                  {edu.year}
                  {edu.score ? ` · ${edu.score}` : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
