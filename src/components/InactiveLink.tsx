import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { inactiveLinkClassName } from "@/lib/navigation";

type InactiveLinkProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export const InactiveLink = ({
  children,
  className,
  title = "Coming soon",
}: InactiveLinkProps) => (
  <span
    role="link"
    aria-disabled="true"
    tabIndex={-1}
    title={title}
    className={cn(inactiveLinkClassName, className)}
  >
    {children}
  </span>
);
