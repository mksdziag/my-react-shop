import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { cart } from 'react-icons-kit/icomoon/cart';

import './Navigation.css';

import NavigationCartIncicator from './NavigationCartIncicator';
import SearchButton from '../Search/SearchButton';
import Search from '../Search/Search';

class Navigation extends Component {
  state = {
    isSearchOpen: false,
    isMobileMenuOpen: false,
  };

  componentDidUpdate(prevProps) {
    const currentLocation = this.props.location.key;
    const previousLocattion = prevProps.location.key;
    if (currentLocation !== previousLocattion) {
      this.setState({ isMobileMenuOpen: false });
    }
  }

  menuOpenHandler = () => {
    this.setState(prevState => {
      return { isMobileMenuOpen: !prevState.isMobileMenuOpen };
    });
  };

  searchOpenHandler = () => {
    this.setState({ isSearchOpen: true });
  };

  searchCloseHandler = () => {
    this.setState({ isSearchOpen: false });
  };

  render() {
    return (
      <nav className="navbar is-primary	" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            MyReactShop
          </Link>
          <div
            className={`navbar-burger burger  ${this.state.isMobileMenuOpen && 'is-active'}`}
            onClick={this.menuOpenHandler}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={`navbar-menu is-primary ${this.state.isMobileMenuOpen && 'is-active'}`}>
          <div className="navbar-start" />
          <div className="navbar-end">
            <div className="navbar-item">
              <SearchButton onClickHandler={this.searchOpenHandler} />
            </div>
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
        <Search isSearchOpen={this.state.isSearchOpen} onCloseHandler={this.searchCloseHandler} />
      </nav>
    );
  }
}

export default withRouter(Navigation);
