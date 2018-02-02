import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="illus">
        <img className= "images" src={this.props.illus} alt="illustration"></img>
        <div className="title">
          <h2 className="text-justify">
            {this.props.title}
          </h2>
        </div>
        <div className="border">
        </div>
      </div>
    )
  }
}

export default Title;
