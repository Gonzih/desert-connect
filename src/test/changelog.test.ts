import { describe, expect, it } from "vitest";
import { changelogEntries } from "@/data/changelog";

describe("legacy changelog", () => {
  it("is disabled", () => {
    expect(changelogEntries).toEqual([]);
  });
});
