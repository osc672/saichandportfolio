import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer
      style={{
        background: '#040711',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 0 30px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '14px'
                }}
              >
                SC
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                {personal.name}
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
              Data Analyst • Web Developer • MCA Post Graduate
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '14px' }}>
            <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            <a href="#education" style={{ color: '#94a3b8', textDecoration: 'none' }}>Education</a>
            <a href="#skills" style={{ color: '#94a3b8', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a>
            <a href="#research" style={{ color: '#94a3b8', textDecoration: 'none' }}>Research</a>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            fontSize: '12px',
            color: '#64748b'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Olupalli Sai Chand. All rights reserved.
          </div>

          <div>
            Vijayawada, Andhra Pradesh, India
          </div>
        </div>
      </div>
    </footer>
  );
}
