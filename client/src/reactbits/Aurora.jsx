// ReactBits: Aurora background component
import { useEffect, useRef } from 'react';

export default function Aurora({ colorStops = ['#6366f1', '#a855f7', '#38bdf8'], speed = 0.5, blend = 0.5, amplitude = 1.0 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const bands = colorStops.length;
      for (let i = 0; i < bands; i++) {
        const hue = colorStops[i];
        const offset = (i / bands) * Math.PI * 2;
        const y = height * 0.4 + Math.sin(t * speed + offset) * height * 0.18 * amplitude;
        const grad = ctx.createRadialGradient(width / 2, y, 0, width / 2, y, width * 0.65);
        grad.addColorStop(0, hexToRgba(hue, 0.18 * blend));
        grad.addColorStop(1, hexToRgba(hue, 0));
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      t += 0.008;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [colorStops, speed, blend, amplitude]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

