export const portfolioData = {
  personal: {
    name: "Olupalli Sai Chand",
    titles: [
      "Data Analyst",
      "Full-Stack Web Developer",
      "MCA Post Graduate",
      "Machine Learning Specialist",
      "Power BI & Tableau Developer"
    ],
    location: "Vijayawada, Andhra Pradesh, India",
    address: "MIG-22, Kavithas, Payakapuram, Vijayawada-520015",
    email: "saichanduvlk@gmail.com",
    phone: "+91 6281604742",
    github: "https://github.com/osc672",
    linkedin: "https://www.linkedin.com/in/saichand-olupalli-045ba6262/",
    resumeLink: "/Sai_Chand_Olupalli_Resume.pdf",
    bio: "Motivated Data Analyst & Full-Stack Web Developer with an MCA degree. Skilled in translating raw, multi-dimensional datasets into actionable executive insights with Power BI, Tableau, SQL, and Python, while crafting reactive, glassmorphism web applications using React, Node.js, and MySQL."
  },

  stats: [
    { label: "MCA Cumulative CGPA", value: "8.3", suffix: " / 10", icon: "fa-graduation-cap", color: "#38bdf8" },
    { label: "AI & Full-Stack Projects", value: "6", suffix: "+", icon: "fa-code", color: "#a855f7" },
    { label: "Verified Certifications", value: "15", suffix: "+", icon: "fa-award", color: "#10b981" },
    { label: "Research Publications", value: "3", suffix: "", icon: "fa-book-open", color: "#f59e0b" }
  ],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Kakaraparti Bhavanarayana College (Autonomous), Vijayawada",
      period: "2022 – 2024",
      grade: "8.3 / 10",
      level: "Post Graduation",
      specialization: "Advanced Software Engineering, Deep Learning & Database Architecture",
      icon: "fa-graduation-cap",
      color: "#6366f1",
      highlights: [
        "End-to-end Machine Learning pipelines with Python & OpenCV",
        "ACID-compliant MySQL schemas with optimized queries and indexes",
        "Authored peer-reviewed international conference research papers"
      ],
      demo: {
        title: "Major MCA Project Demo: Online Fake Logo Detection System",
        videoUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing"
      }
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (BSc – MPCs)",
      institution: "AG & SG Siddhartha Degree College of Arts & Science (Autonomous), Vuyyuru",
      period: "2019 – 2022",
      grade: "8.46 / 10",
      level: "Undergraduate Graduation",
      specialization: "Mathematics, Physics, and Computer Science",
      icon: "fa-atom",
      color: "#38bdf8",
      highlights: [
        "Strong quantitative modeling and mathematical problem solving",
        "Gaussian Elimination & Matrix Factorization implementations",
        "Distinguished graduation score ranking at top percentile of department"
      ]
    },
    {
      id: "inter",
      degree: "Intermediate (MPC)",
      institution: "AG & SGS Junior College, Vuyyuru",
      period: "2017 – 2019",
      grade: "7.73 / 10",
      level: "Higher Secondary Education",
      specialization: "Mathematics, Physics, Chemistry",
      icon: "fa-flask",
      color: "#a855f7",
      highlights: [
        "Advanced Algebra, Trigonometry, Coordinate Geometry & Calculus",
        "Mechanics, Thermodynamics, Optics & Wave Theory",
        "Hands-on scientific laboratory analysis and data recording"
      ]
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "JESUS EM & TM School, Veerankilaku",
      period: "2016 – 2017",
      grade: "8.3 / 10",
      level: "Secondary Schooling",
      specialization: "General Sciences & Mathematics",
      icon: "fa-school",
      color: "#10b981",
      highlights: [
        "Active school team leader and science quiz competitor",
        "District-level science exhibitions demonstrating electromagnetic induction",
        "Distinguished secondary grading establishing baseline for STEM study"
      ]
    }
  ],

  skills: {
    technical: [
      { name: "Python", level: 90, icon: "fab fa-python", desc: "Data Analysis, Pandas, NumPy, Scikit-learn, CNN Deep Learning models & automation scripts." },
      { name: "SQL & MySQL", level: 88, icon: "fas fa-database", desc: "Complex queries, window functions, relational database architecture, triggers, schema optimization." },
      { name: "React.js", level: 85, icon: "fab fa-react", desc: "Modern React with hooks, component state, SPA routing, and dynamic glassmorphism UI." },
      { name: "Node.js & Express", level: 84, icon: "fab fa-node-js", desc: "REST APIs, asynchronous middlewares, SMTP Nodemailer engine, CORS, full-stack integration." },
      { name: "Machine Learning & CNN", level: 80, icon: "fas fa-brain", desc: "Computer vision, image classification, transfer learning, model evaluation with TensorFlow/Keras." },
      { name: "HTML5 & Vanilla CSS3", level: 92, icon: "fab fa-html5", desc: "Semantic HTML, responsive glassmorphism layouts, CSS variables, keyframe animations." }
    ],
    tools: [
      { name: "Power BI", level: 88, icon: "fas fa-chart-column", desc: "Interactive executive dashboards, DAX queries, data modeling, multi-source ETL pipelines." },
      { name: "Tableau", level: 84, icon: "fas fa-chart-pie", desc: "Visual storytelling, calculated fields, dynamic parameters, geographical heatmaps." },
      { name: "Microsoft Excel", level: 90, icon: "fas fa-file-excel", desc: "VLOOKUP/XLOOKUP, Pivot Tables, nested formulas, financial summaries, trend forecasting." },
      { name: "Git & GitHub", level: 82, icon: "fab fa-github", desc: "Version control, branching strategies, collaborative repository management." },
      { name: "Google Colab & Jupyter", level: 88, icon: "fab fa-google", desc: "Cloud GPU acceleration, exploratory data analysis, prototype model training." }
    ],
    soft: [
      { name: "Data-Driven Decision Making", level: 92, icon: "fas fa-lightbulb", desc: "Transforming ambiguous business questions into clear, quantitative KPI insights." },
      { name: "Executive Storytelling", level: 88, icon: "fas fa-comments", desc: "Communicating complex analytical models to non-technical stakeholders clearly." },
      { name: "Critical Problem Solving", level: 90, icon: "fas fa-puzzle-piece", desc: "Root-cause diagnostics, algorithmic optimization, proactive debugging." },
      { name: "Continuous Learning", level: 95, icon: "fas fa-book-open", desc: "Rapidly mastering emerging AI models, full-stack frameworks, and cloud utilities." }
    ]
  },

  projects: [
    {
      id: "fake-logo",
      title: "Online Fake Logo Detection System",
      category: "Major MCA Deep Learning Project",
      badge: "Computer Vision & AI",
      period: "2023 – 2024",
      description: "An advanced computer vision system leveraging Convolutional Neural Networks (CNNs) to detect manipulated, forged, and counterfeit brand logos across eCommerce marketplaces to protect intellectual property.",
      tags: ["Python", "CNN", "Deep Learning", "OpenCV", "Google Colab", "TensorFlow"],
      highlights: [
        "Trained on comprehensive multi-brand datasets achieving 98.2% test accuracy",
        "Feature extraction robust against rotations, crops, color skew & blurring",
        "Automated inference pipeline with visual bounding box reports"
      ],
      demoLink: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      githubLink: "https://github.com/osc672",
      gradient: "from-indigo-600 to-purple-600",
      bgGlow: "99,102,241"
    },
    {
      id: "osc-bot",
      title: "OSC_BOT: Generative AI Assistant",
      category: "Cloud Bot & Intelligent System",
      badge: "LLM / Telegram Bot",
      period: "2024",
      description: "An interactive Telegram bot integrating modern Generative AI / Large Language Models to deliver contextual question-answering, code debugging, and task automation on demand.",
      tags: ["Python", "Telegram API", "Generative AI", "REST APIs", "AsyncIO"],
      highlights: [
        "Instant natural language answers to complex queries",
        "24/7 cloud availability via Telegram webhook",
        "Supports markdown responses and structured syntax formatting"
      ],
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      gradient: "from-sky-500 to-cyan-500",
      bgGlow: "56,189,248"
    },
    {
      id: "vqa-bot",
      title: "VQA_BOT: Visual Question Answering Assistant",
      category: "Multimodal Deep Learning",
      badge: "Computer Vision + NLP",
      period: "2024",
      description: "A multimodal AI Telegram bot combining Computer Vision and Natural Language Processing. Users upload images alongside text questions, and the bot accurately parses image contents to generate contextual answers.",
      tags: ["Python", "PyTorch", "Vision Transformers", "Telegram Bot API"],
      highlights: [
        "Multimodal fusion of image feature embeddings and text prompts",
        "Real-time image classification and object localization",
        "Interactive chatbot interface"
      ],
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      gradient: "from-purple-600 to-pink-600",
      bgGlow: "168,85,247"
    },
    {
      id: "smtp-engine",
      title: "Automated SMTP Mail Engine & Transactional Backend",
      category: "Backend & Cloud Communication",
      badge: "Node.js & Nodemailer",
      period: "2024",
      description: "Engineered a secure, asynchronous SMTP email dispatch system powered by Node.js, Express, and Nodemailer with Gmail SMTP. Seamlessly integrates with contact form endpoints to transmit instant, structured notifications.",
      tags: ["Node.js", "Express", "Nodemailer", "SMTP", "REST API", "Gmail API", "Async/Await"],
      highlights: [
        "Configured secure TLS/SSL transport with Google App Password authentication protocol",
        "Automated transactional notification emails triggered by client inquiries in <200ms",
        "Built-in request validation, email regex sanitization, and structured HTML message templates",
        "Live-tested and verified with 100% reliable inbox delivery"
      ],
      githubLink: "https://github.com/osc672/saichandportfolio",
      gradient: "from-amber-500 to-orange-600",
      bgGlow: "245,158,11"
    },
    {
      id: "responsive-websites",
      title: "Modern Full-Stack Websites & Interactive Portfolios",
      category: "Web Engineering & UI/UX",
      badge: "React & Modern UI",
      period: "2024",
      description: "Architected high-performance, responsive websites and interactive web applications using React, Vite, Tailwind CSS, and glassmorphism styling. Features smooth micro-animations, particle canvases, and mobile-first layouts.",
      tags: ["React.js", "Vite", "JavaScript", "HTML5", "CSS3", "Glassmorphism", "Responsive Web"],
      highlights: [
        "Built modular React component architecture with 60 FPS hardware-accelerated animations",
        "Integrated dynamic interactive elements: Aurora mesh gradients, particle networks, and 3D tilt cards",
        "Engineered accessible, fully responsive layouts across mobile, tablet, and ultra-wide displays",
        "Optimized production bundle delivering sub-second load times and high Lighthouse performance"
      ],
      githubLink: "https://github.com/osc672",
      gradient: "from-emerald-500 to-cyan-500",
      bgGlow: "16,185,129"
    }
  ],

  publications: [
    {
      title: "Convolutional Neural Networks for Electronic Health Records",
      conference: "International Conference on Recent Trends in Machine Learning and Computer Applications (ICRTMLCA-2024)",
      date: "February 2024",
      doi: "Published in Conference Proceedings",
      summary: "Explored how deep CNN architectures can be applied to multi-structured electronic health records and medical imaging data to predict patient risk profiles with reduced clinical latency.",
      tags: ["CNN", "Healthcare Informatics", "Deep Learning", "Risk Prediction"],
      color: "#6366f1"
    },
    {
      title: "Machine Learning Approaches in Drug Discovery & Clinical Analytics",
      conference: "National Symposium on Computational Biology & Data Intelligence",
      date: "October 2023",
      doi: "Indexed Academic Research",
      summary: "Investigated predictive machine learning algorithms for molecular affinity scoring and compound screening, dramatically shrinking early-phase pharmaceutical screening timelines.",
      tags: ["Machine Learning", "Drug Discovery", "Data Science"],
      color: "#a855f7"
    },
    {
      title: "Mobile Application Problem Solving Frameworks in Rural Connectivity",
      conference: "International Journal of Emerging Trends in Computer Science",
      date: "May 2023",
      doi: "Peer-Reviewed Article",
      summary: "Architected a lightweight offline-first mobile sync model enabling low-latency data entry and caching in network-constrained environments.",
      tags: ["Mobile Architecture", "Offline Sync", "Distributed Systems"],
      color: "#38bdf8"
    }
  ],

  certifications: [
    { title: "Data Analytics with Python", issuer: "FixityEDX", category: "Data Analytics", year: "2024", icon: "fa-chart-line", color: "#38bdf8" },
    { title: "Machine Learning & AI Specialization", issuer: "Indian Servers", category: "AI & Python", year: "2024", icon: "fa-brain", color: "#6366f1" },
    { title: "Business Analytics with Excel", issuer: "Simplilearn", category: "Data Analytics", year: "2023", icon: "fa-file-excel", color: "#10b981" },
    { title: "Python for Data Science", issuer: "Cognitive Class / IBM", category: "AI & Python", year: "2023", icon: "fa-python", color: "#f59e0b" },
    { title: "Database Management & SQL", issuer: "NPTEL / IIT Kharagpur", category: "Web & Programming", year: "2023", icon: "fa-database", color: "#a855f7" },
    { title: "Power BI for Business Intelligence", issuer: "Great Learning", category: "Data Analytics", year: "2023", icon: "fa-chart-bar", color: "#06b6d4" },
    { title: "Modern Web Development", issuer: "Simplilearn", category: "Web & Programming", year: "2023", icon: "fa-globe", color: "#ec4899" },
    { title: "Tableau Desktop Qualified Prep", issuer: "Great Learning", category: "Data Analytics", year: "2024", icon: "fa-chart-pie", color: "#38bdf8" }
  ],

  techStack: [
    "Python", "React.js", "Node.js", "SQL / MySQL", "Power BI", "Tableau",
    "TensorFlow", "OpenCV", "Excel", "Git", "REST APIs", "Deep Learning",
    "HTML5", "CSS3", "Pandas", "NumPy", "Scikit-learn", "Jupyter"
  ]
};
