import React from 'react';
import './Circle.css';

const Circle = (props) => {
  return (
    <div
      className={'circle' + (props.active ? ' active' : ' ')}
      onClick={props.clicked}
      style={{
        backgroundColor: props.active ? props.active : props.buttonColor,
      }}
    ></div>
  );
}; /* clicked can be named anything as u wish and should be passed to app.js*/

// ? = if
// : = else, if not

export default Circle;
