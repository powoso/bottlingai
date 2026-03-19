import Hero from "@/components/Hero";
import WhyThisDomain from "@/components/WhyThisDomain";
import UseCases from "@/components/UseCases";
import Portfolio from "@/components/Portfolio";
import PremiumPositioning from "@/components/PremiumPositioning";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyThisDomain />
      <UseCases />
      <Portfolio />
      <PremiumPositioning />
      <CTASection />
      <Footer />
    </main>
  );
}
