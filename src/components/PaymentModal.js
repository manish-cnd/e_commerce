import React, { Component } from 'react';

const STEPS = ['Shipping', 'Payment', 'Review'];

export default class PaymentModal extends Component {
  state = {
    step: 0,
    // Shipping
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    // Payment
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  next = () => {
    this.setState(prev => ({ step: Math.min(prev.step + 1, 2) }));
  };

  back = () => {
    this.setState(prev => ({ step: Math.max(prev.step - 1, 0) }));
  };

  formatCard = val => {
    return val
      .replace(/\D/g, '')
      .slice(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  handleCardNumber = e => {
    this.setState({ cardNumber: this.formatCard(e.target.value) });
  };

  render() {
    const { onClose, onPlaceOrder, cartSubTotal, cartTax, cartTotal } = this.props;
    const { step, name, email, address, city, zip, cardName, cardNumber, expiry, cvv } = this.state;

    return (
      <div className="payment-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="payment-box">
          {/* Header */}
          <div className="payment-header">
            <h2>🛒 Checkout</h2>
            <button className="close-btn-round" onClick={onClose} title="Close">✕</button>
          </div>

          {/* Step bar */}
          <div className="step-bar">
            {STEPS.map((_, i) => (
              <div key={i} className={`step-seg${i <= step ? ' done' : ''}`} />
            ))}
          </div>
          <div className="step-labels">
            {STEPS.map((label, i) => (
              <span key={i} className={i === step ? 's-active' : ''}>{label}</span>
            ))}
          </div>

          {/* ── Step 0: Shipping ── */}
          {step === 0 && (
            <div>
              <div className="f-group">
                <label className="f-label">Full Name</label>
                <input className="f-input" name="name" value={name} onChange={this.handleChange} placeholder="John Smith" />
              </div>
              <div className="f-group">
                <label className="f-label">Email Address</label>
                <input className="f-input" name="email" value={email} onChange={this.handleChange} placeholder="john@example.com" type="email" />
              </div>
              <div className="f-group">
                <label className="f-label">Street Address</label>
                <input className="f-input" name="address" value={address} onChange={this.handleChange} placeholder="123 Main Street, Apt 4B" />
              </div>
              <div className="f-row">
                <div className="f-group">
                  <label className="f-label">City</label>
                  <input className="f-input" name="city" value={city} onChange={this.handleChange} placeholder="New York" />
                </div>
                <div className="f-group">
                  <label className="f-label">ZIP / Postcode</label>
                  <input className="f-input" name="zip" value={zip} onChange={this.handleChange} placeholder="10001" />
                </div>
              </div>
              <div className="payment-nav-btns">
                <button className="btn-next-step" onClick={this.next} style={{ flex: 1 }}>
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 1: Payment ── */}
          {step === 1 && (
            <div>
              <div className="card-brands">
                <span className="card-chip">VISA</span>
                <span className="card-chip">MASTERCARD</span>
                <span className="card-chip">AMEX</span>
                <span className="card-chip">DISCOVER</span>
              </div>
              <div className="f-group">
                <label className="f-label">Name on Card</label>
                <input className="f-input" name="cardName" value={cardName} onChange={this.handleChange} placeholder="John Smith" />
              </div>
              <div className="f-group">
                <label className="f-label">Card Number</label>
                <input className="f-input card-num" name="cardNumber" value={cardNumber} onChange={this.handleCardNumber} placeholder="1234 5678 9012 3456" maxLength="19" />
              </div>
              <div className="f-row">
                <div className="f-group">
                  <label className="f-label">Expiry Date</label>
                  <input className="f-input" name="expiry" value={expiry} onChange={this.handleChange} placeholder="MM/YY" maxLength="5" />
                </div>
                <div className="f-group">
                  <label className="f-label">CVV</label>
                  <input className="f-input" name="cvv" value={cvv} onChange={this.handleChange} placeholder="•••" maxLength="4" type="password" />
                </div>
              </div>
              <div className="payment-nav-btns">
                <button className="btn-back" onClick={this.back}>← Back</button>
                <button className="btn-next-step" onClick={this.next}>Review Order →</button>
              </div>
            </div>
          )}

          {/* ── Step 2: Review ── */}
          {step === 2 && (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div className="review-row">
                  <span>📦 Shipping to</span>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>{city || '—'}</span>
                </div>
                <div className="review-row">
                  <span>💳 Card ending</span>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>
                    •••• {cardNumber ? cardNumber.slice(-4) : '—'}
                  </span>
                </div>
              </div>

              <div style={{ background: 'var(--surface-2)', borderRadius: '14px', padding: '1rem', border: '1px solid var(--border)' }}>
                <div className="review-row"><span>Subtotal</span><span className="r-val">₹{cartSubTotal.toFixed(2)}</span></div>
                <div className="review-row"><span>Tax (10%)</span><span className="r-val">₹{cartTax.toFixed(2)}</span></div>
                <div className="review-row"><span>Shipping</span><span className="r-val" style={{ color: 'var(--green)', fontWeight: 600 }}>FREE</span></div>
                <div className="review-row grand"><span>Total</span><span className="r-val">₹{cartTotal.toFixed(2)}</span></div>
              </div>

              <div className="payment-nav-btns">
                <button className="btn-back" onClick={this.back}>← Back</button>
                <button className="btn-next-step" onClick={onPlaceOrder}>
                  ✓ Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
