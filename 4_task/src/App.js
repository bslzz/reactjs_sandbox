import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phone: '',
    message: '',
  };
  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="myform">
        <div className="form-header">
          <h1>Contact me</h1>
          <Form onChange={this.changeHandler} />
        </div>

        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
