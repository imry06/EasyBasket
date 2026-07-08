import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

import "../css/cart-item.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <img src={item.image} alt="" />
        <h3>{item.name}</h3>
      </div>

      <div className="cart-item-prices">
        <p>₹{item.quantity * item.sellingPrice}</p>
        <p>₹{item.quantity * item.mrp}</p>
      </div>

      <div className="cart-item-actions">
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

         <strong>{item.quantity}</strong>

        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}
