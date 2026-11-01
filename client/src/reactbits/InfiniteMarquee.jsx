// ReactBits: InfiniteMarquee - horizontal scrolling ticker
import './InfiniteMarquee.css';

export default function InfiniteMarquee({ items = [], speed = 30, pauseOnHover = true, gap = 40 }) {
  return (
    <div
      className="marquee-wrapper"
      style={{ '--marquee-gap': `${gap}px`, '--marquee-speed': `${speed}s` }}
    >
      <div className={`marquee-track ${pauseOnHover ? 'marquee-pause-hover' : ''}`}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item" style={{ marginRight: gap }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

