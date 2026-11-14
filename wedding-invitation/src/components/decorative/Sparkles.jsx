import { useMemo } from "react";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Soft golden sparkle particles scattered across a section, purely for
// ambience. Decorative only.
export default function Sparkles({ count = 18, className = "" }) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: randomBetween(0, 100),
        left: randomBetween(0, 100),
        size: randomBetween(3, 7),
        delay: randomBetween(0, 4),
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-gold-light animate-sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 8px 2px rgba(234,205,107,0.8)",
          }}
        />
      ))}
    </div>
  );
}
