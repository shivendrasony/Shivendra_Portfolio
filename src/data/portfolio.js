// Centralized portfolio data.
// Edit this file to update site content — components read from here,
// nothing is hardcoded in the UI.

export const portfolio = {
  personal: {
    name: "Shivendra Sony",
    title: "Computer Science Graduate",
    tagline: "Software & Data Enthusiast",
    subheadline:
      "Building practical software and data-driven solutions with modern technologies.",
    intro:
      "I build practical applications and data-driven solutions using Python, backend frameworks, SQL, and data engineering tools — with hands-on experience across REST APIs, data pipelines, and analytical dashboards.",
    location: "Ambala, Haryana, India",
    email: "shivendrasony22@gmail.com",
    phone: "+91 8210877490",
    github: "https://github.com/shivendrasony/",
    linkedin: "https://www.linkedin.com/in/shivendra-sony-8232b5247/",
    resume: "/resume/Shivendra-Sony-Resume.pdf",
    photo: "/images/profile.jpg",
  },

  about: {
    headline: "Turning concepts into practical software.",
    paragraphs: [
      "I'm a Computer Science undergraduate with strong foundations in Python, SQL, backend development, and data processing, currently finishing my B.Tech in Computer Science Engineering. I like understanding how systems are put together — from a REST API's request lifecycle to how a Spark job moves data through a pipeline.",
      "Most of what I know comes from building: writing Django and FastAPI backends with JWT authentication, modeling data across PostgreSQL, MySQL, and SQLite, and working through the rough edges that only show up once code actually runs. I'm comfortable moving between backend development, data engineering, and data analytics work.",
      "I'm early in my career, but I approach every project like it has to hold up in production, and I'm actively looking for opportunities to keep growing on a real team.",
    ],
    facts: [
      "Computer Science Undergraduate",
      "Project-Based Experience",
      "Backend, APIs & Data Engineering",
      "Quick Learner, Adaptable Across Roles",
    ],
  },

  skills: {
    programming: {
      label: "Programming",
      items: [
        { name: "Python", note: "Primary language for scripting & backend logic" },
        { name: "SQL", note: "Querying, joins, schema design" },
        { name: "JavaScript (Basic)", note: "Frontend fundamentals" },
      ],
    },
    backend: {
      label: "Backend Frameworks",
      items: [
        { name: "Django", note: "Models, views, ORM" },
        { name: "Django REST Framework", note: "Building REST APIs" },
        { name: "FastAPI", note: "Fast, typed, async-ready APIs" },
      ],
    },
    api: {
      label: "API Development",
      items: [
        { name: "REST APIs", note: "Designing & consuming endpoints" },
        { name: "JWT Authentication", note: "Secure user sessions" },
        { name: "OAuth (Basic)", note: "Third-party authentication flows" },
        { name: "Pydantic", note: "Request/response validation" },
        { name: "Swagger/OpenAPI (Basic)", note: "API documentation" },
      ],
    },
    data: {
      label: "Data Engineering",
      items: [
        { name: "PySpark", note: "Distributed data processing with Spark" },
        { name: "Apache Spark", note: "Batch data processing" },
        { name: "Data Warehouse Concepts", note: "Structuring data for analytics" },
      ],
    },
    databases: {
      label: "Databases & ORM",
      items: [
        { name: "PostgreSQL", note: "Primary relational database" },
        { name: "MySQL", note: "Relational database management" },
        { name: "SQLite", note: "Lightweight local storage" },
        { name: "SQLAlchemy", note: "ORM for FastAPI projects" },
        { name: "Django ORM", note: "ORM for Django projects" },
        { name: "RDBMS", note: "Relational database fundamentals" },
      ],
    },
    analysis: {
      label: "Data Analysis & Visualization",
      items: [
        { name: "Pandas", note: "Data manipulation & analysis" },
        { name: "NumPy (Basic)", note: "Numerical computing" },
        { name: "Power BI (Basic)", note: "Dashboards & reporting" },
        { name: "MS Excel", note: "Data analysis & reporting" },
      ],
    },
    tools: {
      label: "Tools & Practices",
      items: [
        { name: "Git", note: "Version control" },
        { name: "GitHub", note: "Collaboration & project hosting" },
        { name: "VS Code", note: "Daily development environment" },
        { name: "Jupyter Notebook", note: "Data exploration & ML workflows" },
        { name: "Postman", note: "API testing" },
        { name: "Unit Testing", note: "Verifying backend logic" },
      ],
    },
    concepts: {
      label: "Core CS Concepts",
      items: [
        { name: "OOPs", note: "Object-oriented programming" },
        { name: "Data Structures & Algorithms", note: "Problem-solving fundamentals" },
        { name: "DBMS", note: "Database management systems" },
        { name: "Operating Systems", note: "Core OS fundamentals" },
        { name: "Computer Networks", note: "Networking fundamentals" },
      ],
    },
  },

  experience: [
    {
      period: "Apr 2024 – May 2024",
      title: "Data Science Intern",
      company: "Alpha Intern 2.0 (Remote)",
      description:
        "Built an end-to-end Python data pipeline for house price prediction, covering data preprocessing and feature engineering on real-world datasets. Developed and evaluated a Random Forest Regressor model, achieving an R² score of 0.61 using MAE and MSE metrics. Applied strong Python scripting and data-handling skills that carry directly into backend data processing work.",
      github: "https://github.com/shivendrasony/House_Price_Prediction_Using_Machine_Learning",
    },
  ],

  // Featured, in-depth projects — shown as full cards with a detail modal.
  projects: [
    {
      id: "ghardekho",
      name: "GharDekho — Real Estate REST API Backend",
      category: "Backend",
      short:
        "A REST API backend for a real estate platform, with JWT auth, role-based access, and CRUD APIs for property listings.",
      stack: ["Django", "Django REST Framework", "PostgreSQL", "JWT"],
      features: [
        "JWT-based authentication with role-based access control",
        "CRUD APIs for property listings with search, filtering, and saved properties",
        "Lead management and site-visit scheduling workflow",
        "Codebase split into modular Django apps (authentication, properties, leads, blog)",
        "PostgreSQL/SQLite integration for persistent storage",
      ],
      overview:
        "A backend application for a real estate platform — managing property listings, users, leads, and blog content through a structured, secure REST API.",
      problem:
        "Real estate platforms need more than basic listings — they need secure auth, lead tracking, scheduling, and content management working together in one maintainable codebase.",
      solution:
        "Built the backend on Django and Django REST Framework with JWT-based authentication and role-based access, structuring the app into modular Django apps for maintainability and scalability.",
      learning:
        "Strengthened my grasp of JWT authentication and role-based access control, modular Django app design, and building REST APIs that handle real-world CRUD, search, and scheduling logic.",
      github: "https://github.com/shivendrasony/ghardekho-backend",
      githubFrontend: "https://github.com/shivendrasony/ghardekho-frontend",
      demo: "", // TODO: Add live demo URL if deployed
      image: null,
    },
    {
      id: "blog-app-fastapi",
      name: "Blog App — REST API",
      category: "Backend",
      short:
        "A RESTful blog API built with FastAPI — user auth, JWT sessions, and validated CRUD operations on blog posts.",
      stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Pydantic"],
      features: [
        "User registration, login, and JWT-based authentication",
        "CRUD operations for blog posts",
        "Request/response validation with Pydantic",
        "SQLAlchemy ORM with PostgreSQL for persistent storage",
        "Clean architecture: separate modules for auth, database, models, schemas, and routes",
      ],
      overview:
        "A blog platform's backend, built entirely on FastAPI, where users can register, authenticate, and manage posts through a validated REST API.",
      problem:
        "Fast, typed APIs need strict request/response validation and a clean module boundary to stay maintainable as they grow.",
      solution:
        "Used FastAPI with Pydantic for validation and SQLAlchemy ORM with PostgreSQL for storage, organizing the backend into separate modules for auth, database, models, schemas, and API routes.",
      learning:
        "Got hands-on with FastAPI's async-friendly design, Pydantic validation, and structuring a backend around clean architecture principles.",
      github: "https://github.com/shivendrasony/Blog_APP_FastAPI",
      demo: "",
      image: null,
    },
    {
      id: "ai-customer-risk-analyzer",
      name: "AI Customer Risk Analyzer",
      category: "Machine Learning",
      short:
        "A Streamlit web app that predicts customer churn risk in real time using a trained Artificial Neural Network.",
      stack: ["Python", "TensorFlow", "Scikit-learn", "Streamlit"],
      features: [
        "Predicts customer churn probability using a trained ANN",
        "Displays risk percentage split between churn vs. retention",
        "Real-time predictions through an interactive dashboard",
        "Preprocessing pipeline: gender/geography encoding and feature scaling",
      ],
      overview:
        "An interactive machine learning web app that predicts whether a customer is likely to churn, built around a trained Artificial Neural Network.",
      problem:
        "Spotting at-risk customers early requires a model that's both accurate and easy for a non-technical user to actually query.",
      solution:
        "Trained an ANN on customer data — with gender and geography encoding plus feature scaling — then wrapped it in a Streamlit dashboard that returns a real-time churn-risk percentage.",
      learning:
        "Learned how to take a model out of a notebook and into a deployed, interactive dashboard people can actually use.",
      github: "https://github.com/shivendrasony/Shivendra_Ann_Analyze",
      demo: "https://shiv-ann-analyze.streamlit.app",
      image: null,
    },
    {
      id: "tic-tac-toe",
      name: "Tic-Tac-Toe — Real-Time Multiplayer",
      category: "Web Development",
      short:
        "A browser-based, real-time multiplayer Tic-Tac-Toe game with shareable game rooms, built on a dependency-free Node.js server.",
      stack: ["Node.js", "JavaScript", "HTML/CSS"],
      features: [
        "Real-time multiplayer over private, shareable game rooms",
        "Turn tracking, win detection, and per-room score tracking",
        "Rematch voting between players",
        "Zero external dependencies — a hand-rolled Node.js HTTP server",
      ],
      overview:
        "A real-time multiplayer Tic-Tac-Toe game playable straight from the browser, with game state synced live between both players.",
      problem:
        "Syncing two players' moves in real time usually means reaching for a framework like Express or Socket.io before writing a single game rule.",
      solution:
        "Built a minimal Node.js server using only built-in modules — no Express, no Socket.io — that manages rooms, tracks turns and scores, and streams live state updates to both players.",
      learning:
        "Got hands-on with real-time state synchronization from scratch using Node's built-in HTTP module, without leaning on a framework.",
      github: "https://github.com/shivendrasony/Tic-Tac-Toe",
      demo: "https://tic-tac-toe-b2b4.onrender.com/",
      image: null,
    },
  ],

  // Lighter projects pulled straight from GitHub — shown as a simple linked grid,
  // not full detail cards, since only the repo name/language is confirmed (no
  // README descriptions available to source real feature claims from).
  otherProjects: [
    {
      name: "BhoomiKart",
      language: "TypeScript",
      github: "https://github.com/shivendrasony/BhoomiKart",
    },
    {
      name: "Jyoti-Studio",
      language: "JavaScript",
      github: "https://github.com/shivendrasony/Jyoti-Studio",
    },
    {
      name: "Demo_Products",
      language: "JavaScript",
      github: "https://github.com/shivendrasony/Demo_Products",
    },
    {
      name: "Movie Recommender System",
      language: "Jupyter Notebook",
      github: "https://github.com/shivendrasony/Movie_recommender_system",
    },
    {
      name: "Spam Mail Prediction",
      language: "Jupyter Notebook",
      github: "https://github.com/shivendrasony/Spam_Mail_Prediction",
    },
    {
      name: "Titanic Survival Prediction (Codsoft)",
      language: "Jupyter Notebook",
      github: "https://github.com/shivendrasony/Titanic_Survival_Project_Codsoft",
    },
    {
      name: "Iris Flower Classification (Codsoft)",
      language: "Jupyter Notebook",
      github: "https://github.com/shivendrasony/Iris_Flower_Classification_Project_Codsoft",
    },
    {
      name: "Sales Prediction (Codsoft)",
      language: "Jupyter Notebook",
      github: "https://github.com/shivendrasony/Sales_Prediction_Project_Codsoft",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Maharishi Markandeshwar University",
      location: "Mullana",
      year: "Aug 2022 – May 2026",
      score: "CGPA: 7.82/10",
    },
    {
      degree: "Class XII (PCM)",
      institution: "BD College",
      location: "Patna",
      year: "2022",
      score: "75.8%",
    },
    {
      degree: "Class X",
      institution: "DB Public School",
      location: "",
      year: "2020",
      score: "73.6%",
    },
  ],

  achievements: [
    {
      title: "Deloitte Australia Data Analytics Job Simulation",
      description: "Completed via Forage (2025).",
    },
    {
      title: "Full Stack Development Summer Training",
      description: "Completed via Xplore, May 26 – Jul 2, 2025.",
    },
    {
      title: "Smart India Hackathon 2024",
      description: "Qualified in the internal round.",
    },
    {
      title: "Vasudhaiva Kutumbakam Event",
      description: "Winning Fine Arts Team Member.",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
