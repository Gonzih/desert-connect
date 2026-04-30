import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trinity } from "@/components/site/Trinity";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Trinity />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
