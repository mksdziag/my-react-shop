import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Search.css';
import products from '../../database/products';

import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    searchResults: [],
  };

  componentWillUnmount() {
    this.setState({ searchResults: [] });
  }

  handleSearch = e => {
    const searchWord = e.target.value;
    if (searchWord.length > 2) {
      const searchResults = products.filter(product => product.name.includes(searchWord));
      this.setState({ searchResults });
    } else {
      this.setState({ searchResults: [] });
    }
  };

  render() {
    const { onCloseHandler } = this.props;

    return (
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

          <div className="columns ">
            <div className="column">
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
    );
  }
}

export default withRouter(Search);
