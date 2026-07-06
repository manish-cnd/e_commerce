import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import PaymentModal from './components/PaymentModal';
import OrderConfirmation from './components/OrderConfirmation';
import { ThemeConsumer } from './components/context/ThemeContexts';
import { ProductConsumer } from './context';

function App() {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ProductConsumer>
          {value => (
            <div className={`aurora-app${theme ? ' dark-mode' : ''}`}>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
              </Switch>

              {/* Add-to-cart popup */}
              <Modal />

              {/* Checkout payment modal */}
              {value.checkoutOpen && (
                <PaymentModal
                  onClose={value.closeCheckout}
                  onPlaceOrder={value.placeOrder}
                  cartSubTotal={value.cartSubTotal}
                  cartTax={value.cartTax}
                  cartTotal={value.cartTotal}
                />
              )}

              {/* Order confirmed popup */}
              {value.orderConfirmed && (
                <OrderConfirmation
                  orderId={value.orderId}
                  cartTotal={value.cartTotal}
                  onClose={value.closeOrderConfirmed}
                />
              )}
            </div>
          )}
        </ProductConsumer>
      )}
    </ThemeConsumer>
  );
}

export default App;
