import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import GallerySection from "@/components/GallerySection";
import PhilosophySection from "@/components/PhilosophySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GallerySection />
      <PhilosophySection />
      <FooterSection />
    </main>
  );
};

export default Index;
