import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-nevada.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Nevada desert landscape with a digital connectivity network overlay"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-surface-slate/40" />
      </div>

      <div className="container relative py-24 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            The Internet is for Everyone — 2030 Strategy
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
            Securing Nevada's Digital Future:{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              An Internet for Everyone.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            We're building an open, globally-connected, secure, and trustworthy Internet — from Reno to
            Las Vegas to the most remote corners of rural Nevada. Join the movement closing
            the digital divide and defending encryption.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://forms.gle/NgvHEqj1LFFQ9NJ7A" target="_blank" rel="noreferrer">
                Join the Chapter
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/projects">Explore Our Work</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              { k: "17", v: "Nevada counties served" },
              { k: "100%", v: "Volunteer-driven" },
              { k: "2026", v: "Action Plan aligned" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-accent/70 pl-4">
                <dt className="font-display text-3xl font-bold text-white">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
