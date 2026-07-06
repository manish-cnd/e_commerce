import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { FiShoppingCart, FiEye } from 'react-icons/fi';

export default function Product({ product }) {
  const { id, title, img, price, company, category, inCart } = product;

  return (
    <ProductConsumer>
      {value => (
        <div className="prod-card">
          {/* Image */}
          <div className="prod-img-wrap">
            <img src={img} alt={title} className="prod-img" />

            {inCart && <span className="in-cart-badge">✓ In Cart</span>}

            {/* Overlay on hover */}
            <div className="prod-overlay">
              <button
                className="overlay-action-btn"
                title="Quick View"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  <FiEye />
                </Link>
              </button>
              <button
                className="overlay-action-btn"
                title="Add to Cart"
                disabled={inCart}
                onClick={() => {
                  if (!inCart) {
                    value.addToCart(id);
                    value.openModal(id);
                  }
                }}
                style={{ cursor: inCart ? 'not-allowed' : 'pointer' }}
              >
                <FiShoppingCart />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="prod-body">
            <p className="prod-cat-label">{category}</p>
            <Link
              to="/details"
              style={{ textDecoration: 'none' }}
              onClick={() => value.handleDetail(id)}
            >
              <p className="prod-title">{title}</p>
            </Link>
            <p className="prod-brand">by {company}</p>

            <div className="prod-footer">
              <span className="prod-price">₹{price}</span>
              <button
                className="prod-add-btn"
                disabled={inCart}
                title={inCart ? 'Already in cart' : 'Add to cart'}
                onClick={() => {
                  if (!inCart) {
                    value.addToCart(id);
                    value.openModal(id);
                  }
                }}
              >
                {inCart ? '✓' : '+'}
              </button>
            </div>
          </div>
        </div>
      )}
    </ProductConsumer>
  );
}