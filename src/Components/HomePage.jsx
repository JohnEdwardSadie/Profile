import React, { Component } from 'react';
import Title from './Title.jsx';
import boy from './boy.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Title
          title="Welcome To My Site!"
          />

        <div className="container">
    <div className="row">
      <div className="col">
        <p>
          I am a 23 year old always trying to learn new technologies, skills, and languages. <br></br>This way, I can stay in the forefront of the evolving tech atmosphere.<br></br>
        I like UI/UX. I have interned at Salesforce as a UX Engineer working on the Lightning Design System.
        </p>
      </div>
    </div>
  </div>

      </div>
    )
  }
}

export default HomePage;
