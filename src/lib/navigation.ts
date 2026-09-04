export const HEADER_OFFSET = 80;

export const smoothScrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};

export const inactiveLinkClassName =
  "cursor-not-allowed opacity-50 pointer-events-none select-none";
