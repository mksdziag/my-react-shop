import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import http from "../../utils/http";
import Pagination from "../UI/Pagination";
import "./ProductsList.css";

class ProductsList extends Component {
  state = {
    error: null,
    page: 1,
    perPage: 5,
    products: [],
    allProductsCount: 0,
    paginationItems: 1
  };

  async componentDidMount() {
    try {
      const {
        data: { products, count }
      } = await http.get(
        `/products?start=${(this.state.page - 1) * this.state.perPage}&limit=${
          this.state.perPage
        }`
      );

      const paginationItems = Math.ceil(count / this.state.perPage);

      this.setState({ products, count, paginationItems });
    } catch (error) {
      this.setState({ error });
    }
  }

  renderProducts = () => {
    const { products } = this.state;
    return products.map(product => (
      <tr key={product._id}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          {product.isActive ? (
            <span className="tag is-success">Active</span>
          ) : (
            <span className="tag is-danger">Disabled</span>
          )}
        </td>
        <td>
          {" "}
          <Link
            className="button is-warning"
            to={`/admin/products/edit/${product._id}`}
          >
            Edit product
          </Link>
        </td>
      </tr>
    ));
  };

  handlePageChange = async pageNumber => {
    try {
      const {
        data: { products }
      } = await http.get(
        `/products?start=${(pageNumber - 1) * this.state.perPage}&limit=${
          this.state.perPage
        }`
      );
      this.setState({ products, page: pageNumber });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div className="products-table-wrapper">
        <header>
          <h3 className="title">Products in Your store</h3>
          <p className="subtitle">Total products: {this.state.count}</p>
        </header>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="Name">Name</abbr>
              </th>
              <th>
                <abbr title="Category">Category</abbr>
              </th>
              <th>
                <abbr title="Price">Price</abbr>
              </th>
              <th>
                <abbr title="Status">Status</abbr>
              </th>
              <th>
                <abbr title="Action">Action</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.length > 0 && this.renderProducts()}
          </tbody>
        </table>
        {this.state.products.length && (
          <Pagination
            onPageChange={pageNumber => this.handlePageChange(pageNumber)}
            pagesCount={this.state.paginationItems}
            currentPage={this.state.page}
          />
        )}
      </div>
    );
  }
}

export default withRouter(ProductsList);
