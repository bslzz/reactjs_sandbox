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
        <main>
          <header>
            <h1>Contact me</h1>
          </header>
          <Form />
          <form>
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              name="firstname"
              onChange={this.changeHandler}
            />{' '}
            <br />
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lastname"
              onChange={this.changeHandler}
            />{' '}
            <br />
            <label htmlFor="number">Phone number</label>
            <input
              type="number"
              name="phone"
              onChange={this.changeHandler}
            />{' '}
            <br />
            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={this.changeHandler}></textarea>
          </form>
        </main>

        <div>
          <View />
          <div className="inputbox">
            <p>
              First Name:{' '}
              <span className="fname">{' ' + this.state.firstname}</span>{' '}
            </p>

            <p>
              Last Name:
              <span className="lname">{' ' + this.state.lastname}</span>{' '}
            </p>

            <p>
              Phone number:
              <span className="phone">{' ' + this.state.phone}</span>{' '}
            </p>

            <p>
              Message:
              <span className="message">{' ' + this.state.message}</span>{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
