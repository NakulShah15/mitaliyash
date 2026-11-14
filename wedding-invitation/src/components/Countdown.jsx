import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useCountdown } from "../hooks/useCountdown";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";
import Sparkles from "./decorative/Sparkles";

function CountdownCard({ value, label }) {
  return (
    <motion.div
      key={label}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex h-24 w-full flex-col items-center justify-center rounded-xl border border-gold/60 bg-gradient-to-b from-maroon to-maroon-dark shadow-lg shadow-black/30 sm:h-32 sm:w-28"
    >
      <span className="absolute inset-0 rounded-xl border border-gold/20" />
      <motion.span
        key={value}
        initial={{ opacity: 0.3, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="gold-text text-3xl font-extrabold tabular-nums sm:text-4xl"
      >
        {String(value).padStart(2, "0")}
      </motion.span>
      <span className="mt-1 text-[11px] uppercase tracking-wide text-cream/80 sm:text-xs">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const { t, language } = useLanguage();
  const { days, hours, minutes, seconds, isPast } = useCountdown(
    weddingConfig.weddingDateISO,
  );

  return (
    <section
      id="countdown"
      className="section-container relative bg-gradient-to-b from-royal-dark via-maroon to-maroon-dark text-ivory"
    >
      <Sparkles count={14} />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <SectionHeading
          title={t.countdown.heading}
          subtitle={t.countdown.subheading}
          light
        />

        {isPast ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-gold/50 bg-maroon-dark/60 px-8 py-10 text-center shadow-xl"
          >
            <Heart className="text-gold" size={36} />
            <h3
              className={`gold-text text-2xl font-bold sm:text-3xl ${headingFont(language)}`}
            >
              {t.countdown.celebrationTitle}
            </h3>
            <p className={`text-cream/90 ${headingFont(language)}`}>
              {t.countdown.celebrationMessage}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6">
            <CountdownCard value={days} label={t.countdown.days} />
            <CountdownCard value={hours} label={t.countdown.hours} />
            <CountdownCard value={minutes} label={t.countdown.minutes} />
            <CountdownCard value={seconds} label={t.countdown.seconds} />
          </div>
        )}
      </div>
    </section>
  );
}
