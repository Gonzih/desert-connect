import { useMemo, useState } from "react";
import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { calendarEvents } from "@/data/events";

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

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const datedEvents = calendarEvents
  .map((event) => ({
    ...event,
    parsedDate: parseEventDate(event.date),
  }))
  .filter((event) => event.parsedDate);

const CalendarPage = () => {
  const initialDate = datedEvents[0]?.parsedDate ?? new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);

  const selectedEvents = useMemo(() => {
    if (!selectedDate) return [];

    return datedEvents.filter((event) =>
      event.parsedDate ? isSameDay(event.parsedDate, selectedDate) : false,
    );
  }, [selectedDate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-surface-slate py-16 md:py-20">
          <div className="container">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Chapter Calendar
            </span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
              Full Calendar
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Upcoming chapter meetings, workshops, broadcasts, and MetaWeb events.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container grid gap-8 lg:grid-cols-[400px_1fr]">
            <aside className="rounded-xl border border-border bg-card p-5 shadow-card">
              <CalendarPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                defaultMonth={initialDate}
                modifiers={{
                  event: datedEvents
                    .map((event) => event.parsedDate)
                    .filter(Boolean) as Date[],
                }}
                modifiersClassNames={{
                  event:
                    "bg-primary/15 text-primary font-bold hover:bg-primary hover:text-primary-foreground",
                }}
                className="mx-auto"
                classNames={{
                  months: "flex justify-center",
                  month: "w-full max-w-[320px] space-y-5",
                  caption_label: "text-base font-semibold text-foreground",
                  head_cell: "w-10 text-xs font-semibold text-muted-foreground",
                  cell: "h-10 w-10 text-center text-sm p-0 relative",
                  day: "h-10 w-10 rounded-md p-0 font-medium hover:bg-accent hover:text-accent-foreground",
                  day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground font-bold",
                }}
              />

              <div className="mt-6 border-t border-border pt-5">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Selected Date
                </h2>

                <div className="mt-3 space-y-3">
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map((event) => (
                      <div key={event.id} className="rounded-lg bg-muted/50 p-4">
                        <p className="font-semibold text-foreground">{event.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {event.time} · {event.location}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No scheduled event for this date.
                    </p>
                  )}
                </div>
              </div>
            </aside>

            <div className="space-y-4">
              {calendarEvents.map((event) => (
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CalendarPage;
