"use client";

import React from "react";
import { Card, CardBody, CardFooter, Skeleton } from "@heroui/react";

export default function ReviewLoading() {
  return (
    <Card className="w-full border-2 border-warning/20 bg-transparent">
      <CardBody className="p-4 flex flex-col gap-4">
        {/* Header Skeleton */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Skeleton className="flex rounded-full w-12 h-12" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24 rounded-lg" />
              <Skeleton className="h-2 w-16 rounded-lg" />
            </div>
          </div>
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>

        {/* Text Body Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full rounded-lg" />
          <Skeleton className="h-3 w-full rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </CardBody>

      {/* Footer Skeleton */}
      <CardFooter className="flex-col items-start gap-4 bg-black/50 p-4">
        <div className="w-full flex justify-between">
          <div className="space-y-2">
            <Skeleton className="h-2 w-20 rounded-lg" />
            <Skeleton className="h-2 w-32 rounded-lg" />
          </div>
          <Skeleton className="h-4 w-8 rounded-lg" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl" />
      </CardFooter>
    </Card>
  );
}
