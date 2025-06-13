import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: 'url(https://via.placeholder.com/800x400)' }}>
      <h1>Plantify</h1>
      <p>Your one-stop shop for beautiful and healthy houseplants.</p>
      <Link to="/products" className="button">Get Started</Link>
    </div>
  );
}

export default LandingPage;
