// A simple, respectful, minimalist line-art silhouette of Lord Ganesha used
// as an auspicious opening motif. Rendered in a single `currentColor` stroke
// so it can be tinted with Tailwind text-color utilities by the parent.
export default function GaneshaMotif({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-label="Lord Ganesha motif"
      role="img"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* crown */}
        <path d="M58 24 C 58 12, 102 12, 102 24" />
        <circle cx="80" cy="14" r="4" fill="currentColor" stroke="none" />
        {/* ears */}
        <path d="M46 48 C 20 44, 18 78, 44 82" />
        <path d="M114 48 C 140 44, 142 78, 116 82" />
        {/* head */}
        <path d="M50 52 C 50 30, 110 30, 110 52 C 110 72, 100 82, 80 84 C 60 82, 50 72, 50 52 Z" />
        {/* trunk */}
        <path d="M80 84 C 78 96, 92 98, 90 110 C 88 120, 76 122, 70 116" />
        {/* tusks */}
        <path d="M66 82 L 60 92" />
        <path d="M94 82 L 100 90" />
        {/* body */}
        <path d="M54 110 C 50 140, 60 150, 80 152 C 100 150, 110 140, 106 110" />
        {/* belt */}
        <path d="M58 122 C 70 128, 90 128, 102 122" />
        {/* modak bowl */}
        <circle cx="38" cy="122" r="10" />
      </g>
    </svg>
  );
}
