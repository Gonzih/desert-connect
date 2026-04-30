import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trinity } from "@/components/site/Trinity";
import { GlobalRoots } from "@/components/site/GlobalRoots";
import { Events } from "@/components/site/Events";
import { Membership } from "@/components/site/Membership";
import { Programs } from "@/components/site/Programs";
import { Donate } from "@/components/site/Donate";
import { Resources } from "@/components/site/Resources";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Trinity />
        <GlobalRoots />
        <Events />
        <Membership />
        <Programs />
        <Donate />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
