import React, { Component } from 'react';

import products from '../database/products';

import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import ProductPreview from '../components/ProductPreview';
import ModalBlank from '../components/UI/Modals/ModalBlank';

class CategoryPage extends Component {
  state = {
    categoryName: '',
    productsInCategory: [],
    currentProduct: '',
    isModalActive: false,
  };

  // setting state when component mounts first time
  componentDidMount() {
    const { categoryName } = this.props.match.params;
    const productsInCategory = products.filter(product => product.category === categoryName);
    this.setState({ categoryName, productsInCategory });
  }

  // if route changes fetching and filtering products
  componentDidUpdate(prevProps) {
    const currentCategoryName = this.props.match.params.categoryName;
    const previousCategoryName = prevProps.match.params.categoryName;

    if (currentCategoryName !== previousCategoryName) {
      const productsInCategory = products.filter(
        product => product.category === currentCategoryName
      );
      this.setState({ categoryName: currentCategoryName, productsInCategory });
    }
  }

  showProductPreview = id => {
    const currentProduct = this.state.productsInCategory.find(product => product.id === id);
    this.setState({ currentProduct, isModalActive: true });
  };

  closeProductPreview = () => {
    this.setState({ isModalActive: false });
  };

  render() {
    const { categoryName, isModalActive, currentProduct, productsInCategory } = this.state;

    const productCards = productsInCategory.map(product => (
      <div key={product.id} className="column is-4-tablet is-3-widescreen">
        <ProductCard
          product={product}
          onQuickViewOpenHandler={() => this.showProductPreview(product.id)}
        />
      </div>
    ));

    return (
      <section className="section">
        <div className="container">
          <CategoryHeader title={categoryName} />
          <div className="columns is-multiline">{productCards}</div>
          <ModalBlank isModalActive={isModalActive} onCloseClick={this.closeProductPreview}>
            <ProductPreview product={{ ...currentProduct }} />
          </ModalBlank>
        </div>
      </section>
    );
  }
}

export default CategoryPage;
