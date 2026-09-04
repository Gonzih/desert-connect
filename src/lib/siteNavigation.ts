/** Home page section element ids (without #). */
export const HOME_SECTIONS = {
  home: "home",
  global: "global",
  membership: "membership",
  projects: "projects",
  donate: "donate",
  resources: "resources",
  privacy: "privacy",
  events: "events",
} as const;

export type HomeSectionId = (typeof HOME_SECTIONS)[keyof typeof HOME_SECTIONS];

export const JOIN_FORM_URL = "https://forms.gle/NgvHEqj1LFFQ9NJ7A";
export const NEWSLETTER_EMAIL = "hello@isocnv.org";
export const ABOUT_US_VIDEO_URL = "/isoc-nevada-about.mp4";
export const ABOUT_US_HASH = "about-us";

export type SiteLinkTarget =
  | { type: "section"; section: HomeSectionId }
  | { type: "route"; path: "/projects" | "/calendar" }
  | { type: "project"; slug: string }
  | { type: "aboutVideo" }
  | { type: "external"; href: string; newTab?: boolean }
  | { type: "inactive"; reason: string };

export type SiteNavItem = {
  label: string;
  target: SiteLinkTarget;
};

/** Header primary navigation */
export const headerNav: SiteNavItem[] = [
  { label: "Home", target: { type: "section", section: "home" } },
  { label: "Global Roots", target: { type: "section", section: "global" } },
  { label: "Membership", target: { type: "section", section: "membership" } },
  { label: "Projects", target: { type: "route", path: "/projects" } },
  { label: "Resources", target: { type: "section", section: "resources" } },
  { label: "Donate", target: { type: "section", section: "donate" } },
];

/** Footer → Chapter links (per site spec) */
export const footerChapterLinks: SiteNavItem[] = [
  { label: "About Us", target: { type: "aboutVideo" } },
  { label: "Membership", target: { type: "external", href: JOIN_FORM_URL, newTab: true } },
  { label: "Workgroups", target: { type: "route", path: "/projects" } },
  { label: "Bylaws & Minutes", target: { type: "inactive", reason: "Bylaws and minutes coming soon" } },
  { label: "Donate", target: { type: "section", section: "donate" } },
];

export const externalLinks = [
  { label: "Join chapter form", url: JOIN_FORM_URL },
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

export const sectionHash = (section: HomeSectionId) => `#${section}`;

export const projectPath = (slug: string) => `/projects/${slug}`;
