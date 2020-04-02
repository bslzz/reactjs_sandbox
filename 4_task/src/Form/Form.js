import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">First name</label>
        <input
          type="text"
          name="firstname"
          onChange={this.changeHandler}
        />{' '}
        <br />
        <label htmlFor="lname">Last name</label>
        <input type="text" name="lastname" onChange={this.changeHandler} />{' '}
        <br />
        <label htmlFor="number">Phone number</label>
        <input type="number" name="phone" onChange={this.changeHandler} />{' '}
        <br />
        <label htmlFor="message">Message</label>
        <textarea name="message" onChange={this.changeHandler}></textarea>
      </form>
    );
  }
}

export default Form;
