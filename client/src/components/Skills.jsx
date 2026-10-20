import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('technical');

  const tabs = [
    { id: 'technical', label: 'Technical & Web Skills', icon: 'fa-code' },
    { id: 'tools', label: 'BI & Office Tools', icon: 'fa-chart-column' },
    { id: 'soft', label: 'Leadership & Soft Skills', icon: 'fa-users' },
  ];

  const currentSkills = skills[activeTab] || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            Tools, frameworks, and analytical methodologies utilized across projects and industry environments.
          </p>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeTab === tab.id ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeTab === tab.id ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(168, 85, 247, 0.25))' : 'rgba(15, 23, 42, 0.6)',
                color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === tab.id ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none'
              }}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {currentSkills.map((skill) => (
            <div key={skill.name} className="glass-card" style={{ padding: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>{skill.name}</h4>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                  {skill.level}%
                </span>
              </div>

              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
                {skill.desc}
              </p>

              {/* Progress bar */}
              <div style={{ width: '100%', height: '7px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #6366f1, #38bdf8)',
                    borderRadius: '9999px',
                    transition: 'width 0.8s ease-in-out',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
