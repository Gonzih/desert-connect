import { Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteLink } from "@/components/SiteLink";
import { projects } from "@/data/projects";
import { displayEmail, mailtoGeneral, mailtoVolunteer, mailtoWorkgroup, CHAPTER_DOMAIN_EMAILS } from "@/lib/siteEmails";

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
          <Button variant="outline" className="mt-6" asChild>
            <Link to="/projects">View all workgroup details</Link>
          </Button>
        </div>

        <div className="mt-12 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((workgroup) => (
            <article
              key={workgroup.slug}
              className="group flex min-h-[13rem] flex-col rounded-lg border border-border bg-card p-4 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground shadow-elegant">
                  <workgroup.icon className="h-4 w-4" />
                </div>
                <Badge variant={workgroup.status === "Active" ? "default" : "secondary"}>
                  {workgroup.status}
                </Badge>
              </div>
              <SiteLink
                target={{ type: "project", slug: workgroup.slug }}
                className="mt-4 font-display text-base font-bold leading-snug text-foreground group-hover:text-primary"
              >
                {workgroup.name}
              </SiteLink>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                {workgroup.summary}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-3 text-[11px]">
                <span className="text-muted-foreground">{workgroup.lead}</span>
                <a
                  href={mailtoWorkgroup(workgroup.intendedEmail, workgroup.name)}
                  className="inline-flex min-w-0 items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <Mail className="h-3 w-3 shrink-0" />
                  <span className="truncate">{displayEmail(workgroup.intendedEmail)}</span>
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
                    href={mailtoVolunteer(h.role)}
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
              <a href={mailtoVolunteer()}>Volunteer with the chapter</a>
            </Button>
          </div>

          <aside className="rounded-2xl bg-surface-slate text-surface-slate-foreground p-8">
            <h3 className="font-display text-xl font-bold text-white">Contact Matrix</h3>
            <p className="mt-2 text-sm text-white/70">
              Direct line to each workgroup running our programs.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {projects.map((workgroup) => (
                <li
                  key={workgroup.slug}
                  className="flex items-center justify-between gap-4 py-2 border-b border-white/10"
                >
                  <span className="text-white/85">{workgroup.name}</span>
                  <a
                    href={mailtoWorkgroup(workgroup.intendedEmail, workgroup.name)}
                    className="text-accent hover:underline font-semibold text-xs"
                  >
                    {displayEmail(workgroup.intendedEmail)}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 py-2">
                <span className="text-white/85">General inquiries</span>
                <a href={mailtoGeneral()} className="text-accent hover:underline font-semibold text-xs">
                  {displayEmail(CHAPTER_DOMAIN_EMAILS.general)}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
