import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bishal Aryal', gender: 'male' },
      { name: 'Eerika', gender: 'female' },
      { name: 'Alex Hello', gender: 'male' }
    ]
  };

  render() {
    return (
      <div>
        <h1> Hello World</h1>
        <p> Hello Everyone</p>
        <Person
          name={this.state.persons[0].name}
          gender={this.state.persons[0].gender}
        />
        <Person
          name={this.state.persons[1].name}
          gender={this.state.persons[1].gender}
        />
        <Person
          name={this.state.persons[2].name}
          gender={this.state.persons[2].gender}
        />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <h1> Hello World</h1>
//       <p> Hello Everyone</p>
//       <Person name="Bishal" gender="male" />
//       <Person name="Eerika" gender="female" />
//       <Person name="Alex" gender="male" />
//     </div>
//   );
// };

export default App;
