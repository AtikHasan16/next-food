import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className=" min-h-screen w-full">
      {/* Hero Section with scroll snap */}
      <section
        id="hero"
        className="snap-start min-h-[80vh] flex items-center justify-center"
      >
        <Hero />
      </section>
      {/* About Section with background and separation */}
      <section id="about" className="snap-start py-20 px-4">
        <AboutSection />
      </section>
      {/* Features Section with background and separation */}
      <section id="features" className="snap-start py-20 px-4">
        <FeaturesSection />
      </section>
    </main>
  );
}
