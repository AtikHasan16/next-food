import React from "react";

const LocationsSection = () => {
  return (
    <section className="py-20 px-4  text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Find Next-Food in these cities! We are expanding to bring delicious
        meals closer to you.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        <div className=" rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">New York</h3>
          <p>123 Main St, Manhattan, NY</p>
        </div>
        <div className=" rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">Los Angeles</h3>
          <p>456 Sunset Blvd, Los Angeles, CA</p>
        </div>
        <div className=" rounded-lg p-6 flex-1">
          <h3 className="text-xl font-semibold mb-2">Chicago</h3>
          <p>789 Lake Shore Dr, Chicago, IL</p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
