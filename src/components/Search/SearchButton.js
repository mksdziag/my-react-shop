import React from 'react';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';

import './SearchButton.css';

const SearchButton = props => {
  const { onClickHandler } = props;

  return (
    <button onClick={onClickHandler} className="is-size-7 has-text-white button--search">
      <Icon className="navbar-icon--search " icon={search} />
    </button>
  );
};

export default SearchButton;
