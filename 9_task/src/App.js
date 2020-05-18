import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavHeader from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import NewPost from './Components/NewPost/NewPost';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="final-content">
      <Router>
        <Container>
          <NavHeader />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
