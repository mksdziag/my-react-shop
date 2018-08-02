import React, { Component } from 'react';

import './Navigation.css';

import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { cart } from 'react-icons-kit/icomoon/cart';
import NavigationCartIncicator from './NavigationCartIncicator';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar is-primary	" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            MyReactShop
          </Link>
          <div className="navbar-burger burger">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start" />
          <div className="navbar-end">
            <Link to="/category/dress" className="navbar-item">
              Dresses
            </Link>
            <Link to="/category/overall" className="navbar-item">
              Overalls
            </Link>
            <Link to="/category/jacket" className="navbar-item">
              Jackets
            </Link>
            <Link to="/category/skirt" className="navbar-item">
              Skirts
            </Link>
            <Link to="/category/trousers" className="navbar-item">
              Trousers
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
            <Link to="/my-account" className="navbar-item">
              <Icon className="navbar-icon" icon={user} />
              My Account
            </Link>
            <Link to="/cart" className="navbar-item">
              <Icon className="navbar-icon" icon={cart} />
              Cart
              <NavigationCartIncicator />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
