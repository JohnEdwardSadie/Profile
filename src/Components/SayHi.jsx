import React, { Component } from 'react';
import Title from './Title.jsx';

class SayHi extends Component {
  render() {
    return (
      <div>
        <Title
          title="Say Hi"
          />

        <div className="container">
    <div className="row">
      <div className="col">
        <p>
          Contact Me
        </p>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default SayHi;
