"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Chip, Card, CardBody } from "@heroui/react";
import { FoodDetailsType } from "@/types";
const FoodDetailsCard = ({ food }: { food: FoodDetailsType }) => {
  return (
    <div>
      <div className="w-full min-h-screen flex items-center justify-center p-6">
        <Card
          className="w-full max-w-5xl shadow-none bg-transparent border-2 border-warning text-white lg:shadow-md "
          radius="lg"
        >
          <CardBody className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative h-75 lg:h-112.5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={food.foodImg}
                alt={food.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Side: Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
              {/* Header: Badges & Title */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Chip
                    color="secondary"
                    size="sm"
                    className="uppercase font-bold"
                  >
                    {food.category}
                  </Chip>
                  <Chip color="primary" size="sm" className="uppercase">
                    {food.area}
                  </Chip>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground">
                  {food.title}
                </h1>
              </div>

              {/* Price */}
              <div>
                <p className="text-small uppercase font-bold mb-1">Price</p>
                <p className="text-4xl font-bold text-success">${food.price}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {/* Primary Add Button */}
                <Button
                  size="lg"
                  color="primary"
                  variant="solid"
                  className="font-semibold w-full sm:w-auto"
                >
                  Add to Cart
                </Button>

                {/* Warning Transparent Watch Button */}
                {/* Using variant="ghost" gives a transparent background with a border */}
                {food.video && (
                  <Button
                    as={Link}
                    href={food.video}
                    target="_blank"
                    size="lg"
                    color="warning"
                    variant="ghost"
                    className="font-semibold w-full sm:w-auto"
                  >
                    Watch Video
                  </Button>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
