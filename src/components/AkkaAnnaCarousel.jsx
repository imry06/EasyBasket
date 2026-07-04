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
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfM2RfY2hhcmFjdGVyX2lsbHVzdHJhdGlvbl9pc29sYXRlZF9pbl93aGl0ZV9iYWNrZ19kMzZiOTNiNC1mNGY3LTQwMmUtOTY4Zi04ZDFlMzYxMmEyZTAucG5n.png"
          alt="Akka Anna"
        />
      </div>

      <div className="hero-content">
        <h1>Akka-Anna</h1>

        <p key={index} className="fade">
          {slogans[index]}
        </p>

        <button>Order Now</button>
      </div>
    </div>
  );
}