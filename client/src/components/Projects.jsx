import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';
import Magnet from '../reactbits/Magnet';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'websites', label: 'Web Creations & Rebuilds', count: projects.filter(p => p.filterGroup === 'websites').length },
    { id: 'vercel', label: 'Vercel Live', count: projects.filter(p => p.liveUrl && p.liveUrl.includes('vercel.app')).length },
    { id: 'mobile', label: 'Mobile & 3D', count: projects.filter(p => p.filterGroup === 'mobile' || p.filterGroup === '3d').length },
    { id: 'ai', label: 'AI & Deep Learning', count: projects.filter(p => p.filterGroup === 'ai').length }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vercel') return p.liveUrl && p.liveUrl.includes('vercel.app');
    if (activeFilter === 'mobile') return p.filterGroup === 'mobile' || p.filterGroup === '3d';
    return p.filterGroup === activeFilter;
  });

  const handleOpenProject = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="section" style={{ background: 'rgba(9,13,22,0.5)' }}>
      <div className="container">
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '9999px', color: '#7dd3fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Featured Engineering Portfolio
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Projects &amp; <span className="gradient-text">Live Creations</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 12px' }}>
              Web creations, rebuilds, mobile architectures, 3D interactive graphics, and deep learning systems.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '9999px', color: '#38bdf8', fontSize: '13px', fontWeight: 600 }}>
              <i className="fas fa-hand-pointer" style={{ animation: 'bounce 1.5s infinite' }}></i>
              <span>Click any project card to open it directly</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Navigation Tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '44px'
            }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeFilter === tab.id ? '1px solid #6366f1' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: activeFilter === tab.id ? 'rgba(99, 102, 241, 0.25)' : 'rgba(15, 23, 42, 0.6)',
                  color: activeFilter === tab.id ? '#ffffff' : '#94a3b8',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{tab.label}</span>
                <span
                  style={{
                    background: activeFilter === tab.id ? '#6366f1' : 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '11px',
                    padding: '2px 7px',
                    borderRadius: '10px',
                    fontWeight: 700
                  }}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {filteredProjects.map((proj, i) => {
            const targetUrl = proj.directUrl || proj.liveUrl || proj.demoLink || proj.githubLink;
            const hasVercel = proj.liveUrl && proj.liveUrl.includes('vercel.app');

            return (
              <ScrollReveal key={proj.id} direction="up" delay={i * 0.08}>
                <div
                  onClick={() => handleOpenProject(targetUrl)}
                  style={{ height: '100%', cursor: 'pointer' }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenProject(targetUrl);
                    }
                  }}
                >
                  <GlowCard
                    glowColor={proj.bgGlow}
                    style={{
                      padding: '28px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: `1px solid rgba(${proj.bgGlow}, 0.25)`,
                      transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      position: 'relative'
                    }}
                  >
                    {/* Content Section */}
                    <div>
                      {/* Top Header Badge & Direct Open Hint */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span
                            style={{
                              padding: '4px 12px',
                              background: `rgba(${proj.bgGlow}, 0.12)`,
                              border: `1px solid rgba(${proj.bgGlow}, 0.3)`,
                              borderRadius: '6px',
                              color: `rgb(${proj.bgGlow})`,
                              fontSize: '11px',
                              fontWeight: 700,
                              letterSpacing: '0.5px',
                              textTransform: 'uppercase'
                            }}
                          >
                            {proj.badge}
                          </span>
                          {hasVercel && (
                            <span
                              style={{
                                padding: '3px 8px',
                                background: 'rgba(56, 189, 248, 0.15)',
                                border: '1px solid rgba(56, 189, 248, 0.3)',
                                borderRadius: '6px',
                                color: '#38bdf8',
                                fontSize: '11px',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <i className="fas fa-globe" style={{ fontSize: '10px' }}></i> Vercel Live
                            </span>
                          )}
                        </div>

                        <span
                          style={{
                            fontSize: '12px',
                            color: '#38bdf8',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          Open <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }} />
                        </span>
                      </div>

                      {/* Image Banner for EV Rescue */}
                      {proj.image && (
                        <div
                          style={{
                            position: 'relative',
                            width: '100%',
                            height: '185px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: '16px',
                            border: `1px solid rgba(${proj.bgGlow}, 0.3)`,
                            background: '#041d14'
                          }}
                        >
                          <img
                            src={proj.image}
                            alt={proj.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'top center'
                            }}
                          />
                          <div
                            style={{
                              position: 'absolute',
                              bottom: '8px',
                              left: '8px',
                              background: 'rgba(4, 29, 20, 0.88)',
                              backdropFilter: 'blur(8px)',
                              padding: '4px 10px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              color: '#10b981',
                              fontWeight: 700,
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <i className="fas fa-charging-station" />
                            <span>EVRescue Live Interface</span>
                          </div>
                        </div>
                      )}

                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>
                        {proj.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.65, marginBottom: '18px' }}>
                        {proj.description}
                      </p>

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
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                        {proj.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              padding: '4px 10px',
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: '6px',
                              fontSize: '11.5px',
                              color: '#a5b4fc',
                              fontFamily: 'var(--font-mono)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row */}
                    <div
                      style={{
                        paddingTop: '18px',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        display: 'flex',
                        gap: '10px'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Magnet strength={0.2} style={{ flex: 1 }}>
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            width: '100%',
                            padding: '10px 16px',
                            borderRadius: '10px',
                            background: `rgba(${proj.bgGlow}, 0.15)`,
                            border: `1px solid rgba(${proj.bgGlow}, 0.4)`,
                            color: `rgb(${proj.bgGlow})`,
                            fontSize: '13px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.25s ease'
                          }}
                        >
                          <i className={`fas ${hasVercel ? 'fa-globe' : proj.liveUrl ? 'fa-arrow-up-right-from-square' : 'fa-folder-open'}`} />
                          <span>{hasVercel ? 'Open on Vercel' : proj.actionLabel || 'Open Project'}</span>
                        </a>
                      </Magnet>

                      {proj.githubLink && (
                        <Magnet strength={0.2}>
                          <a
                            href={proj.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${proj.title} on GitHub`}
                            title="View on GitHub"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '42px',
                              height: '42px',
                              borderRadius: '10px',
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                              color: '#e2e8f0',
                              fontSize: '15px',
                              textDecoration: 'none',
                              transition: 'all 0.25s ease'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.borderColor = `rgba(${proj.bgGlow}, 0.5)`;
                              e.currentTarget.style.background = `rgba(${proj.bgGlow}, 0.15)`;
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.color = '#e2e8f0';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                            }}
                          >
                            <i className="fab fa-github" />
                          </a>
                        </Magnet>
                      )}
                    </div>
                  </GlowCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
