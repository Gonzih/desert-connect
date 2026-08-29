import { Link } from "react-router-dom";
import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import fixedChapterInvite from "@/assets/fixed_chapter_invite.png";

const events = [
  {
    type: "MetaWeb Course",
    title: "Sessions",
    date: "TBA",
    time: "TBA",
    location: "Virtual (Zoom)",
    icon: Video,
    cta: "Register",
    ctaHref: "https://course.metawebbook.com/begin-your-journey",
  },
  {
    type: "Chapter Meetup",
    title: "Nevada ISOC and you",
    date: "August 17, 2026",
    time: "6:00 PM PT",
    location: "Zoom Room",
    icon: MapPin,
    cta: "Register",
    ctaHref: "https://luma.com/e0ef4i1b",
  },
  {
    type: "Metaweb Summit",
    title: "Desirable Properties Revealed",
    date: "Sept 16, 2026",
    time: "4:00 - 6:00 PM PT",
    location: "Hybrid, SF Bay",
    icon: Video,
    cta: "Register",
    ctaHref: "https://luma.com/wfi1z9lv",
  },
];

export const Events = () => {
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Upcoming Events
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
              Join the next chapter meeting or sign up for an event.
            </h2>
            <img
              src={fixedChapterInvite}
              alt="Nevada Chapter Formation Invite"
              width={620}
              height={680}
              className="h-auto w-full object-contain"
            />
            <p className="mt-3 text-muted-foreground">
              Board meetings, community workshops, and policy briefings — open to members and the
              public.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/calendar">
              View full calendar <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <Calendar className="h-3 w-3" /> {e.type}
                </span>
                <e.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground leading-snug">
                {e.title}
              </h3>
              <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {e.date} · {e.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{e.location}</span>
                </div>
              </dl>
              <Button variant="hero" size="sm" className="mt-6 self-start" asChild>
                <a href={e.ctaHref ?? "#membership"} target={e.ctaHref ? "_blank" : undefined} rel={e.ctaHref ? "noopener noreferrer" : undefined}>{e.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
