// About.js
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
class About extends Component {
  render() {
    return (
      <div>
        <h2><FormattedMessage id="About.title" defaultMessage="ABOUT" /></h2>
        <div><FormattedMessage id="About.description" defaultMessage="This is the about us page" /></div>
      </div>
    );
  }
}

export default About;