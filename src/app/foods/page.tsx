import FoodCard from "@/components/FoodCard";
import { FoodItem } from "@/types";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  return data;
};
const Foods = async () => {
  const foodsData = await getFoods();
  console.log(foodsData.foods);

  return (
    <div>
      <h1 className="text-4xl font-bold">
        Total <span className="text-amber-500">{foodsData.foods.length}</span>{" "}
        Foods
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-6 px-6">
        {foodsData.foods.map((item: FoodItem) => (
          <FoodCard key={item.id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Foods;
