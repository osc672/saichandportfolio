// ReactBits: CountUp animated number
import { useEffect, useRef, useState } from 'react';

export default function CountUp({ to, duration = 2, suffix = '', prefix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const numTo = parseFloat(String(to).replace(/[^0-9.]/g, '')) || 0;
  const extra = String(to).replace(/[0-9.]/g, '');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = null;
          const step = (ts) => {
            if (!start) start = ts;
            const prog = Math.min((ts - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - prog, 3);
            setCount(parseFloat((eased * numTo).toFixed(decimals)));
            if (prog < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numTo, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals ? count.toFixed(decimals) : count}{extra}{suffix}
    </span>
  );
}

