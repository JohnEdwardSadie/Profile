import React, { Component } from 'react';
import Title from './Title.jsx';

class SayHi extends Component {
  render() {
    return (
      <div>
        <Title
          title="Contact"
          />
        <div className="nonMobile">
        <div className="col">
          <h4>
            Email: johnesadie@gmail.com
          </h4>
        </div>
        <div className="col">
          <h4>
            Phone: 6025159882
          </h4>
        </div>
      </div>

      <div className="Mobile">
      <div className="col">
        <h6>
          Email: johnesadie@gmail.com
        </h6>
      </div>
      <div className="col">
        <h6>
          Phone: 6025159882
        </h6>
      </div>
    </div>
      </div>
    )
  }
}

export default SayHi;
