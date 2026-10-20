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
    bio: "Motivated Data Analyst & Full-Stack Web Developer with an MCA degree. Skilled in translating raw, multi-dimensional datasets into actionable executive insights with Power BI, Tableau, SQL, and Python, while crafting reactive, glassmorphism web applications using React, Node.js, and MySQL."
  },

  stats: [
    { label: "MCA Cumulative CGPA", value: "8.3 / 10", icon: "GraduationCap" },
    { label: "AI & Full-Stack Projects", value: "6+", icon: "Code" },
    { label: "Verified Certifications", value: "15+", icon: "Award" },
    { label: "Research Publications", value: "3", icon: "BookOpen" }
  ],

  // Education Section: Matter Details & Demo ONLY (Certificates removed as requested)
  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Kakaraparti Bhavanarayana College (Autonomous), Vijayawada",
      period: "2022 - 2024",
      grade: "CGPA: 8.3 / 10",
      level: "Post Graduation",
      specialization: "Advanced Software Engineering, Deep Learning & Database Architecture",
      matterDetails: {
        overview: "Intensive 2-year post-graduate degree focused on algorithmic complexity, deep learning systems, enterprise database architectures, and distributed systems engineering.",
        coreCoursework: [
          "Convolutional Neural Networks & Computer Vision",
          "Relational & Distributed Database Design (MySQL / PostgreSQL)",
          "Object-Oriented Software Engineering & Design Patterns",
          "Advanced Python, Java & Web Technologies",
          "Big Data Analytics, Data Mining & Data Warehousing"
        ],
        keyCompetencies: [
          "Developed end-to-end Machine Learning pipelines with Python & OpenCV",
          "Engineered ACID-compliant MySQL schemas with optimized queries and indexes",
          "Authored peer-reviewed international conference research papers"
        ]
      },
      demo: {
        title: "Major MCA Project Demo: Online Fake Logo Detection System",
        subtitle: "Computer Vision & Deep Convolutional Neural Network Application",
        summary: "An enterprise-grade deep learning solution designed to detect counterfeit and modified brand logos on online marketplaces. Built with Python, Google Colab, and custom CNN architectures achieving 98.2% test accuracy.",
        highlights: [
          "Multi-Scale Feature Extraction using Convolutional Layers",
          "Robust against logo rotations, blurring, color distortions & noise",
          "Automated inference pipeline with visual bounding box reports",
          "Direct video demo showcase available"
        ],
        videoUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
        buttonText: "Watch MCA Project Video Demo"
      }
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (BSc - MPCs)",
      institution: "AG & SG Siddhartha Degree College of Arts & Science (Autonomous), Vuyyuru",
      period: "2019 - 2022",
      grade: "CGPA: 8.46 / 10",
      level: "Undergraduate Graduation",
      specialization: "Mathematics, Physics, and Computer Science",
      matterDetails: {
        overview: "Rigorous 3-year foundational program combining deep mathematical theory, experimental physics, and computer science fundamentals.",
        coreCoursework: [
          "Differential & Integral Calculus, Real Analysis & Linear Algebra",
          "Discrete Mathematics, Numerical Methods & Statistical Distributions",
          "Classical Mechanics, Electricity, Magnetism & Electronics",
          "C, C++, Data Structures & Algorithm Design",
          "Relational Database Management Systems & SQL"
        ],
        keyCompetencies: [
          "Strong quantitative modeling and mathematical problem solving",
          "High analytical rigor applied to data transformations and statistical reasoning",
          "Distinguished graduation score ranking at the top percentile of the department"
        ]
      },
      demo: {
        title: "BSc Academic Showcase: Numerical Algorithms & Statistical Simulations",
        subtitle: "Computational Physics & Discrete Math Work",
        summary: "Developed analytical programs modeling differential equations, matrix diagonalization, and statistical curve-fitting algorithms using procedural C/C++.",
        highlights: [
          "Gaussian Elimination & Matrix Factorization implementations",
          "Polynomial Interpolation & Simpson's Rule integrations",
          "Statistical Regression & standard deviation modeling routines"
        ],
        videoUrl: null,
        buttonText: "View Academic Matter & Highlights"
      }
    },
    {
      id: "inter",
      degree: "Intermediate (MPC)",
      institution: "AG & SGS Junior College, Vuyyuru",
      period: "2017 - 2019",
      grade: "CGPA: 7.73 / 10",
      level: "Higher Secondary Education",
      specialization: "Mathematics, Physics, Chemistry",
      matterDetails: {
        overview: "Higher secondary pre-university coursework focusing on fundamental calculus, analytical geometry, physical laws, and chemical kinetics.",
        coreCoursework: [
          "Advanced Algebra, Trigonometry & Coordinate Geometry",
          "Differential Calculus, Integrals & Vector Analysis",
          "Mechanics, Thermodynamics, Optics & Wave Theory",
          "Inorganic, Organic & Electrochemistry"
        ],
        keyCompetencies: [
          "Developed core analytical mindset for STEM engineering",
          "Hands-on scientific laboratory analysis and data recording"
        ]
      },
      demo: {
        title: "Foundational STEM Case Study: Mathematical Logic & Derivations",
        subtitle: "Calculus & Physical Mechanics",
        summary: "Extensive problem-solving portfolio encompassing over 1,000+ solved mathematical and physical calculus proofs and kinematics equations.",
        highlights: [
          "Coordinate systems and multi-variable vectors",
          "Kinematic equilibrium calculations",
          "Thermodynamic state function problem solving"
        ],
        videoUrl: null,
        buttonText: "Explore STEM Fundamentals"
      }
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (SSC)",
      institution: "JESUS EM & TM School, Veerankilaku",
      period: "2016 - 2017",
      grade: "CGPA: 8.3 / 10",
      level: "Secondary Schooling",
      specialization: "General Sciences & Mathematics",
      matterDetails: {
        overview: "Comprehensive secondary education with academic distinction across quantitative sciences, social studies, and linguistic proficiencies.",
        coreCoursework: [
          "General Mathematics & Euclidean Geometry",
          "Physical Sciences & Biological Studies",
          "English Communication & Technical Comprehension"
        ],
        keyCompetencies: [
          "Active school team leader and science quiz competitor",
          "Distinguished secondary grading establishing the baseline for technical study"
        ]
      },
      demo: {
        title: "Academic Excellence & Science Fair Demonstrations",
        subtitle: "Hands-on Scientific Demonstrations",
        summary: "Participated in district-level science exhibitions demonstrating electromagnetic induction principles and optics refraction.",
        highlights: [
          "Demonstrated electromagnetic circuit models",
          "Scored 8.3 CGPA in board examinations"
        ],
        videoUrl: null,
        buttonText: "View Details"
      }
    }
  ],

  skills: {
    technical: [
      { name: "Python", level: 90, desc: "Data Analysis, Pandas, NumPy, Scikit-learn, CNN Deep Learning models & automation scripts." },
      { name: "SQL & MySQL", level: 88, desc: "Complex queries, window functions, relational database architecture, triggers, schema optimization." },
      { name: "React.js", level: 85, desc: "Modern React with hooks, component state, SPA routing, and dynamic glassmorphism UI." },
      { name: "Node.js & Express", level: 84, desc: "REST APIs, asynchronous middlewares, SMTP Nodemailer engine, CORS, full-stack integration." },
      { name: "Machine Learning & CNN", level: 80, desc: "Computer vision, image classification, transfer learning, model evaluation with TensorFlow/Keras." },
      { name: "HTML5 & Vanilla CSS3", level: 92, desc: "Semantic HTML, responsive glassmorphism layouts, CSS variables, keyframe animations." }
    ],
    tools: [
      { name: "Power BI", level: 88, desc: "Interactive executive dashboards, DAX queries, data modeling, multi-source ETL pipelines." },
      { name: "Tableau", level: 84, desc: "Visual storytelling, calculated fields, dynamic parameters, geographical heatmaps." },
      { name: "Microsoft Excel", level: 90, desc: "VLOOKUP/XLOOKUP, Pivot Tables, nested formulas, financial summaries, trend forecasting." },
      { name: "Git & GitHub", level: 82, desc: "Version control, branching strategies, collaborative repository management." },
      { name: "Google Colab & Jupyter", level: 88, desc: "Cloud GPU acceleration, exploratory data analysis, prototype model training." }
    ],
    soft: [
      { name: "Data-Driven Decision Making", level: 92, desc: "Transforming ambiguous business questions into clear, quantitative KPI insights." },
      { name: "Executive Storytelling", level: 88, desc: "Communicating complex analytical models to non-technical stakeholders clearly." },
      { name: "Critical Problem Solving", level: 90, desc: "Root-cause diagnostics, algorithmic optimization, proactive debugging." },
      { name: "Continuous Learning", level: 95, desc: "Rapidly mastering emerging AI models, full-stack frameworks, and cloud utilities." }
    ]
  },

  projects: [
    {
      id: "fake-logo",
      title: "Online Fake Logo Detection System",
      category: "Major MCA Deep Learning Project",
      badge: "Computer Vision & AI",
      period: "2023 - 2024",
      description: "An advanced computer vision system leveraging Convolutional Neural Networks (CNNs) to detect manipulated, forged, and counterfeit brand logos across eCommerce marketplaces to protect intellectual property.",
      tags: ["Python", "CNN", "Deep Learning", "OpenCV", "Google Colab"],
      highlights: [
        "Trained on comprehensive multi-brand datasets",
        "Feature extraction robust against rotations, crops & color skew",
        "Visual demonstration verified with real-world test sets"
      ],
      demoLink: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      githubLink: "https://github.com/osc672"
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
      githubLink: "https://github.com/osc672"
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
      githubLink: "https://github.com/osc672"
    }
  ],

  publications: [
    {
      title: "Convolutional Neural Networks for Electronic Health Records",
      conference: "International Conference on Recent Trends in Machine Learning and Computer Applications (ICRTMLCA-2024)",
      date: "February 2024",
      doi: "Published in Conference Proceedings",
      summary: "Explored how deep CNN architectures can be applied to multi-structured electronic health records and medical imaging data to predict patient risk profiles with reduced clinical latency.",
      tags: ["CNN", "Healthcare Informatics", "Deep Learning", "Risk Prediction"]
    },
    {
      title: "Machine Learning Approaches in Drug Discovery & Clinical Analytics",
      conference: "National Symposium on Computational Biology & Data Intelligence",
      date: "October 2023",
      doi: "Indexed Academic Research",
      summary: "Investigated predictive machine learning algorithms for molecular affinity scoring and compound screening, dramatically shrinking early-phase pharmaceutical screening timelines.",
      tags: ["Machine Learning", "Drug Discovery", "Data Science"]
    },
    {
      title: "Mobile Application Problem Solving Frameworks in Rural Connectivity",
      conference: "International Journal of Emerging Trends in Computer Science",
      date: "May 2023",
      doi: "Peer-Reviewed Article",
      summary: "Architected a lightweight offline-first mobile sync model enabling low-latency data entry and caching in network-constrained environments.",
      tags: ["Mobile Architecture", "Offline Sync", "Distributed Systems"]
    }
  ],

  certifications: [
    { title: "Data Analytics with Python", issuer: "FixityEDX", category: "Data Analytics", year: "2024" },
    { title: "Machine Learning & AI Specialization", issuer: "Indian Servers", category: "AI & Python", year: "2024" },
    { title: "Business Analytics with Excel", issuer: "Simplilearn", category: "Data Analytics", year: "2023" },
    { title: "Python for Data Science", issuer: "Cognitive Class / IBM", category: "AI & Python", year: "2023" },
    { title: "Database Management & SQL", issuer: "NPTEL / IIT Kharagpur", category: "Web & Programming", year: "2023" },
    { title: "Power BI for Business Intelligence", issuer: "Great Learning", category: "Data Analytics", year: "2023" },
    { title: "Modern Web Development", issuer: "Simplilearn", category: "Web & Programming", year: "2023" },
    { title: "Tableau Desktop Qualified Prep", issuer: "Great Learning", category: "Data Analytics", year: "2024" }
  ]
};
