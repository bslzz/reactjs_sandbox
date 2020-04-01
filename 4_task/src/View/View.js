import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return (
      <div className="viewbox">
        <h1>This is your input box</h1>
        <form className="form">
          <input type="text" placeholder="First Name" />
          <br />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="number" placeholder="Phone number" /> <br />
          <textarea placeholder="Message"></textarea>
        </form>
      </div>
    );
  }
}

export default View;
