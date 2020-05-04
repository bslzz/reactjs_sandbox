import React from 'react';
import { Container } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const NewPost = () => {
  return (
    <Container>
      <Form style={{ marginTop: '1rem', width: '50%' }}>
        <Form.Group controlId="formGroupEmail">
          <Form.Group controlId="formGroupTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewPost;
