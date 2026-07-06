# 🛍️ Anusarveshu — Premium E-Commerce Store

> A feature-rich, beautifully designed e-commerce web application built with **React.js**, featuring a unique Aurora theme, 5 product categories, a complete 3-step checkout flow, and an animated order confirmation system.

---

## ✨ Features

### 🎨 Design & UI
- **Aurora Premium Theme** — Violet → Cyan gradient accent with glassmorphism surfaces
- **Dark / Light Mode** toggle with smooth CSS variable transitions
- **Fully Responsive** — works on mobile, tablet, and desktop
- **Google Fonts** — Space Grotesk (headings) + Inter (body)
- **Micro-animations** — card hover lift, modal slide-up, icon pop-in, confetti bar

### 🛒 Shopping Experience
- **26 Products** across 5 categories: Electronics, Groceries, Furniture, Fashion, Sports
- **Category Filter Bar** — one-click pill tabs to filter products by category
- **Live Search** — real-time product search from the navbar
- **Product Detail View** — full-page detail with description, price, and add-to-cart
- **Quick-Add Overlay** — hover a card and add instantly without leaving the grid
- **Add-to-Cart Modal** — animated ✓ confirmation popup with product preview
- **Cart with Quantity Controls** — increment / decrement / remove individual items
- **Cart Badge** — live item count shown on the navbar cart button

### 💳 Checkout & Orders
- **3-Step Checkout Modal**
  1. **Shipping** — Name, Email, Address, City, PIN
  2. **Payment** — Card number (auto-formatted), Expiry, CVV
  3. **Review** — Order summary with subtotal, 10% GST, FREE shipping, and grand total
- **Order Confirmation Popup** — animated success icon, unique `ORD-XXXXXXXX` order ID, total paid in ₹
- **Cart Auto-Clears** after successful order

### 💰 Currency
- All prices displayed in **Indian Rupee (₹)**
- Realistic INR pricing for all 26 products

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React.js (Create React App) |
| **Routing** | React Router v5 (`react-router-dom`) |
| **State Management** | React Context API + Class Components |
| **Styling** | Vanilla CSS (Custom CSS Variables) + Tailwind CSS |
| **Icons** | React Icons (`react-icons/fi` — Feather Icons) |
| **Fonts** | Google Fonts — Space Grotesk, Inter |
| **Images** | Unsplash (free, high-quality product photography) |
| **Build Tool** | Webpack (via Create React App) |

---

## 📁 Project Structure

```
e_commerce_website/
├── public/
│   └── index.html              # HTML entry, Google Fonts link
├── src/
│   ├── App.js                  # Root component — routes, theme, modals
│   ├── App.css                 # 🎨 Aurora theme — all CSS variables & classes
│   ├── index.js                # React entry point + context providers
│   ├── index.css               # Base body reset
│   ├── context.js              # 🧠 Global state — cart, filters, checkout
│   ├── data.js                 # 📦 26 products across 5 categories
│   └── components/
│       ├── Navbar.js           # Sticky nav — search, cart badge, dark mode
│       ├── ProductList.js      # Homepage — hero, category bar, product grid
│       ├── Product.js          # Individual product card with hover overlay
│       ├── Details.js          # Full product detail page
│       ├── Modal.js            # Add-to-cart success popup
│       ├── CategoryBar.js      # Category filter pills
│       ├── PaymentModal.js     # 3-step checkout modal
│       ├── OrderConfirmation.js # Animated order success screen
│       ├── Default.js          # 404 not found page
│       └── Cart/
│           ├── Cart.js         # Cart page container
│           ├── CartList.js     # Cart items list
│           ├── CartItem.js     # Single cart row — qty controls, remove
│           ├── CartTotals.js   # Order summary + checkout button
│           └── EmptyCart.js    # Empty state screen
```

---

## 🚀 How to Run Locally

### Prerequisites
- **Node.js** v14 or higher (tested with v24)
- **npm** (comes with Node.js)
- **Git** (to clone the repo)

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/e_commerce_website.git
cd e_commerce_website
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Start the Development Server

```bash
npm start
```

The app will automatically open at **[http://localhost:3000](http://localhost:3000)** in your browser.

> **Note:** The start script uses `set NODE_OPTIONS=--openssl-legacy-provider` for compatibility with Node.js v17+. This is already configured in `package.json` — no extra setup needed.

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server at localhost:3000 |
| `npm run build` | Create optimized production build in `/build` |
| `npm test` | Run the test suite |

---

## 🛒 How to Use the Website

1. **Browse Products** — Land on the homepage and see all 26 products in a responsive grid
2. **Filter by Category** — Click any pill (Electronics / Groceries / Furniture / Fashion / Sports)
3. **Search** — Type in the navbar search bar to filter products instantly
4. **View Details** — Click a product title or the 👁️ eye icon to see the full detail page
5. **Add to Cart** — Click `+` on a card or "Add to Cart" on the detail page
6. **Review Cart** — Click "Cart" in the navbar to see all items, adjust quantities, or remove
7. **Checkout** — Click "Proceed to Checkout", fill in Shipping → Payment → Review steps
8. **Place Order** — Click "✓ Place Order" to confirm; see the animated success popup with your Order ID
9. **Toggle Theme** — Click the 🌙 / ☀️ icon in the navbar to switch Dark / Light mode

---

## 🗂️ Product Catalogue

| Category | Products | Price Range |
|----------|----------|-------------|
| 📱 Electronics | Pixel 8 Pro, Galaxy S24 Ultra, iPhone 15 Pro, iPad Pro, OnePlus 12, Apple Watch | ₹15,199 – ₹50,999 |
| 🛒 Groceries | Organic Apples, Full Cream Milk, Sourdough Bread, Ground Coffee, Atlantic Salmon | ₹75 – ₹899 |
| 🛋️ Furniture | Modern Sofa, Oak Dining Table, Ergonomic Chair, Floating Bookshelf, King Bed | ₹5,999 – ₹49,999 |
| 👗 Fashion | Denim Jacket, Nike Air Max, Floral Dress, Chronograph Watch, Leather Bag | ₹1,799 – ₹12,999 |
| ⚽ Sports | Yoga Mat, Adjustable Dumbbells, NBA Basketball, Badminton Racket, Running Shoes | ₹1,299 – ₹8,999 |

---

## 🔧 Core Concepts Used

| Concept | Where Used |
|---------|-----------|
| **React Context API** | Global state for cart, filters, modals (`context.js`) |
| **Class Components** | `ProductProvider`, `PaymentModal`, `Cart`, `Details` |
| **Functional Components** | `Product`, `CategoryBar`, `CartItem`, `Modal`, `OrderConfirmation` |
| **React Router v5** | `Switch` + `Route` for `/`, `/details`, `/cart` |
| **CSS Custom Properties** | Full theming system — light/dark mode via `:root` & `.dark-mode` variables |
| **CSS Animations** | `@keyframes` for slide-up, pop-in, fade-in, confetti bar grow |
| **Computed State** | `getFilteredProducts()` — filters by category + search in one pass |
| **Controlled Forms** | PaymentModal — all form fields fully controlled via `this.state` |
| **Event Delegation** | Modal overlay click-outside-to-close pattern |

---

## 📸 Screenshots

> Open **[http://localhost:3000](http://localhost:3000)** after running `npm start` to see the live site.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ — <strong>Anusarveshu Store © 2026</strong>
</div>
