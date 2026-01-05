"use client";

import React from "react";
import { Card, CardBody, CardFooter, Button, User, Chip } from "@heroui/react";
import { Heart } from "lucide-react"; // npm install lucide-react

interface ReviewItem {
  id: number;
  user: string;
  email: string;
  photo: string;
  rating: number;
  review: string;
  likes: string[];
  date: string;
}

export default function ReviewCard({ item }: { item: ReviewItem }) {
  return (
    <Card shadow="sm" className="w-full border-2 border-warning bg-transparent">
      <CardBody className="p-4 flex flex-col gap-3">
        {/* User Info Header */}
        <div className="flex justify-between items-start">
          <User
            name={item.user}
            description={new Date(item.date).toLocaleDateString()}
            avatarProps={{
              src: item.photo,
              size: "md",
              isBordered: true,
              color: "warning",
            }}
          />
          <Chip size="sm" variant="flat" color="warning" className="font-bold">
            ★ {item.rating}/5
          </Chip>
        </div>

        {/* Review Text */}
        <p className=" text-sm leading-relaxed line-clamp-4 italic">
          &quot;{item.review}&quot;
        </p>
      </CardBody>

      {/* Footer following your Food Card pattern */}
      <CardFooter className="flex-col items-start gap-3 bg-black border-t border-warning/20">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-warning text-xs font-bold uppercase tracking-wider">
              Customer Review
            </span>
            <span className="text-tiny text-default-400">{item.email}</span>
          </div>
          <div className="flex items-center gap-1 text-danger font-bold">
            <Heart size={16} fill="currentColor" />
            <span>{item.likes.length}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          fullWidth
          variant="solid"
          color="primary"
          startContent={<Heart size={18} />}
          onPress={() => console.log("Liked review:", item.id)}
          className="font-bold"
        >
          Like Review
        </Button>
      </CardFooter>
    </Card>
  );
}
