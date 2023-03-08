import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const obtainProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    obtainProducts();
  }, []);
  return { products };
}
