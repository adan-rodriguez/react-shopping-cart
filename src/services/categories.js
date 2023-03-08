import { categories } from "../mocks/categories";

export async function getCategories() {
  return categories;
}

// export async function getCategories() {
//   const response = await fetch("https://dummyjson.com/products/categories");
//   const categories = await response.json();
//   return categories;
// }
