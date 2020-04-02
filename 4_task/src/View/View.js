import React from 'react';
import './View.css';

const View = props => {
  return (
    <div className="viewbox">
      <h1>This is your input box</h1>
      <div className="inputbox">
        <p>First Name: {props.firstname}</p>

        <p>Last Name: {props.lastname}</p>

        <p>Phone number: {props.phone}</p>

        <p>Message: {props.message}</p>
      </div>
    </div>
  );
};

export default View;
