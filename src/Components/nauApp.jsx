import React, { Component } from 'react';
import Title from './Title.jsx';

class nauApp extends Component {
  render() {
    return (
      <div>
        <Title
          title="Technology Query Application"
          />

          <div className="flex-grid">

        <div className="col">
          <h5>Description</h5>
          <p>
            This application was on every single machine in all of the Northern Arizona University campus.
          </p>
          <p>
            A desktop app that allows students to alert the campus Information Technology Services of any conflicts/questions regarding
            the technology on campus.
          </p>
          <p>
            The user input would contain information about the particular machine they're on, in addition
            to the query they've provided through the applation.
          </p>
          <p>
            The application was created using Java; and Swing as the framework for building the GUI.
          </p>
          <h5>Tools/Languages</h5>
          <p>
            Java, Apache Maven, Eclipse IDE
          </p>
        </div>

    </div>
      </div>
    )
  }
}

export default nauApp;
