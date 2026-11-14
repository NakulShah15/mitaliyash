import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Flower2,
  Palette,
  Droplets,
  Music4,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { weddingEvents } from "../config/weddingEvents";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";
import Mandala from "./decorative/Mandala";

const ICONS = {
  ganesh: Flower2,
  mehendi: Palette,
  haldi: Droplets,
  sangeet: Music4,
  wedding: HeartHandshake,
  reception: PartyPopper,
};

function EventCard({ event, index, className = "" }) {
  const { t, language } = useLanguage();
  const Icon = ICONS[event.icon] ?? Calendar;
  const font = headingFont(language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className={`relative flex-1 rounded-2xl border border-gold/50 bg-ivory px-5 py-6 shadow-lg shadow-maroon/10 sm:px-6 ${className}`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-gold shadow-md">
          <Icon size={20} />
        </span>
        <h3 className={`gold-text text-lg font-bold sm:text-xl ${font}`}>
          {language === "gu" ? event.nameGu : event.nameEn}
        </h3>
      </div>

      <p className={`mb-4 text-sm leading-relaxed text-maroon-dark/90 ${font}`}>
        {language === "gu" ? event.descriptionGu : event.descriptionEn}
      </p>

      <div className={`space-y-1.5 text-sm text-maroon-light ${font}`}>
        <p className="flex items-center gap-2">
          <Calendar size={15} className="shrink-0 text-gold-dark" />
          <span className="font-medium">{t.events.date}:</span>
          <span>{language === "gu" ? event.dateGu : event.date}</span>
        </p>
        <p className="flex items-center gap-2">
          <Clock size={15} className="shrink-0 text-gold-dark" />
          <span className="font-medium">{t.events.time}:</span>
          <span>{event.time}</span>
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={15} className="shrink-0 text-gold-dark" />
          <span className="font-medium">{t.events.venue}:</span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-gold/60 underline-offset-2 transition-colors hover:text-maroon hover:decoration-gold focus-visible:rounded-sm"
          >
            {language === "gu" ? event.venueGu : event.venue}
          </a>
        </p>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const { t } = useLanguage();

  return (
    <section id="events" className="section-container relative bg-cream">
      <Mandala className="pointer-events-none absolute -top-10 right-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />
      <Mandala className="pointer-events-none absolute -bottom-10 left-0 h-56 w-56 text-maroon/10 sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionHeading
          title={t.events.heading}
          subtitle={t.events.subheading}
        />

        {/* Mobile: vertical timeline */}
        <div className="relative space-y-8 md:hidden">
          <span
            className="absolute left-[21px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/60 to-transparent"
            aria-hidden="true"
          />
          {weddingEvents.map((event, index) => (
            <div key={event.id} className="relative pl-12">
              <span className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-maroon-dark" />
              <EventCard event={event} index={index} />
            </div>
          ))}
        </div>

        {/* Desktop / tablet: grid layout */}
        <div className="hidden gap-6 md:grid md:grid-cols-6">
          {weddingEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              className={`md:col-span-3 lg:col-span-2 ${
                index === weddingEvents.length - 2 ? "lg:col-start-2" : ""
              } ${
                index === weddingEvents.length - 1
                  ? "md:col-start-2 lg:col-start-4"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
