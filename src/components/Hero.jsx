import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";
import { portfolio } from "../data/portfolio";

const QUERIES = [
  "SELECT skill FROM shivendra WHERE domain = 'backend';",
  "SELECT skill FROM shivendra WHERE domain = 'data_engineering';",
  "INSERT INTO projects (name, status) VALUES ('next_one', 'building');",
];

export default function Hero() {
  const [queryIndex, setQueryIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      setQueryIndex((i) => (i + 1) % QUERIES.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { icon: Github, href: portfolio.personal.github, label: "GitHub" },
    { icon: Linkedin, href: portfolio.personal.linkedin, label: "LinkedIn" },
    {
      icon: Mail,
      href: portfolio.personal.email ? `mailto:${portfolio.personal.email}` : "#contact",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background: subtle grid + gradient wash */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] -z-10 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--accent)" }}
      />

      <div className="container-page grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="field-label mb-4">role: fresher · focus: backend + data</p>

          <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            {portfolio.personal.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-[var(--text-muted)]">
            {portfolio.personal.title} <span style={{ color: "var(--accent)" }}>/</span>{" "}
            {portfolio.personal.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
            {portfolio.personal.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-5 py-3 rounded-md text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
            >
              View My Work
            </button>
            <a
              href={portfolio.personal.resume}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <Download size={15} /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href || "#"}
                target={href && href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div
            className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl"
            style={{ background: "var(--surface)" }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 field-label">shivendra@dev: ~/portfolio</span>
            </div>
            <div className="p-5 font-[var(--font-mono)] text-[13px] leading-relaxed">
              <p style={{ color: "var(--text-muted)" }}>$ python manage.py runserver</p>
              <p className="mt-1" style={{ color: "var(--accent)" }}>
                Starting development server...
              </p>
              <p style={{ color: "var(--text-muted)" }} className="mt-3">
                &gt;&gt;&gt;
              </p>
              <p key={queryIndex} className="mt-1 min-h-[2.5rem]" style={{ color: "var(--text)" }}>
                {QUERIES[queryIndex]}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Python", "Django", "SQL", "Apache Spark", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs border border-[var(--border)]"
                style={{ color: "var(--text-muted)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] animate-bounce"
      >
        <ArrowDown size={15} />
      </button>
    </section>
  );
}
