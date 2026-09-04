import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/Standard JPG-US-Nevada-Chapter-Logo.jpg";
import { SiteLink } from "@/components/SiteLink";
import { headerNav, JOIN_FORM_URL } from "@/lib/siteNavigation";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <SiteLink
          target={{ type: "section", section: "home" }}
          className="flex items-center gap-2 group"
          onNavigate={closeMenu}
        >
          <img
            src={logo}
            alt="ISOC Nevada Chapter logo"
            className="h-10 w-auto"
            width={160}
            height={40}
          />
          <span className="sr-only">ISOC Nevada home</span>
        </SiteLink>

        <nav className="hidden md:flex items-center gap-8">
          {headerNav.map((item) => (
            <SiteLink
              key={item.label}
              target={item.target}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <SiteLink target={{ type: "section", section: "membership" }}>Sign in</SiteLink>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer">
              Join the Chapter
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {headerNav.map((item) => (
              <SiteLink
                key={item.label}
                target={item.target}
                onNavigate={closeMenu}
                className="py-2 text-sm font-medium text-foreground/80"
              >
                {item.label}
              </SiteLink>
            ))}
            <Button variant="hero" size="sm" asChild className="mt-2">
              <a href={JOIN_FORM_URL} target="_blank" rel="noreferrer">
                Join the Chapter
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
