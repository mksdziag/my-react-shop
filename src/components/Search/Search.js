import React, { Component, createRef } from 'react';
import { withRouter } from 'react-router-dom';

import './Search.css';
import products from '../../database/products';

import SearchResults from './SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

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
      <div className="is-overlay search__backdrop">
        <div className="search">
          <div className="field">
            <div className="control">
              <input
                ref={this.textInput}
                onChange={e => this.handleSearch(e)}
                className="input is-primary"
                type="search"
                placeholder="I'm looking for..."
              />
            </div>
          </div>
          <SearchResults results={this.state.searchResults} />
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
