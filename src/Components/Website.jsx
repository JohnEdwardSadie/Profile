import React, { Component } from 'react';
import Title from './Title.jsx';
import wireframe from './wireframe.jpg';

class Website extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Website"
          />

        <div className="flex-grid">

      <div className="col">
        <img className="img-valign" src={wireframe} alt="" />
        <h5>Description</h5>
        <p>
          This was created to act as my virtual resume and personal portfolio. It utilizes the React framework to power the
          routing between each page. It is built with components, custom css, and flexbox.
        </p>
        <h5>Tools/Languages</h5>
        <p>
          HTML, CSS, JavaScript, React
        </p>
      </div>

  </div>
      </div>
    )
  }
}

export default Website;
