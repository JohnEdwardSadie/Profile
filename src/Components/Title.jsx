import React, { Component } from 'react';

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
