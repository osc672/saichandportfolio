import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';

const tabs = [
  { id: 'technical', label: 'Technical & Web', icon: 'fa-code' },
  { id: 'tools', label: 'BI & Office Tools', icon: 'fa-chart-column' },
  { id: 'soft', label: 'Soft Skills', icon: 'fa-users' },
];

export default function Skills() {
  const { skills } = portfolioData;
  const [active, setActive] = useState('technical');

  const current = skills[active] || [];

  return (
    <section id="skills" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '9999px', color: '#d8b4fe', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Core Competencies
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Skills & <span className="gradient-text">Proficiencies</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              Tools, frameworks, and methodologies utilized across projects and industry environments.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons */}
        <ScrollReveal direction="up" delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '44px' }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: active === tab.id ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
                  background: active === tab.id ? 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.25))' : 'rgba(15,23,42,0.6)',
                  color: active === tab.id ? '#ffffff' : '#64748b',
                  boxShadow: active === tab.id ? '0 0 20px rgba(99,102,241,0.25)' : 'none',
                  transition: 'all 0.25s ease',
                }}
              >
                <i className={`fas ${tab.icon}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {current.map((skill, i) => (
            <ScrollReveal key={skill.name} direction="up" delay={i * 0.07}>
              <GlowCard glowColor="99,102,241" style={{ padding: '22px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className={`${skill.icon} fa-fw`} style={{ color: '#6366f1', fontSize: '18px', width: '20px' }} />
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>{skill.name}</h4>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{skill.level}%</span>
                </div>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6, marginBottom: '14px' }}>{skill.desc}</p>
                {/* Progress Bar */}
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

