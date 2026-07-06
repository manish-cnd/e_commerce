import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    activeCategory: 'all',
    searchValue: '',
    checkoutOpen: false,
    orderConfirmed: false,
    orderId: '',
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    const products = storeProducts.map(item => ({ ...item }));
    this.setState({ products });
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      { products: [...tempProducts], cart: [...this.state.cart, product], detailProduct: { ...product } },
      this.addTotals
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    product.count += 1;
    product.total = product.count * product.price;
    this.setState({ cart: [...tempCart] }, this.addTotals);
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id === id);
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState({ cart: [...tempCart] }, this.addTotals);
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({ cart: [...tempCart], products: [...tempProducts] }, this.addTotals);
  };

  getTotals = () => {
    let subTotal = 0;
    this.state.cart.forEach(item => (subTotal += item.total));
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    return { subTotal, tax, total };
  };

  addTotals = () => {
    const { subTotal, tax, total } = this.getTotals();
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotals();
    });
  };

  /* ── Category & Search Filters ── */
  filterByCategory = category => {
    this.setState({ activeCategory: category });
  };

  filterProducts = value => {
    this.setState({ searchValue: value });
  };

  /* ── Checkout & Order ── */
  openCheckout = () => {
    this.setState({ checkoutOpen: true });
  };

  closeCheckout = () => {
    this.setState({ checkoutOpen: false });
  };

  placeOrder = () => {
    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    this.setState({ checkoutOpen: false, orderConfirmed: true, orderId }, () => {
      this.clearCart();
    });
  };

  closeOrderConfirmed = () => {
    this.setState({ orderConfirmed: false, orderId: '' });
  };

  /* ── Computed filtered products (used in ProductList) ── */
  getFilteredProducts = () => {
    const { products, activeCategory, searchValue } = this.state;
    let filtered = products;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchValue.trim()) {
      const lower = searchValue.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(lower) ||
          p.info.toLowerCase().includes(lower) ||
          p.company.toLowerCase().includes(lower)
      );
    }

    return filtered;
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          filterProducts: this.filterProducts,
          filterByCategory: this.filterByCategory,
          openCheckout: this.openCheckout,
          closeCheckout: this.closeCheckout,
          placeOrder: this.placeOrder,
          closeOrderConfirmed: this.closeOrderConfirmed,
          getFilteredProducts: this.getFilteredProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
