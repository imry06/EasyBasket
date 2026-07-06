// import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";

import ProductList from "../components/ProductList";

// data
import dalAndPulses from "../data/dalAndPulses";

export default function Home() {
  return (
    <div className="container">
      <ProductList category={"Dal & Pulses"} products={dalAndPulses} />
    </div>
  );
}
