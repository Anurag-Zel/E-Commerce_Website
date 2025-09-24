import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <span className="cart-icon">+</span>
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="add-to-cart-btn-mobile" onClick={handleAddToCart}>
            <span className="cart-icon">+</span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
