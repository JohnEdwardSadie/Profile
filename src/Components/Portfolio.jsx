import React, { Component } from 'react';
import Title from './Title.jsx';
import { Link } from 'react-router-dom';
import portfolio from './portfolio.png';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Title
          illus={portfolio}
          title="My Portfolio"
          />
          <div className="flex-grid">
         <div className="col">

               <h4>Profile</h4>
               <p>This site was created by me to act as my virtual resume and portfolio. </p>
               <Link className="btn" to="/Website">Learn More</Link>

         </div>
         <div className="col">

              <h4>NAU App</h4>
              <p>Students can alert ITS of any conflicts/questions about technology.</p>
              <Link className="btn" to="/nauApp">Learn More</Link>

          </div>
          <div className="col">

               <h4>Salesforce</h4>
               <p>Redesign and recode of the internal Lightning Design System website.</p>
               <Link className="btn" to="/salesforceInternal">Learn More</Link>

           </div>
         </div>




    </div>

    )
  }
}

export default Portfolio;
