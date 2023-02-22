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
