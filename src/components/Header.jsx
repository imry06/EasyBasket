import React from 'react';
import "../css/header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">🛒</span>
        <span className="header__logo-text">EasyBasket</span>
      </div>
      <div className="header__actions">
        <button className="header__action" aria-label="User">
          <span className="header__action-icon">👤</span>
        </button>
        <button className="header__action" aria-label="Cart">
          <span className="header__action-icon">🛍️</span>
        </button>
      </div>
    </header>
  )
}

export default Header