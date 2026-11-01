import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';
import CountUp from '../reactbits/CountUp';
import InfiniteMarquee from '../reactbits/InfiniteMarquee';

const coreStrengths = [
  { icon: 'fa-chart-pie', color: '#38bdf8', title: 'Data Analytics & BI', desc: 'Expertise in Power BI, Tableau, Advanced Excel, and SQL for actionable business intelligence and visual storytelling.', glow: '56,189,248' },
  { icon: 'fa-code', color: '#6366f1', title: 'Full-Stack React & Node', desc: 'Building responsive SPAs in React, backed by Node.js, Express REST APIs, and automated SMTP email notifications.', glow: '99,102,241' },
  { icon: 'fa-database', color: '#06b6d4', title: 'MySQL & Relational DBs', desc: 'Schema design, complex joins, normalization, query optimization, and secure transactional operations.', glow: '6,182,212' },
  { icon: 'fa-brain', color: '#a855f7', title: 'Machine Learning & CNNs', desc: 'Deep learning computer vision models with Python, OpenCV, and TensorFlow for counterfeit logo detection.', glow: '168,85,247' },
];

export default function About() {
  const { personal, stats, techStack } = portfolioData;

  const marqueeItems = techStack.map(tech => (
    <span key={tech} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>
      {tech}
    </span>
  ));

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: '9999px', color: '#a5b4fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Profile Overview
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              About <span className="gradient-text">Sai Chand</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              A versatile technologist combining deep analytical rigor, full-stack web engineering, and machine learning research.
            </p>
          </div>
        </ScrollReveal>

        {/* Profile + Bio Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start', marginBottom: '64px' }}>

          {/* Profile Card */}
          <ScrollReveal direction="left" delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <GlowCard glowColor="99,102,241" style={{ padding: '28px', textAlign: 'center', maxWidth: '360px', width: '100%', border: '1px solid rgba(99,102,241,0.25)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }} className="animate-float">
                <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 20px' }}>
                  <img
                    src="/profile.jpg"
                    alt="Olupalli Sai Chand"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', border: '3px solid rgba(99,102,241,0.5)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                    onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=Sai+Chand&background=6366f1&color=fff&size=200'; }}
                  />
                  <span style={{ position: 'absolute', bottom: '6px', right: '6px', width: '14px', height: '14px', borderRadius: '50%', background: '#10b981', border: '3px solid #0f172a', boxShadow: '0 0 10px #10b981' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>{personal.name}</h3>
                <p style={{ color: '#38bdf8', fontSize: '13px', fontWeight: 600, marginBottom: '18px' }}>MCA Graduate • Data Strategist • Full-Stack Builder</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', fontSize: '13px', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
                  {[
                    { icon: 'fa-location-dot', color: '#38bdf8', text: personal.location },
                    { icon: 'fa-graduation-cap', color: '#a855f7', text: 'MCA Degree – CGPA: 8.34 / 10' },
                    { icon: 'fa-briefcase', color: '#10b981', text: 'Ready for Immediate Joining' },
                  ].map(({ icon, color, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className={`fas ${icon}`} style={{ color, width: '16px', flexShrink: 0 }} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal direction="right" delay={0.2}>
            <div>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, marginBottom: '16px', color: '#ffffff', lineHeight: 1.3 }}>
                Bridging <span className="gradient-text">Raw Data</span> and <span className="gradient-text">Intuitive Web Interfaces</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '15.5px', lineHeight: 1.85, marginBottom: '18px' }}>
                I am an MCA post-graduate with a comprehensive background in data analysis, statistical modeling, and full-stack software development. Proficient in <strong style={{ color: '#e2e8f0' }}>Python</strong>, <strong style={{ color: '#e2e8f0' }}>Power BI</strong>, <strong style={{ color: '#e2e8f0' }}>SQL & MySQL</strong>, and <strong style={{ color: '#e2e8f0' }}>React</strong>, I build analytical workflows that extract high-leverage insights and modern web portals that deliver responsive user experiences.
              </p>
              <p style={{ color: '#94a3b8', fontSize: '15.5px', lineHeight: 1.85, marginBottom: '32px' }}>
                Whether developing deep learning neural networks for counterfeit logo identification, programming conversational Telegram AI bots, or architecting relational MySQL databases, I prioritize clean architecture, optimal queries, and measurable results.
              </p>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                {stats.map((stat, i) => (
                  <ScrollReveal key={stat.label} direction="up" delay={0.3 + i * 0.08}>
                    <GlowCard glowColor={stat.color.replace('#', '').match(/.{2}/g).map(h => parseInt(h, 16)).join(',')} style={{ padding: '18px', textAlign: 'center' }}>
                      <div style={{ fontSize: '26px', fontWeight: 900, color: stat.color, marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                        <CountUp to={stat.value} suffix={stat.suffix} decimals={stat.value.includes('.') ? 1 : 0} />
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, lineHeight: 1.4 }}>{stat.label}</div>
                    </GlowCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Core Strengths */}
        <div style={{ marginBottom: '64px' }}>
          <ScrollReveal direction="up">
            <h3 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '32px' }}>Core Expertise Pillars</h3>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {coreStrengths.map((s, i) => (
              <ScrollReveal key={s.title} direction="up" delay={i * 0.1}>
                <GlowCard glowColor={s.glow} style={{ padding: '24px', height: '100%' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: `${s.color}18`, border: `1px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color, fontSize: '20px', marginBottom: '16px' }}>
                    <i className={`fas ${s.icon}`} />
                  </div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>{s.title}</h4>
                  <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.65 }}>{s.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <ScrollReveal direction="up">
          <div style={{ marginBottom: '10px', textAlign: 'center', color: '#475569', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Technologies I Work With
          </div>
          <InfiniteMarquee items={marqueeItems} speed={25} gap={12} />
        </ScrollReveal>
      </div>
    </section>
  );
}

