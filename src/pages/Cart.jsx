import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
// import "../css/cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalMRP = cart.reduce(
    (sum, item) => sum + item.mrp * item.quantity,
    0
  );

  const totalSellingPrice = cart.reduce(
    (sum, item) => sum + item.sellingPrice * item.quantity,
    0
  );

  const totalSaved = totalMRP - totalSellingPrice;

  const deliveryCharge = totalSellingPrice >= 500 ? 0 : 40;

  const grandTotal = totalSellingPrice + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="my-cart empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="my-cart">

      <h2>My Cart ({totalItems} Items)</h2>

      <div className="cart-container">

        {/* Left Side */}
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right Side */}
        <div className="order-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Total MRP</span>
            <span>₹{totalMRP.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span className="saved">
              - ₹{totalSaved.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>

            {deliveryCharge === 0 ? (
              <span className="free">FREE</span>
            ) : (
              <span>₹{deliveryCharge}</span>
            )}
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total Amount</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>

          <button className="place-order-btn">
            Place Order
          </button>

          <p className="saving-text">
            🎉 You saved ₹{totalSaved.toFixed(2)} on this order.
          </p>

        </div>

      </div>

    </div>
  );
}