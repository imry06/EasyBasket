// import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";

import ProductList from "../components/ProductList";

// data
import dalAndPulses from "../data/dalAndPulses";
import riceAttaAndGrains from "../data/riceAttaAndGrains";


export default function Home() {
  return (
    <div className="container">
      <ProductList category={"Dal & Pulses"} products={dalAndPulses} />
      <ProductList category={"Rice, Atta & Grains"} products={riceAttaAndGrains} />
    </div>
  );
}
