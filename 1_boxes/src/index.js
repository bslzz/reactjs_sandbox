import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Alexa() {
  return (
    <div class="box">
      <h1>Bishal</h1>
      <p>Title: CEO</p>
      <p>Age: 50</p>
    </div>
  );
}
ReactDOM.render(<Alexa />, document.querySelector('#p1'));

function Person(props) {
  return (
    <div class="box">
      <h1>Name: {props.name}</h1>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
const app = (
  <div>
    <Person name="Sara" title="CEO" age="25" />
    <Person name="Mara" title="Designer" age="35" />
    <Person name="Hara" title="Developer" age="45" />
  </div>
);

ReactDOM.render(app, document.querySelector('#root'));