// A slim ornamental divider (diamond + flourish lines) used under section
// headings to reinforce the premium traditional feel.
export default function OrnateDivider({ className = "" }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
      <svg width="22" height="22" viewBox="0 0 22 22" className="text-gold">
        <path
          d="M11 0 L16 11 L11 22 L6 11 Z"
          fill="currentColor"
          opacity="0.9"
        />
        <circle cx="11" cy="11" r="2.4" fill="#fdf6ec" />
      </svg>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
