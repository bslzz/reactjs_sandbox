import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle.js';
import Gameover from './Gameover/Gameover.js';

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOverBox: false,
  };

  circleSpeed = 1200;
  timer = undefined;

  //Finding the next random circle

  next = () => {
    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });
    this.timer = setTimeout(this.next, this.circleSpeed);
    console.log(this.state.current);
  };

  //finding a random number

  clickHandler = (circleNumber) => {
    console.log('Clicked', circleNumber);
    this.setState({ score: this.state.score + 1 });
  };

  startHandler = () => {
    this.next();
  };
  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOverBox: true,
    });
  };

  render() {
    return (
      <div className="mygame">
        <div className="header">
          <h1>Test your speed</h1>
          <div className="score">
            Score: <div className="scorecard">{this.state.score}</div>
          </div>
        </div>

        {this.state.gameOverBox && <Gameover points={this.state.score} />}

        <main>
          <Circle
            active={this.state.current === 1}
            buttonColor="#17EEAC"
            clicked={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            buttonColor="green"
            clicked={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            buttonColor="pink"
            clicked={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            buttonColor="#DBFF33"
            clicked={this.clickHandler.bind(this, 4)}
          />
        </main>

        <div className="buttons">
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.endHandler}>End Game</button>
        </div>
      </div>
    );
  }
}

export default App;
