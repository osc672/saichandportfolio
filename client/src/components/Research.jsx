import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';

export default function Research() {
  const { publications } = portfolioData;

  return (
    <section id="research" className="section">
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '9999px', color: '#fbbf24', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Academic Contributions
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Research <span className="gradient-text">Publications</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '580px', margin: '0 auto' }}>
              Peer-reviewed papers and conference proceedings at the intersection of AI, data science, and software engineering.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '860px', margin: '0 auto' }}>
          {publications.map((pub, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.12}>
              <GlowCard glowColor={pub.color.replace('#', '').match(/.{2}/g).map(h => parseInt(h, 16)).join(',')} style={{ padding: '28px', borderLeft: `3px solid ${pub.color}` }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${pub.color}18`, border: `1px solid ${pub.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: pub.color, fontSize: '20px', flexShrink: 0 }}>
                      <i className="fas fa-file-alt" />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '2px' }}>{pub.doi}</div>
                      <div style={{ fontSize: '12px', color: '#475569', fontFamily: 'var(--font-mono)' }}>{pub.date}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {pub.tags.map(t => (
                      <span key={t} style={{ padding: '3px 10px', background: `${pub.color}12`, border: `1px solid ${pub.color}30`, borderRadius: '6px', color: pub.color, fontSize: '11px', fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.35 }}>{pub.title}</h3>
                <p style={{ fontSize: '13px', color: '#38bdf8', fontWeight: 500, marginBottom: '12px' }}>{pub.conference}</p>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{pub.summary}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

