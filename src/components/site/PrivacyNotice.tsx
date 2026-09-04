import { Shield, Lock, FileText, Mail } from "lucide-react";
import { displayEmail, mailtoPrivacy, CHAPTER_DOMAIN_EMAILS } from "@/lib/siteEmails";

export const PrivacyNotice = () => {
  return (
    <section id="privacy" className="border-t border-border bg-muted/30">
      <div className="container py-16 max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
            <Shield className="h-5 w-5" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Privacy &amp; Cookie Policy
          </h2>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The Internet Society Nevada Chapter ("ISOC Nevada", "we") is committed to data minimization
          and the principles of the EU General Data Protection Regulation (GDPR), the UK GDPR, and
          comparable U.S. state laws (CCPA/CPRA). This notice summarizes how we handle personal
          data on isocnv.org.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg border border-border bg-background p-5">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display font-semibold">What we collect</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Newsletter email (with consent), membership form details, and aggregated analytics if
              you allow them. We do not sell personal data.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-background p-5">
            <Lock className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display font-semibold">Legal basis</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Consent (Art. 6(1)(a) GDPR) for analytics and outreach; legitimate interest for
              securing the site; contract for membership processing.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-background p-5">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display font-semibold">Your rights</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Access, rectification, erasure, restriction, portability, and objection. EU/UK
              residents may lodge complaints with their supervisory authority.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-background p-5">
            <Mail className="h-5 w-5 text-primary" />
            <h3 className="mt-3 font-display font-semibold">Contact the chapter</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Email{" "}
              <a href={mailtoPrivacy()} className="text-primary hover:underline">
                {displayEmail(CHAPTER_DOMAIN_EMAILS.privacy)}
              </a>{" "}
              for any data request. We respond within 30 days.
            </p>
          </article>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          You can change or withdraw your cookie consent at any time using the cookie icon in the
          lower-left corner of the site.
        </p>
      </div>
    </section>
  );
};
