import { useId } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { CartIcon, ClearCartIcon } from "./Icons";

export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" name="cart" id={cartCheckboxId} hidden />

      <div className="cart">
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        {cart.length !== 0 ? (
          <button onClick={clearCart} title="Vaciar el carrito">
            <ClearCartIcon />
          </button>
        ) : (
          <p>El carrito está vacío</p>
        )}
      </div>
    </>
  );
}
