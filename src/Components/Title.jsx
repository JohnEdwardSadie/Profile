import React, { Component } from 'react';

class Title extends Component {

  render() {

    return (
      <div className="illus">
        {this.props.illus != undefined &&
          <img className= "images icons" src={this.props.illus}></img>
        }

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
