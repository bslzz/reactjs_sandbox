import React from 'react';
import './Buttons.css';

const Button = ({ click, text, children }) => {
  return (
    <div>
      <button onClick={click}>
        {text}
        {children}
      </button>
    </div>
  );
};

export default Button;
