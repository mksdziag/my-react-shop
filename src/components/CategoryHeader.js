import React from 'react';

import './CategoryHeader.css';

const CategoryHeader = props => {
  const { title } = props;

  return (
    <header className="category-header">
      <h2 className="title is-size-3 category-title">
        Products in <span className="category-name">{title}</span> category.
      </h2>
    </header>
  );
};

export default CategoryHeader;
