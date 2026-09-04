import { type MouseEvent, type ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { InactiveLink } from "@/components/InactiveLink";
import { smoothScrollTo } from "@/lib/navigation";
import {
  sectionHash,
  sectionHref,
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
  const navigate = useNavigate();

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
    const hash = `#${target.slug}`;

    const handleProjectClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate?.();

      if (location.pathname === "/projects") {
        smoothScrollTo(hash);
        return;
      }

      navigate({ pathname: "/projects", hash });
    };

    return (
      <a href={`/projects${hash}`} onClick={handleProjectClick} className={cn(className)}>
        {children}
      </a>
    );
  }

  const hash = sectionHash(target.section);
  const href = sectionHref(target.section);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate?.();

    if (location.pathname === "/") {
      smoothScrollTo(hash);
      window.history.replaceState(null, "", href);
      return;
    }

    navigate({ pathname: "/", hash });
  };

  return (
    <a href={href} onClick={handleSectionClick} className={cn(className)}>
      {children}
    </a>
  );
};
