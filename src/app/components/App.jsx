// App.js

import React, { Component } from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import Home from './Router/Home.jsx';
import About from './Router/About.jsx';
import Users from './Users/Users.jsx';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to='/' className="nav-link"> Home </Link></li>
              <li><Link to='/about' className="nav-link">About</Link></li>
              <li><Link to='/users/1' className="nav-link">User 1 </Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/users/:id' component={Users} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;