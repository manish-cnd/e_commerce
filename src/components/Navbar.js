import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ThemeContext } from './context/ThemeContexts';
import { ProductConsumer } from '../context';
import { FiMoon, FiSun, FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';

class Navbar extends Component {
  static contextType = ThemeContext;

  state = { menuOpen: false };

  toggleMenu = () => this.setState(prev => ({ menuOpen: !prev.menuOpen }));

  render() {
    const { theme, toggleTheme } = this.context;
    const { menuOpen } = this.state;

    return (
      <ProductConsumer>
        {value => (
          <div style={{ position: 'sticky', top: 0, zIndex: 200 }}>
            <nav className="aurora-nav">
              {/* Brand */}
              <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>
                🛍️ Anusarveshu
              </Link>

              {/* Desktop Links */}
              <span className="desktop-nav-links">
                <Link to="/" className="nav-link-item" style={{ textDecoration: 'none' }}>Products</Link>
                <Link to="/cart" className="nav-link-item" style={{ textDecoration: 'none' }}>Cart</Link>
              </span>

              <div className="nav-spacer" />

              {/* Search */}
              <div className="nav-search-wrap" style={{ position: 'relative' }}>
                <FiSearch className="nav-search-icon" />
                <input
                  className="nav-search-input"
                  type="text"
                  placeholder="Search products…"
                  onChange={e => value.filterProducts(e.target.value)}
                />
              </div>

              {/* Cart Button */}
              <Link to="/cart" className="nav-cart-btn" style={{ textDecoration: 'none' }}>
                <FiShoppingCart style={{ fontSize: '1rem' }} />
                Cart
                {value.cart.length > 0 && (
                  <span className="cart-badge">{value.cart.length}</span>
                )}
              </Link>

              {/* Theme Toggle */}
              <button
                className="nav-icon-btn"
                onClick={toggleTheme}
                title={theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme ? <FiSun /> : <FiMoon />}
              </button>

              {/* Mobile Hamburger */}
              <button className="mobile-hamburger" onClick={this.toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </nav>

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="mobile-menu-panel">
                <Link to="/" className="nav-link-item" style={{ textDecoration: 'none' }} onClick={this.toggleMenu}>🏠 Products</Link>
                <Link to="/cart" className="nav-link-item" style={{ textDecoration: 'none' }} onClick={this.toggleMenu}>🛒 Cart ({value.cart.length})</Link>
                <div style={{ position: 'relative', marginTop: '0.25rem' }}>
                  <FiSearch style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input
                    className="nav-search-input"
                    type="text"
                    placeholder="Search products…"
                    style={{ paddingLeft: '2.25rem', width: '100%' }}
                    onChange={e => value.filterProducts(e.target.value)}
                  />
                </div>
                <button className="nav-icon-btn" onClick={toggleTheme} style={{ width: '100%', borderRadius: '10px', justifyContent: 'flex-start', gap: '0.5rem', paddingLeft: '1rem' }}>
                  {theme ? <><FiSun /> Light Mode</> : <><FiMoon /> Dark Mode</>}
                </button>
              </div>
            )}
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Navbar;
