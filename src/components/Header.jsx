import "../css/header.css";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {
  const { items } = useSelector((state) => state.cart);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2 className="logo" onClick={() => navigate("/")}>
        akka-anna
      </h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/profile"><i className="fa-solid fa-user"></i></NavLink>
        </li>
       
        <li>
          <NavLink to="/cart"><i className="fa-solid fa-cart-arrow-down"></i> ({count})</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
