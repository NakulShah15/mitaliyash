import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";

function PhotoFrame({ src, alt, size = "md" }) {
  const sizing =
    size === "lg" ? "h-44 w-44 sm:h-56 sm:w-56" : "h-36 w-36 sm:h-44 sm:w-44";

  return (
    <div className={`relative ${sizing}`}>
      <span className="absolute -inset-2 rounded-full border-2 border-dashed border-gold/60 animate-spin-slow" />
      <span className="absolute -inset-1 rounded-full border border-gold/80" />
      <div className="h-full w-full overflow-hidden rounded-full border-4 border-ivory shadow-xl shadow-maroon/30">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function CoupleSection() {
  const { t, language } = useLanguage();
  const font = headingFont(language);

  return (
    <section id="couple" className="section-container relative bg-ivory">
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <SectionHeading
          title={t.couple.heading}
          subtitle={t.couple.subheading}
        />

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-center md:gap-8 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <PhotoFrame
              src={weddingConfig.images.bridePhoto}
              alt={weddingConfig.bride.name}
            />
            <p
              className={`text-xs uppercase tracking-widest text-gold-dark ${font}`}
            >
              {t.couple.brideLabel}
            </p>
            <h3 className={`gold-text text-2xl font-bold sm:text-3xl ${font}`}>
              {language === "gu"
                ? weddingConfig.bride.nameGu
                : weddingConfig.bride.name}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <PhotoFrame
              src={weddingConfig.images.couplePhoto}
              alt="Mitali & Yash"
              size="lg"
            />
            <p className={`mt-1 text-sm italic text-maroon-light ${font}`}>
              {t.couple.caption}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <PhotoFrame
              src={weddingConfig.images.groomPhoto}
              alt={weddingConfig.groom.name}
            />
            <p
              className={`text-xs uppercase tracking-widest text-gold-dark ${font}`}
            >
              {t.couple.groomLabel}
            </p>
            <h3 className={`gold-text text-2xl font-bold sm:text-3xl ${font}`}>
              {language === "gu"
                ? weddingConfig.groom.nameGu
                : weddingConfig.groom.name}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
