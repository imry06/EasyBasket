import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div className="container">
      <h1>All Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}