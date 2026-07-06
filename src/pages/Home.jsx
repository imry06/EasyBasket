import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";

import ProductList from "../components/ProductList";

// data
import dalAndPulses from "../data/dalAndPulses";
import riceAttaAndGrains from "../data/riceAttaAndGrains";
import oilAndGhee from "../data/oilAndGhee";
import spicesAndMasala from "../data/spicesAndMasala";

export default function Home() {
  return (
    <div className="container">
      <AkkaAnnaCarousel />
      <ProductList category={"Dal & Pulses"} products={dalAndPulses} />
      <ProductList category={"Rice, Atta & Grains"} products={riceAttaAndGrains} />
      <ProductList category={"Oil & Ghee"} products={oilAndGhee} />
      <ProductList category={"Spices & Masala"} products={spicesAndMasala} />
    </div>
  );
}
