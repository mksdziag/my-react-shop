import React, { Component } from "react";

import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import ProductPreview from "../components/ProductPreview";
import ModalBlank from "../components/UI/Modals/ModalBlank";
import http from "../utils/http";

class CategoryPage extends Component {
  state = {
    categoryName: "",
    productsInCategory: [],
    currentProduct: "",
    isModalActive: false
  };

  // setting state when component mounts first time
  async componentDidMount() {
    const { categoryName } = this.props.match.params;
    const { data: productsInCategory } = await http.get(
      `products/category/available/${categoryName}`
    );

    this.setState({
      categoryName,
      productsInCategory
    });
  }

  // if route changes fetching and filtering products
  async componentDidUpdate(prevProps) {
    const currentCategoryName = this.props.match.params.categoryName;
    const previousCategoryName = prevProps.match.params.categoryName;

    if (currentCategoryName !== previousCategoryName) {
      this.setState({ loading: true });

      const { data: productsInCategory } = await http.get(
        `products/category/available/${currentCategoryName}`
      );
      this.setState({ categoryName: currentCategoryName, productsInCategory });
    }
  }

  componentWillUnmount() {
    this.setState({
      categoryName: "",
      productsInCategory: [],
      currentProduct: "",
      isModalActive: false
    });
  }

  showProductPreview = _id => {
    const currentProduct = this.state.productsInCategory.find(
      product => product._id === _id
    );
    this.setState({ currentProduct, isModalActive: true });
  };

  closeProductPreview = () => {
    this.setState({ isModalActive: false });
  };

  render() {
    const {
      categoryName,
      isModalActive,
      currentProduct,
      productsInCategory
    } = this.state;

    const productCards = productsInCategory.map(product => (
      <div key={product._id} className="column is-4-tablet is-3-widescreen">
        <ProductCard
          product={product}
          onQuickViewOpenHandler={() => this.showProductPreview(product._id)}
        />
      </div>
    ));

    return (
      <section className="section">
        <div className="container">
          <CategoryHeader title={categoryName} />
          <div className="columns is-multiline">{productCards}</div>
          <ModalBlank
            isModalActive={isModalActive}
            onCloseClick={this.closeProductPreview}
          >
            <ProductPreview product={{ ...currentProduct }} />
          </ModalBlank>
        </div>
      </section>
    );
  }
}

export default CategoryPage;
