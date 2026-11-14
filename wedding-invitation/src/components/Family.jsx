import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";
import Mandala from "./decorative/Mandala";

function FamilyCard({
  titleLabel,
  familyName,
  father,
  mother,
  sibling,
  siblingLabel,
  fatherLabel,
  motherLabel,
  font,
  align,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="flex-1 rounded-2xl border border-gold/50 bg-ivory px-6 py-8 text-center shadow-lg shadow-maroon/10"
    >
      <p className={`text-xs uppercase tracking-widest text-gold-dark ${font}`}>
        {titleLabel}
      </p>
      <h3 className={`gold-text mt-2 text-2xl font-bold sm:text-3xl ${font}`}>
        {familyName}
      </h3>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className={`mt-4 space-y-1 text-sm text-maroon-dark/90 ${font}`}>
        <p>
          <span className="font-semibold">{fatherLabel}: </span>
          {father}
        </p>
        <p>
          <span className="font-semibold">{motherLabel}: </span>
          {mother}
        </p>
        <p>
          <span className="font-semibold">{siblingLabel}: </span>
          {sibling}
        </p>
      </div>
    </motion.div>
  );
}

export default function Family() {
  const { t, language } = useLanguage();
  const font = headingFont(language);
  const { bride } = weddingConfig;

  return (
    <section id="family" className="section-container relative bg-cream">
      <Mandala className="pointer-events-none absolute -top-10 right-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />
      <Mandala className="pointer-events-none absolute -bottom-10 left-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <SectionHeading
          title={t.family.heading}
          subtitle={t.family.subheading}
          compactTitle={language === "en"}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-maroon-dark/90 sm:text-base ${font}`}
        >
          {t.family.message}
        </motion.p>

        <div className="mx-auto max-w-xl">
          <FamilyCard
            titleLabel={t.family.brideFamilyTitle}
            familyName={language === "gu" ? bride.familyGu : bride.family}
            father={language === "gu" ? bride.fatherGu : bride.father}
            mother={language === "gu" ? bride.motherGu : bride.mother}
            sibling={language === "gu" ? bride.brotherGu : bride.brother}
            siblingLabel={t.family.brotherLabel}
            fatherLabel={t.family.fatherLabel}
            motherLabel={t.family.motherLabel}
            font={font}
            align="left"
          />
        </div>
      </div>
    </section>
  );
}
