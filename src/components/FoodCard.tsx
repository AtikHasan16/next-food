"use client";

import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FoodItem } from "@/types";
// Adjust path as needed

interface FoodCardProps {
  item: FoodItem;
  priority?: boolean;
}

export default function FoodCard({ item, priority = false }: FoodCardProps) {
  return (
    <Card shadow="sm" className="w-full border-2 border-warning ">
      {/* Card Body - Image Area */}
      <CardBody className="overflow-visible p-0">
        <div className="relative w-full h-50">
          <Image
            src={item.foodImg}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-lg"
            priority={priority} // Lazy load by default
          />
        </div>
      </CardBody>

      {/* Card Footer - Content & Actions */}
      <CardFooter className="text-small justify-between flex-col items-start gap-3 bg-black">
        {/* Title and Badge */}
        <div className="w-full flex flex-col justify-between gap-2">
          <div className="flex items-center gap-1">
            <b className="text-lg line-clamp-1">{item.title}</b>
            <p className=" uppercase font-bold text-warning">
              ({item.category})
            </p>
          </div>
          <Chip className="bg-success font-bold">${item.price}</Chip>
        </div>

        {/* Buttons */}
        <div className="w-full flex gap-2 mt-2">
          <Button
            className="flex-1"
            color="primary"
            variant="solid"
            onPress={() => console.log("Added to cart:", item.id)}
          >
            Add to Cart
          </Button>

          <Button
            as={Link}
            href={`/foods/${item.id}`} // Adjust route to match your structure
            className="flex-1"
            color="warning"
            variant="bordered"
          >
            Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
