import useCart from "../hooks/useCart";
import { RemoveFromCartIcon } from "./Icons";

export default function CartItem({ id, image, name, price, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <li className="cart-item">
      <img src={image} alt={name} />
      <div>
        <strong>{name}</strong> - ${price}
      </div>
      <div className="quantity-cart">
        <span>Cantidad: {quantity}</span>
        <button onClick={() => increaseQuantity(id)}>+</button>
        <button onClick={() => decreaseQuantity(id)}>-</button>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        title="Sacar del carrito"
        style={{ backgroundColor: "red" }}
      >
        <RemoveFromCartIcon />
      </button>
    </li>
  );
}
