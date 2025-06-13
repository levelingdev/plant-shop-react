import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/pages/LandingPage';
import ProductsPage from './components/pages/ProductsPage';
import CartPage from './components/pages/CartPage';

function App() {
  const [cart, setCart] = useState({});
  const cartCount = Object.values(cart).reduce((sum, p) => sum + p.quantity, 0);

  return (
    <Router>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
