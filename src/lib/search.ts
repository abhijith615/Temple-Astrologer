// Lightweight static search index for the whole site.
// Each entry points to a page (and optional in-page anchor).

export type SearchEntry = {
  title: string;
  section: string;
  href: string;
  keywords: string;
};

export const searchIndex: SearchEntry[] = [
  // Home
  { title: "Home", section: "Celestial Insight. Timeless Guidance.", href: "/", keywords: "home vedic astrology jyotish introduction purpose science cosmos thangabharathi" },
  { title: "About Vedic Astrology", section: "Home", href: "/", keywords: "jyotish science of light parashara varahamihira upanishads vedas" },
  { title: "Purpose of Astrology", section: "Home", href: "/", keywords: "muhurtha auspicious timing navigation guidance" },

  // About
  { title: "About Us", section: "Our Journey in the Stars", href: "/about", keywords: "founded 2010 tirupur tamil nadu consultation training centre who we are" },
  { title: "Our Specialities", section: "About Us", href: "/about", keywords: "marriage matching conception fertility divorce separation love marriage delayed marriage" },
  { title: "Astrology Education", section: "About Us", href: "/about", keywords: "astrology classes courses training learning" },
  { title: "What We Can Guide You On", section: "About Us", href: "/about", keywords: "education career business marriage finance foreign settlement property health litigation muhurtha" },

  // Solutions
  { title: "Marriage Matching", section: "Solutions", href: "/solutions#marriage-matching", keywords: "kundali milan jathaka porutham horoscope compatibility bride groom union" },
  { title: "Conception & Fertility Guidance", section: "Solutions", href: "/solutions#conception-fertility", keywords: "childbirth parenthood fertility conception doshas remedies" },
  { title: "Divorce & Separation Counsel", section: "Solutions", href: "/solutions#divorce-separation", keywords: "marital discord reconciliation separation conflict marriage problems" },
  { title: "Love Marriage Support", section: "Solutions", href: "/solutions#love-marriage", keywords: "love marriage family opposition caste community acceptance" },
  { title: "Delayed Marriage Solutions", section: "Solutions", href: "/solutions#delayed-marriage", keywords: "delayed marriage late marriage proposal failure venus seventh house remedies" },

  // Temple
  { title: "Temple History", section: "Arulmigu Sri Naga Kanniamman Temple", href: "/temple-history", keywords: "pongalur tiruppur naga kanniamman rama lakshmana parihara naga dosha temple" },
  { title: "Temple Significance", section: "Temple History", href: "/temple-history", keywords: "parihara sthalam naga dosha vinayagar karuppasamy blessings" },
  { title: "Sri Naga Devathai Amman", section: "Temple History", href: "/temple-history", keywords: "naga devathai serpent goddess sarpa dosha putru anthill fertility" },

  // Booking
  { title: "Book a Consultation", section: "Booking", href: "/book-consultation", keywords: "book appointment consultation birth details payment fees hours contact" },
];

export function searchSite(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((entry) => {
      const haystack = `${entry.title} ${entry.section} ${entry.keywords}`.toLowerCase();
      let score = 0;
      for (const t of terms) {
        if (entry.title.toLowerCase().includes(t)) score += 3;
        else if (haystack.includes(t)) score += 1;
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 7)
    .map((r) => r.entry);
}
