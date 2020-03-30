import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };

  addHandler = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  subtractHandler = () => {
    this.setState({ likes: this.state.likes - 1 });
  };
  resetHandler = () => {
    this.setState({ likes: (this.state.likes = 0) });
  };

  render() {
    return (
      <div>
        <h1>Total likes: {this.state.likes}</h1>
        <button onClick={this.addHandler}>Add like</button>
        <button onClick={this.subtractHandler}>Subtract like</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
