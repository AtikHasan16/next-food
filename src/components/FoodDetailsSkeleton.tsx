"use client";
import React from "react";
import { Card, CardBody, Skeleton } from "@heroui/react";

export default function FoodDetailsSkeleton() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <Card
        className="w-full max-w-5xl shadow-none lg:shadow-md bg-gray-700"
        radius="lg"
      >
        <CardBody className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10">
          {/* Left Side: Image Skeleton */}
          <Skeleton className="w-full lg:w-1/2 h-75 lg:h-112.5 rounded-2xl">
            <div className="h-full w-full bg-default-300"></div>
          </Skeleton>

          {/* Right Side: Details Skeleton */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
            {/* Header: Badges & Title */}
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex gap-2">
                <Skeleton className="w-20 h-6 rounded-lg" />
                <Skeleton className="w-24 h-6 rounded-lg" />
              </div>

              {/* Title (Multi-line simulation) */}
              <div className="space-y-2">
                <Skeleton className="w-3/4 h-10 lg:h-12 rounded-lg" />
                <Skeleton className="w-1/2 h-10 lg:h-12 rounded-lg" />
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Skeleton className="w-12 h-4 rounded-lg" />
              <Skeleton className="w-28 h-10 rounded-lg" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Skeleton className="w-full sm:w-36 h-12 rounded-xl" />
              <Skeleton className="w-full sm:w-36 h-12 rounded-xl" />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
