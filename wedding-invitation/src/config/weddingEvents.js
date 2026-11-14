// ============================================================================
// WEDDING EVENTS CONFIGURATION
// ----------------------------------------------------------------------------
// Add, remove or edit events freely — the Events section renders this array
// automatically, so no component code needs to change.
//
// Each event supports:
//   id            unique key
//   nameEn / nameGu       event title in both languages
//   date                  human readable date string shown on the card
//   time                  human readable time string shown on the card
//   venue / venueGu       event location in both languages
//   descriptionEn/Gu      short description in both languages
//   icon                  one of the keys handled in Events.jsx's icon map
//                         ('ganesh' | 'mehendi' | 'haldi' | 'sangeet' |
//                          'wedding' | 'reception') — add new mappings in
//                          Events.jsx if you introduce a new icon key.
// ============================================================================

export const weddingEvents = [
  {
    id: "lagan-lekhan",
    nameEn: "Lagan Lekhan",
    nameGu: "લગ્ન લેખન",
    date: "26 January 2027",
    dateGu: "૨૬ જાન્યુઆરી ૨૦૨૭",
    time: "11:00 AM",
    venue: "Madhav Baug, Una",
    venueGu: "માધવ બાગ, ઉના",
    descriptionEn:
      "Join us for the Lagan Lekhan ceremony as the wedding celebrations begin.",
    descriptionGu:
      "લગ્નના ઉત્સવના પ્રારંભે લગ્ન લેખન વિધિમાં અમારી સાથે જોડાઓ.",
    icon: "ganesh",
  },
  {
    id: "musical-night",
    nameEn: "Musical Night",
    nameGu: "સંગીત સંધ્યા",
    date: "26 January 2027",
    dateGu: "૨૬ જાન્યુઆરી ૨૦૨૭",
    time: "6:30 PM",
    venue: "Hotel Harbhole, Una",
    venueGu: "હોટેલ હરભોલે, ઉના",
    descriptionEn:
      "Celebrate the upcoming wedding with an evening of music and festivities.",
    descriptionGu: "સંગીત અને ઉત્સવની સાંજ સાથે લગ્નની ખુશીઓ ઉજવીએ.",
    icon: "sangeet",
  },
  {
    id: "mandap-murat",
    nameEn: "Mandap Muhurat",
    nameGu: "મંડપ મુહૂર્ત",
    date: "27 January 2027",
    dateGu: "૨૭ જાન્યુઆરી ૨૦૨૭",
    time: "10:00 AM",
    venue: "Madhav Baug, Una",
    venueGu: "માધવ બાગ, ઉના",
    descriptionEn:
      "Join us for the auspicious Mandap Muhurat ceremony and bless the couple.",
    descriptionGu: "મંગલ મંડપ મુહૂર્ત વિધિમાં જોડાઈ વર-કન્યાને આશીર્વાદ આપો.",
    icon: "ganesh",
  },
  {
    id: "haldi",
    nameEn: "Haldi Ceremony",
    nameGu: "હલ્દી સમારોહ",
    date: "27 January 2027",
    dateGu: "૨૭ જાન્યુઆરી ૨૦૨૭",
    time: "8:00 PM",
    venue: "Madhav Baug, Una",
    venueGu: "માધવ બાગ, ઉના",
    descriptionEn:
      "A joyful Haldi ceremony filled with blessings for the couple.",
    descriptionGu: "વર-કન્યા માટે આશીર્વાદ સાથે હલ્દીની આનંદમય વિધિ.",
    icon: "haldi",
  },
  {
    id: "wedding-ceremony",
    nameEn: "Wedding Ceremony",
    nameGu: "લગ્ન વિધિ",
    date: "28 January 2027",
    dateGu: "૨૮ જાન્યુઆરી ૨૦૨૭",
    time: "12:00 PM",
    venue: "Kotecha Party Plot, Una",
    venueGu: "કોટેચા પાર્ટી પ્લોટ, ઉના",
    descriptionEn:
      "The sacred wedding rituals uniting Mitali & Yash in holy matrimony, with the blessings of elders.",
    descriptionGu:
      "વડીલોના આશીર્વાદ સાથે મિતાલી અને યશને પવિત્ર લગ્નગ્રંથિથી જોડતી મંગલ વિધિ.",
    icon: "wedding",
  },
];

export default weddingEvents;
