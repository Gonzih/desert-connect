import { Calendar, MapPin, Ticket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mailtoHref } from "@/lib/siteEmails";


export const TechTalk = () => {
  return (
    <section id="tech-talk" className="relative py-20 md:py-28 bg-surface-slate text-surface-slate-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(hsl(var(--accent))_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Ticket className="h-3.5 w-3.5" /> Featured Event · Free
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold leading-tight text-white">
            Tech Talk: How Digital Monuments Can Preserve Our Shared Heritage
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Join <strong className="text-white">ISOC Nevada</strong>, the{" "}
            <strong className="text-white">Northern Nevada IEEE Section</strong>, and the{" "}
            <strong className="text-white">Society of Women Engineers — Sierra Nevada</strong> for
            an evening with guest speaker <strong className="text-white">Daveed Benjamin</strong>,
            founder of The Meta-Layer Initiative and author of <em>The Metaweb</em>. Discover how
            AI, digital archives, and the Meta-Layer can preserve Nevada's history, Indigenous
            knowledge, and cultural heritage for future generations.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <Calendar className="h-3.5 w-3.5" /> When
              </dt>
              <dd className="mt-1.5 text-sm text-white">
                Thursday, July 23, 2026
                <br />
                <span className="text-white/70">4:00 PM – 6:00 PM</span>
              </dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <MapPin className="h-3.5 w-3.5" /> Where
              </dt>
              <dd className="mt-1.5 text-sm text-white">
                Skipolini's Italian
                <br />
                <span className="text-white/70">Sierra Summit Mall, Reno</span>
              </dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2 text-sm text-white/80">
            <li><span className="font-semibold text-accent">Network</span> — with ISOC Nevada, IEEE, SWE & guests</li>
            <li><span className="font-semibold text-accent">Learn</span> — why digital monuments matter in Nevada</li>
            <li><span className="font-semibold text-accent">Engage</span> — with active Digital Preservation Projects</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href={mailtoHref({
                  intended: "isocnevada@gmail.com",
                  subject: "RSVP - Tech Talk July 23",
                })}
              >
                RSVP — Join Us <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="https://forms.gle/NgvHEqj1LFFQ9NJ7A" target="_blank" rel="noreferrer">
                Join ISOC Nevada
              </a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/60">Free to attend · Donations welcome</p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-2xl bg-gradient-gold opacity-30 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl ring-1 ring-white/10">
            <img
              src="/tech-talk-flyer.jpg"
              alt="ISOC Nevada, IEEE, and SWE Tech Talk flyer — Daveed Benjamin, July 23 2026, Reno"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
