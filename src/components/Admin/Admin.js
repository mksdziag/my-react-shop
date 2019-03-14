import React, { Component, Fragment } from "react";
import { Switch, Link, Route, withRouter } from "react-router-dom";
import ProductEditForm from "./ProductEditForm";
import ProductsList from "./ProductsList";
import "./Admin.css";

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div className="admin-actions">
          <div className="columns">
            <div className="column ">
              <Link
                to={`${this.props.match.path}/products/add-new`}
                className="button is-success is-fullwidth"
              >
                Add New product
              </Link>
            </div>
            <div className="column ">
              <Link
                to={`${this.props.match.path}/products/list`}
                className="button is-link is-fullwidth"
              >
                Manage Products
              </Link>
            </div>
            <div className="column">
              <Link to="/my-account" className="button is-primary is-fullwidth">
                My account
              </Link>
            </div>
            <div className="column">
              <button className="button is-warning is-inverted is-fullwidth">
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-8">
            <Switch>
              <Route
                path={`${this.props.match.path}/products/add-new`}
                component={ProductEditForm}
              />
              <Route
                path={`${this.props.match.path}/products/edit/:productId`}
                component={ProductEditForm}
              />
              <Route
                path={`${this.props.match.path}/products/list`}
                component={ProductsList}
              />
            </Switch>
          </div>
          <aside className="column is-4" />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Admin);
