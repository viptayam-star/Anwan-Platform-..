import { Decor } from "@/components/Decor";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SimulatorSandbox } from "@/components/SimulatorSandbox";
import { CentersSection } from "@/components/sections/CentersSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Decor />
      <Header />
      <main>
        <HeroSection />
        <SimulatorSandbox />
        <CentersSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <FooterSection />
      <ChatWidget />
    </>
  );
}
