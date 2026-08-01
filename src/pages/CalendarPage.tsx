import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import { calendarEvents } from "@/data/events";
import { Button } from "@/components/ui/button";

const datedEvents = calendarEvents.filter((event) => event.date);

const CalendarPage = () => {
  return (
    <main className="py-20 md:py-28">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Full Calendar
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="rounded-xl border border-border bg-card p-6">
            <CalendarPicker
              mode="single"
              selected={new Date("2026-08-18")}
              modifiers={{
                event: datedEvents.map((event) => new Date(`${event.date}T12:00:00`)),
              }}
              modifiersClassNames={{
                event: "bg-primary text-primary-foreground font-bold",
              }}
            />
          </div>

          <div className="space-y-4">
            {calendarEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h2 className="font-display text-xl font-bold text-foreground">
                  {event.title}
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  {event.date ?? "TBA"} · {event.time} · {event.location}
                </p>

                <p className="mt-3 text-muted-foreground">
                  {event.description}
                </p>

                <Button className="mt-4" asChild>
                  <a href={event.rsvpUrl} target="_blank" rel="noreferrer">
                    Register
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
