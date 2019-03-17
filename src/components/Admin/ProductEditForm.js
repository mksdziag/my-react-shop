import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./ProductEditForm.css";
import http from "../../utils/http";

class ProductEditForm extends Component {
  state = {
    name: "",
    price: "",
    pictures: [],
    sizes: [],
    tags: [],
    color: "",
    brand: "",
    inStock: "",
    discount: "",
    category: "overall",
    description: "",
    isActive: false,
    tag: "",
    size: "S",
    picture: ""
  };

  async componentDidMount() {
    const { productId } = this.props.match.params;

    if (productId) {
      const { data: product } = await http.get(`products/${productId}`);
      this.setState({
        name: product.name,
        price: product.price,
        pictures: product.pictures,
        sizes: product.sizes,
        tags: product.tags,
        color: product.color,
        brand: product.brand,
        inStock: product.inStock,
        discount: product.discount,
        category: product.category,
        description: product.description,
        isActive: product.isActive
      });
    }
  }

  handleFormChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleFormClear = () => {
    this.setState({
      name: "",
      price: "",
      pictures: [],
      sizes: [],
      tags: [],
      color: "",
      brand: "",
      inStock: "",
      discount: "",
      category: "",
      description: "",
      isActive: false,
      tag: "",
      size: "",
      picture: ""
    });

    this.props.history.push("/admin/products/list");
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { productId } = this.props.match.params;
    if (productId) {
      try {
        await http.put(`/products/${productId}`, {
          name: this.state.name,
          price: this.state.price,
          pictures: this.state.pictures,
          sizes: this.state.sizes,
          tags: this.state.tags,
          color: this.state.color,
          brand: this.state.brand,
          inStock: this.state.inStock,
          discount: this.state.discount,
          category: this.state.category,
          description: this.state.description,
          isActive: this.state.isActive
        });
        this.handleFormClear();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await http.post("/products", {
          name: this.state.name,
          price: this.state.price,
          pictures: this.state.pictures,
          sizes: this.state.sizes,
          tags: this.state.tags,
          color: this.state.color,
          brand: this.state.brand,
          inStock: this.state.inStock,
          discount: this.state.discount,
          category: this.state.category,
          description: this.state.description,
          isActiv: this.state.isActive
        });
        this.handleFormClear();
      } catch (error) {
        console.log(error);
      }
    }
  };

