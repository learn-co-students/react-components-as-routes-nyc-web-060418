import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Login from './Login'

ReactDOM.render((
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </Fragment>
  </Router>
),
  document.getElementById('root')
);
