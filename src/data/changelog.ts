export type ChangelogLinkedFile = {
  path: string;
  label: string;
};

export type ChangelogEntry = {
  id: string;
  prNumber: number;
  title: string;
  date: string;
  status: "merged" | "open";
  summary: string;
  changes: string[];
  linkedFiles?: ChangelogLinkedFile[];
};

/** Running record of site updates, written for chapter volunteers (not developers).
 *  Update this file for every user-facing change — CI enforces it on pull requests. */
export const changelogEntries: ChangelogEntry[] = [
  {
    id: "pr-16",
    prNumber: 16,
    title: "CI now requires updating the Changes log",
    date: "2025-09-04",
    status: "merged",
    summary:
      "Pull requests that change the public site must now include an update to the /changes log. CI will fail with a clear message if someone forgets.",
    changes: [
      "New CI workflow runs tests and checks for changelog updates on every pull request",
      "Site changes without an entry in src/data/changelog.ts are blocked",
      "Added npm run check:changelog for local use before opening a PR",
    ],
    linkedFiles: [
      { path: "src/data/changelog.ts", label: "Changelog data" },
      { path: "src/test/changelog.test.ts", label: "Changelog tests" },
    ],
  },
  {
    id: "pr-15",
    prNumber: 15,
    title: "Fixed unreadable text on the Changes page",
    date: "2025-09-04",
    status: "merged",
    summary:
      "The title and description at the top of the Changes page were nearly invisible because dark text was placed on a dark background. Text is now light and easy to read.",
    changes: [
      "Site Changes heading and description are now legible on the dark banner",
      "Same readability fix applied to the Calendar page header",
    ],
    linkedFiles: [
      { path: "src/pages/ChangesPage.tsx", label: "Changes page" },
      { path: "src/pages/CalendarPage.tsx", label: "Calendar page" },
    ],
  },
  {
    id: "pr-14",
    prNumber: 14,
    title: "Added hidden Changes log and email guide",
    date: "2025-09-04",
    status: "merged",
    summary:
      "Created a volunteer-friendly log of site updates at /changes (not linked from the public menu). Also added written instructions for how email works today and how to restore chapter addresses later.",
    changes: [
      "New /changes page summarizes recent updates in plain language",
      "Related docs and code files can be previewed in a popup",
      "Email routing and restoration steps documented in docs/EMAIL_ROUTING.md",
    ],
    linkedFiles: [
      { path: "docs/EMAIL_ROUTING.md", label: "Email routing guide" },
      { path: "src/data/changelog.ts", label: "Changelog data" },
      { path: "src/pages/ChangesPage.tsx", label: "Changes page" },
    ],
  },
  {
    id: "pr-13",
    prNumber: 13,
    title: "Email links now go to the chapter Gmail inbox",
    date: "2025-09-04",
    status: "merged",
    summary:
      "Because isocnv.org email is not set up yet, every contact link on the site now opens a message to isocnevada@gmail.com. The subject line notes which chapter address the message was meant for, so volunteers can sort mail easily.",
    changes: [
      "All email buttons and links route to isocnevada@gmail.com for now",
      "Subject lines include the intended @isocnv.org address in brackets",
      "Original chapter addresses are saved in the code for when domain email is restored",
      "Added written instructions for restoring domain email when MX records are ready",
    ],
    linkedFiles: [
      { path: "docs/EMAIL_ROUTING.md", label: "Email routing guide" },
      { path: "src/lib/siteEmails.ts", label: "Email configuration" },
    ],
  },
  {
    id: "pr-12",
    prNumber: 12,
    title: "Footer “About Us” opens the chapter video",
    date: "2025-09-04",
    status: "merged",
    summary:
      "The About Us link in the footer now plays the same welcome video as the About Us button in the main page body, instead of jumping to a different section.",
    changes: [
      "Footer About Us opens the chapter video dialog",
      "Matches the experience of the About Us button on the home page",
    ],
    linkedFiles: [
      { path: "src/components/site/AboutUsVideoDialog.tsx", label: "About Us video dialog" },
      { path: "src/lib/siteNavigation.ts", label: "Footer link settings" },
    ],
  },
  {
    id: "pr-10",
    prNumber: 10,
    title: "Events panel refreshed",
    date: "2025-09-04",
    status: "merged",
    summary:
      "Cleaned up the upcoming events section: removed outdated items, updated course and summit listings, and kept the panel focused on what is actually coming up.",
    changes: [
      "Removed the chartering celebration image",
      "Removed a past meetup that was still listed",
      "Updated MetaWeb Course and Desirable Properties Revealed entries",
    ],
    linkedFiles: [{ path: "src/data/events.ts", label: "Events list" }],
  },
  {
    id: "pr-9",
    prNumber: 9,
    title: "Sign in button turned off for now",
    date: "2025-09-04",
    status: "merged",
    summary:
      "The Sign in button in the site header is inactive until member login is ready. It still appears but does not lead anywhere, so visitors are not sent to a broken page.",
    changes: [
      "Header Sign in button is visually present but not clickable",
      "Avoids confusion while login is not yet available",
    ],
    linkedFiles: [{ path: "src/components/site/Header.tsx", label: "Site header" }],
  },
  {
    id: "pr-8",
    prNumber: 8,
    title: "Workgroup pages use normal web addresses",
    date: "2025-09-04",
    status: "merged",
    summary:
      "Workgroup detail pages now have regular URLs like /projects/broadband instead of long hash links. Bookmarking and sharing a workgroup page works the way people expect.",
    changes: [
      "Workgroup pages live at /projects and /projects/[name]",
      "Direct links to workgroup pages work when shared or bookmarked",
      "GitHub Pages deep links recover correctly after a refresh",
    ],
    linkedFiles: [
      { path: "src/data/projects.ts", label: "Workgroup data" },
      { path: "src/lib/siteNavigation.ts", label: "Navigation settings" },
    ],
  },
  {
    id: "pr-7",
    prNumber: 7,
    title: "Site navigation and links overhauled",
    date: "2025-09-04",
    status: "merged",
    summary:
      "A broad cleanup of how the site handles links, scrolling, and page changes. Footer links now go to the right places, broken links were fixed or marked inactive, and the site is easier to maintain going forward.",
    changes: [
      "Footer chapter links corrected (About, Membership, Workgroups, Donate, and more)",
      "In-page section links scroll smoothly without getting stuck",
      "Broken external links fixed or marked inactive",
      "Removed unused third-party build tooling",
      "Site deployment now uses standard npm commands",
      "Added automated checks to catch broken links in the future",
    ],
    linkedFiles: [
      { path: "src/lib/siteNavigation.ts", label: "Navigation settings" },
      { path: "src/components/SiteLink.tsx", label: "Shared link component" },
      { path: "src/test/link-audit.test.ts", label: "Link checker tests" },
    ],
  },
];
