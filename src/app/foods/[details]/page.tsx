import FoodDetailsCard from "@/components/FoodDetailsCard";
import { FoodDetailsType } from "@/types";

// 1. Define the Interface based on your JSON data

const getSingleFood = async (id: string) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data?.details;
};

const FoodDetails = async ({ params }: { params: { details: string } }) => {
  // Await params in Next.js 15+
  const { details } = await params;
  const food: FoodDetailsType = await getSingleFood(details);

  return <FoodDetailsCard food={food}></FoodDetailsCard>;
};

export default FoodDetails;
