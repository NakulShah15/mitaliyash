import { useMemo } from "react";

const PETAL_GLYPHS = ["🌸", "🌼", "🏵️", "🌺"];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

// Continuous drifting flower-petal layer used behind hero-style sections.
// Purely decorative (aria-hidden) and pointer-events-none so it never blocks
// interaction with the content above it.
export default function Petals({ count = 14, className = "" }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        size: randomBetween(14, 26),
        duration: randomBetween(9, 18),
        delay: randomBetween(0, 10),
        drift: randomBetween(-60, 60),
        glyph: PETAL_GLYPHS[i % PETAL_GLYPHS.length],
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute top-0 select-none animate-petal-fall opacity-80"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            "--drift": `${petal.drift}px`,
          }}
        >
          {petal.glyph}
        </span>
      ))}
    </div>
  );
}
