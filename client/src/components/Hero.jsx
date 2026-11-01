import { portfolioData } from '../data/portfolioData';
import { Typewriter } from '../reactbits/Typewriter';
import ScrollReveal from '../reactbits/ScrollReveal';
import Magnet from '../reactbits/Magnet';
import ShinyText from '../reactbits/ShinyText';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>

          {/* Status badge */}
          <ScrollReveal direction="down" delay={0}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '7px 20px', borderRadius: '9999px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', marginBottom: '28px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 12px #10b981', display: 'inline-block' }} className="animate-pulse-glow" />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#6ee7b7', letterSpacing: '0.4px' }}>Available for Opportunities</span>
            </div>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal direction="up" delay={0.1}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(38px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '20px', color: '#ffffff' }}>
              Hi, I'm{' '}
              <ShinyText text={personal.name} speed={2.5} />
            </h1>
          </ScrollReveal>

          {/* Typewriter */}
          <ScrollReveal direction="up" delay={0.2}>
            <div style={{ fontSize: 'clamp(18px, 2.8vw, 28px)', fontWeight: 700, minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
              <span style={{ color: '#64748b', fontWeight: 500 }}>I am a</span>
              <span style={{ color: '#38bdf8' }}>
                <Typewriter texts={personal.titles} speed={70} deleteSpeed={35} pauseMs={1800} />
              </span>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="up" delay={0.3}>
            <p style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: '#94a3b8', lineHeight: 1.75, marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
              Motivated <strong style={{ color: '#ffffff' }}>Data Analyst</strong> & <strong style={{ color: '#ffffff' }}>Full-Stack Developer</strong> with an MCA degree, skilled in transforming complex datasets into executive insights using Power BI, Tableau, SQL & Python, while crafting fast, intuitive web experiences.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal direction="up" delay={0.4}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '44px' }}>
              <Magnet strength={0.25}>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, boxShadow: '0 6px 24px rgba(99,102,241,0.4)', transition: 'all 0.2s ease' }}>
                  <i className="fas fa-envelope" /> Send Message
                </a>
              </Magnet>
              <Magnet strength={0.25}>
                <a href={personal.resumeLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s ease' }}>
                  <i className="fas fa-file-arrow-down" /> View Resume
                </a>
              </Magnet>
              <Magnet strength={0.25}>
                <a href="#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 28px', borderRadius: '12px', background: 'rgba(56,189,248,0.08)', color: '#38bdf8', textDecoration: 'none', fontSize: '15px', fontWeight: 700, border: '1px solid rgba(56,189,248,0.3)', transition: 'all 0.2s ease' }}>
                  <i className="fas fa-code" /> Explore Work
                </a>
              </Magnet>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="up" delay={0.5}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              {[
                { href: personal.linkedin, icon: 'fa-linkedin-in', label: 'LinkedIn', color: '#0ea5e9' },
                { href: personal.github, icon: 'fa-github', label: 'GitHub', color: '#a5b4fc' },
                { href: `mailto:${personal.email}`, icon: 'fa-envelope', label: 'Email', color: '#10b981' },
                { href: `tel:${personal.phone}`, icon: 'fa-phone', label: 'Phone', color: '#f59e0b' },
                { href: personal.telegramBot, icon: 'fa-telegram', label: 'Telegram', color: '#38bdf8' },
              ].map(({ href, icon, label, color }) => (
                <Magnet key={label} strength={0.3}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: '46px', height: '46px',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#94a3b8',
                      fontSize: '16px',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = color; e.currentTarget.style.background = `${color}18`; e.currentTarget.style.boxShadow = `0 0 16px ${color}40`; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <i className={`fab ${icon}`} />
                  </a>
                </Magnet>
              ))}
            </div>
          </ScrollReveal>

          {/* Scroll indicator */}
          <ScrollReveal direction="up" delay={0.7}>
            <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '12px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              <span>Scroll to explore</span>
              <i className="fas fa-chevron-down" style={{ animation: 'float 2s ease-in-out infinite' }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

