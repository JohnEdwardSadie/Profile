import React, { Component } from 'react';
import boy from './boy.png';

class Title extends Component {
  render() {
    return (
      <div className="illus">
        <img className= "images" src={boy}></img>
        <div className="title">
          <h2 className="text-justify">
            {this.props.title}
          </h2>
        </div>
      </div>
    )
  }
}

export default Title;
