import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length === 0) {
            return <EmptyCart />;
          }
          return (
            <div className="cart-page">
              <h1 className="cart-page-heading">
                Your <span className="g-text">Cart</span>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '0.5rem' }}>
                  ({cart.length} item{cart.length !== 1 ? 's' : ''})
                </span>
              </h1>
              <div className="cart-layout">
                <CartList value={value} />
                <CartTotals value={value} />
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
