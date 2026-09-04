import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteLink } from "@/components/SiteLink";
import { InactiveLink } from "@/components/InactiveLink";
import { footerChapterLinks } from "@/lib/siteNavigation";
import { mailtoNewsletter } from "@/lib/siteEmails";
import logo from "@/assets/isoc-nevada-logo.webp";

const socialLinks = [
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "Twitter", icon: Twitter },
  { label: "GitHub", icon: Github },
];

export const Footer = () => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    if (typeof email !== "string" || !email.trim()) return;

    window.location.href = mailtoNewsletter(email.trim());
    toast.success("Opening your email app to send your subscription request.");
  };

  return (
    <footer className="bg-surface-slate text-surface-slate-foreground">
      <div className="container py-16 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="ISOC Nevada Chapter logo"
              className="h-12 w-auto bg-white rounded-md p-1.5"
            />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            A volunteer chapter of the Internet Society advancing the 2030 Strategy across Nevada —
            closing the digital divide and defending encryption and online safety.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mt-6 flex flex-col sm:flex-row gap-2 max-w-sm"
          >
            <Input
              type="email"
              name="email"
              required
              placeholder="you@nevada.org"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button type="submit" variant="gold">
              <Mail className="h-4 w-4" /> Subscribe
            </Button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Chapter
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {footerChapterLinks.map((link) => (
              <li key={link.label}>
                <SiteLink target={link.target} className="hover:text-white">
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Connect
          </h4>
          <p className="mt-1 text-xs text-white/45">Social profiles coming soon</p>
          <div className="mt-4 flex gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <InactiveLink
                key={label}
                title={`${label} profile coming soon`}
                className="grid h-9 w-9 place-items-center rounded-md border border-dashed border-white/20 bg-white/5 text-white/40"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">{label} (coming soon)</span>
              </InactiveLink>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/55 leading-relaxed">
            Reno · Carson City · Las Vegas  
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Internet Society Nevada Chapter. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            ISOC Nevada is an independent chapter of the Internet Society. Views expressed do not
            necessarily reflect those of ISOC Global, the IETF, or affiliated organizations.
          </p>
        </div>
      </div>
    </footer>
  );
};
