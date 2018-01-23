import React, { Component } from 'react';
import Title from './Title.jsx';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Portfolio"
          />

        <div className="flex-grid">
          <div className="col">
            <div className="porfolioCard">
                <h4>Profile</h4>
                <p>This site was created by me to act as my virtual resume and portfolio. </p>
                <Link className="btn" to="/Profile">Learn More</Link>
            </div>
          </div>
          <div className="col">
            <div className="porfolioCard">
               <h4>NAU App</h4>
               <p>Allows students to alert ITS of any conflicts/questions about technology.</p>
               <Link className="btn" to="/nauApp">Learn More</Link>
             </div>
           </div>
           <div className="col">
             <div className="porfolioCard">
                <h4>Salesforce</h4>
                <p>Redesign and recode of the internal Lightning Design System website.</p>
                <Link className="btn" to="/salesforceInternal">Learn More</Link>
              </div>
            </div>
          </div>
    </div>

    )
  }
}

export default Portfolio;
