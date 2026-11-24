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
              Skills &amp; <span className="gradient-text">Proficiencies</span>
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

        {/* Skills Grid - No Percentages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {current.map((skill, i) => (
            <ScrollReveal key={skill.name} direction="up" delay={i * 0.06}>
              <GlowCard glowColor="99,102,241" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(99, 102, 241, 0.12)',
                        border: '1px solid rgba(99, 102, 241, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#818cf8',
                        fontSize: '20px',
                        flexShrink: 0
                      }}
                    >
                      <i className={`${skill.icon || 'fas fa-check'} fa-fw`} />
                    </div>
                    <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>{skill.name}</h4>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.65 }}>{skill.desc}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
