import React, { Component } from 'react';
import products from '../database/products';
import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import ProductPreviewModal from '../components/UiElements/Modals/ProductPreviewModal';
import FloatingCart from '../components/FloatingCart';

class CategoryPage extends Component {
  state = {
    categoryName: '',
    productsInCategory: [],
    currentProduct: '',
    isModalActive: false,
  };

  // setting state when component mounts first time
  componentDidMount() {
    const categoryName = this.props.match.params.categoryName;
    const productsInCategory = products.filter(product => product.category === categoryName);
    this.setState({ categoryName, productsInCategory });
  }

  // if route changes fetching and filtering products
  componentDidUpdate(prevProps) {
    const currentCategoryName = this.props.match.params.categoryName;
    const preciousCategoryName = prevProps.match.params.categoryName;
    if (currentCategoryName !== preciousCategoryName) {
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
    const productCards = this.state.productsInCategory.map(product => {
      const { id, name, picture, category, manufacturer } = product;
      return (
        <div key={id} className="column is-4-tablet is-3-widescreen">
          <ProductCard
            id={id}
            name={name}
            picture={picture}
            category={category}
            manufacturer={manufacturer}
            onQuickViewOpenHandler={() => this.showProductPreview(id)}
          />
        </div>
      );
    });

    const { categoryName, isModalActive, currentProduct } = this.state;

    return (
      <div className="container">
        <CategoryHeader title={categoryName} />
        <div className="columns is-multiline">{productCards}</div>
        <ProductPreviewModal
          isModalActive={isModalActive}
          onQuickViewCloseHandler={this.closeProductPreview}
          {...currentProduct}
        />
        <FloatingCart />
      </div>
    );
  }
}

export default CategoryPage;
