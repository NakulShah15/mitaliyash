import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Send,
  Users,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { headingFont } from "../utils/fonts";
import SectionHeading from "./SectionHeading";

const initialForm = {
  name: "",
  mobile: "",
  guests: "",
  attending: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name || form.name.trim().length < 2) errors.name = true;
  if (!/^[0-9]{10}$/.test(form.mobile.trim())) errors.mobile = true;
  if (!form.guests || Number(form.guests) < 1) errors.guests = true;
  if (form.attending !== "yes" && form.attending !== "no")
    errors.attending = true;
  return errors;
}

export default function RSVP() {
  const { t, language } = useLanguage();
  const font = headingFont(language);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleAttendingSelect = (val) => {
    setForm((prev) => ({ ...prev, attending: val }));
    setErrors((prev) => ({ ...prev, attending: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // NOTE: Backend integration is optional. This is where you would send
    // the RSVP to your API, Google Sheet, or email service, e.g.:
    //   await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(form) });
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="rsvp" className="section-container relative bg-cream">
      <div className="relative z-10 mx-auto max-w-xl px-4">
        <SectionHeading title={t.rsvp.heading} subtitle={t.rsvp.subheading} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border-2 border-gold bg-ivory px-6 py-8 shadow-xl shadow-maroon/15 sm:px-10 sm:py-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-3 py-6 text-center"
              >
                <CheckCircle2 className="text-gold" size={48} />
                <h3 className={`gold-text text-2xl font-bold ${font}`}>
                  {t.rsvp.successTitle}
                </h3>
                <p className={`max-w-sm text-sm text-maroon-dark/90 ${font}`}>
                  {t.rsvp.successMessage}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className={`mt-4 rounded-full border border-gold px-5 py-2 text-sm font-semibold text-maroon hover:bg-gold/10 ${font}`}
                >
                  {t.rsvp.sendAnother}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <div>
                  <label
                    className={`mb-1.5 flex items-center gap-2 text-sm font-semibold text-maroon-dark ${font}`}
                  >
                    <User size={16} className="text-gold-dark" />
                    {t.rsvp.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder={t.rsvp.namePlaceholder}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-maroon-dark outline-none transition-colors ${font} ${
                      errors.name
                        ? "border-royal"
                        : "border-gold/50 focus:border-gold"
                    }`}
                  />
                  {errors.name && (
                    <p className={`mt-1 text-xs text-royal ${font}`}>
                      {t.rsvp.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`mb-1.5 flex items-center gap-2 text-sm font-semibold text-maroon-dark ${font}`}
                  >
                    <Phone size={16} className="text-gold-dark" />
                    {t.rsvp.mobileLabel}
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={handleChange("mobile")}
                    placeholder={t.rsvp.mobilePlaceholder}
                    inputMode="numeric"
                    maxLength={10}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-maroon-dark outline-none transition-colors ${font} ${
                      errors.mobile
                        ? "border-royal"
                        : "border-gold/50 focus:border-gold"
                    }`}
                  />
                  {errors.mobile && (
                    <p className={`mt-1 text-xs text-royal ${font}`}>
                      {t.rsvp.errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`mb-1.5 flex items-center gap-2 text-sm font-semibold text-maroon-dark ${font}`}
                  >
                    <Users size={16} className="text-gold-dark" />
                    {t.rsvp.guestsLabel}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={handleChange("guests")}
                    placeholder={t.rsvp.guestsPlaceholder}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-maroon-dark outline-none transition-colors ${font} ${
                      errors.guests
                        ? "border-royal"
                        : "border-gold/50 focus:border-gold"
                    }`}
                  />
                  {errors.guests && (
                    <p className={`mt-1 text-xs text-royal ${font}`}>
                      {t.rsvp.errors.guests}
                    </p>
                  )}
                </div>

                <div>
                  <p
                    className={`mb-1.5 text-sm font-semibold text-maroon-dark ${font}`}
                  >
                    {t.rsvp.attendingLabel}
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleAttendingSelect("yes")}
                      className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${font} ${
                        form.attending === "yes"
                          ? "border-gold bg-maroon text-gold"
                          : "border-gold/50 text-maroon-dark hover:border-gold"
                      }`}
                    >
                      {t.rsvp.attendingYes}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAttendingSelect("no")}
                      className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${font} ${
                        form.attending === "no"
                          ? "border-gold bg-maroon text-gold"
                          : "border-gold/50 text-maroon-dark hover:border-gold"
                      }`}
                    >
                      {t.rsvp.attendingNo}
                    </button>
                  </div>
                  {errors.attending && (
                    <p className={`mt-1 text-xs text-royal ${font}`}>
                      {t.rsvp.errors.attending}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`mb-1.5 flex items-center gap-2 text-sm font-semibold text-maroon-dark ${font}`}
                  >
                    <MessageSquare size={16} className="text-gold-dark" />
                    {t.rsvp.messageLabel}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder={t.rsvp.messagePlaceholder}
                    rows={3}
                    className={`w-full resize-none rounded-lg border border-gold/50 px-4 py-2.5 text-sm text-maroon-dark outline-none transition-colors focus:border-gold ${font}`}
                  />
                </div>

                <button
                  type="submit"
                  className={`mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-gold shadow-lg shadow-maroon/40 transition-transform hover:scale-[1.02] hover:bg-maroon-light active:scale-95 ${font}`}
                >
                  <Send size={17} />
                  {t.rsvp.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
