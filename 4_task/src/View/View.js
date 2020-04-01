import React from 'react';
import './View.css';

const View = () => {
  return (
    <div className="viewbox">
      <header>
        <h1>This is your input box</h1>
      </header>
      <div className="inputbox">
        First Name <input type="text" placeholder="First Name" />
        Last Name <input type="text" placeholder="Last Name" />
        Phone Number <input type="number" placeholder="Phone number" />
        Message{' '}
        <textarea name="message" id="mesg" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default View;
