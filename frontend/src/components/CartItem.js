import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value) || 0;
    onUpdateQuantity(item.id, quantity);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-price">${item.price}</div>
      </div>
      
      <div className="item-controls">
        <div className="quantity-controls">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            min="1"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>
        
        <div className="item-total">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </div>
        
        <button 
          onClick={handleRemove}
          className="remove-btn"
          title="Remove item"
        >
          🗑️ Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
