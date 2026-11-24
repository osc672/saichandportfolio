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
    { label: "AI & Full-Stack Projects", value: "11", suffix: "+", icon: "fa-code", color: "#a855f7" },
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
      id: "alertngo",
      title: "Alert NGO Platform",
      category: "Website Rebuild",
      badge: "Rebuild a Website",
      period: "2024",
      description: "Complete architectural and visual rebuild of the Alert NGO platform. Engineered a fast, accessible, responsive portal featuring humanitarian initiative showcases, donor engagement funnels, and dynamic event management.",
      tags: ["React", "Vite", "Website Rebuild", "UI/UX Redesign", "Tailwind CSS", "Vercel"],
      highlights: [
        "Complete modern architectural rebuild of the legacy NGO site",
        "Mobile-first responsive layout with fast client-side navigation",
        "Live production deployment with instant global CDN on Vercel"
      ],
      liveUrl: "https://alertngo.vercel.app",
      demoLink: "https://alertngo.vercel.app",
      githubLink: "https://github.com/osc672/alertngo",
      directUrl: "https://alertngo.vercel.app",
      gradient: "from-amber-500 to-orange-600",
      bgGlow: "245,158,11",
      filterGroup: "websites",
      actionLabel: "Open Live Website (Vercel)"
    },
    {
      id: "sri-royal-living",
      title: "Sri Royal Living",
      category: "Website Creation",
      badge: "Website Creation",
      period: "2024",
      description: "Bespoke commercial website creation for Sri Royal Living luxury furniture and home decor. Features a curated high-definition product catalog, responsive showroom gallery, and friction-free customer inquiry funnels.",
      tags: ["React", "Website Creation", "Luxury Catalog", "E-Commerce", "Responsive UI", "Vercel"],
      highlights: [
        "Custom commercial website creation built from the ground up",
        "Interactive luxury furniture catalog with aesthetic layout",
        "Live production deployment on Vercel"
      ],
      liveUrl: "https://sri-royal-living.vercel.app",
      demoLink: "https://sri-royal-living.vercel.app",
      githubLink: "https://github.com/osc672/sri-royal-living",
      directUrl: "https://sri-royal-living.vercel.app",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "16,185,129",
      filterGroup: "websites",
      actionLabel: "Open Live Website (Vercel)"
    },
    {
      id: "voneuk",
      title: "MSKC Tech Ltd (Vone UK)",
      category: "Website Creation",
      badge: "Website Creation",
      period: "2024",
      description: "End-to-end full-stack corporate website creation and custom CMS dashboard for MSKC Tech Ltd (UK). Encompasses 12 service verticals, interactive case studies, blog management engine, and customer enquiry automation.",
      tags: ["React", "Vite", "PHP", "MySQL", "Tailwind CSS", "REST API", "Website Creation"],
      highlights: [
        "Full corporate website creation with secure CMS admin control",
        "17 relational MySQL database tables with idempotent content seeder",
        "Complete enterprise-grade architecture and API documentation"
      ],
      liveUrl: "https://github.com/osc672/voneuk",
      githubLink: "https://github.com/osc672/voneuk",
      directUrl: "https://github.com/osc672/voneuk",
      gradient: "from-blue-600 to-indigo-700",
      bgGlow: "59,130,246",
      filterGroup: "websites",
      actionLabel: "Open Project (GitHub)"
    },
    {
      id: "ev-rescue",
      title: "EVRescue - Real-Time EV Charging Network",
      category: "Full-Stack Mobile App & Cloud",
      badge: "Mobile App & Cloud",
      period: "2024",
      description: "Unified electric vehicle emergency charging marketplace connecting drivers with instant chargers, slot reservations, host monetization, PostGIS geospatial radius search, and real-time charging session monitors.",
      image: "/assets/ev-rescue.jpg",
      tags: ["React Native", "Expo", "Node.js", "Express", "PostGIS", "Prisma", "Socket.IO"],
      highlights: [
        "Dual-mode mobile application (Driver Mode & Host Provider Mode)",
        "PostGIS 500m radius real-time emergency charger search & navigation",
        "Unified system with mobile app, backend API & admin web dashboard"
      ],
      liveUrl: "https://github.com/osc672/EV",
      githubLink: "https://github.com/osc672/EV",
      directUrl: "https://github.com/osc672/EV",
      gradient: "from-teal-500 to-emerald-600",
      bgGlow: "20,184,166",
      filterGroup: "mobile",
      actionLabel: "Open Project (GitHub)"
    },
    {
      id: "3danimation-vone",
      title: "3D Animation Vone",
      category: "3D Web Engineering",
      badge: "3D Animation / WebGL",
      period: "2024",
      description: "Interactive 3D graphics and immersive animation showcase created with modern WebGL and Three.js technologies. Features fluid camera controls, real-time lighting shaders, and hardware-accelerated 3D assets.",
      tags: ["Three.js", "WebGL", "React", "3D Animation", "Interactive UI", "Vercel"],
      highlights: [
        "Hardware-accelerated 3D interactive graphics rendered in browser",
        "Real-time lighting shaders and dynamic camera choreography",
        "Live production deployment on Vercel"
      ],
      liveUrl: "https://3danimation-kohl.vercel.app",
      demoLink: "https://3danimation-kohl.vercel.app",
      githubLink: "https://github.com/osc672/3Danimation_vone",
      directUrl: "https://3danimation-kohl.vercel.app",
      gradient: "from-purple-600 to-violet-700",
      bgGlow: "168,85,247",
      filterGroup: "3d",
      actionLabel: "Open Live 3D Experience (Vercel)"
    },
    {
      id: "school-website",
      title: "EduSmart School Portal",
      category: "Website Sample",
      badge: "Website Sample",
      period: "2024",
      description: "Educational institution sample website providing prospective students and parents with academic curriculum details, online admission inquiries, faculty rosters, and dynamic event updates.",
      tags: ["React", "Website Sample", "Education", "Responsive Design", "CSS3", "Vercel"],
      highlights: [
        "Comprehensive website sample for modern schools & colleges",
        "Structured information architecture for academics and admissions",
        "Live production deployment on Vercel"
      ],
      liveUrl: "https://school-website-iota.vercel.app",
      demoLink: "https://school-website-iota.vercel.app",
      githubLink: "https://github.com/osc672/school-website",
      directUrl: "https://school-website-iota.vercel.app",
      gradient: "from-sky-500 to-blue-600",
      bgGlow: "56,189,248",
      filterGroup: "websites",
      actionLabel: "Open Live Website (Vercel)"
    },
    {
      id: "myspace",
      title: "MySpace Design Platform",
      category: "Web Application",
      badge: "Web Application",
      period: "2024",
      description: "Modern space planning and interior design discovery platform. Built with responsive glassmorphism cards, dynamic visual galleries, and streamlined project showcase layouts.",
      tags: ["React", "Vite", "Full-Stack", "CSS Modules", "Responsive", "Vercel"],
      highlights: [
        "Dynamic visual layout for architectural and space curation",
        "Fluid animations and modern responsive grid system",
        "Live production deployment on Vercel"
      ],
      liveUrl: "https://myspace-mu-orcin.vercel.app",
      demoLink: "https://myspace-mu-orcin.vercel.app",
      githubLink: "https://github.com/osc672/myspace",
      directUrl: "https://myspace-mu-orcin.vercel.app",
      gradient: "from-indigo-600 to-purple-600",
      bgGlow: "99,102,241",
      filterGroup: "websites",
      actionLabel: "Open Live Platform (Vercel)"
    },
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
      liveUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      demoLink: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      githubLink: "https://github.com/osc672",
      directUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      gradient: "from-indigo-600 to-purple-600",
      bgGlow: "99,102,241",
      filterGroup: "ai",
      actionLabel: "Watch MCA Project Video Demo"
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
      liveUrl: "https://t.me/OSCVLK_BOT",
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      directUrl: "https://t.me/OSCVLK_BOT",
      gradient: "from-sky-500 to-cyan-500",
      bgGlow: "56,189,248",
      filterGroup: "ai",
      actionLabel: "Launch Telegram AI Bot"
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
      liveUrl: "https://t.me/OSCVLK_BOT",
      demoLink: "https://t.me/OSCVLK_BOT",
      githubLink: "https://github.com/osc672",
      directUrl: "https://t.me/OSCVLK_BOT",
      gradient: "from-purple-600 to-pink-600",
      bgGlow: "168,85,247",
      filterGroup: "ai",
      actionLabel: "Launch VQA Assistant"
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
      liveUrl: "https://github.com/osc672/saichandportfolio",
      githubLink: "https://github.com/osc672/saichandportfolio",
      directUrl: "https://github.com/osc672/saichandportfolio",
      gradient: "from-amber-500 to-orange-600",
      bgGlow: "245,158,11",
      filterGroup: "backend",
      actionLabel: "Open Project (GitHub)"
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
