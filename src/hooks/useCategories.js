import { useEffect, useState } from "react";
import { getCategories } from "../services/categories";

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  const obtainCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    obtainCategories();
  }, []);
  return { categories };
}
