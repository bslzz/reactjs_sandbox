import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

import Postdata from '../../Postdata';

const Post = () => {
  let { postId } = useParams();
  let post = Postdata.find((p) => p.title === postId);
  return (
    <Container>
      <Card style={{ marginTop: '1rem' }}>
        <Card.Img variant="top" src={post.image} alt={post.title} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
          <Link className="nav-link" to="/blog">
            Back to blog page
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Post;
