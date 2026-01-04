import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <AboutSection />
      <FeaturesSection />
    </>
  );
}
