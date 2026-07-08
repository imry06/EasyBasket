import "../css/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">akka-anna basket</h2>
        <p className="footer-tagline">
          Fresh Groceries • Fast Delivery • Best Prices
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We deliver fresh fruits, vegetables, groceries, dairy products,
            snacks, and daily essentials directly to your doorstep.
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@akkaannabasket.com</p>
          <p>📍 Hyderabad, Telangana</p>
        </div>

        <div className="footer-section">
          <h4>Store Hours</h4>
          <p>Monday - Sunday</p>
          <p>7:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Akka-Anna Basket. All Rights Reserved.</p>
        <p>"From Our Basket to Your Home."</p>
      </div>
    </footer>
  );
};

export default Footer;