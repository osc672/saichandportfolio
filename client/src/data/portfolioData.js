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
    telegramBot: "https://t.me/OSCVLK_BOT",
    resumeLink: "https://drive.google.com/file/d/1S8O1P_apXtO6mmR8hX4ggP2lSBxFdgwy/view?usp=sharing",
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
        "ACID-compliant MySQL schemas with optimized queries",
        "Authored peer-reviewed international conference papers"
      ],
      demo: {
        title: "Online Fake Logo Detection System",
        videoUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing"
      }
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (BSc – MPCs)",
      institution: "AG & SG Siddhartha Degree College of Arts & Science (Autonomous), Vuyyuru",
      period: "2019 – 2022",
      grade: "8.46 / 10",
      level: "Undergraduate",
      specialization: "Mathematics, Physics & Computer Science",
      icon: "fa-atom",
      color: "#38bdf8",
      highlights: [
        "Strong quantitative modeling and mathematical problem solving",
        "Gaussian Elimination & Matrix Factorization implementations",
        "Top percentile graduation score in department"
      ]
    },
    {
      id: "inter",
      degree: "Intermediate (MPC)",
      institution: "AG & SGS Junior College, Vuyyuru",
      period: "2017 – 2019",
      grade: "7.73 / 10",
      level: "Higher Secondary",
      specialization: "Mathematics, Physics, Chemistry",
      icon: "fa-flask",
      color: "#a855f7",
      highlights: [
        "Advanced Calculus, Differential Equations, Vector Analysis",
        "Mechanics, Thermodynamics & Wave Theory",
        "Hands-on scientific laboratory analysis"
      ]
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "JESUS EM & TM School, Veerankilaku",
      period: "2016 – 2017",
      grade: "8.3 / 10",
      level: "Secondary School",
      specialization: "General Sciences & Mathematics",
      icon: "fa-school",
      color: "#10b981",
      highlights: [
        "Active school team leader and science quiz competitor",
        "District-level science exhibitions on electromagnetic induction",
        "Distinguished secondary grading"
      ]
    }
  ],

  skills: {
    technical: [
      { name: "Python", level: 90, icon: "fa-python", desc: "Data Analysis, Pandas, NumPy, Scikit-learn, CNN Deep Learning & automation scripts." },
      { name: "SQL & MySQL", level: 88, icon: "fa-database", desc: "Complex queries, window functions, relational DB architecture, triggers, schema optimization." },
      { name: "React.js", level: 85, icon: "fa-react", desc: "Modern React with hooks, SPA routing, and dynamic glassmorphism UI." },
      { name: "Node.js & Express", level: 84, icon: "fa-node-js", desc: "REST APIs, async middlewares, SMTP Nodemailer, CORS, full-stack integration." },
      { name: "Machine Learning & CNN", level: 80, icon: "fa-brain", desc: "Computer vision, image classification, transfer learning with TensorFlow/Keras." },
      { name: "HTML5 & CSS3", level: 92, icon: "fa-html5", desc: "Semantic HTML, responsive glassmorphism layouts, CSS variables, keyframe animations." }
    ],
    tools: [
      { name: "Power BI", level: 88, icon: "fa-chart-bar", desc: "Interactive dashboards, DAX queries, data modeling, multi-source ETL pipelines." },
      { name: "Tableau", level: 84, icon: "fa-chart-pie", desc: "Visual storytelling, calculated fields, dynamic parameters, geographical heatmaps." },
      { name: "Microsoft Excel", level: 90, icon: "fa-file-excel", desc: "VLOOKUP/XLOOKUP, Pivot Tables, nested formulas, financial summaries, trend forecasting." },
      { name: "Git & GitHub", level: 82, icon: "fa-github", desc: "Version control, branching strategies, collaborative repository management." },
      { name: "Google Colab & Jupyter", level: 88, icon: "fa-google", desc: "Cloud GPU acceleration, exploratory data analysis, prototype model training." }
    ],
    soft: [
      { name: "Data-Driven Decision Making", level: 92, icon: "fa-lightbulb", desc: "Transforming ambiguous business questions into clear, quantitative KPI insights." },
      { name: "Executive Storytelling", level: 88, icon: "fa-comments", desc: "Communicating complex analytical models to non-technical stakeholders clearly." },
      { name: "Critical Problem Solving", level: 90, icon: "fa-puzzle-piece", desc: "Root-cause diagnostics, algorithmic optimization, proactive debugging." },
      { name: "Continuous Learning", level: 95, icon: "fa-book", desc: "Rapidly mastering emerging AI models, full-stack frameworks, and cloud utilities." }
    ]
  },

  projects: [
    {
      id: "fake-logo",
      title: "Online Fake Logo Detection System",
      category: "Deep Learning / Computer Vision",
      badge: "Major MCA Project",
      period: "2023 – 2024",
      description: "An advanced CNN-powered system to detect manipulated, forged, and counterfeit brand logos across eCommerce marketplaces, protecting intellectual property at scale.",
      tags: ["Python", "CNN", "Deep Learning", "OpenCV", "Google Colab", "TensorFlow"],
      highlights: [
        "98.2% test accuracy on multi-brand datasets",
        "Robust against rotations, crops & color skew",
        "Automated inference with visual bounding box reports"
      ],
      demoLink: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      githubLink: "https://github.com/osc672",
      gradient: "from-indigo-600 to-purple-600",
      bgGlow: "99,102,241"
    },
    {
      id: "osc-bot",
      title: "OSC_BOT: Generative AI Assistant",
      category: "Cloud Bot / Intelligent System",
      badge: "LLM / Telegram Bot",
      period: "2024",
      description: "An interactive Telegram bot integrating modern Generative AI / LLMs to deliver contextual question-answering, code debugging, and task automation on demand.",
      tags: ["Python", "Telegram API", "Generative AI", "REST APIs", "AsyncIO"],
      highlights: [
        "Instant natural language answers to complex queries",
        "24/7 cloud availability via Telegram webhook",
        "Supports markdown responses and structured syntax"
      ],
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      gradient: "from-sky-500 to-cyan-500",
      bgGlow: "56,189,248"
    },
    {
      id: "vqa-bot",
      title: "VQA_BOT: Visual Question Answering",
      category: "Multimodal Deep Learning",
      badge: "Computer Vision + NLP",
      period: "2024",
      description: "A multimodal AI Telegram bot combining Computer Vision and NLP. Users upload images alongside text questions and the bot generates contextual answers from image content.",
      tags: ["Python", "PyTorch", "Vision Transformers", "Telegram Bot API"],
      highlights: [
        "Multimodal fusion of image embeddings and text prompts",
        "Real-time image classification and object localization",
        "Interactive chatbot interface with streaming responses"
      ],
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      gradient: "from-purple-600 to-pink-600",
      bgGlow: "168,85,247"
    }
  ],

  publications: [
    {
      title: "Convolutional Neural Networks for Electronic Health Records",
      conference: "ICRTMLCA-2024 – International Conference on Recent Trends in Machine Learning and Computer Applications",
      date: "February 2024",
      doi: "Published in Conference Proceedings",
      summary: "Explored how deep CNN architectures can be applied to multi-structured EHR and medical imaging data to predict patient risk profiles with reduced clinical latency.",
      tags: ["CNN", "Healthcare Informatics", "Deep Learning", "Risk Prediction"],
      color: "#6366f1"
    },
    {
      title: "Machine Learning Approaches in Drug Discovery & Clinical Analytics",
      conference: "National Symposium on Computational Biology & Data Intelligence",
      date: "October 2023",
      doi: "Indexed Academic Research",
      summary: "Investigated predictive ML algorithms for molecular affinity scoring and compound screening, dramatically shrinking early-phase pharmaceutical screening timelines.",
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

