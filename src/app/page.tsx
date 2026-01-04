import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutUsSection from "@/components/AboutUsSection";
import LocationsSection from "@/components/LocationsSection";

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
      {/* About Us Section */}
      <section id="about-us" className="snap-start py-20 px-4">
        <AboutUsSection />
      </section>
      {/* Locations Section */}
      <section id="locations" className="snap-start  py-20 px-4 ">
        <LocationsSection />
      </section>
      {/* Features Section with background and separation */}
      <section id="features" className="snap-start py-20 px-4">
        <FeaturesSection />
      </section>
    </main>
  );
}
