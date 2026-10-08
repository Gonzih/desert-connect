import { Users, Target, Compass, ArrowUpRight } from "lucide-react";
import { InactiveLink } from "@/components/InactiveLink";
import { cn } from "@/lib/utils";
import { inactiveLinkClassName } from "@/lib/navigation";
import featureImg from "@/assets/ISOC NV Global Encryption Days Oct 20-21, 2026(1).jpg";
import GED from "@/assets/3.jpg";

const pillars = [
  {
    icon: Users,
    eyebrow: "Who We Are",
    title: "Connecting Nevadans to the global digital infrastructure.",
    body:
      "A volunteer chapter of technologists, educators, and advocates uniting Silver State communities with the people building the open Internet worldwide.",
    cta: "Meet the chapter",
  },
  {
    icon: Target,
    eyebrow: "Our Mission",
    title: "An Internet that is open, globally connected, secure, and trustworthy.",
    body:
      "Aligned with the ISOC 2030 Strategy: affordable, reliable, and resilient access for every Nevadan — and a safe, secure online experience that protects them.",
    cta: "See our priorities",
  },
  {
    icon: Compass,
    eyebrow: "Leadership",
    title: "A Board rooted in service to the public Internet.",
    body:
      "Our Board of Directors brings decades of experience across networking, policy, education, and community organizing. Meet the people guiding the chapter.",
    cta: "View the board",
  },
];

export const Trinity = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            The Trinity
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            Building an open, globally-connected, secure, and trustworthy Internet.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Three commitments anchor everything we do as the Nevada chapter of the Internet Society.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-border bg-white/80 shadow-card">
          <div className="flex flex-col md:flex-row">
            <a
              href="https://www.zeffy.com/en-US/ticketing/global-encryption-day-special-event"
              target="_blank"
              rel="noreferrer"
              className="md:w-[28rem] shrink-0 overflow-hidden bg-slate-950 block"
            >
              <img
                src={featureImg}
                alt="Nevada chapter sponsor banner"
                className="h-full w-full object-cover md:min-h-[220px] hover:opacity-90 transition-opacity"
              />
            </a>

            <div className="flex flex-1 flex-col justify-center bg-[#eef1f2] p-6 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Supporters
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
                    Thank you to our <span className="text-primary">Sponsors</span>
                  </h3>
                </div>
                <div className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Nevada Chapter
                </div>
              </div>

              <p className="mt-5 text-base text-muted-foreground">
                Community-led support for resilient, trustworthy, and accessible digital infrastructure.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground/80">
                <span className="rounded-md bg-white px-3 py-2 shadow-sm">University of Nevada, Reno</span>
                <span className="rounded-md bg-white px-3 py-2 shadow-sm">ISOC Nevada</span>
                <span className="rounded-md bg-white px-3 py-2 shadow-sm">IEEE</span>
                <span className="rounded-md bg-white px-3 py-2 shadow-sm">swe</span>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://www.zeffy.com/en-US/ticketing/global-encryption-day-special-event"
          target="_blank"
          rel="noreferrer"
          className="mt-8 block overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-smooth"
        >
        <img
          src={GED}
          alt="Global Encryption Day 2026 flyer"
          className="w-full h-auto object-contain hover:opacity-90 transition-opacity"
        />
      </a>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.eyebrow}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant">
                <p.icon className="h-5 w-5" />
              </div>
              <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {p.eyebrow}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              <InactiveLink
                title={`${p.cta} — coming soon`}
                className={cn(
                  "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary/60",
                  inactiveLinkClassName,
                )}
              >
                {p.cta}
                <ArrowUpRight className="h-4 w-4" />
              </InactiveLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
