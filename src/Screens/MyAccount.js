import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchOrders, logOutUser } from '../store/actions/';

import SubPageHeader from '../components/SubPageHeader';
import WishList from '../components/Account/WishList';
import OrderList from '../components/Account/OrderList';
import ModalBlank from '../components/UI/Modals/ModalBlank';
import LoginForm from './LoginForm';

class MyAccount extends Component {
  state = {
    user: null,
  };

  componentDidUpdate() {
    this.props.fetchOrders(this.state.user);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user !== prevState.user) {
      return { user: nextProps.user };
    } else return null;
  }

  handleLogOut = () => {
    this.props.logOutUser();
  };

  render() {
    const { isUserLogged } = this.props;

    return (
      <div className="container">
        <SubPageHeader title="My Account" />
        {isUserLogged ? (
          <Fragment>
            <div className="columns level">
              <div className="column is-offset-10 is-2 ">
                <button
                  onClick={this.handleLogOut}
                  className="button is-warning is-inverted is-fullwidth log-out-button "
                >
                  Log Out
                </button>
              </div>
            </div>
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
    user: state.user.user,
  };
};

const mapDispachToProps = dispatch => {
  return {
    fetchOrders: user => dispatch(fetchOrders(user)),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(MyAccount);
