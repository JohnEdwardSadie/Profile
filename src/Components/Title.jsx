import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    return (
      <div>
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
