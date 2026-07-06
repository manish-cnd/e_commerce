import React from 'react';
import Product from './Product';
import CategoryBar from './CategoryBar';
import { ProductConsumer } from '../context';

class ProductList extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const filtered = value.getFilteredProducts();
          const categoryLabel =
            value.activeCategory === 'all'
              ? 'All Products'
              : value.activeCategory.charAt(0).toUpperCase() + value.activeCategory.slice(1);

          return (
            <div>
              {/* Hero Banner */}
              <div className="hero-banner">
                <div className="hero-content">
                  <h1>🛍️ Anusarveshu</h1>
                  <p>Discover amazing products at unbeatable prices — Electronics, Groceries, Furniture & more</p>
                </div>
              </div>

              {/* Category Bar */}
              <CategoryBar
                activeCategory={value.activeCategory}
                onSelect={value.filterByCategory}
              />

              {/* Products Grid */}
              <div className="products-page">
                <div className="section-heading">
                  {categoryLabel}
                  <span className="count">{filtered.length} items</span>
                </div>

                {filtered.length > 0 ? (
                  <div className="products-grid">
                    {filtered.map(product => (
                      <Product key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="no-results">
                    <span className="no-results-emoji">🔍</span>
                    <h3>No results found</h3>
                    <p>Try a different search term or browse another category.</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="aurora-footer">
                <p className="footer-brand">🛍️ Anusarveshu</p>
                <p>© 2026 Anusarveshu. All rights reserved.</p>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductList;
