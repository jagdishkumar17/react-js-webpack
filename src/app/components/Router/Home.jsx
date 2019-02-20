import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class Home extends Component {
  render() {
    return (
        <div>
          <h2><FormattedMessage id="Home.title" defaultMessage="HOME" /></h2>
          <div><FormattedMessage id="Home.description" defaultMessage="This is the home page" /></div>
        </div>
    );
  }
}

export default Home;