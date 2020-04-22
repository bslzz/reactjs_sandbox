import React, { useState } from 'react';
import './App.css';
import Button from './Buttons/Buttons';
import Content from './Content/Content';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHeartBroken,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [hearts, setHearts] = useState(0);
  const [heartBreaks, setHeartBreaks] = useState(0);

  const addHandler = () => {
    setHearts(hearts + 1);
  };

  const removeHandler = () => {
    setHeartBreaks(heartBreaks + 1);
  };

  const resetHandler = () => {
    setHearts(0);
    setHeartBreaks(0);
  };

  return (
    <div className="likestask">
      <div className="buttons">
        <Button click={addHandler}>
          <FontAwesomeIcon className="far" icon={faHeart} />
        </Button>
        <Button click={removeHandler}>
          <FontAwesomeIcon className="fas" icon={faHeartBroken} />
        </Button>
        <Button click={resetHandler}>
          <FontAwesomeIcon className="fas reset" icon={faUndo} />
        </Button>
      </div>

      <div className="content">
        <Content hearts={hearts} heartBreaks={heartBreaks} />
      </div>
    </div>
  );
};
export default App;
