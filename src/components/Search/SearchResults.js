import React from 'react';
import { Link } from 'react-router-dom';

import './SearchResults.css';

const SearchResults = props => {
  const { results } = props;

  let searchResultsItems = (
    <div className="box">
      <p>Srtart searching with new word...</p>
    </div>
  );

  if (results.length > 1) {
    searchResultsItems = results.map(product => {
      const { id, name, price, picture, category, manufacturer } = product;

      return (
        <li className="is-primary has-text-black is-fullwidth search-result" key={id}>
          <Link className="has-text-grey" to={`/product/${id}`}>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64 search-result__image">
                  <img src={picture} alt="product thumbnail" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong className="is-uppercase">{name}</strong>{' '}
                    <small className="is-uppercase">{manufacturer}</small>
                    <small className="is-capitalized has-color-grey">{category}</small>
                  </p>
                </div>
                <div className="search-result__price">
                  price: <strong>{price}$</strong>
                </div>
              </div>
            </article>
          </Link>
        </li>
      );
    });
  }

  return <ul className="search-results">{searchResultsItems}</ul>;
};

export default SearchResults;
