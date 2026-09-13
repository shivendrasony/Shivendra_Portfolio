import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { portfolio } from "../data/portfolio";

const SUGGESTIONS = [
  "What are his skills?",
  "Show me his projects",
  "What's his experience?",
  "How do I contact him?",
];

function buildSkillsAnswer() {
  const lines = Object.values(portfolio.skills).map(
    (cat) => `${cat.label}: ${cat.items.map((i) => i.name).join(", ")}`
  );
  return `Here's what he works with:\n\n${lines.join("\n")}`;
}

function buildProjectsAnswer() {
  const lines = portfolio.projects.map((p) => {
    const demo = p.demo ? ` — live at ${p.demo}` : "";
    return `• ${p.name} (${p.stack.join(", ")})${demo}`;
  });
  return `A few things he's built:\n\n${lines.join(
    "\n"
  )}\n\nScroll down to the Projects section for full write-ups, or check GitHub for everything else.`;
}

function buildExperienceAnswer() {
  if (portfolio.experience.length === 0) {
    return "He hasn't held a full-time role yet — he's a fresher building experience through self-directed projects. Check the Projects section to see what he's built.";
  }
  return portfolio.experience
    .map((e) => `${e.title} at ${e.company} (${e.period}): ${e.description}`)
    .join("\n\n");
}

function buildEducationAnswer() {
  return portfolio.education
    .map(
      (e) =>
        `${e.degree} — ${e.institution}${e.location ? ", " + e.location : ""} (${e.year}${
          e.score ? ", " + e.score : ""
        })`
    )
    .join("\n");
}

function buildContactAnswer() {
  const { email, phone, linkedin, github } = portfolio.personal;
  return `You can reach him at:\n${email}\n${phone}\nLinkedIn: ${linkedin}\nGitHub: ${github}\n\nOr just use the contact form on this page.`;
}

function buildResumeAnswer() {
  return "You can download his resume using the 'Resume' button in the navbar, or 'Download Resume' in the hero section.";
}

function buildAchievementsAnswer() {
  if (portfolio.achievements.length === 0) return "No achievements listed yet.";
  return portfolio.achievements
    .map((a) => `• ${a.title}${a.description ? " — " + a.description : ""}`)
    .join("\n");
}

function buildAboutAnswer() {
  return portfolio.about.paragraphs[0];
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getAnswer(rawInput) {
  const input = rawInput.toLowerCase();
  const has = (...words) =>
    words.some((w) => new RegExp(`\\b${escapeRegExp(w)}\\b`, "i").test(input));

  if (has("hi", "hello", "hey", "namaste")) {
    return "Hey! I can tell you about his skills, projects, experience, education, or how to contact him. What would you like to know?";
  }
  if (
    has(
      "skill",
      "technology",
      "tech stack",
      "language",
      "framework",
      "python",
      "django",
      "fastapi",
      "spark",
      "sql"
    )
  ) {
    return buildSkillsAnswer();
  }
  if (
    has(
      "project",
      "github",
      "repo",
      "built",
      "build",
      "ghardekho",
      "blog app",
      "tic-tac-toe",
      "tic tac toe",
      "analyzer",
      "ann"
    )
  ) {
    return buildProjectsAnswer();
  }
  if (has("experience", "intern", "job", "work history", "internship")) {
    return buildExperienceAnswer();
  }
  if (has("education", "degree", "college", "university", "cgpa", "study", "school")) {
    return buildEducationAnswer();
  }
  if (has("contact", "email", "phone", "reach", "hire", "linkedin", "connect")) {
    return buildContactAnswer();
  }
  if (has("resume", "cv")) {
    return buildResumeAnswer();
  }
  if (has("achievement", "certification", "certificate", "hackathon", "award")) {
    return buildAchievementsAnswer();
  }
  if (has("who", "about", "summary", "tell me about")) {
    return buildAboutAnswer();
  }
  if (has("thank")) {
    return "You're welcome! Anything else you'd like to know?";
  }
  if (has("bye")) {
    return "Thanks for stopping by! Feel free to reach out through the Contact section.";
  }

  return "I'm not sure about that one — try asking about his skills, projects, experience, education, achievements, or how to contact him.";
}

export default function AskBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: `Hi, I'm a quick Q&A bot for ${portfolio.personal.name}'s portfolio. Ask me about his skills, projects, experience, or how to get in touch.`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const answer = getAnswer(trimmed);
    setMessages((m) => [...m, { role: "user", text: trimmed }, { role: "bot", text: answer }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5"
        style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-40 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] flex flex-col rounded-xl border border-[var(--border)] shadow-2xl overflow-hidden"
            style={{ background: "var(--surface)" }}
          >
            <div className="px-4 py-3 border-b border-[var(--border)]">
              <p className="text-sm font-medium">Ask about {portfolio.personal.name}</p>
              <p className="field-label mt-0.5">Instant answers from his resume — not a live AI</p>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-lg text-sm whitespace-pre-line ${
                    m.role === "user" ? "ml-auto" : ""
                  }`}
                  style={
                    m.role === "user"
                      ? { background: "var(--accent)", color: "var(--accent-contrast)" }
                      : { background: "var(--bg-elevated)", border: "1px solid var(--border)" }
                  }
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="px-4 pb-3 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 px-4 py-3 border-t border-[var(--border)]"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                aria-label="Ask a question"
                className="flex-1 text-sm bg-transparent outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="p-2 rounded-md"
                style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
