// App.js

import React, { Component } from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import Home from './Router/Home.jsx';
import About from './Router/About.jsx';
import Users from './Users/Users.jsx';
import { FormattedMessage } from 'react-intl';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h2><FormattedMessage id="Header.title" defaultMessage="Welcome to React Router Tutorial" /></h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to='/' className="nav-link"> <FormattedMessage id="Home.link" defaultMessage="HOME" /> </Link></li>
              <li><Link to='/about' className="nav-link"><FormattedMessage id="About.link" defaultMessage="ABOUT" /></Link></li>
              <li><Link to='/users/1' className="nav-link"><FormattedMessage id="User.link" defaultMessage="USER" /> </Link></li>
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