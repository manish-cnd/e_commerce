import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal, modalProduct } = value;
          if (!modalOpen) return null;

          const { img, title, price } = modalProduct;

          return (
            <div className="cart-modal-overlay" onClick={e => e.target === e.currentTarget && closeModal()}>
              <div className="cart-modal-box">
                <button className="modal-close-x" onClick={closeModal}>✕</button>

                <div className="modal-check-icon">✓</div>
                <p className="modal-msg">Added to Cart</p>

                <img src={img} className="modal-prod-img" alt={title} />
                <p className="modal-prod-title">{title}</p>
                <p className="modal-prod-price">
                  Price: <strong>₹{price}</strong>
                </p>

                <div className="modal-actions">
                  <Link to="/" style={{ textDecoration: 'none', flex: 1 }}>
                    <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={closeModal}>
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/cart" style={{ textDecoration: 'none', flex: 1 }}>
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={closeModal}>
                      🛒 Go to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}