import React, { Component } from 'react';
import Title from './Title.jsx';

class Resume extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Resume"
          />
        <h3>Check out my resume!</h3>
        <a href="/"><button className="btn">View Full Resume</button></a>
    
      </div>
    )
  }
}

export default Resume;
