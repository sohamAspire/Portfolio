import { DockProvider } from "@/providers/DockProvider";
import TechStack from "./(screens)/_TechnicalSection";
import HeroSection from "./(screens)/_HeroSection";
import ParallaxLayout from "@/components/shared/Parallax";
import ContactUs from "./(screens)/_ContactUs";
import AboutMe from "./(screens)/_AboutMe";
// import MountainParallax from "./(screens)/_HeroTest";

export default function Home() {
  return (
    <section className="relative h-full min-h-screen container max-w-[1920px] mx-auto">
      <DockProvider />
      {/* <MountainParallax /> */}
      <ParallaxLayout
        aboutSection={<AboutMe />}
        technicalSection={<TechStack />}
        heroSection={<HeroSection />}
        contactUsSection={<ContactUs />}
      />
    </section>
  );
}
