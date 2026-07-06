import React from 'react';

const CATEGORIES = [
  { id: 'all',         label: 'All',         emoji: '🛍️' },
  { id: 'electronics', label: 'Electronics',  emoji: '📱' },
  { id: 'groceries',   label: 'Groceries',    emoji: '🛒' },
  { id: 'furniture',   label: 'Furniture',    emoji: '🛋️' },
  { id: 'fashion',     label: 'Fashion',      emoji: '👗' },
  { id: 'sports',      label: 'Sports',       emoji: '⚽' },
];

export default function CategoryBar({ activeCategory, onSelect }) {
  return (
    <div className="category-bar">
      <div className="category-bar-inner">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-pill${activeCategory === cat.id ? ' active' : ''}`}
            onClick={() => onSelect(cat.id)}
          >
            <span className="cat-emoji">{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
