import React from 'react';
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/icomoon/search';

const SearchButton = props => {
  const { onClickHandler } = props;

  return (
    <div onClick={onClickHandler} className="button button--search">
      <Icon className="navbar-icon" icon={search} />
    </div>
  );
};

export default SearchButton;
