import React from "react";
import { Link } from "react-router-dom";

import "./FrontPagePromo.css";
import products from "../database/products";

import todaysPickBackground from "../assets/images/girl-vertical.jpg";
import blogBackground from "../assets/images/blog.jpg";
import promotionsBackground from "../assets/images/girl1.jpg";

const FrontPagePromo = () => {
  const bestseller = products[18];
  return (
    <section className="section front-promo">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="subtitle">first time here?</p>
                <Link to="/my-account">
                  <p className="title">Register and start shopping</p>
                </Link>
              </article>
              <article
                className="tile has-text-white is-child notification front-promo__article front-promo__article--background-right"
                style={{ backgroundImage: `url(${promotionsBackground})` }}
              >
                <Link to="/sale">
                  <p className="title">Promotions</p>
                  <p className="subtitle">Large discounts for you</p>
                </Link>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <Link
                  className="front-promo__bestseller-link"
                  to={`product/5c8eb305d8f8d40017361c32`}
                >
                  <p className="title">Best Seller</p>
                  <p className="subtitle">clients cant be wrong</p>
                  <figure className="image">
                    <img
                      src={bestseller.pictures[0]}
                      alt="product"
                      className="is-block front-promo__best-seller-image"
                    />
                  </figure>
                </Link>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article
              className="tile is-child notification has-text-white front-promo__article "
              style={{ backgroundImage: `url(${blogBackground})` }}
            >
              <Link to="/category/dress">
                <p className="title">Blog</p>
                <p className="subtitle">
                  Check what is hot in fashion world...
                </p>
              </Link>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article
            className="tile is-child notification is-success front-promo__article"
            style={{ backgroundImage: `url(${todaysPickBackground})` }}
          >
            <div className="content">
              <Link to="/products/5c8eb305d8f8d40017361c32">
                <p className="title">Today's pick</p>
                <p className="subtitle">This is our proposition for You</p>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FrontPagePromo;
