import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className="empty-page">
      <span className="empty-emoji">🛒</span>
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added anything yet. Start shopping!</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button className="btn-primary">🛍️ Browse Products</button>
      </Link>
    </div>
  );
}
