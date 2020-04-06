import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';

class App extends Component {
  render() {
    return (
      <div className="mygame">
        <div className="header">
          <h1>Speedtest Game</h1>
          <p>Your score: 0</p>
        </div>
        <main>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
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
