import React, { Component } from 'react';
import Title from './Title.jsx';

class Website extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Website"
          />

        <div className="flex-grid">

      <div className="col">
        <h5>Description</h5>
        <p>
          This was created to act as my virtual resume and personal portfolio.
        </p>
        <h5>Tools/Languages</h5>
        <p>
          HTML, CSS, JavaScript, React
        </p>
      </div>

  </div>
      </div>
    )
  }
}

export default Website;
