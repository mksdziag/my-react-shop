import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsCarousel.css';
import products from '../../database/products';

import ProductCard from '../ProductCard';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

class SimpleSlider extends React.Component {
  render() {
    const sliderLength = 6;
    const randomStartIndex = Math.floor(Math.random() * (products.length - sliderLength));
    var settings = {
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      focusOnSelect: false,
      autoplay: true,
      dots: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 1380,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {products.slice(randomStartIndex, randomStartIndex + sliderLength).map(product => (
          <div key={product.id} className={'slider-item'}>
            <ProductCard noActionFooter={true} noOverlayLink={true} product={product} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider;
