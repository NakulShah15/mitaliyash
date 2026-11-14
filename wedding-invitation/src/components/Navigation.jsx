import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { headingFont } from "../utils/fonts";
import MusicPlayer from "./MusicPlayer";

const SECTION_IDS = [
  "home",
  "countdown",
  "invitation",
  "couple",
  "events",
  "gallery",
  "family",
];

export default function Navigation() {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const font = headingFont(language);

  const navLinks = SECTION_IDS.map((id) => ({
    id,
    label: t.nav[id === "home" ? "home" : id],
  }));

  const scrollToSection = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-maroon-dark/95 shadow-md shadow-black/20 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className={`gold-text text-lg font-extrabold tracking-wide sm:text-xl ${font}`}
        >
          M &amp; Y
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${font} ${
                activeId === link.id
                  ? "bg-gold/15 text-gold"
                  : "text-cream/80 hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className={`flex items-center gap-1.5 rounded-full border border-gold/60 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-gold/10 sm:text-sm ${font}`}
          >
            <Languages size={15} />
            {t.meta.switchLanguage}
          </button>

          <MusicPlayer />

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gold lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gold/30 bg-maroon-dark lg:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${font} ${
                    activeId === link.id
                      ? "bg-gold/15 text-gold"
                      : "text-cream/85 hover:bg-gold/10"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
