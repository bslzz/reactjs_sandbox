import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';

class App extends Component {
  state = {
    score: 0,
  };

  clickHandler = (circleNumber) => {
    console.log('Clicked', circleNumber);
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div className="mygame">
        <div className="header">
          <h1>Speedtest Game</h1>
          <p>Your score: {this.state.score}</p>
        </div>
        <main>
          <Circle clicked={this.clickHandler.bind(this, 1)} />
          <Circle clicked={this.clickHandler.bind(this, 2)} />
          <Circle clicked={this.clickHandler.bind(this, 3)} />
          <Circle clicked={this.clickHandler.bind(this, 4)} />
        </main>
        <div className="buttons">
          <button>Start Game</button>
          <button>End Game</button>
        </div>
      </div>
    );
  }
}

export default App;
