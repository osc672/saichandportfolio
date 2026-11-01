import { portfolioData } from '../data/portfolioData';
import ShinyText from '../reactbits/ShinyText';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', background: 'rgba(4,7,14,0.9)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        {/* Logo */}
        <div>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 900, background: 'linear-gradient(135deg, #6366f1, #a855f7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            OSC<span style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>.dev</span>
          </span>
          <p style={{ fontSize: '12.5px', color: '#475569', marginTop: '4px' }}>
            {personal.name} • Data Analyst & Full-Stack Developer
          </p>
        </div>

        {/* Center */}
        <p style={{ fontSize: '13px', color: '#334155', textAlign: 'center' }}>
          © {year} <ShinyText text={personal.name} speed={4} /> · Built with React & ReactBits
        </p>

        {/* Social */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {[
            { href: personal.linkedin, icon: 'fa-linkedin-in' },
            { href: personal.github, icon: 'fa-github' },
            { href: `mailto:${personal.email}`, icon: 'fa-envelope' },
            { href: personal.telegramBot, icon: 'fa-telegram' },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#475569', fontSize: '14px', textDecoration: 'none', transition: 'all 0.2s ease' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <i className={`fab ${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

