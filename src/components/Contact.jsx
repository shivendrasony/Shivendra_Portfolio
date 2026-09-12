import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Copy, Check, Loader2 } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { portfolio } from "../data/portfolio";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message can't be empty.";
  return errors;
}

export default function Contact() {
  const [ref, inView] = useInView();
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [copied, setCopied] = useState(false);
  const submittingRef = useRef(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return;

    // Honeypot: bots fill hidden fields, humans never see this one.
    if (values.company) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    submittingRef.current = true;
    setStatus("sending");

    try {
      if (!CONTACT_ENDPOINT) {
        // No backend configured yet — fail gracefully rather than pretend it worked.
        throw new Error("Contact endpoint not configured");
      }
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  const copyEmail = async () => {
    if (!portfolio.personal.email) return;
    await navigator.clipboard.writeText(portfolio.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20">
      <div className="container-page" ref={ref}>
        <p className="field-label mb-3">08 / contact</p>
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl">
          Let's build something together.
        </h2>
        <p className="mt-4 max-w-lg" style={{ color: "var(--text-muted)" }}>
          Have an opportunity, project, or just want to connect? Feel free to reach out.
        </p>

        <div className="mt-12 grid md:grid-cols-[1fr_0.7fr] gap-10">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            onSubmit={onSubmit}
            noValidate
            className="space-y-4"
          >
            {/* Honeypot field — hidden from real users, catches simple bots */}
            <input
              type="text"
              name="company"
              value={values.company}
              onChange={onChange}
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={onChange}
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                error={errors.email}
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              value={values.subject}
              onChange={onChange}
              error={errors.subject}
            />
            <div>
              <label htmlFor="message" className="field-label block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                aria-invalid={Boolean(errors.message)}
                className="w-full rounded-md border px-3.5 py-2.5 text-sm bg-transparent resize-none"
                style={{ borderColor: errors.message ? "#dc2626" : "var(--border)" }}
              />
              {errors.message && <p className="text-xs mt-1 text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium disabled:opacity-60 transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "var(--accent-contrast)" }}
            >
              {status === "sending" && <Loader2 size={15} className="animate-spin" />}
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm mt-2" style={{ color: "var(--accent)" }} role="status">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm mt-2 text-red-500" role="alert">
                Something went wrong. Please try again or contact me directly via email.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-[var(--border)] p-6 h-fit space-y-4"
            style={{ background: "var(--surface)" }}
          >
            <p className="field-label">Other ways to reach me</p>

            <button
              onClick={copyEmail}
              disabled={!portfolio.personal.email}
              className="w-full flex items-center justify-between gap-2 text-sm px-3.5 py-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors disabled:opacity-50"
            >
              <span className="flex items-center gap-2">
                <Mail size={15} /> {portfolio.personal.email || "Email — coming soon"}
              </span>
              {portfolio.personal.email && (copied ? <Check size={14} /> : <Copy size={14} />)}
            </button>

            {portfolio.personal.phone && (
              <a
                href={`tel:${portfolio.personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-sm px-3.5 py-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
              >
                <Phone size={15} /> {portfolio.personal.phone}
              </a>
            )}

            <a
              href={portfolio.personal.linkedin || "#"}
              target={portfolio.personal.linkedin ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-3.5 py-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href={portfolio.personal.github || "#"}
              target={portfolio.personal.github ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-3.5 py-2.5 rounded-md border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <Github size={15} /> GitHub
            </a>

            {copied && (
              <div
                className="text-xs px-3 py-2 rounded-md text-center"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                Email copied!
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="field-label block mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className="w-full rounded-md border px-3.5 py-2.5 text-sm bg-transparent"
        style={{ borderColor: error ? "#dc2626" : "var(--border)" }}
      />
      {error && <p className="text-xs mt-1 text-red-500">{error}</p>}
    </div>
  );
}
