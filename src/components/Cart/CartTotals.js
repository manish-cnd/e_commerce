import React from 'react';
import { FiCreditCard } from 'react-icons/fi';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, openCheckout } = value;

  return (
    <div className="cart-summary-box">
      <p className="summary-title">Order Summary</p>

      <div className="summary-row">
        <span>Subtotal</span>
        <span className="s-val">₹{cartSubTotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Tax (10%)</span>
        <span className="s-val">₹{cartTax.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span className="s-val" style={{ color: 'var(--green)', fontWeight: 600 }}>FREE</span>
      </div>
      <div className="summary-row grand">
        <span>Total</span>
        <span className="s-val">₹{cartTotal.toFixed(2)}</span>
      </div>

      <button className="checkout-btn" onClick={openCheckout}>
        <FiCreditCard style={{ fontSize: '1rem' }} />
        Proceed to Checkout
      </button>

      <button className="clear-cart-btn" onClick={clearCart}>
        🗑️ Clear Cart
      </button>
    </div>
  );
}
