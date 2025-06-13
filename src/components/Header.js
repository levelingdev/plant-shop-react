import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1><Link to="/">Plantify</Link></h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {cartCount}</Link>
      </nav>
    </header>
  );
}

export default Header;
