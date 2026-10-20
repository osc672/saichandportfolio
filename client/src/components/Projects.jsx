import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section" style={{ background: 'rgba(9, 13, 22, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Engineering</span>
          <h2 className="section-title">
            Projects &amp; <span className="gradient-text">Intelligent Bots</span>
          </h2>
          <p className="section-subtitle">
            Deep learning applications, interactive AI assistants, and enterprise analytical systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-tech">{proj.category}</span>
                  <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{proj.period}</span>
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>
                  {proj.title}
                </h3>

                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                  {proj.description}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {proj.highlights.map((h, i) => (
                    <div key={i} style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <i className="fas fa-check-circle" style={{ color: '#38bdf8', marginTop: '3px', fontSize: '12px' }}></i>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        fontSize: '12px',
                        color: '#a5b4fc'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Live Demo only, Git code removed */}
              {proj.demoLink && (
                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-demo btn-sm"
                    style={{ width: '100%' }}
                  >
                    <i className="fas fa-play"></i> Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
