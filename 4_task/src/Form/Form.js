import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form>
      <label htmlFor="fname">
        First name
        <input type="text" name="fname" />
      </label>
      <label htmlFor="lname">
        Last name
        <input type="text" name="lname" />
      </label>
      <label htmlFor="number">
        Phone number
        <input type="number" name="number" />
      </label>
      <label htmlFor="message">
        Message
        <textarea name="message" id="msg"></textarea>
      </label>
    </form>
  );
};

export default Form;
