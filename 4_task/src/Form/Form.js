import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <form>
      <label htmlFor="fname">First name</label>
      <input type="text" name="firstname" onChange={props.onChange} />
      <br />
      <label htmlFor="lname">Last name</label>
      <input type="text" name="lastname" onChange={props.onChange} />
      <br />
      <label htmlFor="number">Phone number</label>
      <input type="number" name="phone" onChange={props.onChange} />
      <br />
      <label htmlFor="message">Message</label>
      <textarea name="message" onChange={props.onChange}></textarea>
    </form>
  );
};

export default Form;
