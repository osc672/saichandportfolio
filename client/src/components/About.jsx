import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, stats } = portfolioData;

  const coreStrengths = [
    {
      icon: 'fa-chart-pie',
      color: '#38bdf8',
      title: 'Data Analytics & BI',
      desc: 'Expertise in Power BI, Tableau, Advanced Excel, and SQL for actionable business intelligence, KPI tracking, and visual storytelling.'
    },
    {
      icon: 'fa-code',
      color: '#6366f1',
      title: 'Full-Stack React & Node',
      desc: 'Building responsive Single-Page Applications in React, backed by Node.js, Express REST APIs, and automated SMTP email notifications.'
    },
    {
      icon: 'fa-database',
      color: '#06b6d4',
      title: 'MySQL & Relational DBs',
      desc: 'Schema design, complex joins, subqueries, normalization, query optimization, and secure transactional operations.'
    },
    {
      icon: 'fa-brain',
      color: '#a855f7',
      title: 'Machine Learning & CNNs',
      desc: 'Deep learning computer vision models with Python, OpenCV, and TensorFlow for counterfeit logo identification and image classification.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Profile Overview</span>
          <h2 className="section-title">
            About <span className="gradient-text">Sai Chand</span>
          </h2>
          <p className="section-subtitle">
            A versatile technologist combining deep analytical rigor, full-stack web engineering, and machine learning research.
          </p>
        </div>

        {/* Profile Card & Info Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center', marginBottom: '60px' }}>
          {/* Avatar Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card animate-float"
              style={{
                padding: '24px',
                textAlign: 'center',
                maxWidth: '380px',
                width: '100%',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.15)'
              }}
            >
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 20px' }}>
                <img
                  src="/assets/profile.jpg"
                  alt="Olupalli Sai Chand"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    border: '3px solid rgba(99, 102, 241, 0.5)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#10b981',
                    border: '3px solid #0f172a',
                    boxShadow: '0 0 10px #10b981'
                  }}
                  title="Active"
                />
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                {personal.name}
              </h3>
              <p style={{ color: '#38bdf8', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>
                MCA Graduate • Data Strategist • Full-Stack Builder
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', fontSize: '13px', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-location-dot" style={{ color: '#38bdf8', width: '16px' }}></i>
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-graduation-cap" style={{ color: '#a855f7', width: '16px' }}></i>
                  <span>MCA Degree from KBNC (CGPA: 8.3 / 10)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-briefcase" style={{ color: '#10b981', width: '16px' }}></i>
                  <span>Ready for Immediate Joining</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Key Highlights */}
          <div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
              Bridging the gap between <span className="gradient-text">Raw Data</span> and <span className="gradient-text">Intuitive Web Interfaces</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
              I am an MCA post-graduate with a comprehensive background in data analysis, statistical modeling, and full-stack software development. With proficiency in <strong>Python</strong>, <strong>Power BI</strong>, <strong>SQL &amp; MySQL</strong>, and <strong>React</strong>, I specialize in building analytical workflows that extract high-leverage insights and modern web portals that deliver responsive user experiences.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
              Whether developing deep learning neural networks for counterfeit logo identification, programming conversational Telegram AI bots, or architecting relational MySQL databases for business data capture, I prioritize clean architecture, optimal database queries, and measurable results.
            </p>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px' }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{ padding: '16px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#38bdf8', marginBottom: '4px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {coreStrengths.map((strength) => (
            <div key={strength.title} className="glass-card">
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: `${strength.color}18`,
                  border: `1px solid ${strength.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: strength.color,
                  fontSize: '20px',
                  marginBottom: '16px'
                }}
              >
                <i className={`fas ${strength.icon}`}></i>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                {strength.title}
              </h4>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
