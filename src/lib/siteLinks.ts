/**
 * Inventory of external URLs used by the public site.
 * Run with VERIFY_LINKS=1 to HTTP-check each URL (requires network).
 */
export const externalLinks = [
  { label: "Join chapter form", url: "https://forms.gle/NgvHEqj1LFFQ9NJ7A" },
  { label: "MetaWeb course", url: "https://course.metawebbook.com/" },
  { label: "Chapter charter Luma", url: "https://luma.com/pjyx1zpy" },
  { label: "Meetup Luma", url: "https://luma.com/e0ef4i1b" },
  { label: "Summit Luma", url: "https://luma.com/wfi1z9lv" },
  { label: "Monthly meeting Luma", url: "https://luma.com/29s8aw5d" },
  { label: "Hawai'i Public Radio events", url: "https://www.hawaiipublicradio.org/events" },
  { label: "Zeffy donate", url: "https://www.zeffy.com/en-US/donation-form/chapter-formation-donation" },
  { label: "Zeffy ticketing", url: "https://www.zeffy.com/en-US/ticketing/the-metaweb-book-nft-course" },
  { label: "ISOC mission", url: "https://www.internetsociety.org/mission/" },
  { label: "ISOC become a member", url: "https://www.internetsociety.org/become-a-member/" },
  { label: "Digital equity plan PDF", url: "https://broadbandexpanded.com/files/iija_plans/NV%20-%20Digital%20Equity%20Plan%20-%20Draft.pdf" },
  { label: "BEAD final proposal PDF", url: "https://prod.osit.nv.gov/siteassets/nevada-draft-bead-final-proposal---public-comment_final.pdf" },
  { label: "NELIS 83rd bills", url: "https://www.leg.state.nv.us/App/NELIS/REL/83rd2025/Bills/HomeBills" },
] as const;

export const internalMediaLinks = [
  { label: "About us video", url: "/isoc-nevada-about.mp4" },
] as const;

export const homeSectionAnchors = [
  "#home",
  "#global",
  "#membership",
  "#projects",
  "#donate",
  "#resources",
  "#privacy",
  "#events",
] as const;
