
import ProductItem from '../components/ProductItem';
import dalAndPulses from '../data/dalAndPulses';

const Products = () => {
  return (
    <div>
      <h2>Dal & Pulses</h2>
      <div className="product-grid">
        {dalAndPulses.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products