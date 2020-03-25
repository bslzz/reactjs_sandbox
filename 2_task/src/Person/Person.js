import React from 'react';
import './Person.css';

const Person = props => {
  return (
    <div className="personcard">
      <h1>Hello, My name is {props.name}</h1>
      <p>I am a {props.gender}</p>
    </div>
  );
};

export default Person;
