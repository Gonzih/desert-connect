import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "@/lib/navigation";

/** Scroll to location.hash after navigation (BrowserRouter). */
export const useScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    let attempts = 0;
    const tryScroll = () => {
      if (document.querySelector(hash)) {
        smoothScrollTo(hash);
        return;
      }
      if (attempts++ < 12) {
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  }, [pathname, hash]);
};
