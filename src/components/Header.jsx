// import React from 'react';
import "../css/header.css";
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {items} = useSelector((state) => state.cart);
  const count = items.reduce((sum, item)=>sum + item.quantity, 0);

const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo">
        {/* <span className="header__logo-icon">🛒</span> */}
        <span className="header__logo-text">EasyBasket</span>
      </div>
      <div className="header__actions">
        <button className="header__action" aria-label="User" onClick= {()=>navigate("/profile")}  >
          <i className="fa-solid fa-user"></i>
        </button>

        <button className="header__action" aria-label="Cart" onClick= {()=>navigate("/cart")}>
          <i className="fa-solid fa-shopping-cart"></i>
          <span className="header__action-count">{count}</span>
        </button>
      </div>
    </header>
  )
}

export default Header