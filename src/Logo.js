import './Logo.scss';

import React, { Component } from 'react';

/**
 * Logo component
 */
class Logo extends Component {
  render() {
    return (
      <img className="Logo" src={require('./react.svg')} />
    );
  }
}

export default Logo;
