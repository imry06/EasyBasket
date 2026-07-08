import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  // console.log(cart);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h3>My Cart</h3>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2>Total : ₹{total}</h2>
    </div>
  );
}