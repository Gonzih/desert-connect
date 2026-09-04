import { type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HEADER_OFFSET } from "@/lib/navigation";

type InPageAnchorProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const InPageAnchor = ({ href, className, children, onClick }: InPageAnchorProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.(event);

    const id = href.startsWith("#") ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  );
};
