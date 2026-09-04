#!/usr/bin/env node
/**
 * Fails when user-facing site files change without an update to src/data/changelog.ts.
 *
 * Used in CI on pull requests. Locally:
 *   npm run check:changelog
 *   BASE_SHA=origin/main npm run check:changelog
 */

import { execSync } from "node:child_process";

const CHANGELOG_FILE = "src/data/changelog.ts";

/** Paths that should always get a plain-language /changes entry when modified. */
const WATCHED_PREFIXES = [
  "src/components/site/",
  "src/components/SiteLink.tsx",
  "src/components/InactiveLink.tsx",
  "src/components/ScrollToTop.tsx",
  "src/pages/",
  "src/data/",
  "src/lib/site",
  "docs/",
  "public/",
];

/** Changes here maintain /changes itself and do not need a new changelog entry. */
const EXCLUDED_FILES = new Set([
  "src/data/changelog.ts",
  "src/lib/changelogFiles.ts",
  "src/components/site/FilePreviewDialog.tsx",
]);

const isWatchedChange = (file) => {
  if (!file || EXCLUDED_FILES.has(file)) return false;
  if (file.startsWith("src/test/")) return false;
  if (file === CHANGELOG_FILE) return false;
  if (file.startsWith("src/data/") && file.endsWith("/changelog.ts")) return false;
  return WATCHED_PREFIXES.some((prefix) => file === prefix || file.startsWith(prefix));
};

const runGit = (command) =>
  execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

const resolveRange = () => {
  const base = process.env.GITHUB_BASE_SHA;
  const head = process.env.GITHUB_HEAD_SHA ?? process.env.GITHUB_SHA ?? "HEAD";

  if (base && head) {
    return { base, head, label: `${base}...${head}` };
  }

  if (process.env.BASE_SHA) {
    return { base: process.env.BASE_SHA, head: "HEAD", label: `${process.env.BASE_SHA}...HEAD` };
  }

  try {
    runGit("git rev-parse --verify origin/main");
    return { base: "origin/main", head: "HEAD", label: "origin/main...HEAD" };
  } catch {
    return { base: "HEAD~1", head: "HEAD", label: "HEAD~1...HEAD" };
  }
};

const { base, head, label } = resolveRange();

let changedFiles = [];
try {
  changedFiles = runGit(`git diff --name-only ${base} ${head}`)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
} catch (error) {
  console.error("check-changelog: could not read git diff");
  console.error(error.stderr?.toString() ?? error.message);
  process.exit(1);
}

const siteChanges = changedFiles.filter(isWatchedChange);
const changelogUpdated = changedFiles.includes(CHANGELOG_FILE);

if (siteChanges.length === 0) {
  console.log(`check-changelog: no watched site files changed (${label})`);
  process.exit(0);
}

if (changelogUpdated) {
  console.log(`check-changelog: changelog updated for ${siteChanges.length} site file(s)`);
  process.exit(0);
}

console.error("");
console.error("check-changelog: site files changed but src/data/changelog.ts was not updated.");
console.error("");
console.error("Add a plain-language entry to the /changes page:");
console.error("  src/data/changelog.ts");
console.error("");
console.error(`Diff range: ${label}`);
console.error("");
console.error("Changed site files:");
for (const file of siteChanges) {
  console.error(`  - ${file}`);
}
console.error("");
process.exit(1);
