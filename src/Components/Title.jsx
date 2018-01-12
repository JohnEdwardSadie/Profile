import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1 className="text-justify">
        {this.props.title}
        </h1>
      </div>
    )
  }
}

export default Title;
