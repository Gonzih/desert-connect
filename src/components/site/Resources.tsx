import { FileText, BookOpen, MapPin, Download, ArrowUpRight } from "lucide-react";

const repository = [
  { title: "Chapter Bylaws", type: "PDF · 2025", icon: FileText },
  { title: "Articles of Incorporation", type: "PDF", icon: FileText },
  { title: "Board Meeting Minutes", type: "Archive", icon: FileText },
  { title: "Annual Report 2025", type: "PDF", icon: FileText },
];

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
    title: "The Nevada Digital Divide: 2025 Snapshot",
    meta: "Regional report · 28 pages",
  },
  {
    title: "Broadband Funding in the Silver State",
    meta: "BEAD & state programs primer",
  },
  {
    title: "Nevada Legislative Tracker",
    meta: "Internet & technology bills, 83rd session",
  },
];

export const Resources = () => {
  return (
    <section id="resources" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Resources & References
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            The chapter library.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Governance documents, white papers, and Nevada-specific publications you can use,
            cite, and share.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {/* Repository */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">ISOC NV Repository</h3>
            <p className="mt-1 text-xs text-muted-foreground">Official chapter documents</p>
            <ul className="mt-5 space-y-2">
              {repository.map((r) => (
                <li key={r.title}>
                  <a
                    href="#"
                    className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 hover:border-primary/40 hover:shadow-card transition-smooth"
                  >
                    <div className="flex items-center gap-3">
                      <r.icon className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{r.title}</p>
                        <p className="text-[11px] text-muted-foreground">{r.type}</p>
                      </div>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Focused Topics</h3>
            <p className="mt-1 text-xs text-muted-foreground">White papers from the chapter</p>
            <ul className="mt-5 space-y-3">
              {topics.map((t) => (
                <li
                  key={t.title}
                  className="rounded-lg border border-border bg-card p-4 hover:shadow-card transition-smooth"
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

          {/* Publications */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">Nevada Publications</h3>
            <p className="mt-1 text-xs text-muted-foreground">Regional reports & legislative summaries</p>
            <ul className="mt-5 space-y-3">
              {publications.map((p) => (
                <li key={p.title}>
                  <a
                    href="#"
                    className="group block rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:shadow-card transition-smooth"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-smooth">
                            {p.title}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0" />
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
