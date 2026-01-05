// src/types/index.ts
export interface FoodItem {
  id: number;
  title: string;
  catId: number;
  foodImg: string;
  price: number;
  category: string;
}
// Detailed type for food items
export interface FoodDetailsType {
  id: number;
  title: string;
  category: string;
  area: string;
  catId: number;
  foodImg: string;
  price: number;
  video: string;
}

// Type for review items
export interface Review {
  id: number;
  user: string;
  email: string;
  photo: string;
  rating: number;
  review: string;
  // array of emails
  likes: string[];
  date: string;
}
