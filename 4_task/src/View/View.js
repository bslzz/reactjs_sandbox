import React from 'react';
import './View.css';

const View = (props) => {
  return (
    <div className="viewbox">
      <h1>This is your input box</h1>
      <div className="inputbox">
        <p>
          First Name:
          <span className="fname">{props.firstname}</span>
        </p>

        <p>
          Last Name:
          <span className="lname">{props.lastname}</span>
        </p>

        <p>
          Phone number:
          <span className="phone">{props.phone}</span>
        </p>

        <p>
          Message:
          <span className="message">{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
