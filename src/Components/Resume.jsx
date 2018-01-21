import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ResumePDF from './JohnSadie.pdf';
import Title from './Title.jsx';

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Title
          title="My Resume"
          />

        <div className="container">
    <div className="row">
      <div className="col">
        <h4>Check out my resume</h4>
        {/*<a href="JohnSadie.pdf"><button className="btn">View Full Resume</button></a>*/}
        <div>
          <Document
            file={ResumePDF}
            onLoadSuccess={this.onDocumentLoad}
            className="resume"
          >
          <Page
            pageNumber={pageNumber}
            width="960"
          />
          </Document>
        </div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

export default Resume;
