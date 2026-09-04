import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { externalLinks, homeSectionAnchors } from "@/lib/siteLinks";

const srcRoot = join(process.cwd(), "src");

const collectFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return collectFiles(path);
    return path.endsWith(".tsx") ? [path] : [];
  });

const siteSource = collectFiles(join(srcRoot, "components", "site"))
  .concat([join(srcRoot, "pages", "Index.tsx"), join(srcRoot, "pages", "Projects.tsx"), join(srcRoot, "pages", "CalendarPage.tsx"), join(srcRoot, "pages", "NotFound.tsx")])
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

describe("link audit (static)", () => {
  it("does not use placeholder href=\"#\" in site components", () => {
    expect(siteSource).not.toMatch(/href="#"/);
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
});

describe("link audit (network)", () => {
  it.skipIf(!process.env.VERIFY_LINKS)("returns HTTP success for external URLs", async () => {
    for (const link of externalLinks) {
      const response = await fetch(link.url, { method: "HEAD", redirect: "follow" });
      expect(response.ok, `${link.label} (${link.url})`).toBe(true);
    }
  }, 120_000);
});
