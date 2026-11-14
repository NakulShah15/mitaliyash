# Yash & Mitali — Wedding Invitation Website

A premium, bilingual (Gujarati / English), mobile-first digital wedding invitation
built with React, Vite, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

> **Note on this build:** the sandbox used to generate this project has no
> outbound access to the npm registry, so `npm install` could not be run or
> verified here. The full dependency list is declared in `package.json`;
> run `npm install` on a machine with normal internet access before
> starting the dev server.

## Editing wedding details

Everything specific to the wedding lives in two files — update these and
every section of the site updates automatically, no component edits needed:

- `src/config/weddingConfig.js` — names, families, wedding date, venue,
  Google Maps destination, image paths, background music path.
- `src/config/weddingEvents.js` — the list of events (Ganesh Sthapana,
  Mehendi, Haldi, Sangeet, Wedding Ceremony, Reception, or your own). Add,
  remove or reorder entries freely.

Translations live in `src/translations/english.js` and
`src/translations/gujarati.js`, with matching keys in both files.

## Replacing placeholder assets

- **Photos** — `public/assets/images/*.svg` and
  `public/assets/images/gallery/*.svg` are generated placeholder frames.
  Drop in real photos with the same filenames (or update the paths in
  `weddingConfig.js`) to replace them — JPG/PNG/WebP all work.
- **Background music** — `public/assets/music/wedding-music.wav` is a
  **silent placeholder file**, generated locally because this build
  environment had no internet access to source a licensed track. Replace
  it with a royalty-free Shehnai / flute / Indian wedding instrumental
  track (e.g. from Pixabay Music, YouTube Audio Library, or a licensed
  source) and update `music.src` in `weddingConfig.js` if you change the
  filename or extension.

## Project structure

```
src/
  components/        Hero, Navigation, Countdown, CoupleSection, Invitation,
                      Events, Venue, Gallery, Family, RSVP, Footer,
                      MusicPlayer, SectionHeading
  components/decorative/  Petals, Sparkles, Mandala, GaneshaMotif,
                           OrnateArch, OrnateDivider, BackToTop
  config/             weddingConfig.js, weddingEvents.js
  translations/       english.js, gujarati.js
  context/            LanguageContext.jsx, MusicContext.jsx
  hooks/              useCountdown.js, useActiveSection.js
```

## Notes on key behaviors

- **Language default** is Gujarati; the switcher in the nav toggles
  instantly (no reload) via React context.
- **Countdown** recalculates every second from `weddingDateISO` and shows a
  celebration message instead of negative numbers once the date has passed.
- **Background music** is a single `<audio>` element mounted once in
  `MusicProvider`, so it is never remounted by language switches or
  scrolling, loops automatically, and only starts after the first user tap
  / click / keypress (to satisfy mobile autoplay policies).
- **Navigation** uses `IntersectionObserver` to highlight the active
  section and smooth-scrolls with a sticky-header offset.
