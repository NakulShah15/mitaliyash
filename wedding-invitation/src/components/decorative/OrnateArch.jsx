// Decorative traditional Indian scalloped arch + pillar silhouette, used as
// a framing border behind the hero / invitation sections to evoke a mandap.
export default function OrnateArch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 220"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor" opacity="0.9">
        {Array.from({ length: 11 }, (_, i) => (
          <circle key={i} cx={20 + i * 36} cy="18" r="16" />
        ))}
        <rect x="0" y="30" width="400" height="10" />
        <rect x="0" y="40" width="26" height="180" />
        <rect x="374" y="40" width="26" height="180" />
        <path
          d="M26 40 C 90 110, 310 110, 374 40"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
        />
      </g>
    </svg>
  );
}
