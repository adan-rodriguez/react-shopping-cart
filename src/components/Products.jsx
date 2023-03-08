import ProductItem from "./ProductItem";

export default function Products({ products }) {
  return (
    <main>
      <div className="products">
        {products.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          <ul>
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
