import { useDispatch } from "react-redux";

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>

      <p>₹{item.price}</p>

      <button
        onClick={() => dispatch(decreaseQty(item.id))}
      >
        -
      </button>

      {item.quantity}

      <button
        onClick={() => dispatch(increaseQty(item.id))}
      >
        +
      </button>

      <button
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}