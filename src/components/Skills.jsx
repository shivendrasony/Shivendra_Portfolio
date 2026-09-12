import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Plug, BrainCircuit, BarChart3 } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

const ICONS = {
  programming: Code2,
  backend: Server,
  api: Plug,
  data: Database,
  databases: Database,
  analysis: BarChart3,
  tools: Wrench,
  concepts: BrainCircuit,
};

export default function Skills() {
  const [ref, inView] = useInView();
  const categories = Object.entries(portfolio.skills);

  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-20" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">03 / skills</p>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Technologies I actually use.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {categories.map(([key, cat], i) => {
            const Icon = ICONS[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl border border-[var(--border)] p-6"
                style={{ background: "var(--surface)" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="p-2 rounded-md"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    <Icon size={17} />
                  </span>
                  <h3 className="font-medium">{cat.label}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
