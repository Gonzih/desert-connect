import { Users, Target, Compass, ArrowUpRight } from "lucide-react";

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
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-smooth"
              >
                {p.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
