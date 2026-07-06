import AkkaAnnaCarousel from "../components/AkkaAnnaCarousel";

import ProductList from "../components/ProductList";

// data
import dalAndPulses from "../data/dalAndPulses";
import riceAttaAndGrains from "../data/riceAttaAndGrains";
import oilAndGhee from "../data/oilAndGhee";
import spicesAndMasala from "../data/spicesAndMasala";
import dairyAndBakery from "../data/dairyAndBakery";

export default function Home() {
  return (
    <div className="container">
      <AkkaAnnaCarousel />
      <ProductList category={"Dal & Pulses"} products={dalAndPulses} />
      <ProductList category={"Rice, Atta & Grains"} products={riceAttaAndGrains} />
      <ProductList category={"Oil & Ghee"} products={oilAndGhee} />
      <ProductList category={"Spices & Masala"} products={spicesAndMasala} />
      <ProductList category={"Dairy & Bakery"} products={dairyAndBakery} />
    </div>
  );
}
