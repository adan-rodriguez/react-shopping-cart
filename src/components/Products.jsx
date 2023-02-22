import ProductItem from "./ProductItem";

export default function Products({ products }) {
  return (
    <main>
      <div className="products">
        <ul>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </main>
  );
}
