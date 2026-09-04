import emailRoutingDoc from "../../docs/EMAIL_ROUTING.md?raw";
import aboutUsVideoDialog from "../components/site/AboutUsVideoDialog.tsx?raw";
import header from "../components/site/Header.tsx?raw";
import siteLink from "../components/SiteLink.tsx?raw";
import events from "../data/events.ts?raw";
import projects from "../data/projects.ts?raw";
import siteEmails from "../lib/siteEmails.ts?raw";
import siteNavigation from "../lib/siteNavigation.ts?raw";
import linkAuditTest from "../test/link-audit.test.ts?raw";

export type ChangelogFileType = "markdown" | "code";

const fileContents = new Map<string, string>([
  ["docs/EMAIL_ROUTING.md", emailRoutingDoc],
  ["src/components/site/AboutUsVideoDialog.tsx", aboutUsVideoDialog],
  ["src/components/site/Header.tsx", header],
  ["src/components/SiteLink.tsx", siteLink],
  ["src/data/events.ts", events],
  ["src/data/projects.ts", projects],
  ["src/lib/siteEmails.ts", siteEmails],
  ["src/lib/siteNavigation.ts", siteNavigation],
  ["src/test/link-audit.test.ts", linkAuditTest],
]);

export const getChangelogFileContent = (path: string): string | null =>
  fileContents.get(path) ?? null;

export const getChangelogFileType = (path: string): ChangelogFileType =>
  path.endsWith(".md") ? "markdown" : "code";
