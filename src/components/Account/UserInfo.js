import React, { Component } from 'react';
import { connect } from 'react-redux';

import './UserInfo.css';
import { logOutUser, updateUserDetails } from '../../store/actions/';
import db from '../../db/db';

class UserInfo extends Component {
  state = {
    editing: false,
    userEmail: this.props.user.userEmail,
    name: this.props.user.name,
    secondName: this.props.user.secondName,
    street: this.props.user.street,
    propNum: this.props.user.propNum,
    city: this.props.user.city,
    zip: this.props.user.zip,
  };

  componentDidMount() {
    db.collection('users')
      .doc(this.props.user.userEmail)
      .get()
      .then(doc => {
        if (doc.exists) {
          const userDetails = doc.data();
          this.setState({
            name: userDetails.name,
            secondName: userDetails.secondName,
            street: userDetails.street,
            propNum: userDetails.propNum,
            city: userDetails.city,
            zip: userDetails.zip,
          });
        } else {
          console.log('No such document!');
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
  }

  handleLogOut = () => {
    this.props.logOutUser();
  };

  handleDetailsUpdate = () => {
    if (this.state.editing === false) {
      this.setState(prevState => {
        return { editing: !prevState.editing };
      });
    } else {
      const user = {
        userEmail: this.props.user.userEmail,
        name: this.state.name,
        secondName: this.state.secondName,
        street: this.state.street,
        propNum: this.state.propNum,
        city: this.state.city,
        zip: this.state.zip,
      };
      this.props.updateUserDetails(user);
      this.setState(prevState => {
        return { editing: !prevState.editing };
      });
    }
  };

  handleCancelUpdate = () => {
    this.setState(prevState => {
      return { editing: !prevState.editing };
    });
  };

  handleInputChange = (e, field) => {
    const value = e.target.value;
    this.setState({
      [field]: value,
    });
  };

  render() {
    let userInfo = (
      <div className="columns">
        <div className="column user-info__details">
          <div className="user-info__name">
            <span className="is-size-7 is-italic has-text-grey-light">First name:</span>
            <p>{this.state.name}</p>
          </div>
          <div className="user-info__sec-name">
            <span className="is-size-7 is-italic has-text-grey-light">Second name:</span>
            <p>{this.state.secondName}</p>
          </div>
          <div className="user-info__email">
            <span className="is-size-7 is-italic has-text-grey-light">email:</span>
            <p>{this.state.userEmail}</p>
          </div>
        </div>
        <div className="column user-info__address">
          <div className="user-info__street">
            <div className="columns is-mobile ">
              <div className="column  is-8">
                <span className="is-size-7 is-italic has-text-grey-light">Street:</span>
                <p>{this.state.street}</p>
              </div>
              <div className="column is-4 ">
                <span className="is-size-7 is-italic has-text-grey-light">no.</span>
                <p>{this.state.propNum}</p>
              </div>
            </div>
          </div>
          <div className="user-info__city">
            <span className="is-size-7 is-italic has-text-grey-light">City:</span>
            <p>{this.state.city}</p>
          </div>
          <div className="user-info__zip">
            <span className="is-size-7 is-italic has-text-grey-light">zip code:</span>
            <p>{this.state.zip}</p>
          </div>
        </div>
        <div className="column is-2 user-info__action buttons control">
          <button
            onClick={this.handleLogOut}
            className="button is-warning is-inverted is-fullwidth is-small log-out-button "
          >
            Log Out
          </button>
          <button
            onClick={this.handleDetailsUpdate}
            className="button is-warning is-inverted is-fullwidth is-outlined is-small is-inverted "
          >
            Update my detalis
          </button>
        </div>
      </div>
    );

    if (this.state.editing) {
      userInfo = (
        <div className="columns">
          <form className="column">
            <div className="columns">
              <div className="column user-info__details">
                <div className="user-info__name">
                  <label className="is-size-7 is-italic has-text-grey-light">First name:</label>
                  <input
                    className="input"
                    onChange={e => this.handleInputChange(e, 'name')}
                    name="name"
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div className="user-info__sec-name">
                  <label className="is-size-7 is-italic has-text-grey-light">Second name:</label>
                  <input
                    className="input"
                    name="secondName"
                    onChange={e => this.handleInputChange(e, 'secondName')}
                    type="text"
                    placeholder="second name"
                  />
                </div>
                <div className="user-info__email">
                  <label className="is-size-7 is-italic has-text-grey-light">email:</label>
                  <p>{this.state.userEmail}</p>
                </div>
              </div>
              <div className="column user-info__address">
                <div className="user-info__street">
                  <div className="columns is-mobile ">
                    <div className="column  is-8">
                      <label className="is-size-7 is-italic has-text-grey-light">Street:</label>
                      <input
                        className="input"
                        onChange={e => this.handleInputChange(e, 'street')}
                        name="street"
                        type="text"
                        placeholder="name"
                      />
                    </div>
                    <div className="column is-4 ">
                      <label className="is-size-7 is-italic has-text-grey-light">no.</label>
                      <input
                        className="input"
                        onChange={e => this.handleInputChange(e, 'propNum')}
                        name="propNum"
                        type="text"
                        placeholder="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="user-info__city">
                  <label className="is-size-7 is-italic has-text-grey-light">City:</label>
                  <input
                    className="input"
                    onChange={e => this.handleInputChange(e, 'city')}
                    name="city"
                    type="text"
                    placeholder="city"
                  />
                </div>
                <div className="user-info__zip">
                  <label className="is-size-7 is-italic has-text-grey-light">zip code:</label>
                  <input
                    className="input"
                    onChange={e => this.handleInputChange(e, 'zip')}
                    name="zip"
                    type="text"
                    placeholder="zip"
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="column is-2 user-info__action buttons control">
            <button
              onClick={this.handleLogOut}
              className="button is-warning is-inverted is-fullwidth is-small log-out-button "
            >
              Log Out
            </button>
            <button
              onClick={this.handleDetailsUpdate}
              className="button is-warning is-inverted is-fullwidth is-outlined is-small is-inverted "
            >
              {this.state.editing ? 'Save details' : 'Edit my detalis'}
            </button>
            <button
              onClick={this.handleCancelUpdate}
              className="button is-warning is-inverted is-fullwidth is-outlined is-small is-inverted "
            >
              Cancel changes
            </button>
          </div>
        </div>
      );
    }

    return <section className="user-info">{userInfo}</section>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
const mapDispachToProps = dispatch => {
  return {
    updateUserDetails: user => dispatch(updateUserDetails(user)),
    logOutUser: () => dispatch(logOutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(UserInfo);
