import React from 'react';

const plantData = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Fiddle Leaf Fig', price: 30, category: 'Bright Light', thumbnail: 'https://images.unsplash.com/photo-1524594157361-ff1433d5c488?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Aloe Vera', price: 10, category: 'Succulents', thumbnail: 'https://images.unsplash.com/photo-1584433144859-63f5c2147e4d?auto=format&fit=crop&w=100&q=80' },
  { id: 4, name: 'Peace Lily', price: 20, category: 'Low Light', thumbnail: 'https://images.unsplash.com/photo-1524592839740-68b684ac5b3a?auto=format&fit=crop&w=100&q=80' },
  { id: 5, name: 'Spider Plant', price: 12, category: 'Bright Light', thumbnail: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=100&q=80' },
  { id: 6, name: 'Cactus', price: 8, category: 'Succulents', thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80' },
];

function ProductsPage({ cart, setCart }) {
  const handleAddToCart = (plant) => {
    setCart({ ...cart, [plant.id]: { ...plant, quantity: 1 } });
  };

  return (
    <div className="products">
      {['Low Light', 'Bright Light', 'Succulents'].map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="plant-group">
            {plantData.filter(p => p.category === cat).map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.thumbnail} alt={plant.name} width={100} height={100} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)} disabled={cart[plant.id]}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
