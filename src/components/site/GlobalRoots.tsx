import { Globe2, Network, FileCode2 } from "lucide-react";

export const GlobalRoots = () => {
  return (
    <section id="global" className="relative py-20 md:py-28 bg-surface-slate text-surface-slate-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(hsl(var(--accent))_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Our Global Roots
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
            A Nevada chapter of a worldwide movement for the open Internet.
          </h2>
          <p className="mt-5 text-white/75 leading-relaxed">
            ISOC Nevada is a local chapter of the{" "}
            <a
              href="https://www.internetsociety.org/mission/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Internet Society
            </a>
            , a global non-profit advancing the development of the Internet as a force for good. We
            channel ISOC's worldwide expertise — and the open standards work of the IETF — into
            policy, infrastructure, and community here in the Silver State.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Our work follows ISOC's <strong className="text-white">2030 Strategy</strong>: an
            Internet that is <em>open, globally connected, secure, and trustworthy</em> — with
            access that is affordable, reliable, and resilient for everyone.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            {
              icon: Globe2,
              title: "ISOC Global",
              body:
                "Aligned with the Internet Society's 2030 Strategy and 2026 Action Plan, coordinating with chapters in 130+ countries.",
            },
            {
              icon: FileCode2,
              title: "IETF & Open Standards",
              body:
                "We support the Internet Engineering Task Force and the open, voluntary standards (TCP/IP, HTTP, TLS) that keep the Internet interoperable.",
            },
            {
              icon: Network,
              title: "Internet Society Foundation",
              body:
                "Connecting Nevada projects to grant programs that strengthen community networks, encryption, and Internet resilience.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
