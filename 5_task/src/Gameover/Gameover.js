import React from 'react';
import './Gameover.css';

const closeHandler = () => {
  window.location.reload();
};

const Gameover = (props) => {
  return (
    <div className="overlay">
      <div className="popupbox">
        <h2>You scored</h2>
        <h3>{props.points}</h3>
        <p onClick={closeHandler} class="fas fa-times"></p>
        <img src="emoji.png" alt="emoji" />
      </div>
    </div>
  );
};

export default Gameover;
