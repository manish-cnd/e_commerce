import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count, company } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="cart-item-row">
      {/* Product info */}
      <div className="cart-prod-info">
        <img src={img} alt={title} className="cart-prod-img" />
        <div>
          <p className="cart-prod-name">{title}</p>
          <p className="cart-prod-brand">{company}</p>
        </div>
      </div>

      {/* Price */}
      <div className="cart-cell-price">₹{price}</div>

      {/* Qty Control */}
      <div className="qty-ctrl">
        <button className="qty-sm-btn" onClick={() => decrement(id)}>−</button>
        <span className="qty-num">{count}</span>
        <button className="qty-sm-btn" onClick={() => increment(id)}>+</button>
      </div>

      {/* Total */}
      <div className="cart-cell-total">₹{total.toFixed(2)}</div>

      {/* Remove */}
      <button className="remove-item-btn" onClick={() => removeItem(id)} title="Remove item">
        <FiTrash2 />
      </button>
    </div>
  );
}
