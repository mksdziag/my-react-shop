import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import AppHeader from './components/AppHeader';
import FrontPage from './Pages/FrontPage';
import CategoryPage from './Pages/CategoryPage';
import MyAccount from './Pages/MyAccount';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import ProductPage from './Pages/ProductPage';
import Footer from './components/Footer';

class App extends Component {
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
        <Footer />
      </div>
    );
  }
}

export default App;
