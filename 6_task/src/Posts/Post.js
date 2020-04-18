import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="likes">
          <i class="far up fa-thumbs-up" onClick={props.like}></i>
          <i class="far down fa-thumbs-down" onClick={props.dislike}></i>
        </div>
        <div className="card text">
          <h2>{props.title}</h2>
          <h3>{props.author}</h3>
          <p>{props.description}</p>
        </div>
        <span>
          <i class="fas fa-times" onClick={props.remove}></i>
        </span>
      </div>
    </div>
  );
};

export default Post;
