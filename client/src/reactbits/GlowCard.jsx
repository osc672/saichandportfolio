// ReactBits: GlowCard - shimmering glow effect on hover following the cursor
import { useRef } from 'react';

export default function GlowCard({ children, className = '', style = {}, glowColor = '99,102,241' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-opacity', '1');
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.setProperty('--glow-opacity', '0');
  };

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-opacity': '0',
        '--glow-color': glowColor,
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(var(--glow-color), 0.12), transparent 70%)`,
          opacity: 'var(--glow-opacity)',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: 'inherit',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

