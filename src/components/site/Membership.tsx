import { PlayCircle, UserPlus, MessageSquare, Users2, Eye, Hand, Handshake, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const steps = [
  {
    n: "01",
    icon: UserPlus,
    title: "Join ISOC Global",
    body: "Create a free account on the Internet Society portal — your global membership.",
    cta: "Open ISOC portal",
    href: "https://www.internetsociety.org/become-a-member/",
  },
  {
    n: "02",
    icon: MessageSquare,
    title: "Join the Nevada community",
    body: "Drop into our Discord or WhatsApp channel and introduce yourself to the chapter.",
    cta: "Join Discord",
    href: "#",
  },
  {
    n: "03",
    icon: Users2,
    title: "Pick a workgroup",
    body: "Choose an active workgroup — broadband, policy, encryption, or education.",
    cta: "See workgroups",
    href: "#programs",
  },
];

const levels = [
  {
    icon: Eye,
    name: "Observer",
    body: "Stay informed. Receive newsletters, attend public meetings, no commitment required.",
  },
  {
    icon: Hand,
    name: "Contributor",
    body: "Active in a workgroup, contributing time to projects, advocacy, or events.",
  },
  {
    icon: Handshake,
    name: "Partner",
    body: "Organizations, sponsors, and institutional allies advancing chapter initiatives.",
  },
];

export const Membership = () => {
  return (
    <section id="membership" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Members & Partners
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
              Welcome to ISOC Nevada — here's how to plug in.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a network engineer, educator, policymaker, student, or simply care
              about a free and open Internet — there's a place for you in the chapter.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant transition-smooth text-left sm:col-span-2"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                      <Film className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">About Us</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Our community impact story</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background">
                  <DialogHeader className="px-6 pt-6">
                    <DialogTitle>About ISOC Nevada</DialogTitle>
                  </DialogHeader>
                  <div className="px-6 pb-6">
                    <video
                      controls
                      preload="metadata"
                      className="w-full rounded-lg bg-black"
                      src="/isoc-nevada-about.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
              <a
                href="#"
                className="group relative flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <PlayCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Watch orientation</p>
                  <p className="text-xs text-muted-foreground mt-0.5">5-min welcome video</p>
                </div>
              </a>
              <a
                href="#"
                className="group relative flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <UserPlus className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Member handbook</p>
                  <p className="text-xs text-muted-foreground mt-0.5">PDF · onboarding guide</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border p-7 shadow-elegant">
            <h3 className="font-display text-xl font-bold text-foreground">
              Get started in 3 steps
            </h3>
            <ol className="mt-6 space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold text-sm">
                      {s.n}
                    </div>
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-4 w-4 text-primary" />
                      <p className="font-semibold text-foreground">{s.title}</p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-primary hover:underline"
                    >
                      {s.cta} →
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-bold text-foreground">Engagement Levels</h3>
          <p className="mt-2 text-muted-foreground">Find the level of involvement that fits you.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {levels.map((l) => (
              <div
                key={l.name}
                className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                  <l.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 font-display text-lg font-bold text-foreground">{l.name}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
