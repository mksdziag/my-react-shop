import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import 'bulma/css/bulma.css'; replaced with my custom bulma theme
import "./mystyles.css";
import "bulma-tooltip";
import "./App.css";
import { userLoggedIn } from "./store/actions";
import { auth } from "./db/db";

import Navigation from "./components/Navigation/Navigation";
import AppHeader from "./components/AppHeader";
import FrontPage from "./Screens/FrontPage";
import CategoryPage from "./Screens/CategoryPage";
import BrandPage from "./Screens/BrandPage";
import SalesPage from "./Screens/SalesPage";
import MyAccount from "./Screens/MyAccount";
import CartPage from "./Screens/CartPage";
import ContactPage from "./Screens/ContactPage";
import ProductPage from "./Screens/ProductPage";
import Footer from "./components/Footer/Footer";
import FloatingCart from "./components/Cart/FloatingCart";
import AdminPage from "./Screens/AdminPage";

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
        <Navigation isAdmin={this.props.user.isAdmin} />
        <AppHeader />
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/brand/:brand" component={BrandPage} />
            <Route path="/sale" component={SalesPage} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/admin" component={AdminPage} />
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
    user: state.user
  };
};
const mapDispatchToProps = dispatch => ({
  userLoggedIn: user => dispatch(userLoggedIn(user.email))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
