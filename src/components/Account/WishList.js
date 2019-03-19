import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./WishList.css";

import AddToCartButton from "../UI/Buttons/AddToCartButton";
import Loader from "../UI/Loaders/Loader";
import WishListButton from "../UI/Buttons/WishListButton";

import http from "../../utils/http";

class WishList extends React.Component {
  state = {
    wishListItems: [],
    loading: true
  };

  async componentDidMount() {
    const { props } = this;
    const { wishListIds } = props;
    const wishListItems = [];
    for (let wishListItemId of wishListIds) {
      const { data: wishListItem } = await http.get(
        `/products/${wishListItemId}`
      );
      wishListItems.push(wishListItem);
    }

    this.setState({ wishListItems, loading: false });
  }

  render() {
    const { wishListItems, loading } = this.state;

    let wishListItemsOutput = (
      <div className="content">
        <h4 className="is-size-6 has-text-weight-light has-text-grey ">
          No items on your list yet...
        </h4>
      </div>
    );

    if (wishListItems.length > 0) {
      wishListItemsOutput = wishListItems.map(item => {
        const { _id, pictures, name, price } = item;

        return (
          <li className="wish-list__item level columns is-mobile" key={_id}>
            <div className="column is-relative is-hidden-mobile">
              <WishListButton itemId={_id} />
            </div>
            <div className="column  is-paddingless wish-list__item-cell">
              <Link to={`/product/${_id}`}>
                <img
                  src={pictures[0]}
                  alt=""
                  className="wish-list__item-image"
                />
              </Link>
            </div>
            <div className="column is-5 wish-list__item-cell">
              <Link
                to={`/product/${_id}`}
                className="has-text-grey is-size-7 is-size-6-widescreen has-text-weight-semibold is-uppercase wish-list__item-name"
              >
                {name}
              </Link>
            </div>
            <div className="column wish-list__item-cell">
              <p className="has-text-danger has-text-weight-semibold wish-list__price">
                {price.toFixed(2)}$
              </p>
            </div>
            <div className="column wish-list__item-cell">
              <AddToCartButton
                iconOnly
                itemId={_id}
                product={{ ...item }}
                additionalClasses={"is-small "}
              />
            </div>
          </li>
        );
      });
    }

    return (
      <ul className="wish-list is-relative">
        {loading ? <Loader /> : wishListItemsOutput}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishListIds: state.wishList.wishListItems,
    loading: state.wishList.loading
  };
};

export default connect(mapStateToProps)(WishList);
