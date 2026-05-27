import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trinity } from "@/components/site/Trinity";
import { GlobalRoots } from "@/components/site/GlobalRoots";
import { Events } from "@/components/site/Events";
import { Membership } from "@/components/site/Membership";
import { Programs } from "@/components/site/Programs";
import { Donate } from "@/components/site/Donate";
import { Resources } from "@/components/site/Resources";
import { PrivacyNotice } from "@/components/site/PrivacyNotice";
import { Footer } from "@/components/site/Footer";
import { CookieConsent } from "@/components/site/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* Metaweb Course — video banner */}
        <section className="bg-surface-slate py-16">
          <div className="container max-w-4xl flex flex-col items-center gap-6">
            <video
              src="https://course.metawebbook.com/begin-your-journey-v2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-xl shadow-2xl"
              style={{ aspectRatio: '16/9', objectFit: 'cover' }}
            />
            <a
              href="https://course.metawebbook.com/begin-your-journey"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 transition"
            >
              Your ISOC Nevada Membership includes a discounted rate. Enroll Now!
            </a>
          </div>
        </section>
        <Trinity />
        <GlobalRoots />
        <Events />
        <Membership />
        <Programs />
        <Donate />
        <Resources />
        <PrivacyNotice />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
