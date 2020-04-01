import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      message: ''
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          value={this.state.firstname}
          name="firstname"
          onChange={this.changeHandler}
        />{' '}
        <br />
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          value={this.state.lastname}
          name="lastname"
          onChange={this.changeHandler}
        />{' '}
        <br />
        <label htmlFor="number">Phone number</label>
        <input
          type="number"
          value={this.state.phone}
          name="phone"
          onChange={this.changeHandler}
        />{' '}
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.changeHandler}
        ></textarea>
      </form>
    );
  }
}

export default Form;
