import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { headingFont } from "../utils/fonts";
import Sparkles from "./decorative/Sparkles";
import Mandala from "./decorative/Mandala";
import GaneshaMotif from "./decorative/GaneshaMotif";
import OrnateArch from "./decorative/OrnateArch";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Hero() {
  const { t, language } = useLanguage();

  const scrollToNext = () => {
    document
      .getElementById("countdown")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-royal-dark px-4 pb-24 pt-24 text-center sm:min-h-[110vh] sm:justify-center sm:py-20"
    >
      {/* Ambient decoration layers */}
      <Mandala
        spin
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 text-gold/30 sm:h-96 sm:w-96"
      />
      <Mandala
        spin
        reverse
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 text-gold/30 sm:h-96 sm:w-96"
      />
      <Sparkles count={22} />

      {/* Top mandap-style ornamental arch */}
      <OrnateArch className="absolute top-0 left-0 h-14 w-full text-gold/80 sm:h-20" />

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-2 text-gold/90 sm:mb-4">
          <GaneshaMotif className="h-14 w-14 sm:h-20 sm:w-20" />
        </motion.div>

        <motion.p
          variants={item}
          className="font-gujarati text-lg font-semibold tracking-wide text-gold sm:text-2xl"
        >
          {t.hero.invocation}
        </motion.p>

        <motion.p
          variants={item}
          className={`mt-3 max-w-md text-sm leading-relaxed text-cream/90 sm:text-base ${headingFont(
            language,
          )}`}
        >
          {t.hero.withBlessings}
        </motion.p>

        <motion.div
          variants={item}
          className="my-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent sm:my-6 sm:w-32"
        />

        <motion.h1
          variants={item}
          className="gold-text px-2 py-2 font-gujarati text-[2.5rem] font-extrabold leading-[1.4] drop-shadow-sm sm:text-[3.25rem] md:text-[4rem]"
        >
          {t.hero.names}
        </motion.h1>

        <motion.p
          variants={item}
          className={`mt-4 text-xl font-semibold text-ivory sm:mt-5 sm:text-2xl ${headingFont(language)}`}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className={`mt-3 max-w-md text-sm leading-relaxed text-cream/90 sm:mt-4 sm:text-base ${headingFont(
            language,
          )}`}
        >
          {t.hero.invite}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-col items-center gap-1 rounded-xl border border-gold/50 bg-maroon-dark/40 px-6 py-3 text-gold shadow-inner sm:mt-8"
        >
          <span
            className={`text-base font-semibold sm:text-lg ${headingFont(language)}`}
          >
            {t.hero.date}
          </span>
          <span
            className={`text-xs text-cream/80 sm:text-sm ${headingFont(language)}`}
          >
            {t.hero.venueLine}
          </span>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1 text-gold/90"
        aria-label={t.hero.scroll}
      >
        <span className={`text-xs tracking-wide ${headingFont(language)}`}>
          {t.hero.scroll}
        </span>
        <span className="animate-bounce-slow">
          <ChevronDown size={26} />
        </span>
      </motion.button>
    </section>
  );
}
