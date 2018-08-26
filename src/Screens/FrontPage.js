import React from 'react';

import FrontPagePromo from '../components/FrontPagePromo';
import SimpleSlider from '../components/ProductsCarousel/ProductsCarousel';

const MainPage = () => {
  return (
    <div className="container">
      <FrontPagePromo />
      <section className="section">
        <h3 className="title">Check out our amazing products</h3>
        <SimpleSlider />
      </section>
    </div>
  );
};

export default MainPage;
