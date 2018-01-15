import React, { Component } from 'react';
import Title from './Title.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Website"
          />

        <div className="padding container">
    <div className="row">
      <div className="col">
        <p>
          This was created to act as my virtual resume and personal portfolio.
        </p>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default HomePage;
