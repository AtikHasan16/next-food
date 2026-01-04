import React from "react";
import { Button } from "@heroui/button";

const Hero = () => {
  return (
    <div>
      <div className="text-center py-40 space-y-4">
        <h1 className="text-6xl font-bold">Welcome to Next-Food</h1>
        <p className="text-lg">Your one-stop solution for delicious meals!</p>
        <Button color="primary">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
