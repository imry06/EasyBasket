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

      <div className="product-prices">
        <h2 className="selling-price">₹{product.sellingPrice}</h2>
        <p className="mrp">₹{product.mrp}</p>
      </div>
      <p className="product-name">{product.name} {product.size}</p>

      <p className="off"> {product.off} OFF</p>

      {!cartItem ? (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart-btn"
        >
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      ) : (
        <div className="qty-box">
          <div className="qty-buttons">
            <button onClick={() => dispatch(decreaseQty(product.id))}>-</button>
            <span className="qty-count"> {cartItem.quantity}</span>
            <button onClick={() => dispatch(increaseQty(product.id))}>+</button>
          </div>
        </div>
      )}
    </div>
  );
}
