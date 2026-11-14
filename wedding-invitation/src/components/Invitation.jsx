import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";
import GaneshaMotif from "./decorative/GaneshaMotif";
import Mandala from "./decorative/Mandala";

export default function Invitation() {
  const { t, language } = useLanguage();

  return (
    <section id="invitation" className="section-container relative bg-cream">
      <Mandala className="pointer-events-none absolute -top-10 right-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />
      <Mandala className="pointer-events-none absolute -bottom-10 left-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <SectionHeading
          title={t.invitation.heading}
          subtitle={t.invitation.subheading}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border-2 border-gold bg-ivory px-6 py-10 shadow-2xl shadow-maroon/20 sm:px-12 sm:py-14"
        >
          <span
            className="absolute inset-3 rounded-2xl border border-gold/40 sm:inset-5"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            <GaneshaMotif className="h-14 w-14 text-maroon/80" />

            <p
              className={`whitespace-pre-line text-base leading-relaxed text-maroon-dark sm:text-lg ${headingFont(
                language,
              )}`}
            >
              {t.invitation.message}
            </p>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <p
              className={`gold-text text-xl font-bold sm:text-2xl ${headingFont(language)}`}
            >
              {t.invitation.families}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
