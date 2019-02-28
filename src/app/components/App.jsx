// App.js

import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './Crud/create.component.jsx'
import Edit from './Crud/edit.component.jsx';
import List from './Crud/list.component.jsx';
import { FormattedMessage } from 'react-intl';
import ToastrContainer from 'react-toastr-basic';
import { IntlProvider, addLocaleData } from "react-intl";
import translations from "../../i18n/locales";
const language = 'en'; //Default Language (english)

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: language,//Default Language (en or es -> as of now)
      messages: translations[language],
      languages: [
        { value: 'en', name: 'English' },
        { value: 'es', name: 'Spanish' }
      ],
    }
    addLocaleData(require(`react-intl/locale-data/${language}`));
    // Event handlers     
    this.languageChange = this.languageChange.bind(this)
  }
  render() {
    return (
      <IntlProvider locale={this.state.language} messages={this.state.messages}>
        <HashRouter>
          <div className="container">
            <ToastrContainer />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">

                <FormattedMessage id="HEADER.TITLE" defaultMessage="React CRUD Example" />
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">
                      <FormattedMessage id="HEADER.DASHBOARD" defaultMessage="Dashboard" />

                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/list'} className="nav-link">

                      <FormattedMessage id="HEADER.EMPLOYEELIST" defaultMessage="Employees List" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">
                      <FormattedMessage id="HEADER.CREATEEMPLOYEE" defaultMessage="Create Employee" />
                    </Link>
                  </li>

                </ul>
              </div>
              <div>
                <select name='languages' onChange={this.languageChange}>
                  {this.state.languages.map((e, key) => {
                    return <option key={key} value={e.value}>{e.name}</option>;
                  })}
                </select>
              </div>
            </nav> <br />
            <h2><FormattedMessage id="HEADER.WELCOME" defaultMessage="Welcome to React CRUD Tutorial" /></h2> <br />
            <Switch>
              <Route exact path='/create' component={Create} />
              <Route path='/create/:id' component={Create} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/list' component={List} />
            </Switch>
          </div>

        </HashRouter>
      </IntlProvider>
    );
  }
  languageChange(e) {
    let self = this;
    this.language = e.target.value;
    self.setState({
      language: this.language,
      messages: translations[this.language]
    });
    addLocaleData(require(`react-intl/locale-data/${this.language}`));
  }
}
export default App;
