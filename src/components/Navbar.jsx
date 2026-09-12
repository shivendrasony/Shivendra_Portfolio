import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { navLinks, portfolio } from "../data/portfolio";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-[var(--bg)]/80 border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
        >
          Shivendra<span style={{ color: "var(--accent)" }}>.</span>Sony
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="relative px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
              <span
                className="absolute left-3 right-3 -bottom-0.5 h-px transition-transform origin-left"
                style={{
                  backgroundColor: "var(--accent)",
                  transform: active === link.href ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={portfolio.personal.resume}
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <Download size={14} /> Resume
          </a>
          <button
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="p-2 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-md border border-[var(--border)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="container-page py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="py-3 text-sm border-b border-[var(--border)] last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
