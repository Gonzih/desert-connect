import { Radio, Lock, GraduationCap, Scale, Mail, ArrowUpRight, Orbit, Landmark, Wifi, BookOpen, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const workgroups = [
  {
    icon: Radio,
    name: "Nevada Broadband Mapping",
    status: "Active",
    body: "Crowdsourced speed-and-coverage data across all 17 counties to inform state broadband policy and federal BEAD funding.",
    lead: "Broadband Committee",
    email: "broadband@isocnv.org",
  },
  {
    icon: Lock,
    name: "Encryption Defense",
    status: "Active",
    body: "Educate Nevada legislators and the public on the importance of strong, end-to-end encryption for everyday safety.",
    lead: "Policy Committee",
    email: "policy@isocnv.org",
  },
  {
    icon: GraduationCap,
    name: "Digital Literacy Outreach",
    status: "Active",
    body: "K-12 and community college partnerships bringing Internet fundamentals and online safety to underserved Nevada students.",
    lead: "Education Committee",
    email: "education@isocnv.org",
  },
  {
    icon: Scale,
    name: "Tribal Connectivity Initiative",
    status: "Pilot",
    body: "Working with Nevada's tribal nations on community network feasibility and Indigenous data sovereignty.",
    lead: "Community Networks WG",
    email: "tribal@isocnv.org",
  },
  {
    icon: BookOpen,
    name: "The Meta-Layer Initiative",
    status: "Active",
    body: "Working with The Meta-Layer to explore decentralized identity solutions for the Internet.",
    lead: "Community Networks WG",
    email: "metaweb@isocnv.org",
  },
  {
    icon: Orbit,
    name: "Onboarding, Outreach, and Engagement",
    status: "Pilot",
    body: "Working with Nevada's communities towards better network connectivity and data literacy.",
    lead: "Community Networks WG",
    email: "community@isocnv.org",
  },
  {
    icon: Wifi,
    name: "Nevada Digital Policy and Regulations",
    status: "Pilot",
    body: "Nevada's Digital Policy and Regulations workgroup.",
    lead: "Community Networks WG",
    email: "nevada@isocnv.org",
  }, 
  {
    icon: Landmark,
    name: "Nevada Connectivity Initiative",
    status: "Pilot",
    body: "Working with Nevada's legislators to advance connectivity policies.",
    lead: "Community Networks WG",
    email: "nvstate@isocnv.org",
  },
];

const helpWanted = [
  { role: "GIS Volunteer", group: "Broadband Mapping", commitment: "~4 hrs/mo" },
  { role: "Legislative Tracker", group: "Policy", commitment: "~2 hrs/mo" },
  { role: "Workshop Facilitator", group: "Education", commitment: "Per-event" },
  { role: "Communications Writer", group: "Chapter-wide", commitment: "~3 hrs/mo" },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Programs & Projects
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
            The work happening across Nevada right now.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our workgroups translate the ISOC 2030 Strategy into concrete action — affordable
            access, secure infrastructure, and a trustworthy Internet for every Nevadan.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {workgroups.map((w) => (
            <article
              key={w.name}
              className="group flex min-h-[13rem] flex-col rounded-lg border border-border bg-card p-4 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground shadow-elegant">
                  <w.icon className="h-4 w-4" />
                </div>
                <Badge variant={w.status === "Active" ? "default" : "secondary"}>{w.status}</Badge>
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-foreground">
                {w.name}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                {w.body}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3 text-[11px]">
                <span className="text-muted-foreground">{w.lead}</span>
                <a
                  href={`mailto:isocnevada@gmail.com`}
                  className="inline-flex min-w-0 items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <Mail className="h-3 w-3 shrink-0" /> <span className="truncate">{w.email}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="rounded-2xl border border-border bg-gradient-subtle p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Help Wanted
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
              Contribution Portal
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Specific tasks looking for owners. Pick one and we'll connect you to the committee
              lead.
            </p>
            <ul className="mt-6 divide-y divide-border">
              {helpWanted.map((h) => (
                <li key={h.role}>
                  <a
                    href={`mailto:isocnevada@gmail.com?subject=${encodeURIComponent(`Volunteer interest: ${h.role}`)}`}
                    className="flex items-center justify-between py-4 gap-4 group"
                  >
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {h.role}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {h.group} · {h.commitment}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-smooth" />
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="hero" className="mt-7" asChild>
              <a href="mailto:isocnevada@gmail.com">Volunteer with the chapter</a>
            </Button>
          </div>

          <aside className="rounded-2xl bg-surface-slate text-surface-slate-foreground p-8">
            <h3 className="font-display text-xl font-bold text-white">Contact Matrix</h3>
            <p className="mt-2 text-sm text-white/70">
              Direct line to the people running each program.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {workgroups.map((w) => (
                <li
                  key={w.email}
                  className="flex items-center justify-between gap-4 py-2 border-b border-white/10"
                >
                  <span className="text-white/85">{w.lead}</span>
                  <a
                    href={`mailto:isocnevada@gmail.com`}
                    className="text-accent hover:underline font-semibold text-xs"
                  >
                    {w.email}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 py-2">
                <span className="text-white/85">General inquiries</span>
                <a
                  href="mailto:isocnevada@gmail.com"
                  className="text-accent hover:underline font-semibold text-xs"
                >
                  hello@isocnv.org
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
