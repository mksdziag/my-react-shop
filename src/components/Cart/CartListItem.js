import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { ic_remove_shopping_cart as cartRemove } from 'react-icons-kit/md/ic_remove_shopping_cart';

import './CartListItem.css';

const CartListItem = props => {
  const {
    idx,
    name,
    price,
    onItemRemove,
    quantity,
    id,
    onChangeItemQuantity,
    onChangeItemSize,
  } = props;

  const onQtyChangeHandler = e => {
    const quamtity = e.target.valueAsNumber;
    onChangeItemQuantity(id, quamtity);
  };

  const onSizeChangeHandler = e => {
    const size = e.target.value;
    onChangeItemSize(id, size);
  };

  return (
    <li className="box cart-item">
      <div className="columns level ">
        <div
          className="column is-1 has-text-left-touch	
 has-text-centered"
        >
          <p className="cart-item__lp">{idx + 1}.</p>
        </div>
        <div className="column is-1">
          <div className="field">
            <div className="control">
              <input
                className="input is-small"
                type="number"
                value={quantity}
                placeholder="quantity"
                onChange={onQtyChangeHandler}
                min={1}
              />
              <div className="is-size-8 has-text-grey-lighter ">qty:</div>
            </div>
          </div>
        </div>
        <div className="column is-2 ">
          <div className="select is-small">
            <select onChange={onSizeChangeHandler} name="size" id="size">
              <option className="cart-item__size">S</option>
              <option className="cart-item__size">M</option>
              <option className="cart-item__size">L</option>
              <option className="cart-item__size">XL</option>
              <option className="cart-item__size">XXL</option>
            </select>
          </div>
          <div className="is-size-7 has-text-grey-lighter ">size:</div>
        </div>
        <div className="column is-5">
          <Link
            className="cart-item__name has-text-dark has-text-weight-semibold"
            to={`/product/${id}`}
          >
            {name}
          </Link>
          <div className="is-size-7 has-text-grey-lighter ">product:</div>
        </div>
        <div className="column is-2">
          <p className="has-text-weight-semibold cart-item__price">{price}</p>
          <div className="is-size-7 has-text-grey-lighter ">price:</div>
        </div>
        <div className="column is-1">
          <div
            className="cart-item_a_ctions has-text-left-touch	
 has-text-centered"
          >
            <button onClick={onItemRemove} className="button is-small is-danger is-uppercase">
              <Icon size={18} icon={cartRemove} />
            </button>
            <div className="is-size-7 has-text-grey-lighter ">remove</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
