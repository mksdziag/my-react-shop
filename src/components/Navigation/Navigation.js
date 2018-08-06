import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
      <nav className="navbar is-primary is-fixed-top  	" aria-label="main navigation">
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
        <div
          className={`navbar-menu is-primary has-background-primary ${this.state.isMobileMenuOpen &&
            'is-active'}`}
        >
          <div className="navbar-start" />
          <div className="navbar-end">
            <div className="navbar-item is-primary">
              <SearchButton onClickHandler={this.searchOpenHandler} />
            </div>
            <Link to="/category/dress" className="navbar-item has-text-white">
              Dresses
            </Link>
            <Link to="/category/overall" className="navbar-item has-text-white">
              Overalls
            </Link>
            <Link to="/category/jacket" className="navbar-item has-text-white">
              Jackets
            </Link>
            <Link to="/category/skirt" className="navbar-item has-text-white">
              Skirts
            </Link>
            <Link to="/category/trousers" className="navbar-item has-text-white">
              Trousers
            </Link>
            <Link to="/contact" className="navbar-item has-text-white">
              Contact
            </Link>
            <Link to="/my-account" className="navbar-item has-text-white">
              <Icon className="navbar-icon" icon={user} />
              My Account
            </Link>
            <Link to="/cart" className="navbar-item has-text-white">
              <Icon className="navbar-icon" icon={cart} />
              Cart
              <NavigationCartIncicator />
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
      </nav>
    );
  }
}

export default withRouter(Navigation);
