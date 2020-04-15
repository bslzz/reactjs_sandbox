import React, { Component } from 'react';
import './App.css';
import Post from './Posts/Post';

const myTexts = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, illum similique? Exercitationem perferendis assumenda vitae!',
    author: 'Bishal Aryal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum et voluptate nisi minima praesentium ex doloribus esse ipsa. Perspiciatis maiores aliquam quae nihil porro quibusdam delectus ipsum nemo quod!',
    image:
      'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, illum similique? Exercitationem perferendis assumenda vitae!',
    author: 'Bishal Aryal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum et voluptate nisi minima praesentium ex doloribus esse ipsa. Perspiciatis maiores aliquam quae nihil porro quibusdam delectus ipsum nemo quod!',
    image:
      'https://images.unsplash.com/photo-1473277319276-325d492fca49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, illum similique? Exercitationem perferendis assumenda vitae!',
    author: 'Bishal Aryal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum et voluptate nisi minima praesentium ex doloribus esse ipsa. Perspiciatis maiores aliquam quae nihil porro quibusdam delectus ipsum nemo quod!',
    image:
      'https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

class App extends Component {
  state = {
    posts: myTexts,
  };
  removeHandler = (removeId) => {
    console.log('clicked' + removeId);
    const oldPosts = [...this.state.posts];
    oldPosts.splice(removeId, 1);
    this.setState({ posts: oldPosts });
  };

  render() {
    const postList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          description={post.description}
          image={post.image}
          remove={this.removeHandler.bind(this, index)}
        />
      );
    });
    return <div className="myCards">{postList}</div>;
  }
}
export default App;
