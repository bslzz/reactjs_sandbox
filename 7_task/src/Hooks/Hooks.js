import React, { Component } from 'react';
import './Hooks.css';


class Hooks extends Component {
  state = { counter: 0 };

  addHandler = () => this.setState({ counter: this.state.counter + 1 });
  removeHandler = () => this.setState({ counter: this.state.counter - 1 });
  resetHandler = () => this.setState({ counter: 0 });

  render() {
    return (
      <div className="counter">
        <h1>You have clicked {this.state.counter} times</h1>
        <button onClick={this.addHandler}>Add</button>
        <button onClick={this.removeHandler}>Remove</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}


