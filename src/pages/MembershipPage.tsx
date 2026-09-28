import { ArrowLeft, PlayCircle, UserPlus, MessageSquare, Users2, Eye, Hand, Handshake, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/SiteLink";
import { InactiveLink } from "@/components/InactiveLink";
import { AboutUsVideoDialog } from "@/components/site/AboutUsVideoDialog";
import { cn } from "@/lib/utils";
import { inactiveLinkClassName } from "@/lib/navigation";
import rubyMountainsBackground from "@/components/site/ruby-mountains-events-background.png";
import isocNvGroupPhoto from "@/assets/founding_members_cc_083026.jpg";

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
    body: "Grab your ISOC Global member number and complete the application to join our chapter.",
    cta: "Join ISOCNV",
    href: "https://forms.gle/NgvHEqj1LFFQ9NJ7A",
  },
  {
    n: "03",
    icon: Users2,
    title: "Pick a workgroup",
    body: "Choose an active workgroup to learn more.",
    cta: "See workgroups",
    href: "/projects",
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
  {
    icon: UserPlus,
    name: "Admin or Workgroup Champion",
    body: "Organizations, sponsors, and institutional allies advancing chapter initiatives.",
  },
];

const MembershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container">
            <Button variant="ghost" className="mb-8" asChild>
              <SiteLink
                target={{ type: "section", section: "home" }}
                className="inline-flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </SiteLink>
            </Button>

            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Members & Partners
              </span>
              <h1 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">
                Welcome to ISOC Nevada — here's how to plug in.
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you're a network engineer, educator, policymaker, rancher, student, or simply care
                about a free and open Internet — there's a place for you in the ISOC Nevada chapter.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-elegant">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Forty-Two Founding Members
                </h2>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                  Forty-two founding members of the newly chartered Internet Society US Nevada Chapter came together to celebrate a remarkable journey and the beginning of a new chapter for Nevada's Internet community. The celebration highlighted major milestones achieved since the chapter's founding, reaffirmed the members' pledge to steward the open Internet, recognized valued partners, and expressed appreciation to the sponsors whose support helped make the chapter possible.
                </p>

                <div className="mt-10 flex justify-center">
                  <img
                    src={isocNvGroupPhoto}
                    alt="ISOC Nevada founding members group photo"
                    className="w-full max-w-2xl rounded-lg"
                  />
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.internetsociety.org/become-a-member/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Join ISOC Global
                  </a>
                  <a
                    href="https://forms.gle/NgvHEqj1LFFQ9NJ7A"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary bg-transparent text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Join ISOCNV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-subtle">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${rubyMountainsBackground})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/72" aria-hidden="true" />

          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <AboutUsVideoDialog
                    trigger={
                      <button
                        type="button"
                        className="group relative flex items-center gap-4 rounded-xl border border-border/80 bg-card/90 p-5 shadow-card backdrop-blur-sm hover:shadow-elegant transition-smooth text-left"
                      >
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                          <Film className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-foreground">About Us</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Our Community Impact Story</p>
                        </div>
                      </button>
                    }
                  />
                  <InactiveLink
                    title="Orientation video coming soon"
                    className={cn(
                      "group relative flex items-center gap-4 rounded-xl border border-border/80 bg-card/90 p-5 shadow-card backdrop-blur-sm",
                      inactiveLinkClassName,
                    )}
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                      <PlayCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">Watch Orientation - Coming Soon</p>
                      <p className="text-xs text-muted-foreground mt-0.5">5-min Welcome Video - Coming Soon</p>
                    </div>
                  </InactiveLink>
                  <InactiveLink
                    title="Member Handbook coming soon"
                    className={cn(
                      "group relative flex items-center gap-4 rounded-xl border border-border/80 bg-card/90 p-5 shadow-card backdrop-blur-sm",
                      inactiveLinkClassName,
                    )}
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                      <UserPlus className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">Member Handbook - Coming Soon</p>
                      <p className="text-xs text-muted-foreground mt-0.5">PDF · Onboarding Guide - Coming Soon</p>
                    </div>
                  </InactiveLink>
                </div>
              </div>

              <div className="rounded-2xl bg-card/90 border border-border/80 p-7 shadow-elegant backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Get Started in 3 Steps
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
                        {s.href.startsWith("http") ? (
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-block text-xs font-semibold text-primary hover:underline"
                          >
                            {s.cta} →
                          </a>
                        ) : (
                          <SiteLink
                            target={{ type: "route", path: s.href as "/projects" }}
                            className="mt-2 inline-block text-xs font-semibold text-primary hover:underline"
                          >
                            {s.cta} →
                          </SiteLink>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-20">
              <h3 className="font-display text-2xl font-bold text-foreground">Engagement Levels</h3>
              <p className="mt-2 text-muted-foreground">Find the level of involvement that fits you.</p>
              <div className="mt-8 grid gap-5 grid-cols-2 md:grid-cols-4">
                {levels.map((l) => (
                  <div
                    key={l.name}
                    className="rounded-xl border border-border/80 bg-card/90 p-4 shadow-card backdrop-blur-sm hover:shadow-elegant transition-smooth"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-accent">
                      <l.icon className="h-4 w-4" />
                    </div>
                    <p className="mt-3 font-display text-base font-bold text-foreground">{l.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default MembershipPage;
