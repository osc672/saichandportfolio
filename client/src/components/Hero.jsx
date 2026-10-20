import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = personal.titles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % personal.titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, personal.titles]);

  return (
    <section id="hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              marginBottom: '24px'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981'
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#c7d2fe', letterSpacing: '0.5px' }}>
              Available for Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 900,
              letterSpacing: '-1px',
              lineHeight: 1.15,
              marginBottom: '18px',
              color: '#ffffff'
            }}
          >
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          {/* Dynamic Typewriter */}
          <div
            style={{
              fontSize: 'clamp(20px, 3vw, 30px)',
              fontWeight: 700,
              color: '#38bdf8',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '22px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <span style={{ color: '#94a3b8', fontWeight: 500 }}>I am a</span>
            <span style={{ color: '#38bdf8' }}>{displayText}</span>
            <span style={{ borderRight: '3px solid #38bdf8', animation: 'pulseGlow 0.8s infinite' }}>&nbsp;</span>
          </div>

          {/* Clean Description */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              color: '#94a3b8',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '720px',
              margin: '0 auto 36px'
            }}
          >
            Motivated <strong style={{ color: '#ffffff' }}>Data Analyst</strong> &amp; <strong style={{ color: '#ffffff' }}>Web Developer</strong> with an MCA degree, skilled in translating complex datasets into actionable insights using Power BI, Tableau, SQL, &amp; Python, while crafting fast, intuitive web experiences.
          </p>

          {/* Action CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '40px'
            }}
          >
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i> Send Message
            </a>
            <a
              href="https://drive.google.com/file/d/1S8O1P_apXtO6mmR8hX4ggP2lSBxFdgwy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i className="fas fa-file-arrow-down"></i> View Resume
            </a>
            <a href="#projects" className="btn btn-glass">
              <i className="fas fa-code"></i> Explore Work
            </a>
          </div>

          {/* Social Network Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="btn btn-glass"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="Email Sai Chand"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="btn btn-glass"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              aria-label="Call Sai Chand"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
