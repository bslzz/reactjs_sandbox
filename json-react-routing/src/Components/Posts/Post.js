import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardColumns, Card, Container } from 'react-bootstrap';

class Post extends React.Component {
  render() {
    return (
      <Container>
        <CardColumns style={{ marginTop: '1rem' }}>
          <Card className="cardPosts" border="secondary">
            <Card.Body>
              <Link className="nav-link" to="/blog">
                Back to blog page
              </Link>
            </Card.Body>
          </Card>
        </CardColumns>
        ))}
      </Container>
    );
  }
}

export default Post;
