import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerNewUser, logInUser } from '../store/actions';

class LoginForm extends Component {
  state = {
    type: 'login',
    email: '',
    password: '',
  };

  handleFormSubmit(e) {
    e.preventDefault();

    if (this.state.type === 'login') {
      this.props.logInUser({ email: this.state.email, password: this.state.password });
    } else {
      this.props.registerNewUser({ email: this.state.email, password: this.state.password });
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
    this.setState(
      prevState => (prevState.type === 'login' ? { type: 'register' } : { type: 'login' })
    );
  }

  render() {
    return (
      <div className="column is-offset-3 is-6">
        <header className="heading">
          <h2 className="title is-size-4">
            {this.state.type === 'login' ? 'Log In' : 'Register'}:
          </h2>
        </header>
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
              value={this.state.type === 'login' ? 'Log In' : 'Register'}
              className="button is-primary is-fullwidth"
            />
            <button onClick={e => this.handleModeSwitch(e)} className="button is-text">
              Swich to {this.state.type === 'login' ? 'Register' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    registerNewUser: user => dispatch(registerNewUser(user)),
    logInUser: user => dispatch(logInUser(user)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
