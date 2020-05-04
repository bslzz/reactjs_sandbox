import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import NewPost from './Components/New Post/NewPost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/newpost" component={NewPost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
