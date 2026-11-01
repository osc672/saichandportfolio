import { useState, useEffect } from 'react';
import Magnet from '../reactbits/Magnet';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(7,10,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        maxWidth: '100%',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '22px',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #6366f1, #a855f7, #38bdf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.5px'
        }}>
          OSC<span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>.dev</span>
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
        {navLinks.map(link => (
          <Magnet key={link.href} strength={0.2}>
            <a
              href={link.href}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: active === link.href ? '#ffffff' : '#94a3b8',
                background: active === link.href ? 'rgba(99,102,241,0.18)' : 'transparent',
                border: active === link.href ? '1px solid rgba(99,102,241,0.4)' : '1px solid transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                letterSpacing: '0.2px',
              }}
            >
              {link.label}
            </a>
          </Magnet>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="desktop-nav"
        style={{
          padding: '8px 20px',
          borderRadius: '10px',
          fontSize: '13px',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          color: '#ffffff',
          textDecoration: 'none',
          boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
          transition: 'all 0.2s ease',
          letterSpacing: '0.3px',
        }}
      >
        Hire Me
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#ffffff', fontSize: '22px', padding: '6px',
        }}
        aria-label="Toggle menu"
      >
        <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '64px', left: 0, right: 0,
          background: 'rgba(7,10,18,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                color: active === link.href ? '#ffffff' : '#94a3b8',
                background: active === link.href ? 'rgba(99,102,241,0.15)' : 'transparent',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}

