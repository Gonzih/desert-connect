import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { changelogEntries } from "@/data/changelog";
import { getChangelogFileContent } from "@/lib/changelogFiles";

describe("changelog", () => {
  it("has unique PR numbers", () => {
    const prNumbers = changelogEntries.map((entry) => entry.prNumber);
    expect(new Set(prNumbers).size).toBe(prNumbers.length);
  });

  it("has plain-language content for every entry", () => {
    for (const entry of changelogEntries) {
      expect(entry.title.trim().length).toBeGreaterThan(0);
      expect(entry.summary.trim().length).toBeGreaterThan(0);
      expect(entry.changes.length).toBeGreaterThan(0);
      expect(entry.changes.every((change) => change.trim().length > 0)).toBe(true);
    }
  });

  it("links only to files that exist on disk and in the preview registry", () => {
    for (const entry of changelogEntries) {
      for (const file of entry.linkedFiles ?? []) {
        expect(existsSync(join(process.cwd(), file.path)), `missing file: ${file.path}`).toBe(
          true,
        );
        expect(
          getChangelogFileContent(file.path),
          `missing preview content for: ${file.path}`,
        ).toBeTruthy();
      }
    }
  });
});
