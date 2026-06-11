import { useEffect, useState } from "react";
import { Sparkles, TicketPercent, X } from "lucide-react";
import metaLayerBlast from "@/assets/metalayer_blast.png";

const STORAGE_KEY = "isocnv-metalayer-blast-dismissed";

export const MetaLayerBlastPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const wasDismissed = window.localStorage.getItem(STORAGE_KEY) === "true";
    if (!wasDismissed) {
      const timer = window.setTimeout(() => setIsOpen(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="metalayer-popup-title"
    >
      <div className="relative grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-lg border border-primary/30 bg-background shadow-2xl md:grid-cols-[1.15fr_0.85fr]">
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close Meta-Layer course notice"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="bg-black">
          <img
            src={metaLayerBlast}
            alt="Meta-Layer Certification Course details and QR code"
            className="h-full max-h-[52vh] w-full object-contain md:max-h-none"
          />
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            </div>

        <h2
            id="metalayer-popup-title"
            className="mt-4 font-display text-2xl font-extrabold leading-tight text-foreground sm:text-3xl"
          >
            The future of the web is moving beyond the webpage.
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Join the <strong className="font-semibold text-foreground">Meta-Layer Certification Course</strong>,
            a 3-week asynchronous course with weekly live author-led sessions, replay access,
            AI-enabled annotation, community discussion, and a digital NFT book/passport experience.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Explore trust overlays, presence, context, agency, and what it means to help shape
            a more human-aligned internet.
          </p>

          <div className="mt-5 rounded-lg border border-primary/25 bg-primary/10 p-4">
            <div className="flex items-start gap-3">
              <TicketPercent className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Regular course cost: $249</p>
                <p className="mt-1 text-lg font-extrabold text-primary">
                 Discount ISOC Nevada community members.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use discount code{" "}
                  <span className="rounded bg-background px-2 py-1 font-mono font-semibold text-foreground">
                    isocnevadamember
                  </span>{" "}
                  at checkout.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Week 1:</strong> From Attention to Agency
            </li>
            <li>
              <strong className="text-foreground">Week 2:</strong> Building the Metaweb
            </li>
            <li>
              <strong className="text-foreground">Week 3:</strong> Our Noospheric Future
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.zeffy.com/en-US/ticketing/the-metaweb-book-nft-course"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Open flyer / scan QR
            </a>
            <button
              type="button"
              onClick={closePopup}
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Continue to site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
