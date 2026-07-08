import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

import "../css/cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const profile = useSelector((state) => state.profile.profile);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalMRP = cart.reduce(
    (sum, item) => sum + item.mrp * item.quantity,
    0,
  );

  const totalSellingPrice = cart.reduce(
    (sum, item) => sum + item.sellingPrice * item.quantity,
    0,
  );

  const totalSaved = totalMRP - totalSellingPrice;
  const deliveryCharge = totalSellingPrice >= 500 ? 0 : 40;
  const grandTotal = totalSellingPrice + deliveryCharge;

// Handle Place Order
const handlePlaceOrder = () => {
  const businessNumber = "+919369005901"; // Replace with your WhatsApp Business number

  const items = cart
    .map(
      (item, index) => `
${index + 1}. ${item.name}
Qty : ${item.quantity}
MRP : ₹${item.mrp}
Selling : ₹${item.sellingPrice}
Total : ₹${(item.sellingPrice * item.quantity).toFixed(2)}
`
    )
    .join("\n");

  const message = `
🛒 *NEW ORDER*

👤 *Customer Details*
Name : ${profile.fullName}
Phone : ${profile.phone}

📍 *Delivery Address*
${[
          profile.houseNo,
          profile.floor && `Floor ${profile.floor}`,
          profile.apartment,
          profile.building,
          profile.street,
          profile.landmark,
          profile.area,
          profile.locality,
        ]
          .filter(Boolean)
          .join(", ")}

━━━━━━━━━━━━━━

🛍️ *Order Items*

${items}

━━━━━━━━━━━━━━

🧾 Total Items : ${totalItems}

💵 Total MRP : ₹${totalMRP.toFixed(2)}
🎁 Discount : ₹${totalSaved.toFixed(2)}
🚚 Delivery : ${
    deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`
  }

💰 *Grand Total : ₹${grandTotal.toFixed(2)}*

Thank you ❤️
`;

  const url = `https://wa.me/${businessNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};

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
            <span className="saved">- ₹{totalSaved.toFixed(2)}</span>
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

          <button className="place-order-btn" onClick={()=>handlePlaceOrder()}>Place Order</button>

          <p className="saving-text">
            🎉 You saved ₹{totalSaved.toFixed(2)} on this order.
          </p>
        </div>
      </div>
    </div>
  );
}
