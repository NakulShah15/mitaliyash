import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";

export default function Venue() {
  const { t, language } = useLanguage();
  const font = headingFont(language);
  const { venue } = weddingConfig;

  return (
    <section id="venue" className="section-container relative bg-ivory">
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <SectionHeading title={t.venue.heading} subtitle={t.venue.subheading} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border-2 border-gold bg-cream shadow-xl shadow-maroon/15"
        >
          <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 px-6 py-10 text-center sm:px-10 sm:py-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-gold shadow-md">
              <MapPin size={26} />
            </span>
            <h3
              className={`gold-text w-full max-w-[16rem] break-words px-2 text-xl font-bold leading-snug sm:max-w-full sm:text-2xl ${font}`}
            >
              {language === "gu" ? venue.nameGu : venue.name}
            </h3>
            <p
              className={`max-w-md break-words text-sm text-maroon-dark/90 sm:text-base ${font}`}
            >
              <span className="font-semibold">{t.venue.addressLabel}: </span>
              {language === "gu" ? venue.addressGu : venue.addressEn}
            </p>

            <a
              href={venue.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-gold shadow-lg shadow-maroon/40 transition-transform hover:scale-105 hover:bg-maroon-light active:scale-95 sm:text-base ${font}`}
            >
              <Navigation size={18} />
              {t.venue.getDirections}
            </a>
          </div>

          <div className="relative aspect-video w-full border-t border-gold/40">
            <iframe
              title={t.venue.mapLabel}
              src={venue.googleMapsEmbedUrl}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
