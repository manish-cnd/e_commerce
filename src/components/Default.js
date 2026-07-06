import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Default extends Component {
  render() {
    return (
      <div className="empty-page">
        <span className="empty-emoji">😕</span>
        <h2>404 — Page Not Found</h2>
        <p>
          The page <strong style={{ color: 'var(--red)' }}>{this.props.location.pathname}</strong> does not exist.
        </p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="btn-primary">🏠 Go Home</button>
        </Link>
      </div>
    );
  }
}
