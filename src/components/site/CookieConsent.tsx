import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeAnchorLink } from "@/components/HomeAnchorLink";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const STORAGE_KEY = "isoc-nv-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
      else {
        const c = JSON.parse(stored) as Consent;
        setAnalytics(!!c.analytics);
        setMarketing(!!c.marketing);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (consent: Omit<Consent, "timestamp" | "necessary">) => {
    const payload: Consent = {
      necessary: true,
      analytics: consent.analytics,
      marketing: consent.marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setVisible(false);
    setPrefsOpen(false);
  };

  const acceptAll = () => save({ analytics: true, marketing: true });
  const rejectAll = () => save({ analytics: false, marketing: false });
  const savePrefs = () => save({ analytics, marketing });

  if (!visible && !prefsOpen) {
    return (
      <button
        onClick={() => setPrefsOpen(true)}
        aria-label="Cookie preferences"
        className="fixed bottom-4 left-4 z-40 grid h-10 w-10 place-items-center rounded-full bg-background border border-border shadow-elegant text-muted-foreground hover:text-primary transition-smooth"
      >
        <Cookie className="h-4 w-4" />
      </button>
    );
  }

  return (
    <>
      {visible && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-elegant p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="hidden sm:grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
                <Cookie className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-base font-semibold text-foreground">
                  We value your privacy
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                  ISOC Nevada uses cookies that are strictly necessary to operate this site. With
                  your consent, we also use analytics cookies to understand how the chapter site is
                  used, in line with the GDPR and the ePrivacy Directive. You can change your
                  choices any time.{" "}
                  <HomeAnchorLink href="#privacy" className="text-primary underline-offset-2 hover:underline">
                    Privacy &amp; Cookie Policy
                  </HomeAnchorLink>
                  .
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="hero" size="sm" onClick={acceptAll}>
                    Accept all
                  </Button>
                  <Button variant="outline" size="sm" onClick={rejectAll}>
                    Reject non-essential
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setPrefsOpen(true)}>
                    Manage preferences
                  </Button>
                </div>
              </div>
              <button
                onClick={rejectAll}
                aria-label="Dismiss and reject non-essential cookies"
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={prefsOpen} onOpenChange={setPrefsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Choose which categories of cookies you allow. Strictly necessary cookies are always
              on as they are required for the site to function.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-sm">Strictly necessary</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Required for navigation, security, and remembering your consent choice.
                </p>
              </div>
              <Switch checked disabled aria-label="Strictly necessary cookies (always on)" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-sm">Analytics</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Aggregated, privacy-respecting metrics about how visitors use isocnv.org.
                </p>
              </div>
              <Switch checked={analytics} onCheckedChange={setAnalytics} aria-label="Analytics cookies" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border p-4">
              <div>
                <p className="font-medium text-sm">Outreach &amp; embeds</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Allow embeds from partners (e.g., Zeffy donations, event maps) that may set
                  cookies.
                </p>
              </div>
              <Switch checked={marketing} onCheckedChange={setMarketing} aria-label="Outreach cookies" />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={rejectAll}>
              Reject non-essential
            </Button>
            <Button variant="hero" onClick={savePrefs}>
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
