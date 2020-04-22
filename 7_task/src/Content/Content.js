import React from 'react';
import './Content.css';

const Content = ({ hearts, heartBreaks }) => {
  if (hearts === 0 && heartBreaks === 0) {
    return (
      <div className="myContents">
        <h1>
          Nothing to show. <br /> Click emojis to see the score.
        </h1>
      </div>
    );
  }
  return (
    <div className="myContents">
      <h1>Votes:</h1>
      <h2>Hearts: {hearts}</h2>
      <h2>Heartbreaks: {heartBreaks}</h2>
    </div>
  );
};

export default Content;
