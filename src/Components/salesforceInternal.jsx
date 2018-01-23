import React, { Component } from 'react';
import Title from './Title.jsx';

class salesforceInternal extends Component {
  render() {
    return (
      <div>
        <Title
          title="Intern Project"
          />

          <div className="flex-grid">

        <div className="col">
          <h5>Description</h5>
          <p>
            I was delegated the task of redesigning and recoding the internal website
            of the Lightning Design System.
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
