import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">profile</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;
