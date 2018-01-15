import React, { Component } from 'react';
import Title from './Title.jsx';
import { Link } from 'react-router-dom';
import Profile from './Profile.jsx';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Title
          title="My Portfolio"
          />
        <div className="container">
          <div class="row">

            <div class="col-xs-6 col-md-4">
              <div className="porfolioCard">
                <h4>Profile</h4>
                <p>This site was created to act as my virtual resume and portfolio.</p>
                <Link className="btn" to="/Profile">Learn More</Link>
              </div>
            </div>

            <div class="col-xs-6 col-md-4"></div>
            <div class="col-xs-6 col-md-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
