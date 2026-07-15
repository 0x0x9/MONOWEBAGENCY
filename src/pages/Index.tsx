import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ForWho } from "@/components/site/ForWho";
import { Includes } from "@/components/site/Includes";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Work } from "@/components/site/Work";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Start } from "@/components/site/Start";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ForWho />
      <Includes />
      <HowItWorks />
      <Work />
      <Testimonials />
      <Pricing />
      <Start />
      <Footer />
    </main>
  );
};

export default Index;
