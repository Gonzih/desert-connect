import { Heart, Building2, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackRockDesertBackground from "./black-rock-desert-donate-background.png";

export const Donate = () => {
  return (
    <section id="donate" className="relative overflow-hidden py-20 md:py-28 bg-gradient-subtle">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blackRockDesertBackground})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/72" aria-hidden="true" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Donation & Support
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Fuel the open Internet in Nevada.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ISOC Nevada is volunteer-driven and 100% funded by community contributions. Every dollar
            stays in-state, supporting workshops, broadband mapping, and policy advocacy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Zeffy widget placeholder */}
          <div className="rounded-2xl border border-border/80 bg-card/90 p-2 shadow-elegant overflow-hidden backdrop-blur-sm">
            <div className="rounded-xl bg-gradient-primary p-8 text-primary-foreground">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Powered by Zeffy · 100% fee-free
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">Donate online</h3>
              <p className="mt-2 text-white/80 text-sm max-w-md">
                Zeffy passes 100% of your donation to the chapter — no platform fees, no payment
                processing fees.
              </p>
            </div>

            {/* Replace iframe src with the chapter's Zeffy form URL when issued. */}
            <div className="aspect-[4/3] md:aspect-[16/10] w-full grid place-items-center bg-muted/40 m-2 rounded-lg border border-dashed border-border">
              <div className="text-center px-6 py-10">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="mt-4 font-display font-semibold text-foreground">
                  Zeffy donation widget
                </p>
                <p className="mt-1 text-xs text-muted-foreground max-w-xs mx-auto">
                  Embed point for the chapter's Zeffy form. Replace this block with the iframe
                  Zeffy provides.
                </p>
                <Button variant="hero" size="sm" className="mt-5" asChild>
                  <a href="https://www.zeffy.com" target="_blank" rel="noreferrer">
                    Open Zeffy
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Offline giving */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-border/80 bg-card/90 p-7 shadow-card backdrop-blur-sm">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                Corporate Sponsorship
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Annual sponsorship packages for Nevada businesses, ISPs, and institutions
                supporting the open Internet. Tiered benefits available.
              </p>
              <a
                href="mailto:isocnevada@gmail.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Mail className="h-4 w-4" /> sponsorship@isocnv.org
              </a>
            </div>

            <div className="rounded-2xl border border-border/80 bg-card/90 p-7 shadow-card backdrop-blur-sm">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                Mail a Check
              </h3>
              <address className="mt-3 not-italic text-sm text-muted-foreground leading-relaxed">
                Make checks payable to <strong className="text-foreground">ISOC Nevada Chapter</strong>
                <br />
                PO Box 3888
                <br />
                Carson City, NV 89702
              </address>
              <p className="mt-3 text-xs text-muted-foreground">
                Donations may be tax-deductible — consult your tax advisor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
