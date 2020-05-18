import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavHeader from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import NewPost from './Components/NewPost/NewPost';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="final-content">
      <Router>
        <Container>
          <NavHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/newpost" component={NewPost} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
