import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { weddingConfig } from "../config/weddingConfig";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";

const TABS = ["preWedding"];

export default function Gallery() {
  const { t, language } = useLanguage();
  const font = headingFont(language);
  const [activeTab, setActiveTab] = useState("preWedding");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const photos = useMemo(
    () => weddingConfig.images.gallery[activeTab] ?? [],
    [activeTab],
  );

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = (e) => {
    e?.stopPropagation();
    setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  };
  const showNext = (e) => {
    e?.stopPropagation();
    setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="gallery" className="section-container relative bg-ivory">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionHeading
          title={t.gallery.heading}
          subtitle={t.gallery.subheading}
        />

        {/* Tabs */}
        <div className="mb-6 flex justify-center gap-2 px-1 sm:mb-8 sm:gap-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${font} ${
                activeTab === tab
                  ? "border-gold bg-maroon text-gold shadow-md"
                  : "border-gold/40 bg-ivory text-maroon-light hover:border-gold"
              }`}
            >
              {t.gallery.tabs[tab]}
            </button>
          ))}
        </div>

        {/* Grid */}
        {photos.length === 0 ? (
          <div
            className={`flex flex-col items-center gap-2 py-12 text-maroon-light/70 ${font}`}
          >
            <ImageOff size={32} />
            <p>{t.gallery.empty}</p>
          </div>
        ) : (
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {photos.map((src, index) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                className={`group relative aspect-square overflow-hidden rounded-xl border border-gold/40 shadow-md ${
                  index === photos.length - 1
                    ? "col-span-2 w-1/2 justify-self-center sm:col-span-1 sm:w-full"
                    : ""
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? "object-top" : "object-center"
                  }`}
                />
                <span className="absolute inset-0 bg-maroon/0 transition-colors duration-300 group-hover:bg-maroon/20" />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && photos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
            onClick={closeLightbox}
          >
            <motion.img
              key={photos[lightboxIndex]}
              src={photos[lightboxIndex]}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={closeLightbox}
              aria-label={t.gallery.close}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-maroon hover:bg-ivory"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              onClick={showPrev}
              aria-label={t.gallery.previous}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-maroon hover:bg-ivory sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={t.gallery.next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-maroon hover:bg-ivory sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
