import { BookOpen, ExternalLink, MapPin } from "lucide-react";

const topics = [
  {
    icon: BookOpen,
    title: "Encryption & Privacy",
    body: "Why end-to-end encryption protects every Nevadan — from journalists to small businesses.",
  },
  {
    icon: BookOpen,
    title: "Data Sovereignty",
    body: "Frameworks for tribal nations and local governments to govern their own data.",
  },
  {
    icon: BookOpen,
    title: "Rural Access",
    body: "Community networks, fixed-wireless, and middle-mile fiber strategies for rural Nevada.",
  },
];

const publications = [
  {
    title: "Nevada Statewide Digital Equity Plan",
    meta: "Nevada OSIT · State plan (PDF)",
    href: "https://broadbandexpanded.com/files/iija_plans/NV%20-%20Digital%20Equity%20Plan%20-%20Draft.pdf",
  },
  {
    title: "Nevada BEAD Final Proposal",
    meta: "Nevada OSIT · Broadband funding program (PDF)",
    href: "https://prod.osit.nv.gov/siteassets/nevada-draft-bead-final-proposal---public-comment_final.pdf",
  },
  {
    title: "83rd Session Bills & Resolutions",
    meta: "Nevada Legislature · NELIS bill search",
    href: "https://www.leg.state.nv.us/App/NELIS/REL/83rd2025/Bills/HomeBills",
  },
];

const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const Resources = () => {
  return (
    <section id="resources" className="py-14 md:py-16">
      <div className="mx-auto w-full max-w-2xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Resources & References
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            The chapter library.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Curated Nevada-specific reports and trackers from state agencies and research partners.
            Chapter-authored publications will be added here as they are released.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Focused Topics</h3>
            <p className="mt-1 text-xs text-muted-foreground">Chapter white papers coming soon</p>
            <ul className="mt-4 grid gap-3">
              {topics.map((t) => (
                <li
                  key={t.title}
                  className="min-h-24 rounded-md border border-border/60 bg-card px-3.5 py-3"
                >
                  <div className="flex items-center gap-2">
                    <t.icon className="h-4 w-4 text-accent" />
                    <p className="text-sm font-semibold text-foreground">{t.title}</p>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Nevada References</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Official state &amp; partner sources (opens in a new tab)
            </p>
            <ul className="mt-4 grid gap-3">
              {publications.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      event.preventDefault();
                      openExternal(p.href);
                    }}
                    className="group flex min-h-24 rounded-md border border-border/60 bg-card px-3.5 py-3 hover:border-primary/30 hover:shadow-sm transition-smooth"
                  >
                    <div className="flex w-full items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {p.title}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
