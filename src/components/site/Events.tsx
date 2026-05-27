import { Calendar, MapPin, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    type: "MetaWeb Course",
    title: "How a meta-layer above today's Web can eliminate misinformation, enable collective intelligence, and reshape how humans and AI interact online.",
    date: "June 22, 2026",
    time: "10:30 AM PT",
    location: "Virtual (Zoom)",
    icon: Video,
    cta: "Register",
  },
  {
    type: "Chapter Meetup",
    title: "Nevada ISOC and you",
    date: "June 15, 2026",
    time: "5:30 PM PT",
    location: "Zoom Room",
    icon: MapPin,
    cta: "Register",
  },
  {
    type: "Workshop",
    title: "Encryption 101 for Nevada Nonprofits",
    date: "June 11, 2026",
    time: "12:00 PM PT",
    location: "Virtual (Zoom)",
    icon: Video,
    cta: "Register",
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
              Join the next chapter meeting.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Board meetings, community workshops, and policy briefings — open to members and the
              public.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="#events">
              View full calendar <ArrowRight className="ml-1 h-4 w-4" />
            </a>
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
                <a href="#membership">{e.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
