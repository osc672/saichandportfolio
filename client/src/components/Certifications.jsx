import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';

const categories = ['All', 'Data Analytics', 'Data Engineering', 'AI & Python', 'Web & Programming'];

export default function Certifications() {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? certifications : certifications.filter(c => c.category === filter);

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(9,13,22,0.5)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '9999px', color: '#6ee7b7', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Professional Credentials
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Certifications & <span className="gradient-text">Achievements</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              15+ verified credentials from leading institutions across data analytics, AI, and web development.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filter === cat ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.08)',
                  background: filter === cat ? 'rgba(16,185,129,0.15)' : 'rgba(15,23,42,0.6)',
                  color: filter === cat ? '#34d399' : '#64748b',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '18px' }}>
          {filtered.map((cert, i) => (
            <ScrollReveal key={cert.title} direction="up" delay={i * 0.06}>
              <GlowCard glowColor={cert.color.replace('#', '').match(/.{2}/g).map(h => parseInt(h, 16)).join(',')} style={{ padding: '22px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${cert.color}18`, border: `1px solid ${cert.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cert.color, fontSize: '18px', flexShrink: 0 }}>
                    <i className={`fas ${cert.icon}`} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', lineHeight: 1.4 }}>{cert.title}</h4>
                    <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>{cert.issuer}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ padding: '2px 9px', background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '6px', color: '#34d399', fontSize: '10.5px', fontWeight: 700 }}>✓ Verified</span>
                      <span style={{ fontSize: '11px', color: '#475569', fontFamily: 'var(--font-mono)' }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Summary Stats */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ marginTop: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {[
              { label: 'Total Certifications', value: '15+', color: '#10b981' },
              { label: 'Data & Analytics', value: '5', color: '#38bdf8' },
              { label: 'AI & Python', value: '4', color: '#6366f1' },
              { label: 'Web & Programming', value: '3', color: '#a855f7' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center', padding: '16px 28px', borderRadius: '14px', background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '28px', fontWeight: 900, color: s.color, fontFamily: 'var(--font-mono)' }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

