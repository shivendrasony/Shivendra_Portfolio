import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

export default function Experience() {
  const [ref, inView] = useInView();
  const hasExperience = portfolio.experience.length > 0;

  return (
    <section id="experience" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">04 / experience</p>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Where I'm at right now.
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          {hasExperience ? (
            <div className="relative pl-8 space-y-10 max-w-2xl">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px"
                style={{ background: "var(--border)" }}
              />
              {portfolio.experience.map((role, i) => (
                <div key={i} className="relative">
                  <span
                    className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                    style={{ borderColor: "var(--accent)", background: "var(--bg)" }}
                  />
                  <p className="field-label">{role.period}</p>
                  <h3 className="mt-1 font-medium">{role.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {role.company}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {role.description}
                  </p>
                  {role.github && (
                    <a
                      href={role.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2 transition-all"
                      style={{ color: "var(--accent)" }}
                    >
                      <Github size={14} /> View repository
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div
              className="rounded-xl border border-[var(--border)] p-8 max-w-2xl"
              style={{ background: "var(--surface)" }}
            >
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I haven't held a full-time role yet — I'm a fresher building my
                experience through self-directed projects instead. The{" "}
                <a href="#projects" className="underline underline-offset-4" style={{ color: "var(--accent)" }}>
                  Projects
                </a>{" "}
                section below is the most accurate picture of what I can build
                and how I work.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I'm actively looking for internship or entry-level opportunities
                in backend development or data engineering where I can keep
                learning on a real team.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
