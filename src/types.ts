// src/types/index.ts
export interface FoodItem {
  id: number;
  title: string;
  catId: number;
  foodImg: string;
  price: number;
  category: string;
}

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
