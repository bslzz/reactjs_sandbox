import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  return (
    <div>
      <h1> Hello World</h1>
      <p> Hello Everyone</p>
      <Person name="Bishal" gender="male" />
      <Person name="Eerika" gender="female" />
      <Person name="Alex" gender="male" />
    </div>
  );
};

export default App;
