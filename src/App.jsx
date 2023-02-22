import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { getProducts } from "./services/products";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/cart";

function App() {
  const products = getProducts();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
