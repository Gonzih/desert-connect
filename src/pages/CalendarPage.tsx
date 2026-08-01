import { Calendar as CalendarPicker } from "@/components/ui/calendar";

const CalendarPage = () => {
  return (
    <main className="py-20 md:py-28">
      <div className="container">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Full Calendar
        </h1>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <CalendarPicker />
        </div>
      </div>
    </main>
  );
};

export default CalendarPage;
