import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './AppHeader.css';
import backgroundImage from '../assets/images/hero.jpeg';

const AppHeader = props => {
  const biggerHeroClass = props.location.pathname === '/' && 'is-medium';

  return (
    <section
      className={`hero ${biggerHeroClass}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.35)), url(${backgroundImage})`,
      }}
    >
      <div className="container hero-body">
        <Link to="/">
          <h1 className="title is-size-2 has-text-white">My React Shop</h1>
          <h2 className="subtitle is-size-4 has-text-white">Clothes just for You</h2>
        </Link>
      </div>
    </section>
  );
};

export default withRouter(AppHeader);
