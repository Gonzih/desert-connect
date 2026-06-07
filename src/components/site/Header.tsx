import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/isoc-nevada-logo.webp";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Global Roots", href: "#global" },
  { label: "Membership", href: "#membership" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "#resources" },
  { label: "Donate", href: "#donate" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#home" className="flex items-center gap-2 group" aria-label="ISOC Nevada home">
          <img
            src={logo}
            alt="ISOC Nevada Chapter logo"
            className="h-10 w-auto"
            width={160}
            height={40}
          />
        </a>

       <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
           >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          )
        )}
      </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="#membership">Sign in</a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://forms.gle/NgvHEqj1LFFQ9NJ7A" target="_blank" rel="noreferrer">Join the Chapter</a>
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
            {navLinks.map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              )
            )}
            <Button variant="hero" size="sm" asChild className="mt-2">
              <a href="https://forms.gle/NgvHEqj1LFFQ9NJ7A" target="_blank" rel="noreferrer">
                Join the Chapter
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
