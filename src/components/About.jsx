import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">02 / about</p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl"
        >
          {portfolio.about.headline}
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-[1.4fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 max-w-2xl"
          >
            {portfolio.about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {portfolio.personal.photo && (
              <div
                className="rounded-xl border border-[var(--border)] overflow-hidden aspect-[4/5]"
                style={{ background: "var(--surface)" }}
              >
                <img
                  src={portfolio.personal.photo}
                  alt={`Portrait of ${portfolio.personal.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={720}
                  height={900}
                />
              </div>
            )}
            <div className="rounded-xl border border-[var(--border)] divide-y divide-[var(--border)]" style={{ background: "var(--surface)" }}>
              {portfolio.about.facts.map((fact, i) => (
                <div key={fact} className="flex items-center gap-3 px-5 py-4">
                  <span className="field-label" style={{ color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
