import React, { Component } from 'react';
import Title from './Title.jsx';
import internpic from './internpic.png';

class salesforceInternal extends Component {
  render() {
    return (
      <div>
        <Title
          title="Intern Project"
          />

          <div className="flex-grid">


        <div className="col">
          <img className="img-valign" src={internpic} alt="" />
          <h5>Description</h5>
          <p>
            I was delegated the task of redesigning and recoding the internal website
            of the Lightning Design System.
          </p>
          <p>
            The parent site(<a href="https://lightningdesignsystem.com/" target="_blank" rel="noopener noreferrer">Lightning Design System</a>) was being redesigned at the time.
            I attended numerous design meetings for the parent site, as well as worked on the parent site. This way, I can ensure that the redesign of the internal site
            contained the same feeling and look as the parent site.
          </p>
          <p>
            I began by sketching wireframes on a notebook with just a pencil. I drew multiple concepts with varying designs and would ask for feedback from design teams and our development team.
            Furthermore, I used Sketch to actually wireframe the concepts. Through multiple iterations from feedback, I was able to get to one design and begin writing code.
          </p>
          <h5>Tools/Languages</h5>
          <p>
            HTML, CSS, JavaScript, React, Sketch, Heroku
          </p>
        </div>

    </div>
      </div>
    )
  }
}

export default salesforceInternal;
