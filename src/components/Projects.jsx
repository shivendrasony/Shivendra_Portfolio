import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filters = useMemo(
    () => ["All", ...new Set(portfolio.projects.map((p) => p.category))],
    []
  );
  const showFilters = portfolio.projects.length > 3;

  const filtered = useMemo(() => {
    if (filter === "All") return portfolio.projects;
    return portfolio.projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-20" style={{ background: "var(--bg-elevated)" }}>
      <div className="container-page" ref={ref}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="field-label mb-3">05 / projects</p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
              Things I've actually built.
            </h2>
          </div>

          {showFilters && (
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-3.5 py-1.5 rounded-full text-xs border transition-colors"
                  style={{
                    borderColor: filter === f ? "var(--accent)" : "var(--border)",
                    color: filter === f ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-xl border border-[var(--border)] overflow-hidden flex flex-col hover:border-[var(--accent)] transition-colors"
              style={{ background: "var(--surface)" }}
            >
              <div
                className="h-44 flex items-center justify-center border-b border-[var(--border)] overflow-hidden relative"
                style={{
                  background:
                    "repeating-linear-gradient(135deg, var(--bg) 0px, var(--bg) 10px, var(--border) 10px, var(--border) 11px)",
                }}
              >
                <span className="font-[var(--font-mono)] text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] transition-transform duration-300 group-hover:scale-105">
                  {project.name}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-lg">{project.name}</h3>
                  <span className="field-label whitespace-nowrap">{project.category}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {project.short}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-1 rounded-md"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-sm inline-flex items-center gap-1 font-medium hover:gap-1.5 transition-all"
                    style={{ color: "var(--accent)" }}
                  >
                    View details <ArrowUpRight size={14} />
                  </button>
                  <div className="flex items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                      >
                        <Github size={15} />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-md border border-[var(--border)] opacity-40"
                        title="GitHub link coming soon"
                      >
                        <Github size={15} />
                      </span>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-md border border-[var(--border)] opacity-40"
                        title="Live demo coming soon"
                      >
                        <ExternalLink size={15} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {portfolio.otherProjects && portfolio.otherProjects.length > 0 && (
        <div className="container-page mt-14">
          <p className="field-label mb-4">More on GitHub</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolio.otherProjects.map((p) => (
              <a
                key={p.name}
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                style={{ background: "var(--surface)" }}
              >
                <span>
                  <span className="text-sm font-medium block">{p.name}</span>
                  <span className="field-label">{p.language}</span>
                </span>
                <Github size={16} style={{ color: "var(--text-muted)" }} className="shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
