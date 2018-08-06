import React from 'react';
import { Link } from 'react-router-dom';

import './SearchResults.css';

const SearchResults = props => {
  const { results } = props;

  let searchResultsItems = (
    <div className="search-results__start-info">
      <p className="is-size-4 has-text-centered has-text-black-ter">
        Start searching with new word...
      </p>
    </div>
  );

  if (results.length > 1) {
    searchResultsItems = results.map(product => {
      const { id, name, price, pictures, category, manufacturer } = product;

      return (
        <li className="is-primary has-text-black is-fullwidth search-result" key={id}>
          <Link className="has-text-grey" to={`/product/${id}`}>
            <article className="media">
              <figure className="media-left">
                <img
                  className="image search-result__image"
                  src={pictures[0]}
                  alt="product thumbnail"
                />
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

  return <ul className="search-results ">{searchResultsItems}</ul>;
};

export default SearchResults;
