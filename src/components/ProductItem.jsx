import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

import "../css/product-item.css";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id),
  );

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>

      <div className="product-prices">
        <p className="mrp">₹{product.mrp}</p>
        <h2 className="selling-price">₹{product.sellingPrice}</h2>
      </div>

      <p className="off"> {product.off} OFF</p>

      {!cartItem ? (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      ) : (
        <div className="qty-box">
          <div className="qty-buttons">
            <button onClick={() => dispatch(decreaseQty(product.id))}>-</button>
            <button onClick={() => dispatch(increaseQty(product.id))}>+</button>
          </div>

          <span>Qty : {cartItem.quantity}</span>
        </div>
      )}
    </div>
  );
}
