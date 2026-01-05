"use client";

import ReviewCard from "@/components/ReviewCard";
import ReviewLoading from "@/components/ReviewLoading";
import { Review } from "@/types";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(reviews);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6 px-6">
        {[...Array(12)].map((_, i) => (
          <ReviewLoading key={i}></ReviewLoading>
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6 px-6">
      {reviews.map((item) => (
        <ReviewCard item={item} key={item.id}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;
