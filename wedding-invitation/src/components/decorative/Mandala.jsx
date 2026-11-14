// A hand-drawn golden mandala ring used as a decorative background accent.
// `spin` enables a very slow continuous rotation for subtle ambient motion.
export default function Mandala({
  className = "",
  spin = false,
  reverse = false,
}) {
  const spinClass = spin
    ? reverse
      ? "animate-spin-slow-reverse"
      : "animate-spin-slow"
    : "";
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${spinClass}`}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.55">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="82" />
        <circle cx="100" cy="100" r="60" strokeWidth="0.9" />
        <circle cx="100" cy="100" r="30" strokeWidth="0.9" />
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 18 C 108 32, 108 44, 100 52 C 92 44, 92 32, 100 18 Z" />
              <line x1="100" y1="4" x2="100" y2="18" />
            </g>
          );
        })}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={`p-${i}`} transform={`rotate(${angle} 100 100)`}>
              <path
                d="M100 48 C 118 58, 118 78, 100 90 C 82 78, 82 58, 100 48 Z"
                strokeWidth="0.7"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
