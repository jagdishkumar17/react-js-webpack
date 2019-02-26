// App.js

import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Crud/create.component.jsx'
import Edit from './Crud/edit.component.jsx';
import List from './Crud/list.component.jsx';
import { FormattedMessage } from 'react-intl';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">

              <FormattedMessage id="Header.title" defaultMessage="React CRUD Example" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">
                    <FormattedMessage id="Header.Dashboard" defaultMessage="Dashboard" />

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/list'} className="nav-link">

                    <FormattedMessage id="Header.EmployeesList" defaultMessage="Employees List" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">

                    <FormattedMessage id="Header.CreateEmployee" defaultMessage="Create Employee" />
                  </Link>
                </li>

              </ul>
            </div>
          </nav> <br />
          <h2>Welcome to React CRUD Tutorial</h2> <br />
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/create/:id' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/list' component={List} />
          </Switch>
        </div>

      </HashRouter>
    );
  }
}

export default App;
