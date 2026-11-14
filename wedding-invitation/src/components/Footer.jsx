import { Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import GaneshaMotif from "./decorative/GaneshaMotif";

export default function Footer() {
  const { t, language } = useLanguage();
  const font = headingFont(language);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-maroon-dark to-black px-4 py-12 text-center text-cream">
      <GaneshaMotif className="mx-auto mb-4 h-10 w-10 text-gold/80" />

      <p
        className={`font-gujarati text-sm font-semibold tracking-wide text-gold`}
      >
        {t.footer.blessing}
      </p>

      <h3 className={`gold-text mt-4 text-2xl font-bold sm:text-3xl ${font}`}>
        {language === "gu"
          ? `${weddingConfig.bride.nameGu} ❤ ${weddingConfig.groom.nameGu}`
          : `${weddingConfig.bride.name} ❤ ${weddingConfig.groom.name}`}
      </h3>

      <p className={`mt-2 text-sm text-cream/80 ${font}`}>
        {t.footer.thankYou}
      </p>

      <div className="mx-auto my-5 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <p
        className={`flex items-center justify-center gap-1.5 text-xs text-cream/70 ${font}`}
      >
        {t.footer.madeWith}{" "}
        <Heart size={13} className="text-gold" fill="currentColor" />
      </p>
      <p className={`mt-1 text-xs text-cream/60 ${font}`}>{t.footer.rights}</p>
      <p className="mt-3 text-[11px] uppercase tracking-widest text-gold/60">
        {weddingConfig.hashtag}
      </p>
    </footer>
  );
}
