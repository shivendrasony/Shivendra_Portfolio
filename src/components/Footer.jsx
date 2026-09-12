import { Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-[var(--font-display)] font-semibold">{portfolio.personal.name}</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Building, learning, and growing through code.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={portfolio.personal.github || "#"}
            target={portfolio.personal.github ? "_blank" : undefined}
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={portfolio.personal.linkedin || "#"}
            target={portfolio.personal.linkedin ? "_blank" : undefined}
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={portfolio.personal.email ? `mailto:${portfolio.personal.email}` : "#contact"}
            aria-label="Email"
            className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
      <p className="text-center text-xs mt-8" style={{ color: "var(--text-muted)" }}>
        © 2026 {portfolio.personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
