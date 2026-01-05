"use client";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "sonner";

const AddToCartButton = () => {
  const [carting, setCarting] = useState<boolean>(false);
  const handleAdd = () => {
    setCarting(true);
    return toast.success("Added to cart!");
  };

  return (
    <div>
      <Button
        onPress={handleAdd}
        className="w-full"
        color={!carting ? "primary" : "success"}
        variant="solid"
        disabled={carting}
      >
        {carting ? "Added" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
