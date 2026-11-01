import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';
import TiltCard from '../reactbits/TiltCard';

export default function Education() {
  const { education } = portfolioData;
  const [active, setActive] = useState(null);

  return (
    <section id="education" className="section" style={{ background: 'rgba(9,13,22,0.5)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '9999px', color: '#7dd3fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Academic Journey
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Education & <span className="gradient-text">Qualifications</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              A rigorous academic foundation spanning secondary school to postgraduate specialization.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #6366f1, #a855f7, #38bdf8, transparent)', transform: 'translateX(-50%)', zIndex: 0 }} className="timeline-line" />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            const isOpen = active === edu.id;

            return (
              <ScrollReveal key={edu.id} direction={isLeft ? 'left' : 'right'} delay={i * 0.12}>
                <div style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start', paddingRight: isLeft ? 'calc(50% + 28px)' : '0', paddingLeft: isLeft ? '0' : 'calc(50% + 28px)', marginBottom: '36px', position: 'relative', zIndex: 1 }} className="timeline-item">

                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '28px',
                    transform: 'translate(-50%, -50%)',
                    width: '18px', height: '18px',
                    borderRadius: '50%',
                    background: edu.color,
                    border: '3px solid #070a12',
                    boxShadow: `0 0 16px ${edu.color}80`,
                    zIndex: 2,
                  }} />

                  {/* Card */}
                  <TiltCard maxTilt={8} style={{ width: '100%', cursor: 'pointer', padding: '24px', border: `1px solid ${edu.color}30` }} onClick={() => setActive(isOpen ? null : edu.id)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `${edu.color}18`, border: `1px solid ${edu.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: edu.color, fontSize: '18px', flexShrink: 0 }}>
                          <i className={`fas ${edu.icon}`} />
                        </div>
                        <div>
                          <span style={{ display: 'inline-block', padding: '3px 10px', background: `${edu.color}15`, border: `1px solid ${edu.color}35`, borderRadius: '6px', color: edu.color, fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '4px' }}>
                            {edu.level}
                          </span>
                          <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{edu.period}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>{edu.grade}</span>
                        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ color: '#64748b', fontSize: '12px' }} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '6px', lineHeight: 1.35 }}>{edu.degree}</h3>
                    <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>{edu.institution}</p>
                    <p style={{ fontSize: '12.5px', color: '#38bdf8', fontWeight: 500 }}>{edu.specialization}</p>

                    {/* Expanded */}
                    {isOpen && (
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {edu.highlights.map((h, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                              <i className="fas fa-check-circle" style={{ color: edu.color, marginTop: '3px', fontSize: '11px', flexShrink: 0 }} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                        {edu.demo?.videoUrl && (
                          <a href={edu.demo.videoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '14px', padding: '8px 18px', borderRadius: '8px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.35)', color: '#38bdf8', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                            <i className="fas fa-play" /> Watch Demo
                          </a>
                        )}
                      </div>
                    )}
                  </TiltCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none; }
          .timeline-item { padding-left: 0 !important; padding-right: 0 !important; justify-content: stretch !important; }
        }
      `}</style>
    </section>
  );
}

