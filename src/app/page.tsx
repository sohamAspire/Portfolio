import { DockProvider } from "@/providers/DockProvider";
import TechStack from "./(screens)/_TechnicalSection";
import HeroSection from "./(screens)/_HeroSection";
import ParallaxLayout from "@/components/shared/Parallax";

export default function Home() {
  return (
    <section className="relative h-full min-h-screen container max-w-[1920px] mx-auto">
      <DockProvider />
      <ParallaxLayout
        technicalSection={<TechStack />}
        heroSection={<HeroSection />}
      />
    </section>
  );
}
