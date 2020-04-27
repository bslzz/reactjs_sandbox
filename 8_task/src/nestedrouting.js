import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link,
} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Hello from HomePage</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>Hello from About page</h1>
    </div>
  );
};

const Courses = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Hello from Course page</h1>
      <ul>
        <li>
          <Link to={`${url}/html&css`}>HTML and CSS</Link>
        </li>
        <li>
          <Link to={`${url}/javascript`}>Javascript</Link>
        </li>
        <li>
          <Link to={`${url}/reactjs`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/about`} component={About} />
        <Route path={`${path}/:courseId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  let { courseId } = useParams();
  return <h1>This is {courseId}page</h1>;
};

const Nestedrouting = () => {
  return (
    <Router>
      <Nav />

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </main>
    </Router>
  );
};

export default Nestedrouting;
