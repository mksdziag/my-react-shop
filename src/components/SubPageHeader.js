import React from 'react';

import './SubPageHeader.css';

const SubPageHeader = props => {
  const { title, subtitle } = props;

  return (
    <header className="subpage-header">
      <h2 className="title is-size-3 is-uppercase subpage-header__title">{title}</h2>
      <h3 className="subtitle is-size-5 subpage-header__subtitle">{subtitle}</h3>
    </header>
  );
};

export default SubPageHeader;
