import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bulma/css/bulma.css';
import './App.css';
import { fetchOrders, userLoggedIn } from './store/actions';
import { auth } from './db/db';

import Navigation from './components/Navigation/Navigation';
import AppHeader from './components/AppHeader';
import FrontPage from './Screens/FrontPage';
import CategoryPage from './Screens/CategoryPage';
import MyAccount from './Screens/MyAccount';
import CartPage from './Screens/CartPage';
import ContactPage from './Screens/ContactPage';
import ProductPage from './Screens/ProductPage';
import Footer from './components/Footer/Footer';
import FloatingCart from './components/Cart/FloatingCart';

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.userLoggedIn(user);
      }
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <AppHeader />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </main>
        <FloatingCart />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
  };
};
const mapDispachToProps = dispatch => {
  return {
    fetchOrders: user => dispatch(fetchOrders(user)),
    userLoggedIn: user => dispatch(userLoggedIn(user.email)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(App)
);
