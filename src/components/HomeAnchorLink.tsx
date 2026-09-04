import { type MouseEvent, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/navigation";

type HomeAnchorLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export const HomeAnchorLink = ({
  href,
  className,
  children,
  onClick,
}: HomeAnchorLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.(event);

    if (isHome) {
      smoothScrollTo(href);
      return;
    }

    navigate("/", { state: { scrollTo: href } });
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)}>
      {children}
    </a>
  );
};
