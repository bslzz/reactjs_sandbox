import React from 'react';
import './View.css';

const View = props => {
  return (
    <div className="viewbox">
      <header>
        <h1>This is your input box</h1>
      </header>
      <div className="inputbox">
        First Name: <p> {props.fname}</p>
        Last Name: <p> {props.lname}</p>
        Phone Number: <p> {props.number}</p>
        Message: <textarea>{props.msg}</textarea>
      </div>
    </div>
  );
};

export default View;
