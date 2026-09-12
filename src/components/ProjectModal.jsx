import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        style={{ background: "rgba(0,0,0,0.55)" }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-[var(--border)]"
          style={{ background: "var(--surface)" }}
        >
          <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-[var(--border)]" style={{ background: "var(--surface)" }}>
            <h3 className="font-[var(--font-display)] text-xl font-semibold">{project.name}</h3>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6">
            <Block label="Overview" text={project.overview} />
            <Block label="Problem" text={project.problem} />
            <Block label="Solution" text={project.solution} />

            <div>
              <p className="field-label mb-2">Features</p>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="text-sm flex gap-2" style={{ color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--accent)" }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="field-label mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Block label="Key Learning" text={project.learning} />

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <Github size={15} /> GitHub {project.githubFrontend ? "(Backend)" : ""}
                </a>
              ) : null}
              {project.githubFrontend ? (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <Github size={15} /> GitHub (Frontend)
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"
                  style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              ) : null}
              {!project.github && !project.demo && (
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Links coming soon.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Block({ label, text }) {
  return (
    <div>
      <p className="field-label mb-2">{label}</p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {text}
      </p>
    </div>
  );
}
