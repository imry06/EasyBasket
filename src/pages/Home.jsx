import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";
import Products from "../pages/Products"

import ProductList from "../components/ProductList";

// data 
import dalAndPulses from "../data/dalAndPulses";

export default function Home() {
  return (
    <div className="container">
      <Products />

      <ProductList category={"Dal & Pulses"} products={dalAndPulses} />
    </div>
  );
}
