import React, { useState } from 'react';
import './NewPost.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    desc: '',
    author: '',
    img: '',
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };
  let history = useHistory();
  const addPostHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/posts', newPost).then((response) => {
      alert('New Post Added Successfully');
      history.push('/blog');
      console.log(response.data);
    });
  };

  return (
    <>
      <form className="newPost">
        <h1>Add new post</h1>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="title">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
            autoComplete="off"
          />
        </div>
        <div>
          <label className="img" htmlFor="img">
            Image URL
          </label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
            autoComplete="off"
          />
        </div>
        <Button className="button" onClick={addPostHandler} type="submit">
          Add new post
        </Button>
      </form>
    </>
  );
};

export default NewPost;
