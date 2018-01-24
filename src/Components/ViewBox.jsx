import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import SayHi from './SayHi.jsx';
import Website from './Website.jsx';
import nauApp from './nauApp.jsx';
import salesforceInternal from './salesforceInternal';


class ViewBox extends Component {
  render() {
    return (
      <div>
      <div className="card col-xs-1" align="center">
        <Route name="home" exact path="/Profile" component={HomePage} />
        <Route name="resume" exact path="/Resume" component={Resume} />
        <Route name="portfolio" exact path="/Portfolio" component={Portfolio} />
        <Route name="sayhi" exact path="/SayHi" component={SayHi} />
        <Route name="website" exact path="/Website" component={Website} />
        <Route name="nauApp" exact path="/nauApp" component={nauApp} />
        <Route name="salesforceInternal" exact path="/salesforceInternal" component={salesforceInternal} />
      </div>
    </div>
    )
  }
}

export default ViewBox;
