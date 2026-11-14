import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { headingFont } from "../utils/fonts";
import OrnateDivider from "./decorative/OrnateDivider";

// Shared bilingual section heading: title + optional subtitle + ornamental
// divider, with a gentle fade/rise entrance animation on scroll.
export default function SectionHeading({
  title,
  subtitle,
  light = false,
  compactTitle = false,
}) {
  const { language } = useLanguage();

  return (
    <motion.div
      className="mb-10 text-center sm:mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2
        className={`${headingFont(language)} ${
          compactTitle
            ? "whitespace-nowrap text-xl sm:text-4xl md:text-5xl"
            : "text-3xl sm:text-4xl md:text-5xl"
        } font-bold ${
          light ? "text-ivory" : "text-maroon"
        }`}
      >
        <span className="gold-text">{title}</span>
      </h2>
      <OrnateDivider className="mt-4" />
      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base ${headingFont(language)} ${
            light ? "text-cream/90" : "text-maroon-light/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
