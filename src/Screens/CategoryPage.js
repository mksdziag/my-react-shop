import React, { Component, Fragment } from "react";

import CategoryHeader from "../components/CategoryHeader";
import ProductCard from "../components/ProductCard";
import ProductPreview from "../components/ProductPreview";
import ModalBlank from "../components/UI/Modals/ModalBlank";
import Loader from "../components/UI/Loaders/Loader";
import http from "../utils/http";
import Alert from "../components/UI/Alerts/Alert";

class CategoryPage extends Component {
  state = {
    categoryName: "",
    productsInCategory: [],
    currentProduct: "",
    isModalActive: false,
    isLoading: true,
    error: ""
  };

  // setting state when component mounts first time
  async componentDidMount() {
    const { categoryName } = this.props.match.params;

    try {
      const { data: productsInCategory } = await http.get(
        `products/category/available/${categoryName}`
      );
      this.setState({
        categoryName,
        productsInCategory,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        error: true
      });
    }
  }

  // if route changes fetching and filtering products
  async componentDidUpdate(prevProps) {
    const currentCategoryName = this.props.match.params.categoryName;
    const previousCategoryName = prevProps.match.params.categoryName;

    if (currentCategoryName !== previousCategoryName) {
      this.setState({ isLoading: true });

      try {
        const { data: productsInCategory } = await http.get(
          `products/category/available/${currentCategoryName}`
        );
        this.setState({
          categoryName: currentCategoryName,
          productsInCategory,
          isLoading: false
        });
      } catch (error) {
        console.log(error);
        this.setState({
          isLoading: false,
          error: true
        });
      }
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

  alertCloseHandler = () => {
    this.setState({ error: false });
  };

  render() {
    const {
      categoryName,
      isModalActive,
      currentProduct,
      productsInCategory,
      error,
      isLoading
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
          {error ? (
            <Alert
              message="Something went wrong.. Probably it is problem with our server or Your internet connction. Refresh page."
              onCloseHandler={this.alertCloseHandler}
            />
          ) : isLoading ? (
            <div className="loader-wrapper">
              <Loader />
            </div>
          ) : (
            <Fragment>
              <div className="columns is-multiline">{productCards}</div>
              <ModalBlank
                isModalActive={isModalActive}
                onCloseClick={this.closeProductPreview}
              >
                <ProductPreview product={{ ...currentProduct }} />
              </ModalBlank>
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default CategoryPage;
