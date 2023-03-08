import { products } from "../mocks/products.json";

export function getProducts() {
  return products.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.thumbnail,
    price: product.price,
    category: product.category,
  }));
}

// export async function getProducts() {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   const { products } = data;
//   return products.map((product) => ({
//     id: product.id,
//     name: product.title,
//     image: product.thumbnail,
//     price: product.price,
//     category: product.category,
//   }));
// }
