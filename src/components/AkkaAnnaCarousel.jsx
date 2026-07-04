import { useEffect, useState } from "react";
import "../css/akka-anna-carousel.css";

const slogans = [
  "🛒 Akka-Anna, Freshness at Your Doorstep!",
  "❤️ Trusted by Every Family.",
  "🌾 Groceries with Love & Care.",
  "⚡ Fast Delivery, Fair Prices.",
  "🏡 Your Neighborhood Grocery Partner.",
  "🥬 Fresh Vegetables, Everyday.",
  "🥛 Daily Essentials, Always Available.",
  "😊 One WhatsApp Message. Everything Delivered.",
];

export default function AkkaAnnaCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">

<div className="hero-image">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/035/573/433/small/delivery-man-riding-scooter-3d-illustration-express-delivery-3d-illustration-png.png"
          alt="Akka Anna"
        />
      </div>


         <div className="hero-content">
        <p key={index} className="fade">
          {slogans[index]}
        </p>
        <button>Order Now</button>
      </div>

    </div>
  );
}
