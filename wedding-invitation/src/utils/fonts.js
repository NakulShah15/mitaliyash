// Small helper that picks the correct heading font class based on the
// currently active language. Gujarati script must always use Noto Sans
// Gujarati (Playfair Display has no Gujarati glyphs); English headings use
// the elegant Playfair Display serif as requested in the design brief.
export function headingFont(language) {
  return language === "en" ? "font-serif" : "font-gujarati";
}

export function bodyFont(language) {
  return language === "en" ? "font-serif" : "font-gujarati";
}
