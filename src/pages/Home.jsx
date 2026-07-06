import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Home() {
  return (
    <div className="container">
      {/* <AkkaAnnaCarousel /> */}

      <h2>All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
