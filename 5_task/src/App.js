import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mygame">
        <div className="header">
          <h1>Speedtest Game</h1>
          <input type="text" placeholder="Your Score" />
        </div>
        <div className="buttons">
          <button>Start Game</button>
          <button>End Game</button>
        </div>
      </div>
    );
  }
}

export default App;
