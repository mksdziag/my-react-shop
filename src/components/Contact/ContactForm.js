import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label is-italic">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your Name" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label is-italic">Username</label>
              <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Your username" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label is-italic">Email</label>
              <div className="control ">
                <input className="input" type="email" placeholder="Email input" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <label className="label is-italic">Subject</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Order</option>
                    <option>Shipping</option>
                    <option>Return</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-italic">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" /> I agree to the{' '}
                  <a href="https://www.onet.pl">terms and conditions</a>
                </label>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
