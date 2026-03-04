import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ScreenshotsSection from "@/components/landing/ScreenshotsSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
