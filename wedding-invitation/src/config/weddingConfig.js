// ============================================================================
// CENTRAL WEDDING CONFIGURATION
// ----------------------------------------------------------------------------
// Edit every wedding-specific detail (names, date, venue, photos, music) in
// THIS file only. No component needs to be touched to update the website.
// ============================================================================

const GOOGLE_MAPS_DESTINATION = "Kotecha Party Plot, Una, Gujarat, India";

export const weddingConfig = {
  // ---- Couple -------------------------------------------------------------
  groom: {
    name: "Yash",
    nameGu: "યશ",
    family: "Gadhiya Family",
    familyGu: "ગઢિયા પરિવાર",
    father: "Krushnakant Gadhiya",
    fatherGu: "કૃષ્ણકાંત ગઢિયા",
    mother: "Dipika Gadhiya",
    motherGu: "દિપિકા ગઢિયા",
    sister: "Hetvi Gadhiya",
    sisterGu: "હેત્વી ગઢિયા",
  },
  bride: {
    name: "Mitali",
    nameGu: "મિતાલી",
    family: "Shah Family",
    familyGu: "શાહ પરિવાર",
    father: "Chandresh Shah",
    fatherGu: "ચંદ્રેશ શાહ",
    mother: "Deepa Shah",
    motherGu: "દીપા શાહ",
    brother: "Nakul Shah",
    brotherGu: "નકુલ શાહ",
  },

  // ---- Wedding date ---------------------------------------------------------
  // ISO string with IST offset — edit this single line to change the date
  // used by the live countdown everywhere on the site.
  weddingDateISO: "2027-01-28T10:30:00+05:30",
  weddingDateDisplayEn: "28th January 2027",
  weddingDateDisplayGu: "૨૮ જાન્યુઆરી ૨૦૨૭",

  // ---- Venue ----------------------------------------------------------------
  venue: {
    name: "Kotecha Party Plot",
    nameGu: "કોટેચા પાર્ટી પ્લોટ",
    city: "Una",
    cityGu: "ઉના",
    state: "Gujarat",
    stateGu: "ગુજરાત",
    country: "India",
    countryGu: "ભારત",
    addressEn: "Kotecha Party Plot, Una, Gujarat, India",
    addressGu: "કોટેચા પાર્ટી પ્લોટ, ઉના, ગુજરાત, ભારત",
    googleMapsDestination: GOOGLE_MAPS_DESTINATION,
    googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
      GOOGLE_MAPS_DESTINATION,
    )}&output=embed`,
    googleMapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      GOOGLE_MAPS_DESTINATION,
    )}`,
  },

  // ---- Images (all paths are placeholders — swap the files in
  // public/assets/images and these paths keep working as-is) ----------------
  images: {
    groomPhoto: "/assets/images/yash-photo.png",
    bridePhoto: "/assets/images/mitali-photo.png",
    couplePhoto: "/assets/images/mitali-yash-couple.png",
    ganeshaMotif: "/assets/images/ganesha-motif.svg",
    favicon: "/assets/images/favicon.svg",
    gallery: {
      yash: [
        "/assets/images/gallery/yash-1.svg",
        "/assets/images/gallery/yash-2.svg",
        "/assets/images/gallery/yash-3.svg",
      ],
      mitali: [
        "/assets/images/gallery/mitali-1.svg",
        "/assets/images/gallery/mitali-2.svg",
        "/assets/images/gallery/mitali-3.svg",
      ],
      couple: [
        "/assets/images/gallery/couple-1.svg",
        "/assets/images/gallery/couple-2.svg",
        "/assets/images/gallery/couple-3.svg",
      ],
      family: [
        "/assets/images/gallery/family-1.svg",
        "/assets/images/gallery/family-2.svg",
      ],
      preWedding: [
        "/assets/images/gallery/pre-wedding-1.png",
        "/assets/images/gallery/pre-wedding-2.png",
        "/assets/images/gallery/pre-wedding-3.jpg",
      ],
    },
  },

  // ---- Background music ------------------------------------------------
  // Replace the source path and titles here when changing the background track.
  music: {
    src: "/assets/music/wedding-track.mp3",
    titleEn: "Wedding Music",
    titleGu: "લગ્ન સંગીત",
  },

  // ---- Social / contact (optional, shown in footer) ------------------------
  hashtag: "#YamiForever",
};

export default weddingConfig;
