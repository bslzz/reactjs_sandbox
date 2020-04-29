import React from 'react';
import { CardColumns, Card, Container } from 'react-bootstrap';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import './Blog.css';
import Postdata from '../../Postdata';
import Post from '../Post/Post';

const Blog = () => {
  let match = useRouteMatch();
  const post = Postdata;

  const blogList = post.map((post) => {
    return (
      <Container>
        <CardColumns className="d-inline-block" style={{ marginTop: '1rem' }}>
          <Card className="cardPosts" key={post.id} border="secondary">
            <Card.Img variant="top" src={post.image} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>

              <Link className="nav-link" to={`${match.url}/${post.title}`}>
                Read More...
              </Link>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
    );
  });
  return (
    <Switch>
      <Route path="/blog/:postId">
        <Post />
      </Route>
      <Route path={match.path}>{blogList}</Route>
    </Switch>
  );
};

export default Blog;
