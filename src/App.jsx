import Products from "./components/Products";
import Header from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/cart";
import useProducts from "./hooks/useProducts";

function App() {
  const { products } = useProducts();

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
