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
            A desktop app that allows students to alert ITS of any conflicts/questions regarding
            the technology on campus.
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
