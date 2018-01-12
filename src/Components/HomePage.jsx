import React, { Component } from 'react';
import Title from './Title.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title
          title="Hi, I'm John!"
          />

        <div className="padding container">
    <div className="row">
      <div className="col">
        <p>
          I am a creative thinker and developer currently looking for employment. <br></br>
          I enjoy UI/UX things. I have interned at Salesforce as a UX Engineer working on the Lightning Design System.
        </p>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default HomePage;
