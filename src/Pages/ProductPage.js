import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart';
import products from '../database/products';

class ProductPage extends Component {
  state = {
    productId: '',
    product: {},
  };

  componentWillMount() {
    const { productId } = this.props.match.params;
    this.setState({ productId });
  }

  componentDidMount() {
    const product = products.find(product => product.id === this.state.productId);
    this.setState({ product: { ...product } });
  }

  render() {
    const {
      id,
      name,
      index,
      isActive,
      price,
      picture,
      category,
      color,
      manufacturer,
      description,
      added,
      sizes,
      tags,
    } = this.state.product;

    return (
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <img src={picture} alt="" />
          </div>
          <div className="column is-7">
            <div className="product-name">
              <h2 className="title">{name}</h2>
              <Link to={`/manufacturer/${manufacturer}`}>
                <h4 className="subtitle">{manufacturer}</h4>
              </Link>
            </div>
            <div className="product-description">
              <p>{description}</p>
            </div>
            <div className="product-actions">
              <button className="button is-primary is-large">
                <Icon className="button-icon" icon={cart} />Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
