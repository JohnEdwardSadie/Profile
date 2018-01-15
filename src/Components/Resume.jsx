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
        <button className="btn">  <a href="#" className="button">View Full Resume</a></button>
      </div>
    )
  }
}

export default Resume;
