import React from 'react';

import './PostCard.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PostCard = ({ title, img, desc, link, author, remove }) => {
  return (
    <div className="postCard">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <p>{desc}</p>

      <Link className="link" to={link}>
        Read more..
      </Link>
      <Button className="button" onClick={remove}>
        Remove this post
      </Button>
    </div>
  );
};

export default PostCard;
