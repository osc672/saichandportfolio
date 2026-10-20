import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Research() {
  const { publications } = portfolioData;

  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Scholarly Work</span>
          <h2 className="section-title">
            Research &amp; <span className="gradient-text">Publications</span>
          </h2>
          <p className="section-subtitle">
            Peer-reviewed papers published in international conference proceedings and journals.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '940px', margin: '0 auto' }}>
          {publications.map((paper, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '26px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="badge badge-grade">
                  <i className="fas fa-file-lines" style={{ marginRight: '6px' }}></i> {paper.doi}
                </span>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>{paper.date}</span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', lineHeight: 1.4 }}>
                {paper.title}
              </h3>

              <h4 style={{ fontSize: '14px', color: '#38bdf8', fontWeight: 600, marginBottom: '14px' }}>
                <i className="fas fa-landmark" style={{ marginRight: '8px' }}></i>
                {paper.conference}
              </h4>

              <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, marginBottom: '18px' }}>
                {paper.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 10px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#c7d2fe'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