  handleTagAdd = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { tags: [...prevState.tags, this.state.tag], tag: "" };
    });
  };

  handleSizeAdd = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { sizes: [...prevState.sizes, this.state.size], size: "" };
    });
  };

  handleSizeeRemove = deletedSize => {
    this.setState(prevSrtare => {
      return {
        sizes: [...prevSrtare.sizes.filter(size => size !== deletedSize)]
      };
    });
  };

  handlePictureAdd = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        picture: "",
        pictures: [...prevState.pictures, prevState.picture]
      };
    });
  };

  handlePictureRemove = deletedPic => {
    this.setState(prevState => {
      return {
        pictures: [
          ...prevState.pictures.filter(picture => picture !== deletedPic)
        ]
      };
    });
  };

  validateForm = formValues => {};

  renderTags = () => {
    return this.state.tags.map(tag => (
      <span className="tag is-warning" key={tag}>
        {tag}
        <button
          className="delete is-small"
          onClick={() => this.handleTagRemove(tag)}
        />
      </span>
    ));
  };

  handleTagRemove = delTagName => {
    this.setState(prevState => {
      return {
        tags: [...prevState.tags.filter(tag => tag !== delTagName)]
      };
    });
  };

  renderSizes = () => {
    return this.state.sizes.map(size => (
      <span className="tag is-warning" key={size}>
        {size}
        <button
          className="delete is-small"
          onClick={() => this.handleSizeeRemove(size)}
        />
      </span>
    ));
  };

  renderPicturesLinks = () => {
    return this.state.pictures.map(pictureLink => (
      <span className="tag is-warning" key={pictureLink}>
        {pictureLink}
        <button
          className="delete is-small"
          onClick={() => this.handlePictureRemove(pictureLink)}
        />
      </span>
    ));
  };

  renderFormTitle = () => {
    const { productId } = this.props.match.params;

    if (!productId) {
      return (
        <header>
          <h2 className="title">Edit product</h2>
          <p className="title">Product name</p>
        </header>
      );
    } else {
      return (
        <header>
          <h2 className="title">Add new product</h2>
        </header>
      );
    }
  };

  render() {
    const { productId } = this.props.match.params;

    return (
      <form className="product-edit-form" onSubmit={this.handleFormSubmit}>
        <h2 className="title">
          {productId ? `Edit product: ${productId}` : `Add new product`}
        </h2>
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <div className="control">
            <input
              value={this.state.name}
              onChange={this.handleFormChange}
              className="input"
              name="name"
              id="name"
              type="text"
              placeholder="Product Name"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="price" className="label">
            Price
          </label>
          <div className="control">
            <input
              value={this.state.price}
              onChange={this.handleFormChange}
              className="input"
              name="price"
              id="price"
              type="number"
              step="0.1"
              placeholder="Product price"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Product status</label>
          <div className="control">
            <label className="radio">
              <input
                onChange={this.handleFormChange}
                type="radio"
                name="isActive"
                value="true"
                defaultChecked={this.state.isActive}
              />
              Active
            </label>
            <label className="radio">
              <input
                onChange={this.handleFormChange}
                type="radio"
                name="isActive"
                value="false"
                defaultChecked={!this.state.isActive}
              />
              Not active
            </label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="pictures" className="label">
            Picture Url
          </label>
          <div className="control columns">
            <div className="column is-8">
              <input
                value={this.state.picture}
                onChange={this.handleFormChange}
                className="input"
                name="picture"
                id="picture"
                type="text"
                placeholder="Product picture"
              />
            </div>
            <div className="column">
              <button
                disabled={this.state.picture.trim() === ""}
                className="button is-light"
                onClick={this.handlePictureAdd}
              >
                Add picture
              </button>
            </div>
          </div>
        </div>
        {this.state.pictures.length > 0 ? (
          <Fragment>
            <p>Added pictures</p>
            <div className="columns">
              <div className="column">{this.renderPicturesLinks()}</div>
            </div>
          </Fragment>
        ) : null}
        <div className="field">
          <label htmlFor="sizes" className="label">
            Product sizes
          </label>
          <div className="control columns">
            <div className="column is-8">
              <div className="select">
                <select
                  value={this.state.size}
                  name="size"
                  id="size"
                  onChange={this.handleFormChange}
                >
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
            </div>
            <div className="column">
              <button
                disabled={this.state.size.trim() === ""}
                className="button is-light"
                onClick={this.handleSizeAdd}
              >
                Add size
              </button>
            </div>
          </div>
        </div>
        {this.state.sizes.length > 0 ? (
          <Fragment>
            <p>Added sizes</p>
            <div className="columns">
              <div className="column">{this.renderSizes()}</div>
            </div>
          </Fragment>
        ) : null}
        <div className="field">
          <label htmlFor="tag" className="label">
            Product tag
          </label>
          <div className="control columns">
            <div className="column is-8">
              <input
                value={this.state.tag}
                onChange={this.handleFormChange}
                className="input"
                name="tag"
                id="tag"
                type="text"
                placeholder="Product tag"
              />
            </div>
            <div className="column">
              <button
                disabled={this.state.tag.trim() === ""}
                className="button is-light"
                onClick={this.handleTagAdd}
              >
                Add tag
              </button>
            </div>
          </div>
        </div>
        {this.state.tags.length > 0 ? (
          <Fragment>
            <p>Added tags</p>
            <div className="columns">
              <div className="column">{this.renderTags()}</div>
            </div>
          </Fragment>
        ) : null}

        <div className="field">
          <label htmlFor="color" className="label">
            Product color
          </label>
          <div className="control">
            <input
              value={this.state.color}
              onChange={this.handleFormChange}
              className="input"
              name="color"
              id="color"
              type="text"
              placeholder="Product color"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="brand" className="label">
            Product brand
          </label>
          <div className="control">
            <input
              value={this.state.brand}
              onChange={this.handleFormChange}
              className="input"
              name="brand"
              id="brand"
              type="text"
              placeholder="Product brand"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="inStock" className="label">
            Number in stock
          </label>
          <div className="control">
            <input
              value={this.state.inStock}
              onChange={this.handleFormChange}
              className="input"
              name="inStock"
              id="inStock"
              type="number"
              min="0"
              placeholder="Product stock"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="discount" className="label">
            Discount percentage
          </label>
          <div className="control">
            <input
              value={this.state.discount}
              onChange={this.handleFormChange}
              className="input"
              name="discount"
              id="discount"
              type="number"
              min="0"
              placeholder="Product discount"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="category" className="label">
            Category
          </label>
          <div className="control">
            <div className="select">
              <select
                value={this.state.category}
                name="category"
                id="category"
                onChange={this.handleFormChange}
              >
                <option>dress</option>
                <option>overall</option>
                <option>jacket</option>
                <option>trousers</option>
                <option>skirt</option>
                <option>other</option>
                <option>accesory</option>
              </select>
            </div>
          </div>
        </div>
        <div htmlFor="description" className="field">
          <label className="label">Product Description</label>
          <div className="control">
            <textarea
              value={this.state.description}
              onChange={this.handleFormChange}
              name="description"
              id="description"
              className="textarea"
              placeholder="Textarea"
            />
          </div>
        </div>
        <div className="field">
          <div className="field-label" />
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary button-submit">
                  {productId ? "Update product" : "Add product"}
                </button>

                <button
                  onClick={this.handleFormClear}
                  className="button is-danger"
                >
                  Cancel and clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(ProductEditForm);
