import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class Home extends Component {
  render() {
    return (
        <div>
          <h2><FormattedMessage id="HOME.TITLE" defaultMessage="HOME" /></h2>
          <div><FormattedMessage id="HOME.DESCRIPTION" defaultMessage="This is the home page" /></div>
        </div>
    );
  }
}

export default Home;