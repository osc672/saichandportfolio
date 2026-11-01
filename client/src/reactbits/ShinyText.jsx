// ReactBits: ShinyText - animated shimmer text
import './ShinyText.css';

export default function ShinyText({ text, className = '', speed = 3, disabled = false }) {
  return (
    <span
      className={`shiny-text ${disabled ? '' : 'shiny-animate'} ${className}`}
      style={{ '--shiny-speed': `${speed}s` }}
    >
      {text}
    </span>
  );
}

