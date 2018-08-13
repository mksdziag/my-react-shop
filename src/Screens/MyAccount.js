import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchOrders, logOutUser, fetchWishList } from '../store/actions/';

import SubPageHeader from '../components/SubPageHeader';
import WishList from '../components/Account/WishList';
import OrderList from '../components/Account/OrderList';
import ModalBlank from '../components/UI/Modals/ModalBlank';
import LoginForm from '../components/Account/LoginForm';
import UserInfo from '../components/Account/UserInfo';

class MyAccount extends Component {
  state = {
    userEmail: null,
  };

  componentDidMount() {
    const { userEmail } = this.state;
    const { isUserLogged, fetchOrders, fetchWishList } = this.props;
    if (isUserLogged) {
      fetchOrders(userEmail);
      fetchWishList(userEmail);
    }
  }
  // componentDidUpdate() {
  //   const { userEmail } = this.state;
  //   const { isUserLogged, fetchOrders, fetchWishList } = this.props;
  //   if (isUserLogged) {
  //     fetchOrders(userEmail);
  //     fetchWishList(userEmail);
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.userEmail !== prevState.userEmail) {
      return { userEmail: nextProps.user.userEmail };
    } else return null;
  }

  render() {
    const { isUserLogged } = this.props;

    return (
      <div className="container">
        <SubPageHeader title="My Account" subtitle="Manage Your orders and details" />
        {isUserLogged ? (
          <Fragment>
            <UserInfo user={this.state.userEmail} />
            <section className="section section--paddingless-vertical">
              <div className="columns">
                <div className="column is-7">
                  <h3 className="title is-size-4">My orders</h3>
                  <OrderList />
                </div>
                <div className="column is-5 is-offset-1-widescreen is-4-widescreen">
                  <h3 className="title is-size-4">My wish list</h3>
                  <WishList />
                </div>{' '}
              </div>
            </section>
          </Fragment>
        ) : (
          <div className="columns">
            <LoginForm />
          </div>
        )}
        <ModalBlank isModalActive={false} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserLogged: state.user.isLogged,
    user: state.user,
  };
};

const mapDispachToProps = dispatch => {
  return {
    fetchOrders: userEmail => dispatch(fetchOrders(userEmail)),
    fetchWishList: userEmail => dispatch(fetchWishList(userEmail)),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(MyAccount);
