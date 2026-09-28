export type ChangelogFileType = "markdown" | "code";

/**
 * Legacy /changes preview registry is disabled.
 * Returning null keeps the file registry inert without breaking imports.
 */
export const getChangelogFileContent = (_path: string): string | null => null;

export const getChangelogFileType = (_path: string): ChangelogFileType => "code";
