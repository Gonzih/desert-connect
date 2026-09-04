import { type MouseEvent, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { InactiveLink } from "@/components/InactiveLink";
import { smoothScrollTo } from "@/lib/navigation";
import {
  projectPath,
  sectionHash,
  type SiteLinkTarget,
} from "@/lib/siteNavigation";

type SiteLinkProps = {
  target: SiteLinkTarget;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export const SiteLink = ({ target, className, children, onNavigate }: SiteLinkProps) => {
  const location = useLocation();

  if (target.type === "inactive") {
    return (
      <InactiveLink title={target.reason} className={className}>
        {children}
      </InactiveLink>
    );
  }

  if (target.type === "external") {
    return (
      <a
        href={target.href}
        target={target.newTab ? "_blank" : undefined}
        rel={target.newTab ? "noopener noreferrer" : undefined}
        className={className}
        onClick={onNavigate}
      >
        {children}
      </a>
    );
  }

  if (target.type === "route") {
    const scrollToTopIfSame = () => {
      if (location.pathname === target.path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      onNavigate?.();
    };

    return (
      <Link to={target.path} className={className} onClick={scrollToTopIfSame}>
        {children}
      </Link>
    );
  }

  if (target.type === "project") {
    const path = projectPath(target.slug);

    return (
      <Link to={path} className={cn(className)} onClick={onNavigate}>
        {children}
      </Link>
    );
  }

  const hash = sectionHash(target.section);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (location.pathname === "/") {
      event.preventDefault();
      smoothScrollTo(hash);
      window.history.replaceState(null, "", hash);
      return;
    }

    // Let <Link> navigate to /#section from other pages
  };

  return (
    <Link to={{ pathname: "/", hash }} className={cn(className)} onClick={handleSectionClick}>
      {children}
    </Link>
  );
};
