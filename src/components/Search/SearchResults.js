import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = props => {
  const { results } = props;

  const searchResultsItems = results.map(result => (
    <li className="is-primary has-text-black is-fullwidth" key={result.id}>
      <Link to={`/product/${result.id}`}>
        {result.name} {result.price}
      </Link>
    </li>
  ));

  return <ul className="box">{searchResultsItems}</ul>;
};

export default SearchResults;
