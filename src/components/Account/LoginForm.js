import React, { Component } from "react";
import { connect } from "react-redux";

import { registerNewUser, logInUser, clearMessage } from "../../store/actions";

class LoginForm extends Component {
  state = {
    mode: "login",
    email: "",
    password: "",
    message: this.props.message
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.message !== prevState.message) {
      return { message: nextProps.message };
    } else return null;
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (this.state.mode === "login") {
      this.props.logInUser({
        email,
        password
      });
    } else {
      this.props.registerNewUser({
        email,
        password
      });
    }
  }

  handleEmailChange(e) {
    const email = e.target.value;
    this.setState({ email });
  }
  handlePasswordChange(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  handleModeSwitch(e) {
    e.preventDefault();
    this.setState(prevState =>
      prevState.mode === "login" ? { mode: "register" } : { mode: "login" }
    );
  }

  render() {
    const { clearMessage } = this.props;
    return (
      <div className="column is-offset-3 is-6">
        <header className="heading">
          <h2 className="title is-size-4">
            {this.state.mode === "login" ? "Log In" : "Register"}:
          </h2>
        </header>
        {this.state.message ? (
          <div className="notification is-warning">
            <button className="delete" onClick={clearMessage} />
            {this.state.message}
          </div>
        ) : null}
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <div className="field">
            <label className="label">email</label>
            <div className="control">
              <input
                className="input"
                onChange={e => this.handleEmailChange(e)}
                type="email"
                placeholder="your email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">password</label>
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={e => this.handlePasswordChange(e)}
            />
          </div>
          <div className="control buttons">
            <input
              type="submit"
              value={this.state.mode === "login" ? "Log In" : "Register"}
              className="button is-primary is-fullwidth"
            />
            <button
              onClick={e => this.handleModeSwitch(e)}
              className="button is-text"
            >
              Swich to {this.state.mode === "login" ? "Register" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    message: state.info.message
  };
};
const mapDispatchToProps = dispatch => {
  return {
    registerNewUser: user => dispatch(registerNewUser(user)),
    logInUser: user => dispatch(logInUser(user)),
    clearMessage: () => dispatch(clearMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
