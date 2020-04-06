import React from 'react';
import './Circle.css';

const Circle = (props) => {
  return <div className="circle" onClick={props.clicked}></div>;
};

export default Circle;
