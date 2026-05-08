import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/isoc-nevada-logo.webp";

export const Footer = () => {
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
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-2 max-w-sm"
          >
            <Input
              type="email"
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
            <li><a href="#home" className="hover:text-white">About</a></li>
            <li><a href="#membership" className="hover:text-white">Membership</a></li>
            <li><a href="#programs" className="hover:text-white">Workgroups</a></li>
            <li><a href="#resources" className="hover:text-white">Bylaws & Minutes</a></li>
            <li><a href="#donate" className="hover:text-white">Donate</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
            Connect
          </h4>
          <div className="mt-4 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/15 text-white/80 hover:border-accent hover:text-accent transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/55 leading-relaxed">
            Las Vegas · Reno · Carson City
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
