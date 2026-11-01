// ReactBits: Typewriter / TextScramble component
import { useState, useEffect } from 'react';

export function Typewriter({ texts = [], speed = 75, deleteSpeed = 35, pauseMs = 1800, className = '' }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[index % texts.length];
    const delay = deleting ? deleteSpeed : speed;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [display, deleting, index, texts, speed, deleteSpeed, pauseMs]);

  return (
    <span className={className}>
      {display}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1em',
          background: '#38bdf8',
          marginLeft: '3px',
          verticalAlign: 'text-bottom',
          borderRadius: '2px',
          animation: 'pulse-glow 0.8s ease-in-out infinite',
        }}
      />
    </span>
  );
}

