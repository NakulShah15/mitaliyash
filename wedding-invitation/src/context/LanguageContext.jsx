import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { english } from "../translations/english";
import { gujarati } from "../translations/gujarati";

const LanguageContext = createContext(undefined);

// Default language is Gujarati, as required by the design brief.
const DEFAULT_LANGUAGE = "gu";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  const t = language === "en" ? english : gujarati;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.setAttribute("data-lang", language);
    document.title = t.meta.title;
  }, [language, t]);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "gu" ? "en" : "gu"));

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t,
      isGujarati: language === "gu",
    }),
    [language, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export default LanguageContext;
