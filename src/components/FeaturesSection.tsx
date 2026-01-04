import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4  text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className="bg-stone-800 rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">Curated Foods</h3>
          <p>
            Handpicked dishes from top chefs and home cooks, ensuring quality
            and taste in every bite.
          </p>
        </div>
        <div className="bg-stone-800 rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">Easy Navigation</h3>
          <p>
            Find your favorite meals quickly with our user-friendly interface
            and smart search features.
          </p>
        </div>
        <div className="bg-stone-800 rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">Community Reviews</h3>
          <p>
            Read and share honest reviews from fellow food lovers to make
            informed choices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
