import React from 'react';
import axios from 'axios';
import { Card, CardGroup, Container } from 'react-bootstrap';

import './Blog.css';

class Blog extends React.Component {
  state = {
    photos: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((res) => {
        const photos = res.data;
        this.setState({ photos, loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.photos ? (
          <div>Loading....Please Wait</div>
        ) : (
          <Container>
            {this.state.photos.map((photo) => (
              <CardGroup
                style={{
                  marginTop: '20px',
                  marginRight: '10px',
                  display: 'inline-block',
                  width: '24%',
                }}
              >
                <Card className="cardPosts" key={photo.id} border="secondary">
                  <Card.Img variant="top" src={photo.url} />
                  <Card.Body>
                    <Card.Title>Title: {photo.title}</Card.Title>
                    <Card.Text>ThumbnailUrl: {photo.thumbnailUrl}</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            ))}
          </Container>
        )}
      </div>
    );
  }
}
export default Blog;
