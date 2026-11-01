import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';
import Magnet from '../reactbits/Magnet';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section" style={{ background: 'rgba(9,13,22,0.5)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '9999px', color: '#7dd3fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Featured Engineering
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Projects & <span className="gradient-text">Intelligent Bots</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              Deep learning applications, AI assistants, and enterprise analytical systems built with modern tech stacks.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {projects.map((proj, i) => (
            <ScrollReveal key={proj.id} direction="up" delay={i * 0.12}>
              <GlowCard
                glowColor={proj.bgGlow}
                style={{
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: `1px solid rgba(${proj.bgGlow}, 0.2)`,
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ padding: '4px 12px', background: `rgba(${proj.bgGlow}, 0.12)`, border: `1px solid rgba(${proj.bgGlow}, 0.3)`, borderRadius: '6px', color: `rgb(${proj.bgGlow})`, fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px' }}>
                      {proj.badge}
                    </span>
                    <span style={{ fontSize: '11px', color: '#475569', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{proj.period}</span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>{proj.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7, marginBottom: '18px' }}>{proj.description}</p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
                    {proj.highlights.map((h, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                        <i className="fas fa-check-circle" style={{ color: `rgb(${proj.bgGlow})`, marginTop: '3px', fontSize: '11px', flexShrink: 0 }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', fontSize: '11.5px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '10px' }}>
                  {proj.demoLink && (
                    <Magnet strength={0.2} style={{ flex: 1 }}>
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '10px 18px', borderRadius: '10px', background: `rgba(${proj.bgGlow}, 0.12)`, border: `1px solid rgba(${proj.bgGlow}, 0.35)`, color: `rgb(${proj.bgGlow})`, fontSize: '13px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.25s ease' }}
                      >
                        <i className="fas fa-play" /> Live Demo
                      </a>
                    </Magnet>
                  )}
                  {proj.githubLink && (
                    <Magnet strength={0.2} style={proj.demoLink ? {} : { flex: 1 }}>
                      <a
                        href={proj.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          width: proj.demoLink ? '42px' : '100%',
                          height: '42px',
                          borderRadius: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#e2e8f0',
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'all 0.25s ease',
                          padding: proj.demoLink ? '0' : '0 16px',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = `rgba(${proj.bgGlow}, 0.5)`; e.currentTarget.style.background = `rgba(${proj.bgGlow}, 0.12)`; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                      >
                        <i className="fab fa-github" style={{ fontSize: '16px' }} />
                        {!proj.demoLink && <span>View on GitHub</span>}
                      </a>
                    </Magnet>
                  )}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

