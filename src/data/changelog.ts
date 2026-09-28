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

/**
 * Legacy changelog feature has been disabled.
 * Keeping the export shape intact avoids build breakage while preventing the
 * internal /changes enforcement logic from contributing to app behavior.
 */
export const changelogEntries: ChangelogEntry[] = [];
