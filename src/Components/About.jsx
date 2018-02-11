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


        <div className="flexbox">
        <article className="main">
        <img className="img-valign" src={profilepic} alt="" />
        </article>
        <section className="side">
          <h5>My Name Is John</h5>
        <p>
          The concept of creating something out nothing drives my passion for code and development.
          I've recently graduated with a BA in Computer Science and a minor Mathematics.
          I was always around computers growing up, but mainly used them for gaming and exploring the web. My brother introduced me to coding and I haven't looked back since.
        </p>

        <p>
          I spent some of my formative years in the Philippines. I then was able
          to move to the United States before my teenage years. I like to workout and say I eat healthy, but In-N-Out is really good.
        </p>

        <p>
          Skateboarding was a big passion for me as a kid.
        </p>

        <p>
         I attended a performing arts high school, where I learned how to play the piano and drums.
        </p>

        <p>
          I think I'm good at FPS games such as: CS:GO and PUBG.
        </p>
        </section>
      </div>
      </div>
    )
  }
}

export default About;
