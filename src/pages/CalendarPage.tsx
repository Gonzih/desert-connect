import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { calendarEvents } from "@/data/events";
import flyerImage from "@/assets/3.jpg";

const parseEventDate = (date: string | null) => {
  if (!date) return null;

  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day, 12);
};

const formatEventDate = (date: string | null) => {
  const parsed = parseEventDate(date);

  if (!parsed) return "Date TBA";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
};

const datedEvents = calendarEvents
  .map((event) => ({
    ...event,
    parsedDate: parseEventDate(event.date),
  }))
  .filter((event) => event.parsedDate);

const today = new Date();
today.setHours(0, 0, 0, 0);

const upcomingEvents = datedEvents.filter((event) => event.parsedDate! >= today);
const pastEvents = datedEvents.filter((event) => event.parsedDate! < today).reverse();

const CalendarPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-surface-slate py-16 text-surface-slate-foreground md:py-20">
          <div className="container">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Chapter Calendar
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Full Calendar
            </h1>
            <p className="mt-4 max-w-2xl text-surface-slate-foreground/80">
              Upcoming chapter meetings, workshops, broadcasts, and MetaWeb events.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="mb-12">
              <a
                href="https://www.zeffy.com/en-US/ticketing/global-encryption-day-special-event"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <img
                  src={flyerImage}
                  alt="Global Encryption Day Special Event Flyer"
                  className="mx-auto max-w-2xl w-full rounded-xl shadow-elegant object-contain"
                />
              </a>
              <div className="mt-4 text-center">
                <Button variant="hero" asChild>
                  <a
                    href="https://www.zeffy.com/en-US/ticketing/global-encryption-day-special-event"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Virtually <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-12">
              {/* Upcoming Events */}
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Upcoming Events
                </h2>
                <div className="space-y-4">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event) => (
                      <article
                        key={event.id}
                        className="rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="inline-flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4 text-primary" />
                                {formatEventDate(event.date)}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-primary" />
                                {event.time}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-primary" />
                                {event.location}
                              </span>
                            </div>

                            <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                              {event.title}
                            </h2>

                            <p className="mt-3 max-w-2xl text-muted-foreground">
                              {event.description}
                            </p>
                          </div>

                          <Button variant="hero" asChild>
                            <a href={event.rsvpUrl} target="_blank" rel="noreferrer">
                              Register <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </article>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No upcoming events scheduled.</p>
                  )}
                </div>
              </div>

              {/* Previous Events */}
              {pastEvents.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Previous Events
                  </h2>
                  <div className="space-y-4">
                    {pastEvents.map((event) => (
                      <article
                        key={event.id}
                        className="rounded-xl border border-border bg-card p-6 shadow-card opacity-75"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <span className="inline-flex items-center gap-1.5">
                                <CalendarDays className="h-4 w-4 text-primary" />
                                {formatEventDate(event.date)}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-primary" />
                                {event.time}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-primary" />
                                {event.location}
                              </span>
                            </div>

                            <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                              {event.title}
                            </h2>

                            <p className="mt-3 max-w-2xl text-muted-foreground">
                              {event.description}
                            </p>
                          </div>

                          <Button variant="hero" disabled asChild>
                            <a href={event.rsvpUrl} target="_blank" rel="noreferrer">
                              Register <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CalendarPage;
