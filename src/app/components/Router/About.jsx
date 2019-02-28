// About.js
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class About extends Component {
  render() {
    return (
      <div>
        <h2><FormattedMessage id="ABOUT.TITLE" defaultMessage="ABOUT" /></h2>
        <div><FormattedMessage id="ABOUT.DESCRIPTION" defaultMessage="This is the about us page" /></div>
      </div>
    );
  }
}

export default About;