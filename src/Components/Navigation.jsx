import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <ul id="navBar">
            <li className="navButton"><Link to="/Profile">Home</Link></li>
            <li className="navButton"><Link to="/Resume">Resume</Link></li>
            <li className="navButton"><Link to="/Portfolio">Portfolio</Link></li>
            <li className="navButton"><Link to="/SayHi">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;
