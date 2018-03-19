import './Logo.scss';

import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <img className="Logo" src={require('./react.svg')} />
    );
  }
}

export default Logo;
