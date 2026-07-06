import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQty,
  decreaseQty,
} from "../features/cart/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

   const cartItem = useSelector((state)=>
    state.cart.items.find((item) => item.id === product.id)
  );

    return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.measurementUnit}</p>
      <h2>₹{product.sellingPrice}</h2>

        {!cartItem ? (
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        ) : (
          <div>
            <button onClick={() => dispatch(decreaseQty(product.id))}>
              -
            </button>
            <span>{cartItem.qty}</span>
            <button onClick={() => dispatch(increaseQty(product.id))}>
              +
            </button>
          </div>
        )}
      </div>
    );

};
