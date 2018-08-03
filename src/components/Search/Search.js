import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Search.css';
import products from '../../database/products';

import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    searchResults: [],
  };

  // ! must be added filtering that start only after 3 words
  handleSearch = e => {
    const searchWord = e.target.value;
    const searchResults = products.filter(product => product.name.includes(searchWord));
    this.setState({ searchResults });
  };

  render() {
    const { isSearchOpen, onCloseHandler } = this.props;

    return (
      <CSSTransition in={isSearchOpen} timeout={300} classNames="fade" unmountOnExit mountOnEnter>
        <div className="search__backdrop">
          <div className="search">
            <div className="field">
              <div className="control">
                <input
                  onChange={e => this.handleSearch(e)}
                  className="input is-primary"
                  type="search"
                  placeholder="I'm looking for..."
                />
              </div>
            </div>

            <div className="columns">
              <div className="column is-12">
                <SearchResults results={this.state.searchResults} />
              </div>
            </div>
            <button
              className="delete is-large search__close"
              aria-label="close"
              onClick={onCloseHandler}
            />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Search;
