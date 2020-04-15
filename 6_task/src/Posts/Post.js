import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.description}</p>
        <span>
          <i class="fas fa-times" onClick={props.remove}></i>
        </span>
      </div>
    </div>
  );
};

export default Post;
