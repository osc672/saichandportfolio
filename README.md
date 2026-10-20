# Sai Chand Olupalli - Full-Stack Portfolio (React + Node.js + MySQL)

A modern full-stack personal portfolio and data engineering showcase built for **Olupalli Sai Chand** (Data Analyst, Full-Stack Developer & Machine Learning Specialist). Engineered with **React.js**, **Node.js (Express)**, **MySQL Database**, and an integrated **Gmail SMTP Contact Engine (Nodemailer)**.

---

## 🌟 Architecture & Tech Stack

| Layer | Technology | Key Capabilities |
| :--- | :--- | :--- |
| **Frontend** | **React.js + Vite** | Single-page application, custom glassmorphism design system, 60fps particle canvas background, live category filters, typewriter title animations. |
| **Backend** | **Node.js + Express** | RESTful API server handling static SPA delivery, contact validation, MySQL transaction recording, and SMTP mail dispatch. |
| **Database** | **MySQL (InnoDB)** | Persistent ACID relational database table (`portfolio_db.contacts`) logging inquiries, sender metadata, and timestamps with automatic failover resilience. |
| **Email Service** | **Nodemailer (SMTP)** | Real-time automated email dispatch to `saichanduvlk@gmail.com` using responsive executive HTML templates. |

---

## 🎓 Updated Education Section (Matter Details & Demos)

As requested, the Education section has been streamlined:
- **Certificates Removed**: All "View Certificate" and "View CMM" modal popups have been removed from the Education section.
- **Matter Details**: In-depth syllabus breakdown, core coursework (CNNs, Relational MySQL Database Architectures, Data Structures, Discrete Mathematics, Calculus, Mechanics), and academic competencies.
- **Interactive Demos**: Dedicated project and academic showcases, featuring the **MCA Major Project Demo (Online Fake Logo Detection System)** with full architecture diagrams and video demo playback.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
# Root backend dependencies (express, mysql2, nodemailer, cors, dotenv)
npm install

# React client dependencies
npm install --prefix client
```

### 2. Configure Environment (`.env`)
Verify or adjust your `.env` file:
```env
PORT=3000
SMTP_USER=saichanduvlk@gmail.com
SMTP_PASS=ynroxtbkdpilngzq
RECIPIENT_EMAIL=saichanduvlk@gmail.com

# MySQL Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
DB_PORT=3306
```

### 3. Initialize MySQL Database (Optional CLI)
```bash
npm run db:init
```
*(The server also automatically initializes the database and `contacts` table on startup).*

### 4. Build & Run Application
```bash
# Build React frontend
npm run build

# Start Full-Stack Server
npm start
```
The portfolio will be live at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Repository Structure
```
v2_advanced_smtp/
├── .env                  # Environment variables & MySQL credentials
├── server.js             # Node.js Express REST API & Nodemailer SMTP
├── db.js                 # MySQL connection pool & database queries
├── scripts/
│   ├── schema.sql        # MySQL table schema
│   └── init-db.js        # Database setup script
├── client/               # React Application (Vite)
│   ├── src/
│   │   ├── components/   # Navbar, Hero, About, Education, Skills, Projects, Contact, MySQLModal
│   │   ├── data/         # Portfolio data, curriculum matter, and demo links
│   │   ├── App.jsx       # Main React app container
│   │   ├── index.css     # Glassmorphism design tokens & styles
│   │   └── main.jsx      # React entry point
│   └── vite.config.js    # Vite configuration & backend proxy
└── README.md             # Project documentation
```
