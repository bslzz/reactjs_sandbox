import React, { Component } from 'react';
import './App.css';
import Post from './Posts/Post';

const myTexts = [
  {
    id: 1,
    title:
      'Choose your preferred pizza toppings and taste the best flavour in town',
    author: 'Pizza Palace',
    description:
      'basil, mushrooms, pepperoncini, artichoke hearts, sun-dried tomatoes, arugula,fresh mozzarella fior di latte, goat cheese, shredded mozzarella, Italian sausage,pepperoni, prosciutto, anchovy',
    image:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=828&q=80',
  },
  {
    id: 2,
    title: 'Variety of burgers and french fries',
    author: 'Burger Palace',
    description: 'Small, big, large, medium, children-portion',
    image:
      'https://cdn.pixabay.com/photo/2019/08/02/15/10/burger-4379863_1280.jpg',
  },
  {
    id: 3,
    title: 'You have not taste the best food yet if you have missed momo',
    author: 'Momo Palace',
    description: 'Chicken, Lamb, Fish, Vegetables, Fried, Boiled, Steamed',
    image:
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
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
  clickHandler = (e) => {
    let likesup = document.querySelector('.far.up');
    let likesdown = document.querySelector('.far.down');
    const oldPosts = [...this.state.posts];
    likesup.classList.toggle('active');
    likesdown.classList.remove('active');
  };
  eventHandler = () => {
    let likesdown = document.querySelector('.far.down');
    let likesup = document.querySelector('.far.up');
    likesdown.classList.toggle('active');
    likesup.classList.remove('active');
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
          like={this.clickHandler.bind(this, index)}
          dislike={this.eventHandler.bind(this, index)}
        />
      );
    });
    return (
      <div className="card-samples">
        <h1>Menu Samples</h1>
        <div className="myCards">{postList}</div>
      </div>
    );
  }
}
export default App;
