import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../reactbits/ScrollReveal';
import GlowCard from '../reactbits/GlowCard';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'websites', label: 'Web Creations & Rebuilds', count: projects.filter(p => p.filterGroup === 'websites').length },
    { id: 'vercel', label: 'Live on Vercel', count: projects.filter(p => p.isVercel).length },
    { id: 'mobile', label: 'Mobile & 3D Web', count: projects.filter(p => p.filterGroup === 'mobile').length },
    { id: 'backend', label: 'Backend & AI Systems', count: projects.filter(p => p.filterGroup === 'backend').length }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'vercel') return p.isVercel;
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
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ display: 'inline-block', padding: '6px 18px', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '9999px', color: '#7dd3fc', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Featured Engineering Portfolio
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff', marginBottom: '14px' }}>
              Projects &amp; <span className="gradient-text">Live Creations</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 14px' }}>
              Web creations, rebuilds, mobile architectures, 3D interactive graphics, and backend cloud systems.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '9999px', color: '#c7d2fe', fontSize: '13px', fontWeight: 600 }}>
              <i className="fas fa-arrow-pointer" style={{ color: '#38bdf8' }}></i>
              <span>Click any project card to open directly</span>
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
              marginBottom: '40px'
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '28px' }}>
          {filteredProjects.map((proj, i) => {
            const targetUrl = proj.directUrl;
            const isVercel = proj.isVercel;
            const isVideo = proj.isVideo;
            const isTelegram = proj.isTelegram;

            return (
              <ScrollReveal key={proj.id} direction="up" delay={i * 0.06}>
                <div
                  onClick={() => handleOpenProject(targetUrl)}
                  style={{ height: '100%', cursor: 'pointer' }}
                  role="link"
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
                      padding: '26px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      border: `1px solid rgba(${proj.bgGlow}, 0.22)`,
                      transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      position: 'relative'
                    }}
                  >
                    {/* Top Content */}
                    <div>
                      {/* Status / Platform Top Row */}
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

                          {/* Interactive Platform Badge */}
                          {isVercel && (
                            <span
                              style={{
                                padding: '3px 10px',
                                background: 'rgba(56, 189, 248, 0.15)',
                                border: '1px solid rgba(56, 189, 248, 0.4)',
                                borderRadius: '9999px',
                                color: '#38bdf8',
                                fontSize: '11px',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <i className="fas fa-globe" style={{ fontSize: '10px' }} /> Live on Vercel
                            </span>
                          )}

                          {!isVercel && !isVideo && !isTelegram && (
                            <span
                              style={{
                                padding: '3px 10px',
                                background: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                borderRadius: '9999px',
                                color: '#cbd5e1',
                                fontSize: '11px',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <i className="fab fa-github" style={{ fontSize: '11px' }} /> GitHub Repository
                            </span>
                          )}

                          {isVideo && (
                            <span
                              style={{
                                padding: '3px 10px',
                                background: 'rgba(236, 72, 153, 0.15)',
                                border: '1px solid rgba(236, 72, 153, 0.35)',
                                borderRadius: '9999px',
                                color: '#f472b6',
                                fontSize: '11px',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <i className="fas fa-play" style={{ fontSize: '10px' }} /> Video Demo
                            </span>
                          )}

                          {isTelegram && (
                            <span
                              style={{
                                padding: '3px 10px',
                                background: 'rgba(14, 165, 233, 0.15)',
                                border: '1px solid rgba(14, 165, 233, 0.35)',
                                borderRadius: '9999px',
                                color: '#38bdf8',
                                fontSize: '11px',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px'
                              }}
                            >
                              <i className="fab fa-telegram" style={{ fontSize: '11px' }} /> Telegram Bot
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
                          <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '11px' }} />
                        </span>
                      </div>

                      {/* Full Uncropped Image Preview for EV Rescue */}
                      {proj.image && (
                        <div
                          style={{
                            width: '100%',
                            borderRadius: '14px',
                            overflow: 'hidden',
                            marginBottom: '18px',
                            border: `1px solid rgba(${proj.bgGlow}, 0.35)`,
                            background: 'rgba(4, 23, 16, 0.85)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '12px'
                          }}
                        >
                          <img
                            src={proj.image}
                            alt={proj.title}
                            style={{
                              width: '100%',
                              maxHeight: '480px',
                              objectFit: 'contain',
                              borderRadius: '10px',
                              display: 'block',
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)'
                            }}
                          />
                          <div
                            style={{
                              marginTop: '10px',
                              padding: '4px 12px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              borderRadius: '6px',
                              fontSize: '11px',
                              color: '#34d399',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <i className="fas fa-charging-station" />
                            <span>Complete Mobile App UI</span>
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
                        {proj.tags.map((tag) => (
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

                    {/* Attractive Interactive Bottom Bar */}
                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: isVercel ? '#38bdf8' : `rgb(${proj.bgGlow})`
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <i
                          className={
                            isVercel
                              ? 'fas fa-globe'
                              : isTelegram
                              ? 'fab fa-telegram'
                              : isVideo
                              ? 'fas fa-play'
                              : 'fab fa-github'
                          }
                          style={{ fontSize: '14px' }}
                        />
                        <span>
                          {isVercel
                            ? 'Open Live on Vercel'
                            : isTelegram
                            ? 'Open on Telegram'
                            : isVideo
                            ? 'Watch Demo Video'
                            : 'Open on GitHub'}
                        </span>
                      </div>

                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: isVercel ? 'rgba(56, 189, 248, 0.15)' : `rgba(${proj.bgGlow}, 0.15)`,
                          border: isVercel ? '1px solid rgba(56, 189, 248, 0.3)' : `1px solid rgba(${proj.bgGlow}, 0.3)`,
                          fontSize: '11px',
                          letterSpacing: '0.4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Open <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }} />
                      </span>
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
