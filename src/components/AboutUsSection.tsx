import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-20 px-4  text-white text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl mx-auto text-lg mb-6">
        We are passionate food lovers dedicated to bringing you the best
        culinary experiences. Our mission is to connect people through food,
        inspire creativity in the kitchen, and celebrate diverse cuisines from
        around the world.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className=" rounded-lg p-6 flex-1 bg-stone-800">
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p>
            Chefs, developers, and foodies working together to deliver quality
            and taste.
          </p>
        </div>
        <div className=" rounded-lg p-6 flex-1 bg-stone-800">
          <h3 className="text-xl font-semibold mb-2 ">Our Mission</h3>
          <p>
            To make great food accessible, enjoyable, and shareable for
            everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
