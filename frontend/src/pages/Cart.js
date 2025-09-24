import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    address: ''
  });
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.address) {
      setError('Please fill in all required fields');
      return;
    }

    if (items.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setIsPlacingOrder(true);
    setError('');

    try {
      const orderData = {
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        address: customerInfo.address,
        items: items.map(item => ({
          id: item.id,
          quantity: item.quantity
        }))
      };

      const response = await axios.post('http://localhost:5001/api/orders', orderData);
      
      if (response.data.success) {
        setOrderSuccess(true);
        clearCart();
        setCustomerInfo({ firstName: '', lastName: '', address: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
      console.error('Error placing order:', err);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="cart">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. Your order has been placed and will be processed soon.</p>
            <button 
              onClick={() => setOrderSuccess(false)}
              className="continue-shopping-btn"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <p>Review your items and place your order</p>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some products to get started!</p>
            <a href="/" className="continue-shopping-btn">
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <h2>Cart Items ({items.length})</h2>
              {items.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="checkout-section">
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="summary-line">
                  <span>Items ({items.length})</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="summary-line total">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className="customer-form">
                <h3>Customer Information</h3>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your complete address"
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  className="place-order-btn"
                  disabled={isPlacingOrder}
                >
                  {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
