import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Title extends Component {
  render() {
    return (
      <div>
      <div className="title">
        <h1 className="text-justify">
        {this.props.title}
        </h1>
      </div>
      </div>
    )
  }
}

export default Title;
