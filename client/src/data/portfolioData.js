export const portfolioData = {
  personal: {
    name: "Sai Chand Olupalli",
    titles: [
      "Data Analyst",
      "Full-Stack Developer",
      "MCA Post Graduate",
      "Power BI & Tableau Developer",
      "Machine Learning Specialist"
    ],
    location: "Vijayawada, Andhra Pradesh, India",
    address: "Vijayawada, Andhra Pradesh, India",
    email: "saichanduvlk@gmail.com",
    phone: "+91 6281604742",
    github: "https://github.com/osc672",
    linkedin: "https://www.linkedin.com/in/saichand-olupalli-045ba6262/",
    resumeLink: "/Sai_Chand_Olupalli_Resume.pdf",
    bio: "Skilled Data Analyst with expertise in data analysis, visualization, and reporting. Proficient in Python, SQL, Power BI, and Tableau. Experienced in developing actionable insights, cleaning and analyzing data, and creating interactive dashboards and reports to drive business decisions."
  },

  stats: [
    { label: "MCA Cumulative CGPA", value: "8.34", suffix: " / 10", icon: "fa-graduation-cap", color: "#38bdf8" },
    { label: "Key Data & AI Projects", value: "3", suffix: "", icon: "fa-code", color: "#a855f7" },
    { label: "Verified Certifications", value: "5", suffix: "+", icon: "fa-award", color: "#10b981" },
    { label: "Research Publications", value: "3", suffix: "", icon: "fa-book-open", color: "#f59e0b" }
  ],

  education: [
    {
      id: "mca",
      degree: "Masters in Computer Applications (MCA)",
      institution: "KBN College (Autonomous), Vijayawada",
      period: "Oct 2022 – July 2024",
      grade: "8.34 / 10",
      level: "Post Graduation",
      specialization: "Advanced Software Engineering, Deep Learning & Database Architecture",
      icon: "fa-graduation-cap",
      color: "#6366f1",
      highlights: [
        "End-to-end Machine Learning pipelines with Python, OpenCV & TensorFlow",
        "Relational & Distributed Database Design with optimized SQL queries",
        "Authored peer-reviewed international conference research papers"
      ],
      demo: {
        title: "Online Fake Logo Detection System",
        videoUrl: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing"
      }
    },
    {
      id: "bsc",
      degree: "Bachelor of Science (B.Sc. – MPC's)",
      institution: "AG & SGS Degree College of Arts & Science, Vuyyuru",
      period: "Aug 2019 – June 2022",
      grade: "8.46 / 10",
      level: "Undergraduate",
      specialization: "Mathematics, Physics & Computer Science",
      icon: "fa-atom",
      color: "#38bdf8",
      highlights: [
        "Strong quantitative modeling and mathematical problem solving",
        "Numerical Algorithms, statistical simulations & matrix factorization",
        "Graduated in the top percentile of the department"
      ]
    }
  ],

  skills: {
    technical: [
      { name: "Python", level: 92, icon: "fab fa-python", desc: "Pandas, NumPy, Matplotlib, Seaborn, Plotly, Folium, Scikit-learn, CNN Deep Learning." },
      { name: "SQL & MySQL", level: 88, icon: "fas fa-database", desc: "Complex queries, joins, relational schema design, query optimization, data modeling." },
      { name: "Power BI", level: 90, icon: "fas fa-chart-column", desc: "Interactive executive dashboards, DAX queries, multi-source ETL pipelines, KPI drill-downs." },
      { name: "Tableau", level: 86, icon: "fas fa-chart-pie", desc: "Visual storytelling, calculated fields, dynamic parameters, geographical heatmaps." },
      { name: "HTML5, CSS & JavaScript", level: 85, icon: "fab fa-html5", desc: "Responsive glassmorphism interfaces, UI components, Single-Page Applications." },
      { name: "Machine Learning & CNN", level: 82, icon: "fas fa-brain", desc: "Convolutional Neural Networks, OpenCV, image classification, transfer learning." }
    ],
    tools: [
      { name: "Microsoft Excel", level: 92, icon: "fas fa-file-excel", desc: "Data cleaning, transformation, VLOOKUP/XLOOKUP, Pivot Tables, trend analysis." },
      { name: "PowerPoint & Word", level: 90, icon: "fas fa-file-powerpoint", desc: "Executive presentations, stakeholder reports, technical documentation." },
      { name: "Git & GitHub", level: 84, icon: "fab fa-github", desc: "Version control, branching strategies, collaborative repository management." },
      { name: "Google Colab & Jupyter", level: 90, icon: "fab fa-google", desc: "Cloud GPU acceleration, exploratory data analysis, ML model prototyping." }
    ],
    soft: [
      { name: "Data Visualization & Analytics", level: 94, icon: "fas fa-chart-line", desc: "Transforming complex multi-dimensional datasets into clear, actionable business insights." },
      { name: "Communication & Reporting", level: 90, icon: "fas fa-comments", desc: "Presenting analytical findings effectively to non-technical stakeholders." },
      { name: "Time Management & Teamwork", level: 92, icon: "fas fa-people-group", desc: "Collaborative project delivery under deadlines with structured milestone tracking." },
      { name: "Multi-tasking & Problem Solving", level: 92, icon: "fas fa-puzzle-piece", desc: "Root-cause diagnostics, algorithmic optimization, proactive debugging." }
    ]
  },

  projects: [
    {
      id: "ev-market",
      title: "Electric Vehicle (EV) Market Size Analysis",
      category: "Data Analysis & Predictive Modeling",
      badge: "Market Trend Forecast",
      period: "2024",
      description: "Analyzed an extensive dataset of electric vehicle (EV) registrations to study adoption trends, evaluate regional distributions, and forecast future market growth for infrastructure and production planning.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Folium", "Scikit-learn", "Linear Regression"],
      highlights: [
        "Cleaned and processed EV dataset, resolving missing values for high-integrity analysis",
        "Conducted exploratory analysis identifying key adoption trends by vehicle model, make, and location",
        "Engineered interactive visualizations (bar charts, line plots, geo maps) using Pandas, Matplotlib, and Folium",
        "Applied linear regression to forecast future EV growth, delivering actionable infrastructure insights"
      ],
      githubLink: "https://github.com/osc672",
      gradient: "from-sky-500 to-indigo-600",
      bgGlow: "56,189,248"
    },
    {
      id: "sales-dashboard",
      title: "Sales Performance Dashboard (Adventure Works)",
      category: "Business Intelligence & BI Reporting",
      badge: "Power BI & Tableau",
      period: "2024",
      description: "Designed and developed a comprehensive executive sales dashboard analyzing revenue performance, customer purchasing behavior, and product category trends with multi-level drill-down capabilities.",
      tags: ["Excel", "Power BI", "Tableau", "DAX", "Data Modeling", "ETL", "SQL"],
      highlights: [
        "Leveraged Excel for initial data cleaning, normalization, and preparation before importing",
        "Built interactive Power BI & Tableau dashboards with drill-downs by region, product, customer segment, and time",
        "Proposed strategic business recommendations to optimize product offerings and elevate customer satisfaction",
        "Handled complex multi-table relational datasets, ensuring consistent data modeling and zero discrepancy"
      ],
      githubLink: "https://github.com/osc672",
      gradient: "from-amber-500 to-emerald-600",
      bgGlow: "16,185,129"
    },
    {
      id: "fake-logo",
      title: "Online Fake Logo Detection System",
      category: "Deep Learning & Computer Vision",
      badge: "Major MCA Project",
      period: "Mar 2024 – May 2024",
      description: "Developed a Convolutional Neural Network (CNN) deep learning model in Python using GPU acceleration to accurately distinguish authentic brand logos from counterfeit imitations across eCommerce marketplaces.",
      tags: ["Python", "CNN", "Deep Learning", "OpenCV", "TensorFlow", "Google Colab"],
      highlights: [
        "Constructed deep CNN architecture featuring Conv2D, MaxPooling2D, Dropout, and Batch Normalization layers",
        "Trained and validated on 12,400 grayscale images resized to 256x256 pixels with weighted loss balancing",
        "Achieved high accuracy through intensive training and validation on rigorous dataset splits",
        "Visual bounding box inference and predictive evaluation to ensure reliable counterfeit detection"
      ],
      demoLink: "https://drive.google.com/file/d/1digNCIdUvxiO6W2Nl5ByY2k747UqX1Fd/view?usp=sharing",
      githubLink: "https://github.com/osc672",
      gradient: "from-indigo-600 to-purple-600",
      bgGlow: "99,102,241"
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
    { title: "Data Engineering", issuer: "Sri Sathya Sai Skill Development Center", category: "Data Engineering", year: "July 2025 – Nov 2025", icon: "fa-database", color: "#6366f1" },
    { title: "Data Analytics", issuer: "Fixity EDX", category: "Data Analytics", year: "April 2024 – Nov 2024", icon: "fa-chart-line", color: "#38bdf8" },
    { title: "Machine Learning & AI", issuer: "INDIANSERVERS", category: "AI & Python", year: "Mar 2024 – May 2024", icon: "fa-brain", color: "#a855f7" },
    { title: "Python Fundamentals for Beginners", issuer: "Cognitive Class / IBM", category: "AI & Python", year: "June 2023", icon: "fa-python", color: "#f59e0b" },
    { title: "Front End Development - HTML", issuer: "Simplilearn", category: "Web & Programming", year: "Aug 2023", icon: "fa-code", color: "#10b981" }
  ],

  techStack: [
    "Python", "SQL / MySQL", "Power BI", "Tableau", "Excel", "Pandas",
    "NumPy", "Matplotlib", "Seaborn", "Folium", "Scikit-learn", "Deep Learning",
    "OpenCV", "HTML5", "CSS3", "JavaScript", "Google Colab", "Git & GitHub"
  ]
};
