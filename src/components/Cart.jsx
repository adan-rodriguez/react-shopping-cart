import { useId } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { CartIcon, ClearCartIcon } from "./Icons";

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="cart" id={cartCheckboxId} hidden />

      <div className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </div>
    </>
  );
}
