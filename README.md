# Shivendra Sony — Portfolio

A recruiter-focused developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Content status

- ✅ Real profile photo, bundled at `public/images/profile.jpg`, shown in the About section
- ✅ Name, email, phone, GitHub, LinkedIn — filled in
- ✅ Resume PDF — bundled at `public/resume/Shivendra-Sony-Resume.pdf`
- ✅ Skills — matches your resume: Programming, Backend Frameworks, API
  Development, Data Engineering, Databases & ORM, Data Analysis &
  Visualization, Tools & Practices, Core CS Concepts
- ✅ Experience — Data Science Intern at Alpha Intern 2.0, linked to your
  House Price Prediction repo
- ✅ Featured projects (full detail cards + live demo links where hosted):
  - **GharDekho** — Django/DRF/PostgreSQL/JWT real estate backend, linked to
    both `ghardekho-backend` and `ghardekho-frontend`
  - **Blog App — REST API** — FastAPI/SQLAlchemy/Pydantic
  - **AI Customer Risk Analyzer** — ANN-based churn predictor, live on
    Streamlit Community Cloud
  - **Tic-Tac-Toe — Real-Time Multiplayer** — dependency-free Node.js game
    server, live on Render
- ✅ "More on GitHub" grid — your remaining public repos (BhoomiKart,
  Jyoti-Studio, Demo_Products, Movie Recommender System, Spam Mail
  Prediction, and the Codsoft ML projects), linked directly
- ✅ Education — MMU Mullana (B.Tech CSE), BD College Patna, DB Public School
- ✅ Achievements — Deloitte job simulation, Xplore full-stack training, Smart
  India Hackathon, Vasudhaiva Kutumbakam event
- ✅ Contact — email, phone, and a live Formspree endpoint wired up

Everything lives in **`src/data/portfolio.js`** if you want to tweak wording,
swap the photo, or add more projects later.

## Contact form — already wired up

`.env` is set with your real Formspree endpoint:
```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/mwlkjenp
```
This works locally right away. **When you deploy**, `.env` itself won't be
pushed to GitHub (it's git-ignored on purpose, so you never accidentally
commit a secret) — you'll need to add the same `VITE_CONTACT_ENDPOINT`
variable in your hosting provider's dashboard (Vercel/Netlify both have an
"Environment Variables" section — see below).

## Hosting this site (recommended: Vercel)

This is a static Vite build, so any static host works. Vercel is the
easiest for a React/Vite app and has a solid free tier.

**Option A — Vercel via GitHub (recommended, auto-redeploys on every push)**

1. Push this project to a new GitHub repo (e.g. `shivendra-portfolio`).
2. Go to vercel.com → New Project → import that repo.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Under Environment Variables, add:
   ```
   VITE_CONTACT_ENDPOINT = https://formspree.io/f/mwlkjenp
   ```
5. Deploy. You get a free `*.vercel.app` URL immediately, and can attach a
   custom domain later from the same dashboard.

**Option B — Netlify (same idea)**

1. Push to GitHub as above.
2. netlify.com → Add new site → Import an existing project → pick the repo.
3. Build command `npm run build`, publish directory `dist`.
4. Add `VITE_CONTACT_ENDPOINT` under Site settings → Environment variables.
5. Deploy.

**Option C — quick one-off, no GitHub needed**

1. Locally: `npm install && npm run build` — this produces a `dist/` folder.
2. Go to app.netlify.com/drop and drag the `dist` folder in.
3. You get a live URL instantly, but the contact form's env var won't be
   picked up this way unless you `npm run build` locally with `.env` already
   in place first (which it is) — the value gets baked into the build output.
   You'll need to redo this manually each time you make changes, since
   there's no repo connected — Option A/B is better long-term.

After deploying, update `public/sitemap.xml` and the `og:url`/canonical tags
in `index.html` to your real domain once you have one.

## What's already implemented

- Dark mode by default, light mode toggle, preference saved to `localStorage`,
  respects system preference on first visit
- Sticky navbar with scroll-spy active state + mobile menu
- Hero, About (with your photo), Skills, Experience (timeline), Projects
  (featured cards with detail modal + live demo links + a linked grid of
  every other GitHub repo), Education, Achievements, Contact, Footer
- Contact form: client-side validation, honeypot spam field, loading/success/
  error states, disabled-while-submitting guard, live Formspree endpoint
- Scroll progress bar, back-to-top button, copy-email-to-clipboard
- `prefers-reduced-motion` respected sitewide
- SEO meta tags, Open Graph/Twitter tags, `robots.txt`, `sitemap.xml`
- Fully responsive from 320px up

## Project structure

```
src/
├── components/     # one file per section/UI piece
├── data/
│   └── portfolio.js   # single source of truth for all content
├── hooks/
├── App.jsx
└── main.jsx
public/
├── images/
│   └── profile.jpg
└── resume/
    └── Shivendra-Sony-Resume.pdf
```
