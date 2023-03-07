export default function CartItem({ image, name, price, quantity, addToCart }) {
  return (
    <li>
      <img src={image} alt={name} />
      <div className="header-cart">
        <strong>{name}</strong> - ${price}
      </div>
      <div className="quantity-cart">
        <span>Cantidad: {quantity}</span>
        <button onClick={addToCart}>+</button>
      </div>
    </li>
  );
}
