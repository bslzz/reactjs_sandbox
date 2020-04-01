import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component {
  render() {
    return (
      <div className="myform">
        <main>
          <header>
            <h1>Contact me</h1>
          </header>
          <Form />
        </main>

        <div>
          <View />
        </div>
      </div>
    );
  }
}

export default App;
