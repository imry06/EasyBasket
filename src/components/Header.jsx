import React from 'react';
import "../css/header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <span className="header__logo-icon">🛒</span> */}
        <span className="header__logo-text">EasyBasket</span>
      </div>
      <div className="header__actions">
        <button className="header__action" aria-label="User">
          <i className="fa-solid fa-user"></i>
        </button>
        <button className="header__action" aria-label="Cart">
          <i className="fa-solid fa-shopping-cart"></i>
        </button>
      </div>
    </header>
  )
}

export default Header