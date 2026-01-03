"use client";

import React from "react";
import { Card, CardBody, CardFooter, Skeleton } from "@heroui/react";

export default function SkeletonCard() {
  return (
    <Card className="w-full  space-y-5 p-4 bg-gray-700" radius="lg">
      {/* Image Skeleton */}
      <CardBody className="p-0">
        <Skeleton className="rounded-lg">
          <div className="h-50 w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardBody>

      {/* Content Skeleton */}
      <CardFooter className="flex-col items-start gap-3 p-0 pt-2">
        {/* Title & Price Placeholder */}
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex flex-col gap-2 w-3/4">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-4 w-3/5 rounded-lg"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg"></div>
            </Skeleton>
          </div>
          <Skeleton className="w-12 rounded-lg">
            <div className="h-6 w-12 rounded-lg"></div>
          </Skeleton>
        </div>

        {/* Buttons Placeholder */}
        <div className="w-full flex gap-2 mt-2">
          <Skeleton className="flex-1 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
          </Skeleton>
          <Skeleton className="flex-1 rounded-lg">
            <div className="h-10 w-full rounded-lg"></div>
          </Skeleton>
        </div>
      </CardFooter>
    </Card>
  );
}
