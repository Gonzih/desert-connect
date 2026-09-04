import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { externalLinks, homeSectionAnchors, siteEmailAddresses } from "@/lib/siteLinks";
import { footerChapterLinks } from "@/lib/siteNavigation";
import { projectSlugs, projects } from "@/data/projects";

const srcRoot = join(process.cwd(), "src");
const root = process.cwd();

const collectFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return collectFiles(path);
    return path.endsWith(".tsx") ? [path] : [];
  });

const siteSource = collectFiles(join(srcRoot, "components", "site"))
  .concat([
    join(srcRoot, "pages", "Index.tsx"),
    join(srcRoot, "pages", "Projects.tsx"),
    join(srcRoot, "pages", "CalendarPage.tsx"),
    join(srcRoot, "pages", "NotFound.tsx"),
    join(srcRoot, "components", "site", "Footer.tsx"),
    join(srcRoot, "components", "SiteLink.tsx"),
  ])
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

describe("link audit (static)", () => {
  it("does not use placeholder href=\"#\" in site components", () => {
    expect(siteSource).not.toMatch(/href="#"/);
  });

  it("does not use HashRouter or hash-based route URLs", () => {
    const appSource = readFileSync(join(srcRoot, "App.tsx"), "utf8");
    expect(appSource).not.toContain("HashRouter");
    expect(appSource).toContain("BrowserRouter");
    expect(siteSource).not.toContain("#/");
    expect(siteSource).not.toContain("HomeAnchorLink");
    expect(siteSource).not.toContain("InPageAnchor");
  });

  it("uses real /projects paths for workgroups (not hash fragments)", () => {
    const projectsPage = readFileSync(join(srcRoot, "pages", "Projects.tsx"), "utf8");
    const siteLink = readFileSync(join(srcRoot, "components", "SiteLink.tsx"), "utf8");
    expect(projectsPage).toContain("projectPath");
    expect(projectsPage).not.toMatch(/href=\{`#\$\{/);
    expect(siteLink).toContain("projectPath");
    expect(siteLink).not.toContain("/projects${hash}");
  });

  it("ships GitHub Pages SPA redirect for deep links", () => {
    expect(existsSync(join(root, "public", "404.html"))).toBe(true);
    const spa404 = readFileSync(join(root, "public", "404.html"), "utf8");
    expect(spa404).toContain("segmentCount");
    const indexHtml = readFileSync(join(root, "index.html"), "utf8");
    expect(indexHtml).toContain("replaceState");
  });

  it("documents every home section anchor used in site components", () => {
    for (const anchor of homeSectionAnchors) {
      expect(siteSource).toContain(`id="${anchor.slice(1)}"`);
    }
  });

  it("keeps external link inventory free of empty URLs", () => {
    for (const link of externalLinks) {
      expect(link.url).toMatch(/^https?:\/\//);
    }
  });

  it("maps every workgroup slug to a projects page section id", () => {
    expect(projectSlugs).toHaveLength(projects.length);
    for (const slug of projectSlugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
      expect(projects.some((project) => project.slug === slug)).toBe(true);
    }
  });

  it("uses SiteLink for home page workgroup titles", () => {
    const homeProjects = readFileSync(
      join(process.cwd(), "src/components/site/Projects.tsx"),
      "utf8",
    );
    expect(homeProjects).toContain("SiteLink");
    expect(homeProjects).toContain('type: "project"');
    expect(homeProjects).not.toContain('href={`#');
  });

  it("defines footer chapter links per site spec", () => {
    expect(footerChapterLinks.map((l) => l.label)).toEqual([
      "About Us",
      "Membership",
      "Workgroups",
      "Bylaws & Minutes",
      "Donate",
    ]);
    expect(footerChapterLinks[0].target).toEqual({ type: "aboutVideo" });
    expect(footerChapterLinks[1].target).toMatchObject({
      type: "external",
      href: "https://forms.gle/NgvHEqj1LFFQ9NJ7A",
    });
    expect(footerChapterLinks[2].target).toEqual({ type: "route", path: "/projects" });
    expect(footerChapterLinks[3].target).toMatchObject({ type: "inactive" });
    expect(footerChapterLinks[4].target).toEqual({ type: "section", section: "donate" });
  });

  it("routes footer chapter links through SiteLink", () => {
    const footer = readFileSync(join(srcRoot, "components", "site", "Footer.tsx"), "utf8");
    expect(footer).toContain("footerChapterLinks");
    expect(footer).toContain("SiteLink");
    expect(footer).not.toContain("HomeAnchorLink");
  });

  it("keeps mailto link text matching href addresses", () => {
    const privacy = readFileSync(join(srcRoot, "components", "site", "PrivacyNotice.tsx"), "utf8");
    expect(privacy).toContain('href="mailto:isocnevada@gmail.com"');
    expect(privacy).toContain("isocnevada@gmail.com");
    expect(privacy).not.toContain("privacy@isocnv.org");
  });

  it("documents all site email addresses", () => {
    for (const entry of siteEmailAddresses) {
      expect(entry.address).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }
    expect(siteEmailAddresses.some((e) => e.address === "isocnevada@gmail.com" && e.receives)).toBe(
      true,
    );
  });
});

describe("link audit (network)", () => {
  it.skipIf(!process.env.VERIFY_LINKS)("returns HTTP success for external URLs", async () => {
    for (const link of externalLinks) {
      const response = await fetch(link.url, { method: "HEAD", redirect: "follow" });
      expect(response.ok, `${link.label} (${link.url})`).toBe(true);
    }
  }, 120_000);
});
