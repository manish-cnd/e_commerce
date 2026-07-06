import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderConfirmation({ orderId, cartTotal, onClose }) {
  return (
    <div className="order-overlay">
      <div className="order-box">
        <div className="order-success-icon">✓</div>

        <h2>Order Confirmed! 🎉</h2>
        <p>
          Thank you for your purchase! Your order has been placed successfully
          and is being processed. You'll receive a confirmation email shortly.
        </p>

        <div className="confetti-bar" />

        <div className="order-id-badge">
          Order ID: <strong>{orderId}</strong>
          <br />
          <small style={{ opacity: 0.7, fontWeight: 400 }}>
            Total Paid: ₹{cartTotal ? cartTotal.toFixed(2) : '0.00'}
          </small>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" onClick={onClose}>
              🛍️ Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
