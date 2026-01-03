"use client";
import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const loading = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Total <span className="text-amber-500">...</span> Foods
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-6 px-6">
        {[1, 2, 3, 4, 5, 6].map((_, i: number) => (
          <SkeletonCard key={i}></SkeletonCard>
        ))}
      </div>
    </>
  );
};

export default loading;
