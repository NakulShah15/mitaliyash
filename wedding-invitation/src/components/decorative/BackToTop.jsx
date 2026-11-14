import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

// Floating "back to top" button that appears once the visitor has scrolled
// past the hero section, and smooth-scrolls back to the top on click.
export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.common.backToTop}
      title={t.common.backToTop}
      className={`fixed bottom-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-maroon text-gold shadow-lg shadow-black/30 transition-all duration-300 hover:bg-maroon-light hover:scale-105 active:scale-95 sm:bottom-6 sm:left-6 sm:h-11 sm:w-11 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
