import useCart from "../hooks/useCart";
import { RemoveFromCartIcon, AddToCartIcon } from "./Icons";

export default function ProductItem({ product }) {
  const { addToCart, removeFromCart, checkProductInCart } = useCart();

  const isProductInCart = checkProductInCart(product);

  return (
    <li key={product.id} className="product">
      <img src={product.image} alt={product.name} />
      <div>
        <strong>{product.name}</strong> - ${product.price}
      </div>
      <div className="button_container">
        <button
          style={{
            backgroundColor: isProductInCart ? "red" : "#09f",
          }}
          onClick={() =>
            isProductInCart ? removeFromCart(product) : addToCart(product)
          }
          title="Agregar al carrito"
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  );
}
