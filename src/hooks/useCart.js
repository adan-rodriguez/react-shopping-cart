import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export default function useCart() {
  const cart = useContext(CartContext);

  // esta es una buena práctica por si el elemento no tiene acceso al contexto
  if (cart === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const checkProductInCart = (product) =>
    cart.cart.some((item) => item.id === product.id);

  return { ...cart, checkProductInCart };
}
