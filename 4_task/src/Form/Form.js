import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form>
      <label htmlFor="fname">First Name</label>
      <input type="text" />
      <label htmlFor="lname">Last Name</label>
      <input type="text" />
      <label htmlFor="number">Phone number</label>
      <input type="number" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="msg" cols="30" rows="10"></textarea>
    </form>
  );
};

export default Form;
