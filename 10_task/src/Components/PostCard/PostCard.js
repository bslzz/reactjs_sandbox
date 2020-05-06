import React from 'react';

import './PostCard.css';
import { Link } from 'react-router-dom';

const PostCard = ({ title, img, desc, link, author, remove }) => {
  return (
    <div className="postCard">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <p>{desc}</p>

      <Link to={link}>Read more</Link>
      <button onClick={remove}>Remove this post</button>
    </div>
  );
};

export default PostCard;
