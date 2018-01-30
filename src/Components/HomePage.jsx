import React, { Component } from 'react';
import Title from './Title.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title
          title="Hi, I'm John Sadie!"
          />

        <div className="padding container">
    <div className="row">
      <div className="col">
        <p>
          I am a developer always trying to learn new technologies, skills, and languages. <br></br>This way, I can stay in the forefront of the evolving tech atmosphere.<br></br>
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
