import React, { Component } from 'react';
import Title from './Title.jsx';
import boy from './boy.png';
import profilepic from './profilepic.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <Title
          illus={boy}
          title="About Me"
          />

        <img className="img-valign" src={profilepic} alt="" />

      <div className="col">
        <p>
          I am a 23 year old that has studied Computer Science and Mathematics at Northern Arizona University.
          My brother was the one that got me into coding. I have always been around computers as a kid, but mainly only for video games.
          I grew a passion for code based on the simple concept of creating something out of nothing.
        </p>
        <h5>
          Fun Fact #1:
        </h5>
        <p>
          Skateboarding was a big passion for me as a kid.
        </p>
        <h5>
          Fun Fact #2:
        </h5>
        <p>
         I attended a performing arts high school, where I learned how to play the piano and drums.
        </p>
        <h5>
          Fun Fact #3:
        </h5>
        <p>
          I'm insanely good at FPS games such as: CS:GO and PUBG.
        </p>
      </div>


      </div>
    )
  }
}

export default About;
