import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/SiteLink";

const EncryptionPrivacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container">
            <Button variant="ghost" className="mb-8" asChild>
              <SiteLink target={{ type: "section", section: "projects" }} className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to projects
              </SiteLink>
            </Button>

            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resources</span>
              <h1 className="mt-3 font-display text-4xl font-bold text-foreground md:text-5xl">Encryption & Privacy</h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Guidance and resources on encryption, privacy practices, and how ISOC Nevada approaches protecting
                community members' data. This page is a placeholder while content is being prepared.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container space-y-8">
            <div className="rounded-lg border border-border bg-card p-6 shadow-card md:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This page will collect best practices, tools, and guidance about end-to-end encryption, data
                minimization, and privacy-preserving approaches relevant to our chapter and the broader Nevada
                community.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-subtle p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Coming soon</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">Encryption & Privacy resources in progress</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Content for this section is being prepared. Check back later for detailed guidance, recommended
                tools, and links to external resources. In the meantime, if you'd like to contribute or share a
                resource, please reach out through the projects page.
              </p>

              <div className="mt-6">
                <Button asChild>
                  <Link to="/projects">View projects</Link>
                </Button>
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

export default EncryptionPrivacy;
