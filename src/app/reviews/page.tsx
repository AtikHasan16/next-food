"use client";

import { Review } from "@/types";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  console.log(reviews);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews));
  }, []);
  return <div className="">Reviews {reviews.length}</div>;
};

export default Reviews;
