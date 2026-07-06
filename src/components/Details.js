import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShoppingCart } from 'react-icons/fi';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart, category } = value.detailProduct;
          return (
            <div className="detail-page">
              <div className="detail-grid">
                {/* Image */}
                <div className="detail-img-card">
                  <img src={img} className="detail-img" alt={title} />
                </div>

                {/* Info */}
                <div>
                  <span className="detail-cat-badge">
                    {category || 'product'}
                  </span>
                  <h1 className="detail-title">{title}</h1>
                  <p className="detail-brand">by <strong>{company}</strong></p>
                  <div className="detail-price">₹{price}</div>

                  <p className="detail-info">{info}</p>

                  <div className="detail-actions">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <button className="btn-outline">
                        <FiArrowLeft /> Back
                      </button>
                    </Link>
                    <button
                      className="btn-primary"
                      disabled={inCart}
                      onClick={() => {
                        if (!inCart) {
                          value.addToCart(id);
                          value.openModal(id);
                        }
                      }}
                    >
                      <FiShoppingCart />
                      {inCart ? 'In Cart ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
