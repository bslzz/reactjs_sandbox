import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

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
    this.setState({ likes: 0 });
  };

  render() {
    return (
      <div>
        <Header />
        <main>
          <h1
            className={
              this.state.likes === 0
                ? 'likes'
                : this.state.likes % 2 === 0
                ? 'likes even'
                : 'likes odd'
            }
          >
            Total likes: {this.state.likes}
          </h1>
        </main>
        <section className="btn">
          <button onClick={this.addHandler}>Add like</button>
          <button onClick={this.subtractHandler}>Subtract like</button>
          <button onClick={this.resetHandler}>Reset</button>
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
