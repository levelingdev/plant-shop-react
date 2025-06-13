import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, setCart }) {
  const totalItems = Object.values(cart).reduce((sum, p) => sum + p.quantity, 0);
  const totalCost = Object.values(cart).reduce((sum, p) => sum + p.price * p.quantity, 0);
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      const updated = { ...prev };
      updated[id].quantity += delta;
      if (updated[id].quantity <= 0) delete updated[id];
      return updated;
    });
  };

  const removeItem = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      {Object.values(cart).map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
    </div>
  );
}

export default CartPage;
