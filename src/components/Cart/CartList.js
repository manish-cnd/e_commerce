import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="cart-table">
      <CartColumns />
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </div>
  );
}

function CartColumns() {
  return (
    <div className="cart-col-header">
      <span>Product</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Total</span>
      <span>Remove</span>
    </div>
  );
}
