import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { user } from 'react-icons-kit/icomoon/user';
import { cart } from 'react-icons-kit/icomoon/cart';

import './Navigation.css';

import NavigationCartIndicator from './NavigationCartIndicator';
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
      <nav className="navbar is-fixed-top has-background-white " aria-label="main navigation">
        <div className="container container--paddingless">
          <div className="navbar-brand">
            <Link
              to="/"
              className="navbar-item has-text-secondary has-text-dark is-size-4-touch is-size-3"
            >
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
          <div className={`navbar-menu  ${this.state.isMobileMenuOpen && 'is-active'}`}>
            <div className="navbar-start" />
            <div className="navbar-end ">
              <div className="navbar-item">
                <SearchButton onClickHandler={this.searchOpenHandler} />
              </div>
              <Link to="/category/dress" className="navbar-item has-text-dark ">
                Dresses
              </Link>
              <Link to="/category/overall" className="navbar-item has-text-dark ">
                Overalls
              </Link>
              <Link to="/category/jacket" className="navbar-item has-text-dark ">
                Jackets
              </Link>
              <Link to="/category/skirt" className="navbar-item has-text-dark ">
                Skirts
              </Link>
              <Link to="/category/trousers" className="navbar-item has-text-dark ">
                Trousers
              </Link>
              <Link to="/contact" className="navbar-item has-text-dark ">
                Contact
              </Link>
              <Link to="/my-account" className="navbar-item has-text-dark ">
                <Icon className="navbar-icon" icon={user} />
                My Account
              </Link>
              <Link to="/cart" className="navbar-item has-text-dark">
                <Icon className="navbar-icon" icon={cart} />
                Cart
                <NavigationCartIndicator />
              </Link>
            </div>
          </div>

          <CSSTransition
            in={this.state.isSearchOpen}
            timeout={300}
            classNames="fade"
            unmountOnExit
            mountOnEnter
          >
            <Search onCloseHandler={this.searchCloseHandler} />
          </CSSTransition>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
