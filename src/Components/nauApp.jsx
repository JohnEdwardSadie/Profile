import React, { Component } from 'react';
import Title from './Title.jsx';

class nauApp extends Component {
  render() {
    return (
      <div>
        <Title
          title="Technology Query Application"
          />

        <div className="padding container">
    <div className="row">
      <div className="col">
        <p>
          NAU APP
        </p>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default nauApp;
