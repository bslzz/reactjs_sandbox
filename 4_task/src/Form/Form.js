import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return <form></form>;
  }
}

export default Form;
